// Compiled by ClojureScript 0.0-2342
goog.provide('net.thegeez.datominoes.render');
goog.require('cljs.core');
goog.require('net.thegeez.datominoes.transact');
goog.require('net.thegeez.datominoes.dom_helpers');
goog.require('net.thegeez.datominoes.dom_helpers');
goog.require('net.thegeez.datominoes.transact');
goog.require('goog.fx.Dragger');
goog.require('net.thegeez.datominoes.animator');
goog.require('datascript');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('goog.math');
goog.require('goog.math');
goog.require('goog.events');
goog.require('net.thegeez.datominoes.animator');
goog.require('datascript');
net.thegeez.datominoes.render.dot_mapping = new cljs.core.PersistentArrayMap(null, 7, [(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null),(4),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null)], null);
net.thegeez.datominoes.render.dots = (function dots(number){var iter__4364__auto__ = (function iter__9929(s__9930){return (new cljs.core.LazySeq(null,(function (){var s__9930__$1 = s__9930;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9930__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__4360__auto__ = ((function (s__9930__$1,i,xs__4624__auto__,temp__4126__auto__){
return (function iter__9931(s__9932){return (new cljs.core.LazySeq(null,((function (s__9930__$1,i,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9932__$1 = s__9932;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9932__$1);if(temp__4126__auto____$1)
{var s__9932__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9932__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9932__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9934 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9933 = (0);while(true){
if((i__9933 < size__4363__auto__))
{var j = cljs.core._nth.call(null,c__4362__auto__,i__9933);if((cljs.core.get_in.call(null,net.thegeez.datominoes.render.dot_mapping,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,i,j], null)) > (0)))
{cljs.core.chunk_append.call(null,b__9934,net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("dot dot"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j))], null)));
{
var G__9935 = (i__9933 + (1));
i__9933 = G__9935;
continue;
}
} else
{{
var G__9936 = (i__9933 + (1));
i__9933 = G__9936;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9934),iter__9931.call(null,cljs.core.chunk_rest.call(null,s__9932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9934),null);
}
} else
{var j = cljs.core.first.call(null,s__9932__$2);if((cljs.core.get_in.call(null,net.thegeez.datominoes.render.dot_mapping,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,i,j], null)) > (0)))
{return cljs.core.cons.call(null,net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("dot dot"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j))], null)),iter__9931.call(null,cljs.core.rest.call(null,s__9932__$2)));
} else
{{
var G__9937 = cljs.core.rest.call(null,s__9932__$2);
s__9932__$1 = G__9937;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__9930__$1,i,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9930__$1,i,xs__4624__auto__,temp__4126__auto__))
;var fs__4361__auto__ = cljs.core.seq.call(null,iterys__4360__auto__.call(null,cljs.core.range.call(null,(4))));if(fs__4361__auto__)
{return cljs.core.concat.call(null,fs__4361__auto__,iter__9929.call(null,cljs.core.rest.call(null,s__9930__$1)));
} else
{{
var G__9938 = cljs.core.rest.call(null,s__9930__$1);
s__9930__$1 = G__9938;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__.call(null,cljs.core.range.call(null,(3)));
});
net.thegeez.datominoes.render.stone_element = (function stone_element(stone_id,up,down){return net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),stone_id,new cljs.core.Keyword(null,"class","class",-2030961996),"stone south back preloading"], null),cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.element,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"face up"], null),net.thegeez.datominoes.render.dots.call(null,up)),cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.element,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"face down"], null),net.thegeez.datominoes.render.dots.call(null,down)));
});
net.thegeez.datominoes.render.in_our_region = (function in_our_region(x,y){return ((462) < y);
});
net.thegeez.datominoes.render.match = (function match(stone,place){cljs.core.println.call(null,"stone",stone,"place",place);
if(cljs.core.not.call(null,new cljs.core.Keyword("place","for","place/for",-1501308742).cljs$core$IFn$_invoke$arity$1(place)))
{return new cljs.core.Keyword(null,"south","south",1586796293);
} else
{var su = new cljs.core.Keyword("stone","up","stone/up",-110789460).cljs$core$IFn$_invoke$arity$1(stone);var sd = new cljs.core.Keyword("stone","down","stone/down",1337505805).cljs$core$IFn$_invoke$arity$1(stone);var ps = new cljs.core.Keyword("place","for","place/for",-1501308742).cljs$core$IFn$_invoke$arity$1(place);var po = new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place);var pa = new cljs.core.Keyword("place","attached","place/attached",-976120188).cljs$core$IFn$_invoke$arity$1(place);var pso = new cljs.core.Keyword("stone","orientation","stone/orientation",715112302).cljs$core$IFn$_invoke$arity$1(ps);var p = ((cljs.core._EQ_.call(null,pa,new cljs.core.Keyword("stone","up","stone/up",-110789460)))?new cljs.core.Keyword("stone","up","stone/up",-110789460).cljs$core$IFn$_invoke$arity$1(ps):new cljs.core.Keyword("stone","down","stone/down",1337505805).cljs$core$IFn$_invoke$arity$1(ps));cljs.core.println.call(null,"match ",su,sd,po,p);
if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"north","north",651323902))) && (cljs.core._EQ_.call(null,su,p)))
{return new cljs.core.Keyword(null,"north","north",651323902);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"north","north",651323902))) && (cljs.core._EQ_.call(null,sd,p)))
{return new cljs.core.Keyword(null,"south","south",1586796293);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"south","south",1586796293))) && (cljs.core._EQ_.call(null,su,p)))
{return new cljs.core.Keyword(null,"south","south",1586796293);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"south","south",1586796293))) && (cljs.core._EQ_.call(null,sd,p)))
{return new cljs.core.Keyword(null,"north","north",651323902);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"east","east",1189821678))) && (cljs.core._EQ_.call(null,su,p)))
{return new cljs.core.Keyword(null,"west","west",708776677);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"east","east",1189821678))) && (cljs.core._EQ_.call(null,sd,p)))
{return new cljs.core.Keyword(null,"east","east",1189821678);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"west","west",708776677))) && (cljs.core._EQ_.call(null,sd,p)))
{return new cljs.core.Keyword(null,"east","east",1189821678);
} else
{if((cljs.core._EQ_.call(null,po,new cljs.core.Keyword(null,"west","west",708776677))) && (cljs.core._EQ_.call(null,su,p)))
{return new cljs.core.Keyword(null,"west","west",708776677);
} else
{return null;

}
}
}
}
}
}
}
}
}
});
net.thegeez.datominoes.render.z_level = cljs.core.atom.call(null,(100));
net.thegeez.datominoes.render.show_on_top = (function show_on_top(stone){return stone.style.zIndex = cljs.core.swap_BANG_.call(null,net.thegeez.datominoes.render.z_level,cljs.core.inc);
});
net.thegeez.datominoes.render.turn_stone = (function turn_stone(stone,orientation){var el = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone);var G__9940_9941 = el;net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__9940_9941,"south");
net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__9940_9941,"west");
net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__9940_9941,"north");
net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__9940_9941,"east");
return net.thegeez.datominoes.dom_helpers.add_class.call(null,el,cljs.core.name.call(null,orientation));
});
net.thegeez.datominoes.render.set_drag_handler = (function set_drag_handler(stone_el,handler){var cursor = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(handler);if(cljs.core._EQ_.call(null,cursor,new cljs.core.Keyword(null,"hand","hand",791601933)))
{net.thegeez.datominoes.dom_helpers.add_class.call(null,stone_el,"cursor_hand");
} else
{net.thegeez.datominoes.dom_helpers.remove_class.call(null,stone_el,"cursor_hand");
}
return stone_el.drag_handler = handler;
});
net.thegeez.datominoes.render.undraggable_handler = (function undraggable_handler(db,conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"drag-start","drag-start",292353430),(function (stone_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",449951290),(function (stone_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),(function (stone_id,event){return null;
})], null);
});
net.thegeez.datominoes.render.home_region_handler = (function home_region_handler(db,conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.Keyword(null,"drag-start","drag-start",292353430),(function (stone_id,event){var stone_el = net.thegeez.datominoes.dom_helpers.get_element.call(null,stone_id);net.thegeez.datominoes.dom_helpers.add_remove_class.call(null,stone_el,"cursor_drag","cursor_hand");
stone_el.drag_origin = net.thegeez.datominoes.dom_helpers.get_position.call(null,stone_el);
cljs.core.println.call(null,"here?");
return net.thegeez.datominoes.render.show_on_top.call(null,stone_el);
}),new cljs.core.Keyword(null,"drag","drag",449951290),(function (stone_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),(function (stone_id,event){var stone_el = net.thegeez.datominoes.dom_helpers.get_element.call(null,stone_id);var vec__9943 = net.thegeez.datominoes.dom_helpers.get_position.call(null,stone_el);var x = cljs.core.nth.call(null,vec__9943,(0),null);var y = cljs.core.nth.call(null,vec__9943,(1),null);net.thegeez.datominoes.dom_helpers.add_remove_class.call(null,stone_el,"cursor_hand","cursor_drag");
if(net.thegeez.datominoes.render.in_our_region.call(null,x,y))
{return null;
} else
{return net.thegeez.datominoes.animator.slide.call(null,stone_el,stone_el.drag_origin);
}
})], null);
});
net.thegeez.datominoes.render.home_drag_handler = (function home_drag_handler(db,conn){var places = (function (){var iter__4364__auto__ = (function iter__9969(s__9970){return (new cljs.core.LazySeq(null,(function (){var s__9970__$1 = s__9970;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9970__$1);if(temp__4126__auto__)
{var s__9970__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9970__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9970__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9972 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9971 = (0);while(true){
if((i__9971 < size__4363__auto__))
{var vec__9975 = cljs.core._nth.call(null,c__4362__auto__,i__9971);var id = cljs.core.nth.call(null,vec__9975,(0),null);cljs.core.chunk_append.call(null,b__9972,datascript.entity.call(null,db,id));
{
var G__9994 = (i__9971 + (1));
i__9971 = G__9994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9972),iter__9969.call(null,cljs.core.chunk_rest.call(null,s__9970__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9972),null);
}
} else
{var vec__9976 = cljs.core.first.call(null,s__9970__$2);var id = cljs.core.nth.call(null,vec__9976,(0),null);return cljs.core.cons.call(null,datascript.entity.call(null,db,id),iter__9969.call(null,cljs.core.rest.call(null,s__9970__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","name","game/name",1848904735)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("table","places","table/places",916500296),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("place","used","place/used",-1291769160),true], null)], null)], null),db));
})();var place_regions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4364__auto__ = ((function (places){
return (function iter__9977(s__9978){return (new cljs.core.LazySeq(null,((function (places){
return (function (){var s__9978__$1 = s__9978;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9978__$1);if(temp__4126__auto__)
{var s__9978__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9978__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9978__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9980 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9979 = (0);while(true){
if((i__9979 < size__4363__auto__))
{var place = cljs.core._nth.call(null,c__4362__auto__,i__9979);cljs.core.chunk_append.call(null,b__9980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"south","south",1586796293),null,new cljs.core.Keyword(null,"north","north",651323902),null], null), null).call(null,new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + (24))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + (46))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + (46))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + (24))], null)], null)),place], null));
{
var G__9995 = (i__9979 + (1));
i__9979 = G__9995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9980),iter__9977.call(null,cljs.core.chunk_rest.call(null,s__9978__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9980),null);
}
} else
{var place = cljs.core.first.call(null,s__9978__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"south","south",1586796293),null,new cljs.core.Keyword(null,"north","north",651323902),null], null), null).call(null,new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + (24))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + (46))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place) + (46))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place),(new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place) + (24))], null)], null)),place], null),iter__9977.call(null,cljs.core.rest.call(null,s__9978__$2)));
}
} else
{return null;
}
break;
}
});})(places))
,null,null));
});})(places))
;return iter__4364__auto__.call(null,places);
})());var place_els = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516),places);var hit = ((function (places,place_regions,place_els){
return (function (event){var x = event.clientX;var y = event.clientY;return cljs.core.some.call(null,((function (x,y,places,place_regions,place_els){
return (function (p__9981){var vec__9982 = p__9981;var vec__9983 = cljs.core.nth.call(null,vec__9982,(0),null);var vec__9984 = cljs.core.nth.call(null,vec__9983,(0),null);var xl = cljs.core.nth.call(null,vec__9984,(0),null);var xr = cljs.core.nth.call(null,vec__9984,(1),null);var vec__9985 = cljs.core.nth.call(null,vec__9983,(1),null);var yt = cljs.core.nth.call(null,vec__9985,(0),null);var yb = cljs.core.nth.call(null,vec__9985,(1),null);var place = cljs.core.nth.call(null,vec__9982,(1),null);cljs.core.println.call(null,"hit? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yt,yb], null)], null),x,y);
if((((xl <= x)) && ((x <= xr))) && (((yt <= y)) && ((y <= yb))))
{return place;
} else
{return null;
}
});})(x,y,places,place_regions,place_els))
,place_regions);
});})(places,place_regions,place_els))
;var base = net.thegeez.datominoes.render.home_region_handler.call(null,db,conn);return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),((function (places,place_regions,place_els,hit,base){
return (function (stone_id,event){var seq__9986_9996 = cljs.core.seq.call(null,place_els);var chunk__9987_9997 = null;var count__9988_9998 = (0);var i__9989_9999 = (0);while(true){
if((i__9989_9999 < count__9988_9998))
{var place_el_10000 = cljs.core._nth.call(null,chunk__9987_9997,i__9989_9999);net.thegeez.datominoes.dom_helpers.remove_class.call(null,place_el_10000,"dropable");
{
var G__10001 = seq__9986_9996;
var G__10002 = chunk__9987_9997;
var G__10003 = count__9988_9998;
var G__10004 = (i__9989_9999 + (1));
seq__9986_9996 = G__10001;
chunk__9987_9997 = G__10002;
count__9988_9998 = G__10003;
i__9989_9999 = G__10004;
continue;
}
} else
{var temp__4126__auto___10005 = cljs.core.seq.call(null,seq__9986_9996);if(temp__4126__auto___10005)
{var seq__9986_10006__$1 = temp__4126__auto___10005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9986_10006__$1))
{var c__4395__auto___10007 = cljs.core.chunk_first.call(null,seq__9986_10006__$1);{
var G__10008 = cljs.core.chunk_rest.call(null,seq__9986_10006__$1);
var G__10009 = c__4395__auto___10007;
var G__10010 = cljs.core.count.call(null,c__4395__auto___10007);
var G__10011 = (0);
seq__9986_9996 = G__10008;
chunk__9987_9997 = G__10009;
count__9988_9998 = G__10010;
i__9989_9999 = G__10011;
continue;
}
} else
{var place_el_10012 = cljs.core.first.call(null,seq__9986_10006__$1);net.thegeez.datominoes.dom_helpers.remove_class.call(null,place_el_10012,"dropable");
{
var G__10013 = cljs.core.next.call(null,seq__9986_10006__$1);
var G__10014 = null;
var G__10015 = (0);
var G__10016 = (0);
seq__9986_9996 = G__10013;
chunk__9987_9997 = G__10014;
count__9988_9998 = G__10015;
i__9989_9999 = G__10016;
continue;
}
}
} else
{}
}
break;
}
var stone = datascript.entity.call(null,db,cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?stone-id","?stone-id",-16215046,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("dom","id","dom/id",-1388432110),new cljs.core.Symbol(null,"?stone-id","?stone-id",-16215046,null)], null)], null)], null),db,stone_id)));var hit__$1 = hit.call(null,event);var temp__4124__auto__ = (function (){var and__3614__auto__ = hit__$1;if(cljs.core.truth_(and__3614__auto__))
{return net.thegeez.datominoes.render.match.call(null,stone,hit__$1);
} else
{return and__3614__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var turn = temp__4124__auto__;var stone_el = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone);net.thegeez.datominoes.dom_helpers.remove_class.call(null,stone_el,"cursor_drag");
net.thegeez.datominoes.render.set_drag_handler.call(null,stone_el,net.thegeez.datominoes.render.undraggable_handler.call(null,db,conn));
return net.thegeez.datominoes.animator.slide.call(null,stone_el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(hit__$1),new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(hit__$1)], null),((function (stone_el,turn,temp__4124__auto__,stone,hit__$1,places,place_regions,place_els,hit,base){
return (function (){return datascript.transact_BANG_.call(null,conn,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.stone_placed,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(hit__$1)], null)], null),((cljs.core._EQ_.call(null,turn,new cljs.core.Keyword("stone","orientation","stone/orientation",715112302).cljs$core$IFn$_invoke$arity$1(stone)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),net.thegeez.datominoes.transact.turn_stone,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(stone),turn], null)], null))));
});})(stone_el,turn,temp__4124__auto__,stone,hit__$1,places,place_regions,place_els,hit,base))
);
} else
{return new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888).cljs$core$IFn$_invoke$arity$1(base).call(null,stone_id,event);
}
});})(places,place_regions,place_els,hit,base))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (places,place_regions,place_els,hit,base){
return (function (stone_id,event){var seq__9990_10017 = cljs.core.seq.call(null,place_els);var chunk__9991_10018 = null;var count__9992_10019 = (0);var i__9993_10020 = (0);while(true){
if((i__9993_10020 < count__9992_10019))
{var place_el_10021 = cljs.core._nth.call(null,chunk__9991_10018,i__9993_10020);net.thegeez.datominoes.dom_helpers.remove_class.call(null,place_el_10021,"dropable");
{
var G__10022 = seq__9990_10017;
var G__10023 = chunk__9991_10018;
var G__10024 = count__9992_10019;
var G__10025 = (i__9993_10020 + (1));
seq__9990_10017 = G__10022;
chunk__9991_10018 = G__10023;
count__9992_10019 = G__10024;
i__9993_10020 = G__10025;
continue;
}
} else
{var temp__4126__auto___10026 = cljs.core.seq.call(null,seq__9990_10017);if(temp__4126__auto___10026)
{var seq__9990_10027__$1 = temp__4126__auto___10026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9990_10027__$1))
{var c__4395__auto___10028 = cljs.core.chunk_first.call(null,seq__9990_10027__$1);{
var G__10029 = cljs.core.chunk_rest.call(null,seq__9990_10027__$1);
var G__10030 = c__4395__auto___10028;
var G__10031 = cljs.core.count.call(null,c__4395__auto___10028);
var G__10032 = (0);
seq__9990_10017 = G__10029;
chunk__9991_10018 = G__10030;
count__9992_10019 = G__10031;
i__9993_10020 = G__10032;
continue;
}
} else
{var place_el_10033 = cljs.core.first.call(null,seq__9990_10027__$1);net.thegeez.datominoes.dom_helpers.remove_class.call(null,place_el_10033,"dropable");
{
var G__10034 = cljs.core.next.call(null,seq__9990_10027__$1);
var G__10035 = null;
var G__10036 = (0);
var G__10037 = (0);
seq__9990_10017 = G__10034;
chunk__9991_10018 = G__10035;
count__9992_10019 = G__10036;
i__9993_10020 = G__10037;
continue;
}
}
} else
{}
}
break;
}
var stone = datascript.entity.call(null,db,cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?stone-id","?stone-id",-16215046,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("dom","id","dom/id",-1388432110),new cljs.core.Symbol(null,"?stone-id","?stone-id",-16215046,null)], null)], null)], null),db,stone_id)));var hit__$1 = hit.call(null,event);var temp__4124__auto__ = (function (){var and__3614__auto__ = hit__$1;if(cljs.core.truth_(and__3614__auto__))
{return net.thegeez.datominoes.render.match.call(null,stone,hit__$1);
} else
{return and__3614__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var turn = temp__4124__auto__;net.thegeez.datominoes.render.turn_stone.call(null,stone,turn);
return net.thegeez.datominoes.dom_helpers.add_class.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(hit__$1),"dropable");
} else
{return net.thegeez.datominoes.render.turn_stone.call(null,stone,new cljs.core.Keyword(null,"south","south",1586796293));
}
});})(places,place_regions,place_els,hit,base))
);
});
net.thegeez.datominoes.render.set_msg = (function set_msg(msg){cljs.core.println.call(null,"MSG: ",msg);
return net.thegeez.datominoes.dom_helpers.set_text.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"msg"),msg);
});
net.thegeez.datominoes.render.anim_deal = (function anim_deal(db,conn){var game = net.thegeez.datominoes.transact.find_game.call(null,db);var stock_stones = new cljs.core.Keyword("table","stock","table/stock",-920260880).cljs$core$IFn$_invoke$arity$1(game);var our_stones = new cljs.core.Keyword("player","stones","player/stones",-617349594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game));var their_stones = new cljs.core.Keyword("player","stones","player/stones",-617349594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player2","game/player2",-237943809).cljs$core$IFn$_invoke$arity$1(game));var stock_deal = cljs.core.map.call(null,((function (game,stock_stones,our_stones,their_stones){
return (function (idx,p__10049){var map__10050 = p__10049;var map__10050__$1 = ((cljs.core.seq_QMARK_.call(null,map__10050))?cljs.core.apply.call(null,cljs.core.hash_map,map__10050):map__10050);var el = cljs.core.get.call(null,map__10050__$1,new cljs.core.Keyword("dom","el","dom/el",-1618103516));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((24) + (cljs.core.rand.call(null) * (75))),((84) + (cljs.core.rand.call(null) * (54)))], null),((function (map__10050,map__10050__$1,el,game,stock_stones,our_stones,their_stones){
return (function (){net.thegeez.datominoes.dom_helpers.remove_class.call(null,el,"preloading");
return net.thegeez.datominoes.render.set_drag_handler.call(null,el,net.thegeez.datominoes.render.undraggable_handler.call(null,db,conn));
});})(map__10050,map__10050__$1,el,game,stock_stones,our_stones,their_stones))
], null);
});})(game,stock_stones,our_stones,their_stones))
,cljs.core.range.call(null),cljs.core.concat.call(null,stock_stones,our_stones,their_stones));var our_deal = cljs.core.map.call(null,((function (game,stock_stones,our_stones,their_stones,stock_deal){
return (function (idx,p__10051){var map__10052 = p__10051;var map__10052__$1 = ((cljs.core.seq_QMARK_.call(null,map__10052))?cljs.core.apply.call(null,cljs.core.hash_map,map__10052):map__10052);var el = cljs.core.get.call(null,map__10052__$1,new cljs.core.Keyword("dom","el","dom/el",-1618103516));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((300) + (idx * (26))),(464)], null),((function (map__10052,map__10052__$1,el,game,stock_stones,our_stones,their_stones,stock_deal){
return (function (){net.thegeez.datominoes.dom_helpers.remove_class.call(null,el,"back");
return net.thegeez.datominoes.render.set_drag_handler.call(null,el,net.thegeez.datominoes.render.home_region_handler.call(null,db,conn));
});})(map__10052,map__10052__$1,el,game,stock_stones,our_stones,their_stones,stock_deal))
], null);
});})(game,stock_stones,our_stones,their_stones,stock_deal))
,cljs.core.range.call(null),our_stones);var their_deal = cljs.core.map.call(null,((function (game,stock_stones,our_stones,their_stones,stock_deal,our_deal){
return (function (idx,p__10053){var map__10054 = p__10053;var map__10054__$1 = ((cljs.core.seq_QMARK_.call(null,map__10054))?cljs.core.apply.call(null,cljs.core.hash_map,map__10054):map__10054);var el = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword("dom","el","dom/el",-1618103516));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((300) + (idx * (26))),(14)], null)], null);
});})(game,stock_stones,our_stones,their_stones,stock_deal,our_deal))
,cljs.core.range.call(null),their_stones);var actions = cljs.core.concat.call(null,stock_deal,our_deal,their_deal);var step = ((function (game,stock_stones,our_stones,their_stones,stock_deal,our_deal,their_deal,actions){
return (function step(p__10055){var vec__10058 = p__10055;var action = cljs.core.nth.call(null,vec__10058,(0),null);var actions__$1 = cljs.core.nthnext.call(null,vec__10058,(1));if(cljs.core.truth_(action))
{var vec__10059 = action;var slide = cljs.core.nth.call(null,vec__10059,(0),null);var el = cljs.core.nth.call(null,vec__10059,(1),null);var to = cljs.core.nth.call(null,vec__10059,(2),null);var f = cljs.core.nth.call(null,vec__10059,(3),null);net.thegeez.datominoes.render.show_on_top.call(null,el);
cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.set_position,el,to);
if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);

} else
{return null;
}
});})(game,stock_stones,our_stones,their_stones,stock_deal,our_deal,their_deal,actions))
;return step.call(null,actions);
});
net.thegeez.datominoes.render.place_class = (function place_class(place){return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"south","south",1586796293),"vertical",new cljs.core.Keyword(null,"north","north",651323902),"vertical",new cljs.core.Keyword(null,"west","west",708776677),"horizontal",new cljs.core.Keyword(null,"east","east",1189821678),"horizontal"], null),new cljs.core.Keyword("place","orientation","place/orientation",709730004).cljs$core$IFn$_invoke$arity$1(place));
});
net.thegeez.datominoes.render.draw = (function draw(report,conn){var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var game = net.thegeez.datominoes.transact.find_game.call(null,db);cljs.core.println.call(null,"Game: ",datascript.touch.call(null,game));
if(cljs.core.not.call(null,new cljs.core.Keyword("game","stage","game/stage",1842511606).cljs$core$IFn$_invoke$arity$1(game)))
{return net.thegeez.datominoes.render.set_msg.call(null,"Game created.");
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deal","deal",-1166385728),new cljs.core.Keyword("game","stage","game/stage",1842511606).cljs$core$IFn$_invoke$arity$1(game)))
{net.thegeez.datominoes.render.set_msg.call(null,"Dealing ...");
return net.thegeez.datominoes.render.anim_deal.call(null,db,conn);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword("game","stage","game/stage",1842511606).cljs$core$IFn$_invoke$arity$1(game)))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("game","turn","game/turn",74760922).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game)))
{net.thegeez.datominoes.render.set_msg.call(null,"It's your turn, attach a stone on the table or pick from the stock if possible");
cljs.core.println.call(null,"Draw tree",new cljs.core.Keyword("table","places","table/places",916500296).cljs$core$IFn$_invoke$arity$1(game));
var seq__10076_10092 = cljs.core.seq.call(null,new cljs.core.Keyword("player","stones","player/stones",-617349594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game)));var chunk__10077_10093 = null;var count__10078_10094 = (0);var i__10079_10095 = (0);while(true){
if((i__10079_10095 < count__10078_10094))
{var stone_10096 = cljs.core._nth.call(null,chunk__10077_10093,i__10079_10095);net.thegeez.datominoes.render.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone_10096),net.thegeez.datominoes.render.home_drag_handler.call(null,db,conn));
{
var G__10097 = seq__10076_10092;
var G__10098 = chunk__10077_10093;
var G__10099 = count__10078_10094;
var G__10100 = (i__10079_10095 + (1));
seq__10076_10092 = G__10097;
chunk__10077_10093 = G__10098;
count__10078_10094 = G__10099;
i__10079_10095 = G__10100;
continue;
}
} else
{var temp__4126__auto___10101 = cljs.core.seq.call(null,seq__10076_10092);if(temp__4126__auto___10101)
{var seq__10076_10102__$1 = temp__4126__auto___10101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10076_10102__$1))
{var c__4395__auto___10103 = cljs.core.chunk_first.call(null,seq__10076_10102__$1);{
var G__10104 = cljs.core.chunk_rest.call(null,seq__10076_10102__$1);
var G__10105 = c__4395__auto___10103;
var G__10106 = cljs.core.count.call(null,c__4395__auto___10103);
var G__10107 = (0);
seq__10076_10092 = G__10104;
chunk__10077_10093 = G__10105;
count__10078_10094 = G__10106;
i__10079_10095 = G__10107;
continue;
}
} else
{var stone_10108 = cljs.core.first.call(null,seq__10076_10102__$1);net.thegeez.datominoes.render.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone_10108),net.thegeez.datominoes.render.home_drag_handler.call(null,db,conn));
{
var G__10109 = cljs.core.next.call(null,seq__10076_10102__$1);
var G__10110 = null;
var G__10111 = (0);
var G__10112 = (0);
seq__10076_10092 = G__10109;
chunk__10077_10093 = G__10110;
count__10078_10094 = G__10111;
i__10079_10095 = G__10112;
continue;
}
}
} else
{}
}
break;
}
var seq__10080 = cljs.core.seq.call(null,cljs.core.map.call(null,datascript.touch,new cljs.core.Keyword("table","places","table/places",916500296).cljs$core$IFn$_invoke$arity$1(game)));var chunk__10081 = null;var count__10082 = (0);var i__10083 = (0);while(true){
if((i__10083 < count__10082))
{var place = cljs.core._nth.call(null,chunk__10081,i__10083);if(cljs.core.truth_(new cljs.core.Keyword("place","used","place/used",-1291769160).cljs$core$IFn$_invoke$arity$1(place)))
{var G__10084_10113 = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(place);net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__10084_10113,"unused");
net.thegeez.datominoes.dom_helpers.add_class.call(null,G__10084_10113,net.thegeez.datominoes.render.place_class.call(null,place));
net.thegeez.datominoes.dom_helpers.set_position.call(null,G__10084_10113,new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place));
} else
{var G__10085_10114 = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(place);net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__10085_10114,net.thegeez.datominoes.render.place_class.call(null,place));
net.thegeez.datominoes.dom_helpers.add_class.call(null,G__10085_10114,"unused");
}
{
var G__10115 = seq__10080;
var G__10116 = chunk__10081;
var G__10117 = count__10082;
var G__10118 = (i__10083 + (1));
seq__10080 = G__10115;
chunk__10081 = G__10116;
count__10082 = G__10117;
i__10083 = G__10118;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10080);if(temp__4126__auto__)
{var seq__10080__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10080__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__10080__$1);{
var G__10119 = cljs.core.chunk_rest.call(null,seq__10080__$1);
var G__10120 = c__4395__auto__;
var G__10121 = cljs.core.count.call(null,c__4395__auto__);
var G__10122 = (0);
seq__10080 = G__10119;
chunk__10081 = G__10120;
count__10082 = G__10121;
i__10083 = G__10122;
continue;
}
} else
{var place = cljs.core.first.call(null,seq__10080__$1);if(cljs.core.truth_(new cljs.core.Keyword("place","used","place/used",-1291769160).cljs$core$IFn$_invoke$arity$1(place)))
{var G__10086_10123 = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(place);net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__10086_10123,"unused");
net.thegeez.datominoes.dom_helpers.add_class.call(null,G__10086_10123,net.thegeez.datominoes.render.place_class.call(null,place));
net.thegeez.datominoes.dom_helpers.set_position.call(null,G__10086_10123,new cljs.core.Keyword("place","left","place/left",-565014424).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword("place","top","place/top",-1473192288).cljs$core$IFn$_invoke$arity$1(place));
} else
{var G__10087_10124 = new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(place);net.thegeez.datominoes.dom_helpers.remove_class.call(null,G__10087_10124,net.thegeez.datominoes.render.place_class.call(null,place));
net.thegeez.datominoes.dom_helpers.add_class.call(null,G__10087_10124,"unused");
}
{
var G__10125 = cljs.core.next.call(null,seq__10080__$1);
var G__10126 = null;
var G__10127 = (0);
var G__10128 = (0);
seq__10080 = G__10125;
chunk__10081 = G__10126;
count__10082 = G__10127;
i__10083 = G__10128;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{net.thegeez.datominoes.render.set_msg.call(null,"Opponent to move");
var seq__10088 = cljs.core.seq.call(null,new cljs.core.Keyword("player","stones","player/stones",-617349594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","player1","game/player1",-1492668246).cljs$core$IFn$_invoke$arity$1(game)));var chunk__10089 = null;var count__10090 = (0);var i__10091 = (0);while(true){
if((i__10091 < count__10090))
{var stone = cljs.core._nth.call(null,chunk__10089,i__10091);net.thegeez.datominoes.render.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone),net.thegeez.datominoes.render.home_region_handler.call(null,db,conn));
{
var G__10129 = seq__10088;
var G__10130 = chunk__10089;
var G__10131 = count__10090;
var G__10132 = (i__10091 + (1));
seq__10088 = G__10129;
chunk__10089 = G__10130;
count__10090 = G__10131;
i__10091 = G__10132;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10088);if(temp__4126__auto__)
{var seq__10088__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10088__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__10088__$1);{
var G__10133 = cljs.core.chunk_rest.call(null,seq__10088__$1);
var G__10134 = c__4395__auto__;
var G__10135 = cljs.core.count.call(null,c__4395__auto__);
var G__10136 = (0);
seq__10088 = G__10133;
chunk__10089 = G__10134;
count__10090 = G__10135;
i__10091 = G__10136;
continue;
}
} else
{var stone = cljs.core.first.call(null,seq__10088__$1);net.thegeez.datominoes.render.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",-1618103516).cljs$core$IFn$_invoke$arity$1(stone),net.thegeez.datominoes.render.home_region_handler.call(null,db,conn));
{
var G__10137 = cljs.core.next.call(null,seq__10088__$1);
var G__10138 = null;
var G__10139 = (0);
var G__10140 = (0);
seq__10088 = G__10137;
chunk__10089 = G__10138;
count__10090 = G__10139;
i__10091 = G__10140;
continue;
}
}
} else
{return null;
}
}
break;
}
}
} else
{return null;
}
}
}
});
net.thegeez.datominoes.render.draw_table = (function draw_table(conn){var db = cljs.core.deref.call(null,conn);var G__10186_10231 = document.body;net.thegeez.datominoes.dom_helpers.append.call(null,G__10186_10231,net.thegeez.datominoes.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"their_region",new cljs.core.Keyword(null,"class","class",-2030961996),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stock","div.stock",1906565662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"stock"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"our_region",new cljs.core.Keyword(null,"class","class",-2030961996),"region our_region"], null)], null)], null)));
net.thegeez.datominoes.dom_helpers.append.call(null,G__10186_10231,net.thegeez.datominoes.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",1475870552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"msg"], null)], null)));
net.thegeez.datominoes.dom_helpers.append.call(null,G__10186_10231,net.thegeez.datominoes.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"footer"], null),"Datominoes for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://clojurecup.com"], null)," clojurecup 2014"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," by "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://thegeez.net"], null),"thegeez.net"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," - "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://twitter.com/thegeez"], null)," @thegeez"], null)], null)));
var container_wrap = (function (){var r = net.thegeez.datominoes.dom_helpers.get_bounds.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"table"));return (new goog.math.Rect((r.left + (4)),(r.top + (4)),((r.width - (3)) - (51)),((r.height - (3)) - (51))));
})();var stones = (function (){var iter__4364__auto__ = ((function (container_wrap,db){
return (function iter__10187(s__10188){return (new cljs.core.LazySeq(null,((function (container_wrap,db){
return (function (){var s__10188__$1 = s__10188;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10188__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var down = cljs.core.first.call(null,xs__4624__auto__);var iterys__4360__auto__ = ((function (s__10188__$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function iter__10189(s__10190){return (new cljs.core.LazySeq(null,((function (s__10188__$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (){var s__10190__$1 = s__10190;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10190__$1);if(temp__4126__auto____$1)
{var s__10190__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10190__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10190__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10192 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10191 = (0);while(true){
if((i__10191 < size__4363__auto__))
{var up = cljs.core._nth.call(null,c__4362__auto__,i__10191);cljs.core.chunk_append.call(null,b__10192,(function (){var idx = (down + (up * (7)));var stone_id = ("stone-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((up * (10)) + down)));var stone_el = net.thegeez.datominoes.render.stone_element.call(null,stone_id,up,down);var dragger = (function (){var G__10199 = (new goog.fx.Dragger(stone_el));G__10199.setLimits(container_wrap);
return G__10199;
})();stone_el.dispose = ((function (i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (){return dragger.dispose;
});})(i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
;
net.thegeez.datominoes.render.set_drag_handler.call(null,stone_el,net.thegeez.datominoes.render.undraggable_handler.call(null,db,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",292353430).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(i__10191,s__10188__$1,idx,stone_id,stone_el,dragger,up,c__4362__auto__,size__4363__auto__,b__10192,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),stone_id,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135),stone_el,new cljs.core.Keyword(null,"up","up",-269712113),up,new cljs.core.Keyword(null,"down","down",1565245570),down], null);
})());
{
var G__10232 = (i__10191 + (1));
i__10191 = G__10232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10192),iter__10189.call(null,cljs.core.chunk_rest.call(null,s__10190__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10192),null);
}
} else
{var up = cljs.core.first.call(null,s__10190__$2);return cljs.core.cons.call(null,(function (){var idx = (down + (up * (7)));var stone_id = ("stone-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((up * (10)) + down)));var stone_el = net.thegeez.datominoes.render.stone_element.call(null,stone_id,up,down);var dragger = (function (){var G__10200 = (new goog.fx.Dragger(stone_el));G__10200.setLimits(container_wrap);
return G__10200;
})();stone_el.dispose = ((function (s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (){return dragger.dispose;
});})(s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
;
net.thegeez.datominoes.render.set_drag_handler.call(null,stone_el,net.thegeez.datominoes.render.undraggable_handler.call(null,db,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",292353430).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888).cljs$core$IFn$_invoke$arity$1(stone_el.drag_handler).call(null,stone_id,event);
});})(s__10188__$1,idx,stone_id,stone_el,dragger,up,s__10190__$2,temp__4126__auto____$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),stone_id,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135),stone_el,new cljs.core.Keyword(null,"up","up",-269712113),up,new cljs.core.Keyword(null,"down","down",1565245570),down], null);
})(),iter__10189.call(null,cljs.core.rest.call(null,s__10190__$2)));
}
} else
{return null;
}
break;
}
});})(s__10188__$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
,null,null));
});})(s__10188__$1,down,xs__4624__auto__,temp__4126__auto__,container_wrap,db))
;var fs__4361__auto__ = cljs.core.seq.call(null,iterys__4360__auto__.call(null,cljs.core.range.call(null,down,(7))));if(fs__4361__auto__)
{return cljs.core.concat.call(null,fs__4361__auto__,iter__10187.call(null,cljs.core.rest.call(null,s__10188__$1)));
} else
{{
var G__10233 = cljs.core.rest.call(null,s__10188__$1);
s__10188__$1 = G__10233;
continue;
}
}
} else
{return null;
}
break;
}
});})(container_wrap,db))
,null,null));
});})(container_wrap,db))
;return iter__4364__auto__.call(null,cljs.core.range.call(null,(7)));
})();var places = (function (){var iter__4364__auto__ = ((function (container_wrap,stones,db){
return (function iter__10201(s__10202){return (new cljs.core.LazySeq(null,((function (container_wrap,stones,db){
return (function (){var s__10202__$1 = s__10202;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10202__$1);if(temp__4126__auto__)
{var s__10202__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10202__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10202__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10204 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10203 = (0);while(true){
if((i__10203 < size__4363__auto__))
{var i = cljs.core._nth.call(null,c__4362__auto__,i__10203);cljs.core.chunk_append.call(null,b__10204,(function (){var id = ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"place-el","place-el",1164071941),net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"place unused"], null))], null);
})());
{
var G__10234 = (i__10203 + (1));
i__10203 = G__10234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10204),iter__10201.call(null,cljs.core.chunk_rest.call(null,s__10202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10204),null);
}
} else
{var i = cljs.core.first.call(null,s__10202__$2);return cljs.core.cons.call(null,(function (){var id = ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"place-el","place-el",1164071941),net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"place unused"], null))], null);
})(),iter__10201.call(null,cljs.core.rest.call(null,s__10202__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,stones,db))
,null,null));
});})(container_wrap,stones,db))
;return iter__4364__auto__.call(null,cljs.core.range.call(null,(20)));
})();var seq__10205_10235 = cljs.core.seq.call(null,stones);var chunk__10206_10236 = null;var count__10207_10237 = (0);var i__10208_10238 = (0);while(true){
if((i__10208_10238 < count__10207_10237))
{var map__10209_10239 = cljs.core._nth.call(null,chunk__10206_10236,i__10208_10238);var map__10209_10240__$1 = ((cljs.core.seq_QMARK_.call(null,map__10209_10239))?cljs.core.apply.call(null,cljs.core.hash_map,map__10209_10239):map__10209_10239);var idx_10241 = cljs.core.get.call(null,map__10209_10240__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var stone_el_10242 = cljs.core.get.call(null,map__10209_10240__$1,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135));stone_el_10242.anim_idx = idx_10241;
net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"table"),stone_el_10242);
{
var G__10243 = seq__10205_10235;
var G__10244 = chunk__10206_10236;
var G__10245 = count__10207_10237;
var G__10246 = (i__10208_10238 + (1));
seq__10205_10235 = G__10243;
chunk__10206_10236 = G__10244;
count__10207_10237 = G__10245;
i__10208_10238 = G__10246;
continue;
}
} else
{var temp__4126__auto___10247 = cljs.core.seq.call(null,seq__10205_10235);if(temp__4126__auto___10247)
{var seq__10205_10248__$1 = temp__4126__auto___10247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10205_10248__$1))
{var c__4395__auto___10249 = cljs.core.chunk_first.call(null,seq__10205_10248__$1);{
var G__10250 = cljs.core.chunk_rest.call(null,seq__10205_10248__$1);
var G__10251 = c__4395__auto___10249;
var G__10252 = cljs.core.count.call(null,c__4395__auto___10249);
var G__10253 = (0);
seq__10205_10235 = G__10250;
chunk__10206_10236 = G__10251;
count__10207_10237 = G__10252;
i__10208_10238 = G__10253;
continue;
}
} else
{var map__10210_10254 = cljs.core.first.call(null,seq__10205_10248__$1);var map__10210_10255__$1 = ((cljs.core.seq_QMARK_.call(null,map__10210_10254))?cljs.core.apply.call(null,cljs.core.hash_map,map__10210_10254):map__10210_10254);var idx_10256 = cljs.core.get.call(null,map__10210_10255__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var stone_el_10257 = cljs.core.get.call(null,map__10210_10255__$1,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135));stone_el_10257.anim_idx = idx_10256;
net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"table"),stone_el_10257);
{
var G__10258 = cljs.core.next.call(null,seq__10205_10248__$1);
var G__10259 = null;
var G__10260 = (0);
var G__10261 = (0);
seq__10205_10235 = G__10258;
chunk__10206_10236 = G__10259;
count__10207_10237 = G__10260;
i__10208_10238 = G__10261;
continue;
}
}
} else
{}
}
break;
}
var seq__10211_10262 = cljs.core.seq.call(null,places);var chunk__10212_10263 = null;var count__10213_10264 = (0);var i__10214_10265 = (0);while(true){
if((i__10214_10265 < count__10213_10264))
{var place_10266 = cljs.core._nth.call(null,chunk__10212_10263,i__10214_10265);net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"table"),new cljs.core.Keyword(null,"place-el","place-el",1164071941).cljs$core$IFn$_invoke$arity$1(place_10266));
{
var G__10267 = seq__10211_10262;
var G__10268 = chunk__10212_10263;
var G__10269 = count__10213_10264;
var G__10270 = (i__10214_10265 + (1));
seq__10211_10262 = G__10267;
chunk__10212_10263 = G__10268;
count__10213_10264 = G__10269;
i__10214_10265 = G__10270;
continue;
}
} else
{var temp__4126__auto___10271 = cljs.core.seq.call(null,seq__10211_10262);if(temp__4126__auto___10271)
{var seq__10211_10272__$1 = temp__4126__auto___10271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10211_10272__$1))
{var c__4395__auto___10273 = cljs.core.chunk_first.call(null,seq__10211_10272__$1);{
var G__10274 = cljs.core.chunk_rest.call(null,seq__10211_10272__$1);
var G__10275 = c__4395__auto___10273;
var G__10276 = cljs.core.count.call(null,c__4395__auto___10273);
var G__10277 = (0);
seq__10211_10262 = G__10274;
chunk__10212_10263 = G__10275;
count__10213_10264 = G__10276;
i__10214_10265 = G__10277;
continue;
}
} else
{var place_10278 = cljs.core.first.call(null,seq__10211_10272__$1);net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"table"),new cljs.core.Keyword(null,"place-el","place-el",1164071941).cljs$core$IFn$_invoke$arity$1(place_10278));
{
var G__10279 = cljs.core.next.call(null,seq__10211_10272__$1);
var G__10280 = null;
var G__10281 = (0);
var G__10282 = (0);
seq__10211_10262 = G__10279;
chunk__10212_10263 = G__10280;
count__10213_10264 = G__10281;
i__10214_10265 = G__10282;
continue;
}
}
} else
{}
}
break;
}
var game_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(net.thegeez.datominoes.transact.find_game.call(null,cljs.core.deref.call(null,conn)));return datascript.transact_BANG_.call(null,conn,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4364__auto__ = ((function (game_eid,container_wrap,stones,places,db){
return (function iter__10215(s__10216){return (new cljs.core.LazySeq(null,((function (game_eid,container_wrap,stones,places,db){
return (function (){var s__10216__$1 = s__10216;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10216__$1);if(temp__4126__auto__)
{var s__10216__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10216__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10216__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10218 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10217 = (0);while(true){
if((i__10217 < size__4363__auto__))
{var map__10221 = cljs.core._nth.call(null,c__4362__auto__,i__10217);var map__10221__$1 = ((cljs.core.seq_QMARK_.call(null,map__10221))?cljs.core.apply.call(null,cljs.core.hash_map,map__10221):map__10221);var down = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"down","down",1565245570));var up = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"up","up",-269712113));var stone_el = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135));var id = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__10218,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759)),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),stone_el,new cljs.core.Keyword("table","_stock","table/_stock",-1048093932),game_eid,new cljs.core.Keyword("stone","orientation","stone/orientation",715112302),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword("stone","up","stone/up",-110789460),up,new cljs.core.Keyword("stone","down","stone/down",1337505805),down], null));
{
var G__10283 = (i__10217 + (1));
i__10217 = G__10283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10218),iter__10215.call(null,cljs.core.chunk_rest.call(null,s__10216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10218),null);
}
} else
{var map__10222 = cljs.core.first.call(null,s__10216__$2);var map__10222__$1 = ((cljs.core.seq_QMARK_.call(null,map__10222))?cljs.core.apply.call(null,cljs.core.hash_map,map__10222):map__10222);var down = cljs.core.get.call(null,map__10222__$1,new cljs.core.Keyword(null,"down","down",1565245570));var up = cljs.core.get.call(null,map__10222__$1,new cljs.core.Keyword(null,"up","up",-269712113));var stone_el = cljs.core.get.call(null,map__10222__$1,new cljs.core.Keyword(null,"stone-el","stone-el",-1859975135));var id = cljs.core.get.call(null,map__10222__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759)),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),stone_el,new cljs.core.Keyword("table","_stock","table/_stock",-1048093932),game_eid,new cljs.core.Keyword("stone","orientation","stone/orientation",715112302),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword("stone","up","stone/up",-110789460),up,new cljs.core.Keyword("stone","down","stone/down",1337505805),down], null),iter__10215.call(null,cljs.core.rest.call(null,s__10216__$2)));
}
} else
{return null;
}
break;
}
});})(game_eid,container_wrap,stones,places,db))
,null,null));
});})(game_eid,container_wrap,stones,places,db))
;return iter__4364__auto__.call(null,stones);
})()),(function (){var iter__4364__auto__ = ((function (game_eid,container_wrap,stones,places,db){
return (function iter__10223(s__10224){return (new cljs.core.LazySeq(null,((function (game_eid,container_wrap,stones,places,db){
return (function (){var s__10224__$1 = s__10224;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10224__$1);if(temp__4126__auto__)
{var s__10224__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10224__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__10224__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__10226 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__10225 = (0);while(true){
if((i__10225 < size__4363__auto__))
{var map__10229 = cljs.core._nth.call(null,c__4362__auto__,i__10225);var map__10229__$1 = ((cljs.core.seq_QMARK_.call(null,map__10229))?cljs.core.apply.call(null,cljs.core.hash_map,map__10229):map__10229);var place_el = cljs.core.get.call(null,map__10229__$1,new cljs.core.Keyword(null,"place-el","place-el",1164071941));var id = cljs.core.get.call(null,map__10229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__10226,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759)),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),place_el,new cljs.core.Keyword("table","_places","table/_places",-1272465919),game_eid,new cljs.core.Keyword("place","left","place/left",-565014424),(380),new cljs.core.Keyword("place","top","place/top",-1473192288),(240),new cljs.core.Keyword("place","used","place/used",-1291769160),false,new cljs.core.Keyword("place","orientation","place/orientation",709730004),new cljs.core.Keyword(null,"south","south",1586796293)], null));
{
var G__10284 = (i__10225 + (1));
i__10225 = G__10284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10226),iter__10223.call(null,cljs.core.chunk_rest.call(null,s__10224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10226),null);
}
} else
{var map__10230 = cljs.core.first.call(null,s__10224__$2);var map__10230__$1 = ((cljs.core.seq_QMARK_.call(null,map__10230))?cljs.core.apply.call(null,cljs.core.hash_map,map__10230):map__10230);var place_el = cljs.core.get.call(null,map__10230__$1,new cljs.core.Keyword(null,"place-el","place-el",1164071941));var id = cljs.core.get.call(null,map__10230__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.tempid.call(null,new cljs.core.Keyword(null,"db","db",993250759)),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),place_el,new cljs.core.Keyword("table","_places","table/_places",-1272465919),game_eid,new cljs.core.Keyword("place","left","place/left",-565014424),(380),new cljs.core.Keyword("place","top","place/top",-1473192288),(240),new cljs.core.Keyword("place","used","place/used",-1291769160),false,new cljs.core.Keyword("place","orientation","place/orientation",709730004),new cljs.core.Keyword(null,"south","south",1586796293)], null),iter__10223.call(null,cljs.core.rest.call(null,s__10224__$2)));
}
} else
{return null;
}
break;
}
});})(game_eid,container_wrap,stones,places,db))
,null,null));
});})(game_eid,container_wrap,stones,places,db))
;return iter__4364__auto__.call(null,places);
})()));
});
net.thegeez.datominoes.render.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return net.thegeez.datominoes.render.draw.call(null,report,conn);
}));
return net.thegeez.datominoes.render.draw_table.call(null,conn);
});
