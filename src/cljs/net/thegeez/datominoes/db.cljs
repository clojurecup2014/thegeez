(ns net.thegeez.datominoes.db
  (:require [datascript :as d]))

(def conn (d/create-conn
           {:dev/msg {}
            }))

(defn init-db [conn]
  (d/transact! conn
               (into [] (for [up (range 7)
                              down (range up)]
                          (let [id (+ up (* 10 down))]
                            {:db/id id
                             :stone/id id
                             :stone/up up
                             :stone/down down
                             :ui/top 12
                             :ui/left 12})))))
