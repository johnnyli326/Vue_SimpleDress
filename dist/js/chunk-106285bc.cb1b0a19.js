(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-106285bc"],{"2e3e":function(t,a,s){},"53fe":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container my-4"},[s("h2",{staticClass:"text-center my-3"},[t._v("購物車列表")]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm table-striped"},[s("tbody",[t._m(0),t._l(t.cart,function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle text-center",attrs:{width:"20%"}},[s("button",{staticClass:"btn",on:{click:function(s){return t.removeCart(a.id)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),s("i",{staticClass:"far fa-trash-alt text-secondary"})])]),s("td",{staticClass:"text-left"},[s("a",{staticClass:"btn btn-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.productRoute(a.product_id)}}},[s("img",{staticClass:"small mr-3",attrs:{src:a.product.imageUrl,alt:""}}),s("div",[t._v(t._s(a.product.title))])]),a.coupon?s("div",{staticClass:"text-success"},[t._v("\n                已套用優惠卷\n              ")]):t._e()]),s("td",{staticClass:"pt-2"},[t._v(t._s(a.qty)+" / "+t._s(a.product.unit))]),s("td",{staticClass:"pt-2 text-right text-danger"},[t._v(t._s(t._f("currency")(a.final_total)))])])}),s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("合計")]),s("td",{staticClass:"text-right text-danger"},[t._v(t._s(t._f("currency")(t.finalTotal)))])])],2)])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"input-group mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-dark",on:{click:function(a){return t.addCouponCode()}}},[t._v("套用優惠卷")])])])])]),s("div",{staticClass:"d-flex justify-content-center"},[s("router-link",{staticClass:"btn btn-block btn-primary my-4 btn-checkout",attrs:{to:"order"}},[t._v("前往結帳")])],1)])],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{staticClass:"bg-secondary text-white"},[s("th",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("刪除")]),s("th",{staticClass:"text-left name-media"},[t._v("商品名稱")]),s("th",[t._v("數量")]),s("th",{staticClass:"text-center"},[t._v("小計")])])}],o=(s("cadf"),s("551c"),s("f751"),s("097d"),{data:function(){return{cart:[],finalTotal:"",total:"",status:{loadingItem:""},coupon_code:"",isLoading:!1}},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/cart");t.isLoading=!0,t.$http.get(a).then(function(a){t.cart=a.data.data.carts,t.finalTotal=a.data.data.final_total,t.total=a.data.data.total,console.log("getCart",a.data),t.isLoading=!1})},removeCart:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/cart/").concat(t);a.status.loadingItem=t,a.$http.delete(s).then(function(s){console.log(s.data),a.isLoading=!1,a.getCart(),a.$bus.$emit("delete:cart"),a.status.loadingItem=t})},addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/coupon"),s={code:t.coupon_code};t.isLoading=!0,t.$http.post(a,{data:s}).then(function(a){console.log(a.data),t.isLoading=!1,t.getCart()}),t.coupon_code=""},productRoute:function(t){var a=this;a.$router.push("/product/".concat(t))}},watch:{cart:function(t){0===t.length&&(alert("目前購物車沒有任何商品!"),this.$router.push("Home"))}},created:function(){var t=this;t.getCart(),t.$bus.$on("newCart",function(){t.getCart()})}}),c=o,i=(s("9152"),s("2877")),r=Object(i["a"])(c,e,n,!1,null,null,null);a["default"]=r.exports},9152:function(t,a,s){"use strict";var e=s("2e3e"),n=s.n(e);n.a}}]);
//# sourceMappingURL=chunk-106285bc.cb1b0a19.js.map