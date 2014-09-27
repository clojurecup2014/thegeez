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
                  :orientation :vertical}])))})

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
               (do (println "cursor" (om/value cursor) (:orientation cursor)) 
                   (om/build face [f (get cursor f) (:orientation cursor)])))))))

(defn stone [cursor owner]
  (reify
    om/IRender
    (render [_]
      (let [orientation (or (om/get-state owner :orientation) :vertical)
            dragging (om/get-state owner :dragging)]
        (println "Orientation: " orientation)
        (dom/div #js {:className (str "stone " (name orientation)
                                      (when dragging
                                        " dragging"))
                      :style (if dragging
                               #js {:border "3px solid black"
                                    :top (om/get-state owner :top)
                                    :left (om/get-state owner :left)}
                               #js {#_#_:border "3px solid green"
                                    :top (om/get-state owner :top)
                                    :left (om/get-state owner :left)})}
                 (om/build faces (-> (select-keys (val cursor) [:up :down])
                                     (assoc :orientation orientation))))))
    om/IDidMount
    (did-mount [_]
      (let [moves (async/chan (async/sliding-buffer 1))
            out (async/chan)]
        (go-loop []
          (async/>! out (async/<! moves))
          (async/<! (async/timeout 100))
          (recur))
        (go-loop []
          (when-let [[x y] (async/<! out)]
            (when (om/get-state owner :dragging)
              (om/update-state! owner
                                (fn [s]
                                  (assoc s
                                    :orientation (if (< x 200)
                                                   :vertical
                                                   :horizontal
                                                   )
                                    :top (- y 20)
                                    :left (- x 20)))))
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

(defn table [cursor owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:id "table"}
             (om/build-all stone (:stones cursor))))))

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
  (println "Hello world")
  (om/root
   window
   app-state
   {:target (.-body js/document)}))


