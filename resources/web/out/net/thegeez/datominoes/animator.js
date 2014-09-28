// Compiled by ClojureScript 0.0-2342
goog.provide('net.thegeez.datominoes.animator');
goog.require('cljs.core');
goog.require('net.thegeez.datominoes.dom_helpers');
goog.require('net.thegeez.datominoes.dom_helpers');
net.thegeez.datominoes.animator.EL = (0);
net.thegeez.datominoes.animator.BEGIN = (1);
net.thegeez.datominoes.animator.DRAW = (2);
net.thegeez.datominoes.animator.TO = (3);
net.thegeez.datominoes.animator.STEP = (4);
net.thegeez.datominoes.animator.STEPS = (5);
net.thegeez.datominoes.animator.DX = (6);
net.thegeez.datominoes.animator.DY = (7);
net.thegeez.datominoes.animator.FINISH = (8);
net.thegeez.datominoes.animator.FIELD_COUNT = cljs.core.count.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [net.thegeez.datominoes.animator.EL,net.thegeez.datominoes.animator.BEGIN,net.thegeez.datominoes.animator.DRAW,net.thegeez.datominoes.animator.TO,net.thegeez.datominoes.animator.STEP,net.thegeez.datominoes.animator.STEPS,net.thegeez.datominoes.animator.DX,net.thegeez.datominoes.animator.DY,net.thegeez.datominoes.animator.FINISH], null));
net.thegeez.datominoes.animator.a = (new Array((((52) * net.thegeez.datominoes.animator.FIELD_COUNT) + (1))));
net.thegeez.datominoes.animator.DO_DRAW = (net.thegeez.datominoes.animator.a.length - (1));
net.thegeez.datominoes.animator.running = cljs.core.atom.call(null,false);
net.thegeez.datominoes.animator.anim_loop = (function anim_loop(){(net.thegeez.datominoes.animator.a[net.thegeez.datominoes.animator.DO_DRAW] = (0));
var n__4495__auto___5098 = (52);var stone_idx_5099 = (0);while(true){
if((stone_idx_5099 < n__4495__auto___5098))
{var i_5100 = (stone_idx_5099 * net.thegeez.datominoes.animator.FIELD_COUNT);if(cljs.core.truth_((net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.DRAW)])))
{(net.thegeez.datominoes.animator.a[net.thegeez.datominoes.animator.DO_DRAW] = (1));
var el_5101 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.EL)]);var vec__5096_5102 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.BEGIN)]);var start_x_5103 = cljs.core.nth.call(null,vec__5096_5102,(0),null);var start_y_5104 = cljs.core.nth.call(null,vec__5096_5102,(1),null);var vec__5097_5105 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.TO)]);var x_5106 = cljs.core.nth.call(null,vec__5097_5105,(0),null);var y_5107 = cljs.core.nth.call(null,vec__5097_5105,(1),null);var to_5108 = vec__5097_5105;var step_5109 = ((net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.STEP)]) - (1));var dx_5110 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.DX)]);var dy_5111 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.DY)]);var steps_5112 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.STEPS)]);var nx_5113 = cljs.core.long$.call(null,(start_x_5103 + ((steps_5112 - step_5109) * dx_5110)));var ny_5114 = cljs.core.long$.call(null,(start_y_5104 + ((steps_5112 - step_5109) * dy_5111)));net.thegeez.datominoes.dom_helpers.set_position.call(null,el_5101,nx_5113,ny_5114);
(net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.STEP)] = step_5109);
if(((cljs.core._EQ_.call(null,x_5106,nx_5113)) && (cljs.core._EQ_.call(null,y_5107,ny_5114))) || ((step_5109 === (0))) || (((dx_5110 === (0))) && ((dy_5111 === (0)))))
{(net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.STEP)] = (0));
(net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.DRAW)] = false);
var finish_5115 = (net.thegeez.datominoes.animator.a[(i_5100 + net.thegeez.datominoes.animator.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_5115))
{net.thegeez.datominoes.dom_helpers.set_timeout.call(null,finish_5115,(0));
} else
{}
} else
{}
} else
{}
{
var G__5116 = (stone_idx_5099 + (1));
stone_idx_5099 = G__5116;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.call(null,(1),(net.thegeez.datominoes.animator.a[net.thegeez.datominoes.animator.DO_DRAW])))
{return net.thegeez.datominoes.dom_helpers.set_timeout.call(null,anim_loop,(10));
} else
{return cljs.core.reset_BANG_.call(null,net.thegeez.datominoes.animator.running,false);
}
});
net.thegeez.datominoes.animator.animate = (function animate(){if(cljs.core.compare_and_set_BANG_.call(null,net.thegeez.datominoes.animator.running,false,true))
{return net.thegeez.datominoes.animator.anim_loop.call(null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
net.thegeez.datominoes.animator.slide = (function() { 
var slide__delegate = function (el,to,p__5117){var vec__5121 = p__5117;var finish = cljs.core.nth.call(null,vec__5121,(0),null);var idx = el.anim_idx;var i = (idx * net.thegeez.datominoes.animator.FIELD_COUNT);var vec__5122 = net.thegeez.datominoes.dom_helpers.get_position.call(null,el);var from_x = cljs.core.nth.call(null,vec__5122,(0),null);var from_y = cljs.core.nth.call(null,vec__5122,(1),null);var from = vec__5122;var vec__5123 = to;var to_x = cljs.core.nth.call(null,vec__5123,(0),null);var to_y = cljs.core.nth.call(null,vec__5123,(1),null);var step = (net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.STEP)]);var steps = (((step > (0)))?step:(30));var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(net.thegeez.datominoes.animator.a[i] = el);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.BEGIN)] = from);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.DRAW)] = true);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.TO)] = to);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.STEP)] = steps);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.STEPS)] = steps);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.DX)] = dx);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.DY)] = dy);
(net.thegeez.datominoes.animator.a[(i + net.thegeez.datominoes.animator.FINISH)] = finish);
(net.thegeez.datominoes.animator.a[net.thegeez.datominoes.animator.DO_DRAW] = (1));
return net.thegeez.datominoes.animator.animate.call(null);
};
var slide = function (el,to,var_args){
var p__5117 = null;if (arguments.length > 2) {
  p__5117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__5117);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__5124){
var el = cljs.core.first(arglist__5124);
arglist__5124 = cljs.core.next(arglist__5124);
var to = cljs.core.first(arglist__5124);
var p__5117 = cljs.core.rest(arglist__5124);
return slide__delegate(el,to,p__5117);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
