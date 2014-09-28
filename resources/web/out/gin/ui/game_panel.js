// Compiled by ClojureScript 0.0-2342
goog.provide('gin.ui.game_panel');
goog.require('cljs.core');
goog.require('net.thegeez.datominoes.dom_helpers');
goog.require('net.thegeez.datominoes.dom_helpers');
goog.require('goog.fx.Dragger');
goog.require('datascript');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('goog.math');
goog.require('goog.math');
goog.require('goog.events');
goog.require('datascript');
gin.ui.game_panel.draw_table = (function draw_table(conn){var G__78578_78602 = document.body;net.thegeez.datominoes.dom_helpers.get_element.call(null,G__78578_78602,"game-panel");
net.thegeez.datominoes.dom_helpers.append.call(null,G__78578_78602,net.thegeez.datominoes.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"their_region",new cljs.core.Keyword(null,"class","class",-2030961996),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1948129389),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1724568771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",380012464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"our_region",new cljs.core.Keyword(null,"class","class",-2030961996),"region our_region"], null)], null)], null)));
net.thegeez.datominoes.dom_helpers.append.call(null,G__78578_78602,net.thegeez.datominoes.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",1475870552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"msg"], null)], null)));
var container_wrap = (function (){var r = net.thegeez.datominoes.dom_helpers.get_bounds.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - (81)),((r.height - (96)) - (37))));
})();var vec__78579 = gin.ui.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__78579,(0),null);var pile_y = cljs.core.nth.call(null,vec__78579,(1),null);var cards = (function (){var iter__4364__auto__ = ((function (container_wrap,vec__78579,pile_x,pile_y){
return (function iter__78580(s__78581){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__78579,pile_x,pile_y){
return (function (){var s__78581__$1 = s__78581;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__78581__$1);if(temp__4126__auto__)
{var s__78581__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78581__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__78581__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__78583 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__78582 = (0);while(true){
if((i__78582 < size__4363__auto__))
{var i = cljs.core._nth.call(null,c__4362__auto__,i__78582);cljs.core.chunk_append.call(null,b__78583,(function (){var card_id = ("card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));var card_el = net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),card_id,new cljs.core.Keyword(null,"class","class",-2030961996),"card card_back"], null));var dragger = (function (){var G__78586 = (new goog.fx.Dragger(card_el));G__78586.setLimits(container_wrap);
return G__78586;
})();card_el.dispose = ((function (i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",292353430).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__78582,card_id,card_el,dragger,i,c__4362__auto__,size__4363__auto__,b__78583,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),card_id,new cljs.core.Keyword(null,"idx","idx",1053688473),i,new cljs.core.Keyword(null,"card-el","card-el",-713126792),card_el], null);
})());
{
var G__78603 = (i__78582 + (1));
i__78582 = G__78603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78583),iter__78580.call(null,cljs.core.chunk_rest.call(null,s__78581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78583),null);
}
} else
{var i = cljs.core.first.call(null,s__78581__$2);return cljs.core.cons.call(null,(function (){var card_id = ("card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));var card_el = net.thegeez.datominoes.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),card_id,new cljs.core.Keyword(null,"class","class",-2030961996),"card card_back"], null));var dragger = (function (){var G__78587 = (new goog.fx.Dragger(card_el));G__78587.setLimits(container_wrap);
return G__78587;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",292353430).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__78581__$2,temp__4126__auto__,container_wrap,vec__78579,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),card_id,new cljs.core.Keyword(null,"idx","idx",1053688473),i,new cljs.core.Keyword(null,"card-el","card-el",-713126792),card_el], null);
})(),iter__78580.call(null,cljs.core.rest.call(null,s__78581__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__78579,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__78579,pile_x,pile_y))
;return iter__4364__auto__.call(null,cljs.core.range.call(null,(52)));
})();var seq__78588_78604 = cljs.core.seq.call(null,cards);var chunk__78589_78605 = null;var count__78590_78606 = (0);var i__78591_78607 = (0);while(true){
if((i__78591_78607 < count__78590_78606))
{var map__78592_78608 = cljs.core._nth.call(null,chunk__78589_78605,i__78591_78607);var map__78592_78609__$1 = ((cljs.core.seq_QMARK_.call(null,map__78592_78608))?cljs.core.apply.call(null,cljs.core.hash_map,map__78592_78608):map__78592_78608);var idx_78610 = cljs.core.get.call(null,map__78592_78609__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var card_el_78611 = cljs.core.get.call(null,map__78592_78609__$1,new cljs.core.Keyword(null,"card-el","card-el",-713126792));card_el_78611.anim_idx = idx_78610;
net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"pile"),card_el_78611);
{
var G__78612 = seq__78588_78604;
var G__78613 = chunk__78589_78605;
var G__78614 = count__78590_78606;
var G__78615 = (i__78591_78607 + (1));
seq__78588_78604 = G__78612;
chunk__78589_78605 = G__78613;
count__78590_78606 = G__78614;
i__78591_78607 = G__78615;
continue;
}
} else
{var temp__4126__auto___78616 = cljs.core.seq.call(null,seq__78588_78604);if(temp__4126__auto___78616)
{var seq__78588_78617__$1 = temp__4126__auto___78616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78588_78617__$1))
{var c__4395__auto___78618 = cljs.core.chunk_first.call(null,seq__78588_78617__$1);{
var G__78619 = cljs.core.chunk_rest.call(null,seq__78588_78617__$1);
var G__78620 = c__4395__auto___78618;
var G__78621 = cljs.core.count.call(null,c__4395__auto___78618);
var G__78622 = (0);
seq__78588_78604 = G__78619;
chunk__78589_78605 = G__78620;
count__78590_78606 = G__78621;
i__78591_78607 = G__78622;
continue;
}
} else
{var map__78593_78623 = cljs.core.first.call(null,seq__78588_78617__$1);var map__78593_78624__$1 = ((cljs.core.seq_QMARK_.call(null,map__78593_78623))?cljs.core.apply.call(null,cljs.core.hash_map,map__78593_78623):map__78593_78623);var idx_78625 = cljs.core.get.call(null,map__78593_78624__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var card_el_78626 = cljs.core.get.call(null,map__78593_78624__$1,new cljs.core.Keyword(null,"card-el","card-el",-713126792));card_el_78626.anim_idx = idx_78625;
net.thegeez.datominoes.dom_helpers.append.call(null,net.thegeez.datominoes.dom_helpers.get_element.call(null,"pile"),card_el_78626);
{
var G__78627 = cljs.core.next.call(null,seq__78588_78617__$1);
var G__78628 = null;
var G__78629 = (0);
var G__78630 = (0);
seq__78588_78604 = G__78627;
chunk__78589_78605 = G__78628;
count__78590_78606 = G__78629;
i__78591_78607 = G__78630;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__4364__auto__ = ((function (container_wrap,vec__78579,pile_x,pile_y,cards){
return (function iter__78594(s__78595){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__78579,pile_x,pile_y,cards){
return (function (){var s__78595__$1 = s__78595;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__78595__$1);if(temp__4126__auto__)
{var s__78595__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78595__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__78595__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__78597 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__78596 = (0);while(true){
if((i__78596 < size__4363__auto__))
{var map__78600 = cljs.core._nth.call(null,c__4362__auto__,i__78596);var map__78600__$1 = ((cljs.core.seq_QMARK_.call(null,map__78600))?cljs.core.apply.call(null,cljs.core.hash_map,map__78600):map__78600);var card_el = cljs.core.get.call(null,map__78600__$1,new cljs.core.Keyword(null,"card-el","card-el",-713126792));var idx = cljs.core.get.call(null,map__78600__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var id = cljs.core.get.call(null,map__78600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__78597,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),((-1) * idx),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),card_el,new cljs.core.Keyword("card","suit","card/suit",-874905296),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword("card","rank","card/rank",-1703679270),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
{
var G__78631 = (i__78596 + (1));
i__78596 = G__78631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78597),iter__78594.call(null,cljs.core.chunk_rest.call(null,s__78595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78597),null);
}
} else
{var map__78601 = cljs.core.first.call(null,s__78595__$2);var map__78601__$1 = ((cljs.core.seq_QMARK_.call(null,map__78601))?cljs.core.apply.call(null,cljs.core.hash_map,map__78601):map__78601);var card_el = cljs.core.get.call(null,map__78601__$1,new cljs.core.Keyword(null,"card-el","card-el",-713126792));var idx = cljs.core.get.call(null,map__78601__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));var id = cljs.core.get.call(null,map__78601__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),((-1) * idx),new cljs.core.Keyword("dom","id","dom/id",-1388432110),id,new cljs.core.Keyword("dom","el","dom/el",-1618103516),card_el,new cljs.core.Keyword("card","suit","card/suit",-874905296),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword("card","rank","card/rank",-1703679270),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null),iter__78594.call(null,cljs.core.rest.call(null,s__78595__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__78579,pile_x,pile_y,cards))
,null,null));
});})(container_wrap,vec__78579,pile_x,pile_y,cards))
;return iter__4364__auto__.call(null,cards);
})());
});
gin.ui.game_panel.start_game_panel = (function start_game_panel(conn){return gin.ui.game_panel.draw_table.call(null,conn);
});
