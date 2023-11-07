(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[65],{480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(18)),l=o(a(36)),c=a(493);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,E,v=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(a.prototype,r),o&&s(a,o),t}(n.Component);p=v,b="contextTypes",E={extract:r.default.func},b in p?Object.defineProperty(p,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[b]=E;var y=v;t.default=y,e.exports=t.default},482:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){for(var t=e.ratingValue,a=[],l=0;l<5;l++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:l}));if(t&&t>0)for(var c=0;c<=t-1;c++)a[c]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:c});return r.a.createElement(n.Fragment,null,a)}},483:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t})))}},484:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(65);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(l.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("p",null,"Call Us 3965410")))}},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(492)),r=c(a(480)),l=c(a(494));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},486:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t}))),r.a.createElement("p",null,"\xa9 2020"," ",r.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},487:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(498),c=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},o=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(c,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,l=e.colorClass,c=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(c||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style ".concat(l||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},489:function(e,t,a){"use strict";var n=a(479),r=a(0),l=a.n(r),c=a(103),o=a(499),i=a(486),u=a(487);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,s=e.spaceBottomClass,m=e.spaceLeftClass,f=e.spaceRightClass,d=e.containerClass,p=e.extraFooterClass,b=e.sideMenu,E=Object(r.useState)(0),v=Object(n.a)(E,2),y=v[0],g=v[1],h=Object(r.useState)(0),N=Object(n.a)(h,2),C=N[0],O=N[1];Object(r.useEffect)((function(){return O(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){g(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(s||""," ").concat(p||""," ").concat(m||""," ").concat(f||"")},l.a.createElement("div",{className:"".concat(d||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Store location")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Orders tracking")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Returns")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Size guide")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(u.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:b})))),l.a.createElement("button",{className:"scroll-top ".concat(y>C?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},492:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(18))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return o(this,t),u(this,s(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(f,"childContextTypes",{extract:l.default.func});var d=f;t.default=d,e.exports=t.default},493:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},494:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(18)),l=c(a(480));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,E=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,r),c&&u(a,c),t}(n.Component);d=E,p="propTypes",b={title:r.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var v=E;t.default=v,e.exports=t.default},495:function(e,t,a){"use strict";var n=a(479),r=a(0),l=a.n(r),c=a(483),o=a(488),i=a(491),u=a(490),s=a(65),m=a(64),f=a(146),d=a(484),p=Object(m.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(f.b)(t))}}}))(Object(s.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,c=e.borderStyle;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},l.a.createElement(d.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,"Free delivery on order over"," ",l.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,s=e.borderStyle,m=e.headerPaddingClass,f=e.headerPositionClass,d=e.headerBgClass,b=Object(r.useState)(0),E=Object(n.a)(b,2),v=E[0],y=E[1],g=Object(r.useState)(0),h=Object(n.a)(g,2),N=h[0],C=h[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]);var O=function(){y(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(d||""," ").concat(f||"")},l.a.createElement("div",{className:"".concat(m||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===s?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement(p,{borderStyle:s}))),l.a.createElement("div",{className:" ".concat(m||""," sticky-bar header-res-padding clearfix ").concat(v>N?"stick":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},l.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),l.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},l.a.createElement(i.a,null)))),l.a.createElement(u.a,null)))}},497:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(495),c=a(489);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass,u=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i,headerPositionClass:u}),t,r.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},501:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103),c=a(147);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},799:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(103),c=a(145),o=a(485),i=a.n(o),u=a(147),s=a(64),m=a(66),f=a(104),d=a(478),p=a(497),b=a(501),E=a(482);t.default=Object(s.connect)((function(e){return{cartItems:e.cartData,compareItems:e.compareData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(m.e)(t,a,n))},deleteFromCompare:function(t,a){e(Object(f.d)(t,a))}}}))((function(e){var t=e.location,a=e.cartItems,o=e.compareItems,s=e.addToCart,m=e.deleteFromCompare,f=e.currency,v=t.pathname,y=Object(c.useToasts)().addToast;return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Flone | Compare"),r.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),r.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(u.BreadcrumbsItem,{to:""+v},"Compare"),r.a.createElement(p.a,{headerTop:"visible"},r.a.createElement(b.a,null),r.a.createElement("div",{className:"compare-main-area pt-90 pb-100"},r.a.createElement("div",{className:"container"},o&&o.length>=1?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"compare-page-content"},r.a.createElement("div",{className:"compare-table table-responsive"},r.a.createElement("table",{className:"table table-bordered mb-0"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"title-column"},"Product Info"),o.map((function(e,t){var n=a.filter((function(t){return t.id===e.id}))[0];return r.a.createElement("td",{className:"product-image-title",key:t},r.a.createElement("div",{className:"compare-remove"},r.a.createElement("button",{onClick:function(){return m(e,y)}},r.a.createElement("i",{className:"pe-7s-trash"}))),r.a.createElement(l.b,{to:"/product/"+e.id,className:"image"},r.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""})),r.a.createElement("div",{className:"product-title"},r.a.createElement(l.b,{to:"/product/"+e.id},e.name)),r.a.createElement("div",{className:"compare-btn"},e.affiliateLink?r.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?r.a.createElement(l.b,{to:"".concat("","/product/").concat(e.id)},"Select Option"):e.stock&&e.stock>0?r.a.createElement("button",{onClick:function(){return s(e,y)},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==n&&n.quantity>0?"Added":"Add to cart"):r.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"title-column"},"Price"),o.map((function(e,t){var a=Object(d.a)(e.price,e.discount),l=(e.price*f.currencyRate).toFixed(2),c=(a*f.currencyRate).toFixed(2);return r.a.createElement("td",{className:"product-price",key:t},null!==a?r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"amount old"},f.currencySymbol+l),r.a.createElement("span",{className:"amount"},f.currencySymbol+c)):r.a.createElement("span",{className:"amount"},f.currencySymbol+l))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"title-column"},"Description"),o.map((function(e,t){return r.a.createElement("td",{className:"product-desc",key:t},r.a.createElement("p",null,e.shortDescription?e.shortDescription:"N/A"))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"title-column"},"Rating"),o.map((function(e,t){return r.a.createElement("td",{className:"product-rating",key:t},r.a.createElement(E.a,{ratingValue:e.rating}))}))))))))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"item-empty-area text-center"},r.a.createElement("div",{className:"item-empty-area__icon mb-30"},r.a.createElement("i",{className:"pe-7s-shuffle"})),r.a.createElement("div",{className:"item-empty-area__text"},"No items found in compare ",r.a.createElement("br",null)," ",r.a.createElement(l.b,{to:"/shop-grid-standard"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=65.653b447c.chunk.js.map