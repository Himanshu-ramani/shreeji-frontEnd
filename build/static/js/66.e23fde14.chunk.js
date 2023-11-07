(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[66],{480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=o(a(18)),r=o(a(36)),c=a(493);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E,b,p,g=function(e){function t(){return i(this,t),u(this,d(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&r.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=l.default.createElement("div",{className:"react-head-temp"},t);r.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var l=Array.prototype.slice.call(a.children),n=document.head,r=n.innerHTML;(l=(l=l.filter((function(e){return-1===r.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(n,a)}else if("meta"===t){var l=(0,c.getDuplicateMeta)(e);l&&(0,c.removeChild)(n,l)}else if("link"===t&&"canonical"===e.rel){var r=(0,c.getDuplicateCanonical)(e);r&&(0,c.removeChild)(n,r)}})),(0,c.appendChild)(document.head,l)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&m(a.prototype,n),o&&m(a,o),t}(l.Component);E=g,b="contextTypes",p={extract:n.default.func},b in E?Object.defineProperty(E,b,{value:p,enumerable:!0,configurable:!0,writable:!0}):E[b]=p;var v=g;t.default=v,e.exports=t.default},483:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(103);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return n.a.createElement("div",{className:"".concat(a||"")},n.a.createElement(r.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+t})))}},484:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(65);t.a=function(e){var t=e.currency,a=e.setCurrency,l=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(r.changeLanguage)(t))},s=function(e){var t=e.target.value;a(t)};return n.a.createElement("div",{className:"language-currency-wrap"},n.a.createElement("div",{className:"same-language-currency language-style"},n.a.createElement("span",null,"en"===l?"English":"fn"===l?"French":"de"===l?"Germany":""," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),n.a.createElement("li",null,n.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),n.a.createElement("li",null,n.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),n.a.createElement("div",{className:"same-language-currency use-style"},n.a.createElement("span",null,t.currencyName," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"USD",onClick:function(e){return s(e)}},"USD")),n.a.createElement("li",null,n.a.createElement("button",{value:"EUR",onClick:function(e){return s(e)}},"EUR")),n.a.createElement("li",null,n.a.createElement("button",{value:"GBP",onClick:function(e){return s(e)}},"GBP"))))),n.a.createElement("div",{className:"same-language-currency"},n.a.createElement("p",null,"Call Us 3965410")))}},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=c(a(492)),n=c(a(480)),r=c(a(494));function c(e){return e&&e.__esModule?e:{default:e}}var o=n.default;t.default=o},486:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(103);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,l=e.colorClass;return n.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(l||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(r.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+t}))),n.a.createElement("p",null,"\xa9 2020"," ",n.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",n.a.createElement("br",null)," All Rights Reserved"))}},487:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(498),c=function(e){var t,a=e.status,l=e.message,r=e.onValidated;return n.a.createElement("div",{className:"subscribe-form"},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),n.a.createElement("div",{className:"clear"},n.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&r({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===a&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}))},o=function(e){var t=e.mailchimpUrl;return n.a.createElement("div",null,n.a.createElement(r.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,l=e.message;return n.a.createElement(c,{status:a,message:l,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,l=e.sideMenu,r=e.colorClass,c=e.widgetColorClass;return n.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(l?"ml-ntv5":a||""," ").concat(c||"")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"SUBSCRIBE")),n.a.createElement("div",{className:"subscribe-style ".concat(r||"")},n.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),n.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},489:function(e,t,a){"use strict";var l=a(479),n=a(0),r=a.n(n),c=a(103),o=a(499),s=a(486),i=a(487);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,m=e.spaceBottomClass,u=e.spaceLeftClass,d=e.spaceRightClass,f=e.containerClass,E=e.extraFooterClass,b=e.sideMenu,p=Object(n.useState)(0),g=Object(l.a)(p,2),v=g[0],h=g[1],y=Object(n.useState)(0),N=Object(l.a)(y,2),w=N[0],C=N[1];Object(n.useEffect)((function(){return C(100),window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]);var O=function(){h(window.scrollY)};return r.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(m||""," ").concat(E||""," ").concat(u||""," ").concat(d||"")},r.a.createElement("div",{className:"".concat(f||"container")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement(s.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),r.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"footer-widget mb-30 ml-30"},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"ABOUT US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/about"},"About us")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"Store location")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"Orders tracking")))))),r.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"USEFUL LINKS")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"Returns")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"Support Policy")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"Size guide")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"#/"},"FAQs")))))),r.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},r.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"FOLLOW US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),r.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},r.a.createElement(i.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:b})))),r.a.createElement("button",{className:"scroll-top ".concat(v>w?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},r.a.createElement("i",{className:"fa fa-angle-double-up"})))}},492:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=a(0),r=(l=a(18))&&l.__esModule?l:{default:l};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),i(this,m(t).apply(this,arguments))}var a,l,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,(l=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&s(a.prototype,l),r&&s(a,r),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:r.default.func});var f=d;t.default=f,e.exports=t.default},493:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,l=[],c=[];return e.forEach((function(e){var n=e.type,r=e.props;"title"===n?t=e:"link"===n&&"canonical"===r.rel?a=e:"meta"===n?l.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};r.forEach((function(e){t[e]=[]}));for(var a=[],l=function(l){var c=e[l],o=c.props.id;(o?!t.id[o]:0===n.filter((function(e){var a=c.props[e],l=t[e][a];return l&&!l.props.id})).length)&&(a.unshift(c),r.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)l(c);return a}(l)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return l.reduce((function(a,l){var n,r=e.getAttribute(l);return r?a.concat((n=t.querySelectorAll("[".concat(l,' = "').concat(r,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),l=0,n=t.length;l<n;l++)a.appendChild(t[l]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,l=t.length;a<l;a++)e.removeChild(t[a])};var l=["property","name","itemprop"],n=l.concat(["itemProp"]),r=n.concat(["id"])},494:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(18)),r=c(a(480));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,E,b,p=function(e){function t(){return s(this,t),m(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return l.default.createElement(r.default,null,l.default.createElement("title",null,this.props.title))}}])&&i(a.prototype,n),c&&i(a,c),t}(l.Component);f=p,E="propTypes",b={title:n.default.string},E in f?Object.defineProperty(f,E,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[E]=b;var g=p;t.default=g,e.exports=t.default},495:function(e,t,a){"use strict";var l=a(479),n=a(0),r=a.n(n),c=a(483),o=a(488),s=a(491),i=a(490),m=a(65),u=a(64),d=a(146),f=a(484),E=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(d.b)(t))}}}))(Object(m.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,l=e.currentLanguageCode,n=e.dispatch,c=e.borderStyle;return r.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},r.a.createElement(f.a,{currency:t,setCurrency:a,currentLanguageCode:l,dispatch:n}),r.a.createElement("div",{className:"header-offer"},r.a.createElement("p",null,"Free delivery on order over"," ",r.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,m=e.borderStyle,u=e.headerPaddingClass,d=e.headerPositionClass,f=e.headerBgClass,b=Object(n.useState)(0),p=Object(l.a)(b,2),g=p[0],v=p[1],h=Object(n.useState)(0),y=Object(l.a)(h,2),N=y[0],w=y[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){v(window.scrollY)};return r.a.createElement("header",{className:"header-area clearfix ".concat(f||""," ").concat(d||"")},r.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===m?"border-none":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement(E,{borderStyle:m}))),r.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(g>N?"stick":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},r.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),r.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},r.a.createElement(s.a,null)))),r.a.createElement(i.a,null)))}},497:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(495),c=a(489);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,s=e.headerPaddingClass,i=e.headerPositionClass;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,{layout:a,top:o,headerPaddingClass:s,headerPositionClass:i}),t,n.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},501:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(103),c=a(147);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},591:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"prev"},n.a.createElement("i",{className:"fa fa-angle-double-left"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"active"},"1")),n.a.createElement("li",null,n.a.createElement("button",null,"2")),n.a.createElement("li",null,n.a.createElement("button",{className:"next"},n.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},843:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(485),c=a.n(r),o=a(147),s=a(497),i=a(501),m=a(591),u=a(103),d=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-9.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"Lorem ipsum blog post")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-8.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"New collection of our shop")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-7.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"Ipsum blog post two")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-6.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"New shop collection")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-5.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"Lorem blog post four")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-4.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/blog-details-standard"},"Ipsum blog post five")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))))};t.default=function(e){var t=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,"Flone | Blog"),n.a.createElement("meta",{name:"description",content:"Blog of flone react minimalist eCommerce template."})),n.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:""+t},"Blog"),n.a.createElement(s.a,{headerTop:"visible"},n.a.createElement(i.a,null),n.a.createElement("div",{className:"blog-area pt-100 pb-100 blog-no-sidebar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"mr-20"},n.a.createElement("div",{className:"row"},n.a.createElement(d,null)),n.a.createElement(m.a,null))))))))}}}]);
//# sourceMappingURL=66.e23fde14.chunk.js.map