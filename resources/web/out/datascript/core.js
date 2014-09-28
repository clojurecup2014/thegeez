// Compiled by ClojureScript 0.0-2342
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.call(null,this__4221__auto____$1,k__4222__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k9782,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__9784 = (((k9782 instanceof cljs.core.Keyword))?k9782.fqn:null);switch (G__9784) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9782,else__4224__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,pr_pair__4238__auto__,"#datascript.core.Datom{",", ","}",opts__4237__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap.call(null,this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
var this__4217__auto____$1 = this;if(cljs.core.truth_((function (){var and__3614__auto__ = other__4218__auto__;if(cljs.core.truth_(and__3614__auto__))
{return ((this__4217__auto____$1.constructor === other__4218__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4217__auto____$1,other__4218__auto__));
} else
{return and__3614__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4231__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4231__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__9781){var self__ = this;
var this__4228__auto____$1 = this;var pred__9785 = cljs.core.keyword_identical_QMARK_;var expr__9786 = k__4229__auto__;if(cljs.core.truth_(pred__9785.call(null,new cljs.core.Keyword(null,"e","e",1381269198),expr__9786)))
{return (new datascript.core.Datom(G__9781,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9785.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__9786)))
{return (new datascript.core.Datom(self__.e,G__9781,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9785.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__9786)))
{return (new datascript.core.Datom(self__.e,self__.a,G__9781,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9785.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),expr__9786)))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__9781,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9785.call(null,new cljs.core.Keyword(null,"added","added",2057651688),expr__9786)))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__9781,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4229__auto__,G__9781),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__9781){var self__ = this;
var this__4220__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__9781,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4227__auto__))
{return cljs.core._assoc.call(null,this__4226__auto____$1,cljs.core._nth.call(null,entry__4227__auto__,(0)),cljs.core._nth.call(null,entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write.call(null,writer__4256__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__9783){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__9783),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__9783),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__9783),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__9783),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__9783),null,cljs.core.dissoc.call(null,G__9783,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__3626__auto__ = d__$1.__hash;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d__$1.e),cljs.core.hash.call(null,d__$1.a)),cljs.core.hash.call(null,d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj9790 = {};return obj9790;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__3614__auto__ = data;if(and__3614__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__3614__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__4262__auto__ = (((data == null))?null:data);return (function (){var or__3626__auto__ = (datascript.core._search[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datascript.core._search["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2)))
{var t1 = cljs.core.type.call(null,o1);var t2 = cljs.core.type.call(null,o2);if(cljs.core._EQ_.call(null,t1,t2))
{return cljs.core.compare.call(null,o1,o2);
} else
{return cljs.core.compare.call(null,t1,t2);
}
} else
{return (0);
}
});
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__3614__auto__ = o1;if(cljs.core.truth_(and__3614__auto__))
{return o2;
} else
{return and__3614__auto__;
}
})()))
{return cljs.core.compare.call(null,o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__5114__auto__ = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__5114__auto__))
{var c__5114__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__5114__auto____$1))
{var c__5114__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__5114__auto____$2))
{var c__5114__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__5114__auto____$3))
{return (0);
} else
{return c__5114__auto____$3;
}
} else
{return c__5114__auto____$2;
}
} else
{return c__5114__auto____$1;
}
} else
{return c__5114__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__5114__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__5114__auto__))
{var c__5114__auto____$1 = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__5114__auto____$1))
{var c__5114__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__5114__auto____$2))
{var c__5114__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__5114__auto____$3))
{return (0);
} else
{return c__5114__auto____$3;
}
} else
{return c__5114__auto____$2;
}
} else
{return c__5114__auto____$1;
}
} else
{return c__5114__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__5114__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__5114__auto__))
{var c__5114__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__5114__auto____$1))
{var c__5114__auto____$2 = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__5114__auto____$2))
{var c__5114__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__5114__auto____$3))
{return (0);
} else
{return c__5114__auto____$3;
}
} else
{return c__5114__auto____$2;
}
} else
{return c__5114__auto____$1;
}
} else
{return c__5114__auto__;
}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} refs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,refs,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.DB.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.call(null,this__4221__auto____$1,k__4222__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k9801,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__9803 = (((k9801 instanceof cljs.core.Keyword))?k9801.fqn:null);switch (G__9803) {
case "refs":
return self__.refs;

break;
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9801,else__4224__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,pr_pair__4238__auto__,"#datascript.core.DB{",", ","}",opts__4237__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap.call(null,this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
var this__4217__auto____$1 = this;if(cljs.core.truth_((function (){var and__3614__auto__ = other__4218__auto__;if(cljs.core.truth_(and__3614__auto__))
{return ((this__4217__auto____$1.constructor === other__4218__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4217__auto____$1,other__4218__auto__));
} else
{return and__3614__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"refs","refs",-1560051448),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__4231__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4231__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__9800){var self__ = this;
var this__4228__auto____$1 = this;var pred__9804 = cljs.core.keyword_identical_QMARK_;var expr__9805 = k__4229__auto__;if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9805)))
{return (new datascript.core.DB(G__9800,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__9805)))
{return (new datascript.core.DB(self__.schema,G__9800,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__9805)))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__9800,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__9805)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__9800,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__9805)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__9800,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__9805)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__9800,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9804.call(null,new cljs.core.Keyword(null,"refs","refs",-1560051448),expr__9805)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__9800,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4229__auto__,G__9800),null));
}
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__9800){var self__ = this;
var this__4220__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__9800,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4227__auto__))
{return cljs.core._assoc.call(null,this__4226__auto____$1,cljs.core._nth.call(null,entry__4227__auto__,(0)),cljs.core._nth.call(null,entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__9807){var self__ = this;
var vec__9808 = p__9807;var e = cljs.core.nth.call(null,vec__9808,(0),null);var a = cljs.core.nth.call(null,vec__9808,(1),null);var v = cljs.core.nth.call(null,vec__9808,(2),null);var tx = cljs.core.nth.call(null,vec__9808,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9791_SHARP_){return cljs.core._EQ_.call(null,tx,p1__9791_SHARP_.tx);
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9792_SHARP_){return (cljs.core._EQ_.call(null,v,p1__9792_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__9792_SHARP_.tx));
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9793_SHARP_){return cljs.core._EQ_.call(null,v,p1__9793_SHARP_.v);
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9794_SHARP_){return cljs.core._EQ_.call(null,tx,p1__9794_SHARP_.tx);
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9795_SHARP_){return cljs.core._EQ_.call(null,tx,p1__9795_SHARP_.tx);
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9796_SHARP_){return cljs.core._EQ_.call(null,tx,p1__9796_SHARP_.tx);
});})(___$1,vec__9808,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9797_SHARP_){return (cljs.core._EQ_.call(null,v,p1__9797_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__9797_SHARP_.tx));
});})(___$1,vec__9808,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9798_SHARP_){return cljs.core._EQ_.call(null,v,p1__9798_SHARP_.v);
});})(___$1,vec__9808,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__9808,e,a,v,tx){
return (function (p1__9799_SHARP_){return cljs.core._EQ_.call(null,tx,p1__9799_SHARP_.tx);
});})(___$1,vec__9808,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write.call(null,writer__4256__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,refs){return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx,refs));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__9802){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__9802),new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(G__9802),null,cljs.core.dissoc.call(null,G__9802,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"refs","refs",-1560051448))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__3614__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));if(and__3614__auto__)
{var xs = cljs.core.seq.call(null,x);var ys = cljs.core.seq.call(null,y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__9810 = cljs.core.next.call(null,xs);
var G__9811 = cljs.core.next.call(null,ys);
xs = G__9810;
ys = G__9811;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__3614__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.call(null,this$__$1.schema,other.schema)) && (datascript.core.equiv_index.call(null,this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__3626__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return this$__$1.__hash = cljs.core.hash_coll.call(null,this$__$1.eavt);
}
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.call(null,this__4221__auto____$1,k__4222__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k9813,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__9815 = (((k9813 instanceof cljs.core.Keyword))?k9813.fqn:null);switch (G__9815) {
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9813,else__4224__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4236__auto__,pr_pair__4238__auto__,"#datascript.core.TxReport{",", ","}",opts__4237__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap.call(null,this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
var this__4217__auto____$1 = this;if(cljs.core.truth_((function (){var and__3614__auto__ = other__4218__auto__;if(cljs.core.truth_(and__3614__auto__))
{return ((this__4217__auto____$1.constructor === other__4218__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4217__auto____$1,other__4218__auto__));
} else
{return and__3614__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__4231__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4231__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__9812){var self__ = this;
var this__4228__auto____$1 = this;var pred__9816 = cljs.core.keyword_identical_QMARK_;var expr__9817 = k__4229__auto__;if(cljs.core.truth_(pred__9816.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__9817)))
{return (new datascript.core.TxReport(G__9812,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9816.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__9817)))
{return (new datascript.core.TxReport(self__.db_before,G__9812,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9816.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__9817)))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__9812,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9816.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__9817)))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__9812,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4229__auto__,G__9812),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__9812){var self__ = this;
var this__4220__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__9812,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4227__auto__))
{return cljs.core._assoc.call(null,this__4226__auto____$1,cljs.core._nth.call(null,entry__4227__auto__,(0)),cljs.core._nth.call(null,entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write.call(null,writer__4256__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__9814){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__9814),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__9814),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__9814),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__9814),null,cljs.core.dissoc.call(null,G__9814,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__9821 = db;var G__9821__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.call(null,G__9821,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__9821);return G__9821__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){if(cljs.core.truth_(datom.added))
{return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.conj,datom),datom.e);
} else
{var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.disj,removing);
}
});
datascript.core.transact_report = (function transact_report(report,datom){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref = (function reverse_ref(attr){var name = cljs.core.name.call(null,attr);if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0))))
{return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,name,(1)));
} else
{return null;
}
});
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__4364__auto__ = ((function (eid){
return (function iter__9830(s__9831){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__9831__$1 = s__9831;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9831__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__9837 = cljs.core.first.call(null,xs__4624__auto__);var a = cljs.core.nth.call(null,vec__9837,(0),null);var vs = cljs.core.nth.call(null,vec__9837,(1),null);var reverse_a = datascript.core.reverse_ref.call(null,a);var iterys__4360__auto__ = ((function (s__9831__$1,reverse_a,vec__9837,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__9832(s__9833){return (new cljs.core.LazySeq(null,((function (s__9831__$1,reverse_a,vec__9837,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__9833__$1 = s__9833;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9833__$1);if(temp__4126__auto____$1)
{var s__9833__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9833__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9833__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9835 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9834 = (0);while(true){
if((i__9834 < size__4363__auto__))
{var v = cljs.core._nth.call(null,c__4362__auto__,i__9834);cljs.core.chunk_append.call(null,b__9835,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)));
{
var G__9838 = (i__9834 + (1));
i__9834 = G__9838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9835),iter__9832.call(null,cljs.core.chunk_rest.call(null,s__9833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9835),null);
}
} else
{var v = cljs.core.first.call(null,s__9833__$2);return cljs.core.cons.call(null,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)),iter__9832.call(null,cljs.core.rest.call(null,s__9833__$2)));
}
} else
{return null;
}
break;
}
});})(s__9831__$1,reverse_a,vec__9837,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__9831__$1,reverse_a,vec__9837,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__4361__auto__ = cljs.core.seq.call(null,iterys__4360__auto__.call(null,((((vs instanceof Array) || (cljs.core.coll_QMARK_.call(null,vs))) && (!(cljs.core.map_QMARK_.call(null,vs))) && (datascript.core.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__4361__auto__)
{return cljs.core.concat.call(null,fs__4361__auto__,iter__9830.call(null,cljs.core.rest.call(null,s__9831__$1)));
} else
{{
var G__9839 = cljs.core.rest.call(null,s__9831__$1);
s__9831__$1 = G__9839;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__4364__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__9840){var vec__9842 = p__9840;var _ = cljs.core.nth.call(null,vec__9842,(0),null);var e = cljs.core.nth.call(null,vec__9842,(1),null);var a = cljs.core.nth.call(null,vec__9842,(2),null);var v = cljs.core.nth.call(null,vec__9842,(3),null);var tx = datascript.core.current_tx.call(null,report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_.call(null,db,a))
{if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return datascript.core.transact_report.call(null,report,datom);
} else
{return report;
}
} else
{var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core._EQ_.call(null,old_datom.v,v))
{return report;
} else
{return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e,a,old_datom.v,tx,false))),datom);
}
} else
{return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){var tx = datascript.core.current_tx.call(null,report);return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.transact_tx_data = (function transact_tx_data(report,p__9844){while(true){
var vec__9849 = p__9844;var entity = cljs.core.nth.call(null,vec__9849,(0),null);var entities = cljs.core.nthnext.call(null,vec__9849,(1));var es = vec__9849;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_.call(null,entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__9853 = report;
var G__9854 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity),entities);
report = G__9853;
p__9844 = G__9854;
continue;
}
} else
{var eid = datascript.core.next_eid.call(null,db);var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__9855 = datascript.core.allocate_eid.call(null,report,eid);
var G__9856 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__9855;
p__9844 = G__9856;
continue;
}
}
} else
{var vec__9850 = entity;var op = cljs.core.nth.call(null,vec__9850,(0),null);var e = cljs.core.nth.call(null,vec__9850,(1),null);var a = cljs.core.nth.call(null,vec__9850,(2),null);var v = cljs.core.nth.call(null,vec__9850,(3),null);if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__9851 = entity;var _ = cljs.core.nth.call(null,vec__9851,(0),null);var f = cljs.core.nth.call(null,vec__9851,(1),null);var args = cljs.core.nthnext.call(null,vec__9851,(2));{
var G__9857 = report;
var G__9858 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__9857;
p__9844 = G__9858;
continue;
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172)))
{var vec__9852 = entity;var _ = cljs.core.nth.call(null,vec__9852,(0),null);var e__$1 = cljs.core.nth.call(null,vec__9852,(1),null);var a__$1 = cljs.core.nth.call(null,vec__9852,(2),null);var ov = cljs.core.nth.call(null,vec__9852,(3),null);var nv = cljs.core.nth.call(null,vec__9852,(4),null);var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));if(datascript.core.multival_QMARK_.call(null,db,a__$1))
{if(cljs.core.truth_(cljs.core.some.call(null,((function (report,p__9844,vec__9852,_,e__$1,a__$1,ov,nv,datoms,vec__9850,op,e,a,v,db,vec__9849,entity,entities,es){
return (function (p1__9843_SHARP_){return cljs.core._EQ_.call(null,p1__9843_SHARP_.v,ov);
});})(report,p__9844,vec__9852,_,e__$1,a__$1,ov,nv,datoms,vec__9850,op,e,a,v,db,vec__9849,entity,entities,es))
,datoms)))
{{
var G__9859 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__9860 = entities;
report = G__9859;
p__9844 = G__9860;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
} else
{var v__$1 = cljs.core.first.call(null,datoms).v;if(cljs.core._EQ_.call(null,v__$1,ov))
{{
var G__9861 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__9862 = entities;
report = G__9861;
p__9844 = G__9862;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__9863 = report;
var G__9864 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__9863;
p__9844 = G__9864;
continue;
}
} else
{{
var G__9865 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__9866 = es;
report = G__9865;
p__9844 = G__9866;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_.call(null,db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__9867 = report;
var G__9868 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__9867;
p__9844 = G__9868;
continue;
}
} else
{{
var G__9869 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__9870 = es;
report = G__9869;
p__9844 = G__9870;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__9871 = datascript.core.transact_add.call(null,report,entity);
var G__9872 = entities;
report = G__9871;
p__9844 = G__9872;
continue;
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__9873 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__9874 = entities;
report = G__9873;
p__9844 = G__9874;
continue;
}
} else
{{
var G__9875 = report;
var G__9876 = entities;
report = G__9875;
p__9844 = G__9876;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__9877 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__9878 = entities;
report = G__9877;
p__9844 = G__9878;
continue;
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var e_datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));var v_datoms = cljs.core.mapcat.call(null,((function (report,p__9844,e_datoms,vec__9850,op,e,a,v,db,vec__9849,entity,entities,es){
return (function (a__$1){return datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__9844,e_datoms,vec__9850,op,e,a,v,db,vec__9849,entity,entities,es))
,db.refs);{
var G__9879 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__9880 = entities;
report = G__9879;
p__9844 = G__9880;
continue;
}
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
}
break;
}
});
