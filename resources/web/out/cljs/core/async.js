// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11245 = (function (f,fn_handler,meta11246){
this.f = f;
this.fn_handler = fn_handler;
this.meta11246 = meta11246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11245.cljs$lang$type = true;
cljs.core.async.t11245.cljs$lang$ctorStr = "cljs.core.async/t11245";
cljs.core.async.t11245.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11245");
});
cljs.core.async.t11245.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11247){var self__ = this;
var _11247__$1 = this;return self__.meta11246;
});
cljs.core.async.t11245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11247,meta11246__$1){var self__ = this;
var _11247__$1 = this;return (new cljs.core.async.t11245(self__.f,self__.fn_handler,meta11246__$1));
});
cljs.core.async.__GT_t11245 = (function __GT_t11245(f__$1,fn_handler__$1,meta11246){return (new cljs.core.async.t11245(f__$1,fn_handler__$1,meta11246));
});
}
return (new cljs.core.async.t11245(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11249 = buff;if(G__11249)
{var bit__4289__auto__ = null;if(cljs.core.truth_((function (){var or__3626__auto__ = bit__4289__auto__;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return G__11249.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11249.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11249);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11249);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11250 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11250);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11250,ret){
return (function (){return fn1.call(null,val_11250);
});})(val_11250,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4495__auto___11251 = n;var x_11252 = (0);while(true){
if((x_11252 < n__4495__auto___11251))
{(a[x_11252] = (0));
{
var G__11253 = (x_11252 + (1));
x_11252 = G__11253;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11254 = (i + (1));
i = G__11254;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11258 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11258 = (function (flag,alt_flag,meta11259){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11259 = meta11259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11258.cljs$lang$type = true;
cljs.core.async.t11258.cljs$lang$ctorStr = "cljs.core.async/t11258";
cljs.core.async.t11258.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11258");
});})(flag))
;
cljs.core.async.t11258.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11260){var self__ = this;
var _11260__$1 = this;return self__.meta11259;
});})(flag))
;
cljs.core.async.t11258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11260,meta11259__$1){var self__ = this;
var _11260__$1 = this;return (new cljs.core.async.t11258(self__.flag,self__.alt_flag,meta11259__$1));
});})(flag))
;
cljs.core.async.__GT_t11258 = ((function (flag){
return (function __GT_t11258(flag__$1,alt_flag__$1,meta11259){return (new cljs.core.async.t11258(flag__$1,alt_flag__$1,meta11259));
});})(flag))
;
}
return (new cljs.core.async.t11258(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11264 = (function (cb,flag,alt_handler,meta11265){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11265 = meta11265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11264.cljs$lang$type = true;
cljs.core.async.t11264.cljs$lang$ctorStr = "cljs.core.async/t11264";
cljs.core.async.t11264.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11264");
});
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11266){var self__ = this;
var _11266__$1 = this;return self__.meta11265;
});
cljs.core.async.t11264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11266,meta11265__$1){var self__ = this;
var _11266__$1 = this;return (new cljs.core.async.t11264(self__.cb,self__.flag,self__.alt_handler,meta11265__$1));
});
cljs.core.async.__GT_t11264 = (function __GT_t11264(cb__$1,flag__$1,alt_handler__$1,meta11265){return (new cljs.core.async.t11264(cb__$1,flag__$1,alt_handler__$1,meta11265));
});
}
return (new cljs.core.async.t11264(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11267_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11267_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11268_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11268_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3626__auto__ = wport;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11269 = (i + (1));
i = G__11269;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3626__auto__ = ret;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3614__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3614__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11270){var map__11272 = p__11270;var map__11272__$1 = ((cljs.core.seq_QMARK_.call(null,map__11272))?cljs.core.apply.call(null,cljs.core.hash_map,map__11272):map__11272);var opts = map__11272__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11270 = null;if (arguments.length > 1) {
  p__11270 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11270);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11273){
var ports = cljs.core.first(arglist__11273);
var p__11270 = cljs.core.rest(arglist__11273);
return alts_BANG___delegate(ports,p__11270);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6460__auto___11368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___11368){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___11368){
return (function (state_11344){var state_val_11345 = (state_11344[(1)]);if((state_val_11345 === (7)))
{var inst_11340 = (state_11344[(2)]);var state_11344__$1 = state_11344;var statearr_11346_11369 = state_11344__$1;(statearr_11346_11369[(2)] = inst_11340);
(statearr_11346_11369[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (1)))
{var state_11344__$1 = state_11344;var statearr_11347_11370 = state_11344__$1;(statearr_11347_11370[(2)] = null);
(statearr_11347_11370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (4)))
{var inst_11323 = (state_11344[(7)]);var inst_11323__$1 = (state_11344[(2)]);var inst_11324 = (inst_11323__$1 == null);var state_11344__$1 = (function (){var statearr_11348 = state_11344;(statearr_11348[(7)] = inst_11323__$1);
return statearr_11348;
})();if(cljs.core.truth_(inst_11324))
{var statearr_11349_11371 = state_11344__$1;(statearr_11349_11371[(1)] = (5));
} else
{var statearr_11350_11372 = state_11344__$1;(statearr_11350_11372[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (13)))
{var state_11344__$1 = state_11344;var statearr_11351_11373 = state_11344__$1;(statearr_11351_11373[(2)] = null);
(statearr_11351_11373[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (6)))
{var inst_11323 = (state_11344[(7)]);var state_11344__$1 = state_11344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11344__$1,(11),to,inst_11323);
} else
{if((state_val_11345 === (3)))
{var inst_11342 = (state_11344[(2)]);var state_11344__$1 = state_11344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11344__$1,inst_11342);
} else
{if((state_val_11345 === (12)))
{var state_11344__$1 = state_11344;var statearr_11352_11374 = state_11344__$1;(statearr_11352_11374[(2)] = null);
(statearr_11352_11374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (2)))
{var state_11344__$1 = state_11344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11344__$1,(4),from);
} else
{if((state_val_11345 === (11)))
{var inst_11333 = (state_11344[(2)]);var state_11344__$1 = state_11344;if(cljs.core.truth_(inst_11333))
{var statearr_11353_11375 = state_11344__$1;(statearr_11353_11375[(1)] = (12));
} else
{var statearr_11354_11376 = state_11344__$1;(statearr_11354_11376[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (9)))
{var state_11344__$1 = state_11344;var statearr_11355_11377 = state_11344__$1;(statearr_11355_11377[(2)] = null);
(statearr_11355_11377[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (5)))
{var state_11344__$1 = state_11344;if(cljs.core.truth_(close_QMARK_))
{var statearr_11356_11378 = state_11344__$1;(statearr_11356_11378[(1)] = (8));
} else
{var statearr_11357_11379 = state_11344__$1;(statearr_11357_11379[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (14)))
{var inst_11338 = (state_11344[(2)]);var state_11344__$1 = state_11344;var statearr_11358_11380 = state_11344__$1;(statearr_11358_11380[(2)] = inst_11338);
(statearr_11358_11380[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (10)))
{var inst_11330 = (state_11344[(2)]);var state_11344__$1 = state_11344;var statearr_11359_11381 = state_11344__$1;(statearr_11359_11381[(2)] = inst_11330);
(statearr_11359_11381[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11345 === (8)))
{var inst_11327 = cljs.core.async.close_BANG_.call(null,to);var state_11344__$1 = state_11344;var statearr_11360_11382 = state_11344__$1;(statearr_11360_11382[(2)] = inst_11327);
(statearr_11360_11382[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});})(c__6460__auto___11368))
;return ((function (switch__6445__auto__,c__6460__auto___11368){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11364 = [null,null,null,null,null,null,null,null];(statearr_11364[(0)] = state_machine__6446__auto__);
(statearr_11364[(1)] = (1));
return statearr_11364;
});
var state_machine__6446__auto____1 = (function (state_11344){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11365){if((e11365 instanceof Object))
{var ex__6449__auto__ = e11365;var statearr_11366_11383 = state_11344;(statearr_11366_11383[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11365;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11384 = state_11344;
state_11344 = G__11384;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11344){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___11368))
})();var state__6462__auto__ = (function (){var statearr_11367 = f__6461__auto__.call(null);(statearr_11367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11368);
return statearr_11367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___11368))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11568){var vec__11569 = p__11568;var v = cljs.core.nth.call(null,vec__11569,(0),null);var p = cljs.core.nth.call(null,vec__11569,(1),null);var job = vec__11569;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6460__auto___11751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results){
return (function (state_11574){var state_val_11575 = (state_11574[(1)]);if((state_val_11575 === (2)))
{var inst_11571 = (state_11574[(2)]);var inst_11572 = cljs.core.async.close_BANG_.call(null,res);var state_11574__$1 = (function (){var statearr_11576 = state_11574;(statearr_11576[(7)] = inst_11571);
return statearr_11576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11574__$1,inst_11572);
} else
{if((state_val_11575 === (1)))
{var state_11574__$1 = state_11574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11574__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results))
;return ((function (switch__6445__auto__,c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11580 = [null,null,null,null,null,null,null,null];(statearr_11580[(0)] = state_machine__6446__auto__);
(statearr_11580[(1)] = (1));
return statearr_11580;
});
var state_machine__6446__auto____1 = (function (state_11574){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11581){if((e11581 instanceof Object))
{var ex__6449__auto__ = e11581;var statearr_11582_11752 = state_11574;(statearr_11582_11752[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11581;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11753 = state_11574;
state_11574 = G__11753;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11574){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results))
})();var state__6462__auto__ = (function (){var statearr_11583 = f__6461__auto__.call(null);(statearr_11583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11751);
return statearr_11583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___11751,res,vec__11569,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11584){var vec__11585 = p__11584;var v = cljs.core.nth.call(null,vec__11585,(0),null);var p = cljs.core.nth.call(null,vec__11585,(1),null);var job = vec__11585;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4495__auto___11754 = n;var __11755 = (0);while(true){
if((__11755 < n__4495__auto___11754))
{var G__11586_11756 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11586_11756) {
case "async":
var c__6460__auto___11758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11755,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (__11755,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function (state_11599){var state_val_11600 = (state_11599[(1)]);if((state_val_11600 === (7)))
{var inst_11595 = (state_11599[(2)]);var state_11599__$1 = state_11599;var statearr_11601_11759 = state_11599__$1;(statearr_11601_11759[(2)] = inst_11595);
(statearr_11601_11759[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11600 === (6)))
{var state_11599__$1 = state_11599;var statearr_11602_11760 = state_11599__$1;(statearr_11602_11760[(2)] = null);
(statearr_11602_11760[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11600 === (5)))
{var state_11599__$1 = state_11599;var statearr_11603_11761 = state_11599__$1;(statearr_11603_11761[(2)] = null);
(statearr_11603_11761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11600 === (4)))
{var inst_11589 = (state_11599[(2)]);var inst_11590 = async.call(null,inst_11589);var state_11599__$1 = state_11599;if(cljs.core.truth_(inst_11590))
{var statearr_11604_11762 = state_11599__$1;(statearr_11604_11762[(1)] = (5));
} else
{var statearr_11605_11763 = state_11599__$1;(statearr_11605_11763[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11600 === (3)))
{var inst_11597 = (state_11599[(2)]);var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11597);
} else
{if((state_val_11600 === (2)))
{var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,(4),jobs);
} else
{if((state_val_11600 === (1)))
{var state_11599__$1 = state_11599;var statearr_11606_11764 = state_11599__$1;(statearr_11606_11764[(2)] = null);
(statearr_11606_11764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11755,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
;return ((function (__11755,switch__6445__auto__,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11610 = [null,null,null,null,null,null,null];(statearr_11610[(0)] = state_machine__6446__auto__);
(statearr_11610[(1)] = (1));
return statearr_11610;
});
var state_machine__6446__auto____1 = (function (state_11599){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11611){if((e11611 instanceof Object))
{var ex__6449__auto__ = e11611;var statearr_11612_11765 = state_11599;(statearr_11612_11765[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11611;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11766 = state_11599;
state_11599 = G__11766;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(__11755,switch__6445__auto__,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
})();var state__6462__auto__ = (function (){var statearr_11613 = f__6461__auto__.call(null);(statearr_11613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11758);
return statearr_11613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(__11755,c__6460__auto___11758,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
);

break;
case "compute":
var c__6460__auto___11767 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11755,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (__11755,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function (state_11626){var state_val_11627 = (state_11626[(1)]);if((state_val_11627 === (7)))
{var inst_11622 = (state_11626[(2)]);var state_11626__$1 = state_11626;var statearr_11628_11768 = state_11626__$1;(statearr_11628_11768[(2)] = inst_11622);
(statearr_11628_11768[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (6)))
{var state_11626__$1 = state_11626;var statearr_11629_11769 = state_11626__$1;(statearr_11629_11769[(2)] = null);
(statearr_11629_11769[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (5)))
{var state_11626__$1 = state_11626;var statearr_11630_11770 = state_11626__$1;(statearr_11630_11770[(2)] = null);
(statearr_11630_11770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (4)))
{var inst_11616 = (state_11626[(2)]);var inst_11617 = process.call(null,inst_11616);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11617))
{var statearr_11631_11771 = state_11626__$1;(statearr_11631_11771[(1)] = (5));
} else
{var statearr_11632_11772 = state_11626__$1;(statearr_11632_11772[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (3)))
{var inst_11624 = (state_11626[(2)]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else
{if((state_val_11627 === (2)))
{var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11626__$1,(4),jobs);
} else
{if((state_val_11627 === (1)))
{var state_11626__$1 = state_11626;var statearr_11633_11773 = state_11626__$1;(statearr_11633_11773[(2)] = null);
(statearr_11633_11773[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11755,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
;return ((function (__11755,switch__6445__auto__,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11637 = [null,null,null,null,null,null,null];(statearr_11637[(0)] = state_machine__6446__auto__);
(statearr_11637[(1)] = (1));
return statearr_11637;
});
var state_machine__6446__auto____1 = (function (state_11626){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11638){if((e11638 instanceof Object))
{var ex__6449__auto__ = e11638;var statearr_11639_11774 = state_11626;(statearr_11639_11774[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11638;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11775 = state_11626;
state_11626 = G__11775;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(__11755,switch__6445__auto__,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
})();var state__6462__auto__ = (function (){var statearr_11640 = f__6461__auto__.call(null);(statearr_11640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11767);
return statearr_11640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(__11755,c__6460__auto___11767,G__11586_11756,n__4495__auto___11754,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11776 = (__11755 + (1));
__11755 = G__11776;
continue;
}
} else
{}
break;
}
var c__6460__auto___11777 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___11777,jobs,results,process,async){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___11777,jobs,results,process,async){
return (function (state_11662){var state_val_11663 = (state_11662[(1)]);if((state_val_11663 === (9)))
{var inst_11655 = (state_11662[(2)]);var state_11662__$1 = (function (){var statearr_11664 = state_11662;(statearr_11664[(7)] = inst_11655);
return statearr_11664;
})();var statearr_11665_11778 = state_11662__$1;(statearr_11665_11778[(2)] = null);
(statearr_11665_11778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11663 === (8)))
{var inst_11648 = (state_11662[(8)]);var inst_11653 = (state_11662[(2)]);var state_11662__$1 = (function (){var statearr_11666 = state_11662;(statearr_11666[(9)] = inst_11653);
return statearr_11666;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11662__$1,(9),results,inst_11648);
} else
{if((state_val_11663 === (7)))
{var inst_11658 = (state_11662[(2)]);var state_11662__$1 = state_11662;var statearr_11667_11779 = state_11662__$1;(statearr_11667_11779[(2)] = inst_11658);
(statearr_11667_11779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11663 === (6)))
{var inst_11648 = (state_11662[(8)]);var inst_11643 = (state_11662[(10)]);var inst_11648__$1 = cljs.core.async.chan.call(null,(1));var inst_11649 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11650 = [inst_11643,inst_11648__$1];var inst_11651 = (new cljs.core.PersistentVector(null,2,(5),inst_11649,inst_11650,null));var state_11662__$1 = (function (){var statearr_11668 = state_11662;(statearr_11668[(8)] = inst_11648__$1);
return statearr_11668;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11662__$1,(8),jobs,inst_11651);
} else
{if((state_val_11663 === (5)))
{var inst_11646 = cljs.core.async.close_BANG_.call(null,jobs);var state_11662__$1 = state_11662;var statearr_11669_11780 = state_11662__$1;(statearr_11669_11780[(2)] = inst_11646);
(statearr_11669_11780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11663 === (4)))
{var inst_11643 = (state_11662[(10)]);var inst_11643__$1 = (state_11662[(2)]);var inst_11644 = (inst_11643__$1 == null);var state_11662__$1 = (function (){var statearr_11670 = state_11662;(statearr_11670[(10)] = inst_11643__$1);
return statearr_11670;
})();if(cljs.core.truth_(inst_11644))
{var statearr_11671_11781 = state_11662__$1;(statearr_11671_11781[(1)] = (5));
} else
{var statearr_11672_11782 = state_11662__$1;(statearr_11672_11782[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11663 === (3)))
{var inst_11660 = (state_11662[(2)]);var state_11662__$1 = state_11662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11662__$1,inst_11660);
} else
{if((state_val_11663 === (2)))
{var state_11662__$1 = state_11662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11662__$1,(4),from);
} else
{if((state_val_11663 === (1)))
{var state_11662__$1 = state_11662;var statearr_11673_11783 = state_11662__$1;(statearr_11673_11783[(2)] = null);
(statearr_11673_11783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6460__auto___11777,jobs,results,process,async))
;return ((function (switch__6445__auto__,c__6460__auto___11777,jobs,results,process,async){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11677 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11677[(0)] = state_machine__6446__auto__);
(statearr_11677[(1)] = (1));
return statearr_11677;
});
var state_machine__6446__auto____1 = (function (state_11662){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11662);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11678){if((e11678 instanceof Object))
{var ex__6449__auto__ = e11678;var statearr_11679_11784 = state_11662;(statearr_11679_11784[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11678;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11785 = state_11662;
state_11662 = G__11785;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11662){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___11777,jobs,results,process,async))
})();var state__6462__auto__ = (function (){var statearr_11680 = f__6461__auto__.call(null);(statearr_11680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11777);
return statearr_11680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___11777,jobs,results,process,async))
);
var c__6460__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto__,jobs,results,process,async){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto__,jobs,results,process,async){
return (function (state_11718){var state_val_11719 = (state_11718[(1)]);if((state_val_11719 === (7)))
{var inst_11714 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11720_11786 = state_11718__$1;(statearr_11720_11786[(2)] = inst_11714);
(statearr_11720_11786[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (20)))
{var state_11718__$1 = state_11718;var statearr_11721_11787 = state_11718__$1;(statearr_11721_11787[(2)] = null);
(statearr_11721_11787[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (1)))
{var state_11718__$1 = state_11718;var statearr_11722_11788 = state_11718__$1;(statearr_11722_11788[(2)] = null);
(statearr_11722_11788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (4)))
{var inst_11683 = (state_11718[(7)]);var inst_11683__$1 = (state_11718[(2)]);var inst_11684 = (inst_11683__$1 == null);var state_11718__$1 = (function (){var statearr_11723 = state_11718;(statearr_11723[(7)] = inst_11683__$1);
return statearr_11723;
})();if(cljs.core.truth_(inst_11684))
{var statearr_11724_11789 = state_11718__$1;(statearr_11724_11789[(1)] = (5));
} else
{var statearr_11725_11790 = state_11718__$1;(statearr_11725_11790[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (15)))
{var inst_11696 = (state_11718[(8)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11718__$1,(18),to,inst_11696);
} else
{if((state_val_11719 === (21)))
{var inst_11709 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11726_11791 = state_11718__$1;(statearr_11726_11791[(2)] = inst_11709);
(statearr_11726_11791[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (13)))
{var inst_11711 = (state_11718[(2)]);var state_11718__$1 = (function (){var statearr_11727 = state_11718;(statearr_11727[(9)] = inst_11711);
return statearr_11727;
})();var statearr_11728_11792 = state_11718__$1;(statearr_11728_11792[(2)] = null);
(statearr_11728_11792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (6)))
{var inst_11683 = (state_11718[(7)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11718__$1,(11),inst_11683);
} else
{if((state_val_11719 === (17)))
{var inst_11704 = (state_11718[(2)]);var state_11718__$1 = state_11718;if(cljs.core.truth_(inst_11704))
{var statearr_11729_11793 = state_11718__$1;(statearr_11729_11793[(1)] = (19));
} else
{var statearr_11730_11794 = state_11718__$1;(statearr_11730_11794[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (3)))
{var inst_11716 = (state_11718[(2)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11718__$1,inst_11716);
} else
{if((state_val_11719 === (12)))
{var inst_11693 = (state_11718[(10)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11718__$1,(14),inst_11693);
} else
{if((state_val_11719 === (2)))
{var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11718__$1,(4),results);
} else
{if((state_val_11719 === (19)))
{var state_11718__$1 = state_11718;var statearr_11731_11795 = state_11718__$1;(statearr_11731_11795[(2)] = null);
(statearr_11731_11795[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (11)))
{var inst_11693 = (state_11718[(2)]);var state_11718__$1 = (function (){var statearr_11732 = state_11718;(statearr_11732[(10)] = inst_11693);
return statearr_11732;
})();var statearr_11733_11796 = state_11718__$1;(statearr_11733_11796[(2)] = null);
(statearr_11733_11796[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (9)))
{var state_11718__$1 = state_11718;var statearr_11734_11797 = state_11718__$1;(statearr_11734_11797[(2)] = null);
(statearr_11734_11797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (5)))
{var state_11718__$1 = state_11718;if(cljs.core.truth_(close_QMARK_))
{var statearr_11735_11798 = state_11718__$1;(statearr_11735_11798[(1)] = (8));
} else
{var statearr_11736_11799 = state_11718__$1;(statearr_11736_11799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (14)))
{var inst_11698 = (state_11718[(11)]);var inst_11696 = (state_11718[(8)]);var inst_11696__$1 = (state_11718[(2)]);var inst_11697 = (inst_11696__$1 == null);var inst_11698__$1 = cljs.core.not.call(null,inst_11697);var state_11718__$1 = (function (){var statearr_11737 = state_11718;(statearr_11737[(11)] = inst_11698__$1);
(statearr_11737[(8)] = inst_11696__$1);
return statearr_11737;
})();if(inst_11698__$1)
{var statearr_11738_11800 = state_11718__$1;(statearr_11738_11800[(1)] = (15));
} else
{var statearr_11739_11801 = state_11718__$1;(statearr_11739_11801[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (16)))
{var inst_11698 = (state_11718[(11)]);var state_11718__$1 = state_11718;var statearr_11740_11802 = state_11718__$1;(statearr_11740_11802[(2)] = inst_11698);
(statearr_11740_11802[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (10)))
{var inst_11690 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11741_11803 = state_11718__$1;(statearr_11741_11803[(2)] = inst_11690);
(statearr_11741_11803[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (18)))
{var inst_11701 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11742_11804 = state_11718__$1;(statearr_11742_11804[(2)] = inst_11701);
(statearr_11742_11804[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (8)))
{var inst_11687 = cljs.core.async.close_BANG_.call(null,to);var state_11718__$1 = state_11718;var statearr_11743_11805 = state_11718__$1;(statearr_11743_11805[(2)] = inst_11687);
(statearr_11743_11805[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__6460__auto__,jobs,results,process,async))
;return ((function (switch__6445__auto__,c__6460__auto__,jobs,results,process,async){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11747 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11747[(0)] = state_machine__6446__auto__);
(statearr_11747[(1)] = (1));
return statearr_11747;
});
var state_machine__6446__auto____1 = (function (state_11718){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11748){if((e11748 instanceof Object))
{var ex__6449__auto__ = e11748;var statearr_11749_11806 = state_11718;(statearr_11749_11806[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11807 = state_11718;
state_11718 = G__11807;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11718){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto__,jobs,results,process,async))
})();var state__6462__auto__ = (function (){var statearr_11750 = f__6461__auto__.call(null);(statearr_11750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto__);
return statearr_11750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto__,jobs,results,process,async))
);
return c__6460__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6460__auto___11908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___11908,tc,fc){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___11908,tc,fc){
return (function (state_11883){var state_val_11884 = (state_11883[(1)]);if((state_val_11884 === (7)))
{var inst_11879 = (state_11883[(2)]);var state_11883__$1 = state_11883;var statearr_11885_11909 = state_11883__$1;(statearr_11885_11909[(2)] = inst_11879);
(statearr_11885_11909[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (1)))
{var state_11883__$1 = state_11883;var statearr_11886_11910 = state_11883__$1;(statearr_11886_11910[(2)] = null);
(statearr_11886_11910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (4)))
{var inst_11860 = (state_11883[(7)]);var inst_11860__$1 = (state_11883[(2)]);var inst_11861 = (inst_11860__$1 == null);var state_11883__$1 = (function (){var statearr_11887 = state_11883;(statearr_11887[(7)] = inst_11860__$1);
return statearr_11887;
})();if(cljs.core.truth_(inst_11861))
{var statearr_11888_11911 = state_11883__$1;(statearr_11888_11911[(1)] = (5));
} else
{var statearr_11889_11912 = state_11883__$1;(statearr_11889_11912[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (13)))
{var state_11883__$1 = state_11883;var statearr_11890_11913 = state_11883__$1;(statearr_11890_11913[(2)] = null);
(statearr_11890_11913[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (6)))
{var inst_11860 = (state_11883[(7)]);var inst_11866 = p.call(null,inst_11860);var state_11883__$1 = state_11883;if(cljs.core.truth_(inst_11866))
{var statearr_11891_11914 = state_11883__$1;(statearr_11891_11914[(1)] = (9));
} else
{var statearr_11892_11915 = state_11883__$1;(statearr_11892_11915[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (3)))
{var inst_11881 = (state_11883[(2)]);var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11883__$1,inst_11881);
} else
{if((state_val_11884 === (12)))
{var state_11883__$1 = state_11883;var statearr_11893_11916 = state_11883__$1;(statearr_11893_11916[(2)] = null);
(statearr_11893_11916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (2)))
{var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11883__$1,(4),ch);
} else
{if((state_val_11884 === (11)))
{var inst_11860 = (state_11883[(7)]);var inst_11870 = (state_11883[(2)]);var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11883__$1,(8),inst_11870,inst_11860);
} else
{if((state_val_11884 === (9)))
{var state_11883__$1 = state_11883;var statearr_11894_11917 = state_11883__$1;(statearr_11894_11917[(2)] = tc);
(statearr_11894_11917[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (5)))
{var inst_11863 = cljs.core.async.close_BANG_.call(null,tc);var inst_11864 = cljs.core.async.close_BANG_.call(null,fc);var state_11883__$1 = (function (){var statearr_11895 = state_11883;(statearr_11895[(8)] = inst_11863);
return statearr_11895;
})();var statearr_11896_11918 = state_11883__$1;(statearr_11896_11918[(2)] = inst_11864);
(statearr_11896_11918[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (14)))
{var inst_11877 = (state_11883[(2)]);var state_11883__$1 = state_11883;var statearr_11897_11919 = state_11883__$1;(statearr_11897_11919[(2)] = inst_11877);
(statearr_11897_11919[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (10)))
{var state_11883__$1 = state_11883;var statearr_11898_11920 = state_11883__$1;(statearr_11898_11920[(2)] = fc);
(statearr_11898_11920[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11884 === (8)))
{var inst_11872 = (state_11883[(2)]);var state_11883__$1 = state_11883;if(cljs.core.truth_(inst_11872))
{var statearr_11899_11921 = state_11883__$1;(statearr_11899_11921[(1)] = (12));
} else
{var statearr_11900_11922 = state_11883__$1;(statearr_11900_11922[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});})(c__6460__auto___11908,tc,fc))
;return ((function (switch__6445__auto__,c__6460__auto___11908,tc,fc){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11904 = [null,null,null,null,null,null,null,null,null];(statearr_11904[(0)] = state_machine__6446__auto__);
(statearr_11904[(1)] = (1));
return statearr_11904;
});
var state_machine__6446__auto____1 = (function (state_11883){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11905){if((e11905 instanceof Object))
{var ex__6449__auto__ = e11905;var statearr_11906_11923 = state_11883;(statearr_11906_11923[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11905;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11924 = state_11883;
state_11883 = G__11924;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11883){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___11908,tc,fc))
})();var state__6462__auto__ = (function (){var statearr_11907 = f__6461__auto__.call(null);(statearr_11907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___11908);
return statearr_11907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___11908,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6460__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto__){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto__){
return (function (state_11971){var state_val_11972 = (state_11971[(1)]);if((state_val_11972 === (7)))
{var inst_11967 = (state_11971[(2)]);var state_11971__$1 = state_11971;var statearr_11973_11989 = state_11971__$1;(statearr_11973_11989[(2)] = inst_11967);
(statearr_11973_11989[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11972 === (6)))
{var inst_11957 = (state_11971[(7)]);var inst_11960 = (state_11971[(8)]);var inst_11964 = f.call(null,inst_11957,inst_11960);var inst_11957__$1 = inst_11964;var state_11971__$1 = (function (){var statearr_11974 = state_11971;(statearr_11974[(7)] = inst_11957__$1);
return statearr_11974;
})();var statearr_11975_11990 = state_11971__$1;(statearr_11975_11990[(2)] = null);
(statearr_11975_11990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11972 === (5)))
{var inst_11957 = (state_11971[(7)]);var state_11971__$1 = state_11971;var statearr_11976_11991 = state_11971__$1;(statearr_11976_11991[(2)] = inst_11957);
(statearr_11976_11991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11972 === (4)))
{var inst_11960 = (state_11971[(8)]);var inst_11960__$1 = (state_11971[(2)]);var inst_11961 = (inst_11960__$1 == null);var state_11971__$1 = (function (){var statearr_11977 = state_11971;(statearr_11977[(8)] = inst_11960__$1);
return statearr_11977;
})();if(cljs.core.truth_(inst_11961))
{var statearr_11978_11992 = state_11971__$1;(statearr_11978_11992[(1)] = (5));
} else
{var statearr_11979_11993 = state_11971__$1;(statearr_11979_11993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11972 === (3)))
{var inst_11969 = (state_11971[(2)]);var state_11971__$1 = state_11971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11971__$1,inst_11969);
} else
{if((state_val_11972 === (2)))
{var state_11971__$1 = state_11971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11971__$1,(4),ch);
} else
{if((state_val_11972 === (1)))
{var inst_11957 = init;var state_11971__$1 = (function (){var statearr_11980 = state_11971;(statearr_11980[(7)] = inst_11957);
return statearr_11980;
})();var statearr_11981_11994 = state_11971__$1;(statearr_11981_11994[(2)] = null);
(statearr_11981_11994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6460__auto__))
;return ((function (switch__6445__auto__,c__6460__auto__){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_11985 = [null,null,null,null,null,null,null,null,null];(statearr_11985[(0)] = state_machine__6446__auto__);
(statearr_11985[(1)] = (1));
return statearr_11985;
});
var state_machine__6446__auto____1 = (function (state_11971){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_11971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e11986){if((e11986 instanceof Object))
{var ex__6449__auto__ = e11986;var statearr_11987_11995 = state_11971;(statearr_11987_11995[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11986;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11996 = state_11971;
state_11971 = G__11996;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_11971){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_11971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto__))
})();var state__6462__auto__ = (function (){var statearr_11988 = f__6461__auto__.call(null);(statearr_11988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto__);
return statearr_11988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto__))
);
return c__6460__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6460__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto__){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto__){
return (function (state_12070){var state_val_12071 = (state_12070[(1)]);if((state_val_12071 === (7)))
{var inst_12052 = (state_12070[(2)]);var state_12070__$1 = state_12070;var statearr_12072_12095 = state_12070__$1;(statearr_12072_12095[(2)] = inst_12052);
(statearr_12072_12095[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (1)))
{var inst_12046 = cljs.core.seq.call(null,coll);var inst_12047 = inst_12046;var state_12070__$1 = (function (){var statearr_12073 = state_12070;(statearr_12073[(7)] = inst_12047);
return statearr_12073;
})();var statearr_12074_12096 = state_12070__$1;(statearr_12074_12096[(2)] = null);
(statearr_12074_12096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (4)))
{var inst_12047 = (state_12070[(7)]);var inst_12050 = cljs.core.first.call(null,inst_12047);var state_12070__$1 = state_12070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12070__$1,(7),ch,inst_12050);
} else
{if((state_val_12071 === (13)))
{var inst_12064 = (state_12070[(2)]);var state_12070__$1 = state_12070;var statearr_12075_12097 = state_12070__$1;(statearr_12075_12097[(2)] = inst_12064);
(statearr_12075_12097[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (6)))
{var inst_12055 = (state_12070[(2)]);var state_12070__$1 = state_12070;if(cljs.core.truth_(inst_12055))
{var statearr_12076_12098 = state_12070__$1;(statearr_12076_12098[(1)] = (8));
} else
{var statearr_12077_12099 = state_12070__$1;(statearr_12077_12099[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (3)))
{var inst_12068 = (state_12070[(2)]);var state_12070__$1 = state_12070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12070__$1,inst_12068);
} else
{if((state_val_12071 === (12)))
{var state_12070__$1 = state_12070;var statearr_12078_12100 = state_12070__$1;(statearr_12078_12100[(2)] = null);
(statearr_12078_12100[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (2)))
{var inst_12047 = (state_12070[(7)]);var state_12070__$1 = state_12070;if(cljs.core.truth_(inst_12047))
{var statearr_12079_12101 = state_12070__$1;(statearr_12079_12101[(1)] = (4));
} else
{var statearr_12080_12102 = state_12070__$1;(statearr_12080_12102[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (11)))
{var inst_12061 = cljs.core.async.close_BANG_.call(null,ch);var state_12070__$1 = state_12070;var statearr_12081_12103 = state_12070__$1;(statearr_12081_12103[(2)] = inst_12061);
(statearr_12081_12103[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (9)))
{var state_12070__$1 = state_12070;if(cljs.core.truth_(close_QMARK_))
{var statearr_12082_12104 = state_12070__$1;(statearr_12082_12104[(1)] = (11));
} else
{var statearr_12083_12105 = state_12070__$1;(statearr_12083_12105[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (5)))
{var inst_12047 = (state_12070[(7)]);var state_12070__$1 = state_12070;var statearr_12084_12106 = state_12070__$1;(statearr_12084_12106[(2)] = inst_12047);
(statearr_12084_12106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (10)))
{var inst_12066 = (state_12070[(2)]);var state_12070__$1 = state_12070;var statearr_12085_12107 = state_12070__$1;(statearr_12085_12107[(2)] = inst_12066);
(statearr_12085_12107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12071 === (8)))
{var inst_12047 = (state_12070[(7)]);var inst_12057 = cljs.core.next.call(null,inst_12047);var inst_12047__$1 = inst_12057;var state_12070__$1 = (function (){var statearr_12086 = state_12070;(statearr_12086[(7)] = inst_12047__$1);
return statearr_12086;
})();var statearr_12087_12108 = state_12070__$1;(statearr_12087_12108[(2)] = null);
(statearr_12087_12108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__6460__auto__))
;return ((function (switch__6445__auto__,c__6460__auto__){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_12091 = [null,null,null,null,null,null,null,null];(statearr_12091[(0)] = state_machine__6446__auto__);
(statearr_12091[(1)] = (1));
return statearr_12091;
});
var state_machine__6446__auto____1 = (function (state_12070){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_12070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e12092){if((e12092 instanceof Object))
{var ex__6449__auto__ = e12092;var statearr_12093_12109 = state_12070;(statearr_12093_12109[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12110 = state_12070;
state_12070 = G__12110;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_12070){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_12070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto__))
})();var state__6462__auto__ = (function (){var statearr_12094 = f__6461__auto__.call(null);(statearr_12094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto__);
return statearr_12094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto__))
);
return c__6460__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12112 = {};return obj12112;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3614__auto__ = _;if(and__3614__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4262__auto__ = (((_ == null))?null:_);return (function (){var or__3626__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12114 = {};return obj12114;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12336 = (function (cs,ch,mult,meta12337){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12337 = meta12337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12336.cljs$lang$type = true;
cljs.core.async.t12336.cljs$lang$ctorStr = "cljs.core.async/t12336";
cljs.core.async.t12336.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t12336");
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12336.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12338){var self__ = this;
var _12338__$1 = this;return self__.meta12337;
});})(cs))
;
cljs.core.async.t12336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12338,meta12337__$1){var self__ = this;
var _12338__$1 = this;return (new cljs.core.async.t12336(self__.cs,self__.ch,self__.mult,meta12337__$1));
});})(cs))
;
cljs.core.async.__GT_t12336 = ((function (cs){
return (function __GT_t12336(cs__$1,ch__$1,mult__$1,meta12337){return (new cljs.core.async.t12336(cs__$1,ch__$1,mult__$1,meta12337));
});})(cs))
;
}
return (new cljs.core.async.t12336(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6460__auto___12557 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___12557,cs,m,dchan,dctr,done){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___12557,cs,m,dchan,dctr,done){
return (function (state_12469){var state_val_12470 = (state_12469[(1)]);if((state_val_12470 === (7)))
{var inst_12465 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12471_12558 = state_12469__$1;(statearr_12471_12558[(2)] = inst_12465);
(statearr_12471_12558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (20)))
{var inst_12370 = (state_12469[(7)]);var inst_12380 = cljs.core.first.call(null,inst_12370);var inst_12381 = cljs.core.nth.call(null,inst_12380,(0),null);var inst_12382 = cljs.core.nth.call(null,inst_12380,(1),null);var state_12469__$1 = (function (){var statearr_12472 = state_12469;(statearr_12472[(8)] = inst_12381);
return statearr_12472;
})();if(cljs.core.truth_(inst_12382))
{var statearr_12473_12559 = state_12469__$1;(statearr_12473_12559[(1)] = (22));
} else
{var statearr_12474_12560 = state_12469__$1;(statearr_12474_12560[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (27)))
{var inst_12417 = (state_12469[(9)]);var inst_12412 = (state_12469[(10)]);var inst_12410 = (state_12469[(11)]);var inst_12341 = (state_12469[(12)]);var inst_12417__$1 = cljs.core._nth.call(null,inst_12410,inst_12412);var inst_12418 = cljs.core.async.put_BANG_.call(null,inst_12417__$1,inst_12341,done);var state_12469__$1 = (function (){var statearr_12475 = state_12469;(statearr_12475[(9)] = inst_12417__$1);
return statearr_12475;
})();if(cljs.core.truth_(inst_12418))
{var statearr_12476_12561 = state_12469__$1;(statearr_12476_12561[(1)] = (30));
} else
{var statearr_12477_12562 = state_12469__$1;(statearr_12477_12562[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (1)))
{var state_12469__$1 = state_12469;var statearr_12478_12563 = state_12469__$1;(statearr_12478_12563[(2)] = null);
(statearr_12478_12563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (24)))
{var inst_12370 = (state_12469[(7)]);var inst_12387 = (state_12469[(2)]);var inst_12388 = cljs.core.next.call(null,inst_12370);var inst_12350 = inst_12388;var inst_12351 = null;var inst_12352 = (0);var inst_12353 = (0);var state_12469__$1 = (function (){var statearr_12479 = state_12469;(statearr_12479[(13)] = inst_12352);
(statearr_12479[(14)] = inst_12351);
(statearr_12479[(15)] = inst_12350);
(statearr_12479[(16)] = inst_12353);
(statearr_12479[(17)] = inst_12387);
return statearr_12479;
})();var statearr_12480_12564 = state_12469__$1;(statearr_12480_12564[(2)] = null);
(statearr_12480_12564[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (39)))
{var state_12469__$1 = state_12469;var statearr_12484_12565 = state_12469__$1;(statearr_12484_12565[(2)] = null);
(statearr_12484_12565[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (4)))
{var inst_12341 = (state_12469[(12)]);var inst_12341__$1 = (state_12469[(2)]);var inst_12342 = (inst_12341__$1 == null);var state_12469__$1 = (function (){var statearr_12485 = state_12469;(statearr_12485[(12)] = inst_12341__$1);
return statearr_12485;
})();if(cljs.core.truth_(inst_12342))
{var statearr_12486_12566 = state_12469__$1;(statearr_12486_12566[(1)] = (5));
} else
{var statearr_12487_12567 = state_12469__$1;(statearr_12487_12567[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (15)))
{var inst_12352 = (state_12469[(13)]);var inst_12351 = (state_12469[(14)]);var inst_12350 = (state_12469[(15)]);var inst_12353 = (state_12469[(16)]);var inst_12366 = (state_12469[(2)]);var inst_12367 = (inst_12353 + (1));var tmp12481 = inst_12352;var tmp12482 = inst_12351;var tmp12483 = inst_12350;var inst_12350__$1 = tmp12483;var inst_12351__$1 = tmp12482;var inst_12352__$1 = tmp12481;var inst_12353__$1 = inst_12367;var state_12469__$1 = (function (){var statearr_12488 = state_12469;(statearr_12488[(13)] = inst_12352__$1);
(statearr_12488[(14)] = inst_12351__$1);
(statearr_12488[(15)] = inst_12350__$1);
(statearr_12488[(18)] = inst_12366);
(statearr_12488[(16)] = inst_12353__$1);
return statearr_12488;
})();var statearr_12489_12568 = state_12469__$1;(statearr_12489_12568[(2)] = null);
(statearr_12489_12568[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (21)))
{var inst_12391 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12493_12569 = state_12469__$1;(statearr_12493_12569[(2)] = inst_12391);
(statearr_12493_12569[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (31)))
{var inst_12417 = (state_12469[(9)]);var inst_12421 = done.call(null,null);var inst_12422 = cljs.core.async.untap_STAR_.call(null,m,inst_12417);var state_12469__$1 = (function (){var statearr_12494 = state_12469;(statearr_12494[(19)] = inst_12421);
return statearr_12494;
})();var statearr_12495_12570 = state_12469__$1;(statearr_12495_12570[(2)] = inst_12422);
(statearr_12495_12570[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (32)))
{var inst_12412 = (state_12469[(10)]);var inst_12410 = (state_12469[(11)]);var inst_12411 = (state_12469[(20)]);var inst_12409 = (state_12469[(21)]);var inst_12424 = (state_12469[(2)]);var inst_12425 = (inst_12412 + (1));var tmp12490 = inst_12410;var tmp12491 = inst_12411;var tmp12492 = inst_12409;var inst_12409__$1 = tmp12492;var inst_12410__$1 = tmp12490;var inst_12411__$1 = tmp12491;var inst_12412__$1 = inst_12425;var state_12469__$1 = (function (){var statearr_12496 = state_12469;(statearr_12496[(10)] = inst_12412__$1);
(statearr_12496[(11)] = inst_12410__$1);
(statearr_12496[(22)] = inst_12424);
(statearr_12496[(20)] = inst_12411__$1);
(statearr_12496[(21)] = inst_12409__$1);
return statearr_12496;
})();var statearr_12497_12571 = state_12469__$1;(statearr_12497_12571[(2)] = null);
(statearr_12497_12571[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (40)))
{var inst_12437 = (state_12469[(23)]);var inst_12441 = done.call(null,null);var inst_12442 = cljs.core.async.untap_STAR_.call(null,m,inst_12437);var state_12469__$1 = (function (){var statearr_12498 = state_12469;(statearr_12498[(24)] = inst_12441);
return statearr_12498;
})();var statearr_12499_12572 = state_12469__$1;(statearr_12499_12572[(2)] = inst_12442);
(statearr_12499_12572[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (33)))
{var inst_12428 = (state_12469[(25)]);var inst_12430 = cljs.core.chunked_seq_QMARK_.call(null,inst_12428);var state_12469__$1 = state_12469;if(inst_12430)
{var statearr_12500_12573 = state_12469__$1;(statearr_12500_12573[(1)] = (36));
} else
{var statearr_12501_12574 = state_12469__$1;(statearr_12501_12574[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (13)))
{var inst_12360 = (state_12469[(26)]);var inst_12363 = cljs.core.async.close_BANG_.call(null,inst_12360);var state_12469__$1 = state_12469;var statearr_12502_12575 = state_12469__$1;(statearr_12502_12575[(2)] = inst_12363);
(statearr_12502_12575[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (22)))
{var inst_12381 = (state_12469[(8)]);var inst_12384 = cljs.core.async.close_BANG_.call(null,inst_12381);var state_12469__$1 = state_12469;var statearr_12503_12576 = state_12469__$1;(statearr_12503_12576[(2)] = inst_12384);
(statearr_12503_12576[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (36)))
{var inst_12428 = (state_12469[(25)]);var inst_12432 = cljs.core.chunk_first.call(null,inst_12428);var inst_12433 = cljs.core.chunk_rest.call(null,inst_12428);var inst_12434 = cljs.core.count.call(null,inst_12432);var inst_12409 = inst_12433;var inst_12410 = inst_12432;var inst_12411 = inst_12434;var inst_12412 = (0);var state_12469__$1 = (function (){var statearr_12504 = state_12469;(statearr_12504[(10)] = inst_12412);
(statearr_12504[(11)] = inst_12410);
(statearr_12504[(20)] = inst_12411);
(statearr_12504[(21)] = inst_12409);
return statearr_12504;
})();var statearr_12505_12577 = state_12469__$1;(statearr_12505_12577[(2)] = null);
(statearr_12505_12577[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (41)))
{var inst_12428 = (state_12469[(25)]);var inst_12444 = (state_12469[(2)]);var inst_12445 = cljs.core.next.call(null,inst_12428);var inst_12409 = inst_12445;var inst_12410 = null;var inst_12411 = (0);var inst_12412 = (0);var state_12469__$1 = (function (){var statearr_12506 = state_12469;(statearr_12506[(10)] = inst_12412);
(statearr_12506[(11)] = inst_12410);
(statearr_12506[(20)] = inst_12411);
(statearr_12506[(27)] = inst_12444);
(statearr_12506[(21)] = inst_12409);
return statearr_12506;
})();var statearr_12507_12578 = state_12469__$1;(statearr_12507_12578[(2)] = null);
(statearr_12507_12578[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (43)))
{var state_12469__$1 = state_12469;var statearr_12508_12579 = state_12469__$1;(statearr_12508_12579[(2)] = null);
(statearr_12508_12579[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (29)))
{var inst_12453 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12509_12580 = state_12469__$1;(statearr_12509_12580[(2)] = inst_12453);
(statearr_12509_12580[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (44)))
{var inst_12462 = (state_12469[(2)]);var state_12469__$1 = (function (){var statearr_12510 = state_12469;(statearr_12510[(28)] = inst_12462);
return statearr_12510;
})();var statearr_12511_12581 = state_12469__$1;(statearr_12511_12581[(2)] = null);
(statearr_12511_12581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (6)))
{var inst_12401 = (state_12469[(29)]);var inst_12400 = cljs.core.deref.call(null,cs);var inst_12401__$1 = cljs.core.keys.call(null,inst_12400);var inst_12402 = cljs.core.count.call(null,inst_12401__$1);var inst_12403 = cljs.core.reset_BANG_.call(null,dctr,inst_12402);var inst_12408 = cljs.core.seq.call(null,inst_12401__$1);var inst_12409 = inst_12408;var inst_12410 = null;var inst_12411 = (0);var inst_12412 = (0);var state_12469__$1 = (function (){var statearr_12512 = state_12469;(statearr_12512[(29)] = inst_12401__$1);
(statearr_12512[(10)] = inst_12412);
(statearr_12512[(30)] = inst_12403);
(statearr_12512[(11)] = inst_12410);
(statearr_12512[(20)] = inst_12411);
(statearr_12512[(21)] = inst_12409);
return statearr_12512;
})();var statearr_12513_12582 = state_12469__$1;(statearr_12513_12582[(2)] = null);
(statearr_12513_12582[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (28)))
{var inst_12428 = (state_12469[(25)]);var inst_12409 = (state_12469[(21)]);var inst_12428__$1 = cljs.core.seq.call(null,inst_12409);var state_12469__$1 = (function (){var statearr_12514 = state_12469;(statearr_12514[(25)] = inst_12428__$1);
return statearr_12514;
})();if(inst_12428__$1)
{var statearr_12515_12583 = state_12469__$1;(statearr_12515_12583[(1)] = (33));
} else
{var statearr_12516_12584 = state_12469__$1;(statearr_12516_12584[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (25)))
{var inst_12412 = (state_12469[(10)]);var inst_12411 = (state_12469[(20)]);var inst_12414 = (inst_12412 < inst_12411);var inst_12415 = inst_12414;var state_12469__$1 = state_12469;if(cljs.core.truth_(inst_12415))
{var statearr_12517_12585 = state_12469__$1;(statearr_12517_12585[(1)] = (27));
} else
{var statearr_12518_12586 = state_12469__$1;(statearr_12518_12586[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (34)))
{var state_12469__$1 = state_12469;var statearr_12519_12587 = state_12469__$1;(statearr_12519_12587[(2)] = null);
(statearr_12519_12587[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (17)))
{var state_12469__$1 = state_12469;var statearr_12520_12588 = state_12469__$1;(statearr_12520_12588[(2)] = null);
(statearr_12520_12588[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (3)))
{var inst_12467 = (state_12469[(2)]);var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12469__$1,inst_12467);
} else
{if((state_val_12470 === (12)))
{var inst_12396 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12521_12589 = state_12469__$1;(statearr_12521_12589[(2)] = inst_12396);
(statearr_12521_12589[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (2)))
{var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12469__$1,(4),ch);
} else
{if((state_val_12470 === (23)))
{var state_12469__$1 = state_12469;var statearr_12522_12590 = state_12469__$1;(statearr_12522_12590[(2)] = null);
(statearr_12522_12590[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (35)))
{var inst_12451 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12523_12591 = state_12469__$1;(statearr_12523_12591[(2)] = inst_12451);
(statearr_12523_12591[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (19)))
{var inst_12370 = (state_12469[(7)]);var inst_12374 = cljs.core.chunk_first.call(null,inst_12370);var inst_12375 = cljs.core.chunk_rest.call(null,inst_12370);var inst_12376 = cljs.core.count.call(null,inst_12374);var inst_12350 = inst_12375;var inst_12351 = inst_12374;var inst_12352 = inst_12376;var inst_12353 = (0);var state_12469__$1 = (function (){var statearr_12524 = state_12469;(statearr_12524[(13)] = inst_12352);
(statearr_12524[(14)] = inst_12351);
(statearr_12524[(15)] = inst_12350);
(statearr_12524[(16)] = inst_12353);
return statearr_12524;
})();var statearr_12525_12592 = state_12469__$1;(statearr_12525_12592[(2)] = null);
(statearr_12525_12592[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (11)))
{var inst_12370 = (state_12469[(7)]);var inst_12350 = (state_12469[(15)]);var inst_12370__$1 = cljs.core.seq.call(null,inst_12350);var state_12469__$1 = (function (){var statearr_12526 = state_12469;(statearr_12526[(7)] = inst_12370__$1);
return statearr_12526;
})();if(inst_12370__$1)
{var statearr_12527_12593 = state_12469__$1;(statearr_12527_12593[(1)] = (16));
} else
{var statearr_12528_12594 = state_12469__$1;(statearr_12528_12594[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (9)))
{var inst_12398 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12529_12595 = state_12469__$1;(statearr_12529_12595[(2)] = inst_12398);
(statearr_12529_12595[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (5)))
{var inst_12348 = cljs.core.deref.call(null,cs);var inst_12349 = cljs.core.seq.call(null,inst_12348);var inst_12350 = inst_12349;var inst_12351 = null;var inst_12352 = (0);var inst_12353 = (0);var state_12469__$1 = (function (){var statearr_12530 = state_12469;(statearr_12530[(13)] = inst_12352);
(statearr_12530[(14)] = inst_12351);
(statearr_12530[(15)] = inst_12350);
(statearr_12530[(16)] = inst_12353);
return statearr_12530;
})();var statearr_12531_12596 = state_12469__$1;(statearr_12531_12596[(2)] = null);
(statearr_12531_12596[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (14)))
{var state_12469__$1 = state_12469;var statearr_12532_12597 = state_12469__$1;(statearr_12532_12597[(2)] = null);
(statearr_12532_12597[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (45)))
{var inst_12459 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12533_12598 = state_12469__$1;(statearr_12533_12598[(2)] = inst_12459);
(statearr_12533_12598[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (26)))
{var inst_12401 = (state_12469[(29)]);var inst_12455 = (state_12469[(2)]);var inst_12456 = cljs.core.seq.call(null,inst_12401);var state_12469__$1 = (function (){var statearr_12534 = state_12469;(statearr_12534[(31)] = inst_12455);
return statearr_12534;
})();if(inst_12456)
{var statearr_12535_12599 = state_12469__$1;(statearr_12535_12599[(1)] = (42));
} else
{var statearr_12536_12600 = state_12469__$1;(statearr_12536_12600[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (16)))
{var inst_12370 = (state_12469[(7)]);var inst_12372 = cljs.core.chunked_seq_QMARK_.call(null,inst_12370);var state_12469__$1 = state_12469;if(inst_12372)
{var statearr_12537_12601 = state_12469__$1;(statearr_12537_12601[(1)] = (19));
} else
{var statearr_12538_12602 = state_12469__$1;(statearr_12538_12602[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (38)))
{var inst_12448 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12539_12603 = state_12469__$1;(statearr_12539_12603[(2)] = inst_12448);
(statearr_12539_12603[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (30)))
{var state_12469__$1 = state_12469;var statearr_12540_12604 = state_12469__$1;(statearr_12540_12604[(2)] = null);
(statearr_12540_12604[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (10)))
{var inst_12351 = (state_12469[(14)]);var inst_12353 = (state_12469[(16)]);var inst_12359 = cljs.core._nth.call(null,inst_12351,inst_12353);var inst_12360 = cljs.core.nth.call(null,inst_12359,(0),null);var inst_12361 = cljs.core.nth.call(null,inst_12359,(1),null);var state_12469__$1 = (function (){var statearr_12541 = state_12469;(statearr_12541[(26)] = inst_12360);
return statearr_12541;
})();if(cljs.core.truth_(inst_12361))
{var statearr_12542_12605 = state_12469__$1;(statearr_12542_12605[(1)] = (13));
} else
{var statearr_12543_12606 = state_12469__$1;(statearr_12543_12606[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (18)))
{var inst_12394 = (state_12469[(2)]);var state_12469__$1 = state_12469;var statearr_12544_12607 = state_12469__$1;(statearr_12544_12607[(2)] = inst_12394);
(statearr_12544_12607[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (42)))
{var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12469__$1,(45),dchan);
} else
{if((state_val_12470 === (37)))
{var inst_12437 = (state_12469[(23)]);var inst_12428 = (state_12469[(25)]);var inst_12341 = (state_12469[(12)]);var inst_12437__$1 = cljs.core.first.call(null,inst_12428);var inst_12438 = cljs.core.async.put_BANG_.call(null,inst_12437__$1,inst_12341,done);var state_12469__$1 = (function (){var statearr_12545 = state_12469;(statearr_12545[(23)] = inst_12437__$1);
return statearr_12545;
})();if(cljs.core.truth_(inst_12438))
{var statearr_12546_12608 = state_12469__$1;(statearr_12546_12608[(1)] = (39));
} else
{var statearr_12547_12609 = state_12469__$1;(statearr_12547_12609[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12470 === (8)))
{var inst_12352 = (state_12469[(13)]);var inst_12353 = (state_12469[(16)]);var inst_12355 = (inst_12353 < inst_12352);var inst_12356 = inst_12355;var state_12469__$1 = state_12469;if(cljs.core.truth_(inst_12356))
{var statearr_12548_12610 = state_12469__$1;(statearr_12548_12610[(1)] = (10));
} else
{var statearr_12549_12611 = state_12469__$1;(statearr_12549_12611[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__6460__auto___12557,cs,m,dchan,dctr,done))
;return ((function (switch__6445__auto__,c__6460__auto___12557,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_12553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12553[(0)] = state_machine__6446__auto__);
(statearr_12553[(1)] = (1));
return statearr_12553;
});
var state_machine__6446__auto____1 = (function (state_12469){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_12469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e12554){if((e12554 instanceof Object))
{var ex__6449__auto__ = e12554;var statearr_12555_12612 = state_12469;(statearr_12555_12612[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12554;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12613 = state_12469;
state_12469 = G__12613;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___12557,cs,m,dchan,dctr,done))
})();var state__6462__auto__ = (function (){var statearr_12556 = f__6461__auto__.call(null);(statearr_12556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___12557);
return statearr_12556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___12557,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12615 = {};return obj12615;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12616){var map__12621 = p__12616;var map__12621__$1 = ((cljs.core.seq_QMARK_.call(null,map__12621))?cljs.core.apply.call(null,cljs.core.hash_map,map__12621):map__12621);var opts = map__12621__$1;var statearr_12622_12625 = state;(statearr_12622_12625[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12621,map__12621__$1,opts){
return (function (val){var statearr_12623_12626 = state;(statearr_12623_12626[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12621,map__12621__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_12624_12627 = state;(statearr_12624_12627[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12616 = null;if (arguments.length > 3) {
  p__12616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12616);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12628){
var state = cljs.core.first(arglist__12628);
arglist__12628 = cljs.core.next(arglist__12628);
var cont_block = cljs.core.first(arglist__12628);
arglist__12628 = cljs.core.next(arglist__12628);
var ports = cljs.core.first(arglist__12628);
var p__12616 = cljs.core.rest(arglist__12628);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12616);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12748 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12749){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12749 = meta12749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12748.cljs$lang$type = true;
cljs.core.async.t12748.cljs$lang$ctorStr = "cljs.core.async/t12748";
cljs.core.async.t12748.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t12748");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12750){var self__ = this;
var _12750__$1 = this;return self__.meta12749;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12750,meta12749__$1){var self__ = this;
var _12750__$1 = this;return (new cljs.core.async.t12748(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12749__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12748 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12749){return (new cljs.core.async.t12748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12749));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12748(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6460__auto___12867 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12820){var state_val_12821 = (state_12820[(1)]);if((state_val_12821 === (7)))
{var inst_12764 = (state_12820[(7)]);var inst_12769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12764);var state_12820__$1 = state_12820;var statearr_12822_12868 = state_12820__$1;(statearr_12822_12868[(2)] = inst_12769);
(statearr_12822_12868[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (20)))
{var inst_12779 = (state_12820[(8)]);var state_12820__$1 = state_12820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12820__$1,(23),out,inst_12779);
} else
{if((state_val_12821 === (1)))
{var inst_12754 = (state_12820[(9)]);var inst_12754__$1 = calc_state.call(null);var inst_12755 = cljs.core.seq_QMARK_.call(null,inst_12754__$1);var state_12820__$1 = (function (){var statearr_12823 = state_12820;(statearr_12823[(9)] = inst_12754__$1);
return statearr_12823;
})();if(inst_12755)
{var statearr_12824_12869 = state_12820__$1;(statearr_12824_12869[(1)] = (2));
} else
{var statearr_12825_12870 = state_12820__$1;(statearr_12825_12870[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (24)))
{var inst_12772 = (state_12820[(10)]);var inst_12764 = inst_12772;var state_12820__$1 = (function (){var statearr_12826 = state_12820;(statearr_12826[(7)] = inst_12764);
return statearr_12826;
})();var statearr_12827_12871 = state_12820__$1;(statearr_12827_12871[(2)] = null);
(statearr_12827_12871[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (4)))
{var inst_12754 = (state_12820[(9)]);var inst_12760 = (state_12820[(2)]);var inst_12761 = cljs.core.get.call(null,inst_12760,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12762 = cljs.core.get.call(null,inst_12760,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12763 = cljs.core.get.call(null,inst_12760,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12764 = inst_12754;var state_12820__$1 = (function (){var statearr_12828 = state_12820;(statearr_12828[(11)] = inst_12762);
(statearr_12828[(12)] = inst_12763);
(statearr_12828[(7)] = inst_12764);
(statearr_12828[(13)] = inst_12761);
return statearr_12828;
})();var statearr_12829_12872 = state_12820__$1;(statearr_12829_12872[(2)] = null);
(statearr_12829_12872[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (15)))
{var state_12820__$1 = state_12820;var statearr_12830_12873 = state_12820__$1;(statearr_12830_12873[(2)] = null);
(statearr_12830_12873[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (21)))
{var inst_12772 = (state_12820[(10)]);var inst_12764 = inst_12772;var state_12820__$1 = (function (){var statearr_12831 = state_12820;(statearr_12831[(7)] = inst_12764);
return statearr_12831;
})();var statearr_12832_12874 = state_12820__$1;(statearr_12832_12874[(2)] = null);
(statearr_12832_12874[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (13)))
{var inst_12816 = (state_12820[(2)]);var state_12820__$1 = state_12820;var statearr_12833_12875 = state_12820__$1;(statearr_12833_12875[(2)] = inst_12816);
(statearr_12833_12875[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (22)))
{var inst_12814 = (state_12820[(2)]);var state_12820__$1 = state_12820;var statearr_12834_12876 = state_12820__$1;(statearr_12834_12876[(2)] = inst_12814);
(statearr_12834_12876[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (6)))
{var inst_12818 = (state_12820[(2)]);var state_12820__$1 = state_12820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12820__$1,inst_12818);
} else
{if((state_val_12821 === (25)))
{var state_12820__$1 = state_12820;var statearr_12835_12877 = state_12820__$1;(statearr_12835_12877[(2)] = null);
(statearr_12835_12877[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (17)))
{var inst_12794 = (state_12820[(14)]);var state_12820__$1 = state_12820;var statearr_12836_12878 = state_12820__$1;(statearr_12836_12878[(2)] = inst_12794);
(statearr_12836_12878[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (3)))
{var inst_12754 = (state_12820[(9)]);var state_12820__$1 = state_12820;var statearr_12837_12879 = state_12820__$1;(statearr_12837_12879[(2)] = inst_12754);
(statearr_12837_12879[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (12)))
{var inst_12775 = (state_12820[(15)]);var inst_12794 = (state_12820[(14)]);var inst_12780 = (state_12820[(16)]);var inst_12794__$1 = inst_12775.call(null,inst_12780);var state_12820__$1 = (function (){var statearr_12838 = state_12820;(statearr_12838[(14)] = inst_12794__$1);
return statearr_12838;
})();if(cljs.core.truth_(inst_12794__$1))
{var statearr_12839_12880 = state_12820__$1;(statearr_12839_12880[(1)] = (17));
} else
{var statearr_12840_12881 = state_12820__$1;(statearr_12840_12881[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (2)))
{var inst_12754 = (state_12820[(9)]);var inst_12757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12754);var state_12820__$1 = state_12820;var statearr_12841_12882 = state_12820__$1;(statearr_12841_12882[(2)] = inst_12757);
(statearr_12841_12882[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (23)))
{var inst_12805 = (state_12820[(2)]);var state_12820__$1 = state_12820;if(cljs.core.truth_(inst_12805))
{var statearr_12842_12883 = state_12820__$1;(statearr_12842_12883[(1)] = (24));
} else
{var statearr_12843_12884 = state_12820__$1;(statearr_12843_12884[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (19)))
{var inst_12802 = (state_12820[(2)]);var state_12820__$1 = state_12820;if(cljs.core.truth_(inst_12802))
{var statearr_12844_12885 = state_12820__$1;(statearr_12844_12885[(1)] = (20));
} else
{var statearr_12845_12886 = state_12820__$1;(statearr_12845_12886[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (11)))
{var inst_12779 = (state_12820[(8)]);var inst_12785 = (inst_12779 == null);var state_12820__$1 = state_12820;if(cljs.core.truth_(inst_12785))
{var statearr_12846_12887 = state_12820__$1;(statearr_12846_12887[(1)] = (14));
} else
{var statearr_12847_12888 = state_12820__$1;(statearr_12847_12888[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (9)))
{var inst_12772 = (state_12820[(10)]);var inst_12772__$1 = (state_12820[(2)]);var inst_12773 = cljs.core.get.call(null,inst_12772__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12774 = cljs.core.get.call(null,inst_12772__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12775 = cljs.core.get.call(null,inst_12772__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12820__$1 = (function (){var statearr_12848 = state_12820;(statearr_12848[(15)] = inst_12775);
(statearr_12848[(10)] = inst_12772__$1);
(statearr_12848[(17)] = inst_12774);
return statearr_12848;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_12820__$1,(10),inst_12773);
} else
{if((state_val_12821 === (5)))
{var inst_12764 = (state_12820[(7)]);var inst_12767 = cljs.core.seq_QMARK_.call(null,inst_12764);var state_12820__$1 = state_12820;if(inst_12767)
{var statearr_12849_12889 = state_12820__$1;(statearr_12849_12889[(1)] = (7));
} else
{var statearr_12850_12890 = state_12820__$1;(statearr_12850_12890[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (14)))
{var inst_12780 = (state_12820[(16)]);var inst_12787 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12780);var state_12820__$1 = state_12820;var statearr_12851_12891 = state_12820__$1;(statearr_12851_12891[(2)] = inst_12787);
(statearr_12851_12891[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (26)))
{var inst_12810 = (state_12820[(2)]);var state_12820__$1 = state_12820;var statearr_12852_12892 = state_12820__$1;(statearr_12852_12892[(2)] = inst_12810);
(statearr_12852_12892[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (16)))
{var inst_12790 = (state_12820[(2)]);var inst_12791 = calc_state.call(null);var inst_12764 = inst_12791;var state_12820__$1 = (function (){var statearr_12853 = state_12820;(statearr_12853[(7)] = inst_12764);
(statearr_12853[(18)] = inst_12790);
return statearr_12853;
})();var statearr_12854_12893 = state_12820__$1;(statearr_12854_12893[(2)] = null);
(statearr_12854_12893[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (10)))
{var inst_12779 = (state_12820[(8)]);var inst_12780 = (state_12820[(16)]);var inst_12778 = (state_12820[(2)]);var inst_12779__$1 = cljs.core.nth.call(null,inst_12778,(0),null);var inst_12780__$1 = cljs.core.nth.call(null,inst_12778,(1),null);var inst_12781 = (inst_12779__$1 == null);var inst_12782 = cljs.core._EQ_.call(null,inst_12780__$1,change);var inst_12783 = (inst_12781) || (inst_12782);var state_12820__$1 = (function (){var statearr_12855 = state_12820;(statearr_12855[(8)] = inst_12779__$1);
(statearr_12855[(16)] = inst_12780__$1);
return statearr_12855;
})();if(cljs.core.truth_(inst_12783))
{var statearr_12856_12894 = state_12820__$1;(statearr_12856_12894[(1)] = (11));
} else
{var statearr_12857_12895 = state_12820__$1;(statearr_12857_12895[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (18)))
{var inst_12775 = (state_12820[(15)]);var inst_12780 = (state_12820[(16)]);var inst_12774 = (state_12820[(17)]);var inst_12797 = cljs.core.empty_QMARK_.call(null,inst_12775);var inst_12798 = inst_12774.call(null,inst_12780);var inst_12799 = cljs.core.not.call(null,inst_12798);var inst_12800 = (inst_12797) && (inst_12799);var state_12820__$1 = state_12820;var statearr_12858_12896 = state_12820__$1;(statearr_12858_12896[(2)] = inst_12800);
(statearr_12858_12896[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12821 === (8)))
{var inst_12764 = (state_12820[(7)]);var state_12820__$1 = state_12820;var statearr_12859_12897 = state_12820__$1;(statearr_12859_12897[(2)] = inst_12764);
(statearr_12859_12897[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6445__auto__,c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_12863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12863[(0)] = state_machine__6446__auto__);
(statearr_12863[(1)] = (1));
return statearr_12863;
});
var state_machine__6446__auto____1 = (function (state_12820){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_12820);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e12864){if((e12864 instanceof Object))
{var ex__6449__auto__ = e12864;var statearr_12865_12898 = state_12820;(statearr_12865_12898[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12864;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12899 = state_12820;
state_12820 = G__12899;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_12820){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_12820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6462__auto__ = (function (){var statearr_12866 = f__6461__auto__.call(null);(statearr_12866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___12867);
return statearr_12866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___12867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12901 = {};return obj12901;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3626__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3626__auto__,mults){
return (function (p1__12902_SHARP_){if(cljs.core.truth_(p1__12902_SHARP_.call(null,topic)))
{return p1__12902_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12902_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3626__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13025 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13026){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13026 = meta13026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13025.cljs$lang$type = true;
cljs.core.async.t13025.cljs$lang$ctorStr = "cljs.core.async/t13025";
cljs.core.async.t13025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13025");
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13027){var self__ = this;
var _13027__$1 = this;return self__.meta13026;
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13027,meta13026__$1){var self__ = this;
var _13027__$1 = this;return (new cljs.core.async.t13025(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13026__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13025 = ((function (mults,ensure_mult){
return (function __GT_t13025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13026){return (new cljs.core.async.t13025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13026));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13025(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6460__auto___13147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___13147,mults,ensure_mult,p){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___13147,mults,ensure_mult,p){
return (function (state_13099){var state_val_13100 = (state_13099[(1)]);if((state_val_13100 === (7)))
{var inst_13095 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13101_13148 = state_13099__$1;(statearr_13101_13148[(2)] = inst_13095);
(statearr_13101_13148[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (20)))
{var state_13099__$1 = state_13099;var statearr_13102_13149 = state_13099__$1;(statearr_13102_13149[(2)] = null);
(statearr_13102_13149[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (1)))
{var state_13099__$1 = state_13099;var statearr_13103_13150 = state_13099__$1;(statearr_13103_13150[(2)] = null);
(statearr_13103_13150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (24)))
{var inst_13078 = (state_13099[(7)]);var inst_13087 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13078);var state_13099__$1 = state_13099;var statearr_13104_13151 = state_13099__$1;(statearr_13104_13151[(2)] = inst_13087);
(statearr_13104_13151[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (4)))
{var inst_13030 = (state_13099[(8)]);var inst_13030__$1 = (state_13099[(2)]);var inst_13031 = (inst_13030__$1 == null);var state_13099__$1 = (function (){var statearr_13105 = state_13099;(statearr_13105[(8)] = inst_13030__$1);
return statearr_13105;
})();if(cljs.core.truth_(inst_13031))
{var statearr_13106_13152 = state_13099__$1;(statearr_13106_13152[(1)] = (5));
} else
{var statearr_13107_13153 = state_13099__$1;(statearr_13107_13153[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (15)))
{var inst_13072 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13108_13154 = state_13099__$1;(statearr_13108_13154[(2)] = inst_13072);
(statearr_13108_13154[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (21)))
{var inst_13092 = (state_13099[(2)]);var state_13099__$1 = (function (){var statearr_13109 = state_13099;(statearr_13109[(9)] = inst_13092);
return statearr_13109;
})();var statearr_13110_13155 = state_13099__$1;(statearr_13110_13155[(2)] = null);
(statearr_13110_13155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (13)))
{var inst_13054 = (state_13099[(10)]);var inst_13056 = cljs.core.chunked_seq_QMARK_.call(null,inst_13054);var state_13099__$1 = state_13099;if(inst_13056)
{var statearr_13111_13156 = state_13099__$1;(statearr_13111_13156[(1)] = (16));
} else
{var statearr_13112_13157 = state_13099__$1;(statearr_13112_13157[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (22)))
{var inst_13084 = (state_13099[(2)]);var state_13099__$1 = state_13099;if(cljs.core.truth_(inst_13084))
{var statearr_13113_13158 = state_13099__$1;(statearr_13113_13158[(1)] = (23));
} else
{var statearr_13114_13159 = state_13099__$1;(statearr_13114_13159[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (6)))
{var inst_13078 = (state_13099[(7)]);var inst_13080 = (state_13099[(11)]);var inst_13030 = (state_13099[(8)]);var inst_13078__$1 = topic_fn.call(null,inst_13030);var inst_13079 = cljs.core.deref.call(null,mults);var inst_13080__$1 = cljs.core.get.call(null,inst_13079,inst_13078__$1);var state_13099__$1 = (function (){var statearr_13115 = state_13099;(statearr_13115[(7)] = inst_13078__$1);
(statearr_13115[(11)] = inst_13080__$1);
return statearr_13115;
})();if(cljs.core.truth_(inst_13080__$1))
{var statearr_13116_13160 = state_13099__$1;(statearr_13116_13160[(1)] = (19));
} else
{var statearr_13117_13161 = state_13099__$1;(statearr_13117_13161[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (25)))
{var inst_13089 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13118_13162 = state_13099__$1;(statearr_13118_13162[(2)] = inst_13089);
(statearr_13118_13162[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (17)))
{var inst_13054 = (state_13099[(10)]);var inst_13063 = cljs.core.first.call(null,inst_13054);var inst_13064 = cljs.core.async.muxch_STAR_.call(null,inst_13063);var inst_13065 = cljs.core.async.close_BANG_.call(null,inst_13064);var inst_13066 = cljs.core.next.call(null,inst_13054);var inst_13040 = inst_13066;var inst_13041 = null;var inst_13042 = (0);var inst_13043 = (0);var state_13099__$1 = (function (){var statearr_13119 = state_13099;(statearr_13119[(12)] = inst_13041);
(statearr_13119[(13)] = inst_13042);
(statearr_13119[(14)] = inst_13065);
(statearr_13119[(15)] = inst_13043);
(statearr_13119[(16)] = inst_13040);
return statearr_13119;
})();var statearr_13120_13163 = state_13099__$1;(statearr_13120_13163[(2)] = null);
(statearr_13120_13163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (3)))
{var inst_13097 = (state_13099[(2)]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else
{if((state_val_13100 === (12)))
{var inst_13074 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13121_13164 = state_13099__$1;(statearr_13121_13164[(2)] = inst_13074);
(statearr_13121_13164[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (2)))
{var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13099__$1,(4),ch);
} else
{if((state_val_13100 === (23)))
{var state_13099__$1 = state_13099;var statearr_13122_13165 = state_13099__$1;(statearr_13122_13165[(2)] = null);
(statearr_13122_13165[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (19)))
{var inst_13080 = (state_13099[(11)]);var inst_13030 = (state_13099[(8)]);var inst_13082 = cljs.core.async.muxch_STAR_.call(null,inst_13080);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,(22),inst_13082,inst_13030);
} else
{if((state_val_13100 === (11)))
{var inst_13054 = (state_13099[(10)]);var inst_13040 = (state_13099[(16)]);var inst_13054__$1 = cljs.core.seq.call(null,inst_13040);var state_13099__$1 = (function (){var statearr_13123 = state_13099;(statearr_13123[(10)] = inst_13054__$1);
return statearr_13123;
})();if(inst_13054__$1)
{var statearr_13124_13166 = state_13099__$1;(statearr_13124_13166[(1)] = (13));
} else
{var statearr_13125_13167 = state_13099__$1;(statearr_13125_13167[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (9)))
{var inst_13076 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13126_13168 = state_13099__$1;(statearr_13126_13168[(2)] = inst_13076);
(statearr_13126_13168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (5)))
{var inst_13037 = cljs.core.deref.call(null,mults);var inst_13038 = cljs.core.vals.call(null,inst_13037);var inst_13039 = cljs.core.seq.call(null,inst_13038);var inst_13040 = inst_13039;var inst_13041 = null;var inst_13042 = (0);var inst_13043 = (0);var state_13099__$1 = (function (){var statearr_13127 = state_13099;(statearr_13127[(12)] = inst_13041);
(statearr_13127[(13)] = inst_13042);
(statearr_13127[(15)] = inst_13043);
(statearr_13127[(16)] = inst_13040);
return statearr_13127;
})();var statearr_13128_13169 = state_13099__$1;(statearr_13128_13169[(2)] = null);
(statearr_13128_13169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (14)))
{var state_13099__$1 = state_13099;var statearr_13132_13170 = state_13099__$1;(statearr_13132_13170[(2)] = null);
(statearr_13132_13170[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (16)))
{var inst_13054 = (state_13099[(10)]);var inst_13058 = cljs.core.chunk_first.call(null,inst_13054);var inst_13059 = cljs.core.chunk_rest.call(null,inst_13054);var inst_13060 = cljs.core.count.call(null,inst_13058);var inst_13040 = inst_13059;var inst_13041 = inst_13058;var inst_13042 = inst_13060;var inst_13043 = (0);var state_13099__$1 = (function (){var statearr_13133 = state_13099;(statearr_13133[(12)] = inst_13041);
(statearr_13133[(13)] = inst_13042);
(statearr_13133[(15)] = inst_13043);
(statearr_13133[(16)] = inst_13040);
return statearr_13133;
})();var statearr_13134_13171 = state_13099__$1;(statearr_13134_13171[(2)] = null);
(statearr_13134_13171[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (10)))
{var inst_13041 = (state_13099[(12)]);var inst_13042 = (state_13099[(13)]);var inst_13043 = (state_13099[(15)]);var inst_13040 = (state_13099[(16)]);var inst_13048 = cljs.core._nth.call(null,inst_13041,inst_13043);var inst_13049 = cljs.core.async.muxch_STAR_.call(null,inst_13048);var inst_13050 = cljs.core.async.close_BANG_.call(null,inst_13049);var inst_13051 = (inst_13043 + (1));var tmp13129 = inst_13041;var tmp13130 = inst_13042;var tmp13131 = inst_13040;var inst_13040__$1 = tmp13131;var inst_13041__$1 = tmp13129;var inst_13042__$1 = tmp13130;var inst_13043__$1 = inst_13051;var state_13099__$1 = (function (){var statearr_13135 = state_13099;(statearr_13135[(12)] = inst_13041__$1);
(statearr_13135[(13)] = inst_13042__$1);
(statearr_13135[(17)] = inst_13050);
(statearr_13135[(15)] = inst_13043__$1);
(statearr_13135[(16)] = inst_13040__$1);
return statearr_13135;
})();var statearr_13136_13172 = state_13099__$1;(statearr_13136_13172[(2)] = null);
(statearr_13136_13172[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (18)))
{var inst_13069 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13137_13173 = state_13099__$1;(statearr_13137_13173[(2)] = inst_13069);
(statearr_13137_13173[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (8)))
{var inst_13042 = (state_13099[(13)]);var inst_13043 = (state_13099[(15)]);var inst_13045 = (inst_13043 < inst_13042);var inst_13046 = inst_13045;var state_13099__$1 = state_13099;if(cljs.core.truth_(inst_13046))
{var statearr_13138_13174 = state_13099__$1;(statearr_13138_13174[(1)] = (10));
} else
{var statearr_13139_13175 = state_13099__$1;(statearr_13139_13175[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__6460__auto___13147,mults,ensure_mult,p))
;return ((function (switch__6445__auto__,c__6460__auto___13147,mults,ensure_mult,p){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13143[(0)] = state_machine__6446__auto__);
(statearr_13143[(1)] = (1));
return statearr_13143;
});
var state_machine__6446__auto____1 = (function (state_13099){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13144){if((e13144 instanceof Object))
{var ex__6449__auto__ = e13144;var statearr_13145_13176 = state_13099;(statearr_13145_13176[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13144;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13177 = state_13099;
state_13099 = G__13177;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___13147,mults,ensure_mult,p))
})();var state__6462__auto__ = (function (){var statearr_13146 = f__6461__auto__.call(null);(statearr_13146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___13147);
return statearr_13146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___13147,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6460__auto___13314 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13284){var state_val_13285 = (state_13284[(1)]);if((state_val_13285 === (7)))
{var state_13284__$1 = state_13284;var statearr_13286_13315 = state_13284__$1;(statearr_13286_13315[(2)] = null);
(statearr_13286_13315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (1)))
{var state_13284__$1 = state_13284;var statearr_13287_13316 = state_13284__$1;(statearr_13287_13316[(2)] = null);
(statearr_13287_13316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (4)))
{var inst_13248 = (state_13284[(7)]);var inst_13250 = (inst_13248 < cnt);var state_13284__$1 = state_13284;if(cljs.core.truth_(inst_13250))
{var statearr_13288_13317 = state_13284__$1;(statearr_13288_13317[(1)] = (6));
} else
{var statearr_13289_13318 = state_13284__$1;(statearr_13289_13318[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (15)))
{var inst_13280 = (state_13284[(2)]);var state_13284__$1 = state_13284;var statearr_13290_13319 = state_13284__$1;(statearr_13290_13319[(2)] = inst_13280);
(statearr_13290_13319[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (13)))
{var inst_13273 = cljs.core.async.close_BANG_.call(null,out);var state_13284__$1 = state_13284;var statearr_13291_13320 = state_13284__$1;(statearr_13291_13320[(2)] = inst_13273);
(statearr_13291_13320[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (6)))
{var state_13284__$1 = state_13284;var statearr_13292_13321 = state_13284__$1;(statearr_13292_13321[(2)] = null);
(statearr_13292_13321[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (3)))
{var inst_13282 = (state_13284[(2)]);var state_13284__$1 = state_13284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13284__$1,inst_13282);
} else
{if((state_val_13285 === (12)))
{var inst_13270 = (state_13284[(8)]);var inst_13270__$1 = (state_13284[(2)]);var inst_13271 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13270__$1);var state_13284__$1 = (function (){var statearr_13293 = state_13284;(statearr_13293[(8)] = inst_13270__$1);
return statearr_13293;
})();if(cljs.core.truth_(inst_13271))
{var statearr_13294_13322 = state_13284__$1;(statearr_13294_13322[(1)] = (13));
} else
{var statearr_13295_13323 = state_13284__$1;(statearr_13295_13323[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (2)))
{var inst_13247 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13248 = (0);var state_13284__$1 = (function (){var statearr_13296 = state_13284;(statearr_13296[(9)] = inst_13247);
(statearr_13296[(7)] = inst_13248);
return statearr_13296;
})();var statearr_13297_13324 = state_13284__$1;(statearr_13297_13324[(2)] = null);
(statearr_13297_13324[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (11)))
{var inst_13248 = (state_13284[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13284,(10),Object,null,(9));var inst_13257 = chs__$1.call(null,inst_13248);var inst_13258 = done.call(null,inst_13248);var inst_13259 = cljs.core.async.take_BANG_.call(null,inst_13257,inst_13258);var state_13284__$1 = state_13284;var statearr_13298_13325 = state_13284__$1;(statearr_13298_13325[(2)] = inst_13259);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13284__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (9)))
{var inst_13248 = (state_13284[(7)]);var inst_13261 = (state_13284[(2)]);var inst_13262 = (inst_13248 + (1));var inst_13248__$1 = inst_13262;var state_13284__$1 = (function (){var statearr_13299 = state_13284;(statearr_13299[(10)] = inst_13261);
(statearr_13299[(7)] = inst_13248__$1);
return statearr_13299;
})();var statearr_13300_13326 = state_13284__$1;(statearr_13300_13326[(2)] = null);
(statearr_13300_13326[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (5)))
{var inst_13268 = (state_13284[(2)]);var state_13284__$1 = (function (){var statearr_13301 = state_13284;(statearr_13301[(11)] = inst_13268);
return statearr_13301;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13284__$1,(12),dchan);
} else
{if((state_val_13285 === (14)))
{var inst_13270 = (state_13284[(8)]);var inst_13275 = cljs.core.apply.call(null,f,inst_13270);var state_13284__$1 = state_13284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13284__$1,(16),out,inst_13275);
} else
{if((state_val_13285 === (16)))
{var inst_13277 = (state_13284[(2)]);var state_13284__$1 = (function (){var statearr_13302 = state_13284;(statearr_13302[(12)] = inst_13277);
return statearr_13302;
})();var statearr_13303_13327 = state_13284__$1;(statearr_13303_13327[(2)] = null);
(statearr_13303_13327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (10)))
{var inst_13252 = (state_13284[(2)]);var inst_13253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13284__$1 = (function (){var statearr_13304 = state_13284;(statearr_13304[(13)] = inst_13252);
return statearr_13304;
})();var statearr_13305_13328 = state_13284__$1;(statearr_13305_13328[(2)] = inst_13253);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13284__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13285 === (8)))
{var inst_13266 = (state_13284[(2)]);var state_13284__$1 = state_13284;var statearr_13306_13329 = state_13284__$1;(statearr_13306_13329[(2)] = inst_13266);
(statearr_13306_13329[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6445__auto__,c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13310[(0)] = state_machine__6446__auto__);
(statearr_13310[(1)] = (1));
return statearr_13310;
});
var state_machine__6446__auto____1 = (function (state_13284){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13311){if((e13311 instanceof Object))
{var ex__6449__auto__ = e13311;var statearr_13312_13330 = state_13284;(statearr_13312_13330[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13331 = state_13284;
state_13284 = G__13331;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13284){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6462__auto__ = (function (){var statearr_13313 = f__6461__auto__.call(null);(statearr_13313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___13314);
return statearr_13313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___13314,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___13439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___13439,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___13439,out){
return (function (state_13415){var state_val_13416 = (state_13415[(1)]);if((state_val_13416 === (7)))
{var inst_13394 = (state_13415[(7)]);var inst_13395 = (state_13415[(8)]);var inst_13394__$1 = (state_13415[(2)]);var inst_13395__$1 = cljs.core.nth.call(null,inst_13394__$1,(0),null);var inst_13396 = cljs.core.nth.call(null,inst_13394__$1,(1),null);var inst_13397 = (inst_13395__$1 == null);var state_13415__$1 = (function (){var statearr_13417 = state_13415;(statearr_13417[(7)] = inst_13394__$1);
(statearr_13417[(8)] = inst_13395__$1);
(statearr_13417[(9)] = inst_13396);
return statearr_13417;
})();if(cljs.core.truth_(inst_13397))
{var statearr_13418_13440 = state_13415__$1;(statearr_13418_13440[(1)] = (8));
} else
{var statearr_13419_13441 = state_13415__$1;(statearr_13419_13441[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (1)))
{var inst_13386 = cljs.core.vec.call(null,chs);var inst_13387 = inst_13386;var state_13415__$1 = (function (){var statearr_13420 = state_13415;(statearr_13420[(10)] = inst_13387);
return statearr_13420;
})();var statearr_13421_13442 = state_13415__$1;(statearr_13421_13442[(2)] = null);
(statearr_13421_13442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (4)))
{var inst_13387 = (state_13415[(10)]);var state_13415__$1 = state_13415;return cljs.core.async.ioc_alts_BANG_.call(null,state_13415__$1,(7),inst_13387);
} else
{if((state_val_13416 === (6)))
{var inst_13411 = (state_13415[(2)]);var state_13415__$1 = state_13415;var statearr_13422_13443 = state_13415__$1;(statearr_13422_13443[(2)] = inst_13411);
(statearr_13422_13443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (3)))
{var inst_13413 = (state_13415[(2)]);var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13415__$1,inst_13413);
} else
{if((state_val_13416 === (2)))
{var inst_13387 = (state_13415[(10)]);var inst_13389 = cljs.core.count.call(null,inst_13387);var inst_13390 = (inst_13389 > (0));var state_13415__$1 = state_13415;if(cljs.core.truth_(inst_13390))
{var statearr_13424_13444 = state_13415__$1;(statearr_13424_13444[(1)] = (4));
} else
{var statearr_13425_13445 = state_13415__$1;(statearr_13425_13445[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (11)))
{var inst_13387 = (state_13415[(10)]);var inst_13404 = (state_13415[(2)]);var tmp13423 = inst_13387;var inst_13387__$1 = tmp13423;var state_13415__$1 = (function (){var statearr_13426 = state_13415;(statearr_13426[(10)] = inst_13387__$1);
(statearr_13426[(11)] = inst_13404);
return statearr_13426;
})();var statearr_13427_13446 = state_13415__$1;(statearr_13427_13446[(2)] = null);
(statearr_13427_13446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (9)))
{var inst_13395 = (state_13415[(8)]);var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13415__$1,(11),out,inst_13395);
} else
{if((state_val_13416 === (5)))
{var inst_13409 = cljs.core.async.close_BANG_.call(null,out);var state_13415__$1 = state_13415;var statearr_13428_13447 = state_13415__$1;(statearr_13428_13447[(2)] = inst_13409);
(statearr_13428_13447[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (10)))
{var inst_13407 = (state_13415[(2)]);var state_13415__$1 = state_13415;var statearr_13429_13448 = state_13415__$1;(statearr_13429_13448[(2)] = inst_13407);
(statearr_13429_13448[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13416 === (8)))
{var inst_13394 = (state_13415[(7)]);var inst_13387 = (state_13415[(10)]);var inst_13395 = (state_13415[(8)]);var inst_13396 = (state_13415[(9)]);var inst_13399 = (function (){var c = inst_13396;var v = inst_13395;var vec__13392 = inst_13394;var cs = inst_13387;return ((function (c,v,vec__13392,cs,inst_13394,inst_13387,inst_13395,inst_13396,state_val_13416,c__6460__auto___13439,out){
return (function (p1__13332_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13332_SHARP_);
});
;})(c,v,vec__13392,cs,inst_13394,inst_13387,inst_13395,inst_13396,state_val_13416,c__6460__auto___13439,out))
})();var inst_13400 = cljs.core.filterv.call(null,inst_13399,inst_13387);var inst_13387__$1 = inst_13400;var state_13415__$1 = (function (){var statearr_13430 = state_13415;(statearr_13430[(10)] = inst_13387__$1);
return statearr_13430;
})();var statearr_13431_13449 = state_13415__$1;(statearr_13431_13449[(2)] = null);
(statearr_13431_13449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__6460__auto___13439,out))
;return ((function (switch__6445__auto__,c__6460__auto___13439,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13435 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13435[(0)] = state_machine__6446__auto__);
(statearr_13435[(1)] = (1));
return statearr_13435;
});
var state_machine__6446__auto____1 = (function (state_13415){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13415);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13436){if((e13436 instanceof Object))
{var ex__6449__auto__ = e13436;var statearr_13437_13450 = state_13415;(statearr_13437_13450[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13436;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13451 = state_13415;
state_13415 = G__13451;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13415){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___13439,out))
})();var state__6462__auto__ = (function (){var statearr_13438 = f__6461__auto__.call(null);(statearr_13438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___13439);
return statearr_13438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___13439,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___13544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___13544,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___13544,out){
return (function (state_13521){var state_val_13522 = (state_13521[(1)]);if((state_val_13522 === (7)))
{var inst_13503 = (state_13521[(7)]);var inst_13503__$1 = (state_13521[(2)]);var inst_13504 = (inst_13503__$1 == null);var inst_13505 = cljs.core.not.call(null,inst_13504);var state_13521__$1 = (function (){var statearr_13523 = state_13521;(statearr_13523[(7)] = inst_13503__$1);
return statearr_13523;
})();if(inst_13505)
{var statearr_13524_13545 = state_13521__$1;(statearr_13524_13545[(1)] = (8));
} else
{var statearr_13525_13546 = state_13521__$1;(statearr_13525_13546[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (1)))
{var inst_13498 = (0);var state_13521__$1 = (function (){var statearr_13526 = state_13521;(statearr_13526[(8)] = inst_13498);
return statearr_13526;
})();var statearr_13527_13547 = state_13521__$1;(statearr_13527_13547[(2)] = null);
(statearr_13527_13547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (4)))
{var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13521__$1,(7),ch);
} else
{if((state_val_13522 === (6)))
{var inst_13516 = (state_13521[(2)]);var state_13521__$1 = state_13521;var statearr_13528_13548 = state_13521__$1;(statearr_13528_13548[(2)] = inst_13516);
(statearr_13528_13548[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (3)))
{var inst_13518 = (state_13521[(2)]);var inst_13519 = cljs.core.async.close_BANG_.call(null,out);var state_13521__$1 = (function (){var statearr_13529 = state_13521;(statearr_13529[(9)] = inst_13518);
return statearr_13529;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13521__$1,inst_13519);
} else
{if((state_val_13522 === (2)))
{var inst_13498 = (state_13521[(8)]);var inst_13500 = (inst_13498 < n);var state_13521__$1 = state_13521;if(cljs.core.truth_(inst_13500))
{var statearr_13530_13549 = state_13521__$1;(statearr_13530_13549[(1)] = (4));
} else
{var statearr_13531_13550 = state_13521__$1;(statearr_13531_13550[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (11)))
{var inst_13498 = (state_13521[(8)]);var inst_13508 = (state_13521[(2)]);var inst_13509 = (inst_13498 + (1));var inst_13498__$1 = inst_13509;var state_13521__$1 = (function (){var statearr_13532 = state_13521;(statearr_13532[(10)] = inst_13508);
(statearr_13532[(8)] = inst_13498__$1);
return statearr_13532;
})();var statearr_13533_13551 = state_13521__$1;(statearr_13533_13551[(2)] = null);
(statearr_13533_13551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (9)))
{var state_13521__$1 = state_13521;var statearr_13534_13552 = state_13521__$1;(statearr_13534_13552[(2)] = null);
(statearr_13534_13552[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (5)))
{var state_13521__$1 = state_13521;var statearr_13535_13553 = state_13521__$1;(statearr_13535_13553[(2)] = null);
(statearr_13535_13553[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (10)))
{var inst_13513 = (state_13521[(2)]);var state_13521__$1 = state_13521;var statearr_13536_13554 = state_13521__$1;(statearr_13536_13554[(2)] = inst_13513);
(statearr_13536_13554[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13522 === (8)))
{var inst_13503 = (state_13521[(7)]);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13521__$1,(11),out,inst_13503);
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
}
});})(c__6460__auto___13544,out))
;return ((function (switch__6445__auto__,c__6460__auto___13544,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13540 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13540[(0)] = state_machine__6446__auto__);
(statearr_13540[(1)] = (1));
return statearr_13540;
});
var state_machine__6446__auto____1 = (function (state_13521){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13541){if((e13541 instanceof Object))
{var ex__6449__auto__ = e13541;var statearr_13542_13555 = state_13521;(statearr_13542_13555[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13556 = state_13521;
state_13521 = G__13556;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13521){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___13544,out))
})();var state__6462__auto__ = (function (){var statearr_13543 = f__6461__auto__.call(null);(statearr_13543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___13544);
return statearr_13543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___13544,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13564 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13564 = (function (ch,f,map_LT_,meta13565){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13565 = meta13565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13564.cljs$lang$type = true;
cljs.core.async.t13564.cljs$lang$ctorStr = "cljs.core.async/t13564";
cljs.core.async.t13564.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13564");
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13567 = (function (fn1,_,meta13565,ch,f,map_LT_,meta13568){
this.fn1 = fn1;
this._ = _;
this.meta13565 = meta13565;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13568 = meta13568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13567.cljs$lang$type = true;
cljs.core.async.t13567.cljs$lang$ctorStr = "cljs.core.async/t13567";
cljs.core.async.t13567.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13567");
});})(___$1))
;
cljs.core.async.t13567.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13557_SHARP_){return f1.call(null,(((p1__13557_SHARP_ == null))?null:self__.f.call(null,p1__13557_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13569){var self__ = this;
var _13569__$1 = this;return self__.meta13568;
});})(___$1))
;
cljs.core.async.t13567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13569,meta13568__$1){var self__ = this;
var _13569__$1 = this;return (new cljs.core.async.t13567(self__.fn1,self__._,self__.meta13565,self__.ch,self__.f,self__.map_LT_,meta13568__$1));
});})(___$1))
;
cljs.core.async.__GT_t13567 = ((function (___$1){
return (function __GT_t13567(fn1__$1,___$2,meta13565__$1,ch__$2,f__$2,map_LT___$2,meta13568){return (new cljs.core.async.t13567(fn1__$1,___$2,meta13565__$1,ch__$2,f__$2,map_LT___$2,meta13568));
});})(___$1))
;
}
return (new cljs.core.async.t13567(fn1,___$1,self__.meta13565,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3614__auto__ = ret;if(cljs.core.truth_(and__3614__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3614__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13566){var self__ = this;
var _13566__$1 = this;return self__.meta13565;
});
cljs.core.async.t13564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13566,meta13565__$1){var self__ = this;
var _13566__$1 = this;return (new cljs.core.async.t13564(self__.ch,self__.f,self__.map_LT_,meta13565__$1));
});
cljs.core.async.__GT_t13564 = (function __GT_t13564(ch__$1,f__$1,map_LT___$1,meta13565){return (new cljs.core.async.t13564(ch__$1,f__$1,map_LT___$1,meta13565));
});
}
return (new cljs.core.async.t13564(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13573 = (function (ch,f,map_GT_,meta13574){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13574 = meta13574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13573.cljs$lang$type = true;
cljs.core.async.t13573.cljs$lang$ctorStr = "cljs.core.async/t13573";
cljs.core.async.t13573.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13573");
});
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13575){var self__ = this;
var _13575__$1 = this;return self__.meta13574;
});
cljs.core.async.t13573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13575,meta13574__$1){var self__ = this;
var _13575__$1 = this;return (new cljs.core.async.t13573(self__.ch,self__.f,self__.map_GT_,meta13574__$1));
});
cljs.core.async.__GT_t13573 = (function __GT_t13573(ch__$1,f__$1,map_GT___$1,meta13574){return (new cljs.core.async.t13573(ch__$1,f__$1,map_GT___$1,meta13574));
});
}
return (new cljs.core.async.t13573(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13579 = (function (ch,p,filter_GT_,meta13580){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13580 = meta13580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13579.cljs$lang$type = true;
cljs.core.async.t13579.cljs$lang$ctorStr = "cljs.core.async/t13579";
cljs.core.async.t13579.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13579");
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13581){var self__ = this;
var _13581__$1 = this;return self__.meta13580;
});
cljs.core.async.t13579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13581,meta13580__$1){var self__ = this;
var _13581__$1 = this;return (new cljs.core.async.t13579(self__.ch,self__.p,self__.filter_GT_,meta13580__$1));
});
cljs.core.async.__GT_t13579 = (function __GT_t13579(ch__$1,p__$1,filter_GT___$1,meta13580){return (new cljs.core.async.t13579(ch__$1,p__$1,filter_GT___$1,meta13580));
});
}
return (new cljs.core.async.t13579(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___13664 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___13664,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___13664,out){
return (function (state_13643){var state_val_13644 = (state_13643[(1)]);if((state_val_13644 === (7)))
{var inst_13639 = (state_13643[(2)]);var state_13643__$1 = state_13643;var statearr_13645_13665 = state_13643__$1;(statearr_13645_13665[(2)] = inst_13639);
(statearr_13645_13665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (1)))
{var state_13643__$1 = state_13643;var statearr_13646_13666 = state_13643__$1;(statearr_13646_13666[(2)] = null);
(statearr_13646_13666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (4)))
{var inst_13625 = (state_13643[(7)]);var inst_13625__$1 = (state_13643[(2)]);var inst_13626 = (inst_13625__$1 == null);var state_13643__$1 = (function (){var statearr_13647 = state_13643;(statearr_13647[(7)] = inst_13625__$1);
return statearr_13647;
})();if(cljs.core.truth_(inst_13626))
{var statearr_13648_13667 = state_13643__$1;(statearr_13648_13667[(1)] = (5));
} else
{var statearr_13649_13668 = state_13643__$1;(statearr_13649_13668[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (6)))
{var inst_13625 = (state_13643[(7)]);var inst_13630 = p.call(null,inst_13625);var state_13643__$1 = state_13643;if(cljs.core.truth_(inst_13630))
{var statearr_13650_13669 = state_13643__$1;(statearr_13650_13669[(1)] = (8));
} else
{var statearr_13651_13670 = state_13643__$1;(statearr_13651_13670[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (3)))
{var inst_13641 = (state_13643[(2)]);var state_13643__$1 = state_13643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13643__$1,inst_13641);
} else
{if((state_val_13644 === (2)))
{var state_13643__$1 = state_13643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13643__$1,(4),ch);
} else
{if((state_val_13644 === (11)))
{var inst_13633 = (state_13643[(2)]);var state_13643__$1 = state_13643;var statearr_13652_13671 = state_13643__$1;(statearr_13652_13671[(2)] = inst_13633);
(statearr_13652_13671[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (9)))
{var state_13643__$1 = state_13643;var statearr_13653_13672 = state_13643__$1;(statearr_13653_13672[(2)] = null);
(statearr_13653_13672[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (5)))
{var inst_13628 = cljs.core.async.close_BANG_.call(null,out);var state_13643__$1 = state_13643;var statearr_13654_13673 = state_13643__$1;(statearr_13654_13673[(2)] = inst_13628);
(statearr_13654_13673[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (10)))
{var inst_13636 = (state_13643[(2)]);var state_13643__$1 = (function (){var statearr_13655 = state_13643;(statearr_13655[(8)] = inst_13636);
return statearr_13655;
})();var statearr_13656_13674 = state_13643__$1;(statearr_13656_13674[(2)] = null);
(statearr_13656_13674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13644 === (8)))
{var inst_13625 = (state_13643[(7)]);var state_13643__$1 = state_13643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13643__$1,(11),out,inst_13625);
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
}
});})(c__6460__auto___13664,out))
;return ((function (switch__6445__auto__,c__6460__auto___13664,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13660 = [null,null,null,null,null,null,null,null,null];(statearr_13660[(0)] = state_machine__6446__auto__);
(statearr_13660[(1)] = (1));
return statearr_13660;
});
var state_machine__6446__auto____1 = (function (state_13643){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13643);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13661){if((e13661 instanceof Object))
{var ex__6449__auto__ = e13661;var statearr_13662_13675 = state_13643;(statearr_13662_13675[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13643);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13676 = state_13643;
state_13643 = G__13676;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13643){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___13664,out))
})();var state__6462__auto__ = (function (){var statearr_13663 = f__6461__auto__.call(null);(statearr_13663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___13664);
return statearr_13663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___13664,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6460__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto__){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto__){
return (function (state_13842){var state_val_13843 = (state_13842[(1)]);if((state_val_13843 === (7)))
{var inst_13838 = (state_13842[(2)]);var state_13842__$1 = state_13842;var statearr_13844_13885 = state_13842__$1;(statearr_13844_13885[(2)] = inst_13838);
(statearr_13844_13885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (20)))
{var inst_13808 = (state_13842[(7)]);var inst_13819 = (state_13842[(2)]);var inst_13820 = cljs.core.next.call(null,inst_13808);var inst_13794 = inst_13820;var inst_13795 = null;var inst_13796 = (0);var inst_13797 = (0);var state_13842__$1 = (function (){var statearr_13845 = state_13842;(statearr_13845[(8)] = inst_13797);
(statearr_13845[(9)] = inst_13794);
(statearr_13845[(10)] = inst_13795);
(statearr_13845[(11)] = inst_13819);
(statearr_13845[(12)] = inst_13796);
return statearr_13845;
})();var statearr_13846_13886 = state_13842__$1;(statearr_13846_13886[(2)] = null);
(statearr_13846_13886[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (1)))
{var state_13842__$1 = state_13842;var statearr_13847_13887 = state_13842__$1;(statearr_13847_13887[(2)] = null);
(statearr_13847_13887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (4)))
{var inst_13783 = (state_13842[(13)]);var inst_13783__$1 = (state_13842[(2)]);var inst_13784 = (inst_13783__$1 == null);var state_13842__$1 = (function (){var statearr_13848 = state_13842;(statearr_13848[(13)] = inst_13783__$1);
return statearr_13848;
})();if(cljs.core.truth_(inst_13784))
{var statearr_13849_13888 = state_13842__$1;(statearr_13849_13888[(1)] = (5));
} else
{var statearr_13850_13889 = state_13842__$1;(statearr_13850_13889[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (15)))
{var state_13842__$1 = state_13842;var statearr_13854_13890 = state_13842__$1;(statearr_13854_13890[(2)] = null);
(statearr_13854_13890[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (21)))
{var state_13842__$1 = state_13842;var statearr_13855_13891 = state_13842__$1;(statearr_13855_13891[(2)] = null);
(statearr_13855_13891[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (13)))
{var inst_13797 = (state_13842[(8)]);var inst_13794 = (state_13842[(9)]);var inst_13795 = (state_13842[(10)]);var inst_13796 = (state_13842[(12)]);var inst_13804 = (state_13842[(2)]);var inst_13805 = (inst_13797 + (1));var tmp13851 = inst_13794;var tmp13852 = inst_13795;var tmp13853 = inst_13796;var inst_13794__$1 = tmp13851;var inst_13795__$1 = tmp13852;var inst_13796__$1 = tmp13853;var inst_13797__$1 = inst_13805;var state_13842__$1 = (function (){var statearr_13856 = state_13842;(statearr_13856[(8)] = inst_13797__$1);
(statearr_13856[(9)] = inst_13794__$1);
(statearr_13856[(10)] = inst_13795__$1);
(statearr_13856[(14)] = inst_13804);
(statearr_13856[(12)] = inst_13796__$1);
return statearr_13856;
})();var statearr_13857_13892 = state_13842__$1;(statearr_13857_13892[(2)] = null);
(statearr_13857_13892[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (22)))
{var state_13842__$1 = state_13842;var statearr_13858_13893 = state_13842__$1;(statearr_13858_13893[(2)] = null);
(statearr_13858_13893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (6)))
{var inst_13783 = (state_13842[(13)]);var inst_13792 = f.call(null,inst_13783);var inst_13793 = cljs.core.seq.call(null,inst_13792);var inst_13794 = inst_13793;var inst_13795 = null;var inst_13796 = (0);var inst_13797 = (0);var state_13842__$1 = (function (){var statearr_13859 = state_13842;(statearr_13859[(8)] = inst_13797);
(statearr_13859[(9)] = inst_13794);
(statearr_13859[(10)] = inst_13795);
(statearr_13859[(12)] = inst_13796);
return statearr_13859;
})();var statearr_13860_13894 = state_13842__$1;(statearr_13860_13894[(2)] = null);
(statearr_13860_13894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (17)))
{var inst_13808 = (state_13842[(7)]);var inst_13812 = cljs.core.chunk_first.call(null,inst_13808);var inst_13813 = cljs.core.chunk_rest.call(null,inst_13808);var inst_13814 = cljs.core.count.call(null,inst_13812);var inst_13794 = inst_13813;var inst_13795 = inst_13812;var inst_13796 = inst_13814;var inst_13797 = (0);var state_13842__$1 = (function (){var statearr_13861 = state_13842;(statearr_13861[(8)] = inst_13797);
(statearr_13861[(9)] = inst_13794);
(statearr_13861[(10)] = inst_13795);
(statearr_13861[(12)] = inst_13796);
return statearr_13861;
})();var statearr_13862_13895 = state_13842__$1;(statearr_13862_13895[(2)] = null);
(statearr_13862_13895[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (3)))
{var inst_13840 = (state_13842[(2)]);var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13842__$1,inst_13840);
} else
{if((state_val_13843 === (12)))
{var inst_13828 = (state_13842[(2)]);var state_13842__$1 = state_13842;var statearr_13863_13896 = state_13842__$1;(statearr_13863_13896[(2)] = inst_13828);
(statearr_13863_13896[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (2)))
{var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13842__$1,(4),in$);
} else
{if((state_val_13843 === (23)))
{var inst_13836 = (state_13842[(2)]);var state_13842__$1 = state_13842;var statearr_13864_13897 = state_13842__$1;(statearr_13864_13897[(2)] = inst_13836);
(statearr_13864_13897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (19)))
{var inst_13823 = (state_13842[(2)]);var state_13842__$1 = state_13842;var statearr_13865_13898 = state_13842__$1;(statearr_13865_13898[(2)] = inst_13823);
(statearr_13865_13898[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (11)))
{var inst_13794 = (state_13842[(9)]);var inst_13808 = (state_13842[(7)]);var inst_13808__$1 = cljs.core.seq.call(null,inst_13794);var state_13842__$1 = (function (){var statearr_13866 = state_13842;(statearr_13866[(7)] = inst_13808__$1);
return statearr_13866;
})();if(inst_13808__$1)
{var statearr_13867_13899 = state_13842__$1;(statearr_13867_13899[(1)] = (14));
} else
{var statearr_13868_13900 = state_13842__$1;(statearr_13868_13900[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (9)))
{var inst_13830 = (state_13842[(2)]);var inst_13831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13842__$1 = (function (){var statearr_13869 = state_13842;(statearr_13869[(15)] = inst_13830);
return statearr_13869;
})();if(cljs.core.truth_(inst_13831))
{var statearr_13870_13901 = state_13842__$1;(statearr_13870_13901[(1)] = (21));
} else
{var statearr_13871_13902 = state_13842__$1;(statearr_13871_13902[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (5)))
{var inst_13786 = cljs.core.async.close_BANG_.call(null,out);var state_13842__$1 = state_13842;var statearr_13872_13903 = state_13842__$1;(statearr_13872_13903[(2)] = inst_13786);
(statearr_13872_13903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (14)))
{var inst_13808 = (state_13842[(7)]);var inst_13810 = cljs.core.chunked_seq_QMARK_.call(null,inst_13808);var state_13842__$1 = state_13842;if(inst_13810)
{var statearr_13873_13904 = state_13842__$1;(statearr_13873_13904[(1)] = (17));
} else
{var statearr_13874_13905 = state_13842__$1;(statearr_13874_13905[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (16)))
{var inst_13826 = (state_13842[(2)]);var state_13842__$1 = state_13842;var statearr_13875_13906 = state_13842__$1;(statearr_13875_13906[(2)] = inst_13826);
(statearr_13875_13906[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13843 === (10)))
{var inst_13797 = (state_13842[(8)]);var inst_13795 = (state_13842[(10)]);var inst_13802 = cljs.core._nth.call(null,inst_13795,inst_13797);var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13842__$1,(13),out,inst_13802);
} else
{if((state_val_13843 === (18)))
{var inst_13808 = (state_13842[(7)]);var inst_13817 = cljs.core.first.call(null,inst_13808);var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13842__$1,(20),out,inst_13817);
} else
{if((state_val_13843 === (8)))
{var inst_13797 = (state_13842[(8)]);var inst_13796 = (state_13842[(12)]);var inst_13799 = (inst_13797 < inst_13796);var inst_13800 = inst_13799;var state_13842__$1 = state_13842;if(cljs.core.truth_(inst_13800))
{var statearr_13876_13907 = state_13842__$1;(statearr_13876_13907[(1)] = (10));
} else
{var statearr_13877_13908 = state_13842__$1;(statearr_13877_13908[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__6460__auto__))
;return ((function (switch__6445__auto__,c__6460__auto__){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_13881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13881[(0)] = state_machine__6446__auto__);
(statearr_13881[(1)] = (1));
return statearr_13881;
});
var state_machine__6446__auto____1 = (function (state_13842){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e13882){if((e13882 instanceof Object))
{var ex__6449__auto__ = e13882;var statearr_13883_13909 = state_13842;(statearr_13883_13909[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13910 = state_13842;
state_13842 = G__13910;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13842){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto__))
})();var state__6462__auto__ = (function (){var statearr_13884 = f__6461__auto__.call(null);(statearr_13884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto__);
return statearr_13884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto__))
);
return c__6460__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___14007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___14007,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___14007,out){
return (function (state_13982){var state_val_13983 = (state_13982[(1)]);if((state_val_13983 === (7)))
{var inst_13977 = (state_13982[(2)]);var state_13982__$1 = state_13982;var statearr_13984_14008 = state_13982__$1;(statearr_13984_14008[(2)] = inst_13977);
(statearr_13984_14008[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (1)))
{var inst_13959 = null;var state_13982__$1 = (function (){var statearr_13985 = state_13982;(statearr_13985[(7)] = inst_13959);
return statearr_13985;
})();var statearr_13986_14009 = state_13982__$1;(statearr_13986_14009[(2)] = null);
(statearr_13986_14009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (4)))
{var inst_13962 = (state_13982[(8)]);var inst_13962__$1 = (state_13982[(2)]);var inst_13963 = (inst_13962__$1 == null);var inst_13964 = cljs.core.not.call(null,inst_13963);var state_13982__$1 = (function (){var statearr_13987 = state_13982;(statearr_13987[(8)] = inst_13962__$1);
return statearr_13987;
})();if(inst_13964)
{var statearr_13988_14010 = state_13982__$1;(statearr_13988_14010[(1)] = (5));
} else
{var statearr_13989_14011 = state_13982__$1;(statearr_13989_14011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (6)))
{var state_13982__$1 = state_13982;var statearr_13990_14012 = state_13982__$1;(statearr_13990_14012[(2)] = null);
(statearr_13990_14012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (3)))
{var inst_13979 = (state_13982[(2)]);var inst_13980 = cljs.core.async.close_BANG_.call(null,out);var state_13982__$1 = (function (){var statearr_13991 = state_13982;(statearr_13991[(9)] = inst_13979);
return statearr_13991;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13982__$1,inst_13980);
} else
{if((state_val_13983 === (2)))
{var state_13982__$1 = state_13982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13982__$1,(4),ch);
} else
{if((state_val_13983 === (11)))
{var inst_13962 = (state_13982[(8)]);var inst_13971 = (state_13982[(2)]);var inst_13959 = inst_13962;var state_13982__$1 = (function (){var statearr_13992 = state_13982;(statearr_13992[(7)] = inst_13959);
(statearr_13992[(10)] = inst_13971);
return statearr_13992;
})();var statearr_13993_14013 = state_13982__$1;(statearr_13993_14013[(2)] = null);
(statearr_13993_14013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (9)))
{var inst_13962 = (state_13982[(8)]);var state_13982__$1 = state_13982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13982__$1,(11),out,inst_13962);
} else
{if((state_val_13983 === (5)))
{var inst_13962 = (state_13982[(8)]);var inst_13959 = (state_13982[(7)]);var inst_13966 = cljs.core._EQ_.call(null,inst_13962,inst_13959);var state_13982__$1 = state_13982;if(inst_13966)
{var statearr_13995_14014 = state_13982__$1;(statearr_13995_14014[(1)] = (8));
} else
{var statearr_13996_14015 = state_13982__$1;(statearr_13996_14015[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (10)))
{var inst_13974 = (state_13982[(2)]);var state_13982__$1 = state_13982;var statearr_13997_14016 = state_13982__$1;(statearr_13997_14016[(2)] = inst_13974);
(statearr_13997_14016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (8)))
{var inst_13959 = (state_13982[(7)]);var tmp13994 = inst_13959;var inst_13959__$1 = tmp13994;var state_13982__$1 = (function (){var statearr_13998 = state_13982;(statearr_13998[(7)] = inst_13959__$1);
return statearr_13998;
})();var statearr_13999_14017 = state_13982__$1;(statearr_13999_14017[(2)] = null);
(statearr_13999_14017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__6460__auto___14007,out))
;return ((function (switch__6445__auto__,c__6460__auto___14007,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_14003 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14003[(0)] = state_machine__6446__auto__);
(statearr_14003[(1)] = (1));
return statearr_14003;
});
var state_machine__6446__auto____1 = (function (state_13982){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_13982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e14004){if((e14004 instanceof Object))
{var ex__6449__auto__ = e14004;var statearr_14005_14018 = state_13982;(statearr_14005_14018[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14019 = state_13982;
state_13982 = G__14019;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_13982){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_13982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___14007,out))
})();var state__6462__auto__ = (function (){var statearr_14006 = f__6461__auto__.call(null);(statearr_14006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___14007);
return statearr_14006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___14007,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___14154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___14154,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___14154,out){
return (function (state_14124){var state_val_14125 = (state_14124[(1)]);if((state_val_14125 === (7)))
{var inst_14120 = (state_14124[(2)]);var state_14124__$1 = state_14124;var statearr_14126_14155 = state_14124__$1;(statearr_14126_14155[(2)] = inst_14120);
(statearr_14126_14155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (1)))
{var inst_14087 = (new Array(n));var inst_14088 = inst_14087;var inst_14089 = (0);var state_14124__$1 = (function (){var statearr_14127 = state_14124;(statearr_14127[(7)] = inst_14088);
(statearr_14127[(8)] = inst_14089);
return statearr_14127;
})();var statearr_14128_14156 = state_14124__$1;(statearr_14128_14156[(2)] = null);
(statearr_14128_14156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (4)))
{var inst_14092 = (state_14124[(9)]);var inst_14092__$1 = (state_14124[(2)]);var inst_14093 = (inst_14092__$1 == null);var inst_14094 = cljs.core.not.call(null,inst_14093);var state_14124__$1 = (function (){var statearr_14129 = state_14124;(statearr_14129[(9)] = inst_14092__$1);
return statearr_14129;
})();if(inst_14094)
{var statearr_14130_14157 = state_14124__$1;(statearr_14130_14157[(1)] = (5));
} else
{var statearr_14131_14158 = state_14124__$1;(statearr_14131_14158[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (15)))
{var inst_14114 = (state_14124[(2)]);var state_14124__$1 = state_14124;var statearr_14132_14159 = state_14124__$1;(statearr_14132_14159[(2)] = inst_14114);
(statearr_14132_14159[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (13)))
{var state_14124__$1 = state_14124;var statearr_14133_14160 = state_14124__$1;(statearr_14133_14160[(2)] = null);
(statearr_14133_14160[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (6)))
{var inst_14089 = (state_14124[(8)]);var inst_14110 = (inst_14089 > (0));var state_14124__$1 = state_14124;if(cljs.core.truth_(inst_14110))
{var statearr_14134_14161 = state_14124__$1;(statearr_14134_14161[(1)] = (12));
} else
{var statearr_14135_14162 = state_14124__$1;(statearr_14135_14162[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (3)))
{var inst_14122 = (state_14124[(2)]);var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14124__$1,inst_14122);
} else
{if((state_val_14125 === (12)))
{var inst_14088 = (state_14124[(7)]);var inst_14112 = cljs.core.vec.call(null,inst_14088);var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14124__$1,(15),out,inst_14112);
} else
{if((state_val_14125 === (2)))
{var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14124__$1,(4),ch);
} else
{if((state_val_14125 === (11)))
{var inst_14104 = (state_14124[(2)]);var inst_14105 = (new Array(n));var inst_14088 = inst_14105;var inst_14089 = (0);var state_14124__$1 = (function (){var statearr_14136 = state_14124;(statearr_14136[(10)] = inst_14104);
(statearr_14136[(7)] = inst_14088);
(statearr_14136[(8)] = inst_14089);
return statearr_14136;
})();var statearr_14137_14163 = state_14124__$1;(statearr_14137_14163[(2)] = null);
(statearr_14137_14163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (9)))
{var inst_14088 = (state_14124[(7)]);var inst_14102 = cljs.core.vec.call(null,inst_14088);var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14124__$1,(11),out,inst_14102);
} else
{if((state_val_14125 === (5)))
{var inst_14088 = (state_14124[(7)]);var inst_14089 = (state_14124[(8)]);var inst_14092 = (state_14124[(9)]);var inst_14097 = (state_14124[(11)]);var inst_14096 = (inst_14088[inst_14089] = inst_14092);var inst_14097__$1 = (inst_14089 + (1));var inst_14098 = (inst_14097__$1 < n);var state_14124__$1 = (function (){var statearr_14138 = state_14124;(statearr_14138[(12)] = inst_14096);
(statearr_14138[(11)] = inst_14097__$1);
return statearr_14138;
})();if(cljs.core.truth_(inst_14098))
{var statearr_14139_14164 = state_14124__$1;(statearr_14139_14164[(1)] = (8));
} else
{var statearr_14140_14165 = state_14124__$1;(statearr_14140_14165[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (14)))
{var inst_14117 = (state_14124[(2)]);var inst_14118 = cljs.core.async.close_BANG_.call(null,out);var state_14124__$1 = (function (){var statearr_14142 = state_14124;(statearr_14142[(13)] = inst_14117);
return statearr_14142;
})();var statearr_14143_14166 = state_14124__$1;(statearr_14143_14166[(2)] = inst_14118);
(statearr_14143_14166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (10)))
{var inst_14108 = (state_14124[(2)]);var state_14124__$1 = state_14124;var statearr_14144_14167 = state_14124__$1;(statearr_14144_14167[(2)] = inst_14108);
(statearr_14144_14167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14125 === (8)))
{var inst_14088 = (state_14124[(7)]);var inst_14097 = (state_14124[(11)]);var tmp14141 = inst_14088;var inst_14088__$1 = tmp14141;var inst_14089 = inst_14097;var state_14124__$1 = (function (){var statearr_14145 = state_14124;(statearr_14145[(7)] = inst_14088__$1);
(statearr_14145[(8)] = inst_14089);
return statearr_14145;
})();var statearr_14146_14168 = state_14124__$1;(statearr_14146_14168[(2)] = null);
(statearr_14146_14168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__6460__auto___14154,out))
;return ((function (switch__6445__auto__,c__6460__auto___14154,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_14150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14150[(0)] = state_machine__6446__auto__);
(statearr_14150[(1)] = (1));
return statearr_14150;
});
var state_machine__6446__auto____1 = (function (state_14124){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_14124);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e14151){if((e14151 instanceof Object))
{var ex__6449__auto__ = e14151;var statearr_14152_14169 = state_14124;(statearr_14152_14169[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14151;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14170 = state_14124;
state_14124 = G__14170;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_14124){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_14124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___14154,out))
})();var state__6462__auto__ = (function (){var statearr_14153 = f__6461__auto__.call(null);(statearr_14153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___14154);
return statearr_14153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___14154,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6460__auto___14313 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6460__auto___14313,out){
return (function (){var f__6461__auto__ = (function (){var switch__6445__auto__ = ((function (c__6460__auto___14313,out){
return (function (state_14283){var state_val_14284 = (state_14283[(1)]);if((state_val_14284 === (7)))
{var inst_14279 = (state_14283[(2)]);var state_14283__$1 = state_14283;var statearr_14285_14314 = state_14283__$1;(statearr_14285_14314[(2)] = inst_14279);
(statearr_14285_14314[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (1)))
{var inst_14242 = [];var inst_14243 = inst_14242;var inst_14244 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14283__$1 = (function (){var statearr_14286 = state_14283;(statearr_14286[(7)] = inst_14244);
(statearr_14286[(8)] = inst_14243);
return statearr_14286;
})();var statearr_14287_14315 = state_14283__$1;(statearr_14287_14315[(2)] = null);
(statearr_14287_14315[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (4)))
{var inst_14247 = (state_14283[(9)]);var inst_14247__$1 = (state_14283[(2)]);var inst_14248 = (inst_14247__$1 == null);var inst_14249 = cljs.core.not.call(null,inst_14248);var state_14283__$1 = (function (){var statearr_14288 = state_14283;(statearr_14288[(9)] = inst_14247__$1);
return statearr_14288;
})();if(inst_14249)
{var statearr_14289_14316 = state_14283__$1;(statearr_14289_14316[(1)] = (5));
} else
{var statearr_14290_14317 = state_14283__$1;(statearr_14290_14317[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (15)))
{var inst_14273 = (state_14283[(2)]);var state_14283__$1 = state_14283;var statearr_14291_14318 = state_14283__$1;(statearr_14291_14318[(2)] = inst_14273);
(statearr_14291_14318[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (13)))
{var state_14283__$1 = state_14283;var statearr_14292_14319 = state_14283__$1;(statearr_14292_14319[(2)] = null);
(statearr_14292_14319[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (6)))
{var inst_14243 = (state_14283[(8)]);var inst_14268 = inst_14243.length;var inst_14269 = (inst_14268 > (0));var state_14283__$1 = state_14283;if(cljs.core.truth_(inst_14269))
{var statearr_14293_14320 = state_14283__$1;(statearr_14293_14320[(1)] = (12));
} else
{var statearr_14294_14321 = state_14283__$1;(statearr_14294_14321[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (3)))
{var inst_14281 = (state_14283[(2)]);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14283__$1,inst_14281);
} else
{if((state_val_14284 === (12)))
{var inst_14243 = (state_14283[(8)]);var inst_14271 = cljs.core.vec.call(null,inst_14243);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(15),out,inst_14271);
} else
{if((state_val_14284 === (2)))
{var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14283__$1,(4),ch);
} else
{if((state_val_14284 === (11)))
{var inst_14247 = (state_14283[(9)]);var inst_14251 = (state_14283[(10)]);var inst_14261 = (state_14283[(2)]);var inst_14262 = [];var inst_14263 = inst_14262.push(inst_14247);var inst_14243 = inst_14262;var inst_14244 = inst_14251;var state_14283__$1 = (function (){var statearr_14295 = state_14283;(statearr_14295[(7)] = inst_14244);
(statearr_14295[(11)] = inst_14263);
(statearr_14295[(12)] = inst_14261);
(statearr_14295[(8)] = inst_14243);
return statearr_14295;
})();var statearr_14296_14322 = state_14283__$1;(statearr_14296_14322[(2)] = null);
(statearr_14296_14322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (9)))
{var inst_14243 = (state_14283[(8)]);var inst_14259 = cljs.core.vec.call(null,inst_14243);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(11),out,inst_14259);
} else
{if((state_val_14284 === (5)))
{var inst_14244 = (state_14283[(7)]);var inst_14247 = (state_14283[(9)]);var inst_14251 = (state_14283[(10)]);var inst_14251__$1 = f.call(null,inst_14247);var inst_14252 = cljs.core._EQ_.call(null,inst_14251__$1,inst_14244);var inst_14253 = cljs.core.keyword_identical_QMARK_.call(null,inst_14244,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14254 = (inst_14252) || (inst_14253);var state_14283__$1 = (function (){var statearr_14297 = state_14283;(statearr_14297[(10)] = inst_14251__$1);
return statearr_14297;
})();if(cljs.core.truth_(inst_14254))
{var statearr_14298_14323 = state_14283__$1;(statearr_14298_14323[(1)] = (8));
} else
{var statearr_14299_14324 = state_14283__$1;(statearr_14299_14324[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (14)))
{var inst_14276 = (state_14283[(2)]);var inst_14277 = cljs.core.async.close_BANG_.call(null,out);var state_14283__$1 = (function (){var statearr_14301 = state_14283;(statearr_14301[(13)] = inst_14276);
return statearr_14301;
})();var statearr_14302_14325 = state_14283__$1;(statearr_14302_14325[(2)] = inst_14277);
(statearr_14302_14325[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (10)))
{var inst_14266 = (state_14283[(2)]);var state_14283__$1 = state_14283;var statearr_14303_14326 = state_14283__$1;(statearr_14303_14326[(2)] = inst_14266);
(statearr_14303_14326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (8)))
{var inst_14247 = (state_14283[(9)]);var inst_14251 = (state_14283[(10)]);var inst_14243 = (state_14283[(8)]);var inst_14256 = inst_14243.push(inst_14247);var tmp14300 = inst_14243;var inst_14243__$1 = tmp14300;var inst_14244 = inst_14251;var state_14283__$1 = (function (){var statearr_14304 = state_14283;(statearr_14304[(7)] = inst_14244);
(statearr_14304[(14)] = inst_14256);
(statearr_14304[(8)] = inst_14243__$1);
return statearr_14304;
})();var statearr_14305_14327 = state_14283__$1;(statearr_14305_14327[(2)] = null);
(statearr_14305_14327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__6460__auto___14313,out))
;return ((function (switch__6445__auto__,c__6460__auto___14313,out){
return (function() {
var state_machine__6446__auto__ = null;
var state_machine__6446__auto____0 = (function (){var statearr_14309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14309[(0)] = state_machine__6446__auto__);
(statearr_14309[(1)] = (1));
return statearr_14309;
});
var state_machine__6446__auto____1 = (function (state_14283){while(true){
var ret_value__6447__auto__ = (function (){try{while(true){
var result__6448__auto__ = switch__6445__auto__.call(null,state_14283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6448__auto__;
}
break;
}
}catch (e14310){if((e14310 instanceof Object))
{var ex__6449__auto__ = e14310;var statearr_14311_14328 = state_14283;(statearr_14311_14328[(5)] = ex__6449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14310;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14329 = state_14283;
state_14283 = G__14329;
continue;
}
} else
{return ret_value__6447__auto__;
}
break;
}
});
state_machine__6446__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return state_machine__6446__auto____0.call(this);
case 1:
return state_machine__6446__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6446__auto____0;
state_machine__6446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6446__auto____1;
return state_machine__6446__auto__;
})()
;})(switch__6445__auto__,c__6460__auto___14313,out))
})();var state__6462__auto__ = (function (){var statearr_14312 = f__6461__auto__.call(null);(statearr_14312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6460__auto___14313);
return statearr_14312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6462__auto__);
});})(c__6460__auto___14313,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
