(ns net.thegeez.datominoes.ui
  (:require [cljs.core.async :as async]
            [datascript :as d]
            [goog.events :as gevents]
            [net.thegeez.datominoes.db :as db]
            [net.thegeez.datominoes.react :as r :include-macros true]
            [sablono.core :as s])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(def dots (for [i (range 3)
                j (range 3)]
            [:div.dot {:class (str "dot" i j)}]))

(r/defc stone [db event-bus se]
  [:.stone {:id (str "stone-" (:db/id se))
            :style {:top (:ui/top se)
                    :left (:ui/left se)}
            :class (str
                    (if (:ui/vertical se)
                      "vertical "
                      "horizontal ")
                    (when (:ui/dragging se)
                      "dragging"))}
   (into [:.face.up]
         dots)
   [:.face.down (str (:stone/down se))]]
  :did-mount (fn [node [db event-bus se]]
               (println "Mounted node" se)
               (gevents/listen node
                               "mousedown"
                               (fn [e]
                                 (.preventDefault e)
                                 (println "mousedown!" se e)
                                 (.log js/console e)
                                 (d/transact! db/conn
                                              [[:db.fn/call
                                                (fn [db x y]
                                                  (let [se (d/entity db (:db/id se))]
                                                    (when-not (:ui/dragging se)
                                                      [{:db/id (:db/id se)
                                                        :ui/dragging true
                                                        #_#_:ui/top (+ (:ui/top se) y)
                                                        #_#_:ui/left (+ (:ui/left se) x)
                                                        :ui/offsetTop 
                                                        (+ (:ui/top se) 20)
                                                        #_(- y (:ui/top se))
                                                        :ui/offsetLeft 
                                                        #_(- x (:ui/left se))
                                                        (+ (:ui/left se) 20)}])))
                                                (.-clientX e)
                                                (.-clientY e)]])))))

(r/defc stones [db event-bus]
  (into [:#stones]
        (for [r (d/q '{:find [?e]
                       :where [[?e :stone/id]]}
                     db)]
          (let [se (d/entity db (first r))]
            (stone db event-bus se))))
  :did-mount
  (fn [node [db event-bus]]
    (gevents/listen node
                    "mousemove"
                    (fn [e]
                      (println "mousemove")
                      (.preventDefault e)
                      (d/transact! db/conn
                                   [[:db.fn/call
                                     (fn [db x y]
                                       (when-let [se (d/entity db
                                                               (ffirst (d/q '{:find [?e]
                                                                              :where [[?e :ui/dragging true]]}
                                                                            db)))]
                                         [{:db/id (:db/id se)
                                           :ui/vertical (if (> x 200)
                                                          false
                                                          true)
                                           :ui/top (- y 20 #_(:ui/offsetTop se))
                                           :ui/left (- x 20 #_(:ui/offsetLeft se))}]))
                                     (.-clientX e)
                                     (.-clientY e)]])))
    (gevents/listen node
                    "mouseup"
                    (fn [e]
                      (.preventDefault e)
                      (println "mouseup")
                      (d/transact! db/conn
                                   [[:db.fn/call
                                     (fn [db]
                                       (when-let [se (d/entity db
                                                               (ffirst (d/q '{:find [?e]
                                                                              :where [[?e :ui/dragging true]]}
                                                                            db)))]
                                         [[:db/add (:db/id se)
                                           :ui/dragging false]]))]])))))

(r/defc table [db event-bus]
  [:#table 
   (stones db event-bus)])

(r/defc msg [db event-bus]
  [:#msg
   (:dev/msg (d/entity db 1))])

(r/defc footer []
  [:#footer
   "Datominoes for "
   [:a {:href "http://clojurecup.com"} " clojurecup 2014"]
   " by "
   [:a {:href "http://thegeez.net"} "thegeez.net"]
   " - "
   [:a {:href "http://twitter.com/thegeez"} " @thegeez"]])

(r/defc window [db event-bus]
  [:#window
   (table db event-bus)
   (msg db event-bus)
   (footer)])

;; RENDER MACHINERY

(def render-data (atom nil))

(defn request-rerender [db event-bus]
  (reset! render-data [db event-bus]))

(defn- -render [db event-bus]
  (r/render (window db event-bus) (.-body js/document)))

(defn- render []
  (when-let [args @render-data]
    (apply -render args)
    (reset! render-data nil)))

(add-watch render-data :render (fn [_ _ old-val new-val]
  (when (and (nil? old-val) new-val)
    (js/requestAnimationFrame render))))
