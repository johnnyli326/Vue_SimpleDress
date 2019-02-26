(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c07b563"],{"33fc":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pageData.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._l(t.pageData.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pageData.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pageData.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return t.changePage(t.pageData.current_page+1)}}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])],2)])])},o=[],i={name:"Pagination",data:function(){return{}},props:{pageData:{type:Object,default:function(){return{}}}},methods:{changePage:function(t){this.$emit("changepage",t)}}},r=i,c=(a("80dd"),a("2877")),n=Object(c["a"])(r,s,o,!1,null,"6db9c91a",null);e["a"]=n.exports},"372d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content mt-5"},[a("div",{staticClass:"create-btn-Pos"},[a("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){return e.preventDefault(),t.openModal(!0)}}},[t._v("建立新的產品")])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[a("img",{staticClass:"small rounded",attrs:{src:e.imageUrl,alt:""}}),a("div",[t._v(t._s(e.title))])]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e["origin_price"])))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e["is_enabled"]?a("span",{staticClass:"text-success"},[t._v("尚有存貨")]):a("span",[t._v("缺貨")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return a.preventDefault(),t.openModal(!1,e)}}},[t._v("編輯")])]),a("td",[a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return a.preventDefault(),t.openDelModal(e)}}},[t._v("刪除")])])])}),0)])])]),a("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pageData:t.pagination},on:{changepage:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.modalHead)+"產品")])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.imageUrl,expression:"TempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.TempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",alt:"",src:t.TempProduct.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.title,expression:"TempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.TempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.category,expression:"TempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.TempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.unit,expression:"TempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.TempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct["origin_price"],expression:"TempProduct['origin_price']"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.TempProduct["origin_price"]},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.price,expression:"TempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.TempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.description,expression:"TempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.TempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct.content,expression:"TempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.TempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.TempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.TempProduct["is_enabled"],expression:"TempProduct['is_enabled']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.TempProduct["is_enabled"])?t._i(t.TempProduct["is_enabled"],null)>-1:t._q(t.TempProduct["is_enabled"],1)},on:{change:function(e){var a=t.TempProduct["is_enabled"],s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.TempProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.TempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.TempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateProduct(e)}}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.TempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.deleteProduct(e)}}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"80"}},[t._v("編輯")]),a("th",{attrs:{width:"80"}},[t._v("刪除")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("cebc"),r=a("5176"),c=a.n(r),n=a("1157"),l=a.n(n),d=a("33fc"),u=a("2f62"),p={components:{Pagination:d["a"]},data:function(){return{TempProduct:{},isNew:!1,modalHead:"新增",status:{fileUploading:!1}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("productsModules/getProducts",t)},openModal:function(t,e){this.$store.dispatch("productsModules/openModal",{isNew:t,item:e}),t?(this.TempProduct={},this.isNew=!0,this.modalHead="新增"):(this.TempProduct=c()({},e),this.isNew=!1,this.modalHead="編輯",console.log(this.TempProduct)),l()("#productModal").modal("show")},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/admin/product"),e=this,a="post";e.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/admin/product/").concat(e.TempProduct.id),a="put"),console.log(t),this.$http[a](t,{data:e.TempProduct}).then(function(t){console.log(t.data),t.data.success?(e.getProducts(),l()("#productModal").modal("hide")):(l()("#productModal").modal("hide"),alert("新增商品失敗"))})},deleteProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/admin/product/").concat(t.TempProduct.id);console.log(e),this.$http.delete(e,{data:t.TempProduct.id}).then(function(e){console.log(e.data),e.data.success?(l()("#deleteModal").modal("hide"),t.getProducts()):(l()("#deleteModal").modal("hide"),alert("刪除商品失敗"))})},openDelModal:function(t){this.TempProduct=c()({},t),l()("#deleteModal").modal("show"),console.log(this.TempProduct)},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/admin/upload");this.$http.post(o,s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),t.status.fileUploading=!0,e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger"),setTimeout(function(){a.status.fileUploading=!1},3e3)})}},computed:Object(i["a"])({},Object(u["c"])("productsModules",["products","pagination"])),created:function(){var t=this;this.getProducts(),this.$bus.$on("page:current",function(e){t.getProducts(e)})}},m=p,v=(a("518a"),a("2877")),g=Object(v["a"])(m,s,o,!1,null,"5602dee0",null);e["default"]=g.exports},5176:function(t,e,a){t.exports=a("51b6")},"518a":function(t,e,a){"use strict";var s=a("5194"),o=a.n(s);o.a},5194:function(t,e,a){},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},7410:function(t,e,a){},"80dd":function(t,e,a){"use strict";var s=a("7410"),o=a.n(s);o.a},9306:function(t,e,a){"use strict";var s=a("c3a1"),o=a("9aa9"),i=a("355d"),r=a("241e"),c=a("335c"),n=Object.assign;t.exports=!n||a("294c")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=n({},t)[a]||Object.keys(n({},e)).join("")!=s})?function(t,e){var a=r(t),n=arguments.length,l=1,d=o.f,u=i.f;while(n>l){var p,m=c(arguments[l++]),v=d?s(m).concat(d(m)):s(m),g=v.length,f=0;while(g>f)u.call(m,p=v[f++])&&(a[p]=m[p])}return a}:n},a3c3:function(t,e,a){var s=a("63b6");s(s.S+s.F,"Object",{assign:a("9306")})}}]);
//# sourceMappingURL=chunk-5c07b563.21a2fb14.js.map