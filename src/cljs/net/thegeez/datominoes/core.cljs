(ns net.thegeez.datominoes.core
  (:require [clojure.string :as str]
            [cljs.core.async :as async]
            [goog.events :as gevents]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(def app-state
  {:stones
   (into {}
         (for [up (range 7)
               down (range up)]
           (let [id (+ (* up 10) down)]
             [id {:id id
                  :up up
                  :down down
                  :orientation :vertical}])))
   :places
   {1 {:id 1
       :left 380
       :top 230
       :orientation :horizontal}
    2 {:id 2
       :left 310
       :top 150
       :orientation :vertical}}})

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

(defn face [[face number orientation] owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className (str "face " (name face))}
             (for [i (range 3)
                   j (range 3)
                   :when (pos? (get-in dot-mapping [number i j]))]
               (dom/div #js {:className (str "dot " "dot" i j)}))))))

(defn faces [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (apply dom/div {:className "faces"}
             (for [f [:up :down]]
               (om/build face [f (get cursor f) (:orientation cursor)]))))))

(defn stone [cursor owner]
  (reify
    om/IRender
    (render [_]
      (let [[id {:keys [top left orientation]}] cursor
            dragging (om/get-state owner :dragging)]
        (dom/div #js {:className (str "stone " (name orientation)
                                      (when dragging
                                        " dragging"))
                      :style (if dragging
                               #js {:border "3px solid black"
                                    :top top 
                                    :left left }
                               #js {#_#_:border "3px solid green"
                                    :top top
                                    :left left })}
                 (om/build faces (-> (select-keys (val cursor) [:up :down])
                                     (assoc :orientation orientation))))))
    om/IDidMount
    (did-mount [_]
      (let [moves (async/chan (async/sliding-buffer 1))
            out (async/chan)
            stone-id (first cursor)]
        (go-loop []
          (async/>! out (async/<! moves))
          (async/<! (async/timeout 16))
          (recur))
        (go-loop []
          (when-let [[x y] (async/<! out)]
            (when (om/get-state owner :dragging)
              (let [{:keys [top left orientation]} @(second cursor)
                    top (- y (if (= orientation :vertical)
                               40
                               20))
                    left (- x (if (= orientation :vertical)
                                20
                                40))]
                (om/transact! (second cursor)
                              (fn [s]
                                (assoc s
                                  :top top
                                  :left left)))
                (async/>! (om/get-shared owner :move-channel) stone-id)))
            (recur)))
        (let [node (om/get-node owner)]
          (gevents/listen node
                          "mousedown"
                          (fn [e]
                            (println "mousedown")
                            (.preventDefault e)
                            (om/set-state! owner :dragging true)))
          (gevents/listen node
                          "mousemove"
                          (fn [e]
                            (println "mousedown")
                            (.preventDefault e)
                            (async/put! moves [(.-clientX e) (.-clientY e)])))
          (gevents/listen node
                          "mouseup"
                          (fn [e]
                            (println "mousedown")
                            (.preventDefault e)
                            (om/set-state! owner :dragging false))))))))

(defn place [cursor owner]
  (reify
    om/IRender
    (render [_]
      (let [[id {:keys [top left orientation target]}] cursor]
        (dom/div #js {:style #js {:position "absolute"
                                  :top (- top 3)
                                  :left (- left 3)
                                  :border "3px solid blue"
                                  :background (if target
                                                "black"
                                                "yellow")
                                  :width (if (= orientation :vertical)
                                           40 80)
                                  :height (if (= orientation :vertical)
                                            80 40)}}
                 (str "open" (om/value cursor)))))))

(defn overlap? [{:keys [orientation top left] :as stone} 
                {place-orientation :orientation 
                 place-top :top
                 place-left :left
                 :as place}]
  (let [x (+ left (if (= orientation :vertical) 20 40))
        y (+ top (if (= orientation :vertical) 40 20))
        [dx dy] (if (= orientation :vertical)
                  [40 80] [80 40])]
    (and (< place-left x (+ place-left dx))
         (< place-top y (+ place-top dy)))))

(defn table [cursor owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:id "table"}
             (concat (om/build-all stone (:stones cursor))
                     (om/build-all place (:places cursor) #_{:fn (fn [c]
                                                                 (assoc-in c [1 :target] (:target cursor)))}))))
    om/IDidMount
    (did-mount [_]
      (go-loop []
        (when-let [stone-id (<! (om/get-shared owner :move-channel))]
          (om/transact! cursor
                        []
                        (fn [cursor]
                          (let [stone
                                (get-in cursor [:stones stone-id])
                                places (let [places (get-in cursor [:places])]
                                         (zipmap (keys places)
                                                 (map (fn [place]
                                                        (assoc place :target
                                                               (overlap? stone place)))
                                                      (vals places))))
                                to-orientation (some
                                                (fn [[id place]]
                                                  (when (:target place)
                                                    (:orientation place)))
                                                places)]
                            (-> cursor
                                (cond->
                                 to-orientation
                                 (assoc-in [:stones stone-id :orientation] to-orientation))
                                (assoc :places places)))))
          (recur))))))

(defn footer [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "footer"}
               "Datominoes for "
               (dom/a #js {:href "http://clojurecup.com"} " clojurecup 2014")
               " by "
               (dom/a #js {:href "http://thegeez.net"} "thegeez.net")
               " - "
               (dom/a #js {:href "http://twitter.com/thegeez"} " @thegeez")))))

(defn window [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {}
               (om/build table cursor)
               (om/build footer nil)))))

(defn ^:export main []
  (om/root
   window
   app-state
   {:target (.-body js/document)
    :shared {:move-channel (async/chan)}}))


