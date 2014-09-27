(ns net.thegeez.datominoes.core
  (:require [clojure.string :as str]
            [cljs.core.async :as async]
            [datascript :as d]
            [goog.events :as gevents]
            [net.thegeez.datominoes.render :as render]))

(enable-console-print!)

(def conn (d/create-conn {}))

(defn ^:export main []
  (.log js/console "hello world")
  (render/start-game-panel conn))


