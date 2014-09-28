(ns net.thegeez.datominoes.engine
  (:require [datascript :as d]
            [net.thegeez.datominoes.transact :as t]))

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :game-created
  [event args report conn]
  (d/transact! conn [[:db.fn/call t/deal]]))

(defmethod handle :deal
  [event args report conn]
  (d/transact! conn [[:db.fn/call t/assign-turn]]))

(defmethod handle :default
  [event args report conn]
  (println "handle: " (pr-str [event args #_report #_conn])))

(defn start-engine [conn]
  (d/listen! conn (fn [{:keys [db-after] :as report}]
                    (let [[event args] (first (d/q '{:find [?event ?args]
                                                     :in [$ ?tx]
                                                     :where [[?e :event ?event ?tx]
                                                             [?e :args ?args]]}
                                                   db-after (:max-tx db-after)))]
                      (handle event args report conn))))
  (d/transact! conn [[:db.fn/call t/create-game "Player One" "AI"]]))
