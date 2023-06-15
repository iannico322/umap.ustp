"use strict";(self.webpackChunkumap_website=self.webpackChunkumap_website||[]).push([[811],{1811:function(e,n,t){t.d(n,{Z:function(){return se}});var r=t(9439),i=t(4942),o=t(7462),u=t(3366),a=t(2791),l=t(8182),c=t(4419),s=t(60),p=t(8203);function d(e,n){"function"===typeof e?e(n):e&&(e.current=n)}var f=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return a.useMemo((function(){return n.every((function(e){return null==e}))?null:function(e){n.forEach((function(n){d(n,e)}))}}),n)},h="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;var v,m=function(e){var n=a.useRef(e);return h((function(){n.current=e})),a.useCallback((function(){return n.current.apply(void 0,arguments)}),[])},b=!0,y=!1,g={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function R(e){e.metaKey||e.altKey||e.ctrlKey||(b=!0)}function x(){b=!1}function E(){"hidden"===this.visibilityState&&y&&(b=!0)}function M(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return b||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!g[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var Z=function(){var e=a.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",R,!0),n.addEventListener("mousedown",x,!0),n.addEventListener("pointerdown",x,!0),n.addEventListener("touchstart",x,!0),n.addEventListener("visibilitychange",E,!0))}),[]),n=a.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!M(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(y=!0,window.clearTimeout(v),v=window.setTimeout((function(){y=!1}),100),n.current=!1,!0)},ref:e}},w=t(3433),T=t(168),k=t(7326),C=t(9611);var P=a.createContext(null);function V(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function L(e,n,t){return null!=t[n]?t[n]:e.props[n]}function S(e,n,t){var r=V(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var u in e)u in n?o.length&&(i[u]=o,o=[]):o.push(u);var a={};for(var l in n){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];a[i[l][r]]=t(c)}a[l]=t(l)}for(r=0;r<o.length;r++)a[o[r]]=t(o[r]);return a}(n,r);return Object.keys(i).forEach((function(o){var u=i[o];if((0,a.isValidElement)(u)){var l=o in n,c=o in r,s=n[o],p=(0,a.isValidElement)(s)&&!s.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,a.isValidElement)(s)&&(i[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:s.props.in,exit:L(u,"exit",e),enter:L(u,"enter",e)})):i[o]=(0,a.cloneElement)(u,{in:!1}):i[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:!0,exit:L(u,"exit",e),enter:L(u,"enter",e)})}})),i}var D=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},F=function(e){var n,t;function r(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,k.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,(0,C.Z)(n,t);var i=r.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,V(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:L(e,"appear",t),enter:L(e,"enter",t),exit:L(e,"exit",t)})}))):S(e,i,o),firstRender:!1}},i.handleExited=function(e,n){var t=V(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},i.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,u.Z)(e,["component","childFactory"]),i=this.state.contextValue,o=D(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?a.createElement(P.Provider,{value:i},o):a.createElement(P.Provider,{value:i},a.createElement(n,r,o))},r}(a.Component);F.propTypes={},F.defaultProps={component:"div",childFactory:function(e){return e}};var j=F,B=t(2554),N=t(184);var I=function(e){var n=e.className,t=e.classes,i=e.pulsate,o=void 0!==i&&i,u=e.rippleX,c=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=a.useState(!1),v=(0,r.Z)(h,2),m=v[0],b=v[1],y=(0,l.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),g={width:s,height:s,top:-s/2+c,left:-s/2+u},R=(0,l.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate);return p||m||b(!0),a.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,N.jsx)("span",{className:y,style:g,children:(0,N.jsx)("span",{className:R})})},O=t(5878);var z,K,X,A,U,Y,H,W,q=(0,O.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),_=["center","classes","className"],G=(0,B.F4)(U||(U=z||(z=(0,T.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),J=(0,B.F4)(Y||(Y=K||(K=(0,T.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),Q=(0,B.F4)(H||(H=X||(X=(0,T.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),$=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ee=(0,s.ZP)(I,{name:"MuiTouchRipple",slot:"Ripple"})(W||(W=A||(A=(0,T.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),q.rippleVisible,G,550,(function(e){return e.theme.transitions.easing.easeInOut}),q.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),q.child,q.childLeaving,J,550,(function(e){return e.theme.transitions.easing.easeInOut}),q.childPulsate,Q,(function(e){return e.theme.transitions.easing.easeInOut})),ne=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),i=t.center,c=void 0!==i&&i,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,u.Z)(t,_),v=a.useState([]),m=(0,r.Z)(v,2),b=m[0],y=m[1],g=a.useRef(0),R=a.useRef(null);a.useEffect((function(){R.current&&(R.current(),R.current=null)}),[b]);var x=a.useRef(!1),E=a.useRef(null),M=a.useRef(null),Z=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(E.current)}}),[]);var T=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,i=e.rippleSize,o=e.cb;y((function(e){return[].concat((0,w.Z)(e),[(0,N.jsx)(ee,{classes:{ripple:(0,l.Z)(d.ripple,q.ripple),rippleVisible:(0,l.Z)(d.rippleVisible,q.rippleVisible),ripplePulsate:(0,l.Z)(d.ripplePulsate,q.ripplePulsate),child:(0,l.Z)(d.child,q.child),childLeaving:(0,l.Z)(d.childLeaving,q.childLeaving),childPulsate:(0,l.Z)(d.childPulsate,q.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:i},g.current)])})),g.current+=1,R.current=o}),[d]),k=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=n.pulsate,i=void 0!==r&&r,o=n.center,u=void 0===o?c||n.pulsate:o,a=n.fakeElement,l=void 0!==a&&a;if("mousedown"===(null==e?void 0:e.type)&&x.current)x.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);var s,p,d,f=l?null:Z.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(u||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),p=Math.round(b-h.top)}if(u)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var y=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,g=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(y,2)+Math.pow(g,2))}null!=e&&e.touches?null===M.current&&(M.current=function(){T({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})},E.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):T({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[c,T]),C=a.useCallback((function(){k({},{pulsate:!0})}),[k]),P=a.useCallback((function(e,n){if(clearTimeout(E.current),"touchend"===(null==e?void 0:e.type)&&M.current)return M.current(),M.current=null,void(E.current=setTimeout((function(){P(e,n)})));M.current=null,y((function(e){return e.length>0?e.slice(1):e})),R.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:C,start:k,stop:P}}),[C,k,P]),(0,N.jsx)($,(0,o.Z)({className:(0,l.Z)(q.root,d.root,f),ref:Z},h,{children:(0,N.jsx)(j,{component:null,exit:!0,children:b})}))})),te=ne,re=t(7225);function ie(e){return(0,re.Z)("MuiButtonBase",e)}var oe,ue=(0,O.Z)("MuiButtonBase",["root","disabled","focusVisible"]),ae=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],le=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((oe={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,i.Z)(oe,"&.".concat(ue.disabled),{pointerEvents:"none",cursor:"default"}),(0,i.Z)(oe,"@media print",{colorAdjust:"exact"}),oe)),ce=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),i=t.action,s=t.centerRipple,d=void 0!==s&&s,h=t.children,v=t.className,b=t.component,y=void 0===b?"button":b,g=t.disabled,R=void 0!==g&&g,x=t.disableRipple,E=void 0!==x&&x,M=t.disableTouchRipple,w=void 0!==M&&M,T=t.focusRipple,k=void 0!==T&&T,C=t.LinkComponent,P=void 0===C?"a":C,V=t.onBlur,L=t.onClick,S=t.onContextMenu,D=t.onDragLeave,F=t.onFocus,j=t.onFocusVisible,B=t.onKeyDown,I=t.onKeyUp,O=t.onMouseDown,z=t.onMouseLeave,K=t.onMouseUp,X=t.onTouchEnd,A=t.onTouchMove,U=t.onTouchStart,Y=t.tabIndex,H=void 0===Y?0:Y,W=t.TouchRippleProps,q=t.touchRippleRef,_=t.type,G=(0,u.Z)(t,ae),J=a.useRef(null),Q=a.useRef(null),$=f(Q,q),ee=Z(),ne=ee.isFocusVisibleRef,re=ee.onFocus,oe=ee.onBlur,ue=ee.ref,ce=a.useState(!1),se=(0,r.Z)(ce,2),pe=se[0],de=se[1];R&&pe&&de(!1),a.useImperativeHandle(i,(function(){return{focusVisible:function(){de(!0),J.current.focus()}}}),[]);var fe=a.useState(!1),he=(0,r.Z)(fe,2),ve=he[0],me=he[1];a.useEffect((function(){me(!0)}),[]);var be=ve&&!E&&!R;function ye(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return m((function(r){return n&&n(r),!t&&Q.current&&Q.current[e](r),!0}))}a.useEffect((function(){pe&&k&&!E&&ve&&Q.current.pulsate()}),[E,k,pe,ve]);var ge=ye("start",O),Re=ye("stop",S),xe=ye("stop",D),Ee=ye("stop",K),Me=ye("stop",(function(e){pe&&e.preventDefault(),z&&z(e)})),Ze=ye("start",U),we=ye("stop",X),Te=ye("stop",A),ke=ye("stop",(function(e){oe(e),!1===ne.current&&de(!1),V&&V(e)}),!1),Ce=m((function(e){J.current||(J.current=e.currentTarget),re(e),!0===ne.current&&(de(!0),j&&j(e)),F&&F(e)})),Pe=function(){var e=J.current;return y&&"button"!==y&&!("A"===e.tagName&&e.href)},Ve=a.useRef(!1),Le=m((function(e){k&&!Ve.current&&pe&&Q.current&&" "===e.key&&(Ve.current=!0,Q.current.stop(e,(function(){Q.current.start(e)}))),e.target===e.currentTarget&&Pe()&&" "===e.key&&e.preventDefault(),B&&B(e),e.target===e.currentTarget&&Pe()&&"Enter"===e.key&&!R&&(e.preventDefault(),L&&L(e))})),Se=m((function(e){k&&" "===e.key&&Q.current&&pe&&!e.defaultPrevented&&(Ve.current=!1,Q.current.stop(e,(function(){Q.current.pulsate(e)}))),I&&I(e),L&&e.target===e.currentTarget&&Pe()&&" "===e.key&&!e.defaultPrevented&&L(e)})),De=y;"button"===De&&(G.href||G.to)&&(De=P);var Fe={};"button"===De?(Fe.type=void 0===_?"button":_,Fe.disabled=R):(G.href||G.to||(Fe.role="button"),R&&(Fe["aria-disabled"]=R));var je=f(n,ue,J);var Be=(0,o.Z)({},t,{centerRipple:d,component:y,disabled:R,disableRipple:E,disableTouchRipple:w,focusRipple:k,tabIndex:H,focusVisible:pe}),Ne=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,i=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,c.Z)(o,ie,i);return t&&r&&(u.root+=" ".concat(r)),u}(Be);return(0,N.jsxs)(le,(0,o.Z)({as:De,className:(0,l.Z)(Ne.root,v),ownerState:Be,onBlur:ke,onClick:L,onContextMenu:Re,onFocus:Ce,onKeyDown:Le,onKeyUp:Se,onMouseDown:ge,onMouseLeave:Me,onMouseUp:Ee,onDragLeave:xe,onTouchEnd:we,onTouchMove:Te,onTouchStart:Ze,ref:je,tabIndex:R?-1:H,type:_},Fe,G,{children:[h,be?(0,N.jsx)(te,(0,o.Z)({ref:$,center:d},W)):null]}))})),se=ce}}]);
//# sourceMappingURL=811.ba8efa21.chunk.js.map