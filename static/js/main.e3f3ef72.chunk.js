(this["webpackJsonpgif-explorer"]=this["webpackJsonpgif-explorer"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),i=n.n(c),o=(n(20),n(3)),u=n(9),s=n(6),l=n.n(s),f=n(13),d="VRQPLiguaZxwUaQUhcdjJU8wDrI1KJKU",h="https://api.giphy.com",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cheeseburgers",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r="".concat(h,"/v1/gifs/search?api_key=").concat(d,"&&q=").concat(t,"&&limit=").concat(n,"&&offset=").concat(e,"&&random_id=e826c9fc5c929e0d6c6d423841a282aa");return r},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n="".concat(h,"/v1/gifs/trending?api_key=").concat(d,"&&limit=").concat(t,"&&offset=").concat(e,"&&random_id=e826c9fc5c929e0d6c6d423841a282aa");return n};function v(){return(v=Object(f.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g(t,n));case 2:return r=e.sent,a=r.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j(t));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e,t){return{type:"FETCH_GIPHY_SUCCESS",payload:e,offset:t}},p=function(e,t){return function(n){(function(e,t){return v.apply(this,arguments)})(e,t).then((function(t){n(b(t.data,e))}))}},O=function(e){return function(t){(function(e){return m.apply(this,arguments)})(e).then((function(n){t(b(n.data,e))}))}},x=n(5);function w(e,t){var n;return function(){var r=arguments,a=this;n&&clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}}var y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],c=t[1],i=a.a.useMemo((function(){return w(r,c)}),[c,r]);return i},S=(n(26),n(1)),C=a.a.createContext(),T=localStorage.getItem("theme");function k(e){var t=a.a.useState(T||"dark"),n=Object(o.a)(t,2),r=n[0],c=n[1];return a.a.useEffect((function(){document.querySelector("html").className=r}),[r]),Object(S.jsx)(C.Provider,{value:{theme:r,updateTheme:function(e){c(e),localStorage.setItem("theme",e)}},children:e.children})}function I(){var e=a.a.useContext(C);if(void 0===e)throw new Error("useThemeContext must be used within a ThemeContextProvider");return e}var E=function(e){var t=I(),n=t.theme,r=t.updateTheme,a=e.lightText,c=e.darkText,i="light"===n?c:a;return Object(S.jsx)("div",{id:"theme-toggler",onClick:function(){r("light"===n?"dark":"light")},children:i})},N=n(2);n(28);var A=function(e){var t=e.key,n=e.src,r=e.width,c=e.height,i=e.lastImage,o=e.alt,u=e.loaderref,s=void 0===u?null:u,l=e.className,f=void 0===l?null:l,d=a.a.useRef();return a.a.useEffect((function(){var e=d.current;e.src=n,e.onload=function(){e.style.visibility="visible",d.current=null}}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{id:t,width:r,height:c,ref:d,src:n,alt:o,className:f},t),i&&Object(S.jsx)("div",{ref:s})]})};var _=function(e){var t=e.gifsToAppend,n=e.loaderref,r=e.offset,c=a.a.useState([[],[],[],[]]),i=Object(o.a)(c,2),u=i[0],s=i[1];a.a.useEffect((function(){for(var e=[[],[],[],[]],n=Math.ceil(t.length/4),a=0;a<4;a++)for(var c=0;c<n;c++){var i=t[c+a*n];i&&e[a].push(i)}s(1===r?[Object(N.a)(e[0]),Object(N.a)(e[1]),Object(N.a)(e[2]),Object(N.a)(e[3])]:function(t){return[[].concat(Object(N.a)(t[0]),Object(N.a)(e[0])),[].concat(Object(N.a)(t[1]),Object(N.a)(e[1])),[].concat(Object(N.a)(t[2]),Object(N.a)(e[2])),[].concat(Object(N.a)(t[3]),Object(N.a)(e[3]))]})}),[t,r]);var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return e.map((function(e,r,a){return 3===t&&r===a.length-1?Object(S.jsx)(A,{loaderref:n,src:e.images.original.url,width:e.images.original.width,height:e.images.original.height,lastImage:!0,alt:e.title,className:"gif-img"}):Object(S.jsx)(A,{width:e.images.original.width,height:e.images.original.height,src:e.images.original.url,alt:e.title,className:"gif-img"})}))};return Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"column",children:l(u[0])},1),Object(S.jsx)("div",{className:"column",children:l(u[1])},2),Object(S.jsx)("div",{className:"column",children:l(u[2])},3),Object(S.jsx)("div",{className:"column",children:l(u[3],3)},4)]})};var F=function(e){var t=e.onChangeCallback,n=e.placeholder,r=e.id;return Object(S.jsx)("input",{id:r,placeholder:n,onChange:t})};var G=Object(u.b)((function(e){return{newItemsAdded:e.newItemsAdded}}),(function(e){return Object(x.b)({startGiphyFetch:p,startGiphyTrendingFetch:O},e)}))((function(e){var t=e.startGiphyFetch,n=e.startGiphyTrendingFetch,r=e.newItemsAdded,c=a.a.useRef(),i=a.a.useRef(),u=a.a.useState(1),s=Object(o.a)(u,2),l=s[0],f=s[1],d=a.a.useState(""),h=Object(o.a)(d,2),g=h[0],j=h[1],v=I().theme,m=y((function(e){var t=e.target.value;j(t)}),200);a.a.useEffect((function(){f(1),g?t(1,g):n(1)}),[g,t,n]),a.a.useEffect((function(){l>1&&(g?t(l,g):n(l))}),[l,t,n]);var b=a.a.useCallback((function(e){e[0].isIntersecting&&f((function(e){return e+1}))}),[]),p=y(b,15);return a.a.useEffect((function(){return setTimeout((function(){var e=c.current;return i.current=new IntersectionObserver(p,{root:null,rootMargin:"100px",threshold:0}),e&&i.current.observe(e),function(){e&&i.current.unobserve(e)}}),0)}),[p,r,c]),a.a.useEffect((function(){document.querySelector("#theme-toggler").className=v,document.querySelector("input").className=v}),[v]),Object(S.jsxs)("div",{id:"gif-dashboard",children:[Object(S.jsxs)("div",{className:"gif-query-container",children:[Object(S.jsx)(F,{id:"gif-query-input",placeholder:"Search your favourite GIFs",onChangeCallback:m}),Object(S.jsx)(E,{darkText:"Switch to Dark Mode",lightText:"Switch to Light Mode"})]}),Object(S.jsx)(_,{gifsToAppend:r,offset:l,loaderref:c})]})})),q={newItemsAdded:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GIPHY_SUCCESS":return{newItemsAdded:Object(N.a)(t.payload)};default:return e}},M=n(14),P=n.n(M),H=n(15),J=function(){return Object(x.c)(U,Object(x.a)(P.a,H.a))}();i.a.render(Object(S.jsx)(u.a,{store:J,children:Object(S.jsx)(k,{children:Object(S.jsx)(G,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e3f3ef72.chunk.js.map