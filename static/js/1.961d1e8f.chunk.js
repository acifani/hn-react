/*! For license information please see 1.961d1e8f.chunk.js.LICENSE.txt */
(this.webpackJsonpyahnc=this.webpackJsonpyahnc||[]).push([[1],{139:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u}));var a="https://api.hnpwa.com/v0/",r=n(141),o=Object(r.unstable_createResource)((function(e){var t=e.list,n=e.page;return fetch("".concat(a).concat(t,"/").concat(n||1,".json")).then((function(e){return e.json()}))}),(function(e){return e.list+e.page})),c=Object(r.unstable_createResource)((function(e){return fetch("".concat(a,"item/").concat(e,".json")).then((function(e){return e.json()}))})),u=Object(r.unstable_createResource)((function(e){return fetch("".concat(a,"user/").concat(e,".json")).then((function(e){return e.json()}))}))},141:function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e=n(0),a=n(96),r=function(e,t){for(var n=arguments.length,a=Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(a.length>8)throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!==typeof console){var o=a.map((function(e){return""+e})),c=o[0],u=o[1],l=o[2],s=o[3],i=o[4],m=o[5],v=o[6],f=o[7],d="Warning: "+t;switch(a.length){case 0:console.error(d);break;case 1:console.error(d,c);break;case 2:console.error(d,c,u);break;case 3:console.error(d,c,u,l);break;case 4:console.error(d,c,u,l,s);break;case 5:console.error(d,c,u,l,s,i);break;case 6:console.error(d,c,u,l,s,i,m);break;case 7:console.error(d,c,u,l,s,i,m,v);break;case 8:console.error(d,c,u,l,s,i,m,v,f);break;default:throw new Error("warningWithoutStack() currently supports at most 8 arguments.")}}try{var p=0,E="Warning: "+t.replace(/%s/g,(function(){return a[p++]}));throw new Error(E)}catch(h){}}};var o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function c(e,t){var n=o.current;if(null===n)throw new Error("react-cache: read and preload may only be called from within a component's render. They are not supported in event handlers or lifecycle methods.");return n.readContext(e,t)}function u(e){return"string"!==typeof e&&"number"!==typeof e&&"boolean"!==typeof e&&void 0!==e&&null!==e&&r(!1,"Invalid key type. Expected a string, number, symbol, or boolean, but instead received: %s\n\nTo use non-primitive values as keys, you must pass a hash function as the second argument to createResource().",e),e}var l=function(e){var t=e,n=null,r=0,o=!1;function c(){!1===o&&r>t&&(o=!0,a.unstable_scheduleCallback(u))}function u(){o=!1,function(e){if(null!==n)for(var t=n.previous;r>e&&null!==t;){var a=t.onDelete,o=t.previous;t.onDelete=null,t.previous=t.next=null,t===n?n=t=null:(n.previous=o,o.next=n,t=o),r-=1,a()}}(t)}return{add:function(e,t){var a={value:e,onDelete:t,next:null,previous:null};if(null===n)a.previous=a.next=a,n=a;else{var o=n.previous;o.next=a,a.previous=o,n.previous=a,a.next=n,n=a}return r+=1,a},update:function(e,t){e.value=t},access:function(e){var t=e.next;if(null!==t){var a=n;if(n!==e){var r=e.previous;r.next=t,t.previous=r;var o=a.previous;o.next=e,e.previous=o,a.previous=e,e.next=a,n=e}}return c(),e.value},setLimit:function(e){t=e,c()}}}(500),s=new Map,i=e.createContext(null);function m(e,t,n,a){var r=s.get(e);void 0===r&&(r=new Map,s.set(e,r));var o=r.get(a);if(void 0===o){var c=t(n);c.then((function(e){if(0===u.status){var t=u;t.status=1,t.value=e}}),(function(e){if(0===u.status){var t=u;t.status=2,t.value=e}}));var u={status:0,value:c},i=l.add(u,v.bind(null,e,a));return r.set(a,i),u}return l.access(o)}function v(e,t){var n=s.get(e);void 0!==n&&(n.delete(t),0===n.size&&s.delete(e))}t.unstable_createResource=function(e,t){var n=void 0!==t?t:u,a={read:function(t){c(i);var r=n(t),o=m(a,e,t,r);switch(o.status){case 0:throw o.value;case 1:return o.value;case 2:throw o.value;default:return}},preload:function(t){c(i);var r=n(t);m(a,e,t,r)}};return a},t.unstable_setGlobalCacheLimit=function(e){l.setLimit(e)}}()},150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(143),r=n(0),o=n.n(r),c=n(81),u=n(144),l=n(147),s=o.a.memo((function(e){var t=e.comment,n=Object(r.useState)(!0),a=Object(u.a)(n,2),s=a[0],i=a[1],v=function(e){var t;(null===(t=window.getSelection())||void 0===t?void 0:t.toString())||i(!s)};return o.a.createElement(l.a.Group,{threaded:!!t.comments&&s},o.a.createElement(l.a,null,o.a.createElement(l.a.Avatar,{src:"https://avatars.dicebear.com/v2/identicon/".concat(t.user,".svg")}),o.a.createElement(l.a.Content,null,t.user&&o.a.createElement(l.a.Author,{as:"a"},o.a.createElement(c.h,{user:t.user})),o.a.createElement(l.a.Metadata,{as:"span"},t.time_ago," ",o.a.createElement("span",{onClick:v,style:{cursor:"pointer"}},s?"[-] collapse":"[+] expand")),o.a.createElement(l.a.Text,{onClick:v},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:s?t.content:"<br/>"}}))),t.comments&&s&&o.a.createElement(m,{comments:t.comments})))})),i=n(139),m=function(e){var t=e.comments.map((function(e){return o.a.createElement(s,{key:e.id,comment:e})}));return o.a.createElement(o.a.Fragment,null,t)},v=function(e){var t=e.id,n=i.a.read(t);return o.a.createElement(m,{comments:n.comments})},f=n(148),d=n(149),p=n(76),E=function(e){var t=e.id,n=i.a.read(t);return o.a.createElement(f.a.Group,null,o.a.createElement(f.a,null,o.a.createElement(f.a.Content,null,o.a.createElement(f.a.Header,{content:o.a.createElement(c.f,{news:n})}),o.a.createElement(f.a.Description,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.content||""}})),o.a.createElement(f.a.Extra,null,o.a.createElement(d.a,{horizontal:!0,verticalAlign:"middle"},o.a.createElement(d.a.Item,null,o.a.createElement(p.a,{name:"time"})," ",n.time_ago),o.a.createElement(d.a.Item,null,o.a.createElement(p.a,{name:"heart"})," ",n.points),o.a.createElement(d.a.Item,null,o.a.createElement(p.a,{name:"user"})," ",o.a.createElement(c.h,{user:n.user})),n.domain&&o.a.createElement(d.a.Item,null,o.a.createElement(p.a,{name:"world"}),o.a.createElement(c.b,{domain:n.domain})))))))},h=o.a.memo((function(){return o.a.createElement(o.a.Fragment,null,Object(a.a)(Array(5)).map((function(e,t){return o.a.createElement(c.a,{key:t})})))})),b=function(e){var t=e.match.params.id;return t?o.a.createElement("div",null,o.a.createElement(c.c,{fallback:o.a.createElement(c.d,{error:"Could not fetch comments"})},o.a.createElement(r.Suspense,{fallback:o.a.createElement(c.g,null)},o.a.createElement(E,{id:t})),o.a.createElement(r.Suspense,{fallback:o.a.createElement(h,null)},o.a.createElement(v,{id:t})))):null}}}]);
//# sourceMappingURL=1.961d1e8f.chunk.js.map