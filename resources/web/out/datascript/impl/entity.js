// Compiled by ClojureScript 0.0-2342
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_.call(null,db,a))
{if(datascript.core.ref_QMARK_.call(null,db,a))
{return cljs.core.reduce.call(null,(function (p1__9663_SHARP_,p2__9664_SHARP_){return cljs.core.conj.call(null,p1__9663_SHARP_,datascript.impl.entity.entity.call(null,db,p2__9664_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.call(null,(function (p1__9665_SHARP_,p2__9666_SHARP_){return cljs.core.conj.call(null,p1__9665_SHARP_,p2__9666_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else
{if(datascript.core.ref_QMARK_.call(null,db,a))
{return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else
{return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){return cljs.core.reduce.call(null,(function (acc,part){var a = cljs.core.first.call(null,part).a;return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___9667 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___9667))
{var datoms_9668 = temp__4126__auto___9667;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_9668);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.call(null,((function (datoms,temp__4124__auto__){
return (function (p1__9669_SHARP_,p2__9670_SHARP_){return cljs.core.conj.call(null,p1__9669_SHARP_,datascript.impl.entity.entity.call(null,db,p2__9670_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){if(cljs.core.truth_(val))
{return cljs.core.to_array.call(null,val);
} else
{return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){datascript.impl.entity.touch.call(null,e);
var iter__4364__auto__ = (function iter__9679(s__9680){return (new cljs.core.LazySeq(null,(function (){var s__9680__$1 = s__9680;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9680__$1);if(temp__4126__auto__)
{var s__9680__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9680__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9680__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9682 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9681 = (0);while(true){
if((i__9681 < size__4363__auto__))
{var vec__9685 = cljs.core._nth.call(null,c__4362__auto__,i__9681);var a = cljs.core.nth.call(null,vec__9685,(0),null);var v = cljs.core.nth.call(null,vec__9685,(1),null);cljs.core.chunk_append.call(null,b__9682,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__9687 = (i__9681 + (1));
i__9681 = G__9687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9682),iter__9679.call(null,cljs.core.chunk_rest.call(null,s__9680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9682),null);
}
} else
{var vec__9686 = cljs.core.first.call(null,s__9680__$2);var a = cljs.core.nth.call(null,vec__9686,(0),null);var v = cljs.core.nth.call(null,vec__9686,(1),null);return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__9679.call(null,cljs.core.rest.call(null,s__9680__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__.call(null,e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.cljs$lang$type = true;
datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__9703 = null;
var G__9703__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__9703__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__9703 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9703__2.call(this,self__,k);
case 3:
return G__9703__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9703.cljs$core$IFn$_invoke$arity$2 = G__9703__2;
G__9703.cljs$core$IFn$_invoke$arity$3 = G__9703__3;
return G__9703;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args9688){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9688)));
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,attr,null);
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098)))
{return self__.eid;
} else
{var temp__4124__auto__ = datascript.core.reverse_ref.call(null,attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr__$1 = temp__4124__auto__;return datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,not_found);
} else
{var or__3626__auto__ = self__.cache.call(null,attr);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty.call(null,datascript.core._search.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.call(null,self__.cache,attr,datascript.impl.entity.entity_attr.call(null,self__.db,attr,datoms));
return self__.cache.call(null,attr);
} else
{return not_found;
}
}
}
}
}
});
datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch.call(null,this$__$1);
return cljs.core.count.call(null,self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch.call(null,this$__$1);
return cljs.core.seq.call(null,self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.eid);
});
datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,self__.eid,o.eid));
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__9704 = null;
var G__9704__1 = (function (f){var self__ = this;
var this$ = this;var seq__9689 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__9690 = null;var count__9691 = (0);var i__9692 = (0);while(true){
if((i__9692 < count__9691))
{var vec__9693 = cljs.core._nth.call(null,chunk__9690,i__9692);var a = cljs.core.nth.call(null,vec__9693,(0),null);var v = cljs.core.nth.call(null,vec__9693,(1),null);f.call(null,v,a,this$);
{
var G__9705 = seq__9689;
var G__9706 = chunk__9690;
var G__9707 = count__9691;
var G__9708 = (i__9692 + (1));
seq__9689 = G__9705;
chunk__9690 = G__9706;
count__9691 = G__9707;
i__9692 = G__9708;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9689);if(temp__4126__auto__)
{var seq__9689__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9689__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__9689__$1);{
var G__9709 = cljs.core.chunk_rest.call(null,seq__9689__$1);
var G__9710 = c__4395__auto__;
var G__9711 = cljs.core.count.call(null,c__4395__auto__);
var G__9712 = (0);
seq__9689 = G__9709;
chunk__9690 = G__9710;
count__9691 = G__9711;
i__9692 = G__9712;
continue;
}
} else
{var vec__9694 = cljs.core.first.call(null,seq__9689__$1);var a = cljs.core.nth.call(null,vec__9694,(0),null);var v = cljs.core.nth.call(null,vec__9694,(1),null);f.call(null,v,a,this$);
{
var G__9713 = cljs.core.next.call(null,seq__9689__$1);
var G__9714 = null;
var G__9715 = (0);
var G__9716 = (0);
seq__9689 = G__9713;
chunk__9690 = G__9714;
count__9691 = G__9715;
i__9692 = G__9716;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var G__9704__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__9695 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__9696 = null;var count__9697 = (0);var i__9698 = (0);while(true){
if((i__9698 < count__9697))
{var vec__9699 = cljs.core._nth.call(null,chunk__9696,i__9698);var a = cljs.core.nth.call(null,vec__9699,(0),null);var v = cljs.core.nth.call(null,vec__9699,(1),null);f.call(use_as_this,v,a,this$);
{
var G__9717 = seq__9695;
var G__9718 = chunk__9696;
var G__9719 = count__9697;
var G__9720 = (i__9698 + (1));
seq__9695 = G__9717;
chunk__9696 = G__9718;
count__9697 = G__9719;
i__9698 = G__9720;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9695);if(temp__4126__auto__)
{var seq__9695__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9695__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__9695__$1);{
var G__9721 = cljs.core.chunk_rest.call(null,seq__9695__$1);
var G__9722 = c__4395__auto__;
var G__9723 = cljs.core.count.call(null,c__4395__auto__);
var G__9724 = (0);
seq__9695 = G__9721;
chunk__9696 = G__9722;
count__9697 = G__9723;
i__9698 = G__9724;
continue;
}
} else
{var vec__9700 = cljs.core.first.call(null,seq__9695__$1);var a = cljs.core.nth.call(null,vec__9700,(0),null);var v = cljs.core.nth.call(null,vec__9700,(1),null);f.call(use_as_this,v,a,this$);
{
var G__9725 = cljs.core.next.call(null,seq__9695__$1);
var G__9726 = null;
var G__9727 = (0);
var G__9728 = (0);
seq__9695 = G__9725;
chunk__9696 = G__9726;
count__9697 = G__9727;
i__9698 = G__9728;
continue;
}
}
} else
{return null;
}
}
break;
}
});
G__9704 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__9704__1.call(this,f);
case 2:
return G__9704__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9704.cljs$core$IFn$_invoke$arity$1 = G__9704__1;
G__9704.cljs$core$IFn$_invoke$arity$2 = G__9704__2;
return G__9704;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.call(null,attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__9701 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__9701,(0),null);var ns = cljs.core.nth.call(null,vec__9701,(1),null);var name = cljs.core.nth.call(null,vec__9701,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else
{var G__9702 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__9702__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__9702):G__9702);return G__9702__$1;
}
}
});
datascript.impl.entity.Entity.prototype.key_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});
datascript.impl.entity.Entity.prototype.entries = (function (){var self__ = this;
var this$ = this;return cljs.core.entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});
datascript.impl.entity.Entity.prototype.value_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
datascript.impl.entity.Entity.prototype.keys = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator.call(null,cljs.core.keys.call(null,this$));
});
datascript.impl.entity.Entity.prototype.values = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
datascript.impl.entity.Entity.prototype.has = (function (attr){var self__ = this;
var this$ = this;return !((this$.get(attr) == null));
});
datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);
goog.exportSymbol("cljs.core.Iterator.prototype.next",cljs.core.Iterator.prototype.next);
goog.exportSymbol("cljs.core.EntriesIterator.prototype.next",cljs.core.EntriesIterator.prototype.next);
