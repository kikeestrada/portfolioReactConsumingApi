(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(68)},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),l=a.n(c),s=a(9),o=a(10),i=a(15),m=a(16),u=a(19),d=a(17),g=a(20),p=a(35),E=a.n(p),f=a(11),b=function(e){var t=e.id,a=e.title,r=e.image,c=(e.price,e.profesorName),l=e.addCourseToCart,o=e.cart,i=e.deleteCourseFromCart;return n.a.createElement("article",{className:"card",id:c},n.a.createElement("div",{className:"img-container s-ratio-16-9 s-radius-tr s-radius-tl"},n.a.createElement(s.c,{to:"/cursos/".concat(t)},n.a.createElement("img",{src:r,alt:a}))),n.a.createElement("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2"},n.a.createElement("h3",{className:"t5 s-mb-2 s-center"},a),n.a.createElement("div",{className:"s-main-center"},o.find(function(e){return e===t})?n.a.createElement("button",{className:"button--ghost-alert button--tiny",onClick:function(){return i(t)}},"Remove Card"):n.a.createElement("button",{className:"button--ghost-alert button--tiny",onClick:function(){return l(t)}},"Add to Car"))))};b.defaultProps={title:"No titles",image:"https://scott88lee.github.io/FMX/img/avatar.jpg",price:"--",profesorName:"No Profesorr"};var h=Object(f.b)(function(e){return{cart:e.cart}},function(e){return{addCourseToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))},deleteCourseFromCart:function(t){e(function(e){return{type:"DELETE_FROM_CART",id:e}}(t))}}})(b),N=function(e){return function(t){return function(a){function r(e){return Object(i.a)(this,r),Object(u.a)(this,Object(d.a)(r).call(this,e))}return Object(g.a)(r,a),Object(m.a)(r,[{key:"render",value:function(){return 0===this.props[e].length?n.a.createElement("h1",null," ... Loading"):n.a.createElement(t,this.props)}}]),r}(r.Component)}}("courses")(function(e){var t=e.courses;return n.a.createElement("div",{className:"ed-grid m-grid-2 l-grid-3 lg-grid-4"},t.map(function(e){return n.a.createElement(h,{key:e.id,id:e.id,title:e.title,image:e.image,price:e.price,profesorName:e.profesorName})}))}),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={courses:[]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://my-json-server.typicode.com/kikeestrada/json-db/courses").then(function(t){e.setState({courses:t.data})})}},{key:"render",value:function(){var e=this.state.courses;return n.a.createElement(N,{courses:e})}}]),t}(r.Component),O=a(39),j=function(e){e.match;var t=Object(r.useState)({id:1,title:"Product Name",image:"https://scott88lee.github.io/FMX/img/avatar.jpg",price:"50",profesorName:"Product"}),a=Object(O.a)(t,2),c=a[0];a[1];return n.a.createElement("div",{className:"ed-grid m-grid-3"},c?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"m-cols-3"},c.title),n.a.createElement("img",{className:"m-cols-1",src:c.image,alt:c.title}),n.a.createElement("p",{className:"m-cols-2"},"Name: ",c.profesorName)):n.a.createElement("div",{className:"ed-grid"},n.a.createElement("h1",null,"El curso no existe")))},y=function(){return n.a.createElement("div",{className:"main-banner img-container diagonal l-section",id:"main-banner"},n.a.createElement("div",{className:"ed-grid lg-grid-6"},n.a.createElement("div",{className:"lg-cols-4 lg-x-2"},n.a.createElement("img",{className:"main-banner__img",src:"img/banner-img.png",alt:"alt-Banner"}),n.a.createElement("div",{className:"main-banner__data s-center"},n.a.createElement("p",{className:"t2 s-mb-0"},"New Collection 2020"),n.a.createElement("p",null,"New fashion trends"),n.a.createElement("input",{className:"nav-input",type:"text",placeholder:"Explore Products"})))))},C=function(){return n.a.createElement(y,null)},w=Object(f.b)(function(e){return{cartLegth:e.cart.length}},function(){})(function(e){var t=e.cartLegth;return n.a.createElement("li",{className:"s-card"},n.a.createElement("i",{className:"fas fa-cart-arrow-down"}),n.a.createElement("span",{className:"s-card__number"},"".concat(t)))}),_=Object(r.createRef)(),P=function(){return n.a.createElement("header",{className:"main-header"},n.a.createElement("div",{className:"ed-grid s-grid-5 lg-grid-4"},n.a.createElement("div",{className:"s-cols-4 lg-cols-1 s-cross-center"},n.a.createElement(s.c,{to:"/"},n.a.createElement("img",{className:"main-logo",src:"img/logo.png",alt:"algo"}))),n.a.createElement("div",{className:"s-grid-1 lg-cols-3 s-cross-center s-main-end header-links"},n.a.createElement("nav",{className:"main-menu",ref:_},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(s.d,{to:"cursos",activeClassName:"activo"}," Products")),n.a.createElement(w,null))),n.a.createElement("div",{className:"main-menu-toggle to-l",id:"main-menu-toggle",onClick:function(){return _.current.classList.toggle("show")}}))))},k=function(){return n.a.createElement(s.a,null,n.a.createElement(s.b,{basename:"/"},n.a.createElement(P,null),n.a.createElement(o.a,{path:"/",exact:!0,component:C}),n.a.createElement(o.a,{path:"/cursos/:id",exact:!0,component:j}),n.a.createElement(o.a,{path:"/cursos",exact:!0,component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null),n.a.createElement(v,null))}})))},D=(a(67),a(38)),T=a(18);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(D.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var R={cart:[]},A=Object(T.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?e.cart.find(function(e){return e===t.id})?e:F({},e,{cart:e.cart.concat(t.id)}):"DELETE_FROM_CART"===t.type?F({},e,{cart:e.cart.filter(function(e){return e!==t.id})}):e}),L=function(){return n.a.createElement(f.a,{store:A},n.a.createElement(k,null))},M=document.getElementById("root");l.a.render(n.a.createElement(L,null),M)}},[[40,1,2]]]);
//# sourceMappingURL=main.ebecd1b5.chunk.js.map