(ns net.thegeez.datominoes.ui
  (:require [cljs.core.async :as async]
            [datascript :as d]
            [net.thegeez.datominoes.react :as r :include-macros true]
            [sablono.core :as s]))

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
   "Welcome: "
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
