/*! For license information please see 416.021c748e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[416,165,909],{713:function(t,e,r){r.d(e,{Df:function(){return c},TP:function(){return h},tx:function(){return d},z1:function(){return u},zv:function(){return p}});var n=r(861),i=r(243);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function l(t,e,r,i){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new N(i||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var m={};u(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==e&&r.call(y,a)&&(m=y);var w=d.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function i(n,o,a,c){var s=h(t[n],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(s.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function b(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=u(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var a="a4d1120350c665aad10b441227c13583";function c(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a),t.next=4,i.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return l=(0,n.Z)(o().mark((function t(e){var r,n,c,s=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,t.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(r),t.next=5,i.Z.get(n);case 5:return c=t.sent,t.abrupt("return",c.data.results);case 9:return t.prev=9,t.t0=t.catch(1),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),l.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a),t.next=4,i.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a),t.next=4,i.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.cast);case 8:return t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie credits:",t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a),t.next=4,i.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie reviews:",t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},165:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(439),i=r(791),o=r(713),a="Cast_castContainer__oFsds",c="Cast_error__A5OsQ",s="Cast_castList__GVdlp",u="Cast_actorItem__hK1Ln",l=r(184),h=function(t){var e=t.movieId,r=(0,i.useState)([]),h=(0,n.Z)(r,2),f=h[0],p=h[1],v=(0,i.useState)(null),d=(0,n.Z)(v,2),m=d[0],g=d[1];return(0,i.useEffect)((function(){(0,o.zv)(e).then((function(t){p(t)})).catch((function(t){g("Error fetching movie credits: "+t.message)}))}),[e]),m?(0,l.jsx)("div",{children:m}):f.length?(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("h2",{children:"Cast"}),m?(0,l.jsxs)("p",{className:c,children:["Error: ",m]}):(0,l.jsx)("div",{className:s,children:f.map((function(t){return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg",alt:t.name,width:250}),(0,l.jsx)("p",{children:t.name})]},t.id)}))})]}):(0,l.jsx)("div",{children:"Loading..."})}},416:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(439),i=r(791),o=r(689),a=r(87),c=r(713),s=r(165),u=r(909),l="MovieDetails_moviesDetailsContainer__QwIxP",h="MovieDetails_wrapper__Wwxj1",f="MovieDetails_movieInfo__sT7Ak",p="MovieDetails_additionalInfo__glx+3",v="MovieDetails_list__EzrOP",d="MovieDetails_listItem__CMm6F",m="MovieDetails_btn__8UcwR",g=r(184),y=function(){var t=(0,o.UO)().movieId,e=(0,i.useState)([]),r=(0,n.Z)(e,2),y=r[0],w=r[1],x=(0,i.useState)(null),_=(0,n.Z)(x,2),j=_[0],b=_[1],E=(0,o.TH)(),L=(0,o.s0)();if((0,i.useEffect)((function(){(0,c.TP)(t).then((function(t){w(t)})).catch((function(t){b("Error fetching movie details: "+t.message)}))}),[t]),!y)return(0,g.jsx)("div",{children:"Loading..."});if(j)return(0,g.jsx)("div",{children:j});var N=y.vote_average,k=N?N/10*100:null;return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("button",{type:"button",className:m,onClick:function(){E.pathname.includes("/movies")?L(-1):L("/")},children:"Go back"}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("img",{src:y.poster_path?"https://image.tmdb.org/t/p/w500/".concat(y.poster_path):"https://pixabay.com/get/gd15a64a0946404c26e64ae5f9341e3c314f3651c4daf118c426cbd529dd7056b94aec049dd059efc3495f8c71bde104c_640.jpg",width:250,alt:"poster"}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("h2",{children:y.title?y.title:y.name}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(k)," %"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{children:y.overview})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Genres"}),(0,g.jsx)("p",{children:y.genres&&y.genres.map((function(t){return t.name})).join(" ")})]})]})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("h2",{children:"Additional information"}),(0,g.jsxs)("ul",{className:v,children:[(0,g.jsx)("li",{children:(0,g.jsx)(a.OL,{className:d,to:"/movies/".concat(t,"/cast"),children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(a.OL,{className:d,to:"/movies/".concat(t,"/reviews"),children:"Reviews"})})]})]}),(0,g.jsxs)(o.Z5,{children:[(0,g.jsx)(o.AW,{path:"cast",element:(0,g.jsx)(s.default,{movieId:t})}),(0,g.jsx)(o.AW,{path:"reviews",element:(0,g.jsx)(u.default,{movieId:t})})]})]})}},909:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n=r(439),i=r(791),o=r(713),a={reviewsContainer:"Reviews_reviewsContainer__P6f0f",reviewList:"Reviews_reviewList__it9Bj",reviewItem:"Reviews_reviewItem__nj+k4",authorName:"Reviews_authorName__04Tj-"},c=r(184),s=function(t){var e=t.movieId,r=(0,i.useState)([]),s=(0,n.Z)(r,2),u=s[0],l=s[1],h=(0,i.useState)(null),f=(0,n.Z)(h,2),p=f[0],v=f[1];return(0,i.useEffect)((function(){(0,o.tx)(e).then((function(t){l(t)})).catch((function(t){v("Error fetching trending movies: "+t.message)}))}),[e]),(0,c.jsx)("div",{className:a.reviewsContainer,children:u.length>0?(0,c.jsx)("ul",{className:a.reviewList,children:u.map((function(t){return(0,c.jsxs)("li",{className:a.reviewItem,children:[(0,c.jsx)("h2",{className:a.authorName,children:t.author}),(0,c.jsx)("p",{className:a.reviewContent,children:t.content})]},t.id)}))}):(0,c.jsx)("p",{className:a.noReviews,children:p?"Error: ".concat(p):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=416.021c748e.chunk.js.map