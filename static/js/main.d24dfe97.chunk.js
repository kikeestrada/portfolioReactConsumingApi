(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(61)},37:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(29),l=t.n(c),i=(t(37),t(15)),s=t(6),m=Object(n.createRef)(),o=function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"ed-grid s-grid-5 lg-grid-4"},r.a.createElement("div",{className:"s-cols-4 lg-cols-1 s-cross-center"},r.a.createElement("img",{className:"main-logo",src:"img/logo.png",alt:"logo"})),r.a.createElement("div",{className:"s-grid-1 lg-cols-3 s-cross-center s-main-end header-links"},r.a.createElement("nav",{className:"main-menu",ref:m},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{exact:!0,to:"/",activeClassName:"activo"}," Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"Episodes",activeClassName:"activo"}," Episodes")))),r.a.createElement("div",{className:"main-menu-toggle to-l",id:"main-menu-toggle",onClick:function(){return m.current.classList.toggle("show")}}))))},d=function(){return r.a.createElement("div",{className:"main-banner img-container diagonal l-section",id:"main-banner"},r.a.createElement("div",{className:"ed-grid lg-grid-6"},r.a.createElement("div",{className:"lg-cols-4 lg-x-2"},r.a.createElement("img",{className:"main-banner__img",src:"img/banner-img1.png",alt:"alt-Banner"}),r.a.createElement("div",{className:"main-banner__data s-center"},r.a.createElement("p",{className:"t2 s-mb-0"},"Gamanza 2020"),r.a.createElement("p",null,"The iGaming Super Store"),r.a.createElement("input",{className:"nav-input",type:"text",placeholder:"Explore Products"})))))},u=t(8),g=t(9),E=t(12),h=t(10),p=t(13),v=function(e){var a=e.id,t=e.death;return r.a.createElement("article",{className:"card",id:a},r.a.createElement("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2"},r.a.createElement("h3",{className:"t5 s-mb-2 s-center"},t)))};v.defaultProps={title:"No titles",image:"https://scott88lee.github.io/FMX/img/avatar.jpg"};var b=v,f=t(11),N=t.n(f),k=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(E.a)(this,Object(h.a)(a).call(this,e))).state={deaths:[]},t}return Object(p.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://breakingbadapi.com/api/deaths").then(function(a){e.setState({deaths:a.data})})}},{key:"render",value:function(){var e=this.state.deaths;return r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(b,{key:e.id,death:e.death})}))}}]),a}(n.Component),j=function(e){var a=e.char_id,t=e.name,n=e.img;return r.a.createElement("article",{className:"card",id:a},r.a.createElement("div",{className:"img-container s-ratio-16-9 s-radius-tr s-radius-tl"},r.a.createElement("img",{src:n,alt:t})),r.a.createElement("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2"},r.a.createElement("h3",{className:"t5 s-mb-2 s-center"},t)))};j.defaultProps={name:"No titles",img:"No Image"};var O=j,y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(E.a)(this,Object(h.a)(a).call(this,e))).state={chaters:[]},t}return Object(p.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://breakingbadapi.com/api/characters?limit=6&offset=0").then(function(a){e.setState({chaters:a.data})})}},{key:"render",value:function(){var e=this.state.chaters;return r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(O,{key:e.id,name:e.name,img:e.img})}))}}]),a}(n.Component),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ed-grid"},r.a.createElement("h1",null,"Home")),r.a.createElement("div",{className:"ed-container"},r.a.createElement("div",{className:"ed-item m-60"},r.a.createElement("div",{className:"ed-grid s-grid-1 m-grid-2 l-grid-3"},r.a.createElement(y,null))),r.a.createElement("div",{className:"ed-item m-40"},r.a.createElement("div",{className:"ed-grid s-grid-1"},r.a.createElement(k,null)))))},_=function(e){e.id;var a=e.title;return r.a.createElement("article",{className:"card",id:a},r.a.createElement("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2"},r.a.createElement("h3",{className:"t5 s-mb-2 s-center"},a)))};_.defaultProps={title:"No titles"};var x=_,C=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(E.a)(this,Object(h.a)(a).call(this,e))).state={episodes:[]},t}return Object(p.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://breakingbadapi.com/api/episodes").then(function(a){e.setState({episodes:a.data})})}},{key:"render",value:function(){var e=this.state.episodes;return r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(x,{key:e.id,title:e.title})}))}}]),a}(n.Component),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ed-grid"},r.a.createElement("h1",null,"Episodes")),r.a.createElement("div",{className:"ed-grid s-grid-1 m-grid-2 l-grid-3"},r.a.createElement(C,null)))},P=function(){return r.a.createElement(i.a,null,r.a.createElement(o,null),r.a.createElement(d,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:w}),r.a.createElement(s.a,{path:"/Episodes",exact:!0,component:F}),r.a.createElement(s.a,{component:function(){return r.a.createElement("div",{className:"ed-grid"},r.a.createElement("h1",null,"P\xe1gina no encontrada"))}})))},S=(t(60),function(){return r.a.createElement(P,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.d24dfe97.chunk.js.map