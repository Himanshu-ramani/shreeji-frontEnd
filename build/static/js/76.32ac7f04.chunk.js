(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[76],{483:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103);a.a=function(e){var a=e.imageUrl,t=e.logoClass;return n.a.createElement("div",{className:"".concat(t||"")},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+a})))}},484:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(65);a.a=function(e){var a=e.currency,t=e.setCurrency,l=e.currentLanguageCode,r=e.dispatch,o=function(e){var a=e.target.value;r(Object(c.changeLanguage)(a))},m=function(e){var a=e.target.value;t(a)};return n.a.createElement("div",{className:"language-currency-wrap"},n.a.createElement("div",{className:"same-language-currency language-style"},n.a.createElement("span",null,"en"===l?"English":"fn"===l?"French":"de"===l?"Germany":""," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),n.a.createElement("li",null,n.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),n.a.createElement("li",null,n.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),n.a.createElement("div",{className:"same-language-currency use-style"},n.a.createElement("span",null,a.currencyName," ",n.a.createElement("i",{className:"fa fa-angle-down"})),n.a.createElement("div",{className:"lang-car-dropdown"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"USD",onClick:function(e){return m(e)}},"USD")),n.a.createElement("li",null,n.a.createElement("button",{value:"EUR",onClick:function(e){return m(e)}},"EUR")),n.a.createElement("li",null,n.a.createElement("button",{value:"GBP",onClick:function(e){return m(e)}},"GBP"))))),n.a.createElement("div",{className:"same-language-currency"},n.a.createElement("p",null,"Call Us 3965410")))}},486:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103);a.a=function(e){var a=e.footerLogo,t=e.spaceBottomClass,l=e.colorClass;return n.a.createElement("div",{className:"copyright ".concat(t||""," ").concat(l||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{alt:"",src:""+a}))),n.a.createElement("p",null,"\xa9 2020"," ",n.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",n.a.createElement("br",null)," All Rights Reserved"))}},487:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(498),r=function(e){var a,t=e.status,l=e.message,c=e.onValidated;return n.a.createElement("div",{className:"subscribe-form"},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return a=e},type:"email",placeholder:"Enter your email address..."})),n.a.createElement("div",{className:"clear"},n.a.createElement("button",{className:"button",onClick:function(){a&&a.value.indexOf("@")>-1&&c({EMAIL:a.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===t&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===t&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===t&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}))},o=function(e){var a=e.mailchimpUrl;return n.a.createElement("div",null,n.a.createElement(c.a,{url:a,render:function(e){var a=e.subscribe,t=e.status,l=e.message;return n.a.createElement(r,{status:t,message:l,onValidated:function(e){return a(e)}})}}))};a.a=function(e){var a=e.spaceBottomClass,t=e.spaceLeftClass,l=e.sideMenu,c=e.colorClass,r=e.widgetColorClass;return n.a.createElement("div",{className:"footer-widget ".concat(a||""," ").concat(l?"ml-ntv5":t||""," ").concat(r||"")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"SUBSCRIBE")),n.a.createElement("div",{className:"subscribe-style ".concat(c||"")},n.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),n.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},489:function(e,a,t){"use strict";var l=t(479),n=t(0),c=t.n(n),r=t(103),o=t(499),m=t(486),s=t(487);a.a=function(e){var a=e.backgroundColorClass,t=e.spaceTopClass,i=e.spaceBottomClass,u=e.spaceLeftClass,E=e.spaceRightClass,d=e.containerClass,v=e.extraFooterClass,b=e.sideMenu,f=Object(n.useState)(0),g=Object(l.a)(f,2),p=g[0],N=g[1],y=Object(n.useState)(0),h=Object(l.a)(y,2),w=h[0],C=h[1];Object(n.useEffect)((function(){return C(100),window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var k=function(){N(window.scrollY)};return c.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(t||""," ").concat(i||""," ").concat(v||""," ").concat(u||""," ").concat(E||"")},c.a.createElement("div",{className:"".concat(d||"container")},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement(m.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),c.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement("div",{className:"footer-widget mb-30 ml-30"},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"ABOUT US")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/about"},"About us")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Store location")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/contact"},"Contact")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Orders tracking")))))),c.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},c.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"USEFUL LINKS")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Returns")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Support Policy")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"Size guide")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#/"},"FAQs")))))),c.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},c.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"FOLLOW US")),c.a.createElement("div",{className:"footer-list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),c.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},c.a.createElement(s.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:b})))),c.a.createElement("button",{className:"scroll-top ".concat(p>w?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},c.a.createElement("i",{className:"fa fa-angle-double-up"})))}},495:function(e,a,t){"use strict";var l=t(479),n=t(0),c=t.n(n),r=t(483),o=t(488),m=t(491),s=t(490),i=t(65),u=t(64),E=t(146),d=t(484),v=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(a){e(Object(E.b)(a))}}}))(Object(i.multilanguage)((function(e){var a=e.currency,t=e.setCurrency,l=e.currentLanguageCode,n=e.dispatch,r=e.borderStyle;return c.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===r?"border-bottom":"")},c.a.createElement(d.a,{currency:a,setCurrency:t,currentLanguageCode:l,dispatch:n}),c.a.createElement("div",{className:"header-offer"},c.a.createElement("p",null,"Free delivery on order over"," ",c.a.createElement("span",null,a.currencySymbol+(200*a.currencyRate).toFixed(2)))))})));a.a=function(e){var a=e.layout,t=e.top,i=e.borderStyle,u=e.headerPaddingClass,E=e.headerPositionClass,d=e.headerBgClass,b=Object(n.useState)(0),f=Object(l.a)(b,2),g=f[0],p=f[1],N=Object(n.useState)(0),y=Object(l.a)(N,2),h=y[0],w=y[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){p(window.scrollY)};return c.a.createElement("header",{className:"header-area clearfix ".concat(d||""," ").concat(E||"")},c.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===t?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===i?"border-none":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement(v,{borderStyle:i}))),c.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(g>h?"stick":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},c.a.createElement(r.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),c.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},c.a.createElement(o.a,null)),c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},c.a.createElement(m.a,null)))),c.a.createElement(s.a,null)))}},497:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(495),r=t(489);a.a=function(e){var a=e.children,t=e.headerContainerClass,o=e.headerTop,m=e.headerPaddingClass,s=e.headerPositionClass;return n.a.createElement(l.Fragment,null,n.a.createElement(c.a,{layout:t,top:o,headerPaddingClass:m,headerPositionClass:s}),a,n.a.createElement(r.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},501:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(103),r=t(147);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},795:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(485),r=t.n(c),o=t(147),m=t(776),s=t(775),i=t(497),u=t(501);a.default=function(e){var a=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"Flone | My Account"),n.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),n.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:""+a},"My Account"),n.a.createElement(i.a,{headerTop:"visible"},n.a.createElement(u.a,null),n.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},n.a.createElement("div",{className:"myaccount-wrapper"},n.a.createElement(s.a,{defaultActiveKey:"0"},n.a.createElement(m.a,{className:"single-my-account mb-20"},n.a.createElement(m.a.Header,{className:"panel-heading"},n.a.createElement(s.a.Toggle,{variant:"link",eventKey:"0"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"1 .")," Edit your account information"," "))),n.a.createElement(s.a.Collapse,{eventKey:"0"},n.a.createElement(m.a.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"My Account Information"),n.a.createElement("h5",null,"Your Personal Details")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{type:"email"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Telephone"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Fax"),n.a.createElement("input",{type:"text"})))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue"))))))),n.a.createElement(m.a,{className:"single-my-account mb-20"},n.a.createElement(m.a.Header,{className:"panel-heading"},n.a.createElement(s.a.Toggle,{variant:"link",eventKey:"1"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"2 .")," Change your password"))),n.a.createElement(s.a.Collapse,{eventKey:"1"},n.a.createElement(m.a.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"Change Password"),n.a.createElement("h5",null,"Your Password")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password"}))),n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Password Confirm"),n.a.createElement("input",{type:"password"})))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue"))))))),n.a.createElement(m.a,{className:"single-my-account mb-20"},n.a.createElement(m.a.Header,{className:"panel-heading"},n.a.createElement(s.a.Toggle,{variant:"link",eventKey:"2"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"3 .")," Modify your address book entries"," "))),n.a.createElement(s.a.Collapse,{eventKey:"2"},n.a.createElement(m.a.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"Address Book Entries")),n.a.createElement("div",{className:"entries-wrapper"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"entries-info text-center"},n.a.createElement("p",null,"John Doe"),n.a.createElement("p",null,"Paul Park "),n.a.createElement("p",null,"Lorem ipsum dolor set amet"),n.a.createElement("p",null,"NYC"),n.a.createElement("p",null,"New York"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"entries-edit-delete text-center"},n.a.createElement("button",{className:"edit"},"Edit"),n.a.createElement("button",null,"Delete"))))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue")))))))))))))))}}}]);
//# sourceMappingURL=76.32ac7f04.chunk.js.map