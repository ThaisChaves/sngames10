/*! For license information please see 95f16bcff0424aea95dd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{187:function(t,e,s){var i=s(231);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(195).default)("46765264",i,!0,{})},196:function(t,e,s){"use strict";var i=s(187);s.n(i).a},209:function(t,e,s){"use strict";var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find(({path:t})=>t===this.href)))}}},o=s(62),r=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)(this.isRouter?"router-link":"a",{tag:"component",attrs:{href:this.isRouter?null:this.href,to:this.isRouter?this.to||this.href:null}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},210:function(t,e,s){"use strict";s(86),s(13),s(40),s(7);var i=s(34),o=s(116),r=s(85);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[i.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const i="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,i=((t,e,s,i)=>{let o,r;for(const n in i){const a=i[n];if(void 0!==a&&t[n]){if(void 0!==r)if(null===a){if(r>=e)continue}else if(a<e||a-50<=s||null!==r&&a>r)continue;o=n,r=a}}return o})(this.src,t,s,this.containerBreakpoints),o=this.src[i],{url:r,size:n}=o||this.defaultImgObj;if(e=r,t&&n&&this.canCalcHeight){const[e,s]=n.split("x").map(t=>parseInt(t,10));s&&(this.height="".concat(t>=e?s:t*s/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick(()=>{const t=this.$el;Object(r.a)(t,a(a({},this.lozadOptions),{},{loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick(()=>{this.opacity=s.style.opacity=null,this.$emit("load")})}}})).observe()})}},u=(s(196),s(62)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,o=t.type;return s("source",{key:e,attrs:{srcset:i,type:o}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=d.exports},211:function(t,e,s){"use strict";var i=s(35),o=s(48),r=s(49),n=s(50),a=s(106);const c=(t,e)=>{const{type:s,value:i}=e;if(i)return"percentage"===s?t*(100-i)/100:t-i};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(o.a)(i.j),i19from:()=>Object(o.a)(i.nb),i19interestFree:()=>Object(o.a)(i.yb),i19of:()=>Object(o.a)(i.bc),i19to:()=>Object(o.a)(i.hd),i19upTo:()=>Object(o.a)(i.nd),price(){const t=Object(r.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(r.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:a.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(s(196),s(62)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(t._s(t.i19from))]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(t._s(t.i19to))])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=d.exports},212:function(t,e,s){"use strict";s(39),s(15),s(58);var i=s(35),o=s(48),r=s(30),n=s(108),a=s(50),c=s(49),l=s(4),u=s(12),d=s(209),p=s(210),b=s(211),h={name:"ProductCard",components:{ALink:d.a,APicture:p.a,APrices:b.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(o.a)(i.lc),i19unavailable:()=>Object(o.a)(i.kd),buyHtml:()=>"object"==typeof window&&window.productCardBuyHtml,footerHtml:()=>"object"==typeof window&&window.productCardFooterHtml,name(){return Object(r.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(i.o)},isInStock(){return Object(n.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(a.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text},fetchItem(){if(this.productId){this.isLoading=!0;const{storeId:t,productId:e}=this;Object(l.g)({url:"/products/".concat(e,".json"),storeId:t}).then(({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)}).catch(t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(i.J))}).finally(()=>{this.isLoading=!1})}},buy(){const t=this.body;if(this.$emit("buy",{product:t}),this.canAddToCart){const{variations:e,slug:s}=t;e&&e.length?window.location="/".concat(s):u.a.addProduct(t)}}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},m=(s(196),s(62)),g=Object(m.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},on:{mouseover:function(e){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isLoading?t._e():s("section",[t._t("discount-tag",[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()],null,{discount:t.discount}),t._t("body",[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])])],2)]),t._t("rating",[t._m(0)]),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button"}},[t._t("buy-button-content",[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],2)])],2)]:t._t("out-of-stock",[s("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[s("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]),t._t("footer",[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t.isLoading?[t._t("default"),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e()],2)}),[function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"product-card__rating",attrs:{"data-sku":this.body.sku}})}],!1,null,null,null);e.a=g.exports},231:function(t,e,s){(e=s(194)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},233:function(t,e,s){"use strict";s.r(e);s(15),s(58),s(82),s(7);var i=s(1),o=s(32),r=s(60),n=s.n(r),a=s(85),c=s(79),l=s(212);function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var b=(t={},e="product-card")=>{t.buyText&&(window.productCardBuyText=t.buyText),t.buy&&(window.productCardBuyHtml=t.buy),t.footer&&(window.productCardFooterHtml=t.footer);const s=window.storefront&&window.storefront.getScopedSlots,i=document.querySelectorAll(".".concat(e)),o=[];for(let t=0;t<i.length;t++)if(i[t]){const{productId:e,toRender:s}=i[t].dataset;s&&-1===o.indexOf(e)&&o.push(e)}let r;if(o.length>=6&&o.length<=70&&!t.skipSearchApi){const t=new c.a;delete t.dsl.aggs,delete t.dsl.sort,t.setPageSize(o.length).setProductIds(o),r=t.fetch({timeout:5e3}).then(()=>{const e=t.getItems();for(let t=0;t<2;t++)u(i[t]);return e}).catch(t=>{console.error(t)})}else r=Promise.resolve();const u=i=>{if(i){const{productId:o,sku:a,toRender:c}=i.dataset;if(c){let c;r.then(t=>{Array.isArray(t)&&(c=t.find(({_id:t})=>t===o))}).finally(()=>{let r;if(c)r=!0;else{const t=i.parentNode;if(t&&(c=t.dataset.product,"string"==typeof c))try{c=JSON.parse(c)}catch(t){c=void 0}}((i,o,r,a,c)=>{new n.a({render:n=>n(l.a,{class:"product-card"!==e?e:null,attrs:{"data-product-id":o,"data-sku":r},props:d(d({},t.props),{},{productId:o,product:a,isLoaded:c}),scopedSlots:"function"==typeof s?s(i,n):void 0})}).$mount(i)})(i,o,a,c,r)})}}};Object(a.a)(i,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const h=window.location.pathname.startsWith("/app/"),m=[],g="localhost"===window.location.hostname?50:1,f=(t,e)=>{const s=new Promise(s=>{setTimeout(()=>{const r=window._widgets&&window._widgets[t];if(r&&r.active&&(!r.desktopOnly||!i.isMobile)&&(h?r.enableCheckout:!r.disablePages))return e().then(e=>{"function"==typeof e.default&&e.default(r.options),o.a.emit("widget:".concat(t)),console.log("Widget loaded: ".concat(t))}).catch(console.error).finally(s);s()},g)});m.push(s)},{resource:y}=document.body.dataset;h||"products"!==y||f("@ecomplus/widget-product",()=>Promise.all([s.e(1),s.e(13)]).then(s.bind(null,370))),Promise.all(m).then(()=>{f("@ecomplus/widget-product-card",()=>Promise.resolve({default:b})),"/search"!==window.location.pathname&&"categories"!==y&&"brands"!==y||f("@ecomplus/widget-search-engine",()=>Promise.all([s.e(4),s.e(24)]).then(s.bind(null,366)));const t=t=>{"function"==typeof window.requestIdleCallback?setTimeout(()=>window.requestIdleCallback(t),200):setTimeout(t,800)};t(()=>{o.a.emit("load:lcp"),h||(f("@ecomplus/widget-search",()=>Promise.all([s.e(4),s.e(17)]).then(s.bind(null,375))),f("@ecomplus/widget-minicart",()=>s.e(14).then(s.bind(null,376))),f("@ecomplus/widget-user",()=>s.e(16).then(s.bind(null,377)))),Promise.all(m).then(()=>{t(()=>o.a.emit("load:components")),f("@ecomplus/widget-tag-manager",()=>s.e(18).then(s.bind(null,378))),f("@ecomplus/widget-fb-pixel",()=>s.e(23).then(s.bind(null,379))),f("@ecomplus/widget-gmc-ratings",()=>s.e(19).then(s.bind(null,367))),f("@ecomplus/widget-ebit",()=>s.e(22).then(s.bind(null,368))),f("@ecomplus/widget-compre-confie",()=>s.e(21).then(s.bind(null,369)))})})})},85:function(t,e,s){"use strict";const i="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){const e=document.createElement("img");i&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let s;for(let t=0;t<=e.length-1;t++)s=e[t].getAttribute("data-src"),s&&(e[t].src=s);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const s=t.getAttribute("data-background-image-set").split(e);let i=s[0].substr(0,s[0].indexOf(" "))||s[0];i=-1===i.indexOf("url(")?`url(${i})`:i,1===s.length?t.style.backgroundImage=i:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${i}; background-image: -webkit-image-set(${s}); background-image: image-set(${s})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function r(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded");e.a=function(t=".lozad",e={}){const{root:s,rootMargin:i,threshold:a,load:c,loaded:l}=Object.assign({},o,e);let u;return"undefined"!=typeof window&&window.IntersectionObserver&&(u=new IntersectionObserver(((t,e)=>(s,i)=>{s.forEach(s=>{(s.intersectionRatio>0||s.isIntersecting)&&(i.unobserve(s.target),n(s.target)||(t(s.target),r(s.target),e(s.target)))})})(c,l),{root:s,rootMargin:i,threshold:a})),{observe(){const e=((t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t))(t,s);for(let t=0;t<e.length;t++)n(e[t])||(u?u.observe(e[t]):(c(e[t]),r(e[t]),l(e[t])))},triggerLoad(t){n(t)||(c(t),r(t),l(t))},observer:u}}}},0,[4,24,1,13]]);
//# sourceMappingURL=95f16bcff0424aea95dd.js.map