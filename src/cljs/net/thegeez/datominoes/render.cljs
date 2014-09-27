(ns net.thegeez.datominoes.render
  (:require [datascript :as d]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]
            [goog.math :as gmath]
            [net.thegeez.datominoes.dom-helpers :as dom]
            [net.thegeez.datominoes.animator :as animator]))

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
                     :class "stone vertical"}
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
                           (goog.math.Rect. (. r -left) (. r -top) (- (. r -width) 0) (- (. r -height) 0)))
        stones (for [up (range 7)
                     down (range up)]
                 (let [idx (+ up (* down 7))
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
    (d/transact! conn (for [{:keys [id idx stone-el]} stones]
                        {:db/id (d/tempid :db)
                         :dom/id id
                         :dom/el stones-el
                         :stone/up up
                         :stone/down down
                         :stone/orientation :south}))))

(defn start-game-panel [conn]
  #_(d/listen! conn (fn [report]
                    (draw-game report conn)))
  (draw-table conn))
