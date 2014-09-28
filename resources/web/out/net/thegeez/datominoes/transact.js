// Compiled by ClojureScript 0.0-2342
goog.provide('net.thegeez.datominoes.transact');
goog.require('cljs.core');
goog.require('datascript');
goog.require('datascript');
net.thegeez.datominoes.transact.init = (function init(){var game_eid = datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759));var p1_eid = datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759));var p2_eid = datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759));var stock_eid = datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759));var string_eid = datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759));return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),game_eid,new cljs.core.Keyword("game","name","game/name",1848904735),"local-game",new cljs.core.Keyword("game","player1","game/player1",-1492668246),p1_eid,new cljs.core.Keyword("game","player2","game/player2",-237943809),p2_eid], null)], null);
});
/**
* @param {...*} var_args
*/
net.thegeez.datominoes.transact.log_event = (function() { 
var log_event__delegate = function (db,event,args){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759)),new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null);
};
var log_event = function (db,event,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return log_event__delegate.call(this,db,event,args);};
log_event.cljs$lang$maxFixedArity = 2;
log_event.cljs$lang$applyTo = (function (arglist__9923){
var db = cljs.core.first(arglist__9923);
arglist__9923 = cljs.core.next(arglist__9923);
var event = cljs.core.first(arglist__9923);
var args = cljs.core.rest(arglist__9923);
return log_event__delegate(db,event,args);
});
log_event.cljs$core$IFn$_invoke$arity$variadic = log_event__delegate;
return log_event;
})()
;
net.thegeez.datominoes.transact.find_game = (function find_game(db){return datascript.entity.call(null,db,cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("game","name","game/name",1848904735)], null)], null)], null),db)));
});
net.thegeez.datominoes.transact.create_game = (function create_game(db,player1_name,player2_name,us){var game = net.thegeez.datominoes.transact.find_game.call(null,db);cljs.core.println.call(null,"game",datascript.touch.call(null,game));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.log_event,new cljs.core.Keyword(null,"game-created","game-created",-865313644),player1_name,player2_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword("player","name","player/name",556456720),player1_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player2","game/player2",-237943809).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword("player","name","player/name",556456720),player2_name], null)], null);
});
net.thegeez.datominoes.transact.shuffle_set = (function shuffle_set(s,n){var ss = cljs.core.seq.call(null,s);if((ss) && (((0) < n)))
{var pick = cljs.core.rand_nth.call(null,ss);return cljs.core.cons.call(null,pick,shuffle_set.call(null,cljs.core.disj.call(null,s,pick),(n - (1))));
} else
{return s;
}
});
net.thegeez.datominoes.transact.deal = (function deal(db){var _ = cljs.core.println.call(null,"deal");var game = net.thegeez.datominoes.transact.find_game.call(null,db);var game_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(game);var p1_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game));var p2_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player2","game/player2",-237943809).cljs$core$IFn$_invoke$arity$1(game));var stones = net.thegeez.datominoes.transact.shuffle_set.call(null,new cljs.core.Keyword("table","stock","table/stock",-920260880).cljs$core$IFn$_invoke$arity$1(game),(14));var vec__9934 = cljs.core.split_at.call(null,(18),stones);var player1_stones = cljs.core.nth.call(null,vec__9934,(0),null);var stones__$1 = cljs.core.nth.call(null,vec__9934,(1),null);var vec__9935 = cljs.core.split_at.call(null,(7),stones__$1);var player2_stones = cljs.core.nth.call(null,vec__9935,(0),null);var stock = cljs.core.nth.call(null,vec__9935,(1),null);var place_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("table","places","table/places",916500296).cljs$core$IFn$_invoke$arity$1(game)));return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.log_event,new cljs.core.Keyword(null,"deal","deal",-1166385728)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),game_eid,new cljs.core.Keyword("game","stage","game/stage",1842511606),new cljs.core.Keyword(null,"deal","deal",-1166385728)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),place_eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","root","place/root",-69394246),true,new cljs.core.Keyword("place","orientation","place/orientation",709730004),new cljs.core.Keyword(null,"south","south",1586796293)], null)], null),cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4364__auto__ = ((function (_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid){
return (function iter__9936(s__9937){return (new cljs.core.LazySeq(null,((function (_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid){
return (function (){var s__9937__$1 = s__9937;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9937__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__9943 = cljs.core.first.call(null,xs__4624__auto__);var player_eid = cljs.core.nth.call(null,vec__9943,(0),null);var player_stones = cljs.core.nth.call(null,vec__9943,(1),null);var iterys__4360__auto__ = ((function (s__9937__$1,vec__9943,player_eid,player_stones,xs__4624__auto__,temp__4126__auto__,_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid){
return (function iter__9938(s__9939){return (new cljs.core.LazySeq(null,((function (s__9937__$1,vec__9943,player_eid,player_stones,xs__4624__auto__,temp__4126__auto__,_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid){
return (function (){var s__9939__$1 = s__9939;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9939__$1);if(temp__4126__auto____$1)
{var s__9939__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9939__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9939__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9941 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9940 = (0);while(true){
if((i__9940 < size__4363__auto__))
{var ps = cljs.core._nth.call(null,c__4362__auto__,i__9940);cljs.core.chunk_append.call(null,b__9941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),player_eid,new cljs.core.Keyword("player","stones","player/stones",-617349594),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ps)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),game_eid,new cljs.core.Keyword("table","stock","table/stock",-920260880),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ps)], null)], null));
{
var G__9944 = (i__9940 + (1));
i__9940 = G__9944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9941),iter__9938.call(null,cljs.core.chunk_rest.call(null,s__9939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9941),null);
}
} else
{var ps = cljs.core.first.call(null,s__9939__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),player_eid,new cljs.core.Keyword("player","stones","player/stones",-617349594),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ps)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),game_eid,new cljs.core.Keyword("table","stock","table/stock",-920260880),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ps)], null)], null),iter__9938.call(null,cljs.core.rest.call(null,s__9939__$2)));
}
} else
{return null;
}
break;
}
});})(s__9937__$1,vec__9943,player_eid,player_stones,xs__4624__auto__,temp__4126__auto__,_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid))
,null,null));
});})(s__9937__$1,vec__9943,player_eid,player_stones,xs__4624__auto__,temp__4126__auto__,_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid))
;var fs__4361__auto__ = cljs.core.seq.call(null,iterys__4360__auto__.call(null,player_stones));if(fs__4361__auto__)
{return cljs.core.concat.call(null,fs__4361__auto__,iter__9936.call(null,cljs.core.rest.call(null,s__9937__$1)));
} else
{{
var G__9945 = cljs.core.rest.call(null,s__9937__$1);
s__9937__$1 = G__9945;
continue;
}
}
} else
{return null;
}
break;
}
});})(_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid))
,null,null));
});})(_,game,game_eid,p1_eid,p2_eid,stones,vec__9934,player1_stones,stones__$1,vec__9935,player2_stones,stock,place_eid))
;return iter__4364__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1_eid,player1_stones], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2_eid,player2_stones], null)], null));
})()));
});
net.thegeez.datominoes.transact.assign_turn = (function assign_turn(db){var game = net.thegeez.datominoes.transact.find_game.call(null,db);var game_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(game);var p1_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game));var p2_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player2","game/player2",-237943809).cljs$core$IFn$_invoke$arity$1(game));var current_turn = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","turn","game/turn",74760922).cljs$core$IFn$_invoke$arity$1(net.thegeez.datominoes.transact.find_game.call(null,db)));var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([null,p1_eid,p1_eid,p1_eid,p2_eid,p1_eid], true, false),current_turn);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.log_event,new cljs.core.Keyword(null,"assign-turn","assign-turn",-1577481357)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),game_eid,new cljs.core.Keyword("game","turn","game/turn",74760922),turn,new cljs.core.Keyword("game","stage","game/stage",1842511606),new cljs.core.Keyword(null,"playing","playing",70013335)], null)], null);
});
net.thegeez.datominoes.transact.turn_stone = (function turn_stone(db,stone_eid,orientation){cljs.core.println.call(null,"turn-stone",stone_eid);
var stone = datascript.entity.call(null,db,stone_eid);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),stone_eid,new cljs.core.Keyword("stone","up","stone/up",-110789460),new cljs.core.Keyword("stone","down","stone/down",1337505805).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword("stone","up","stone/up",-110789460).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword("stone","orientation","stone/orientation",715112302),orientation], null)], null);
});
net.thegeez.datominoes.transact.stone_placed = (function stone_placed(db,stone_eid,place_eid){cljs.core.println.call(null,"Placed",stone_eid,place_eid);
var game = net.thegeez.datominoes.transact.find_game.call(null,db);var game_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(game);var stone = datascript.entity.call(null,db,stone_eid);var place = datascript.entity.call(null,db,place_eid);var place_eids = cljs.core.map.call(null,cljs.core.first,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("table","places","table/places",916500296),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("place","used","place/used",-1291769160),false], null)], null)], null),db));var new_places = (function (){var temp__4124__auto__ = new cljs.core.Keyword("place","for","place/for",-1501308742).cljs$core$IFn$_invoke$arity$1(place);if(cljs.core.truth_(temp__4124__auto__))
{var from = temp__4124__auto__;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("stone","up","stone/up",-110789460).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword("stone","down","stone/down",1337505805).cljs$core$IFn$_invoke$arity$1(stone)))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"south","south",1586796293)))
{var place_eids__$1 = cljs.core.take.call(null,(3),place_eids);var iter__4364__auto__ = ((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function iter__9994(s__9995){return (new cljs.core.LazySeq(null,((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function (){var s__9995__$1 = s__9995;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9995__$1);if(temp__4126__auto__)
{var s__9995__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9995__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9995__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9997 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9996 = (0);while(true){
if((i__9996 < size__4363__auto__))
{var vec__10002 = cljs.core._nth.call(null,c__4362__auto__,i__9996);var eid = cljs.core.nth.call(null,vec__10002,(0),null);var vec__10003 = cljs.core.nth.call(null,vec__10002,(1),null);var dl = cljs.core.nth.call(null,vec__10003,(0),null);var dt = cljs.core.nth.call(null,vec__10003,(1),null);var face = cljs.core.nth.call(null,vec__10003,(2),null);var orientation = cljs.core.nth.call(null,vec__10003,(3),null);cljs.core.chunk_append.call(null,b__9997,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null));
{
var G__10042 = (i__9996 + (1));
i__9996 = G__10042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9997),iter__9994.call(null,cljs.core.chunk_rest.call(null,s__9995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9997),null);
}
} else
{var vec__10004 = cljs.core.first.call(null,s__9995__$2);var eid = cljs.core.nth.call(null,vec__10004,(0),null);var vec__10005 = cljs.core.nth.call(null,vec__10004,(1),null);var dl = cljs.core.nth.call(null,vec__10005,(0),null);var dt = cljs.core.nth.call(null,vec__10005,(1),null);var face = cljs.core.nth.call(null,vec__10005,(2),null);var orientation = cljs.core.nth.call(null,vec__10005,(3),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null),iter__9994.call(null,cljs.core.rest.call(null,s__9995__$2)));
}
} else
{return null;
}
break;
}
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
,null,null));
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
;return iter__4364__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,place_eids__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-46),(22),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"west","west",708776677)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(46),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"south","south",1586796293)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(22),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"east","east",1189821678)], null)], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"north","north",651323902)))
{var place_eids__$1 = cljs.core.take.call(null,(3),place_eids);var iter__4364__auto__ = ((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function iter__10006(s__10007){return (new cljs.core.LazySeq(null,((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function (){var s__10007__$1 = s__10007;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10007__$1);if(temp__4126__auto__)
{var s__10007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10007__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10007__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10009 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10008 = (0);while(true){
if((i__10008 < size__4363__auto__))
{var vec__10014 = cljs.core._nth.call(null,c__4362__auto__,i__10008);var eid = cljs.core.nth.call(null,vec__10014,(0),null);var vec__10015 = cljs.core.nth.call(null,vec__10014,(1),null);var dl = cljs.core.nth.call(null,vec__10015,(0),null);var dt = cljs.core.nth.call(null,vec__10015,(1),null);var face = cljs.core.nth.call(null,vec__10015,(2),null);var orientation = cljs.core.nth.call(null,vec__10015,(3),null);cljs.core.chunk_append.call(null,b__10009,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null));
{
var G__10043 = (i__10008 + (1));
i__10008 = G__10043;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10009),iter__10006.call(null,cljs.core.chunk_rest.call(null,s__10007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10009),null);
}
} else
{var vec__10016 = cljs.core.first.call(null,s__10007__$2);var eid = cljs.core.nth.call(null,vec__10016,(0),null);var vec__10017 = cljs.core.nth.call(null,vec__10016,(1),null);var dl = cljs.core.nth.call(null,vec__10017,(0),null);var dt = cljs.core.nth.call(null,vec__10017,(1),null);var face = cljs.core.nth.call(null,vec__10017,(2),null);var orientation = cljs.core.nth.call(null,vec__10017,(3),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null),iter__10006.call(null,cljs.core.rest.call(null,s__10007__$2)));
}
} else
{return null;
}
break;
}
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
,null,null));
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
;return iter__4364__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,place_eids__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-46),(0),new cljs.core.Keyword("stone","up","stone/up",-110789460),new cljs.core.Keyword(null,"west","west",708776677)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-46),new cljs.core.Keyword("stone","up","stone/up",-110789460),new cljs.core.Keyword(null,"north","north",651323902)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0),new cljs.core.Keyword("stone","up","stone/up",-110789460),new cljs.core.Keyword(null,"east","east",1189821678)], null)], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"east","east",1189821678)))
{var place_eids__$1 = cljs.core.take.call(null,(3),place_eids);var iter__4364__auto__ = ((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function iter__10018(s__10019){return (new cljs.core.LazySeq(null,((function (place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function (){var s__10019__$1 = s__10019;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10019__$1);if(temp__4126__auto__)
{var s__10019__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10019__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10019__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10021 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10020 = (0);while(true){
if((i__10020 < size__4363__auto__))
{var vec__10026 = cljs.core._nth.call(null,c__4362__auto__,i__10020);var eid = cljs.core.nth.call(null,vec__10026,(0),null);var vec__10027 = cljs.core.nth.call(null,vec__10026,(1),null);var dl = cljs.core.nth.call(null,vec__10027,(0),null);var dt = cljs.core.nth.call(null,vec__10027,(1),null);var face = cljs.core.nth.call(null,vec__10027,(2),null);var orientation = cljs.core.nth.call(null,vec__10027,(3),null);cljs.core.chunk_append.call(null,b__10021,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null));
{
var G__10044 = (i__10020 + (1));
i__10020 = G__10044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10021),iter__10018.call(null,cljs.core.chunk_rest.call(null,s__10019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10021),null);
}
} else
{var vec__10028 = cljs.core.first.call(null,s__10019__$2);var eid = cljs.core.nth.call(null,vec__10028,(0),null);var vec__10029 = cljs.core.nth.call(null,vec__10028,(1),null);var dl = cljs.core.nth.call(null,vec__10029,(0),null);var dt = cljs.core.nth.call(null,vec__10029,(1),null);var face = cljs.core.nth.call(null,vec__10029,(2),null);var orientation = cljs.core.nth.call(null,vec__10029,(3),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null),iter__10018.call(null,cljs.core.rest.call(null,s__10019__$2)));
}
} else
{return null;
}
break;
}
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
,null,null));
});})(place_eids__$1,from,temp__4124__auto__,game,game_eid,stone,place,place_eids))
;return iter__4364__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,place_eids__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-46),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"north","north",651323902)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(0),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"east","east",1189821678)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(24),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"south","south",1586796293)], null)], null)));
} else
{cljs.core.println.call(null,"PLaces has from ",from);
return cljs.core.PersistentVector.EMPTY;

}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("stone","up","stone/up",-110789460).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword("stone","down","stone/down",1337505805).cljs$core$IFn$_invoke$arity$1(stone)))
{cljs.core.println.call(null,"Places for double",datascript.touch.call(null,stone));
return cljs.core.PersistentVector.EMPTY;
} else
{var place_eids__$1 = cljs.core.take.call(null,(2),cljs.core.map.call(null,cljs.core.first,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("table","places","table/places",916500296),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("place","used","place/used",-1291769160),false], null)], null)], null),db)));var iter__4364__auto__ = ((function (place_eids__$1,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function iter__10030(s__10031){return (new cljs.core.LazySeq(null,((function (place_eids__$1,temp__4124__auto__,game,game_eid,stone,place,place_eids){
return (function (){var s__10031__$1 = s__10031;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10031__$1);if(temp__4126__auto__)
{var s__10031__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10031__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10031__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10033 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10032 = (0);while(true){
if((i__10032 < size__4363__auto__))
{var vec__10038 = cljs.core._nth.call(null,c__4362__auto__,i__10032);var eid = cljs.core.nth.call(null,vec__10038,(0),null);var vec__10039 = cljs.core.nth.call(null,vec__10038,(1),null);var dl = cljs.core.nth.call(null,vec__10039,(0),null);var dt = cljs.core.nth.call(null,vec__10039,(1),null);var face = cljs.core.nth.call(null,vec__10039,(2),null);var orientation = cljs.core.nth.call(null,vec__10039,(3),null);cljs.core.chunk_append.call(null,b__10033,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null));
{
var G__10045 = (i__10032 + (1));
i__10032 = G__10045;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10033),iter__10030.call(null,cljs.core.chunk_rest.call(null,s__10031__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10033),null);
}
} else
{var vec__10040 = cljs.core.first.call(null,s__10031__$2);var eid = cljs.core.nth.call(null,vec__10040,(0),null);var vec__10041 = cljs.core.nth.call(null,vec__10040,(1),null);var dl = cljs.core.nth.call(null,vec__10041,(0),null);var dt = cljs.core.nth.call(null,vec__10041,(1),null);var face = cljs.core.nth.call(null,vec__10041,(2),null);var orientation = cljs.core.nth.call(null,vec__10041,(3),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("place","used","place/used",-1291769160),true,new cljs.core.Keyword("place","top","place/top",-1473192288),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + dt),new cljs.core.Keyword("place","left","place/left",-565014424),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + dl),new cljs.core.Keyword("place","orientation","place/orientation",709730004),orientation,new cljs.core.Keyword("place","for","place/for",-1501308742),stone_eid,new cljs.core.Keyword("place","attached","place/attached",-976120188),face], null),iter__10030.call(null,cljs.core.rest.call(null,s__10031__$2)));
}
} else
{return null;
}
break;
}
});})(place_eids__$1,temp__4124__auto__,game,game_eid,stone,place,place_eids))
,null,null));
});})(place_eids__$1,temp__4124__auto__,game,game_eid,stone,place,place_eids))
;return iter__4364__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,place_eids__$1,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"south","south",1586796293),null,new cljs.core.Keyword(null,"north","north",651323902),null], null), null).call(null,new cljs.core.Keyword("stone","orientation","stone/orientation",715112302).cljs$core$IFn$_invoke$arity$1(stone)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-46),new cljs.core.Keyword("stone","up","stone/up",-110789460),new cljs.core.Keyword(null,"north","north",651323902)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(46),new cljs.core.Keyword("stone","down","stone/down",1337505805),new cljs.core.Keyword(null,"south","south",1586796293)], null)], null):cljs.core.PersistentVector.EMPTY)));
}
}
})();cljs.core.println.call(null,"Place",new_places);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.log_event,new cljs.core.Keyword(null,"stone-placed","stone-placed",-646989059),stone_eid,place_eid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),place_eid,new cljs.core.Keyword("place","used","place/used",-1291769160),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("player","_stones","player/_stones",1948766038).cljs$core$IFn$_invoke$arity$1(stone))),new cljs.core.Keyword("player","stones","player/stones",-617349594),stone_eid], null)], null),cljs.core.mapcat.call(null,((function (game,game_eid,stone,place,place_eids,new_places){
return (function (new_place){cljs.core.println.call(null,"new-place",new_place);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),game_eid,new cljs.core.Keyword("table","places","table/places",916500296),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new_place)], null),new_place], null);
});})(game,game_eid,stone,place,place_eids,new_places))
,new_places));
});
net.thegeez.datominoes.transact.schema = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("game","player1","game/player1",-1492668246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("game","player2","game/player2",-237943809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("game","turn","game/turn",74760922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("table","stock","table/stock",-920260880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("table","places","table/places",916500296),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("player","stones","player/stones",-617349594),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("place","for","place/for",-1501308742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
