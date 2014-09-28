(ns net.thegeez.datominoes.transact
  (:require [datascript :as d]))

(defn init []
  (let [game-eid (d/tempid :db)
        p1-eid (d/tempid :db)
        p2-eid (d/tempid :db)
        stock-eid (d/tempid :db)
        string-eid (d/tempid :db)]
    [{:db/id game-eid
      :game/name "local-game"
      :game/player1 p1-eid
      :game/player2 p2-eid}]))

(defn log-event [db event & args]
  [{:db/id (d/tempid :db)
    :event event
    :args args}])

(defn find-game [db]
  (->> (ffirst (d/q '{:find [?e]
                      :where [[?e :game/name]]}
                    db))
       (d/entity db)))

(defn create-game [db player1-name player2-name us]
  (let [game (find-game db)]
    (println "game" (d/touch game))
    [[:db.fn/call log-event :game-created player1-name player2-name]
     {:db/id (:db/id (:game/player1 game))
      :player/name player1-name}
     {:db/id (:db/id (:game/player2 game))
      :player/name player2-name}]))

(defn shuffle-set [s n]
  (let [ss (seq s)]
    (if (and ss
             (< 0 n))
      (let [pick (rand-nth ss)]
        (cons pick (shuffle-set (disj s pick) (dec n))))
      s)))

(defn deal [db]
  (let [_ (println "deal")
        game (find-game db)
        game-eid (:db/id game)
        p1-eid (:db/id (:game/player1 game))
        p2-eid (:db/id (:game/player2 game))
        stones (-> (:table/stock game)
                   (shuffle-set 14))
        [player1-stones stones] (split-at #_7 18 stones)
        [player2-stones stock] (split-at 7 stones)
        place-eid (:db/id (first (:table/places game)))]
    (into [[:db.fn/call log-event :deal]
           {:db/id game-eid
            :game/stage :deal}
           {:db/id place-eid
            :place/used true
            :place/root true
            :place/orientation :south}]
          (mapcat identity
                  (for [[player-eid player-stones]
                        [[p1-eid player1-stones]
                         [p2-eid player2-stones]]
                        ps player-stones]
                    [[:db/add player-eid
                      :player/stones (:db/id ps)]
                     [:db/retract game-eid
                      :table/stock (:db/id ps)]])))))

(defn assign-turn [db]
  (let [game (find-game db)
        game-eid (:db/id game)
        p1-eid (:db/id (:game/player1 game))
        p2-eid (:db/id (:game/player2 game))
        current-turn (:db/id (:game/turn (find-game db)))
        turn (get {nil p1-eid
                   p1-eid p1-eid #_p2-eid ;; dev
                   p2-eid p1-eid} current-turn)]
    [[:db.fn/call log-event :assign-turn]
     {:db/id  game-eid
      :game/turn turn
      :game/stage :playing}]))

(defn turn-stone [db stone-eid orientation]
  (println "turn-stone" stone-eid)
  (let [stone (d/entity db stone-eid)]
    [{:db/id stone-eid
      :stone/up (:stone/down stone)
      :stone/down (:stone/up stone)
      :stone/orientation orientation}]))

(defn stone-placed [db stone-eid place-eid]
  (println "Placed" stone-eid place-eid )
  (let [game (find-game db)
        game-eid (:db/id game)
        stone (d/entity db stone-eid)
        place (d/entity db place-eid)
        place-eids (map first
                        (d/q '{:find [?e]
                               :where [[_ :table/places ?e]
                                       [?e :place/used false]]}
                             db))
        new-places (if-let [from (:place/for place)]
                     (cond
                      (= (:stone/up stone)
                         (:stone/down stone))
                      []
                      (= (:place/orientation place) :south) 
                      (let [place-eids (take 3 place-eids)]
                        (for [[eid [dl dt face orientation]]
                              (map vector
                                   place-eids
                                   [[-46 22 :stone/down :west]
                                    [0 46 :stone/down :south]
                                    [24 22 :stone/down :east]])]
                          {:db/id eid, :place/used true, :place/top (+ (:place/top place) dt), :place/left (+ (:place/left place) dl), :place/orientation orientation, :place/for stone-eid, :place/attached face}
                          ))
                      (= (:place/orientation place) :north) 
                      (let [place-eids (take 3 place-eids)]
                        (for [[eid [dl dt face orientation]]
                              (map vector
                                   place-eids
                                   [[-46 0 :stone/up :west]
                                    [0 -46 :stone/up :north]
                                    [24 0 :stone/up :east]])]
                          {:db/id eid, :place/used true, :place/top (+ (:place/top place) dt), :place/left (+ (:place/left place) dl), :place/orientation orientation, :place/for stone-eid, :place/attached face}
                          ))
                      (= (:place/orientation place) :east) 
                      (let [place-eids (take 3 place-eids)]
                        (for [[eid [dl dt face orientation]]
                              (map vector
                                   place-eids
                                   [[24 -46 :stone/down :north]
                                    [46 0 :stone/down :east]
                                    [24 24 :stone/down :south]])]
                          {:db/id eid, :place/used true, :place/top (+ (:place/top place) dt), :place/left (+ (:place/left place) dl), :place/orientation orientation, :place/for stone-eid, :place/attached face}
                          ))

                       :else 
                       (do 
                         (println "PLaces has from " from)
                         []))
                     (if (= (:stone/up stone)
                            (:stone/down stone))
                       (do
                         (println "Places for double" (d/touch stone))
                         [])
                       (let [place-eids (take 2
                                              (map first
                                                   (d/q '{:find [?e]
                                                          :where [[_ :table/places ?e]
                                                                  [?e :place/used false]]}
                                                        db)))]
                         (for [[eid [dl dt face orientation]]
                               (map vector
                                    place-eids
                                    (if (#{:south :north} (:stone/orientation stone))
                                      [#_[-46 0 :stone/up :west]
                                       [0 -46 :stone/up :north]
                                       #_[24 0 :stone/up :east]
                                       #_[-46 22 :stone/down :west]
                                       [0 46 :stone/down :south]
                                       #_[24 22 :stone/down :east]]
                                      ;;todo
                                      []
                                      ))]
                           {:db/id eid
                            :place/used true
                            :place/top (+ (:place/top place) dt)
                            :place/left (+ (:place/left place) dl)
                            :place/orientation orientation
                            :place/for stone-eid
                            :place/attached face}
                           ))))]
    (println "Place" new-places)
    (->
     [[:db.fn/call log-event :stone-placed stone-eid place-eid]
      [:db/add place-eid :place/used false]
      [:db/retract (:db/id (first (:player/_stones stone))) :player/stones stone-eid]]
     (into (mapcat (fn [new-place]
                     (println "new-place" new-place)
                     [[:db/add game-eid :table/places (:db/id new-place)]
                      new-place])
                   new-places)))))


(def schema
  {:game/player1 {:db/valueType :db.type/ref}
   :game/player2 {:db/valueType :db.type/ref}
   :game/turn {:db/valueType :db.type/ref}
   :table/stock {:db/valueType :db.type/ref
                 :db/cardinality :db.cardinality/many}
   :table/places {:db/valueType :db.type/ref
                  :db/cardinality :db.cardinality/many}
   :player/stones {:db/valueType :db.type/ref
                   :db/cardinality :db.cardinality/many}
   :place/for {:db/valueType :db.type/ref}})
