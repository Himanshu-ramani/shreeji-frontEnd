(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[78],{483:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(103);a.a=function(e){var a=e.imageUrl,t=e.logoClass;return l.a.createElement("div",{className:"".concat(t||"")},l.a.createElement(r.b,{to:"/"},l.a.createElement("img",{alt:"",src:""+a})))}},484:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(65);a.a=function(e){var a=e.currency,t=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,s=function(e){var a=e.target.value;c(Object(r.changeLanguage)(a))},i=function(e){var a=e.target.value;t(a)};return l.a.createElement("div",{className:"language-currency-wrap"},l.a.createElement("div",{className:"same-language-currency language-style"},l.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("div",{className:"lang-car-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{value:"en",onClick:function(e){return s(e)}},"English")),l.a.createElement("li",null,l.a.createElement("button",{value:"fn",onClick:function(e){return s(e)}},"French")),l.a.createElement("li",null,l.a.createElement("button",{value:"de",onClick:function(e){return s(e)}},"Germany"))))),l.a.createElement("div",{className:"same-language-currency use-style"},l.a.createElement("span",null,a.currencyName," ",l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("div",{className:"lang-car-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),l.a.createElement("li",null,l.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),l.a.createElement("li",null,l.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),l.a.createElement("div",{className:"same-language-currency"},l.a.createElement("p",null,"Call Us 3965410")))}},495:function(e,a,t){"use strict";var n=t(479),l=t(0),r=t.n(l),c=t(483),s=t(488),i=t(491),o=t(490),m=t(65),u=t(64),d=t(146),g=t(484),E=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(a){e(Object(d.b)(a))}}}))(Object(m.multilanguage)((function(e){var a=e.currency,t=e.setCurrency,n=e.currentLanguageCode,l=e.dispatch,c=e.borderStyle;return r.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},r.a.createElement(g.a,{currency:a,setCurrency:t,currentLanguageCode:n,dispatch:l}),r.a.createElement("div",{className:"header-offer"},r.a.createElement("p",null,"Free delivery on order over"," ",r.a.createElement("span",null,a.currencySymbol+(200*a.currencyRate).toFixed(2)))))})));a.a=function(e){var a=e.layout,t=e.top,m=e.borderStyle,u=e.headerPaddingClass,d=e.headerPositionClass,g=e.headerBgClass,v=Object(l.useState)(0),f=Object(n.a)(v,2),p=f[0],b=f[1],h=Object(l.useState)(0),N=Object(n.a)(h,2),y=N[0],C=N[1];Object(l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[]);var S=function(){b(window.scrollY)};return r.a.createElement("header",{className:"header-area clearfix ".concat(g||""," ").concat(d||"")},r.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===t?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===m?"border-none":"")},r.a.createElement("div",{className:"container-fluid"===a?a:"container"},r.a.createElement(E,{borderStyle:m}))),r.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(p>y?"stick":"")},r.a.createElement("div",{className:"container-fluid"===a?a:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},r.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),r.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},r.a.createElement(s.a,null)),r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},r.a.createElement(i.a,null)))),r.a.createElement(o.a,null)))}},711:function(e){e.exports=JSON.parse('[{"id":"1","title":"2020 Fashion For Womens","subtitle":"-20% Spring <br /> Snickers","image":"/assets/img/slider/hm-11-2.png","url":"/shop-grid-standard"},{"id":"2","title":"2020 Fashion For Womens","subtitle":"-30% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-2.png","url":"/shop-grid-standard"},{"id":"3","title":"2020 Fashion For Womens","subtitle":"-40% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-7.png","url":"/shop-grid-standard"}]')},778:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(485),c=t.n(r),s=t(103),i=t(711),o=t(712),m=t(495);a.default=function(){var e=[];i.forEach((function(a){e.push(a.id)}));var a={activeClass:"active",anchors:e,arrowNavigation:!1,className:"SectionsContainer",delay:1e3,navigation:!0,scrollBar:!1,sectionClassName:"Section",sectionPaddingTop:"0",sectionPaddingBottom:"0",verticalAlign:!0};return l.a.createElement(n.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"Flone | Fashion Home"),l.a.createElement("meta",{name:"description",content:"Fashion home of flone react minimalist eCommerce template."})),l.a.createElement("div",{className:"fullpage-slider-wrapper"},l.a.createElement(o.Header,null,l.a.createElement(m.a,{layout:"container-fluid",headerPaddingClass:"header-padding-1",headerBgClass:"bg-white"})),l.a.createElement(o.SectionsContainer,Object.assign({},a,{className:"bg-purple-2"}),i&&i.map((function(e,a){return l.a.createElement(o.Section,{key:a},l.a.createElement("div",{className:"slider-section flone-fp-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row fullpage-slider-wrap-mrg"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center"},l.a.createElement("div",{className:"slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content"},l.a.createElement("h3",{className:"animated"},e.title),l.a.createElement("h1",{className:"animated",dangerouslySetInnerHTML:{__html:e.subtitle}}),l.a.createElement("div",{className:"slider-btn-11 btn-hover"},l.a.createElement(s.b,{className:"animated",to:""+e.url},"SHOP NOW")))),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12"},l.a.createElement("div",{className:"slider12-img-1 slider-animated-1"},l.a.createElement("img",{className:"animated",alt:"",src:""+e.image})))))))})))))}}}]);
//# sourceMappingURL=78.614b84df.chunk.js.map