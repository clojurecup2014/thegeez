(ns net.thegeez.datominoes.render
  (:require [datascript :as d]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]
            [goog.math :as gmath]
            [net.thegeez.datominoes.dom-helpers :as dom]
            [net.thegeez.datominoes.animator :as animator]
            [net.thegeez.datominoes.transact :as t]))

(def dot-mapping {0 [[0 0 0]
                     [0 0 0]
                     [0 0 0]]
                  1 [[0 0 0]
                     [0 1 0]
                     [0 0 0]]
                  2 [[1 0 0]
                     [0 0 0]
                     [0 0 1]]
                  3 [[1 0 0]
                     [0 1 0]
                     [0 0 1]]
                  4 [[1 0 1]
                     [0 0 0]
                     [1 0 1]]
                  5 [[1 0 1]
                     [0 1 0]
                     [1 0 1]]
                  6 [[1 0 1]
                     [1 0 1]
                     [1 0 1]]})

(defn dots [number]
  (for [i (range 3)
        j (range 4)
        :when (pos? (get-in dot-mapping [number i j]))]
    (dom/element :div {:class (str "dot dot" i j)})))

(defn stone-element [stone-id up down]
  (dom/element :div {:id stone-id
                     :class "stone south back preloading"}
               (apply dom/element :div {:class "face up"}
                      (dots up))
               (apply dom/element :div {:class "face down"}
                      (dots down))))

(defn in-our-region [x y]
  (< 462 y))

(defn match [stone place]
  (println "stone" stone "place" place)
  (if-not (:place/for place)
    :south ;; first place can be used with any stone to start the game
    (let [su (:stone/up stone)
          sd (:stone/down stone)
          ps (:place/for place)
          po (:place/orientation place)
          pso (:stone/orientation ps)
          pu (:stone/up ps)
          pd (:stone/down ps)]
      (println "match " su sd po pu pd)
      (cond
       (and (= po :north)
            (= pso :south)
            (= su pu))
       :north
       (and (= po :north)
            (= pso :south)
            (= sd pu))
       :south
       (and (= po :south)
            (= pso :south)
            (= su pd))
       :south
       (and (= po :south)
            (= pso :south)
            (= sd pd))
       :north
       :else
       nil))))

(def z-level (atom 100))

(defn show-on-top [stone]
  (set! (.. stone -style -zIndex) (swap! z-level inc)))

(defn set-drag-handler [stone-el handler]
  (let [cursor (:cursor handler)]
    (if (= cursor :hand)
      (dom/add-class stone-el "cursor_hand")
      (dom/remove-class stone-el "cursor_hand"))
    (set! (. stone-el -drag-handler) handler)))

(defn undraggable-handler [db conn]
  {:cursor :none
   :drag-start (fn [stone-id event]
                 (. event (preventDefault)))
   :drag (fn [stone-id event])
   :drag-end (fn [stone-id event])})

(defn home-region-handler [db conn]
  {:cursor :hand
   :drag-start (fn [stone-id event]
                 (let [stone-el (dom/get-element stone-id)]
                   (dom/add-remove-class stone-el "cursor_drag" "cursor_hand")

                   (set! (. stone-el -drag-origin) (dom/get-position stone-el))
                                      (println "here?")
                   (show-on-top stone-el)))
   :drag (fn [stone-id event])
   :drag-end (fn [stone-id event]
               (let [stone-el (dom/get-element stone-id)
                     [x y] (dom/get-position stone-el)]
                 (dom/add-remove-class stone-el "cursor_hand" "cursor_drag")
                 (when-not (in-our-region x y)
                   (animator/slide stone-el (. stone-el -drag-origin)))))})

(defn home-drag-handler [db conn]
  (let [places (for [[id] (d/q '{:find [?p]
                                 :where [[?g :game/name]
                                         [?g :table/places ?p]
                                         [?p :place/used true]]}
                               db)]
                 (d/entity db id))
        place-regions (into {}
                            (for [place places]
                              [(if (#{:south :north} (:place/orientation place))
                                 [[(:place/left place) (+ (:place/left place) 24)]
                                  [(:place/top place) (+ (:place/top place) 46)]]
                                 [[(:place/left place) (+ (:place/left place) 46)]
                                  [(:place/top place) (+ (:place/top place) 24)]])
                               place]))
        place-els (map :dom/el places)
        hit (fn [event]
              (let [x (.-clientX event)
                    y (.-clientY event)]
                (some
                 (fn [[[[xl xr] [yt yb]] place]]
                   (println "hit? " [[xl xr] [yt yb]] x y)
                   (when (and (<= xl x xr)
                              (<= yt y yb))
                     place))
                 place-regions)))
        base (home-region-handler db conn)]
    (assoc base
      :drag-end (fn [stone-id event]
                  (doseq [place-el place-els]
                    (dom/remove-class place-el "dropable"))
                  (let [stone
                        (d/entity db (ffirst (d/q '{:find [?e]
                                                    :in [$ ?stone-id]
                                                    :where [[?e :dom/id ?stone-id]]}
                                                  db stone-id)))
                        hit (hit event)]
                    (if-let [turn (and hit
                                      (match stone hit))]
                      (let [stone-el (:dom/el stone)]
                        (dom/remove-class stone-el "cursor_drag")
                        (set-drag-handler stone-el (undraggable-handler db conn))
                        (animator/slide stone-el [(:place/left hit) (:place/top hit)]
                                        (fn []
                                          (d/transact! conn [[:db.fn/call t/stone-placed (:db/id stone) (:db/id hit)]]))))
                      ((:drag-end base) stone-id event))))
      :drag (fn [stone-id event]
              (doseq [place-el place-els]
                (dom/remove-class place-el "dropable"))
              (let [stone
                    (d/entity db (ffirst (d/q '{:find [?e]
                                                :in [$ ?stone-id]
                                                :where [[?e :dom/id ?stone-id]]}
                                              db stone-id)))
                    hit (hit event)]
                (if-let [turn (and hit
                                   (match stone hit))]
                  (do
                    (turn-stone stone turn)
                    (dom/add-class (:dom/el hit) "dropable"))
                  (turn-stone stone :south))
                (println "DRAG :)" hit "---" place-regions "--" x y ))))))

(defn set-msg [msg]
  (println "MSG: " msg)
  (dom/set-text (dom/get-element "msg") msg))

(defn anim-deal [db conn]
  (let [game (t/find-game db)
        stock-stones (:table/stock game)
        our-stones (:player/stones (:game/player1 game))
        their-stones (:player/stones (:game/player2 game))
        stock-deal (map (fn [idx {el :dom/el}]
                        [false
                         el
                         [(+ 24 (* (rand) 75)) (+ 84 (* (rand) 54))]
                         (fn []
                           (dom/remove-class el "preloading")
                           (set-drag-handler el (undraggable-handler db conn)))])
                      (range)
                      (concat stock-stones
                              our-stones
                              their-stones))
        our-deal (map (fn [idx {el :dom/el}]
                        [true
                         el
                         [(+ 300 (* idx 26)) 464]
                         (fn []
                           (dom/remove-class el "back")
                           (set-drag-handler el (home-region-handler db conn)))])
                      (range)
                      our-stones)

        their-deal (map (fn [idx {el :dom/el}]
                        [true
                         el
                         [(+ 300 (* idx 26)) 14]])
                      (range)
                      their-stones)
        actions (concat stock-deal
                        our-deal
                        their-deal)
        step (fn step [[action & actions]]
               (when action
                 (let [[slide el to f] action]
                   (show-on-top el)
                   (if false #_slide ;; for dev speedup
                     (animator/slide el to
                                     (fn []
                                       (when f (f))
                                       (step actions)))
                     (do (apply dom/set-position el to)
                         (when f (f))
                         (step actions))))))]
    (step actions)))

(defn place-class [place]
  (get {:south "vertical"
        :north "vertical"
        :west "horizontal"
        :east "horizontal"} (:place/orientation place)))

(defn turn-stone [stone orientation]
  (let [el (:dom/el stone)]
    (doto el
      (dom/remove-class "south")
      (dom/remove-class "west")
      (dom/remove-class "north")
      (dom/remove-class "east"))
    (condp = orientation
      (dom/add-class el (name orientation)))))

(defn draw [report conn]
  (let [db (:db-after report)
        game (t/find-game db)]
    (println "Game: " (d/touch game))
    (cond
     (not (:game/stage game))
     (set-msg "Game created.")
     (= :deal (:game/stage game))
     (do (set-msg "Dealing ...")
         (anim-deal db conn))
     (= :playing (:game/stage game))
     (if (= (:game/turn game) (:game/player1 game)) 
       (do (set-msg "It's your turn, attach a stone on the table or pick from the stock if possible")
           (println "Draw tree" (:table/places game))
           (doseq [stone (:player/stones (:game/player1 game))]
             (set-drag-handler (:dom/el stone) (home-drag-handler db conn)))
           (doseq [place (map d/touch (:table/places game))]
             (if (:place/used place) 
               (doto (:dom/el place)
                 (dom/remove-class "unused")
                 (dom/add-class (place-class place))
                 (dom/set-position (:place/left place) (:place/top place)))
               (doto (:dom/el place)
                 (dom/remove-class (place-class place))
                 (dom/add-class "unused")))))
       (do (set-msg "Opponent to move")
           (doseq [stone (:player/stones (:game/player1 game))]
             (set-drag-handler (:dom/el stone) (home-region-handler db conn))))))))


(defn draw-table [conn]
  (let [db @conn]
    (doto (.-body js/document)
      (dom/append (dom/build [:div {:id "table"}
                              [:div {:id "their_region"
                                     :class "region their_region"}]
                              [:div.stock {:id "stock"}]
                              [:div {:id "our_region"
                                     :class "region our_region"}]]))
      (dom/append (dom/build [:div.msg {:id "msg"}]))
      (dom/append (dom/build [:div {:id "footer"}
                              "Datominoes for "
                              [:a {:href "http://clojurecup.com"} " clojurecup 2014"]
                              [:span " by "]
                              [:a {:href "http://thegeez.net"} "thegeez.net"]
                              [:span " - "]
                              [:a {:href "http://twitter.com/thegeez"} " @thegeez"]]))))
  (let [container-wrap (let [r (dom/get-bounds (dom/get-element "table"))]
                         (goog.math.Rect. (+ (. r -left) 4) (+ (. r -top) 4)
                                          (- (. r -width) 3 51) (- (. r -height) 3 51)))
        stones (for [down (range 7)
                     up (range down 7)]
                 (let [idx (+ down (* up 7))
                       stone-id (str "stone-" (+ (* up 10) down))
                       stone-el (stone-element stone-id up down)
                       dragger (doto (goog.fx.Dragger. stone-el)
                                 (.setLimits container-wrap))]
                   (set! (. stone-el -dispose) #(.-dispose dragger))
                   (set-drag-handler stone-el
                                     (undraggable-handler db conn))
                   (events/listen dragger
                                  fxdrag/EventType.START
                                  (fn [event]
                                    ((:drag-start (. stone-el -drag-handler)) stone-id event)))
                   (events/listen dragger
                                  fxdrag/EventType.DRAG
                                  (fn [event]
                                    ((:drag (. stone-el -drag-handler)) stone-id event)))
                   (events/listen dragger
                                  fxdrag/EventType.END
                                  (fn [event]
                                    ((:drag-end (. stone-el -drag-handler)) stone-id event)))
                   {:id stone-id
                    :idx idx
                    :stone-el stone-el
                    :up up
                    :down down}))
        places (for [i (range 20)]
                 (let [id (str "place-" i)]
                   {:id id
                    :place-el (dom/element :div {:id id
                                                 :class "place unused"})}))]
    (doseq [{:keys [stone-el idx]} stones]
      (set! (.-anim-idx stone-el) idx)
      (dom/append (dom/get-element "table") stone-el))
    (doseq [place places]
      (dom/append (dom/get-element "table") (:place-el place)))
    (let [game-eid (:db/id (t/find-game @conn))]
      (d/transact! conn
                   (-> []
                       (into (for [{:keys [id stone-el up down]} stones]
                               {:db/id (d/tempid :db)
                                :dom/id id
                                :dom/el stone-el
                                :table/_stock game-eid
                                :stone/orientation :south
                                :stone/up up
                                :stone/down down}))
                       (into (for [{:keys [id place-el]} places]
                               {:db/id (d/tempid :db)
                                :dom/id id
                                :dom/el place-el
                                :table/_places game-eid
                                :place/left 380
                                :place/top 240
                                :place/used false
                                :place/orientation :south})))))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (draw report conn)))
  (draw-table conn))
