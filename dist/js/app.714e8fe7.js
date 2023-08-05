(function(){"use strict";var e={4966:function(e,t,n){var a=n(9242),r=(n(7658),n(3396)),o=n(4870),c=n.p+"img/logo.8474c3b6.svg",i=n(7139);const s={class:"card-news"},l={key:0,class:"card-news__img-wrapper"},u=["src"],d={class:"card-news__wrapper"},p={class:"card-news__content"},_={class:"card-content__date"},f={class:"card-content__date-day"},v={class:"card-content__date-month-year"},g={class:"card-content__name"},w=["innerHTML"],h={class:"card-content__type"};var y={__name:"CardNews",props:{name:{type:String,default:""},date:{type:Object,default:()=>{}},image:{type:String,default:""},previewText:{type:String,default:""},type:{type:Object,default:()=>{}}},setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("div",s,[e.image?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("img",{class:"card-news__img",src:e.image,alt:""},null,8,u)])):(0,r.kq)("",!0),(0,r._)("div",d,[(0,r._)("div",p,[(0,r._)("div",_,[(0,r._)("div",f,(0,i.zw)(e.date.day),1),(0,r._)("div",v,[(0,r._)("div",null,(0,i.zw)(e.date.monthName),1),(0,r._)("div",null,(0,i.zw)(e.date.year),1)])]),(0,r._)("div",g,(0,i.zw)(e.name),1),(0,r._)("div",{class:"card-content__preview-text",innerHTML:e.previewText},null,8,w)]),(0,r._)("div",h,(0,i.zw)(e.type.value),1)])]))}},m=n(89);const b=(0,m.Z)(y,[["__scopeId","data-v-7e259cea"]]);var k=b;const O=(0,r._)("header",{class:"app-header"},[(0,r._)("img",{src:c,class:"app-header__logo",alt:""})],-1),j={class:"app-content"},D=(0,r._)("div",{class:"page-header"},[(0,r._)("h2",{class:"page-header__title"},"Новости")],-1),x={key:0,class:"app-content__error"},z={key:1,class:"news-content"},S=(0,r._)("footer",{class:"app-footer"},[(0,r._)("img",{src:c,class:"app-footer__logo",alt:""}),(0,r._)("div",{class:"app-footer__content"},"© alpha, 2023")],-1);var H={__name:"App",setup(e){let t=(0,o.iH)([]),n=null,a=null,c=(0,o.iH)(null);const i=async()=>{try{const e=n?`${n.current+1}/`:"",o=await fetch(`https://flems.github.io/test/api/news/${e}`).then((e=>e.json())),{items:c,nav:i}=o;n=i,c.forEach((e=>{e.date=s(e.date),t.value.push(e)})),a=(0,r.Fl)((()=>n.total!==n.current))}catch(e){console.error(e),c.value=!0}},s=e=>{const t=new Date(1e3*e);return{day:t.getDate(),monthName:t.toLocaleString("en",{month:"long"}),year:t.getFullYear()}};return async function(){await i()}(),(e,n)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[O,(0,r._)("div",j,[D,(0,o.SU)(c)?((0,r.wg)(),(0,r.iD)("div",x," Ошибка получения списка новостей ")):((0,r.wg)(),(0,r.iD)("div",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(t),(e=>((0,r.wg)(),(0,r.j4)(k,(0,r.dG)({key:e.code},e),null,16)))),128))])),(0,o.SU)(a)?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"app-content__download-btn",onClick:i}," Загрузить ещё ")):(0,r.kq)("",!0)]),S],64))}};const T=H;var C=T;(0,a.ri)(C).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var c=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,s=0;s<a.length;s++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,o<c&&(c=o));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/zebra-test/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,c=a[0],i=a[1],s=a[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(a);l<c.length;l++)o=c[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkzebra_test"]=self["webpackChunkzebra_test"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4966)}));a=n.O(a)})();
//# sourceMappingURL=app.714e8fe7.js.map