// Compiled by ClojureScript 0.0-2342
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = (536870912);
datascript.refs = (function refs(schema){return cljs.core.mapv.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__9586){var vec__9587 = p__9586;var _ = cljs.core.nth.call(null,vec__9587,(0),null);var v = cljs.core.nth.call(null,vec__9587,(1),null);return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__9588){var vec__9590 = p__9588;var schema = cljs.core.nth.call(null,vec__9590,(0),null);return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var empty_db = function (var_args){
var p__9588 = null;if (arguments.length > 0) {
  p__9588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__9588);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__9591){
var p__9588 = cljs.core.seq(arglist__9591);
return empty_db__delegate(p__9588);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__9592){var vec__9594 = p__9592;var schema = cljs.core.nth.call(null,vec__9594,(0),null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__9592 = null;if (arguments.length > 0) {
  p__9592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__9592);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__9595){
var p__9592 = cljs.core.seq(arglist__9595);
return create_conn__delegate(p__9592);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.with$ = (function with$(db,tx_data){return datascript.core.transact_tx_data.call(null,(new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),tx_data);
});
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){var r = datascript.with$.call(null,db,tx_data);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function transact_BANG_(conn,tx_data){var report = datascript._transact_BANG_.call(null,conn,tx_data);var seq__9602_9608 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__9603_9609 = null;var count__9604_9610 = (0);var i__9605_9611 = (0);while(true){
if((i__9605_9611 < count__9604_9610))
{var vec__9606_9612 = cljs.core._nth.call(null,chunk__9603_9609,i__9605_9611);var __9613 = cljs.core.nth.call(null,vec__9606_9612,(0),null);var callback_9614 = cljs.core.nth.call(null,vec__9606_9612,(1),null);callback_9614.call(null,report);
{
var G__9615 = seq__9602_9608;
var G__9616 = chunk__9603_9609;
var G__9617 = count__9604_9610;
var G__9618 = (i__9605_9611 + (1));
seq__9602_9608 = G__9615;
chunk__9603_9609 = G__9616;
count__9604_9610 = G__9617;
i__9605_9611 = G__9618;
continue;
}
} else
{var temp__4126__auto___9619 = cljs.core.seq.call(null,seq__9602_9608);if(temp__4126__auto___9619)
{var seq__9602_9620__$1 = temp__4126__auto___9619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9602_9620__$1))
{var c__4395__auto___9621 = cljs.core.chunk_first.call(null,seq__9602_9620__$1);{
var G__9622 = cljs.core.chunk_rest.call(null,seq__9602_9620__$1);
var G__9623 = c__4395__auto___9621;
var G__9624 = cljs.core.count.call(null,c__4395__auto___9621);
var G__9625 = (0);
seq__9602_9608 = G__9622;
chunk__9603_9609 = G__9623;
count__9604_9610 = G__9624;
i__9605_9611 = G__9625;
continue;
}
} else
{var vec__9607_9626 = cljs.core.first.call(null,seq__9602_9620__$1);var __9627 = cljs.core.nth.call(null,vec__9607_9626,(0),null);var callback_9628 = cljs.core.nth.call(null,vec__9607_9626,(1),null);callback_9628.call(null,report);
{
var G__9629 = cljs.core.next.call(null,seq__9602_9620__$1);
var G__9630 = null;
var G__9631 = (0);
var G__9632 = (0);
seq__9602_9608 = G__9629;
chunk__9603_9609 = G__9630;
count__9604_9610 = G__9631;
i__9605_9611 = G__9632;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.components__GT_pattern = (function components__GT_pattern(index,p__9633){var vec__9636 = p__9633;var c0 = cljs.core.nth.call(null,vec__9636,(0),null);var c1 = cljs.core.nth.call(null,vec__9636,(1),null);var c2 = cljs.core.nth.call(null,vec__9636,(2),null);var c3 = cljs.core.nth.call(null,vec__9636,(3),null);var G__9637 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__9637) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs));
};
var datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__9639){
var db = cljs.core.first(arglist__9639);
arglist__9639 = cljs.core.next(arglist__9639);
var index = cljs.core.first(arglist__9639);
var cs = cljs.core.rest(arglist__9639);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
};
var seek_datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__9640){
var db = cljs.core.first(arglist__9640);
arglist__9640 = cljs.core.next(arglist__9640);
var index = cljs.core.first(arglist__9640);
var cs = cljs.core.rest(arglist__9640);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){return datascript.btset.slice.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(db),(new datascript.core.Datom(null,attr,start,null,null)),(new datascript.core.Datom(null,attr,end,null,null)));
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){var d__$1 = this;return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
datascript.datom_from_reader = (function datom_from_reader(p__9641){var vec__9643 = p__9641;var e = cljs.core.nth.call(null,vec__9643,(0),null);var a = cljs.core.nth.call(null,vec__9643,(1),null);var v = cljs.core.nth.call(null,vec__9643,(2),null);var tx = cljs.core.nth.call(null,vec__9643,(3),null);var added = cljs.core.nth.call(null,vec__9643,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){var db__$1 = this;cljs.core._write.call(null,w,"#datascript/DB {");
cljs.core._write.call(null,w,":schema ");
cljs.core.pr_writer.call(null,db__$1.schema,w,opts);
cljs.core._write.call(null,w,", :datoms ");
cljs.core.pr_sequential_writer.call(null,w,((function (db__$1){
return (function (d,w__$1,opts__$1){return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
});})(db__$1))
,"["," ","]",opts,db__$1.eavt);
return cljs.core._write.call(null,w,"}");
});
datascript.db_from_reader = (function db_from_reader(p__9644){var map__9648 = p__9644;var map__9648__$1 = ((cljs.core.seq_QMARK_.call(null,map__9648))?cljs.core.apply.call(null,cljs.core.hash_map,map__9648):map__9648);var datoms = cljs.core.get.call(null,map__9648__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema = cljs.core.get.call(null,map__9648__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.call(null,((function (map__9648,map__9648__$1,datoms,schema){
return (function (p__9649){var vec__9650 = p__9649;var e = cljs.core.nth.call(null,vec__9650,(0),null);var a = cljs.core.nth.call(null,vec__9650,(1),null);var v = cljs.core.nth.call(null,vec__9650,(2),null);var tx = cljs.core.nth.call(null,vec__9650,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__9648,map__9648__$1,datoms,schema))
,datoms);return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.call(null,cljs.core.max,datascript.tx0,cljs.core.map.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
});
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (_part){return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
});
var tempid__2 = (function (_part,x){return x;
});
tempid = function(_part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,_part);
case 2:
return tempid__2.call(this,_part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
datascript.transact = (function transact(conn,tx_data){var res = datascript.transact_BANG_.call(null,conn,tx_data);if(typeof datascript.t9654 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t9654 = (function (res,tx_data,conn,transact,meta9655){
this.res = res;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta9655 = meta9655;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t9654.cljs$lang$type = true;
datascript.t9654.cljs$lang$ctorStr = "datascript/t9654";
datascript.t9654.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"datascript/t9654");
});})(res))
;
datascript.t9654.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res))
;
datascript.t9654.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res))
;
datascript.t9654.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res))
;
datascript.t9654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_9656){var self__ = this;
var _9656__$1 = this;return self__.meta9655;
});})(res))
;
datascript.t9654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_9656,meta9655__$1){var self__ = this;
var _9656__$1 = this;return (new datascript.t9654(self__.res,self__.tx_data,self__.conn,self__.transact,meta9655__$1));
});})(res))
;
datascript.__GT_t9654 = ((function (res){
return (function __GT_t9654(res__$1,tx_data__$1,conn__$1,transact__$1,meta9655){return (new datascript.t9654(res__$1,tx_data__$1,conn__$1,transact__$1,meta9655));
});})(res))
;
}
return (new datascript.t9654(res,tx_data,conn,transact,null));
});
datascript.future_call = (function future_call(f){var res = cljs.core.atom.call(null,null);var realized = cljs.core.atom.call(null,false);setTimeout(((function (res,realized){
return (function (){cljs.core.reset_BANG_.call(null,res,f.call(null));
return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));
if(typeof datascript.t9660 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t9660 = (function (realized,res,f,future_call,meta9661){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta9661 = meta9661;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t9660.cljs$lang$type = true;
datascript.t9660.cljs$lang$ctorStr = "datascript/t9660";
datascript.t9660.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"datascript/t9660");
});})(res,realized))
;
datascript.t9660.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;
datascript.t9660.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized)))
{return cljs.core.deref.call(null,self__.res);
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t9660.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;
datascript.t9660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_9662){var self__ = this;
var _9662__$1 = this;return self__.meta9661;
});})(res,realized))
;
datascript.t9660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_9662,meta9661__$1){var self__ = this;
var _9662__$1 = this;return (new datascript.t9660(self__.realized,self__.res,self__.f,self__.future_call,meta9661__$1));
});})(res,realized))
;
datascript.__GT_t9660 = ((function (res,realized){
return (function __GT_t9660(realized__$1,res__$1,f__$1,future_call__$1,meta9661){return (new datascript.t9660(realized__$1,res__$1,f__$1,future_call__$1,meta9661));
});})(res,realized))
;
}
return (new datascript.t9660(realized,res,f,future_call,null));
});
datascript.transact_async = (function transact_async(conn,tx_data){return datascript.future_call.call(null,(function (){return datascript.transact_BANG_.call(null,conn,tx_data);
}));
});
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,((new Date()).getTime() / (1000))).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return (parseInt(cljs.core.subs.call(null,uuid.uuid,(0),(8)),(16)) * (1000));
});
