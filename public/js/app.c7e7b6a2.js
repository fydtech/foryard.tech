(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)i=o[u],s[i]&&f.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function i(e){return o.p+"js/"+({404:"404"}[e]||e)+"."+{404:"67ef1063"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=a);var r,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,l.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0633":function(e,t,n){},"07cd":function(e,t,n){"use strict";var a=n("2d9b"),s=n.n(a);s.a},"0baf":function(e,t,n){e.exports=n.p+"img/vue-hover.e4a92530.svg"},"0d7a":function(e,t,n){e.exports=n.p+"img/laravel.9d7cf284.svg"},"12aa":function(e,t,n){e.exports=n.p+"img/vue.b62e905e.svg"},"2d9b":function(e,t,n){},"35bf":function(e,t,n){e.exports=n.p+"img/ivo.48f106fb.jpg"},"491b":function(e,t,n){e.exports=n.p+"img/chevron-prev.c82f3ceb.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=n("f13c"),r=n.n(s),i=n("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],c=(n("8700"),n("2877")),u={},d=Object(c["a"])(u,o,l,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("HeaderSection"),n("BannerSection"),n("ProductSection"),n("CaseSection"),n("TeamSection"),n("ContactSection")],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col sm:flex-row bg-white sm:px-10 lg:px-20"},[e._m(0),n("div",{staticClass:"flex flex-grow items-center justify-center sm:justify-end mb-4 sm:mb-0"},[n("div",{staticClass:"flex mr-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#cases",duration:500},expression:"{\n          el: '#cases',\n          duration: 500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Cases\n      ")])]),n("div",{staticClass:"flex mx-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#team",duration:1e3},expression:"{\n          el: '#team',\n          duration: 1000\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Team\n      ")])]),n("div",{staticClass:"flex mx-4 uppercase"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",duration:1500},expression:"{\n          el: '#contact',\n          duration: 1500\n        }"}],staticClass:"no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1",attrs:{href:"#"}},[e._v("\n        Contact\n      ")])])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center sm:justify-start"},[a("img",{staticClass:"h-8 md:h-12 my-4",attrs:{src:n("e891")}})])}],h={name:"HeaderSection"},b=h,C=Object(c["a"])(b,g,x,!1,null,null,null);C.options.__file="HeaderSection.vue";var w=C.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col relative py-24 pl-10 h-banner",attrs:{id:"banner"}},[a("div",{staticClass:"flex-1 text-center md:text-left m-8"},[a("vue-anime-time-line",[a("h1",[a("vue-anime",{staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1100,autoplay:"true",animate:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.5,duration:100,easing:"easeOutElastic"},{value:1,duration:900,easing:"easeOutElastic"}]}}},[e._v(e._s(e.words(e.sentence1)[0]+" ")+"\n        ")]),e._l(e.words(e.sentence1).slice(1),function(t,n){return a("vue-anime",{key:"key"+n,staticClass:"opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl",attrs:{duration:1e3,autoplay:"true",offset:"-=500",animate:{translateY:[{value:-25,duration:1e3,easing:"easeOutQuint"}],opacity:[{value:1,duration:1e3}],scale:[{value:1.3,duration:90,easing:"easeOutElastic"},{value:1,duration:810,easing:"easeOutElastic"}]}}},[e._v(e._s(t+" ")+"\n        ")])})],2),a("h2",{staticClass:"mt-6 leading-none"},e._l(e.words(e.sentence2),function(t,n){return a("vue-anime",{key:"key"+n,staticClass:"opacity-0 inline-block font-sans font-hind font-normal text-white text-xl md:text-2xl lg:text-3xl",attrs:{duration:800,offset:"-=600",autoplay:"true",animate:{translateY:[{value:-25,duration:800,easing:"easeOutQuint"}],opacity:[{value:1,duration:800}]}}},[e._v(e._s(t+" ")+"\n        ")])}))])],1),a("div",{staticClass:"flex flex-row m-10 justify-center md:justify-start"},[a("div",{staticClass:"flex mr-10",on:{mouseenter:function(t){e.laravelLogoHover=!0},mouseleave:function(t){e.laravelLogoHover=!1}}},[e.laravelLogoHover?a("img",{attrs:{src:n("8e9b")}}):a("img",{attrs:{src:n("0d7a")}})]),a("div",{staticClass:"flex",on:{mouseenter:function(t){e.vueLogoHover=!0},mouseleave:function(t){e.vueLogoHover=!1}}},[e.vueLogoHover?a("img",{attrs:{src:n("0baf")}}):a("img",{attrs:{src:n("12aa")}})])]),a("div",{staticClass:"flex text-center mt-10 md:mt-0"},[a("div",{staticClass:"flex-1"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#products",expression:"'#products'"}],attrs:{href:"#"}},[a("vue-anime",{attrs:{animate:{translateY:[{value:10,duration:1e3,easing:"easeInQuad"},{value:0,duration:1e3,easing:"easeOutQuad"}]},loop:!0}},[a("img",{staticClass:"p-4",attrs:{src:n("7283")}})])],1)])])])},y=[],k=(n("28a5"),n("43f9")),j={name:"BannerSection",components:{VueAnime:k["a"],VueAnimeGroup:k["b"],VueAnimeTimeLine:k["c"]},data:function(){return{sentence1:"Wij maken webapplicaties",sentence2:"met bewezen moderne technologie",laravelLogoHover:!1,vueLogoHover:!1}},mounted:function(){var e=this;setTimeout(function(){e.laravelLogoHover=!0},2500),setTimeout(function(){e.laravelLogoHover=!1},2700),setTimeout(function(){e.vueLogoHover=!0},2900),setTimeout(function(){e.vueLogoHover=!1},3100)},methods:{words:function(e){return e.split(" ")}}},S=j,O=(n("9f0c"),Object(c["a"])(S,_,y,!1,null,null,null));O.options.__file="BannerSection.vue";var E=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-col mb-24 mt-12",attrs:{id:"products"}},[e._m(0),n("div",{staticClass:"flex flex-col xl:flex-row px-10"},[n("div",{staticClass:"flex-1 xl:w-1/4"},[n("icon-with-text",{attrs:{title:"Webapplicaties",text:"Razendsnelle webapplicaties met een CMS (en/of CRM) op maat. Eindeloos veel integraties met bestaande systemen en datasets."}})],1),n("div",{staticClass:"flex-1 xl:w-1/4"},[n("icon-with-text",{attrs:{title:"Apps",text:"Progressive web apps voor iOS, Android en het web met ondersteuning voor native features."}})],1),n("div",{staticClass:"flex-1 xl:w-1/4"},[n("icon-with-text",{attrs:{title:"UX Design",text:"Design waarbij de gebruiker centraal staat met een sterke focus op eenvoud en gebruiksgemak."}})],1)])])},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-12 text-center"},[e._v("Producten")])])}],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[e._m(0),n("div",{staticClass:"max-w-650 py-2 px-5"},[n("h4",{staticClass:"uppercase py-2 text-shark leading-normal font-hind font-extrabold"},[e._v(e._s(e.title))]),n("p",{staticClass:"text-shark leading-normal font-hind font-normal"},[e._v(e._s(e.text))])])])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-32 w-32 fill-current inline-block"},[a("img",{attrs:{src:n("7c8d")}})])}],$={name:"IconWithText",props:{title:{type:String,required:!0},text:{type:String,required:!0}}},M=$,B=(n("07cd"),Object(c["a"])(M,T,L,!1,null,null,null));B.options.__file="IconWithText.vue";var N=B.exports,q={name:"ProductSection",components:{IconWithText:N}},A=q,D=Object(c["a"])(A,P,H,!1,null,null,null);D.options.__file="ProductSection.vue";var z=D.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.cases?a("div",{attrs:{id:"cases"}},[a("div",{staticClass:"flex flex-wrap bg-black-dark pt-12"},[e._m(0),a("div",{staticClass:"flex flex-wrap w-full md:justify-center"},e._l(e.cases,function(t,n){return a("div",{key:"case"+n,staticClass:"flex mt-2 md:mt-0 mx-4 lg:mx-6"},[a("a",{staticClass:"border-b-2 hover:border-tag-grey",class:e.getBorderColor(n),attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selectedCase=n}}},[a("h2",{staticClass:"uppercase text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl py-2 md:pb-4",domProps:{textContent:e._s(t.name)}})])])}))]),a("div",{staticClass:"flex flex-col md:flex-row justify-center bg-black-light"},[a("div",{staticClass:"invisible md:visible flex w-1/2 md:my-24 md:pr-16 relative",attrs:{id:"macbook"}},[a("img",{staticClass:"hidden md:block h-96 relative z-10 max-w-650",attrs:{src:n("b81e"),alt:"MacBook"}}),a("img",{staticClass:"hidden md:block h-96 absolute max-w-650",attrs:{src:e.cases[e.selectedCase].screenshot,alt:"Buitenlandportaal_screen"}})]),a("div",{staticClass:"flex flex-col w-full md:w-1/2 pt-12 md:pt-24 px-8 md:px-0"},[a("single-case",{attrs:{name:e.cases[e.selectedCase].name,description:e.cases[e.selectedCase].description,tags:e.cases[e.selectedCase].tags}}),a("div",{staticClass:"flex flex-none mb-16 mt-4"},[a("button-circle",{staticClass:"mr-3",attrs:{direction:"left"},nativeOn:{click:function(t){e.prevCase()},mouseenter:function(t){e.showPrevCaseHover=!0},mouseleave:function(t){e.showPrevCaseHover=!1}}}),a("button-circle",{attrs:{direction:"right",buttonLabel:"Volgende case",role:"button"},nativeOn:{click:function(t){e.nextCase()},mouseenter:function(t){e.showNextCaseHover=!0},mouseleave:function(t){e.showNextCaseHover=!1}}})],1)],1)])]):e._e()},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex w-full justify-center"},[n("h1",{staticClass:"uppercase text-white py-12 tracking-wide text-3xl lg:text-4xl"},[e._v("Cases")])])}],W=[{name:"Buitenlandportaal",description:"Het Buitenlandportaal, een project van de Sociale Verzekeringsbank,\n                  is een webapplicatie waarbij burgers na geavanceerde verificatie op\n                  een veilige manier documenten kunnen indienen ter controle.",screenshot:"img/screenshots/buitenlandportaal.png",tags:["laravel","bootstrap","devops","security","payments","verification","documents","crm","mollie","search"]},{name:"Stupas",description:"Stupas is een intuïtieve enquête die studenten helpt met het voorbereiden\n                  van hun studie of stage in het buitenland. Op basis van de resultaten krijgt\n                  de student gepersonaliseerde adviezen in een interactief stappenplan.",screenshot:"img/screenshots/stupas.png",tags:["vue.js","bulma","laravel","privacy","ux","performance","sass"]},{name:"Stem",description:"Stem is een platform waarop bedrijfsaandelen kunnen worden uitgegeven en\n                  verhandeld onder medewerkers. De transacties vinden plaats op het Stellar\n                  blockchain netwerk.",screenshot:"img/screenshots/stem.png",tags:["laravel","vue.js","bootstrap","queue","transactions","payments","blockchain","stellar","security","node.js","stripe","scalable"]},{name:"OnzeZon",description:"OnzeZon is een platform waar coöperatief kan worden geïnvesteerd in zonnepanelen.\n                  Via de webapplicatie kunnen klanten kunnen geworven, contactmomenten worden beheerd\n                  en zonnepanelen worden besteld en geleverd.",screenshot:"img/screenshots/onzezon.png",tags:["bootstrap","laravel","mollie","search","payments","crm","cms","invoices","sass","api"]},{name:"CHIMP",description:"CHIMP is een SaaS-platform waar organisaties hun problemen en ideeën kunnen beheren,\n                  prioriteren en begroten.",screenshot:"img/screenshots/chimp.png",tags:["laravel","search","bootstrap","saas","scalable","security","vue.js"]}],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-grow flex-col"},[n("div",{staticClass:"flex m-2"},[n("h1",{staticClass:"uppercase text-caribbean-green text-2xl",domProps:{textContent:e._s(e.name)}})]),n("div",{staticClass:"flex flex-wrap"},e._l(e.tags,function(e,t){return n("case-tag",{key:"tag"+t,staticClass:"m-2",attrs:{name:e}})})),n("div",{staticClass:"flex m-2"},[n("p",{staticClass:"text-white leading-loose",domProps:{textContent:e._s(e.description)}})])])},G=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-tag-grey py-1 px-2 rounded"},[n("span",{staticClass:"font-plex italic text-white text-xs hover:text-caribbean-green",domProps:{textContent:e._s(e.name)}})])},Q=[],Y={name:"CaseTag",props:{name:{type:String,required:!0}}},X=Y,R=Object(c["a"])(X,J,Q,!1,null,null,null);R.options.__file="CaseTag.vue";var Z=R.exports,U={name:"SingleCase",components:{CaseTag:Z},props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!1}}},K=U,ee=Object(c["a"])(K,F,G,!1,null,null,null);ee.options.__file="SingleCase.vue";var te=ee.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticClass:"inline-flex items-center no-underline",nativeOn:{mousedown:function(t){return e.changeMouse(t)},mouseup:function(t){return e.changeMouse(t)}}},[a("button",{staticClass:"text-white bg-caribbean-green h-10 w-10 rounded-full shadow-green move-fast shadow-green focus:outline-none flex items-center justify-center",class:e.buttonClasses},["left"===e.direction?a("img",{attrs:{src:n("491b")}}):"right"===e.direction?a("img",{attrs:{src:n("6b64")}}):e._e()]),e.buttonLabel?a("span",{staticClass:"pl-4 uppercase text-tag-grey font-bold font-montserrat opacity-30"},[e._v(e._s(e.buttonLabel))]):e._e()])])},ae=[],se={name:"ButtonCircle",props:{direction:{type:String,required:!0,validator:function(e){return-1!==["left","right"].indexOf(e)}},buttonLabel:{type:String,required:!1,default:null}},data:function(){return{mouseDown:!1}},computed:{buttonClasses:function(){var e="";return this.mouseDown&&(e+="move-d-1 shadow-green "),"left"===this.direction&&(e+="md:hover:move-l-2"),"right"===this.direction&&(e+="md:hover:move-r-2"),e}},methods:{changeMouse:function(){this.mouseDown=!this.mouseDown}}},re=se,ie=Object(c["a"])(re,ne,ae,!1,null,null,null);ie.options.__file="ButtonCircle.vue";var oe=ie.exports,le={name:"CaseSection",components:{SingleCase:te,ButtonCircle:oe},data:function(){return{cases:W,selectedCase:0,showPrevCaseHover:!1,showNextCaseHover:!1}},computed:{hoveredNextCase:function(){return this.getNextCase()},hoveredPrevCase:function(){return this.getPrevCase()}},methods:{nextCase:function(e){this.selectedCase=this.getNextCase()},prevCase:function(e){this.selectedCase=this.getPrevCase()},getNextCase:function(){return this.selectedCase<this.cases.length-1?this.selectedCase+1:0},getPrevCase:function(){return this.selectedCase>0?this.selectedCase-1:this.cases.length-1},getBorderColor:function(e){return this.selectedCase===e?"border-caribbean-green":this.showPrevCaseHover&&this.hoveredPrevCase===e?"border-tag-grey":this.showNextCaseHover&&this.hoveredNextCase===e?"border-tag-grey":"border-transparent"}}},ce=le,ue=(n("d762"),Object(c["a"])(ce,V,I,!1,null,"6a97adfa",null));ue.options.__file="CaseSection.vue";var de=ue.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col mt-12 mb-24 text-center",attrs:{id:"team"}},[e._m(0),n("div",{staticClass:"flex flex-wrap"},e._l(e.members,function(e){return n("div",{staticClass:"flex lg:w-1/2 xl:w-1/3 flex-grow justify-center"},[n("team-member",{staticClass:"p-10",attrs:{image:e.image,name:e.name,role:e.role,expertise:e.expertise}})],1)}))])},pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("h1",{staticClass:"uppercase tracking-wide text-3xl lg:text-4xl py-12"},[e._v("Team")])])}],me=n("7af5"),ve=n.n(me),ge=n("a56a"),xe=n.n(ge),he=n("35bf"),be=n.n(he),Ce=n("b512"),we=n.n(Ce),_e=n("e9f0"),ye=n.n(_e),ke=n("be1b"),je=n.n(ke),Se=[{image:ve.a,name:"Arie Visser",role:"Full Stack Developer",expertise:"Laravel, Vue.js & Node.js"},{image:we.a,name:"Gerwin Overeem",role:"Frontend Developer",expertise:"Vue.js Guru"},{image:be.a,name:"Ivo Jonkers",role:"Project Manager",expertise:"Blockchain Researcher"},{image:xe.a,name:"Jaap vd Voort",role:"Graphic Designer",expertise:"UX Designer"},{image:ye.a,name:"Nathan Alder",role:"Frontend Developer",expertise:"Animation Master"},{image:je.a,name:"Sander de Vos",role:"Backend Developer",expertise:"Security & DevOps"}],Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row"},[n("div",{staticClass:"flex mr-4"},[n("img",{staticClass:"rounded-full w-24 h-24",attrs:{src:e.image}})]),n("div",{staticClass:"flex flex-col w-48"},[n("div",{staticClass:"flex text-caribbean-green font-extrabold uppercase text-left"},[e._v("\n      "+e._s(e.name)+"\n    ")]),n("div",{staticClass:"flex italic text-left"},[e._v("\n      "+e._s(e.role)+"\n    ")]),n("div",{staticClass:"flex text-grey text-left"},[e._v("\n      "+e._s(e.expertise)+"\n    ")])])])},Ee=[],Pe={name:"TeamMember",props:{image:{type:String,required:!0},name:{type:String,required:!0},role:{type:String,required:!0},expertise:{type:String,required:!0}}},He=Pe,Te=Object(c["a"])(He,Oe,Ee,!1,null,null,null);Te.options.__file="TeamMember.vue";var Le=Te.exports,$e={name:"TeamSection",components:{TeamMember:Le},data:function(){return{members:Se}}},Me=$e,Be=Object(c["a"])(Me,fe,pe,!1,null,null,null);Be.options.__file="TeamSection.vue";var Ne=Be.exports,qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-tangaroa",attrs:{id:"contact"}},[a("div",{staticClass:"container mx-auto flex flex-col justify-between h-banner py-16 px-4"},[a("h1",{staticClass:"uppercase text-3xl lg:text-4xl text-caribbean-green leading-none"},[e._v("Zin in koffie?")]),a("p",{staticClass:"text-white text-lg w-full lg:w-1/2 leading-loose"},[e._v("Wij ook! Een goede kop koffie (of thee) is bij uitstek een prettige situatie om jouw vraag te bespreken. Laten we samen kijken naar de mogelijkheden en het realiseren van het juiste stukje software voor jouw organisatie.")]),a("div",{staticClass:"ml-24 text-white text-lg"},[a("div",{staticClass:"flex items-center"},[a("img",{attrs:{src:n("7a08"),alt:"phone_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline",attrs:{href:"tel:+3188 004 0600",rel:"noreferrer nofollow"}},[e._v("+31 (0) 88 004 0600")])]),a("div",{staticClass:"flex items-center"},[a("img",{attrs:{src:n("d773"),alt:"email_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline",attrs:{href:"mailto:dev@foryard.tech",rel:"noreferrer nofollow"}},[e._v("dev@foryard.tech")])]),a("div",{staticClass:"flex items-center"},[a("img",{staticClass:"self-start sm:self-auto pt-2 sm:pt-0",attrs:{src:n("e496"),alt:"location_icon"}}),a("a",{staticClass:"py-2 ml-6 text-white no-underline",attrs:{href:"https://goo.gl/maps/HpXX6YLcJtM2",rel:"noreferrer nofollow"}},[e._v("Kuipersstraat 35, 1074 EE Amsterdam")])])])]),a("div",{staticClass:"bg-tangaroa-darker",attrs:{id:"footer"}},[a("div",{staticClass:"container mx-auto h-20 flex justify-center lg:justify-start items-center text-white"},[a("div",{staticClass:"mx-4 lg:mr-4 flex items-center"},[a("img",{attrs:{src:n("6bff"),alt:"github_icon"}}),a("a",{staticClass:"py-2 ml-2 text-white no-underline",attrs:{href:"https://github.com/fydtech",rel:"noreferrer nofollow"}},[e._v("fydtech")])]),a("div",{staticClass:"mx-4 lg:mr-4 flex items-center"},[a("img",{attrs:{src:n("b988"),alt:"twitter_icon"}}),a("a",{staticClass:"py-2 ml-2 text-white no-underline",attrs:{href:"https://twitter.com/fydtech",rel:"noreferrer nofollow"}},[e._v("@fydtech")])])])])])}],De={name:"ContactSection"},ze=De,Ve=Object(c["a"])(ze,qe,Ae,!1,null,null,null);Ve.options.__file="ContactSection.vue";var Ie=Ve.exports,We={name:"App",components:{HeaderSection:w,BannerSection:E,ProductSection:z,CaseSection:de,TeamSection:Ne,ContactSection:Ie}},Fe=We,Ge=Object(c["a"])(Fe,m,v,!1,null,null,null);Ge.options.__file="Home.vue";var Je=Ge.exports;a["a"].use(p["a"]);var Qe=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Je},{path:"*",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}]});a["a"].use(r.a),a["a"].config.productionTip=!1,new a["a"]({router:Qe,render:function(e){return e(f)}}).$mount("#app")},"6b64":function(e,t,n){e.exports=n.p+"img/chevron-next.5161560f.svg"},"6bff":function(e,t,n){e.exports=n.p+"img/github.0dc38941.svg"},7283:function(e,t,n){e.exports=n.p+"img/chevron-down.ffe97e57.svg"},"7a08":function(e,t,n){e.exports=n.p+"img/phone.4181f8ac.svg"},"7af5":function(e,t,n){e.exports=n.p+"img/arie.e76f2e5b.jpg"},"7c8d":function(e,t,n){e.exports=n.p+"img/icon-flame.09cd9139.svg"},8700:function(e,t,n){"use strict";var a=n("b139"),s=n.n(a);s.a},"8e9b":function(e,t,n){e.exports=n.p+"img/laravel-hover.4d78e9e4.svg"},"9f0c":function(e,t,n){"use strict";var a=n("f694"),s=n.n(a);s.a},a56a:function(e,t,n){e.exports=n.p+"img/jaap.ec6c218f.png"},b139:function(e,t,n){},b512:function(e,t,n){e.exports=n.p+"img/gerwin.73d7a536.jpg"},b81e:function(e,t,n){e.exports=n.p+"img/MacBook-Gold.2e4a0286.png"},b988:function(e,t,n){e.exports=n.p+"img/twitter.d99eab0a.svg"},be1b:function(e,t,n){e.exports=n.p+"img/sander.4b8c1396.jpg"},d762:function(e,t,n){"use strict";var a=n("0633"),s=n.n(a);s.a},d773:function(e,t,n){e.exports=n.p+"img/email.06686738.svg"},e496:function(e,t,n){e.exports=n.p+"img/location.f4a15cf8.svg"},e891:function(e,t,n){e.exports=n.p+"img/foryard-logo-tech.e79c78aa.svg"},e9f0:function(e,t,n){e.exports=n.p+"img/nathan.5b777d37.png"},f694:function(e,t,n){}});
//# sourceMappingURL=app.c7e7b6a2.js.map