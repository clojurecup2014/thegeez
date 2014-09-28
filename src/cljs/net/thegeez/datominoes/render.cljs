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
                     :class "stone vertical back"}
               (apply dom/element :div {:class "face up"}
                      (dots up))
               (apply dom/element :div {:class "face down"}
                      (dots down))))

(defn in-our-region [x y]
  (println "x y" x y)
  (< x 300))

(def z-level (atom 100))

(defn show-on-top [stone]
  (set! (.. stone -style -zIndex) (swap! z-level inc)))

(defn set-drag-handler [stone-el handler]
  (let [cursor (:cursor handler)]
    (if (= cursor :hand)
      (dom/add-class stone-el "cursor_hand")
      (dom/remove-class stone-el "cursor_hand"))
    (set! (. stone-el -drag-handler) handler)))

(defn undraggable-handler [conn]
  {:cursor :none
   :drag-start (fn [stone-id event]
                 (. event (preventDefault)))
   :drag (fn [stone-id event])
   :drag-end (fn [stone-id event])})

(defn home-region-handler [conn]
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

(defn set-msg [msg]
  (println "MSG: " msg)
  (dom/set-text (dom/get-element "msg") msg))

(defn anim-deal [db conn]
  (let [game (t/find-game db)

        our-stones (:player/stones (:game/player1 game))
        _ (println "our-stones" our-stones)
        our-deal (map (fn [idx {el :dom/el}]
                        [el
                         [(+ 120 (* idx 53)) (+ 300 (* idx 4))]
                         (fn []
                           (dom/remove-class el "back")
                           (set-drag-handler el (home-region-handler conn)))])
                      (range)
                      our-stones)
        their-stones (:player/stones (:game/player2 game))
        their-deal (map (fn [idx {el :dom/el}]
                        [el
                         [(+ 120 (* idx 53)) (+ 30 (* idx 4))]])
                      (range)
                      their-stones)
        actions (concat our-deal
                        their-deal)
        step (fn step [[action & actions]]
               (when action
                 (let [[el to f] action]
                   (show-on-top el)
                   (animator/slide el to
                                   (fn []
                                     (when f (f))
                                     (step actions))))))]
    (step actions)))


(defn draw [report conn]
  (let [db (:db-after report)
        game (t/find-game db)]
    (cond
     (not (:game/stage game))
     (set-msg "Game created.")
     (= :deal (:game/stage game))
     (do (set-msg "Dealing ...")
         (anim-deal db conn)))))


(defn draw-table [conn]
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
                            [:a {:href "http://twitter.com/thegeez"} " @thegeez"]])))
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
                                     (home-region-handler conn)
                                     

                                     #_(undraggable-handler conn))
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
                    :stone-el stone-el}))]
    (doseq [{:keys [stone-el idx]} stones]
      (set! (.-anim-idx stone-el) idx)
      (dom/append (dom/get-element "stock") stone-el))
    (let [game-eid (:db/id (t/find-game @conn))]
      (println "game-eid" game-eid)
      (d/transact! conn (for [{:keys [id idx stone-el]} stones]
                          {:db/id (d/tempid :db)
                           :dom/id id
                           :dom/el stone-el
                           :table/_stock game-eid
                           :stone/orientation :south})))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (draw report conn)))
  (draw-table conn))
