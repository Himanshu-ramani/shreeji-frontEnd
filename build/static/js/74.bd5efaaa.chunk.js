(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[74],{483:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103);a.a=function(e){var a=e.imageUrl,t=e.logoClass;return n.a.createElement("div",{className:"".concat(t||"")},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+a})))}},484:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(65);a.a=function(e){var a=e.currency,t=e.setCurrency,l=e.currentLanguageCode,r=e.dispatch,o=function(e){var a=e.target.value;r(Object(c.changeLanguage)(a))},m=function(e){var a=e.target.value;t(a)};return n.a.createElement("div",{className:"language-currency-wrap"},n.a.createElement("div",{className:"same-language-currency language-style"},n.a.createElement("span",null,"en"===l?"English":"fn"===l?"French":"de"===l?"Germany":""," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),n.a.createElement("li",null,n.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),n.a.createElement("li",null,n.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),n.a.createElement("div",{className:"same-language-currency use-style"},n.a.createElement("span",null,a.currencyName," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"USD",onClick:function(e){return m(e)}},"USD")),n.a.createElement("li",null,n.a.createElement("button",{value:"EUR",onClick:function(e){return m(e)}},"EUR")),n.a.createElement("li",null,n.a.createElement("button",{value:"GBP",onClick:function(e){return m(e)}},"GBP"))))),n.a.createElement("div",{className:"same-language-currency"},n.a.createElement("p",null,"Call Us 3965410")))}},486:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103);a.a=function(e){var a=e.footerLogo,t=e.spaceBottomClass,l=e.colorClass;return n.a.createElement("div",{className:"copyright ".concat(t||""," ").concat(l||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+a}))),n.a.createElement("p",null,"\xa9 2020"," ",n.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",n.a.createElement("br",null)," All Rights Reserved"))}},487:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(498),r=function(e){var a,t=e.status,l=e.message,c=e.onValidated;return n.a.createElement("div",{className:"subscribe-form"},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return a=e},type:"email",placeholder:"Enter your email address..."})),n.a.createElement("div",{className:"clear"},n.a.createElement("button",{className:"button",onClick:function(){a&&a.value.indexOf("@")>-1&&c({EMAIL:a.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===t&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===t&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===t&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}))},o=function(e){var a=e.mailchimpUrl;return n.a.createElement("div",null,n.a.createElement(c.a,{url:a,render:function(e){var a=e.subscribe,t=e.status,l=e.message;return n.a.createElement(r,{status:t,message:l,onValidated:function(e){return a(e)}})}}))};a.a=function(e){var a=e.spaceBottomClass,t=e.spaceLeftClass,l=e.sideMenu,c=e.colorClass,r=e.widgetColorClass;return n.a.createElement("div",{className:"footer-widget ".concat(a||""," ").concat(l?"ml-ntv5":t||""," ").concat(r||"")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"SUBSCRIBE")),n.a.createElement("div",{className:"subscribe-style ".concat(c||"")},n.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),n.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},489:function(e,a,t){"use strict";var l=t(479),n=t(0),c=t.n(n),r=t(103),o=t(499),m=t(486),s=t(487);a.a=function(e){var a=e.backgroundColorClass,t=e.spaceTopClass,i=e.spaceBottomClass,u=e.spaceLeftClass,E=e.spaceRightClass,d=e.containerClass,f=e.extraFooterClass,g=e.sideMenu,v=Object(n.useState)(0),b=Object(l.a)(v,2),p=b[0],N=b[1],h=Object(n.useState)(0),C=Object(l.a)(h,2),w=C[0],y=C[1];Object(n.useEffect)((function(){return y(100),window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[]);var S=function(){N(window.scrollY)};return c.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(t||""," ").concat(i||""," ").concat(f||""," ").concat(u||""," ").concat(E||"")},c.a.createElement("div",{className:"".concat(d||"container")},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"".concat(g?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement(m.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),c.a.createElement("div",{className:"".concat(g?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement("div",{className:"footer-widget mb-30 ml-30"},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"ABOUT US")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/about"},"About us")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Store location")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/contact"},"Contact")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Orders tracking")))))),c.a.createElement("div",{className:"".concat(g?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement("div",{className:"".concat(g?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"USEFUL LINKS")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Returns")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Support Policy")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Size guide")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"FAQs")))))),c.a.createElement("div",{className:"".concat(g?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},c.a.createElement("div",{className:"".concat(g?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"FOLLOW US")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),c.a.createElement("div",{className:"".concat(g?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},c.a.createElement(s.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:g})))),c.a.createElement("button",{className:"scroll-top ".concat(p>w?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},c.a.createElement("i",{className:"fa fa-angle-double-up"})))}},495:function(e,a,t){"use strict";var l=t(479),n=t(0),c=t.n(n),r=t(483),o=t(488),m=t(491),s=t(490),i=t(65),u=t(64),E=t(146),d=t(484),f=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(a){e(Object(E.b)(a))}}}))(Object(i.multilanguage)((function(e){var a=e.currency,t=e.setCurrency,l=e.currentLanguageCode,n=e.dispatch,r=e.borderStyle;return c.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===r?"border-bottom":"")},c.a.createElement(d.a,{currency:a,setCurrency:t,currentLanguageCode:l,dispatch:n}),c.a.createElement("div",{className:"header-offer"},c.a.createElement("p",null,"Free delivery on order over"," ",c.a.createElement("span",null,a.currencySymbol+(200*a.currencyRate).toFixed(2)))))})));a.a=function(e){var a=e.layout,t=e.top,i=e.borderStyle,u=e.headerPaddingClass,E=e.headerPositionClass,d=e.headerBgClass,g=Object(n.useState)(0),v=Object(l.a)(g,2),b=v[0],p=v[1],N=Object(n.useState)(0),h=Object(l.a)(N,2),C=h[0],w=h[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){p(window.scrollY)};return c.a.createElement("header",{className:"header-area clearfix ".concat(d||""," ").concat(E||"")},c.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===t?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===i?"border-none":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement(f,{borderStyle:i}))),c.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(b>C?"stick":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},c.a.createElement(r.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),c.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},c.a.createElement(o.a,null)),c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},c.a.createElement(m.a,null)))),c.a.createElement(s.a,null)))}},497:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(495),r=t(489);a.a=function(e){var a=e.children,t=e.headerContainerClass,o=e.headerTop,m=e.headerPaddingClass,s=e.headerPositionClass;return n.a.createElement(l.Fragment,null,n.a.createElement(c.a,{layout:t,top:o,headerPaddingClass:m,headerPositionClass:s}),a,n.a.createElement(r.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},501:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103),r=t(147);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},844:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(485),r=t.n(c),o=t(147),m=t(497),s=t(501),i=t(758),u=Object(i.GoogleApiWrapper)({apiKey:"AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"})((function(e){return n.a.createElement(i.Map,{google:e.google,zoom:10,style:{width:"100%",height:"100%"},initialCenter:{lat:e.latitude,lng:e.longitude}},n.a.createElement(i.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:"".concat("/assets/img/icon-img/2.png")},animation:e.google.maps.Animation.BOUNCE}))}));a.default=function(e){var a=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"Flone | Contact"),n.a.createElement("meta",{name:"description",content:"Contact of flone react minimalist eCommerce template."})),n.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:""+a},"Contact"),n.a.createElement(m.a,{headerTop:"visible"},n.a.createElement(s.a,null),n.a.createElement("div",{className:"contact-area pt-100 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"contact-map mb-10"},n.a.createElement(u,{latitude:"47.444",longitude:"-122.176"})),n.a.createElement("div",{className:"custom-row-2"},n.a.createElement("div",{className:"col-lg-4 col-md-5"},n.a.createElement("div",{className:"contact-info-wrap"},n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-phone"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,"+012 345 678 102"),n.a.createElement("p",null,"+012 345 678 102"))),n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-globe"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:urname@email.com"},"urname@email.com")),n.a.createElement("p",null,n.a.createElement("a",{href:"//urwebsitenaem.com"},"urwebsitenaem.com")))),n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-map-marker"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,"Address goes here, "),n.a.createElement("p",null,"street, Crossroad 123."))),n.a.createElement("div",{className:"contact-social text-center"},n.a.createElement("h3",null,"Follow Us"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//pinterest.com"},n.a.createElement("i",{className:"fa fa-pinterest-p"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//thumblr.com"},n.a.createElement("i",{className:"fa fa-tumblr"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//vimeo.com"},n.a.createElement("i",{className:"fa fa-vimeo"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))))))),n.a.createElement("div",{className:"col-lg-8 col-md-7"},n.a.createElement("div",{className:"contact-form"},n.a.createElement("div",{className:"contact-title mb-30"},n.a.createElement("h2",null,"Get In Touch")),n.a.createElement("form",{className:"contact-form-style"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("input",{name:"name",placeholder:"Name*",type:"text"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("input",{name:"email",placeholder:"Email*",type:"email"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("input",{name:"subject",placeholder:"Subject*",type:"text"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("textarea",{name:"message",placeholder:"Your Message*",defaultValue:""}),n.a.createElement("button",{className:"submit",type:"submit"},"SEND")))),n.a.createElement("p",{className:"form-messege"}))))))))}}}]);
//# sourceMappingURL=74.bd5efaaa.chunk.js.map