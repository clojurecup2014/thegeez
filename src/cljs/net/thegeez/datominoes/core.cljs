(ns net.thegeez.datominoes.core
  (:require [clojure.string :as str]
            [cljs.core.async :as async]
            [datascript :as d]
            [net.thegeez.datominoes.ui :as ui])
  (:require-macros [net.thegeez.datominoes.core :refer [go-loop-sub]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(def conn (d/create-conn
           {:dev/msg {}
            }))

;; EVENT BUS

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

;; ON PAGE LOAD

(defn ^:export main []
  (println "Hello world")
  ;; initial render
  (ui/request-rerender @conn event-bus)

  ;; re-render on each DB change
  (d/listen! conn
    (fn [tx-report]
      (ui/request-rerender (:db-after tx-report) event-bus)))

  (go-loop [i 0]
    (do (async/<! (async/timeout 1000))
      (async/>! event-bus [:inc-msg i])
      (recur (inc i)))))


(go-loop-sub event-bus-pub :inc-msg [_ i]
             (d/transact! conn [[:db/add 1 :dev/msg (str "Hello World" i)]]))
