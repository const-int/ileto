(this.webpackJsonpileto=this.webpackJsonpileto||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/1.55fb78ec.svg"},29:function(e,t,n){e.exports=n.p+"static/media/2.c790b928.svg"},30:function(e,t,n){e.exports=n.p+"static/media/3.6b8d629c.svg"},31:function(e,t,n){e.exports=n.p+"static/media/4.1dbc658c.svg"},32:function(e,t,n){e.exports=n.p+"static/media/5.29aba8ff.svg"},33:function(e,t,n){e.exports=n.p+"static/media/6.1d7420d1.svg"},34:function(e,t,n){e.exports=n.p+"static/media/7.fa3d01d0.svg"},35:function(e,t,n){e.exports=n.p+"static/media/8.229c1fd1.svg"},36:function(e,t,n){e.exports=n.p+"static/media/9.933e4ebc.svg"},37:function(e,t,n){e.exports=n.p+"static/media/0.cc817843.svg"},42:function(e,t,n){e.exports=n(51)},47:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(22),l=n.n(c),s=n(23),u=n.n(s),d=(n(47),n(64)),m=n(38),g=Object(m.a)({props:{MuiButtonBase:{disableRipple:!0}},typography:{fontFamily:["Lato","sans-serif"].join(",")},font:{primary:"Lato, sans-serif"},indent:{sidePadding:14},color:{primary:"#FB772F",background:"#FFFFFF",backgroundAlt:"#F7F9FA",foreground:"#484644",foregroundLight:"#B2AFAB",fieldBackground:"#F4F4F4",fieldForeground:"#666666",activeBackground:"#FEE4D5",activeBackground2:"#FCA06D"}});function p(e){var t=e.children;return r.a.createElement(d.a,{theme:g},t)}p.defaultProps={children:null};var f=p,v=n(5),h=n(19),b=n.n(h),C=n(27);var E=function(e,t){var n="https://api.exchangeratesapi.io/latest",r=Object(a.useState)(1),o=Object(v.a)(r,2),i=o[0],c=o[1];function l(){return(l=Object(C.a)(b.a.mark((function e(t,a){var r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n,"?base=").concat(t,"&symbols=").concat(a));case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent)&&o.rates&&o.rates[a]&&c(o.rates[a]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e,t){l.apply(this,arguments)}(e,t)}),[e,t]),i},x=[{code:"AUD",sign:"$",name:"Australian Dollar"},{code:"BGN",sign:"\u041b\u0432",name:"Bulgarian Lev"},{code:"BRL",sign:"R$",name:"Brazilian Real"},{code:"CAD",sign:"CA$",name:"Canadian Dollar"},{code:"CHF",sign:"Fr",name:"Swiss Franc"},{code:"CNY",sign:"\xa5",name:"Yuan Renminbi"},{code:"CZK",sign:"K\u010d",name:"Czech Koruna"},{code:"DKK",sign:"Kr",name:"Danish Krone"},{code:"EUR",sign:"\u20ac",name:"European Euro"},{code:"GBP",sign:"\xa3",name:"British Pound"},{code:"HKD",sign:"HK$",name:"Hong Kong Dollar",shortName:"H.K. Dollar"},{code:"HRK",sign:"Kn",name:"Croatian Kuna"},{code:"HUF",sign:"Ft",name:"Hungarian Forint"},{code:"IDR",sign:"Rp",name:"Indonesian Rupiah"},{code:"ILS",sign:"\u20aa",name:"Israeli New Sheqel",shortName:"Israeli Sheqel"},{code:"INR",sign:"\u20b9",name:"Indian Rupee"},{code:"ISK",sign:"\xcdkr",name:"Icelandic Kr\xf3na"},{code:"JPY",sign:"\xa5",name:"Japanese Yen"},{code:"KRW",sign:"\u20a9",name:"South Korean Won",shortName:"S.K. Won"},{code:"MXN",sign:"MEX$",name:"Mexican Peso"},{code:"MYR",sign:"Rm",name:"Malaysian Ringgit"},{code:"NOK",sign:"Kr",name:"Norwegian Krone"},{code:"NZD",sign:"NZ$",name:"New Zealand Dollar",shortName:"N.Z. Dollar"},{code:"PHP",sign:"\u20b1",name:"Philippine Peso"},{code:"PLN",sign:"Z\u0142",name:"Polish Zloty"},{code:"RON",sign:"L",name:"Romanian Leu"},{code:"RUB",sign:"\u20bd",name:"Russian Ruble"},{code:"SEK",sign:"Kr",name:"Swedish Krona"},{code:"SGD",sign:"S$",name:"Singapore Dollar"},{code:"THB",sign:"\u0e3f",name:"Thai Baht"},{code:"TRY",sign:"\u20ba",name:"Turkish New Lira",shortName:"Turkish Lira"},{code:"USD",sign:"$",name:"United States Dollar",shortName:"U.S. Dollar"},{code:"ZAR",sign:"R",name:"South African Rand",shortName:"S.A. Rand"}];function y(e){return x.find((function(t){return t.code===e}))}var k=Object(a.createContext)({value:""});function j(e){var t=e.children,n=Object(a.useState)(y("RUB")),o=Object(v.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)(y("GBP")),s=Object(v.a)(l,2),u=s[0],d=s[1],m=E(i.code,u.code);return r.a.createElement(k.Provider,{value:{targetCurrency:u,sourceCurrency:i,exchangeRate:m,exchange:function(e){var t=(e*m).toString();return t.slice(0,t.indexOf(".")+3)},getApproximateRate:function(){var e=new RegExp("\\d*\\.?0*[1-9]{0,3}"),t=new RegExp("\\d*\\.\\d{2}");return m.toFixed(10).match(m<1?e:t)[0]},swap:function(){var e=i;c(u),d(e)}}},t)}var O=k,w=Object(a.createContext)({value:""});function L(e){var t=e.children,n=Object(a.useState)("currencySelect"),o=Object(v.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)(!1),s=Object(v.a)(l,2),u=s[0],d=s[1];return r.a.createElement(w.Provider,{value:{menu:i,setMenu:c,isMenuOpen:u,setIsMenuOpen:d}},t)}var N=w,S={setAppDimensionsViewportListner:function(){var e=document.documentElement;if(visualViewport)return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){e.style.setProperty("--app-height","".concat(visualViewport.height,"px")),e.style.setProperty("--app-top-offset","".concat(visualViewport.pageTop,"px"))}}},B=Object(a.createContext)({value:""});function R(e){var t=e.children,n=Object(a.useState)(""),o=Object(v.a)(n,2),i=o[0],c=o[1];return r.a.createElement(B.Provider,{value:{value:i,setValue:c,formatValue:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},t)}var F=B,A=n(3),I=n.n(A),M=n(65),H=Object(M.a)((function(e){return{root:{display:"grid",gridTemplateRows:"58px 252px 1fr",maxWidth:480,margin:"0 auto",height:"100%",backgroundColor:e.color.background,visibility:function(e){return e.isHidden?"hidden":"visible"}}}}));function P(e){var t=e.className,n=e.children,o=Object(a.useContext)(N).isMenuOpen,i=H({isHidden:o});return r.a.createElement("div",{className:I()(i.root,t)},n)}P.defaultProps={className:"",isHidden:!1};var Z=P;var D=function(){return r.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{marginRight:8}},r.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"#FB772F"}),r.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"url(#paint0_linear)"}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:"9",y1:"0",x2:"9",y2:"18",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FC6E4F"}),r.a.createElement("stop",{offset:"1",stopColor:"#FD5A37",stopOpacity:"0"}))))},K=Object(M.a)((function(){return{root:{fontSize:18,lineHeight:"24px",fontWeight:900,color:"#000"}}}));var W=function(){var e=K();return r.a.createElement("div",{className:e.root},"Currency Exchange")};var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=400,r=200,o=t?r:n,i=Object(a.useState)(!1),c=Object(v.a)(i,2),l=c[0],s=c[1],u=Object(a.useState)(null),d=Object(v.a)(u,2),m=d[0],g=d[1];function p(){e(),s(!0),g((new Date).getTime())}function f(){var e=(new Date).getTime()-m;e>o?s(!1):setTimeout((function(){s(!1)}),e)}var h={onTouchStart:p,onTouchEnd:f,onMouseDown:p,onMouseUp:f};return{isActive:l,tapEventProps:h}},V=Object(M.a)((function(e){return{root:{marginLeft:"auto",padding:[[0,10]],fontSize:12,lineHeight:"16px",fontWeight:700,border:"1px solid",color:e.color.primary,borderColor:e.color.primary,backgroundColor:e.color.background,borderRadius:99,transition:"background .15s ease, border .15s ease","&.is-active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground}}}}));var T=function(){var e=V(),t=z((function(){})),n=t.isActive,a=t.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:I()(e.root,{"is-active":n})},a),"About")},$=Object(M.a)((function(e){return{root:{display:"flex",alignItems:"center",padding:[[0,e.indent.sidePadding]]}}}));var U=function(){var e=$();return r.a.createElement("div",{className:e.root},r.a.createElement(D,null),r.a.createElement(W,null),r.a.createElement(T,null))},G={addCommasToNumber:function(e){var t=e.toString(),n=/\B(?=(\d{3})+(?!\d))/g;return t.includes(".")?t.split(".")[0].replace(n,",")+"."+t.split(".")[1]:t.replace(n,",")}},Y=function(){return r.a.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none"},r.a.createElement("path",{d:"M1 1L6 6L11 1",strokeWidth:"2",strokeLinecap:"round"}))},J=Object(M.a)((function(e){return{root:{display:"block",position:"relative",padding:0,textAlign:"left",border:"none",background:"transparent","&::after":{content:"''",position:"absolute",top:-6,right:-12,bottom:-8,left:-8,backgroundColor:e.color.activeBackground,borderRadius:4,opacity:0,transition:"opacity .2s ease"},"&.is-active::after":{opacity:1}},currencyCode:{position:"relative",display:"inline-flex",alignItems:"center",fontSize:26,fontWeight:400,lineHeight:"34px",zIndex:2,"& > span":{color:e.color.fieldForeground},"& > svg":{marginLeft:10,marginTop:-2,"& > path":{stroke:e.color.primary}}},currencyName:{position:"relative",fontSize:12,fontWeight:400,lineHeight:"14px",color:"#929199",zIndex:2,whiteSpace:"nowrap"}}}));var q=function(e){var t=e.value,n=J(),o=z((function(){})),i=o.isActive,c=o.tapEventProps,l=t.shortName,s=t.name,u=Object(a.useContext)(N).setMenu;return r.a.createElement("button",Object.assign({type:"button",className:I()(n.root,{"is-active":i}),onClick:function(){return u("currencySelect")}},c),r.a.createElement("div",{className:n.currencyCode},r.a.createElement("span",null,t.code),r.a.createElement(Y,null)),r.a.createElement("div",{className:n.currencyName},l||s))},X=Object(M.a)((function(e){return{root:{position:"relative"},value:{color:e.color.fieldForeground,fontSize:26,lineHeight:"34px",fontWeight:700,paddingLeft:20,wordBreak:"break-word",textAlign:"right"},cursor:{position:"absolute",top:-2,right:-3,width:1,height:34,backgroundColor:e.color.primary,animation:"1s cursorBlink step-end infinite"}}}));var _=function(e){var t=e.value,n=e.hasCursor,a=X();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.value},t),n&&r.a.createElement("div",{className:a.cursor}))},Q=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:112,width:"100%",padding:[[15,e.indent.sidePadding]]}}}));var ee=function(e){var t=e.currency,n=e.value,a=Q();return r.a.createElement("div",{className:a.root},r.a.createElement(q,{value:t}),r.a.createElement(_,{value:n,hasCursor:!0}))},te=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:140,width:"100%",padding:[[50,e.indent.sidePadding,10]],backgroundColor:e.color.backgroundAlt}}}));var ne=function(e){var t=e.currency,n=e.value,a=te();return r.a.createElement("div",{className:a.root},r.a.createElement(q,{value:t}),r.a.createElement(_,{value:n}))},ae=Object(M.a)((function(e){return{root:{position:"relative",width:40,height:40,minWidth:[[40],"!important"],padding:0,color:[[e.color.fieldForeground],"!important"],backgroundColor:e.color.background,border:"2px solid #F2F5F6",borderRadius:[["50%"],"!important"],touchAction:"manipulation",transition:"background .15s ease, border .15s ease",zIndex:20,display:"flex",justifyContent:"center",alignItems:"center","& path":{fill:e.color.primary},"&.is-active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground},"&::after":{content:"''",position:"absolute",top:-10,left:-10,right:-10,bottom:-10}}}}));var re=function(e){var t=e.onClick,n=ae(),a=z(t,!0),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:I()(n.root,{"is-active":o})},i),r.a.createElement("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"none"},r.a.createElement("path",{d:"M12.5714 15.5667V7.77778H10.2857V15.5667H6.85714L11.4286 20L16 15.5667H12.5714ZM4.57143 0L0 4.43333H3.42857V12.2222H5.71429V4.43333H9.14286L4.57143 0Z"})))},oe=Object(M.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",padding:[[0,17,0,8]],height:40,border:"2px solid #F2F5F6",backgroundColor:e.color.background,borderRadius:99},icon:{margin:[[0,12,1,0]],"& path":{fill:e.color.primary}},rate:{fontSize:13,fontWeight:700,lineHeight:"20px",color:e.color.primary}}}));var ie=function(){var e=oe(),t=G.addCommasToNumber,n=Object(a.useContext)(O),o=n.sourceCurrency,i=n.targetCurrency,c=n.getApproximateRate;return r.a.createElement("div",{className:e.root},r.a.createElement("svg",{className:e.icon,width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"},r.a.createElement("path",{d:"M1.27445 6.73396C0.851377 7.08897 0.7962 7.71973 1.15121 8.1428C1.50621 8.56587 2.13697 8.62104 2.56004 8.26604L1.27445 6.73396ZM4.89655 5L5.6061 4.29534L4.95815 3.64289L4.25376 4.23396L4.89655 5ZM7.37931 7.5L6.66976 8.20466L7.37931 8.91913L8.08886 8.20466L7.37931 7.5ZM13.5509 2.70466C13.9401 2.31278 13.9379 1.67962 13.546 1.29045C13.1542 0.90128 12.521 0.903471 12.1318 1.29534L13.5509 2.70466ZM8.86897 0C8.31668 0 7.86897 0.447715 7.86897 1C7.86897 1.55228 8.31668 2 8.86897 2V0ZM13.8345 1H14.8345V0H13.8345V1ZM12.8345 6C12.8345 6.55228 13.2822 7 13.8345 7C14.3868 7 14.8345 6.55228 14.8345 6H12.8345ZM2.56004 8.26604L5.53935 5.76604L4.25376 4.23396L1.27445 6.73396L2.56004 8.26604ZM4.187 5.70466L6.66976 8.20466L8.08886 6.79534L5.6061 4.29534L4.187 5.70466ZM8.08886 8.20466L13.5509 2.70466L12.1318 1.29534L6.66976 6.79534L8.08886 8.20466ZM8.86897 2H13.8345V0H8.86897V2ZM12.8345 1V6H14.8345V1H12.8345Z"})),r.a.createElement("span",{className:e.rate},o.sign," 1 \u2248 ",i.sign," ",t(c())))},ce=Object(M.a)((function(e){return{root:{position:"relative"},button:{position:"absolute",top:-20,left:e.indent.sidePadding},exchangeRate:{position:"absolute",top:-20,right:e.indent.sidePadding}}}));var le=function(){var e=ce(),t=Object(a.useContext)(O).swap;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.button},r.a.createElement(re,{onClick:t})),r.a.createElement("div",{className:e.exchangeRate},r.a.createElement(ie,null)))},se=Object(M.a)((function(){return{root:{}}}));var ue=function(){var e=se(),t=G.addCommasToNumber,n=Object(a.useContext)(F).value,o=Object(a.useContext)(O),i=o.sourceCurrency,c=o.targetCurrency,l=(0,o.exchange)(n),s=Math.trunc(l),u=s<999999999?l:s;return r.a.createElement("div",{className:e.root},r.a.createElement(ee,{currency:i,value:t(n)}),r.a.createElement(le,null),r.a.createElement(ne,{currency:c,value:n?t(u):""}))},de=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent"}}}));var me=function(e){var t=e.label,n=e.onClick,a=de(),o=z(n),i=o.isActive,c=o.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:I()(a.root,{"is-active":i})},c),r.a.createElement("span",{className:a.label},t))},ge=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,paddingTop:13,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent",transition:"background .15s ease"},path:{fill:e.color.fieldForeground}}}));var pe=function(e){var t=e.onClick,n=ge(),a=z(t,!0),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({onClick:t,className:I()(n.root,{"is-active":o})},i),r.a.createElement("span",{className:n.label},r.a.createElement("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none"},r.a.createElement("path",{className:n.path,d:"M0 2.50831C0 2.16501 0.060506 1.83832 0.181518 1.52824C0.313531 1.21816 0.489549 0.952381 0.709571 0.730897C0.929593 0.509413 1.19362 0.332226 1.50165 0.199335C1.80968 0.0664451 2.13971 0 2.49175 0C2.84378 0 3.16832 0.0664451 3.46535 0.199335C3.77338 0.332226 4.0374 0.509413 4.25743 0.730897C4.48845 0.952381 4.66997 1.21816 4.80198 1.52824C4.93399 1.83832 5 2.16501 5 2.50831C5 2.86268 4.93399 3.19491 4.80198 3.50498C4.66997 3.80399 4.48845 4.06423 4.25743 4.28571C4.0374 4.5072 3.77338 4.67885 3.46535 4.80066C3.16832 4.93355 2.84378 5 2.49175 5C2.13971 5 1.80968 4.93355 1.50165 4.80066C1.19362 4.67885 0.929593 4.5072 0.709571 4.28571C0.489549 4.06423 0.313531 3.80399 0.181518 3.50498C0.060506 3.19491 0 2.86268 0 2.50831Z"}))))},fe=Object(M.a)((function(){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},grid:{width:"100%",maxWidth:360,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(4, 60px)"}}})),ve=n(28),he=n.n(ve),be=n(29),Ce=n.n(be),Ee=n(30),xe=n.n(Ee),ye=n(31),ke=n.n(ye),je=n(32),Oe=n.n(je),we=n(33),Le=n.n(we),Ne=n(34),Se=n.n(Ne),Be=n(35),Re=n.n(Be),Fe=n(36),Ae=n.n(Fe),Ie=n(37),Me=n.n(Ie),He=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active":{"& $path":{fill:e.color.primary},"& $circle":{fill:e.color.activeBackground}}},label:{display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60},path:{fill:e.color.background,transition:"fill .15s ease"},circle:{fill:e.color.primary,transition:"fill .15s ease"}}}));var Pe=function(e){var t=e.onClick,n=He(),a=z(t,!0),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:I()(n.root,{"is-active":o})},i),r.a.createElement("span",{className:n.label},r.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},r.a.createElement("circle",{cx:"20",cy:"20",r:"20",className:n.circle}),r.a.createElement("path",{className:n.path,d:"M25.2201 24.6522C25.4002 24.6522 25.5597 24.7212 25.6989 24.8593L27 26.2598C26.2799 27.1448 25.392 27.8227 24.3363 28.2936C23.2889 28.7645 22.0286 29 20.5556 29C19.2381 29 18.0516 28.7767 16.9959 28.3302C15.9484 27.8836 15.0524 27.2625 14.3077 26.4668C13.563 25.6712 12.9902 24.7212 12.5892 23.617C12.1964 22.5129 12 21.3072 12 20C12 18.6766 12.2128 17.4668 12.6383 16.3708C13.0638 15.2666 13.6612 14.3166 14.4304 13.521C15.2079 12.7253 16.1326 12.1083 17.2046 11.6698C18.2766 11.2233 19.4632 11 20.7643 11C22.0573 11 23.2029 11.2111 24.2013 11.6333C25.2079 12.0555 26.063 12.6076 26.7668 13.2896L25.662 14.8119C25.5966 14.9093 25.5106 14.9946 25.4043 15.0677C25.3061 15.1407 25.1669 15.1773 24.9869 15.1773C24.8642 15.1773 24.7373 15.1448 24.6064 15.0798C24.4755 15.0068 24.3322 14.9215 24.1768 14.8241C24.0213 14.7185 23.8412 14.6049 23.6367 14.4831C23.4321 14.3613 23.1948 14.2517 22.9247 14.1543C22.6547 14.0487 22.3396 13.9635 21.9795 13.8985C21.6277 13.8254 21.2185 13.7889 20.752 13.7889C19.9583 13.7889 19.23 13.931 18.5671 14.2152C17.9124 14.4912 17.3478 14.8972 16.8732 15.433C16.3985 15.9608 16.0303 16.6103 15.7684 17.3816C15.5065 18.1448 15.3756 19.0176 15.3756 20C15.3756 20.9905 15.5147 21.8714 15.793 22.6428C16.0794 23.4141 16.464 24.0636 16.9468 24.5913C17.4296 25.1191 17.9984 25.525 18.653 25.8092C19.3077 26.0852 20.0115 26.2233 20.7643 26.2233C21.2144 26.2233 21.6195 26.1989 21.9795 26.1502C22.3478 26.1015 22.6833 26.0244 22.9861 25.9188C23.2971 25.8133 23.5876 25.6793 23.8576 25.5169C24.1358 25.3464 24.41 25.1394 24.68 24.8958C24.7619 24.8227 24.8478 24.7659 24.9378 24.7253C25.0278 24.6766 25.1219 24.6522 25.2201 24.6522Z"}))))},Ze={0:Me.a,1:he.a,2:Ce.a,3:xe.a,4:ke.a,5:Oe.a,6:Le.a,7:Se.a,8:Re.a,9:Ae.a};var De=function(){var e=".",t=fe(),n=Object(a.useContext)(F),o=n.setValue,i=n.value;function c(t){if(!i&&[e,0].includes(t))return null;var n=i.split(e),a=2===n.length,r=t===e;return a&&(r||2===n[1].length)||r&&i.length>11||i.replace(e,"").length>=13?null:void o(i+t)}return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.grid},new Array(9).fill(0).map((function(e,t){return r.a.createElement(me,{label:r.a.createElement("img",{src:Ze[t+1],alt:"Icon ".concat(t+1)}),onClick:function(){return c(t+1)},key:t+1})})),r.a.createElement(pe,{onClick:function(){return c(e)}}),r.a.createElement(me,{label:r.a.createElement("img",{src:Ze[0],alt:"Icon 0"}),onClick:function(){return c(0)}}),r.a.createElement(Pe,{onClick:function(){o("")}})))};var Ke=function(){return r.a.createElement(Z,null,r.a.createElement(R,null,r.a.createElement(U,null),r.a.createElement(ue,null),r.a.createElement(De,null)))},We=n(66),ze=Object(M.a)((function(e){return{root:{height:20,width:20,background:"transparent",border:0,padding:0,position:"relative","&.is-active::after":{opacity:1},"&::after":{content:"''",position:"absolute",top:-10,left:-10,bottom:-10,right:-10,opacity:0,borderRadius:"50%",backgroundColor:e.color.activeBackground,transition:"opacity .2s ease"},"& svg":{position:"relative",width:20,height:20,zIndex:2},"& path":{fill:e.color.primary}}}}));var Ve=function(){var e=ze(),t=Object(a.useContext)(N).setMenu,n=z((function(){})),o=n.isActive,i=n.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:I()(e.root,{"is-active":o}),onClick:function(){return t("")}},i),r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"none"},r.a.createElement("path",{d:"M20 8.75H4.7875L11.775 1.7625L10 0L0 10L10 20L11.7625 18.2375L4.7875 11.25H20V8.75Z"})))},Te=Object(M.a)((function(e){return{root:{fontSize:22,lineHeight:"30px",fontWeight:600,color:e.color.foreground}}}));var $e=function(e){var t=e.text,n=Te();return r.a.createElement("div",{className:n.root},t)},Ue=n(39),Ge=Object(M.a)((function(e){return{root:function(t){var n=t.isActive;return{display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,borderRadius:"50%",backgroundColor:n?e.color.activeBackground:e.color.primary,border:"none",transition:"background-color .15s ease, opacity .2s ease","& path":{fill:n?e.color.primary:e.color.background}}}}}));function Ye(e){var t=e.onClick,n=e.icon,a=e.className,o=e.isActive,i=Object(Ue.a)(e,["onClick","icon","className","isActive"]),c=Ge({isActive:o});return r.a.createElement("button",Object.assign({type:"button",onClick:t,className:I()(c.root,a)},i),n)}Ye.defaultProps={isActive:!1};var Je=Ye,qe=Object(M.a)((function(e){return{root:function(t){return{position:"relative",backgroundColor:t.isActive?e.color.activeBackground2:e.color.primary,zIndex:2}}}}));var Xe=function(e){var t=e.isInputShown,n=e.onClick,a=z((function(){})),o=a.isActive,i=a.tapEventProps,c=qe({isActive:o}),l=r.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18"},r.a.createElement("path",{d:"M12.8645 11.3208L12 10.5L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L10.5 12L11.3208 12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"})),s=r.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14"},r.a.createElement("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"}));return r.a.createElement(Je,Object.assign({onClick:n,icon:t?s:l,className:c.root},i))},_e=Object(M.a)((function(e){return{root:function(t){var n=t.isShown;return{position:"absolute",top:0,right:0,zIndex:1,width:n?"calc(100vw - 48px)":40,height:40,borderWidth:2,paddingLeft:20,paddingRight:n?52:0,borderStyle:"solid",borderColor:e.color.primary,backgroundColor:e.color.background,pointerEvents:"all",maxWidth:388,borderRadius:20,transition:"width .25s cubic-bezier(0.22, 0.61, 0.36, 1), padding .25s ease",outline:"none",fontSize:16,lineHeight:"20px",fontWeight:600,color:e.color.fieldForeground}}}}));var Qe=function(e){var t=e.value,n=e.setValue,o=e.isShown,i=(e.ref,_e({isShown:o})),c=Object(a.createRef)();return Object(a.useEffect)((function(){o&&c.current.focus()}),[c,o]),r.a.createElement("input",{ref:c,type:"text",value:t,onChange:function(e){var t=e.target.value;n(t)},className:i.root})},et=Object(M.a)((function(e){return{root:{height:82,padding:[[0,24]],display:"grid",gridTemplateColumns:"20px 1fr 40px",gridGap:24,alignItems:"center",backgroundColor:e.color.backgroundAlt,borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:e.color.fieldBackground},label:{fontSize:22,lineHeight:"30px",fontWeight:600,color:e.color.foreground},buttonWrap:{position:"relative",width:40,height:40,zIndex:2}}}));var tt=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),c=Object(v.a)(i,2),l=c[0],s=c[1],u=et();return r.a.createElement("div",{className:u.root},r.a.createElement(Ve,null),r.a.createElement($e,{text:"Source currency"}),r.a.createElement("div",{className:u.buttonWrap},r.a.createElement(Xe,{isInputShown:n,onClick:function(){n||s(""),o(!n)}}),r.a.createElement(Qe,{isShown:n,value:l,setValue:s})))},nt=Object(M.a)((function(){return{root:{maxWidth:480,margin:"0 auto"}}}));var at=function(){var e=nt();return r.a.createElement("div",{className:e.root},r.a.createElement(tt,null))},rt=Object(M.a)((function(e){return{root:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:20,"& > div":{height:"100%",width:"100%",backgroundColor:e.color.background}}}}));var ot=function(){var e=rt(),t=Object(a.useContext)(N),n=t.menu,o=t.setIsMenuOpen,i={direction:"up",timeout:300,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(){return o(!0)},onExit:function(){return o(!1)}};return r.a.createElement("div",{className:e.root},r.a.createElement(We.a,Object.assign({in:"currencySelect"===n},i),r.a.createElement("div",null,r.a.createElement(at,null))))};var it=function(){var e=S.setAppDimensionsViewportListner;return Object(a.useEffect)((function(){e()}),[e]),r.a.createElement(f,null,r.a.createElement(j,null,r.a.createElement(L,null,r.a.createElement(Ke,null),r.a.createElement(ot,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u()(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(it,null))),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b8c94016.chunk.js.map