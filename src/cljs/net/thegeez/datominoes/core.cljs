(ns net.thegeez.datominoes.core
  (:require [clojure.string :as str]
            [cljs.core.async :as async]
            [datascript :as d]
            [goog.events :as gevents]
            [net.thegeez.datominoes.render :as render]
            [net.thegeez.datominoes.engine :as engine]
            [net.thegeez.datominoes.transact :as t]))

(enable-console-print!)

(def conn (d/create-conn t/schema))

(defn ^:export main []
  (.log js/console "hello world")
  (d/transact! conn (t/init))
  (render/start-game-panel conn)
  (engine/start-engine conn))


