/*! For license information please see 881.d3061148.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkumap_website=self.webpackChunkumap_website||[]).push([[881],{3258:function(e,t,r){var n=r(9439),a=r(2791),o=r(184);t.Z=function(e){var t=(0,a.useState)(!1),r=(0,n.Z)(t,2),i=r[0],s=r[1];return"password"==e.type?(0,o.jsxs)("div",{className:"w-full ",children:[(0,o.jsx)("p",{className:" text-base text-[#323232] mb-1 font-semibold",children:e.label}),(0,o.jsxs)("div",{className:"relative flex items-center ",children:[(0,o.jsx)("span",{className:"absolute right-0 pr-4 cursor-pointer material-symbols-outlined",onClick:function(){s(!i)},children:i?"visibility":"visibility_off"}),(0,o.jsx)("input",{onChange:e.onChange,value:e.value,type:i?"text":"password",required:!0,placeholder:e.label,className:" p-2 pl-4 text-sm  outline-none focus:border-yellow   border-[1px] border-[#9494945a] rounded-md w-full box-border "})]}),(0,o.jsx)("p",{className:"pl-1 mt-1 text-xs ",style:{color:"Great Password!"==e.warning||"Password Matched,Great!"==e.warning?"green":"red"},children:e.warning})]}):(0,o.jsxs)("div",{className:"w-full ",children:[(0,o.jsx)("p",{className:" text-base text-[#323232] mb-1 font-semibold",children:e.label}),(0,o.jsx)("input",{onChange:e.onChange,value:e.value,type:e.type,placeholder:e.label,required:!0,className:" p-2 pl-4 text-sm  outline-none focus:border-yellow   border-[1px] border-[#9494945a] rounded-md w-full box-border "}),(0,o.jsx)("p",{className:"pl-1 mt-1 text-xs text-red-500 ",children:e.warning})]})}},9709:function(e,t,r){var n=r(3263);n.Z.defaults.baseURL="https://zero322.pythonanywhere.com/api/v1/",n.Z.defaults.headers.get.Accept="application/json",n.Z.defaults.headers.post["Content-Type"]="application/json",t.Z=n.Z},3881:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),o=r(1413),i=r(9439),s=r(2586),c=r(1265),l=r(8951),u=r(5285),p=r(9709),d=r(3258),f=r(6590),h=r(7689),w=r(1087),m=r(2791),y=r(5439),v=r(184);t.default=function(){var e=(0,m.useState)(!1),t=(0,i.Z)(e,2),r=(t[0],t[1],(0,h.UO)()),x=((0,h.s0)(),(0,m.useState)((0,o.Z)((0,o.Z)({},r),{},{new_password:"",re_new_password:""}))),g=(0,i.Z)(x,2),b=g[0],_=g[1],j=(0,m.useState)(!1),Z=(0,i.Z)(j,2),N=(Z[0],Z[1],(0,m.useState)({display:!1,type:"warning",text:""})),L=(0,i.Z)(N,2),E=L[0],k=L[1],S=!1,P=!1,O=(0,m.useState)(),G=(0,i.Z)(O,2),C=G[0],I=G[1],T=(0,m.useState)(),U=(0,i.Z)(T,2),z=U[0],D=U[1];return(0,m.useEffect)((function(){S=b.new_password.length>8,P=!!/\d/.test(b.new_password),I(S&&P?"Great Password!":"Invalid password it must has number and length is more than 8"),b.new_password.length<=1&&I("")}),[b.new_password,b.re_new_password]),(0,m.useEffect)((function(){b.re_new_password==b.new_password?D("Password Matched,Great!"):D("Password not Matched"),b.re_new_password.length<1&&D("")}),[b.new_password,b.re_new_password]),(0,v.jsxs)("div",{className:"relative flex items-center justify-center w-screen h-screen overflow-hidden ",children:[(0,v.jsxs)("div",{className:"fixed top-0 z-50 flex justify-around object-contain w-full mt-4 cursor-pointer h-14 animate__animated animate__fadeInDown ",children:[(0,v.jsx)(w.rU,{to:"/welcome",children:(0,v.jsx)("img",{src:y,className:"z-50 h-10 object-contain cursor-pointer hover:scale-[0.9] transition-transform ",alt:"umap-logo",onClick:function(){}})}),(0,v.jsx)("ul",{className:"flex items-center gap-4 ",children:(0,v.jsxs)("li",{children:[" ",(0,v.jsx)(w.rU,{to:"/welcome",className:" text-base hover:bg-green-500 active:bg-green-300 text-white px-6 rounded-lg py-3 bg-yellow hover:scale-[1.07] transition-transform",children:"Go to Umap"})," "]})})]}),(0,v.jsxs)("form",{className:"  border-[1px] border-[#4b4b4b33] animate__animated animate__fadeInUp z-20 w-[30%] min-w-[400px] min-h-[10px] flex flex-col mt-16 px-12 py-8 gap-5 pb-14 rounded-3xl absolute bg-[#D9D9D9] backdrop-blur-lg bg-opacity-25",onSubmit:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!("Great Password!"==C&&b.re_new_password==b.new_password)){e.next=8;break}return k((0,o.Z)((0,o.Z)({},E),{},{display:!0,type:"",text:""})),e.next=6,p.Z.post("users/reset_password_confirm/",b).then((function(){k((0,o.Z)((0,o.Z)({},E),{},{display:!0,type:"success",text:"Password succesfully reset!"})),_((0,o.Z)((0,o.Z)({},r),{},{new_password:"",re_new_password:""})),setTimeout((function(){k((0,o.Z)((0,o.Z)({},E),{},{display:!1,type:"warning",text:""}))}),1e4)})).catch((function(e){try{k((0,o.Z)((0,o.Z)({},E),{},{display:!0,type:"warning",text:JSON.parse(e.request.response).token[0]}))}catch(t){}try{k((0,o.Z)((0,o.Z)({},E),{},{display:!0,type:"warning",text:JSON.parse(e.request.response).new_password[0]}))}catch(t){}setTimeout((function(){k((0,o.Z)((0,o.Z)({},E),{},{display:!1,type:"warning",text:""}))}),4e3)}));case 6:e.next=10;break;case 8:k((0,o.Z)((0,o.Z)({},E),{},{display:!0,type:"error",text:"Invalid Passwords - Make sure you made all things right"})),setTimeout((function(){k((0,o.Z)((0,o.Z)({},E),{},{display:!1,type:"warning",text:""}))}),4e3);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[(0,v.jsx)("p",{className:"font-[inter] text-[40px] text-[#493636] font-[500]",children:"Reset Password"}),(0,v.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,v.jsx)(d.Z,{label:"New password",type:"password",value:b.new_password,warning:C,onChange:function(e){_((0,o.Z)((0,o.Z)({},b),{},{new_password:e.target.value}))}}),(0,v.jsx)(d.Z,{label:"Confirm New Password",type:"password",value:b.re_new_password,warning:z,onChange:function(e){_((0,o.Z)((0,o.Z)({},b),{},{re_new_password:e.target.value}))}})]}),(0,v.jsx)("button",{className:"px-10 py-2 text-white rounded-md bg-gray hover:bg-opacity-90 ",children:E.display?"Sent to Gmail":"Send"}),(0,v.jsx)("div",{className:E.display?"block animate-pulse":"hidden",children:(0,v.jsx)(f.Z,{severity:E.type,variant:"outlined",children:E.text})})]}),(0,v.jsxs)("div",{className:" absolute flex flex-row w-full h-[60%] justify-evenly pointer-events-none",children:[(0,v.jsx)("div",{className:" w-[50%] h-[100%] flex justify-center animate__animated animate__fadeInLeft  ",children:(0,v.jsx)("img",{src:l,className:"absolute z-10 object-contain w-full h-full pointer-events-none animate-float",alt:""})}),(0,v.jsxs)("div",{className:"flex flex-col w-[50%] h-[100%] animate__animated animate__fadeInRight pointer-events-none ",children:[(0,v.jsx)("img",{src:u,className:"  animate-floatSun h-[200px] w-[200px] object-fill rotate-[-5deg] translate-y-[80px] translate-x-[-100px]  ",alt:""}),(0,v.jsx)("img",{src:s,className:"   animate-floatCloud h-[50%] w-[30%] object-contain rotate-[-25deg] translate-x-[30px] translate-y-[-30px]",alt:""}),(0,v.jsx)("img",{src:c,className:" animate-floatCash1 h-[90px] w-[90px] object-contain rotate-[35deg] translate-y-[-70px] translate-x-[90px] ",alt:""})]})]})]})}},2586:function(e,t,r){e.exports=r.p+"static/media/cloud_1.337487a541787ded8c14.png"},1265:function(e,t,r){e.exports=r.p+"static/media/cloud_2.65d11c865c598fa0820d.png"},8951:function(e,t,r){e.exports=r.p+"static/media/map.5009a4eb24b284675584.png"},5285:function(e,t,r){e.exports=r.p+"static/media/sun.270ef63f7b26792a94e4.png"},5439:function(e,t,r){e.exports=r.p+"static/media/umap-logo.ffa591be35d11a5c1fed.png"},5861:function(e,t,r){function n(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,c,"next",e)}function c(e){n(i,a,o,s,c,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return a}})},4165:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(1002);function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(P){u=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),s=new E(n||[]);return o(i,"_invoke",{value:j(e,r,s)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=p;var f={};function h(){}function w(){}function m(){}var y={};u(y,s,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(k([])));x&&x!==t&&r.call(x,s)&&(y=x);var g=m.prototype=h.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function a(o,i,s,c){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==(0,n.Z)(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,s,c)}),(function(e){a("throw",e,s,c)})):t.resolve(p).then((function(e){u.value=e,s(u)}),(function(e){return a("throw",e,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function j(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=Z(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function Z(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,Z(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function k(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return w.prototype=m,o(g,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:w,configurable:!0}),w.displayName=u(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(_.prototype),u(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new _(p(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),u(g,l,"Generator"),u(g,s,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}}}]);
//# sourceMappingURL=881.d3061148.chunk.js.map