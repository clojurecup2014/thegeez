// Compiled by ClojureScript 0.0-2342
goog.provide('net.thegeez.datominoes.dom_helpers');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.fx');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.Timer');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
/**
* Return the element with the passed id.
*/
net.thegeez.datominoes.dom_helpers.get_element = (function get_element(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
net.thegeez.datominoes.dom_helpers.show_element = (function show_element(e,b){return goog.style.showElement(e,b);
});
net.thegeez.datominoes.dom_helpers.add_remove_class = (function add_remove_class(e,add_classes,remove_classes){return goog.dom.classes.addRemove(e,remove_classes,add_classes);
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
net.thegeez.datominoes.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){var seq__9794_9798 = cljs.core.seq.call(null,children);var chunk__9795_9799 = null;var count__9796_9800 = (0);var i__9797_9801 = (0);while(true){
if((i__9797_9801 < count__9796_9800))
{var child_9802 = cljs.core._nth.call(null,chunk__9795_9799,i__9797_9801);goog.dom.appendChild(parent,child_9802);
{
var G__9803 = seq__9794_9798;
var G__9804 = chunk__9795_9799;
var G__9805 = count__9796_9800;
var G__9806 = (i__9797_9801 + (1));
seq__9794_9798 = G__9803;
chunk__9795_9799 = G__9804;
count__9796_9800 = G__9805;
i__9797_9801 = G__9806;
continue;
}
} else
{var temp__4126__auto___9807 = cljs.core.seq.call(null,seq__9794_9798);if(temp__4126__auto___9807)
{var seq__9794_9808__$1 = temp__4126__auto___9807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9794_9808__$1))
{var c__4395__auto___9809 = cljs.core.chunk_first.call(null,seq__9794_9808__$1);{
var G__9810 = cljs.core.chunk_rest.call(null,seq__9794_9808__$1);
var G__9811 = c__4395__auto___9809;
var G__9812 = cljs.core.count.call(null,c__4395__auto___9809);
var G__9813 = (0);
seq__9794_9798 = G__9810;
chunk__9795_9799 = G__9811;
count__9796_9800 = G__9812;
i__9797_9801 = G__9813;
continue;
}
} else
{var child_9814 = cljs.core.first.call(null,seq__9794_9808__$1);goog.dom.appendChild(parent,child_9814);
{
var G__9815 = cljs.core.next.call(null,seq__9794_9808__$1);
var G__9816 = null;
var G__9817 = (0);
var G__9818 = (0);
seq__9794_9798 = G__9815;
chunk__9795_9799 = G__9816;
count__9796_9800 = G__9817;
i__9797_9801 = G__9818;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var append = function (parent,var_args){
var children = null;if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return append__delegate.call(this,parent,children);};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__9819){
var parent = cljs.core.first(arglist__9819);
var children = cljs.core.rest(arglist__9819);
return append__delegate(parent,children);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
net.thegeez.datominoes.dom_helpers.set_text = (function set_text(e,s){var e__$1 = ((((e instanceof cljs.core.Keyword)) || (typeof e === 'string'))?net.thegeez.datominoes.dom_helpers.get_element.call(null,e):e);var G__9821 = e__$1;goog.dom.setTextContent(G__9821,s);
return G__9821;
});
net.thegeez.datominoes.dom_helpers.normalize_args = (function normalize_args(tag,args){var parts = clojure.string.split.call(null,tag,/(\.|#)/);var vec__9824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,((function (parts){
return (function (p1__9822_SHARP_){if(cljs.core._EQ_.call(null,p1__9822_SHARP_,"."))
{return new cljs.core.Keyword(null,"class","class",-2030961996);
} else
{if(cljs.core._EQ_.call(null,p1__9822_SHARP_,"#"))
{return new cljs.core.Keyword(null,"id","id",-1388402092);
} else
{return p1__9822_SHARP_;

}
}
});})(parts))
,cljs.core.rest.call(null,parts)))], null);var tag__$1 = cljs.core.nth.call(null,vec__9824,(0),null);var attrs = cljs.core.nth.call(null,vec__9824,(1),null);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,attrs,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,attrs,args], null);
}
});
/**
* Create a dom element using a keyword for the element name and a map
* for the attributes. Append all children to parent. If the first
* child is a string then the string will be set as the text content of
* the parent and all remaining children will be appended.
* @param {...*} var_args
*/
net.thegeez.datominoes.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){var vec__9831 = net.thegeez.datominoes.dom_helpers.normalize_args.call(null,tag,args);var tag__$1 = cljs.core.nth.call(null,vec__9831,(0),null);var attrs = cljs.core.nth.call(null,vec__9831,(1),null);var children = cljs.core.nth.call(null,vec__9831,(2),null);var parent = goog.dom.createDom(cljs.core.subs.call(null,tag__$1,(1)),cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,((function (vec__9831,tag__$1,attrs,children){
return (function (m,p__9833){var vec__9834 = p__9833;var k = cljs.core.nth.call(null,vec__9834,(0),null);var v = cljs.core.nth.call(null,vec__9834,(1),null);return cljs.core.assoc.call(null,m,k,v);
});})(vec__9831,tag__$1,attrs,children))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__9831,tag__$1,attrs,children){
return (function (p1__9825_SHARP_,p2__9826_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,p1__9825_SHARP_),p2__9826_SHARP_],null));
});})(vec__9831,tag__$1,attrs,children))
,cljs.core.keys.call(null,attrs),cljs.core.vals.call(null,attrs)))));var vec__9832 = ((typeof cljs.core.first.call(null,children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net.thegeez.datominoes.dom_helpers.set_text.call(null,element.call(null,tag__$1,attrs),cljs.core.first.call(null,children)),cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,children], null));var parent__$1 = cljs.core.nth.call(null,vec__9832,(0),null);var children__$1 = cljs.core.nth.call(null,vec__9832,(1),null);return cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.append,parent__$1,children__$1);
};
var element = function (tag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return element__delegate.call(this,tag,args);};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__9835){
var tag = cljs.core.first(arglist__9835);
var args = cljs.core.rest(arglist__9835);
return element__delegate(tag,args);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
net.thegeez.datominoes.dom_helpers.remove_children = (function remove_children(parent_el){return goog.dom.removeChildren(parent_el);
});
/**
* Create a dom element from an html string.
*/
net.thegeez.datominoes.dom_helpers.html = (function html(s){return goog.dom.htmlToDocumentFragment(s);
});
net.thegeez.datominoes.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string');
});
/**
* Build up a dom element from nested vectors.
*/
net.thegeez.datominoes.dom_helpers.build = (function build(x){if(cljs.core.vector_QMARK_.call(null,x))
{var vec__9837 = (((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.element,cljs.core.take_while.call(null,net.thegeez.datominoes.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,net.thegeez.datominoes.dom_helpers.element_arg_QMARK_,x)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.rest.call(null,x)], null));var parent = cljs.core.nth.call(null,vec__9837,(0),null);var children = cljs.core.nth.call(null,vec__9837,(1),null);var children__$1 = cljs.core.map.call(null,build,children);return cljs.core.apply.call(null,net.thegeez.datominoes.dom_helpers.append,parent,children__$1);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
net.thegeez.datominoes.dom_helpers.insert_at = (function insert_at(parent,child,index){return goog.dom.insertChildAt(parent,child,index);
});
net.thegeez.datominoes.dom_helpers.set_timeout = (function set_timeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
net.thegeez.datominoes.dom_helpers.set_position = (function set_position(e,x,y){return goog.style.setPosition(e,x,y);
});
net.thegeez.datominoes.dom_helpers.get_position = (function get_position(e){var p = goog.style.getPosition(e);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
});
net.thegeez.datominoes.dom_helpers.get_bounds = (function get_bounds(e){return goog.style.getBounds(e);
});
net.thegeez.datominoes.dom_helpers.z_level = cljs.core.atom.call(null,(100));
net.thegeez.datominoes.dom_helpers.toggle_class = (function toggle_class(el,classname){return goog.dom.classes.toggle(el,classname);
});
net.thegeez.datominoes.dom_helpers.add_class = (function add_class(el,classname){return goog.dom.classes.add(el,classname);
});
net.thegeez.datominoes.dom_helpers.remove_class = (function remove_class(el,classname){return goog.dom.classes.remove(el,classname);
});
