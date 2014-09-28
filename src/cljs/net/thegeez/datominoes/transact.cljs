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

(defn game-created [db player1-name player2-name us]
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
        stones (-> (:table/stock game)
                   (shuffle-set 14))
        [player1-stones stones] (split-at 7 stones)
        [player2-stones stock] (split-at 7 stones)]
    (into [[:db.fn/call log-event :deal]
           [:db/add game-eid :game/stage :deal]]
          (mapcat identity
                  (for [[player-eid player-stones]
                        [[(:db/id (:game/player1 game)) player1-stones]
                         [(:db/id (:game/player2 game)) player2-stones]]
                        ps player-stones]
                    [[:db/add player-eid
                      :player/stones (:db/id ps)]
                     [:db/retract game-eid
                      :table/stock (:db/id ps)]])))))

(def schema
  {:game/player1 {:db/valueType :db.type/ref}
   :game/player2 {:db/valueType :db.type/ref}
   :table/stock {:db/valueType :db.type/ref
                 :db/cardinality :db.cardinality/many}
   :player/stones {:db/valueType :db.type/ref
                   :db/cardinality :db.cardinality/many}})
