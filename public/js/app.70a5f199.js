(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)s=o[u],i[s]&&f.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function s(e){return o.p+"js/"+({404:"404"}[e]||e)+"."+{404:"1b031d7c"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=i[e]=[t,a]});t.push(n[2]=a);var r,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,l.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07cd":function(e,t,n){"use strict";var a=n("2d9b"),i=n.n(a);i.a},"0baf":function(e,t,n){e.exports=n.p+"img/vue-hover.e4a92530.svg"},"2d9b":function(e,t,n){},"35bf":function(e,t,n){e.exports=n.p+"img/ivo.da80ee5d.jpg"},"491b":function(e,t,n){e.exports=n.p+"img/chevron-prev.c82f3ceb.svg"},"4f1f":function(e,t,n){},"4f48":function(e,t,n){e.exports=n.p+"img/app.de0a5df6.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=n("f13c"),r=n.n(i),s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){},cached:function(){},updated:function(){},offline:function(){},error:function(e){}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],c=(n("8700"),n("2877")),u={},d=Object(c["a"])(u,o,l,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,m=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("HeaderSection"),n("BannerSection"),n("ProductSection"),n("CaseSection"),n("TeamSection"),n("ContactSection")],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col sm:flex-row bg-white sm:px-10 lg:px-20"},[e._m(0),n("div",{staticClass:"flex flex-grow items-center justify-center sm:justify-end mb-4 sm:mb-0"},[n("div",{staticClass:"flex mr-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#cases",duration:500},expression:"{\n          el: '#cases',\n          duration: 500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Cases\n      ")])]),n("div",{staticClass:"flex mx-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#team",duration:1e3},expression:"{\n          el: '#team',\n          duration: 1000\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Team\n      ")])]),n("div",{staticClass:"flex mx-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",duration:1500},expression:"{\n          el: '#contact',\n          duration: 1500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Contact\n      ")])])])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center sm:justify-start"},[a("img",{staticClass:"h-8 md:h-12 my-4",attrs:{src:n("e891"),alt:"logo"}})])}],x={name:"HeaderSection"},b=x,y=Object(c["a"])(b,g,h,!1,null,null,null);y.options.__file="HeaderSection.vue";var w=y.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative flex flex-col justify-center relative py-16 h-vh-50 min-h-350 md:min-h-vh-60 bg-right bg-cover",style:{backgroundImage:e.headerBgReady},attrs:{id:"banner"}},[a("div",{staticClass:"flex flex-wrap justify-between p-5 md:p-8 sm:px-10 lg:px-20",attrs:{id:"split-screen"}},[a("div",{staticClass:"w-full md:w-1/2 text-center md:text-left",attrs:{id:"intro-animation"}},[a("vue-anime-time-line",{ref:"intro",attrs:{playing:e.playing}},[a("h1",[a("vue-anime",{staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1100,autoplay:"true",animate:e.sentence1Animation1}},[e._v("\n            "+e._s(e.words(e.sentence1)[0]+" ")+"\n          ")]),e._l(e.words(e.sentence1).slice(1),function(t,n){return a("vue-anime",{key:"key"+n,staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1e3,autoplay:"true",offset:"-=500",animate:e.sentence1Animation2}},[e._v(e._s(t+" ")+"\n          ")])})],2),a("h2",{staticClass:"my-6 leading-none"},e._l(e.words(e.sentence2),function(t,n){return a("vue-anime",{key:"key"+n,staticClass:"opacity-0 inline-block font-sans font-hind font-normal text-white text-xl md:text-2xl lg:text-3xl",attrs:{duration:800,offset:"-=600",autoplay:"true",animate:e.sentence2Animation}},[e._v(e._s(t+" ")+"\n          ")])})),a("div",{staticClass:"flex flex-col justify-center"},[a("vue-anime",{staticClass:"opacity-0 scale-0 flex flex-wrap justify-center md:justify-start",attrs:{duration:800,offset:"+=100",autoplay:"true",animate:e.logoAnimation}},[a("div",{staticClass:"flex justify-center md:justify-start w-full"},[a("banner-tech-logo",{attrs:{type:"laravel",animation:e.laravelVibrateAnimation},nativeOn:{mouseenter:function(t){e.laravelLogoHover=!0},mouseleave:function(t){e.laravelLogoHover=!1}}}),a("banner-tech-logo",{attrs:{type:"vue",animation:e.vueVibrateAnimation},nativeOn:{mouseenter:function(t){e.vueLogoHover=!0},mouseleave:function(t){e.vueLogoHover=!1}}})],1),a("div",{staticClass:"bg-tag-grey p-4 rounded items-center flex scale-x-0 h-16 w-48",class:{"transition-all-15 scale-x-100":e.vueLogoHover||e.laravelLogoHover}},[e.vueLogoHover?a("span",{staticClass:"font-plex italic text-white text-xs hover:text-caribbean-green"},[e._v("\n                Vue.js: The Progressive JavaScript Framework\n              ")]):e._e(),e.laravelLogoHover?a("span",{staticClass:"font-plex italic text-white text-xs hover:text-caribbean-green"},[e._v("\n                Laravel: The PHP Framework For Web Artisans\n              ")]):e._e()])])],1)])],1),a("div",{staticClass:"hidden md:block w-full md:w-1/2 xl:w-2/5 self-stretch flex"},[a("banner-laptop")],1)]),a("div",{staticClass:"absolute pin-b pin-l text-center w-full mb-6",attrs:{id:"next-slide"},on:{mouseenter:function(t){e.downArrowHover=!0},mouseleave:function(t){e.downArrowHover=!1}}},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#products",expression:"'#products'"}],staticClass:"w-3 h-3",attrs:{href:"#"}},[a("vue-anime",{attrs:{animate:e.downArrowAnimation,loop:!0,playing:e.downArrowHover}},[a("img",{staticClass:"block h-3 md:h-4 w-full",attrs:{src:n("7283"),alt:"chevron_down"}})])],1)])])},_=[],j=(n("28a5"),n("c93e")),k=n("f9d0"),O=n.n(k),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative bg-blue z-0"},[e._m(0),a("div",{staticClass:"absolute z-10"},[a("vue-anime",{staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 0, 0 0)","-webkit-clip-path":"polygon(0 0, 100% 0, 100% 0, 0 0)"},attrs:{autoplay:!0,playing:!0,loop:!1,delay:3e3,animate:{clipPath:[{value:"polygon(0 0, 100% 0, 100% 0, 0 0)",duration:1e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 58%, 0 40%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 58%, 0 40%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 78%, 0 55%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 100%, 0 100%0)",duration:3e3,easing:"linear"}],webkitClipPath:[{value:"polygon(0 0, 100% 0, 100% 0, 0 0)",duration:1e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 58%, 0 40%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 58%, 0 40%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 78%, 0 55%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 100%, 0 100%0)",duration:3e3,easing:"linear"}]}}},[a("img",{attrs:{src:n("f45d"),alt:"code"}})])],1)])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute z-0"},[a("img",{attrs:{src:n("897e"),alt:"laptop"}})])}],$=(n("f751"),n("8afe")),T=(n("6762"),n("ac6a"),n("c5f6"),{duration:{type:[Number,Function],default:function(){return 1e3}},delay:{type:[Number,Function],default:0},offset:{type:[Number,String]},easing:{type:[String,Array],default:"easeOutElastic"},elasticity:{type:[Number,Function],default:500},direction:{type:String,default:function(){return"normal"}},loop:{type:[Boolean,Number],default:!1},seek:{type:Number},from:{type:Object,default:function(){return{}}},animate:{type:Object,default:function(){return{}}},object:{type:Object},objectProps:{type:Object},tag:{type:String,default:"div"},playing:{type:Boolean,default:!0}}),P=n("5a72"),E=n.n(P);n("6b54");function L(e,t){return e.indexOf(t)>-1}var H={arr:function(e){return Array.isArray(e)},obj:function(e){return L(Object.prototype.toString.call(e),"Object")},pth:function(e){return H.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||H.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return H.hex(e)||H.rgb(e)||H.hsl(e)}},B=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"],I={props:T,data:function(){return{}},mounted:function(){H.fnc(this.$parent.addAnime)?this.$parent.addAnime(this):this.initAnime()},watch:{playing:function(e){e?this.play():this.pause()},seek:function(e){this.anime.seek(e)}},methods:{initAnime:function(){var e=this;this.anime=E()(this.getAnimeConfig()),!0===this.playing&&this.play(),this.anime.begin=function(t){e.$emit("begin",t)},this.anime.complete=function(t){e.$emit("complete",t)}},reset:function(){this.anime.pause(),this.initAnime()},getAnimeConfig:function(e){var t={};return e&&Object.assign(t,e),Object.assign(t,this.animate,{duration:this.duration,delay:this.delay,easing:this.easing,elasticity:this.elasticity,autoplay:!1,direction:this.direction,loop:this.loop}),(this.offset||0===this.offset)&&(t.offset=this.offset),this.object&&Object.assign(t,this.objectProps),t.targets=this.getTargets(),this.setFromProperties(t),t},pause:function(){this.anime.pause()},play:function(){this.anime.play()},restart:function(){this.anime.restart()},setFromProperties:function(e){var t=this,n=[],a=function(a){if(B.includes(a)){var i=H.str(t.from[a])?t.from[a]:"".concat(t.from[a]).concat(t.getTransformUnit(a));n.push("".concat(a,"(").concat(i,")"))}else H.arr(e.targets)?e.targets.forEach(function(e){e.style[a]=t.from[a]}):e.targets.style[a]=t.from[a]};for(var i in this.from)a(i);if(n.length){var r=n.join(" ");H.arr(e.targets)?e.targets.forEach(function(e){e.style.transform=r}):e.targets.style.transform=r}},getTransformUnit:function(e){return e.indexOf("translate")>-1||e.indexOf("perspective")>-1?"px":e.indexOf("rotate")>-1||e.indexOf("skew")>-1?"deg":void 0},getTargets:function(){return this.object||this.$el}}},V={name:"vue-anime",mixins:[I],data:function(){return{}},render:function(e){var t=this.$slots.default,n=t,a=this.$slots.footer;return a&&(n=t?Object($["a"])(t).concat(Object($["a"])(a)):Object($["a"])(a)),e(this.tag,Object.assign({class:"_vue-anime"},this.$attrs),n)},methods:{}},N=(n("ac4d"),n("8a81"),{name:"vue-anime-group",mixins:[I],data:function(){return{animes:[]}},render:function(e){var t=this.$slots.default,n=t;return e(this.tag,Object.assign({class:"_vue-anime-group"},this.$attrs),n)},methods:{getTargets:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var i,r=this.animes[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;e.push(s.$el)}}catch(e){n=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return e},addAnime:function(e){this.animes.push(e)}}}),q={name:"vue-anime-timeline",props:Object.assign(T,{timelines:{type:Array}}),data:function(){return{animeInstance:null,animes:[]}},render:function(e){var t=this.$slots.default,n=t;return e(this.tag,this.$attrs,n)},mounted:function(){this.initAnimeTimeLine()},watch:{playing:function(e){e?this.play():this.pause()},seek:function(e){this.animeInstance.seek(e)}},methods:{initAnimeTimeLine:function(){var e=this;if(this.animeInstance=E.a.timeline({direction:this.direction,loop:this.loop,delay:this.delay,autoplay:!1}),this.timelines){var t=!0,n=!1,a=void 0;try{for(var i,r=this.timelines[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;s.targets=this.getTargets(),this.animeInstance.add(s)}}catch(e){n=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}}else for(var o=0;o<this.animes.length;o++)this.animeInstance.add(this.animes[o].getAnimeConfig(this.$props));this.animeInstance.begin=function(t){e.$emit("begin",t)},this.animeInstance.complete=function(t){e.$emit("complete",t)},this.playing&&this.animeInstance.play()},getTargets:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var i,r=this.animes[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;e.push(s.$el)}}catch(e){n=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return e},play:function(){this.animeInstance.play()},pause:function(){this.animeInstance.pause()},restart:function(){this.animeInstance.restart()},addAnime:function(e){this.animes.push(e)}}},M={name:"BannerLaptop",components:{VueAnime:V,VueAnimeGroup:N,VueAnimeTimeLine:q}},z=M,D=(n("dfff"),Object(c["a"])(z,S,A,!1,null,null,null));D.options.__file="BannerLaptop.vue";var F=D.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex items-center justify-center md:justify-start"},[a("div",{staticClass:"flex items-center cursor-pointer transition-all-15 md:hover:scale-110 md:hover:rotate--15"},[a("vue-anime",{staticClass:"flex items-center rotate-0",attrs:{delay:5e3,autoplay:!0,animate:e.animation}},[e.isVue?a("img",{staticClass:"w-16 h-16 my-6",attrs:{src:n("0baf"),alt:"vue_logo"}}):e._e(),e.isLaravel?a("img",{staticClass:"w-16 h-16 mr-8 my-6",attrs:{src:n("8e9b"),alt:"laravel_logo"}}):e._e()])],1)])},Q=[],X={name:"BannerTechLogo",components:{VueAnime:V},props:{type:{required:!0,type:String,validator:function(e){return-1!==["vue","laravel"].indexOf(e)}},animation:{required:!0,type:Object}},computed:{isVue:function(){return"vue"===this.type},isLaravel:function(){return"laravel"===this.type}}},G=X,W=Object(c["a"])(G,Y,Q,!1,null,null,null);W.options.__file="BannerTechLogo.vue";var J=W.exports,R={sentence1Animation1:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.5,duration:100,easing:"easeOutElastic"},{value:1,duration:900,easing:"easeOutElastic"}]},sentence1Animation2:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.3,duration:90,easing:"easeOutElastic"},{value:1,duration:810,easing:"easeOutElastic"}]},sentence2Animation:{translateY:[{value:-25,duration:800,easing:"easeOutQuint"}],opacity:[{value:1,duration:800}]},logoAnimation:{translateY:[{value:-25,duration:800,easing:"easeOutQuint"}],opacity:[{value:1,duration:800}]},laravelVibrateAnimation:{rotate:[{value:0,duration:1e4},{value:"15deg",duration:900},{value:0,duration:900}]},vueVibrateAnimation:{translateX:[{value:2,duration:100},{value:-2,duration:100},{value:2,duration:100},{value:-2,duration:100},{value:2,duration:100},{value:-2,duration:100},{value:0,duration:100}]},downArrowAnimation:{translateY:[{value:10,duration:1e3,easing:"easeInQuad"},{value:0,duration:1e3,easing:"easeOutQuad"}]}},Z={name:"BannerSection",components:{VueAnime:V,VueAnimeGroup:N,VueAnimeTimeLine:q,BannerLaptop:F,BannerTechLogo:J},data:function(){return Object(j["a"])({headerBg:O.a,headerBgReady:"linear-gradient(rgba(26, 36, 47, 0.9), rgba(26, 36, 47, 0.9))",playing:!1,sentence1:"Wij maken webapplicaties",sentence2:"met bewezen moderne technologie",laravelLogoHover:!1,vueLogoHover:!1,downArrowHover:!1},R)},mounted:function(){var e=this,t=new Image;t.src=this.headerBg,this.waitForImageToLoad(t).then(function(){e.headerBgReady="url(".concat(O.a,")"),setTimeout(function(){e.playing=!0},400)})},methods:{words:function(e){return e.split(" ")},waitForImageToLoad:function(e){return new Promise(function(t){e.onload=t})}}},U=Z,K=(n("9f0c"),Object(c["a"])(U,C,_,!1,null,null,null));K.options.__file="BannerSection.vue";var ee=K.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-col mb-12 md:mb-24 mt-12",attrs:{id:"products"}},[e._m(0),n("div",{staticClass:"flex flex-col xl:flex-row px-10 justify-between"},[n("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25 xl:ml-2"},[n("icon-with-text",{attrs:{title:"Webapplicaties",text:"Razendsnelle webapplicaties met een CMS (en/of CRM) op maat. Eindeloos veel integraties met bestaande systemen en datasets.",img:e.webappImg}})],1),n("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25"},[n("icon-with-text",{attrs:{title:"Apps",text:"Progressive web apps voor iOS, Android en het web met ondersteuning voor native features.",img:e.appImg}})],1),n("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25 xl:mr-2"},[n("icon-with-text",{attrs:{title:"UX Design",text:"Design waarbij de gebruiker centraal staat met een sterke focus op eenvoud en gebruiksgemak.",img:e.uxDesignImg}})],1)])])},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-6 md:py-12 text-center"},[e._v("Producten")])])}],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[n("div",{staticClass:"h-32 w-32 fill-current inline-block"},[n("img",{attrs:{src:e.img,alt:"icon"}})]),n("div",{staticClass:"max-w-650 py-2 px-5"},[n("h4",{staticClass:"uppercase text-xl md:text-2xl py-2 text-shark leading-normal font-hind font-extrabold"},[e._v(e._s(e.title))]),n("p",{staticClass:"text-shark leading-normal font-hind font-normal"},[e._v(e._s(e.text))])])])},ie=[],re={name:"IconWithText",props:{title:{type:String,required:!0},text:{type:String,required:!0},img:{type:String,required:!0}}},se=re,oe=(n("07cd"),Object(c["a"])(se,ae,ie,!1,null,null,null));oe.options.__file="IconWithText.vue";var le=oe.exports,ce=n("662c"),ue=n.n(ce),de=n("4f48"),fe=n.n(de),me=n("c737"),pe=n.n(me),ve={name:"ProductSection",components:{IconWithText:le},data:function(){return{webappImg:ue.a,appImg:fe.a,uxDesignImg:pe.a}}},ge=ve,he=Object(c["a"])(ge,te,ne,!1,null,null,null);he.options.__file="ProductSection.vue";var xe=he.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.cases?a("div",{attrs:{id:"cases"}},[a("div",{staticClass:"flex flex-wrap bg-black-dark pt-6 md:pt-12"},[e._m(0),a("div",{staticClass:"flex flex-wrap w-full md:justify-center"},e._l(e.cases,function(t,n){return a("div",{key:"case"+n,staticClass:"flex mt-2 md:mt-0 mx-4 lg:mx-6"},[a("a",{staticClass:"border-b-2 sm:hover:border-tag-grey",class:e.getBorderColor(n),attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selectCase(n)}}},[a("h2",{staticClass:"uppercase text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl py-2 md:pb-4",domProps:{textContent:e._s(t.name)}})])])}))]),a("div",{staticClass:"flex flex-col md:flex-row justify-center bg-black-light"},[a("div",{staticClass:"invisible md:visible flex w-1/2 md:my-24 md:pr-16 relative",attrs:{id:"macbook"}},[a("img",{staticClass:"hidden md:block h-96 relative z-10 max-w-650",attrs:{src:n("b81e"),alt:"MacBook"}}),a("vue-anime",{ref:"screenshot",staticClass:"hidden md:block absolute",staticStyle:{"clip-path":"circle(100% at 50% 50%)","-webkit-clip-path":"circle(100% at 50% 50%)"},attrs:{animate:{clipPath:[{value:"circle(5% at 60% 40%)",duration:200,easing:"easeOutCubic"},{value:"circle(71.3% at 50% 50%)",duration:600,easing:"easeOutCubic"}],webkitClipPath:[{value:"circle(5% at 60% 40%)",duration:200,easing:"easeOutCubic"},{value:"circle(71.3% at 50% 50%)",duration:600,easing:"easeOutCubic"}],opacity:[{value:1,duration:200},{value:0,duration:0},{value:1,duration:600}]}}},[a("img",{staticClass:"h-96  max-w-650",attrs:{src:e.cases[e.selectedCase].screenshot,alt:"Buitenlandportaal_screen"}})])],1),a("div",{staticClass:"flex flex-col w-full md:w-1/2 pt-6 md:pt-24 mx-0 md:pr-4 min-h-500 md:min-h-600"},[a("vue-anime",{ref:"case",staticClass:"flex flex-grow",attrs:{animate:{scale:[{value:.9,duration:200,easing:"easeOutCubic"},{value:1,duration:600,easing:"easeOutCubic"}],opacity:[{value:.1,duration:200,easing:"easeOutCubic"},{value:0,duration:0},{value:1,duration:600,easing:"easeOutCubic"}]},playing:!1}},[a("single-case",{attrs:{name:e.cases[e.selectedCase].name,url:e.cases[e.selectedCase].url,description:e.cases[e.selectedCase].description,tags:e.cases[e.selectedCase].tags}})],1),a("div",{staticClass:"flex flex-none mb-6 md:mb-16 mt-4 mx-4"},[a("button-circle",{staticClass:"mr-3",attrs:{direction:"left"},nativeOn:{click:function(t){e.prevCase()},mouseenter:function(t){e.showPrevCaseHover=!0},mouseleave:function(t){e.showPrevCaseHover=!1}}}),a("button-circle",{attrs:{direction:"right",buttonLabel:"Volgende case",role:"button"},nativeOn:{click:function(t){e.nextCase()},mouseenter:function(t){e.showNextCaseHover=!0},mouseleave:function(t){e.showNextCaseHover=!1}}})],1)],1)])]):e._e()},ye=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex w-full justify-center"},[n("h1",{staticClass:"uppercase text-white py-6 md:py-12 tracking-wide text-3xl lg:text-4xl"},[e._v("Cases")])])}],we=[{name:"Buitenlandportaal",description:"Het Buitenlandportaal, een project van de Sociale Verzekeringsbank,\n                  is een webapplicatie waarbij burgers na geavanceerde verificatie op\n                  een veilige manier documenten kunnen indienen ter controle.",screenshot:"img/screenshots/buitenlandportaal.png",tags:["laravel","bootstrap","devops","security","payments","verification","documents","crm","mollie","search"],url:"https://buitenlandportaal.nl/"},{name:"Stupas",description:"Stupas is een intuïtieve enquête die studenten helpt met het voorbereiden\n                  van hun studie of stage in het buitenland. Op basis van de resultaten krijgt\n                  de student gepersonaliseerde adviezen in een interactief stappenplan.",screenshot:"img/screenshots/stupas.png",tags:["vue.js","bulma","laravel","privacy","ux","performance","sass"],url:"https://stupas.nl/"},{name:"Stem",description:"Stem is een platform waarop bedrijfsaandelen kunnen worden uitgegeven en\n                  verhandeld onder medewerkers. De transacties vinden plaats op het Stellar\n                  blockchain netwerk.",screenshot:"img/screenshots/stem.png",tags:["laravel","vue.js","bootstrap","queue","transactions","payments","blockchain","stellar","security","node.js","stripe","scalable"],url:"https://www.stemapp.io/"},{name:"OnzeZon",description:"OnzeZon is een platform waar coöperatief kan worden geïnvesteerd in zonnepanelen.\n                  Via de webapplicatie kunnen klanten kunnen geworven, contactmomenten worden beheerd\n                  en zonnepanelen worden besteld en geleverd.",screenshot:"img/screenshots/onzezon.png",tags:["bootstrap","laravel","mollie","search","payments","crm","cms","invoices","sass","api"],url:"https://onzezon.nu/"},{name:"CHIMP",description:"CHIMP is een SaaS-platform waar organisaties hun problemen en ideeën kunnen beheren,\n                  prioriteren en begroten.",screenshot:"img/screenshots/chimp.png",tags:["laravel","search","bootstrap","saas","scalable","security","vue.js"],url:"https://chimp.chimpdeck.com/"}],Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex m-2"},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("h1",{staticClass:"uppercase text-caribbean-green text-xl md:text-2xl",domProps:{textContent:e._s(e.name)}})])]),n("div",{staticClass:"flex flex-wrap"},e._l(e.tags,function(e,t){return n("case-tag",{key:"tag"+t,staticClass:"m-2",attrs:{name:e}})})),n("div",{staticClass:"flex m-2"},[n("p",{staticClass:"text-white leading-loose",domProps:{textContent:e._s(e.description)}})])])},_e=[],je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-tag-grey py-1 px-2 rounded"},[n("span",{staticClass:"font-plex italic text-white text-xs",domProps:{textContent:e._s(e.name)}})])},ke=[],Oe={name:"CaseTag",props:{name:{type:String,required:!0}}},Se=Oe,Ae=Object(c["a"])(Se,je,ke,!1,null,null,null);Ae.options.__file="CaseTag.vue";var $e=Ae.exports,Te={name:"SingleCase",components:{CaseTag:$e},props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!1}}},Pe=Te,Ee=Object(c["a"])(Pe,Ce,_e,!1,null,null,null);Ee.options.__file="SingleCase.vue";var Le=Ee.exports,He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticClass:"inline-flex items-center no-underline",nativeOn:{mousedown:function(t){return e.changeMouse(t)},mouseup:function(t){return e.changeMouse(t)}}},[a("button",{staticClass:"text-white bg-caribbean-green h-10 w-10 rounded-full shadow-green move-fast shadow-green focus:outline-none flex items-center justify-center",class:e.buttonClasses},["left"===e.direction?a("img",{attrs:{src:n("491b"),alt:"chevron_prev"}}):"right"===e.direction?a("img",{attrs:{src:n("6b64"),alt:"chevron_next"}}):e._e()]),e.buttonLabel?a("span",{staticClass:"pl-4 uppercase text-tag-grey font-bold font-montserrat opacity-30"},[e._v(e._s(e.buttonLabel))]):e._e()])])},Be=[],Ie={name:"ButtonCircle",props:{direction:{type:String,required:!0,validator:function(e){return-1!==["left","right"].indexOf(e)}},buttonLabel:{type:String,required:!1,default:null}},data:function(){return{mouseDown:!1}},computed:{buttonClasses:function(){var e="";return this.mouseDown&&(e+="move-d-1 shadow-green "),"left"===this.direction&&(e+="md:hover:move-l-2"),"right"===this.direction&&(e+="md:hover:move-r-2"),e}},methods:{changeMouse:function(){this.mouseDown=!this.mouseDown}}},Ve=Ie,Ne=Object(c["a"])(Ve,He,Be,!1,null,null,null);Ne.options.__file="ButtonCircle.vue";var qe=Ne.exports,Me={name:"CaseSection",components:{SingleCase:Le,ButtonCircle:qe,VueAnime:V},data:function(){return{cases:we,selectedCase:0,showPrevCaseHover:!1,showNextCaseHover:!1}},computed:{hoveredNextCase:function(){return this.getNextCase()},hoveredPrevCase:function(){return this.getPrevCase()}},methods:{nextCase:function(){var e=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){e.selectedCase=e.getNextCase()},200)},prevCase:function(){var e=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){e.selectedCase=e.getPrevCase()},200)},selectCase:function(e){var t=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){t.selectedCase=e},200)},getNextCase:function(){return this.selectedCase<this.cases.length-1?this.selectedCase+1:0},getPrevCase:function(){return this.selectedCase>0?this.selectedCase-1:this.cases.length-1},getBorderColor:function(e){return this.selectedCase===e?"border-caribbean-green":this.showPrevCaseHover&&this.hoveredPrevCase===e?"border-tag-grey":this.showNextCaseHover&&this.hoveredNextCase===e?"border-tag-grey":"border-transparent"}}},ze=Me,De=(n("f195"),Object(c["a"])(ze,be,ye,!1,null,"0f0e4b0f",null));De.options.__file="CaseSection.vue";var Fe=De.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col mt-6 md:mt-12 mb-12 md:mb-24 text-center",attrs:{id:"team"}},[e._m(0),n("div",{staticClass:"flex flex-wrap"},e._l(e.members,function(e,t){return n("div",{key:"member"+t,staticClass:"flex lg:w-1/2 xl:w-1/3 flex-grow justify-center"},[n("team-member",{key:"member"+t,staticClass:"p-6 md:p-12",attrs:{image:e.image,name:e.name,role:e.role,expertise:e.expertise}})],1)}))])},Qe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-6 md:py-12"},[e._v("Team")])])}],Xe=n("7af5"),Ge=n.n(Xe),We=n("a56a"),Je=n.n(We),Re=n("35bf"),Ze=n.n(Re),Ue=n("b512"),Ke=n.n(Ue),et=n("e9f0"),tt=n.n(et),nt=n("be1b"),at=n.n(nt),it=[{image:Ge.a,name:"Arie Visser",role:"Full Stack Developer",expertise:"Laravel, Vue.js & Node.js"},{image:Ke.a,name:"Gerwin Overeem",role:"Frontend Developer",expertise:"Vue.js Guru"},{image:Ze.a,name:"Ivo Jonkers",role:"Project Manager",expertise:"Blockchain Researcher"},{image:Je.a,name:"Jaap vd Voort",role:"Graphic Designer",expertise:"UX Designer"},{image:tt.a,name:"Nathan Alder",role:"Frontend Developer",expertise:"Animation Master"},{image:at.a,name:"Sander de Vos",role:"Backend Developer",expertise:"Security & DevOps"}],rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row"},[n("div",{staticClass:"flex mr-4"},[n("img",{staticClass:"rounded-full w-16 h-16 md:w-24 md:h-24",attrs:{src:e.image,alt:"photo_"+e.name}})]),n("div",{staticClass:"flex flex-col w-48"},[n("div",{staticClass:"flex text-caribbean-green font-extrabold uppercase text-left"},[e._v("\n      "+e._s(e.name)+"\n    ")]),n("div",{staticClass:"flex italic text-left"},[e._v("\n      "+e._s(e.role)+"\n    ")]),n("div",{staticClass:"flex text-grey text-left"},[e._v("\n      "+e._s(e.expertise)+"\n    ")])])])},st=[],ot={name:"TeamMember",props:{image:{type:String,required:!0},name:{type:String,required:!0},role:{type:String,required:!0},expertise:{type:String,required:!0}}},lt=ot,ct=Object(c["a"])(lt,rt,st,!1,null,null,null);ct.options.__file="TeamMember.vue";var ut=ct.exports,dt={name:"TeamSection",components:{TeamMember:ut},data:function(){return{members:it}}},ft=dt,mt=Object(c["a"])(ft,Ye,Qe,!1,null,null,null);mt.options.__file="TeamSection.vue";var pt=mt.exports,vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-tangaroa overflow-hidden",attrs:{id:"contact"}},[n("div",{staticClass:"flex flex-wrap container pr-10 lg:px-20 xl:px-10 mx-auto justify-center items-center"},[e._m(0),n("div",{staticClass:"self-stretch hidden lg:flex justify-center relative items-end md:w-1/4 lg:w-1/3 xl:w-2/5"},[n("div",{staticClass:"w-full h-full flex justify-center items-center absolute pin-t z-10"},[n("div",[n("vue-anime",{staticClass:"w-24 h-24 bg-white opacity-25 z-10 rounded-full blur-10",attrs:{playing:e.playing,loop:!0,animate:{translateY:[{value:-400,duration:8e3,easing:"easeOutQuad"}],scale:[{value:4,duration:8e3,easing:"easeOutQuad"}],opacity:[{value:0,duration:0},{value:.15,duration:1e3},{value:0,duration:8e3,easing:"easeOutQuad"}]}}})],1)]),n("img",{staticClass:"mb-16 w-64 relative",attrs:{src:e.coffeeCup,alt:"coffee_cup"}})])]),e._m(1)])},gt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"min-h-450 md:min-h ml-2 sm:ml-0 my-16 w-full md:w-3/4 lg:w-2/3 xl:w-3/5 flex flex-col justify-between"},[a("h1",{staticClass:"uppercase text-3xl lg:text-4xl text-caribbean-green leading-none"},[e._v("Zin in koffie?")]),a("p",{staticClass:"text-white text-lg leading-loose"},[e._v("Wij ook! Een goede kop koffie (of thee) is bij uitstek een prettige situatie om jouw vraag te bespreken. Laten we samen kijken naar de mogelijkheden en het realiseren van het juiste stukje software voor jouw organisatie.")]),a("div",{staticClass:"ml-12 md:ml-24 text-white text-lg"},[a("div",{staticClass:"flex items-center"},[a("img",{attrs:{src:n("7a08"),alt:"phone_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"tel:+3188 004 0600",rel:"noreferrer nofollow"}},[e._v("+31 (0) 88 004 0600")])]),a("div",{staticClass:"flex items-center"},[a("img",{attrs:{src:n("d773"),alt:"email_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"mailto:dev@foryard.tech",rel:"noreferrer nofollow"}},[e._v("dev@foryard.tech")])]),a("div",{staticClass:"flex items-center"},[a("img",{staticClass:"self-start sm:self-auto pt-2 sm:pt-0",attrs:{src:n("e496"),alt:"location_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://goo.gl/maps/HpXX6YLcJtM2",rel:"noreferrer nofollow"}},[e._v("Kuipersstraat 35, 1074 EE Amsterdam")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full bg-tangaroa-darker",attrs:{id:"footer"}},[a("div",{staticClass:"px-10 md:px-20 h-20 flex justify-center lg:justify-start items-center text-white"},[a("div",{staticClass:"mx-4 lg:mr-4 flex items-center"},[a("img",{attrs:{src:n("6bff"),alt:"github_icon"}}),a("a",{staticClass:"py-2 ml-2 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://github.com/fydtech",rel:"noreferrer nofollow"}},[e._v("fydtech")])]),a("div",{staticClass:"mx-4 lg:mr-4 flex items-center relative"},[a("img",{attrs:{src:n("b988"),alt:"twitter_icon"}}),a("a",{staticClass:"py-2 ml-2 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://twitter.com/fydtech",rel:"noreferrer nofollow"}},[e._v("@fydtech")])])])])}],ht=n("b760"),xt=n.n(ht),bt=n("fd90"),yt=n.n(bt),wt={name:"ContactSection",mixins:[yt.a],components:{VueAnime:V,VueAnimeGroup:N,VueAnimeTimeLine:q},data:function(){return{coffeeCup:xt.a,playing:!1}},watch:{"inViewport.now":function(e){this.playing=e}}},Ct=wt,_t=Object(c["a"])(Ct,vt,gt,!1,null,null,null);_t.options.__file="ContactSection.vue";var jt=_t.exports,kt={name:"App",components:{HeaderSection:w,BannerSection:ee,ProductSection:xe,CaseSection:Fe,TeamSection:pt,ContactSection:jt}},Ot=kt,St=Object(c["a"])(Ot,p,v,!1,null,null,null);St.options.__file="Home.vue";var At=St.exports;a["a"].use(m["a"]);var $t=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:At},{path:"/index.html",name:"home",component:At},{path:"*",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}]});a["a"].use(r.a),a["a"].config.productionTip=!1,new a["a"]({router:$t,render:function(e){return e(f)}}).$mount("#app")},"662c":function(e,t,n){e.exports=n.p+"img/webapp.516f9002.svg"},"6b64":function(e,t,n){e.exports=n.p+"img/chevron-next.5161560f.svg"},"6bff":function(e,t,n){e.exports=n.p+"img/github.0dc38941.svg"},7283:function(e,t,n){e.exports=n.p+"img/chevron-down.ffe97e57.svg"},"7a08":function(e,t,n){e.exports=n.p+"img/phone.4181f8ac.svg"},"7af5":function(e,t,n){e.exports=n.p+"img/arie.0219973d.jpg"},8700:function(e,t,n){"use strict";var a=n("b139"),i=n.n(a);i.a},"897e":function(e,t,n){e.exports=n.p+"img/laptop.62b8b036.png"},"8e9b":function(e,t,n){e.exports=n.p+"img/laravel-hover.4d78e9e4.svg"},"9f0c":function(e,t,n){"use strict";var a=n("f694"),i=n.n(a);i.a},a56a:function(e,t,n){e.exports=n.p+"img/jaap.4eeefc4a.png"},b139:function(e,t,n){},b512:function(e,t,n){e.exports=n.p+"img/gerwin.31895c3a.jpg"},b760:function(e,t,n){e.exports=n.p+"img/coffee-shade.0687164f.svg"},b81e:function(e,t,n){e.exports=n.p+"img/MacBook-Gold.2e4a0286.png"},b988:function(e,t,n){e.exports=n.p+"img/twitter.d99eab0a.svg"},be1b:function(e,t,n){e.exports=n.p+"img/sander.60834b69.jpg"},c737:function(e,t,n){e.exports=n.p+"img/ux-design.9a68ec21.svg"},d773:function(e,t,n){e.exports=n.p+"img/email.06686738.svg"},dfff:function(e,t,n){"use strict";var a=n("ebec"),i=n.n(a);i.a},e496:function(e,t,n){e.exports=n.p+"img/location.f4a15cf8.svg"},e891:function(e,t,n){e.exports=n.p+"img/foryard-logo-tech.e79c78aa.svg"},e9f0:function(e,t,n){e.exports=n.p+"img/nathan.5b777d37.png"},ebec:function(e,t,n){},f195:function(e,t,n){"use strict";var a=n("4f1f"),i=n.n(a);i.a},f45d:function(e,t,n){e.exports=n.p+"img/code.725f269d.png"},f694:function(e,t,n){},f9d0:function(e,t,n){e.exports=n.p+"img/header-bg.791dee9b.svg"}});
//# sourceMappingURL=app.70a5f199.js.map