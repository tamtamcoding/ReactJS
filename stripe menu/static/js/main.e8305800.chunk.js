(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(5),i=c.n(a),l=(c(11),c.p+"static/media/logo.6ad422bb.svg"),o=c(2),b=c(3),j=[{page:"products",links:[{label:"payment",icon:Object(n.jsx)(o.d,{}),url:"/products"},{label:"terminal",icon:Object(n.jsx)(o.d,{}),url:"/products"},{label:"connect",icon:Object(n.jsx)(o.d,{}),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:Object(n.jsx)(o.b,{}),url:"/products"},{label:"libraries",icon:Object(n.jsx)(o.b,{}),url:"/products"},{label:"help",icon:Object(n.jsx)(o.b,{}),url:"/products"},{label:"billing",icon:Object(n.jsx)(o.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(n.jsx)(o.c,{}),url:"/products"},{label:"customers",icon:Object(n.jsx)(o.c,{}),url:"/products"}]}],u=r.a.createContext(),d=function(e){var t=e.children,c=Object(s.useState)(!1),r=Object(b.a)(c,2),a=r[0],i=r[1],l=Object(s.useState)(!1),o=Object(b.a)(l,2),d=o[0],O=o[1],m=Object(s.useState)({}),p=Object(b.a)(m,2),h=p[0],x=p[1],v=Object(s.useState)({page:"",links:[]}),g=Object(b.a)(v,2),f=g[0],N=g[1];return Object(n.jsx)(u.Provider,{value:{isSubmenuOpen:d,isSidebarOpen:a,closeSubmenu:function(){O(!1)},openSubmenu:function(e,t){var c=j.find((function(t){return t.page===e}));N(c),x(t),O(!0)},openSidebar:function(){i(!0)},closeSidebar:function(){i(!1)},location:h,page:f},children:t})},O=function(){return Object(s.useContext)(u)},m=function(){var e=O(),t=e.openSidebar,c=e.openSubmenu,s=e.closeSubmenu,r=function(e){var t=e.target.textContent,n=e.target.getBoundingClientRect(),s=(n.left+n.right)/2,r=n.bottom-3;c(t,{center:s,bottom:r})};return Object(n.jsx)("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||s()},children:Object(n.jsxs)("div",{className:"nav-center",children:[Object(n.jsxs)("div",{className:"nav-header",children:[Object(n.jsx)("img",{src:l,className:"nav-logo",alt:"stripe"}),Object(n.jsx)("button",{className:"btn toggle-btn",onClick:t,children:Object(n.jsx)(o.a,{})})]}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"link-btn",onMouseOver:r,children:"products"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"link-btn",onMouseOver:r,children:"developers"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"link-btn",onMouseOver:r,children:"company"})})]}),Object(n.jsx)("button",{className:"btn signin-btn",children:"sign in"})]})})},p=c.p+"static/media/phone.94a7a4fe.svg",h=function(){var e=O().closeSubmenu;return Object(n.jsx)("section",{className:"hero",onMouseOver:e,children:Object(n.jsxs)("div",{className:"hero-center",children:[Object(n.jsxs)("article",{className:"hero-info",children:[Object(n.jsx)("h1",{children:"Payments infrasturcture for the internet"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum est similique placeat vero, quaerat ratione inventore laborum ullam pariatur."}),Object(n.jsx)("button",{className:"btn",children:"start now"})]}),Object(n.jsx)("article",{className:"hero-images",children:Object(n.jsx)("img",{src:p,className:"phone-img",alt:"phone"})})]})})},x=function(){var e=O(),t=e.isSidebarOpen,c=e.closeSidebar;return Object(n.jsx)("aside",{className:" ".concat(t?"sidebar-wrapper show":"sidebar-wrapper"),children:Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("button",{className:"close-btn",onClick:c,children:Object(n.jsx)(o.e,{})}),Object(n.jsx)("div",{className:"sidebar-links",children:j.map((function(e,t){var c=e.links,s=e.page;return Object(n.jsxs)("article",{children:[Object(n.jsx)("h4",{children:s}),Object(n.jsx)("div",{className:"sidebar-sublinks",children:c.map((function(e,t){var c=e.url,s=e.icon,r=e.label;return Object(n.jsxs)("a",{href:c,children:[s,r]},t)}))})]},t)}))})]})})},v=function(){var e=O(),t=e.isSubmenuOpen,c=e.location,r=e.page,a=r.page,i=r.links,l=Object(s.useRef)(null),o=Object(s.useState)("col-2"),j=Object(b.a)(o,2),u=j[0],d=j[1];return Object(s.useEffect)((function(){d("col-2");var e=l.current,t=c.center,n=c.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===i.length&&d("col-3"),i.length>3&&d("col-4")}),[c]),Object(n.jsxs)("aside",{className:"".concat(t?"submenu show":"submenu"),ref:l,children:[Object(n.jsx)("h4",{children:a}),Object(n.jsx)("div",{className:"submenu-center ".concat(u),children:i.map((function(e,t){var c=e.label,s=e.icon,r=e.url;return Object(n.jsxs)("a",{href:r,children:[s,c]},t)}))})]})};var g=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(x,{}),Object(n.jsx)(h,{}),Object(n.jsx)(v,{})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d,{children:Object(n.jsx)(g,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e8305800.chunk.js.map