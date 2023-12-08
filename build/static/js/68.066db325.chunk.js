(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[68],{480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(18)),l=o(a(36)),c=a(493);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,E,b,y=function(e){function t(){return u(this,t),m(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(a.prototype,r),o&&s(a,o),t}(n.Component);p=y,E="contextTypes",b={extract:r.default.func},E in p?Object.defineProperty(p,E,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[E]=b;var v=y;t.default=v,e.exports=t.default},483:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/shreeji-frontEnd/"},r.a.createElement("img",{alt:"",src:"/shreeji-frontEnd"+t})))}},484:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(65);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(l.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("p",null,"Call Us 3965410")))}},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(492)),r=c(a(480)),l=c(a(494));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},486:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/shreeji-frontEnd/"},r.a.createElement("img",{alt:"",src:"/shreeji-frontEnd"+t}))),r.a.createElement("p",null,"\xa9 2020"," ",r.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},487:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(498),c=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},o=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(c,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,l=e.colorClass,c=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(c||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style ".concat(l||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},489:function(e,t,a){"use strict";var n=a(479),r=a(0),l=a.n(r),c=a(103),o=a(499),i=a(486),u=a(487);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,s=e.spaceBottomClass,m=e.spaceLeftClass,d=e.spaceRightClass,f=e.containerClass,p=e.extraFooterClass,E=e.sideMenu,b=Object(r.useState)(0),y=Object(n.a)(b,2),v=y[0],h=y[1],g=Object(r.useState)(0),N=Object(n.a)(g,2),C=N[0],w=N[1];Object(r.useEffect)((function(){return w(100),window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]);var O=function(){h(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(s||""," ").concat(p||""," ").concat(m||""," ").concat(d||"")},l.a.createElement("div",{className:"".concat(f||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(E?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(E?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd/about"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"Store location")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"Orders tracking")))))),l.a.createElement("div",{className:"".concat(E?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(E?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"Returns")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"Size guide")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shreeji-frontEnd#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(E?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(E?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),l.a.createElement("div",{className:"".concat(E?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(u.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:E})))),l.a.createElement("button",{className:"scroll-top ".concat(v>C?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},492:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(18))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),u(this,s(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:l.default.func});var f=d;t.default=f,e.exports=t.default},493:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},494:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(18)),l=c(a(480));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,E,b=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,r),c&&u(a,c),t}(n.Component);f=b,p="propTypes",E={title:r.default.string},p in f?Object.defineProperty(f,p,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[p]=E;var y=b;t.default=y,e.exports=t.default},495:function(e,t,a){"use strict";var n=a(479),r=a(0),l=a.n(r),c=a(483),o=a(488),i=a(491),u=a(490),s=a(65),m=a(64),d=a(146),f=a(484),p=Object(m.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(d.b)(t))}}}))(Object(s.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,c=e.borderStyle;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},l.a.createElement(f.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,"Free delivery on order over"," ",l.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,s=e.borderStyle,m=e.headerPaddingClass,d=e.headerPositionClass,f=e.headerBgClass,E=Object(r.useState)(0),b=Object(n.a)(E,2),y=b[0],v=b[1],h=Object(r.useState)(0),g=Object(n.a)(h,2),N=g[0],C=g[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){v(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(f||""," ").concat(d||"")},l.a.createElement("div",{className:"".concat(m||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===s?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement(p,{borderStyle:s}))),l.a.createElement("div",{className:" ".concat(m||""," sticky-bar header-res-padding clearfix ").concat(y>N?"stick":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},l.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),l.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},l.a.createElement(i.a,null)))),l.a.createElement(u.a,null)))}},497:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(495),c=a(489);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass,u=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i,headerPositionClass:u}),t,r.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},501:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103),c=a(147);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},797:function(e,t,a){"use strict";a.r(t);var n=a(479),r=a(0),l=a.n(r),c=a(103),o=a(145),i=a(485),u=a.n(i),s=a(147),m=a(64),d=a(478),f=a(66),p=a(497),E=a(501);t.default=Object(m.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(f.e)(t,a,n))},decreaseQuantity:function(t,a){e(Object(f.g)(t,a))},deleteFromCart:function(t,a){e(Object(f.i)(t,a))},deleteAllFromCart:function(t){e(Object(f.h)(t))}}}))((function(e){var t=e.location,a=e.cartItems,i=e.currency,m=e.decreaseQuantity,b=e.addToCart,y=e.deleteFromCart,v=e.deleteAllFromCart,h=Object(r.useState)(1),g=Object(n.a)(h,1)[0],N=Object(o.useToasts)().addToast,C=t.pathname,w=0;return l.a.createElement(r.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,"Flone | Cart"),l.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),l.a.createElement(s.BreadcrumbsItem,{to:"/shreeji-frontEnd/"},"Home"),l.a.createElement(s.BreadcrumbsItem,{to:"/shreeji-frontEnd"+C},"Cart"),l.a.createElement(p.a,{headerTop:"visible"},l.a.createElement(E.a,null),l.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},l.a.createElement("div",{className:"container"},a&&a.length>=1?l.a.createElement(r.Fragment,null,l.a.createElement("h3",{className:"cart-page-title"},"Your cart items"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"table-content table-responsive cart-table-content"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Unit Price"),l.a.createElement("th",null,"Qty"),l.a.createElement("th",null,"Subtotal"),l.a.createElement("th",null,"action"))),l.a.createElement("tbody",null,a.map((function(e,t){var a=Object(d.a)(e.price,e.discount),n=(e.price*i.currencyRate).toFixed(2),o=(a*i.currencyRate).toFixed(2);return w+=null!=a?o*e.quantity:n*e.quantity,l.a.createElement("tr",{key:t},l.a.createElement("td",{className:"product-thumbnail"},l.a.createElement(c.b,{to:"/shreeji-frontEnd/product/"+e.id},l.a.createElement("img",{className:"img-fluid",src:"/shreeji-frontEnd"+e.image[0],alt:""}))),l.a.createElement("td",{className:"product-name"},l.a.createElement(c.b,{to:"/shreeji-frontEnd/product/"+e.id},e.name),e.selectedProductColor&&e.selectedProductSize?l.a.createElement("div",{className:"cart-item-variation"},l.a.createElement("span",null,"Color: ",e.selectedProductColor),l.a.createElement("span",null,"Size: ",e.selectedProductSize)):""),l.a.createElement("td",{className:"product-price-cart"},null!==a?l.a.createElement(r.Fragment,null,l.a.createElement("span",{className:"amount old"},i.currencySymbol+n),l.a.createElement("span",{className:"amount"},i.currencySymbol+o)):l.a.createElement("span",{className:"amount"},i.currencySymbol+n)),l.a.createElement("td",{className:"product-quantity"},l.a.createElement("div",{className:"cart-plus-minus"},l.a.createElement("button",{className:"dec qtybutton",onClick:function(){return m(e,N)}},"-"),l.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:e.quantity,readOnly:!0}),l.a.createElement("button",{className:"inc qtybutton",onClick:function(){return b(e,N,g)},disabled:void 0!==e&&e.quantity&&e.quantity>=Object(f.f)(e,e.selectedProductColor,e.selectedProductSize)},"+"))),l.a.createElement("td",{className:"product-subtotal"},null!==a?i.currencySymbol+(o*e.quantity).toFixed(2):i.currencySymbol+(n*e.quantity).toFixed(2)),l.a.createElement("td",{className:"product-remove"},l.a.createElement("button",{onClick:function(){return y(e,N)}},l.a.createElement("i",{className:"fa fa-times"}))))}))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"cart-shiping-update-wrapper"},l.a.createElement("div",{className:"cart-shiping-update"},l.a.createElement(c.b,{to:"/shreeji-frontEnd/shop-grid-standard"},"Continue Shopping")),l.a.createElement("div",{className:"cart-clear"},l.a.createElement("button",{onClick:function(){return v(N)}},"Clear Shopping Cart"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"cart-tax"},l.a.createElement("div",{className:"title-wrap"},l.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Estimate Shipping And Tax")),l.a.createElement("div",{className:"tax-wrapper"},l.a.createElement("p",null,"Enter your destination to get a shipping estimate."),l.a.createElement("div",{className:"tax-select-wrapper"},l.a.createElement("div",{className:"tax-select"},l.a.createElement("label",null,"* Country"),l.a.createElement("select",{className:"email s-email s-wid"},l.a.createElement("option",null,"Bangladesh"),l.a.createElement("option",null,"Albania"),l.a.createElement("option",null,"\xc5land Islands"),l.a.createElement("option",null,"Afghanistan"),l.a.createElement("option",null,"Belgium"))),l.a.createElement("div",{className:"tax-select"},l.a.createElement("label",null,"* Region / State"),l.a.createElement("select",{className:"email s-email s-wid"},l.a.createElement("option",null,"Bangladesh"),l.a.createElement("option",null,"Albania"),l.a.createElement("option",null,"\xc5land Islands"),l.a.createElement("option",null,"Afghanistan"),l.a.createElement("option",null,"Belgium"))),l.a.createElement("div",{className:"tax-select"},l.a.createElement("label",null,"* Zip/Postal Code"),l.a.createElement("input",{type:"text"})),l.a.createElement("button",{className:"cart-btn-2",type:"submit"},"Get A Quote"))))),l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"discount-code-wrapper"},l.a.createElement("div",{className:"title-wrap"},l.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Use Coupon Code")),l.a.createElement("div",{className:"discount-code"},l.a.createElement("p",null,"Enter your coupon code if you have one."),l.a.createElement("form",null,l.a.createElement("input",{type:"text",required:!0,name:"name"}),l.a.createElement("button",{className:"cart-btn-2",type:"submit"},"Apply Coupon"))))),l.a.createElement("div",{className:"col-lg-4 col-md-12"},l.a.createElement("div",{className:"grand-totall"},l.a.createElement("div",{className:"title-wrap"},l.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart"},"Cart Total")),l.a.createElement("h5",null,"Total products"," ",l.a.createElement("span",null,i.currencySymbol+w.toFixed(2))),l.a.createElement("h4",{className:"grand-totall-title"},"Grand Total"," ",l.a.createElement("span",null,i.currencySymbol+w.toFixed(2))),l.a.createElement(c.b,{to:"/shreeji-frontEnd/checkout"},"Proceed to Checkout"))))):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"item-empty-area text-center"},l.a.createElement("div",{className:"item-empty-area__icon mb-30"},l.a.createElement("i",{className:"pe-7s-cart"})),l.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart ",l.a.createElement("br",null)," ",l.a.createElement(c.b,{to:"/shreeji-frontEnd/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=68.066db325.chunk.js.map