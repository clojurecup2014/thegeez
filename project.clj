(defproject datominoes "0.0.1"
  :description "thegeez.net's clojure cup 2014 entry"
  :url "http://thegeez.net"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [datascript "0.4.1"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds {:dev
                       {:source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/web/datominoes.js"
                                   :output-dir "resources/web/out"
                                   :optimizations :none
                                   }}
                       :prod
                       {:source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/datominoes.min.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   ;; :pretty-print true
                                   ;; :print-input-delimiter true
                                   ;; :pseudo-names true

                                   }}}})
