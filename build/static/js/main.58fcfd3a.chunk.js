(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(15),a(1)),l=a(2),o=a(4),p=a(3),u=a(5),m=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"http://hvtekshop.com/wp"},"HVTEKSHOP"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"http://hvtekshop.com/wp/category/news/"},"News")))))}}]),t}(n.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"React PWA Example"),r.a.createElement("p",{className:"card-text"},"A Progressive Web App (PWA) is a web app that uses advanced web capabilities to provide an app-like experience to users. Unlike traditional applications, Progressive web apps are a hybrid of regular web pages (or websites) and a mobile application."),r.a.createElement("p",{className:"card-text"},"A Progressive Web App (PWA) TEST TEST TEST"),r.a.createElement("p",{className:"card-text"},"A Progressive Web App (PWA) is a web app that uses advanced web capabilities to provide an app-like experience to users. Unlike traditional applications, Progressive web apps are a hybrid of regular web pages (or websites) and a mobile application."),r.a.createElement("a",{href:"http://hvtekshop.com/wp",className:"btn btn-primary"},"Shop now")))}}]),t}(n.Component),d=a(8),b=a.n(d),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{src:"merry.mp3",controls:!0})}}]),t}(r.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"../image/1 (1).jpg",alt:"Smiley face",height:"128",width:"128"}),r.a.createElement("img",{src:"../image/1 (2).jpg",alt:"Smiley face",height:"128",width:"128"}),r.a.createElement("img",{src:"../image/1 (3).jpg",alt:"Smiley face",height:"128",width:"128"}),r.a.createElement("img",{src:"../image/1 (4).jpg",alt:"Smiley face",height:"128",width:"128"}))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={secondsElapsed:0,laps:[],lastClearedIncrementer:null},a.incrementer=null,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleStartClick",value:function(){var e=this;this.incrementer=setInterval(function(){return e.setState({secondsElapsed:e.state.secondsElapsed+1})},1e3)}},{key:"handleStopClick",value:function(){clearInterval(this.incrementer),this.setState({lastClearedIncrementer:this.incrementer})}},{key:"handleResetClick",value:function(){clearInterval(this.incrementer),this.setState({secondsElapsed:0,laps:[]})}},{key:"handleLabClick",value:function(){this.setState({laps:this.state.laps.concat([this.state.secondsElapsed])})}},{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h1",{className:"stopwatch-timer"},(e=this.state.secondsElapsed,Math.floor(e/60)+":"+("0"+e%60).slice(-2))),0===this.state.secondsElapsed||this.incrementer===this.state.lastClearedIncrementer?r.a.createElement(E,{className:"start-btn",onClick:this.handleStartClick.bind(this)},"start"):r.a.createElement(E,{className:"stop-btn",onClick:this.handleStopClick.bind(this)},"stop"),0!==this.state.secondsElapsed&&this.incrementer===this.state.lastClearedIncrementer?r.a.createElement(E,{onClick:this.handleResetClick.bind(this)},"reset"):null);var e}}]),t}(n.Component),E=function(e){return r.a.createElement("button",Object.assign({type:"button"},e,{className:"btn "+e.className}))},w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("br",null),r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement(f,null))}}]),t}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");k?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.58fcfd3a.chunk.js.map