(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196aaec8"],{"03b3":function(t,a,e){},"815c":function(t,a,e){"use strict";var s=e("de11"),n=e.n(s);n.a},"8cc7":function(t,a,e){},9132:function(t,a,e){"use strict";var s=e("03b3"),n=e.n(s);n.a},"9d5e":function(t,a,e){},d710:function(t,a,e){"use strict";var s=e("9d5e"),n=e.n(s);n.a},da45:function(t,a,e){"use strict";var s=e("8cc7"),n=e.n(s);n.a},de11:function(t,a,e){},ee10:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Alert"),e("Header"),e("div",{staticClass:"container"},[e("router-view")],1),e("Footer")],1)},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg p-0 navbar-default m-0 fixed-top",attrs:{role:"navigation"}},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/login"}},[e("i",{staticClass:"fas fa-cog mr-2"}),t._v("後台管理")])],1),e("li",{staticClass:"nav-item",class:{active:-1!==["cart"].indexOf(t.$route.name)}},[e("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-cart-plus mr-2"}),t._v("\n            購物車 ( "+t._s(t.carts.length)+" )\n          ")])],1)])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler ml-auto mr-4",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"fas fa-bars text-white"})])}],c=e("cebc"),l=e("2f62"),o=e("1157"),u=e.n(o),v={name:"Navbar",data:function(){return{}},methods:Object(c["a"])({},Object(l["b"])("cartModules",["getCart"])),computed:Object(c["a"])({},Object(l["c"])("cartModules",["carts"])),created:function(){var t=this;t.getCart()},mounted:function(){}},d=v,m=(e("815c"),e("2877")),f=Object(m["a"])(d,r,i,!1,null,"81ce6c80",null),b=f.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner d-flex justify-content-center align-items-center"},[e("h1",{staticClass:"display-5 text-center"},[e("router-link",{staticClass:"title",attrs:{to:"/Home"}},[t._v("\n          SIMPLE DRESS\n        ")])],1)]),e("div",{staticClass:"container"},[e("ul",{staticClass:"nav d-flex justify-content-between"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link topmenu",attrs:{to:"/productmenu"}},[t._v("All")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link topmenu",attrs:{to:"/productmenu/men"}},[t._v("MEN")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link topmenu",attrs:{to:"/productmenu/women"}},[t._v("WOMEN")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link topmenu",attrs:{to:"/productmenu/kid"}},[t._v("KIDS")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link topmenu",attrs:{to:"/productmenu/sale"}},[t._v("SALE")])],1)])])])},C=[],_={name:"banner",data:function(){return{category:""}},methods:{},mounted:function(){u()(document).ready(function(){u()(".topmenu").each(function(){var t=this,a=u()(this).text();u()(this).mouseenter(function(){u()(t).text(function(){return"All"===u()(t).text()?"全部":"MEN"===u()(t).text()?"男裝":"WOMEN"===u()(t).text()?"女裝":"KIDS"===u()(t).text()?"童裝":"促銷"})}),u()(this).mouseleave(function(){u()(t).text(function(){return a})})})})}},g=_,h=(e("da45"),Object(m["a"])(g,p,C,!1,null,"2b531ebe",null)),k=h.exports,x=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100"},[e("div",{staticClass:"bg-light text-center py-2"},[e("p",{staticClass:"text-dark"},[t._v("簡單打扮，打扮簡單")]),e("p",{staticClass:"text-dark"},[t._v("SIMPLE DRESS CO.,LTD. ALL RIGHTS RESERVED.")]),e("p",[t._v("參考來源：NET衣著")])])])}],M={name:"Footer"},O=M,j=Object(m["a"])(O,x,E,!1,null,null,null),w=j.exports,N=e("f663"),S={name:"Dashboard",components:{Navbar:b,Header:k,Footer:w,Alert:N["a"]}},$=S,y=(e("9132"),Object(m["a"])($,s,n,!1,null,"3be1c001",null));a["default"]=y.exports},f663:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},n=[],r=e("cebc"),i=e("2f62"),c={name:"AlertMessage",data:function(){return{}},methods:{removeMessage:function(t){var a=this;a.$store.dispatch("alertModules/removeMessage",t)},removeMessageWithTiming:function(t){var a=this;a.$store.dispatch("alertModules/removeMessageWithTiming",t)}},computed:Object(r["a"])({},Object(i["c"])("alertModules",["messages"])),created:function(){}},l=c,o=(e("d710"),e("2877")),u=Object(o["a"])(l,s,n,!1,null,null,null);a["a"]=u.exports}}]);
//# sourceMappingURL=chunk-196aaec8.cc6d4e6d.js.map