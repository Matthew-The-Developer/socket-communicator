(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/socket-communicator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.e3c2897e.svg"},ac3d:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.$store.getters["appbar/visible"]?r("v-app-bar",{attrs:{app:""}},[r("v-img",{attrs:{src:n("9b19"),"max-height":"40","max-width":"40"}}),r("v-spacer"),r("v-btn",{staticClass:"mr-0",attrs:{color:"red",icon:""}},[r("v-icon",[e._v("mdi-connection")])],1)],1):e._e(),r("v-main",[r("router-view")],1),e.error?r("v-footer",{staticClass:"pa-0",attrs:{app:""}},[r("v-alert",{staticClass:"flex-grow-1 ma-0",attrs:{type:"error",rounded:"0",dismissible:""},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[e._v(" I'm an error alert. ")])],1):e._e()],1)},a=[],i=r["a"].extend({name:"App",data:function(){return{}},computed:{error:{get:function(){return this.$store.getters["error"]},set:function(e){this.$store.commit("error",e)}}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.$store.commit("install",t)})),window.addEventListener("appinstalled",(function(){e.$store.commit("install",null)}))}}),c=i,l=n("2877"),s=n("6544"),u=n.n(s),d=n("0798"),f=n("7496"),p=n("40dc"),v=n("8336"),m=n("553a"),b=n("132d"),g=n("adda"),h=n("f6c4"),x=n("2fa4"),w=Object(l["a"])(c,o,a,!1,null,null,null),y=w.exports;u()(w,{VAlert:d["a"],VApp:f["a"],VAppBar:p["a"],VBtn:v["a"],VFooter:m["a"],VIcon:b["a"],VImg:g["a"],VMain:h["a"],VSpacer:x["a"]});var k=n("9483");Object(k["a"])("".concat("/socket-communicator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("b0c0");var V=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"background",attrs:{"fill-height":"",fluid:""}},[n("v-row",[n("v-col",[n("v-card",{staticClass:"mx-auto my-auto",attrs:{"max-width":"560",rounded:"xl",outlined:""}},[n("v-card-title",{staticClass:"justify-center text-h5 font-weight-black"},[e._v("Connect")]),n("v-card-subtitle",{staticClass:"text-center"},[e._v("Socketio")]),n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.urlRules,type:"text",label:"URL",placeholder:"https://localhost/",filled:"",rounded:"",dense:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),n("v-text-field",{attrs:{rules:e.portRules,type:"number",label:"Port",placeholder:"3000",filled:"",rounded:"",dense:""},model:{value:e.port,callback:function(t){e.port=t},expression:"port"}}),n("v-btn",{attrs:{disabled:!e.valid,loading:e.$store.getters["loading"],color:"primary",rounded:"",block:"",large:"",dark:e.valid},on:{click:function(t){return e.connect()}}},[e._v(" connect ")])],1)],1)],1)],1)],1),e.$store.getters["install"]?n("v-btn",{attrs:{elevation:"0",fab:"",fixed:"",top:"",right:""},on:{click:function(t){return e.install()}}},[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-download-outline")])],1):e._e()],1)},_=[],$=r["a"].extend({name:"Connection",data:function(){return{urlRules:[function(e){return!!e||"URL is required"}],portRules:[function(e){return!!e||"Port is required"},function(e){return e>=0||"Port must be greater than 0"},function(e){return e<=65535||"Port must be less than 65535"}]}},computed:{valid:{get:function(){return this.$store.getters["connection/valid"]},set:function(e){this.$store.commit("connection/valid",e)}},url:{get:function(){return this.$store.getters["connection/url"]},set:function(e){this.$store.commit("connection/url",e)}},port:{get:function(){return this.$store.getters["connection/port"]},set:function(e){this.$store.commit("connection/port",e)}}},methods:{install:function(){this.$store.dispatch("promptInstall")},connect:function(){Y.push({name:"Message"})}}}),j=$,O=(n("e681"),n("b0af")),P=n("99d9"),S=n("62ad"),E=n("a523"),M=n("4bd4"),R=n("0fd9"),T=n("8654"),A=Object(l["a"])(j,C,_,!1,null,null,null),F=A.exports;u()(A,{VBtn:v["a"],VCard:O["a"],VCardSubtitle:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:S["a"],VContainer:E["a"],VForm:M["a"],VIcon:b["a"],VRow:R["a"],VTextField:T["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"fill-height":"",column:"","justify-end":""}},[n("v-toolbar",{staticClass:"flex-grow-0 mx-4 mb-4",attrs:{rounded:"xl",height:"64"}},[n("v-text-field",{attrs:{label:"Message",placeholder:"Say hi","append-outer-icon":"mdi-send","hide-details":"","single-line":"",rounded:"",filled:"",dense:""}})],1)],1)},L=[],B=r["a"].extend({name:"Message",data:function(){return{message:""}}}),q=B,N=n("a722"),J=n("71d9"),U=Object(l["a"])(q,I,L,!1,null,null,null),D=U.exports;u()(U,{VLayout:N["a"],VTextField:T["a"],VToolbar:J["a"]});var z=n("1da1"),G=(n("96cf"),n("2f62"));r["a"].use(G["a"]);var H={namespaced:!0,state:function(){return{visible:!1}},getters:{visible:function(e){return e.visible}},mutations:{visible:function(e,t){return e.visible=t}},actions:{}},K={namespaced:!0,state:function(){return{valid:!1,url:"",port:""}},getters:{valid:function(e){return e.valid},url:function(e){return e.url},port:function(e){return e.port}},mutations:{valid:function(e,t){return e.valid=t},url:function(e,t){return e.url=t},port:function(e,t){return e.port=t}},actions:{}},Q=new G["a"].Store({state:{install:null,socket:null,error:!1,loading:!1},getters:{install:function(e){return e.install},error:function(e){return e.error},loading:function(e){return e.loading}},mutations:{install:function(e,t){return e.install=t},socket:function(e,t){return e.socket=t},error:function(e,t){return e.error=t}},actions:{createCoonection:function(e){var t=e.commit;t("socket",null)},promptInstall:function(e){return Object(z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit,n=e.state,n.install&&n.install.prompt();case 2:case"end":return t.stop()}}),t)})))()}},modules:{appbar:H,connection:K}});r["a"].use(V["a"]);var W=[{path:"/",name:"Connection",component:F,beforeEnter:function(e,t,n){Q.commit("appbar/visible",!1),n()}},{path:"/message",name:"Message",component:D,beforeEnter:function(e,t,n){Q.commit("appbar/visible",!0),n()}}],X=new V["a"]({routes:W});X.beforeEach((function(e,t,n){"Connection"===e.name||Q.getters["connection/valid"]?n():n({name:"Connection"})}));var Y=X,Z=n("f309");r["a"].use(Z["a"]);var ee=new Z["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:Q,vuetify:ee,render:function(e){return e(y)}}).$mount("#app")},e681:function(e,t,n){"use strict";n("ac3d")}});
//# sourceMappingURL=app.8b6f493a.js.map