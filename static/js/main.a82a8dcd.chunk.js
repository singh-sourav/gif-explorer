(this["webpackJsonpgif-explorer"]=this["webpackJsonpgif-explorer"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),i=n.n(c),o=(n(20),n(3)),u=n(8),s=n(5),f=n.n(s),h=n(13),l="VRQPLiguaZxwUaQUhcdjJU8wDrI1KJKU",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cheeseburgers",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r="https://api.giphy.com/v1/gifs/search?api_key=".concat(l,"&&q=").concat(t,"&&limit=").concat(n,"&&offset=").concat(e,"&&random_id=e826c9fc5c929e0d6c6d423841a282aa");return r},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n="https://api.giphy.com/v1/gifs/trending?api_key=".concat(l,"&&limit=").concat(t,"&&offset=").concat(e,"&&random_id=e826c9fc5c929e0d6c6d423841a282aa");return n};function m(){return(m=Object(h.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d(t,n));case 2:return r=e.sent,a=r.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(h.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g(t));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e,t){return{type:"FETCH_GIPHY_SUCCESS",payload:e,offset:t}},j=function(e,t){return function(n){(function(e,t){return m.apply(this,arguments)})(e,t).then((function(t){n(v(t.data,e))}))}},b=function(e){return function(t){(function(e){return p.apply(this,arguments)})(e).then((function(n){t(v(n.data,e))}))}},x=n(4);function O(e,t){var n;return function(){var r=arguments,a=this;n&&clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}}var y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],c=t[1],i=a.a.useMemo((function(){return O(r,c)}),[c,r]);return i},w=(n(26),n(1)),C=a.a.createContext(),S=localStorage.getItem("theme");function k(e){var t=a.a.useState(S),n=Object(o.a)(t,2),r=n[0],c=n[1];return a.a.useEffect((function(){document.querySelector("html").className=r}),[r]),Object(w.jsx)(C.Provider,{value:{theme:r,updateTheme:function(e){c(e),localStorage.setItem("theme",e)}},children:e.children})}function T(){var e=a.a.useContext(C);if(void 0===e)throw new Error("useThemeContext must be used within a ThemeContextProvider");return e}var E=function(e){var t=T(),n=t.theme,r=t.updateTheme,a=e.lightText,c=e.darkText,i="light"===n?c:a;return Object(w.jsx)("div",{id:"theme-toggler",onClick:function(){r("light"===n?"dark":"light")},children:i})};n(28);var _=function(e){var t=e.items,n=e.loaderref;return Object(w.jsx)("div",{id:"gif-container",children:t.map((function(e,r){return r===t.length-1?Object(w.jsx)("img",{ref:n,src:e.images.preview_gif.url,alt:e.title,className:"gif-img"},r):Object(w.jsx)("img",{src:e.images.preview_gif.url,alt:e.title,className:"gif-img"},r)}))})};var I=function(e){var t=e.onChangeCallback,n=e.placeholder,r=e.id;return Object(w.jsx)("input",{id:r,placeholder:n,onChange:t})};var F=Object(u.b)((function(e){return{items:e.items}}),(function(e){return Object(x.b)({startGiphyFetch:j,startGiphyTrendingFetch:b},e)}))((function(e){var t=e.startGiphyFetch,n=e.startGiphyTrendingFetch,r=e.items,c=a.a.useRef(),i=a.a.useState(1),u=Object(o.a)(i,2),s=u[0],f=u[1],h=a.a.useState(""),l=Object(o.a)(h,2),d=l[0],g=l[1],m=T().theme,p=y((function(e){var t=e.target.value;g(t)}),600);a.a.useEffect((function(){f(1)}),[d]),a.a.useEffect((function(){d?t(s,d):n(s)}),[s,t,n]);var v=a.a.useCallback((function(e){e[0].isIntersecting&&f((function(e){return e+1}))}),[]),j=y(v,600);return a.a.useEffect((function(){var e=c.current,t=new IntersectionObserver(j,{root:null,threshold:0});return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[j,r]),a.a.useEffect((function(){document.querySelector("#theme-toggler").className=m,document.querySelector("input").className=m}),[m]),Object(w.jsxs)("div",{id:"gif-dashboard",children:[Object(w.jsxs)("div",{className:"gif-query-container",children:[Object(w.jsx)(I,{id:"gif-query-input",placeholder:"Search your favourite GIFs",onChangeCallback:p}),Object(w.jsx)(E,{darkText:"Switch to Dark Mode",lightText:"Switch to Light Mode"})]}),Object(w.jsx)(_,{items:r,loaderref:c})]})})),G=n(9),q={items:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GIPHY_SUCCESS":return t.offset>1?{items:[].concat(Object(G.a)(e.items),Object(G.a)(t.payload))}:{items:Object(G.a)(t.payload)};default:return e}},U=n(14),P=n.n(U),H=n(15),J=function(){return Object(x.c)(N,Object(x.a)(P.a,H.a))}();i.a.render(Object(w.jsx)(u.a,{store:J,children:Object(w.jsx)(k,{children:Object(w.jsx)(F,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a82a8dcd.chunk.js.map