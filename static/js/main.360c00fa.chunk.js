(this.webpackJsonpileto=this.webpackJsonpileto||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/arrows.6a40b773.svg"},28:function(e,t,a){e.exports=a.p+"static/media/1.55fb78ec.svg"},29:function(e,t,a){e.exports=a.p+"static/media/2.c790b928.svg"},30:function(e,t,a){e.exports=a.p+"static/media/3.6b8d629c.svg"},31:function(e,t,a){e.exports=a.p+"static/media/4.1dbc658c.svg"},32:function(e,t,a){e.exports=a.p+"static/media/5.29aba8ff.svg"},33:function(e,t,a){e.exports=a.p+"static/media/6.1d7420d1.svg"},34:function(e,t,a){e.exports=a.p+"static/media/7.fa3d01d0.svg"},35:function(e,t,a){e.exports=a.p+"static/media/8.229c1fd1.svg"},36:function(e,t,a){e.exports=a.p+"static/media/9.933e4ebc.svg"},37:function(e,t,a){e.exports=a.p+"static/media/0.cc817843.svg"},40:function(e,t,a){e.exports=a(50)},45:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(45),a(65)),c=a(38),s=Object(c.a)({props:{MuiButtonBase:{disableRipple:!0}},typography:{fontFamily:["Lato","sans-serif"].join(",")},font:{primary:"Lato, sans-serif",mono:"'Roboto Mono', monospace"},color:{primary:"#FB772F",background:"#FFFFFF",foreground:"#484644",foregroundLight:"#B2AFAB",fieldBackground:"#F4F4F4",fieldForeground:"#666666",ripple:"#BBBBBB"}});function d(e){var t=e.children;return r.a.createElement(l.a,{theme:s},t)}d.defaultProps={children:null};var u=d,m=a(14),p=Object(n.createContext)({value:""});function g(e){var t=e.children,a=Object(n.useState)(""),o=Object(m.a)(a,2),i=o[0],l=o[1];return r.a.createElement(p.Provider,{value:{value:i,setValue:l,formatValue:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},t)}var f=p,h=Object(n.createContext)({value:""}),C={code:"USD",name:"U.S. Dollar"},v={code:"RUB",name:"Russian Ruble"};function b(e){var t=e.children,a=Object(n.useState)({code:"RUB"}),o=Object(m.a)(a,2),i=o[0],l=o[1],c=Object(n.useState)({code:"USD"}),s=Object(m.a)(c,2),d=s[0],u=s[1];return Object(n.useEffect)((function(){l(C),u(v)}),[]),r.a.createElement(h.Provider,{value:{targerCurrency:d,sourceCurrency:i}},t)}var E=h,y=a(25),x=a.n(y),k=a(66),w=Object(k.a)((function(e){return{root:{display:"grid",gridTemplateRows:"fit-content(0) 40px 1fr",gridGap:60,padding:[[60,0]],height:"100%",backgroundColor:e.color.background,"@media(max-height: 700px)":{gridGap:50,padding:[[50,0]]},"@media(max-height: 650px)":{gridGap:35,padding:[[35,0]]},"@media(max-height: 560px)":{gridGap:28,padding:[[28,0]]}}}}));function j(e){var t=e.className,a=e.children,n=w();return r.a.createElement("div",{className:x()(n.root,t)},a)}j.defaultProps={className:""};var B=j,N=Object(k.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},icon:{width:16,height:20,transition:"background .15s ease"},line:{position:"absolute",top:"50%",marginTop:-1,width:"100%",height:2,backgroundColor:e.color.fieldBackground}}})),O=a(67),F=Object(k.a)((function(e){return{root:{position:"relative",width:40,height:40,minWidth:[[40],"!important"],padding:0,color:[[e.color.fieldForeground],"!important"],backgroundColor:e.color.fieldBackground,borderRadius:[["50%"],"!important"],pointerEvents:"all",touchAction:"manipulation",transition:"background .15s ease",zIndex:20,"&:hover":{backgroundColor:e.color.fieldBackground},"&:active":{backgroundColor:"#dad7d4","&::after":{opacity:1}},"&::after":{opacity:0,content:"''",position:"absolute",top:-10,left:-10,right:-10,bottom:-10,backgroundColor:"#dad7d4",borderRadius:"50%",transition:"opacity .15s ease"}},label:{position:"relative",zIndex:2,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:e.color.fieldForeground}}}));var I=function(e){var t=e.icon,a=e.onClick,n=F();return r.a.createElement("div",{className:n.root},r.a.createElement(O.a,{onClick:a,classes:{label:n.label,root:n.root}},t))},R=a(27),S=a.n(R);var L=function(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement(I,{icon:r.a.createElement("img",{src:S.a,alt:"Arrows Icon",className:e.icon}),onClick:function(){}}),r.a.createElement("div",{className:e.line}))},W=Object(k.a)((function(){return{root:{display:"flex",alignItems:"center",justifyContent:"center",padding:[[16,0]]}}})),V=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},z=Object(k.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:270,userSelect:"none"},source:{display:"flex",justifyContent:"space-between",flexWrap:"nowrap",width:"100%"},currencyLabel:{position:"relative",pointerEvents:"all","&::after":{content:"''",position:"absolute",top:-4,right:-8,bottom:-4,left:-8,backgroundColor:"#dad7d4",borderRadius:4,opacity:0,transition:"opacity .2s ease"},"&:active::after":{opacity:1}},currencyCode:{position:"relative",display:"inline-flex",alignItems:"center",fontSize:24,fontWeight:600,lineHeight:"30px",cursor:"pointer",WebkitTapHighlightColor:"transparent",zIndex:2,"& > span":{color:e.color.primary},"& > svg":{margin:[[2,0,0,4]],"& > path":{fill:e.color.primary}}},currencyName:{position:"relative",fontSize:14,fontWeight:600,lineHeight:"20px",color:e.color.foregroundLight,zIndex:2},target:{display:"flex",justifyContent:"space-between",flexWrap:"nowrap",width:"100%",marginTop:35},sourceValueContainer:{display:"flex",height:44,width:"50%",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:e.color.primary,color:e.color.foreground,fontSize:28,fontWeight:600,lineHeight:"42px"},targetValueContainer:{height:44,width:"50%",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:e.color.foregroundLight,color:e.color.foreground,fontSize:28,fontWeight:600,lineHeight:"42px"},sourceCursor:{width:2,height:32,backgroundColor:e.color.primary,marginLeft:3,marginTop:3,animation:"1s cursorBlink step-end infinite"}}})),A=function(){return r.a.createElement("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none"},r.a.createElement("path",{d:"M10 0H0L5 5L10 0Z"}))};var T=function(){var e=z(),t=V,a=Object(n.useContext)(f).value,o=Object(n.useContext)(E),i=o.sourceCurrency,l=o.targerCurrency;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.source},r.a.createElement("div",{className:e.currencyLabel},r.a.createElement("div",{className:e.currencyCode},r.a.createElement("span",null,i.code),r.a.createElement(A,null)),r.a.createElement("div",{className:e.currencyName},i.name)),r.a.createElement("div",{className:e.sourceValueContainer},r.a.createElement("div",{className:e.sourceValue},t(a)),r.a.createElement("div",{className:e.sourceCursor}))),r.a.createElement("div",{className:e.target},r.a.createElement("div",{className:e.currencyLabel},r.a.createElement("div",{className:e.currencyCode},r.a.createElement("span",null,l.code),r.a.createElement(A,null)),r.a.createElement("div",{className:e.currencyName},l.name)),r.a.createElement("div",{className:e.targetValueContainer},r.a.createElement("div",{className:e.targetValue},"172"))))};var H=function(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(T,null))},M=Object(k.a)((function(e){return{root:{height:60,padding:0,color:e.color.ripple,borderRadius:4,pointerEvents:"all",touchAction:"manipulation","&:hover":{backgroundColor:e.color.background},"&:active $label":{backgroundColor:"#dad7d4"}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,color:e.color.fieldForeground,borderRadius:"50%",transition:"background .15s ease",backgroundColor:"transparent"}}}));var P=function(e){var t=e.label,a=e.onClick,n=M();return r.a.createElement(O.a,{className:n.root,onClick:a,classes:{label:n.label}},t)},U=Object(k.a)((function(e){return{root:{height:60,minWidth:60,padding:0,color:e.color.ripple,borderRadius:4,pointerEvents:"all",touchAction:"manipulation","&:hover":{backgroundColor:e.color.background},"&:active $label":{backgroundColor:"#dad7d4"}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,transition:"background .15s ease",backgroundColor:"transparent",borderRadius:"50%"},dotContainer:{width:5,height:20,display:"flex",justifyContent:"flex-start",alignItems:"flex-end"}}}));var $=function(e){var t=e.onClick,a=U();return r.a.createElement(O.a,{onClick:t,className:a.root,classes:{label:a.label}},r.a.createElement("span",{className:a.dotContainer},r.a.createElement("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 2.50831C0 2.16501 0.060506 1.83832 0.181518 1.52824C0.313531 1.21816 0.489549 0.952381 0.709571 0.730897C0.929593 0.509413 1.19362 0.332226 1.50165 0.199335C1.80968 0.0664451 2.13971 0 2.49175 0C2.84378 0 3.16832 0.0664451 3.46535 0.199335C3.77338 0.332226 4.0374 0.509413 4.25743 0.730897C4.48845 0.952381 4.66997 1.21816 4.80198 1.52824C4.93399 1.83832 5 2.16501 5 2.50831C5 2.86268 4.93399 3.19491 4.80198 3.50498C4.66997 3.80399 4.48845 4.06423 4.25743 4.28571C4.0374 4.5072 3.77338 4.67885 3.46535 4.80066C3.16832 4.93355 2.84378 5 2.49175 5C2.13971 5 1.80968 4.93355 1.50165 4.80066C1.19362 4.67885 0.929593 4.5072 0.709571 4.28571C0.489549 4.06423 0.313531 3.80399 0.181518 3.50498C0.060506 3.19491 0 2.86268 0 2.50831Z",fill:"#666666"}))))},D=Object(k.a)((function(){return{root:{display:"flex",justifyContent:"center"},grid:{width:"100%",maxWidth:360,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(4, 60px)","& > button":{display:"flex",justifyContent:"center",alignItems:"center"}}}})),G=a(28),Z=a.n(G),J=a(29),q=a.n(J),K=a(30),Q=a.n(K),X=a(31),Y=a.n(X),_=a(32),ee=a.n(_),te=a(33),ae=a.n(te),ne=a(34),re=a.n(ne),oe=a(35),ie=a.n(oe),le=a(36),ce=a.n(le),se=a(37),de=a.n(se),ue=Object(k.a)((function(e){return{root:{height:60,padding:0,pointerEvents:"all",zIndex:20,touchAction:"manipulation","&:hover":{backgroundColor:e.color.background},"&:active":{"& $label":{backgroundColor:"#dad7d4"},"& $path":{fill:"#dad7d4"}}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,color:e.color.fieldForeground,borderRadius:"50%",transition:"background .15s ease",backgroundColor:"transparent"},path:{fill:e.color.background,transition:"fill .15s ease"}}}));var me=function(e){var t=e.onClick,a=ue();return r.a.createElement(O.a,{className:a.root,onClick:t,classes:{label:a.label,root:a.root}},r.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},r.a.createElement("circle",{cx:"20",cy:"20",r:"20",fill:"#FB772F"}),r.a.createElement("path",{className:a.path,d:"M25.2201 24.6522C25.4002 24.6522 25.5597 24.7212 25.6989 24.8593L27 26.2598C26.2799 27.1448 25.392 27.8227 24.3363 28.2936C23.2889 28.7645 22.0286 29 20.5556 29C19.2381 29 18.0516 28.7767 16.9959 28.3302C15.9484 27.8836 15.0524 27.2625 14.3077 26.4668C13.563 25.6712 12.9902 24.7212 12.5892 23.617C12.1964 22.5129 12 21.3072 12 20C12 18.6766 12.2128 17.4668 12.6383 16.3708C13.0638 15.2666 13.6612 14.3166 14.4304 13.521C15.2079 12.7253 16.1326 12.1083 17.2046 11.6698C18.2766 11.2233 19.4632 11 20.7643 11C22.0573 11 23.2029 11.2111 24.2013 11.6333C25.2079 12.0555 26.063 12.6076 26.7668 13.2896L25.662 14.8119C25.5966 14.9093 25.5106 14.9946 25.4043 15.0677C25.3061 15.1407 25.1669 15.1773 24.9869 15.1773C24.8642 15.1773 24.7373 15.1448 24.6064 15.0798C24.4755 15.0068 24.3322 14.9215 24.1768 14.8241C24.0213 14.7185 23.8412 14.6049 23.6367 14.4831C23.4321 14.3613 23.1948 14.2517 22.9247 14.1543C22.6547 14.0487 22.3396 13.9635 21.9795 13.8985C21.6277 13.8254 21.2185 13.7889 20.752 13.7889C19.9583 13.7889 19.23 13.931 18.5671 14.2152C17.9124 14.4912 17.3478 14.8972 16.8732 15.433C16.3985 15.9608 16.0303 16.6103 15.7684 17.3816C15.5065 18.1448 15.3756 19.0176 15.3756 20C15.3756 20.9905 15.5147 21.8714 15.793 22.6428C16.0794 23.4141 16.464 24.0636 16.9468 24.5913C17.4296 25.1191 17.9984 25.525 18.653 25.8092C19.3077 26.0852 20.0115 26.2233 20.7643 26.2233C21.2144 26.2233 21.6195 26.1989 21.9795 26.1502C22.3478 26.1015 22.6833 26.0244 22.9861 25.9188C23.2971 25.8133 23.5876 25.6793 23.8576 25.5169C24.1358 25.3464 24.41 25.1394 24.68 24.8958C24.7619 24.8227 24.8478 24.7659 24.9378 24.7253C25.0278 24.6766 25.1219 24.6522 25.2201 24.6522Z",fill:"white"})))},pe={0:de.a,1:Z.a,2:q.a,3:Q.a,4:Y.a,5:ee.a,6:ae.a,7:re.a,8:ie.a,9:ce.a};var ge=function(){var e=".",t=D(),a=Object(n.useContext)(f),o=a.setValue,i=a.value;function l(t){if(!i&&[e,0].includes(t))return null;var a=i.split(e),n=2===a.length,r=t===e;return n&&(r||2===a[1].length)||r&&i.length>6||i.replace(e,"").length>=8?null:void o(i+t)}return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.grid},new Array(9).fill(0).map((function(e,t){return r.a.createElement(P,{label:r.a.createElement("img",{src:pe[t],alt:"Icon ".concat(t)}),onClick:function(){return l(t)},key:t})})),r.a.createElement($,{onClick:function(){return l(e)}}),r.a.createElement(P,{label:r.a.createElement("img",{src:pe[0],alt:"Icon 0"}),onClick:function(){return l(0)}}),r.a.createElement(me,{onClick:function(){o("")}})))};var fe=function(){var e=document.documentElement;return Object(n.useEffect)((function(){if(visualViewport)return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){e.style.setProperty("--app-height","".concat(visualViewport.height,"px")),e.style.setProperty("--app-top-offset","".concat(visualViewport.pageTop,"px"))}}),[e.style]),r.a.createElement(u,null,r.a.createElement(B,null,r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(H,null),r.a.createElement(L,null),r.a.createElement(ge,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.360c00fa.chunk.js.map