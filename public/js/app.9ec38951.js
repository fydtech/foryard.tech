(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function i(e){return o.p+"js/"+({404:"404"}[e]||e)+"."+{404:"1b031d7c"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07cd":function(e,t,a){"use strict";var n=a("2d9b"),r=a.n(n);r.a},"0baf":function(e,t,a){e.exports=a.p+"img/vue-hover.e4a92530.svg"},"2d9b":function(e,t,a){},"35bf":function(e,t,a){e.exports=a.p+"img/ivo.da80ee5d.jpg"},"491b":function(e,t,a){e.exports=a.p+"img/chevron-prev.c82f3ceb.svg"},"4f48":function(e,t,a){e.exports=a.p+"img/app.de0a5df6.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("f13c"),s=a.n(r),i=a("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],c=(a("8700"),a("2877")),u={},d=Object(c["a"])(u,o,l,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,f=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("HeaderSection"),a("BannerSection"),a("ProductSection"),a("CaseSection"),a("TeamSection"),a("ContactSection")],1)},v=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col sm:flex-row bg-white sm:px-10 lg:px-20"},[e._m(0),a("div",{staticClass:"flex flex-grow items-center justify-center sm:justify-end mb-4 sm:mb-0"},[a("div",{staticClass:"flex mr-4 uppercase"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#cases",duration:500},expression:"{\n          el: '#cases',\n          duration: 500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Cases\n      ")])]),a("div",{staticClass:"flex mx-4 uppercase"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#team",duration:1e3},expression:"{\n          el: '#team',\n          duration: 1000\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Team\n      ")])]),a("div",{staticClass:"flex mx-4 uppercase"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",duration:1500},expression:"{\n          el: '#contact',\n          duration: 1500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Contact\n      ")])])])])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center sm:justify-start"},[n("img",{staticClass:"h-8 md:h-12 my-4",attrs:{src:a("e891"),alt:"logo"}})])}],h={name:"HeaderSection"},b=h,C=Object(c["a"])(b,g,x,!1,null,null,null);C.options.__file="HeaderSection.vue";var w=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative flex flex-col justify-center relative py-16 min-h-banner md:min-h-vh-60 bg-right bg-cover",style:{backgroundImage:e.headerBgReady},attrs:{id:"banner"}},[n("div",{staticClass:"flex flex-wrap justify-between p-5 md:p-8 sm:px-10 lg:px-20",attrs:{id:"split-screen"}},[n("div",{staticClass:"w-full md:w-1/2 text-center md:text-left",attrs:{id:"intro-animation"}},[n("vue-anime-time-line",{ref:"intro",attrs:{playing:e.playing}},[n("h1",[n("vue-anime",{staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1100,autoplay:"true",animate:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.5,duration:100,easing:"easeOutElastic"},{value:1,duration:900,easing:"easeOutElastic"}]}}},[e._v("\n            "+e._s(e.words(e.sentence1)[0]+" ")+"\n          ")]),e._l(e.words(e.sentence1).slice(1),function(t,a){return n("vue-anime",{key:"key"+a,staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1e3,autoplay:"true",offset:"-=500",animate:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.3,duration:90,easing:"easeOutElastic"},{value:1,duration:810,easing:"easeOutElastic"}]}}},[e._v(e._s(t+" ")+"\n          ")])})],2),n("h2",{staticClass:"my-6 leading-none"},e._l(e.words(e.sentence2),function(t,a){return n("vue-anime",{key:"key"+a,staticClass:"opacity-0 inline-block font-sans font-hind font-normal text-white text-xl md:text-2xl lg:text-3xl",attrs:{duration:800,offset:"-=600",autoplay:"true",animate:{translateY:[{value:-25,duration:800,easing:"easeOutQuint"}],opacity:[{value:1,duration:800}]}}},[e._v(e._s(t+" ")+"\n          ")])})),n("div",{staticClass:"flex flex-col justify-center"},[n("vue-anime",{staticClass:"opacity-0 scale-0 flex flex-wrap justify-center md:justify-start",attrs:{duration:800,offset:"+=100",autoplay:"true",animate:{translateY:[{value:-25,duration:800,easing:"easeOutQuint"}],opacity:[{value:1,duration:800}]}}},[n("div",{staticClass:"flex justify-center md:justify-start w-full"},[n("div",{staticClass:"flex items-center justify-center md:justify-start"},[n("div",{staticClass:"flex items-center cursor-pointer transition-all-15 md:hover:scale-110 md:hover:rotate-15",class:{"rotate-0":!1===e.laravelVibrate},on:{mouseenter:function(t){e.laravelLogoHover=!0,e.laravelVibrate=!1},mouseleave:function(t){e.laravelLogoHover=!1}}},[n("vue-anime",{staticClass:"flex items-center rotate-0",attrs:{delay:4e3,autoplay:!0,playing:e.laravelVibrate,loop:!1,animate:{rotate:[{value:0,duration:1e4},{value:"15deg",duration:900},{value:0,duration:900}]}}},[n("img",{staticClass:"w-16 h-16 mr-8 my-6",attrs:{src:a("8e9b"),alt:"laravel_logo"}})])],1)]),n("div",{staticClass:"flex items-center justify-center md:justify-start"},[n("div",{staticClass:"flex items-center cursor-pointer transition-all-15 md:hover:scale-110 md:hover:rotate--15",class:{"rotate-0":!1===e.vueVibrate},on:{mouseenter:function(t){e.vueLogoHover=!0,e.vueVibrate=!1},mouseleave:function(t){e.vueLogoHover=!1}}},[n("vue-anime",{staticClass:"flex items-center",attrs:{delay:5e3,playing:e.vueVibrate,autoplay:!0,loop:!1,animate:{translateX:[{value:2,duration:100},{value:-2,duration:100},{value:2,duration:100},{value:-2,duration:100},{value:2,duration:100},{value:-2,duration:100},{value:0,duration:100}]}}},[n("img",{staticClass:"w-16 h-16 my-6",attrs:{src:a("0baf"),alt:"vue_logo"}})])],1)])]),n("div",{staticClass:"bg-tag-grey p-4 rounded items-center flex scale-x-0 h-16 w-48",class:{"transition-all-15 scale-x-100":e.vueLogoHover||e.laravelLogoHover}},[e.vueLogoHover?n("span",{staticClass:"font-plex italic text-white text-xs hover:text-caribbean-green"},[e._v("\n                Vue.js: The Progressive JavaScript Framework\n              ")]):e._e(),e.laravelLogoHover?n("span",{staticClass:"font-plex italic text-white text-xs hover:text-caribbean-green"},[e._v("\n                Laravel: The PHP Framework For Web Artisans\n              ")]):e._e()])])],1)])],1),n("div",{staticClass:"hidden md:block w-full md:w-1/2 xl:w-2/5 self-stretch flex"},[n("banner-laptop")],1)]),n("div",{staticClass:"absolute pin-b pin-l text-center w-full mb-6",attrs:{id:"next-slide"},on:{mouseenter:function(t){e.downArrowHover=!0},mouseleave:function(t){e.downArrowHover=!1}}},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#products",expression:"'#products'"}],attrs:{href:"#"}},[n("vue-anime",{attrs:{animate:{translateY:[{value:10,duration:1e3,easing:"easeInQuad"},{value:0,duration:1e3,easing:"easeOutQuad"}]},loop:!0,playing:e.downArrowHover}},[n("img",{staticClass:"p-4",attrs:{src:a("7283"),alt:"chevron_down"}})])],1)])])},_=[],k=(a("28a5"),a("f9d0")),j=a.n(k),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative bg-blue z-0"},[e._m(0),n("div",{staticClass:"absolute z-10"},[n("vue-anime",{staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 0, 0 0)"},attrs:{autoplay:!0,playing:!0,loop:!1,delay:3e3,animate:{clipPath:[{value:"polygon(0 0, 100% 0, 100% 0, 0 0)",duration:1e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 20%, 0 15%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 40%, 0 30%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 55%, 0 35%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 55%, 0 35%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 75%, 0 50%)",duration:800,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 75%, 0 50%)",duration:3e3,easing:"linear"},{value:"polygon(0 0, 100% 0, 100% 100%, 0 100%0)",duration:3e3,easing:"linear"}]}}},[n("img",{attrs:{src:a("f45d"),alt:"code"}})])],1)])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute z-0"},[n("img",{attrs:{src:a("897e"),alt:"laptop"}})])}],P=a("43f9"),E={name:"BannerLaptop",components:{VueAnime:P["a"],VueAnimeGroup:P["b"],VueAnimeTimeLine:P["c"]}},H=E,T=(a("dfff"),Object(c["a"])(H,S,O,!1,null,null,null));T.options.__file="BannerLaptop.vue";var A=T.exports,V={name:"BannerSection",components:{VueAnime:P["a"],VueAnimeGroup:P["b"],VueAnimeTimeLine:P["c"],BannerLaptop:A},data:function(){return{headerBg:j.a,headerBgReady:"linear-gradient(rgba(26, 36, 47, 0.9), rgba(26, 36, 47, 0.9))",playing:!1,sentence1:"Wij maken webapplicaties",sentence2:"met bewezen moderne technologie",laravelLogoHover:!1,vueLogoHover:!1,laravelVibrate:!0,vueVibrate:!0,downArrowHover:!1}},mounted:function(){var e=this,t=new Image;t.src=this.headerBg,this.waitForImageToLoad(t).then(function(){e.headerBgReady="url(".concat(j.a,")"),e.playing=!0})},methods:{words:function(e){return e.split(" ")},waitForImageToLoad:function(e){return new Promise(function(t){e.onload=t})}}},$=V,L=(a("9f0c"),Object(c["a"])($,y,_,!1,null,null,null));L.options.__file="BannerSection.vue";var B=L.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-col mb-24 mt-12",attrs:{id:"products"}},[e._m(0),a("div",{staticClass:"flex flex-col xl:flex-row px-10 justify-between"},[a("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25 xl:ml-2"},[a("icon-with-text",{attrs:{title:"Webapplicaties",text:"Razendsnelle webapplicaties met een CMS (en/of CRM) op maat. Eindeloos veel integraties met bestaande systemen en datasets.",img:e.webappImg}})],1),a("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25"},[a("icon-with-text",{attrs:{title:"Apps",text:"Progressive web apps voor iOS, Android en het web met ondersteuning voor native features.",img:e.appImg}})],1),a("div",{staticClass:"flex-1 xl:w-1/4 xl:max-w-25 xl:mr-2"},[a("icon-with-text",{attrs:{title:"UX Design",text:"Design waarbij de gebruiker centraal staat met een sterke focus op eenvoud en gebruiksgemak.",img:e.uxDesignImg}})],1)])])},q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-1"},[a("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-12 text-center"},[e._v("Producten")])])}],z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("div",{staticClass:"h-32 w-32 fill-current inline-block"},[a("img",{attrs:{src:e.img,alt:"icon"}})]),a("div",{staticClass:"max-w-650 py-2 px-5"},[a("h4",{staticClass:"uppercase text-xl md:text-2xl py-2 text-shark leading-normal font-hind font-extrabold"},[e._v(e._s(e.title))]),a("p",{staticClass:"text-shark leading-normal font-hind font-normal"},[e._v(e._s(e.text))])])])},N=[],D={name:"IconWithText",props:{title:{type:String,required:!0},text:{type:String,required:!0},img:{type:String,required:!0}}},I=D,F=(a("07cd"),Object(c["a"])(I,z,N,!1,null,null,null));F.options.__file="IconWithText.vue";var Q=F.exports,G=a("662c"),W=a.n(G),Y=a("4f48"),J=a.n(Y),R=a("c737"),X=a.n(R),Z={name:"ProductSection",components:{IconWithText:Q},data:function(){return{webappImg:W.a,appImg:J.a,uxDesignImg:X.a}}},U=Z,K=Object(c["a"])(U,M,q,!1,null,null,null);K.options.__file="ProductSection.vue";var ee=K.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.cases?n("div",{attrs:{id:"cases"}},[n("div",{staticClass:"flex flex-wrap bg-black-dark pt-12"},[e._m(0),n("div",{staticClass:"flex flex-wrap w-full md:justify-center"},e._l(e.cases,function(t,a){return n("div",{key:"case"+a,staticClass:"flex mt-2 md:mt-0 mx-4 lg:mx-6"},[n("a",{staticClass:"border-b-2 sm:hover:border-tag-grey",class:e.getBorderColor(a),attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selectCase(a)}}},[n("h2",{staticClass:"uppercase text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl py-2 md:pb-4",domProps:{textContent:e._s(t.name)}})])])}))]),n("div",{staticClass:"flex flex-col md:flex-row justify-center bg-black-light"},[n("div",{staticClass:"invisible md:visible flex w-1/2 md:my-24 md:pr-16 relative",attrs:{id:"macbook"}},[n("img",{staticClass:"hidden md:block h-96 relative z-10 max-w-650",attrs:{src:a("b81e"),alt:"MacBook"}}),n("vue-anime",{ref:"screenshot",staticClass:"hidden md:block absolute",staticStyle:{"clip-path":"circle(100% at 50% 50%)"},attrs:{animate:{clipPath:[{value:"circle(5% at 60% 40%)",duration:200,easing:"easeOutCubic"},{value:"circle(71.3% at 50% 50%)",duration:600,easing:"easeOutCubic"}],opacity:[{value:1,duration:200},{value:0,duration:0},{value:1,duration:600}]}}},[n("img",{staticClass:"h-96  max-w-650",attrs:{src:e.cases[e.selectedCase].screenshot,alt:"Buitenlandportaal_screen"}})])],1),n("div",{staticClass:"flex flex-col w-full md:w-1/2 pt-12 md:pt-24 mx-0 md:pr-4 min-h-600"},[n("vue-anime",{ref:"case",staticClass:"flex flex-grow",attrs:{animate:{scale:[{value:.9,duration:200,easing:"easeOutCubic"},{value:1,duration:600,easing:"easeOutCubic"}],opacity:[{value:.1,duration:200,easing:"easeOutCubic"},{value:0,duration:0},{value:1,duration:600,easing:"easeOutCubic"}]},playing:!1}},[n("single-case",{attrs:{name:e.cases[e.selectedCase].name,url:e.cases[e.selectedCase].url,description:e.cases[e.selectedCase].description,tags:e.cases[e.selectedCase].tags}})],1),n("div",{staticClass:"flex flex-none mb-16 mt-4 mx-4"},[n("button-circle",{staticClass:"mr-3",attrs:{direction:"left"},nativeOn:{click:function(t){e.prevCase()},mouseenter:function(t){e.showPrevCaseHover=!0},mouseleave:function(t){e.showPrevCaseHover=!1}}}),n("button-circle",{attrs:{direction:"right",buttonLabel:"Volgende case",role:"button"},nativeOn:{click:function(t){e.nextCase()},mouseenter:function(t){e.showNextCaseHover=!0},mouseleave:function(t){e.showNextCaseHover=!1}}})],1)],1)])]):e._e()},ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex w-full justify-center"},[a("h1",{staticClass:"uppercase text-white py-12 tracking-wide text-3xl lg:text-4xl"},[e._v("Cases")])])}],ne=[{name:"Buitenlandportaal",description:"Het Buitenlandportaal, een project van de Sociale Verzekeringsbank,\n                  is een webapplicatie waarbij burgers na geavanceerde verificatie op\n                  een veilige manier documenten kunnen indienen ter controle.",screenshot:"img/screenshots/buitenlandportaal.png",tags:["laravel","bootstrap","devops","security","payments","verification","documents","crm","mollie","search"],url:"https://buitenlandportaal.nl/"},{name:"Stupas",description:"Stupas is een intuïtieve enquête die studenten helpt met het voorbereiden\n                  van hun studie of stage in het buitenland. Op basis van de resultaten krijgt\n                  de student gepersonaliseerde adviezen in een interactief stappenplan.",screenshot:"img/screenshots/stupas.png",tags:["vue.js","bulma","laravel","privacy","ux","performance","sass"],url:"https://stupas.nl/"},{name:"Stem",description:"Stem is een platform waarop bedrijfsaandelen kunnen worden uitgegeven en\n                  verhandeld onder medewerkers. De transacties vinden plaats op het Stellar\n                  blockchain netwerk.",screenshot:"img/screenshots/stem.png",tags:["laravel","vue.js","bootstrap","queue","transactions","payments","blockchain","stellar","security","node.js","stripe","scalable"],url:"https://www.stemapp.io/"},{name:"OnzeZon",description:"OnzeZon is een platform waar coöperatief kan worden geïnvesteerd in zonnepanelen.\n                  Via de webapplicatie kunnen klanten kunnen geworven, contactmomenten worden beheerd\n                  en zonnepanelen worden besteld en geleverd.",screenshot:"img/screenshots/onzezon.png",tags:["bootstrap","laravel","mollie","search","payments","crm","cms","invoices","sass","api"],url:"https://onzezon.nu/"},{name:"CHIMP",description:"CHIMP is een SaaS-platform waar organisaties hun problemen en ideeën kunnen beheren,\n                  prioriteren en begroten.",screenshot:"img/screenshots/chimp.png",tags:["laravel","search","bootstrap","saas","scalable","security","vue.js"],url:"https://chimp.chimpdeck.com/"}],re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[a("div",{staticClass:"flex m-2"},[a("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[a("h1",{staticClass:"uppercase text-caribbean-green text-xl md:text-2xl",domProps:{textContent:e._s(e.name)}})])]),a("div",{staticClass:"flex flex-wrap"},e._l(e.tags,function(e,t){return a("case-tag",{key:"tag"+t,staticClass:"m-2",attrs:{name:e}})})),a("div",{staticClass:"flex m-2"},[a("p",{staticClass:"text-white leading-loose",domProps:{textContent:e._s(e.description)}})])])},se=[],ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-tag-grey py-1 px-2 rounded"},[a("span",{staticClass:"font-plex italic text-white text-xs",domProps:{textContent:e._s(e.name)}})])},oe=[],le={name:"CaseTag",props:{name:{type:String,required:!0}}},ce=le,ue=Object(c["a"])(ce,ie,oe,!1,null,null,null);ue.options.__file="CaseTag.vue";var de=ue.exports,pe={name:"SingleCase",components:{CaseTag:de},props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!1}}},fe=pe,me=Object(c["a"])(fe,re,se,!1,null,null,null);me.options.__file="SingleCase.vue";var ve=me.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{staticClass:"inline-flex items-center no-underline",nativeOn:{mousedown:function(t){return e.changeMouse(t)},mouseup:function(t){return e.changeMouse(t)}}},[n("button",{staticClass:"text-white bg-caribbean-green h-10 w-10 rounded-full shadow-green move-fast shadow-green focus:outline-none flex items-center justify-center",class:e.buttonClasses},["left"===e.direction?n("img",{attrs:{src:a("491b"),alt:"chevron_prev"}}):"right"===e.direction?n("img",{attrs:{src:a("6b64"),alt:"chevron_next"}}):e._e()]),e.buttonLabel?n("span",{staticClass:"pl-4 uppercase text-tag-grey font-bold font-montserrat opacity-30"},[e._v(e._s(e.buttonLabel))]):e._e()])])},xe=[],he={name:"ButtonCircle",props:{direction:{type:String,required:!0,validator:function(e){return-1!==["left","right"].indexOf(e)}},buttonLabel:{type:String,required:!1,default:null}},data:function(){return{mouseDown:!1}},computed:{buttonClasses:function(){var e="";return this.mouseDown&&(e+="move-d-1 shadow-green "),"left"===this.direction&&(e+="md:hover:move-l-2"),"right"===this.direction&&(e+="md:hover:move-r-2"),e}},methods:{changeMouse:function(){this.mouseDown=!this.mouseDown}}},be=he,Ce=Object(c["a"])(be,ge,xe,!1,null,null,null);Ce.options.__file="ButtonCircle.vue";var we=Ce.exports,ye={name:"CaseSection",components:{SingleCase:ve,ButtonCircle:we,VueAnime:P["a"]},data:function(){return{cases:ne,selectedCase:0,showPrevCaseHover:!1,showNextCaseHover:!1}},computed:{hoveredNextCase:function(){return this.getNextCase()},hoveredPrevCase:function(){return this.getPrevCase()}},methods:{nextCase:function(){var e=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){e.selectedCase=e.getNextCase()},200)},prevCase:function(){var e=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){e.selectedCase=e.getPrevCase()},200)},selectCase:function(e){var t=this;this.$refs.case.restart(),this.$refs.screenshot.restart(),setTimeout(function(){t.selectedCase=e},200)},getNextCase:function(){return this.selectedCase<this.cases.length-1?this.selectedCase+1:0},getPrevCase:function(){return this.selectedCase>0?this.selectedCase-1:this.cases.length-1},getBorderColor:function(e){return this.selectedCase===e?"border-caribbean-green":this.showPrevCaseHover&&this.hoveredPrevCase===e?"border-tag-grey":this.showNextCaseHover&&this.hoveredNextCase===e?"border-tag-grey":"border-transparent"}}},_e=ye,ke=(a("bf0b"),Object(c["a"])(_e,te,ae,!1,null,"dac48164",null));ke.options.__file="CaseSection.vue";var je=ke.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col mt-12 mb-24 text-center",attrs:{id:"team"}},[e._m(0),a("div",{staticClass:"flex flex-wrap"},e._l(e.members,function(e,t){return a("div",{key:"member"+t,staticClass:"flex lg:w-1/2 xl:w-1/3 flex-grow justify-center"},[a("team-member",{key:"member"+t,staticClass:"p-10",attrs:{image:e.image,name:e.name,role:e.role,expertise:e.expertise}})],1)}))])},Oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-1"},[a("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-12"},[e._v("Team")])])}],Pe=a("7af5"),Ee=a.n(Pe),He=a("a56a"),Te=a.n(He),Ae=a("35bf"),Ve=a.n(Ae),$e=a("b512"),Le=a.n($e),Be=a("e9f0"),Me=a.n(Be),qe=a("be1b"),ze=a.n(qe),Ne=[{image:Ee.a,name:"Arie Visser",role:"Full Stack Developer",expertise:"Laravel, Vue.js & Node.js"},{image:Le.a,name:"Gerwin Overeem",role:"Frontend Developer",expertise:"Vue.js Guru"},{image:Ve.a,name:"Ivo Jonkers",role:"Project Manager",expertise:"Blockchain Researcher"},{image:Te.a,name:"Jaap vd Voort",role:"Graphic Designer",expertise:"UX Designer"},{image:Me.a,name:"Nathan Alder",role:"Frontend Developer",expertise:"Animation Master"},{image:ze.a,name:"Sander de Vos",role:"Backend Developer",expertise:"Security & DevOps"}],De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"flex mr-4"},[a("img",{staticClass:"rounded-full w-16 h-16 md:w-24 md:h-24",attrs:{src:e.image,alt:"photo_"+e.name}})]),a("div",{staticClass:"flex flex-col w-48"},[a("div",{staticClass:"flex text-caribbean-green font-extrabold uppercase text-left"},[e._v("\n      "+e._s(e.name)+"\n    ")]),a("div",{staticClass:"flex italic text-left"},[e._v("\n      "+e._s(e.role)+"\n    ")]),a("div",{staticClass:"flex text-grey text-left"},[e._v("\n      "+e._s(e.expertise)+"\n    ")])])])},Ie=[],Fe={name:"TeamMember",props:{image:{type:String,required:!0},name:{type:String,required:!0},role:{type:String,required:!0},expertise:{type:String,required:!0}}},Qe=Fe,Ge=Object(c["a"])(Qe,De,Ie,!1,null,null,null);Ge.options.__file="TeamMember.vue";var We=Ge.exports,Ye={name:"TeamSection",components:{TeamMember:We},data:function(){return{members:Ne}}},Je=Ye,Re=Object(c["a"])(Je,Se,Oe,!1,null,null,null);Re.options.__file="TeamSection.vue";var Xe=Re.exports,Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-tangaroa overflow-hidden",attrs:{id:"contact"}},[a("div",{staticClass:"flex flex-wrap container pr-10 lg:px-20 xl:px-10 mx-auto justify-center items-center"},[e._m(0),a("div",{staticClass:"self-stretch hidden lg:flex justify-center relative items-end md:w-1/4 lg:w-1/3 xl:w-2/5"},[a("div",{staticClass:"w-full h-full flex justify-center items-center absolute pin-t z-10"},[a("div",[a("vue-anime",{staticClass:"w-24 h-24 bg-white opacity-25 z-10 rounded-full blur-10",attrs:{playing:e.playing,loop:!0,animate:{translateY:[{value:-400,duration:8e3,easing:"easeOutQuad"}],scale:[{value:4,duration:8e3,easing:"easeOutQuad"}],opacity:[{value:0,duration:0},{value:.15,duration:1e3},{value:0,duration:8e3,easing:"easeOutQuad"}]}}})],1)]),a("img",{staticClass:"mb-16 w-64 relative",attrs:{src:e.coffeeCup,alt:"coffee_cup"}})])]),e._m(1)])},Ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"min-h-450 md:min-h ml-2 sm:ml-0 my-16 w-full md:w-3/4 lg:w-2/3 xl:w-3/5 flex flex-col justify-between"},[n("h1",{staticClass:"uppercase text-3xl lg:text-4xl text-caribbean-green leading-none"},[e._v("Zin in koffie?")]),n("p",{staticClass:"text-white text-lg leading-loose"},[e._v("Wij ook! Een goede kop koffie (of thee) is bij uitstek een prettige situatie om jouw vraag te bespreken. Laten we samen kijken naar de mogelijkheden en het realiseren van het juiste stukje software voor jouw organisatie.")]),n("div",{staticClass:"ml-12 md:ml-24 text-white text-lg"},[n("div",{staticClass:"flex items-center"},[n("img",{attrs:{src:a("7a08"),alt:"phone_icon"}}),n("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"tel:+3188 004 0600",rel:"noreferrer nofollow"}},[e._v("+31 (0) 88 004 0600")])]),n("div",{staticClass:"flex items-center"},[n("img",{attrs:{src:a("d773"),alt:"email_icon"}}),n("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"mailto:dev@foryard.tech",rel:"noreferrer nofollow"}},[e._v("dev@foryard.tech")])]),n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"self-start sm:self-auto pt-2 sm:pt-0",attrs:{src:a("e496"),alt:"location_icon"}}),n("a",{staticClass:"py-2 ml-6 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://goo.gl/maps/HpXX6YLcJtM2",rel:"noreferrer nofollow"}},[e._v("Kuipersstraat 35, 1074 EE Amsterdam")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full bg-tangaroa-darker",attrs:{id:"footer"}},[n("div",{staticClass:"px-10 md:px-20 h-20 flex justify-center lg:justify-start items-center text-white"},[n("div",{staticClass:"mx-4 lg:mr-4 flex items-center"},[n("img",{attrs:{src:a("6bff"),alt:"github_icon"}}),n("a",{staticClass:"py-2 ml-2 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://github.com/fydtech",rel:"noreferrer nofollow"}},[e._v("fydtech")])]),n("div",{staticClass:"mx-4 lg:mr-4 flex items-center relative"},[n("img",{attrs:{src:a("b988"),alt:"twitter_icon"}}),n("a",{staticClass:"py-2 ml-2 text-white no-underline hover:text-caribbean-green",attrs:{href:"https://twitter.com/fydtech",rel:"noreferrer nofollow"}},[e._v("@fydtech")])])])])}],Ke=a("b760"),et=a.n(Ke),tt=a("fd90"),at=a.n(tt),nt={name:"ContactSection",mixins:[at.a],components:{VueAnime:P["a"],VueAnimeGroup:P["b"],VueAnimeTimeLine:P["c"]},data:function(){return{coffeeCup:et.a,playing:!1}},watch:{"inViewport.now":function(e){this.playing=e}}},rt=nt,st=Object(c["a"])(rt,Ze,Ue,!1,null,null,null);st.options.__file="ContactSection.vue";var it=st.exports,ot={name:"App",components:{HeaderSection:w,BannerSection:B,ProductSection:ee,CaseSection:je,TeamSection:Xe,ContactSection:it}},lt=ot,ct=Object(c["a"])(lt,m,v,!1,null,null,null);ct.options.__file="Home.vue";var ut=ct.exports;n["a"].use(f["a"]);var dt=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ut},{path:"*",component:function(){return a.e("404").then(a.bind(null,"8cdb"))}}]});n["a"].use(s.a),n["a"].config.productionTip=!1,new n["a"]({router:dt,render:function(e){return e(p)}}).$mount("#app")},"662c":function(e,t,a){e.exports=a.p+"img/webapp.516f9002.svg"},"6b64":function(e,t,a){e.exports=a.p+"img/chevron-next.5161560f.svg"},"6bff":function(e,t,a){e.exports=a.p+"img/github.0dc38941.svg"},7283:function(e,t,a){e.exports=a.p+"img/chevron-down.ffe97e57.svg"},"7a08":function(e,t,a){e.exports=a.p+"img/phone.4181f8ac.svg"},"7af5":function(e,t,a){e.exports=a.p+"img/arie.0219973d.jpg"},8700:function(e,t,a){"use strict";var n=a("b139"),r=a.n(n);r.a},"897e":function(e,t,a){e.exports=a.p+"img/laptop.62b8b036.png"},"8e9b":function(e,t,a){e.exports=a.p+"img/laravel-hover.4d78e9e4.svg"},"9f0c":function(e,t,a){"use strict";var n=a("f694"),r=a.n(n);r.a},a56a:function(e,t,a){e.exports=a.p+"img/jaap.4eeefc4a.png"},b139:function(e,t,a){},b512:function(e,t,a){e.exports=a.p+"img/gerwin.31895c3a.jpg"},b760:function(e,t,a){e.exports=a.p+"img/coffee-shade.0687164f.svg"},b81e:function(e,t,a){e.exports=a.p+"img/MacBook-Gold.2e4a0286.png"},b988:function(e,t,a){e.exports=a.p+"img/twitter.d99eab0a.svg"},be1b:function(e,t,a){e.exports=a.p+"img/sander.60834b69.jpg"},bf0b:function(e,t,a){"use strict";var n=a("fec1"),r=a.n(n);r.a},c737:function(e,t,a){e.exports=a.p+"img/ux-design.9a68ec21.svg"},d773:function(e,t,a){e.exports=a.p+"img/email.06686738.svg"},dfff:function(e,t,a){"use strict";var n=a("ebec"),r=a.n(n);r.a},e496:function(e,t,a){e.exports=a.p+"img/location.f4a15cf8.svg"},e891:function(e,t,a){e.exports=a.p+"img/foryard-logo-tech.e79c78aa.svg"},e9f0:function(e,t,a){e.exports=a.p+"img/nathan.5b777d37.png"},ebec:function(e,t,a){},f45d:function(e,t,a){e.exports=a.p+"img/code.725f269d.png"},f694:function(e,t,a){},f9d0:function(e,t,a){e.exports=a.p+"img/header-bg.791dee9b.svg"},fec1:function(e,t,a){}});
//# sourceMappingURL=app.9ec38951.js.map