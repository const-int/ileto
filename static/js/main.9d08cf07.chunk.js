(this.webpackJsonpileto=this.webpackJsonpileto||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/1.55fb78ec.svg"},29:function(e,t,n){e.exports=n.p+"static/media/2.c790b928.svg"},30:function(e,t,n){e.exports=n.p+"static/media/3.6b8d629c.svg"},31:function(e,t,n){e.exports=n.p+"static/media/4.1dbc658c.svg"},32:function(e,t,n){e.exports=n.p+"static/media/5.29aba8ff.svg"},33:function(e,t,n){e.exports=n.p+"static/media/6.1d7420d1.svg"},34:function(e,t,n){e.exports=n.p+"static/media/7.fa3d01d0.svg"},35:function(e,t,n){e.exports=n.p+"static/media/8.229c1fd1.svg"},36:function(e,t,n){e.exports=n.p+"static/media/9.933e4ebc.svg"},37:function(e,t,n){e.exports=n.p+"static/media/0.cc817843.svg"},41:function(e,t,n){e.exports=n(50)},46:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(22),l=n.n(c),s=n(23),u=n.n(s),d=(n(46),n(4)),m=n(63),g=n(38),p=Object(g.a)({props:{MuiButtonBase:{disableRipple:!0}},typography:{fontFamily:["Lato","sans-serif"].join(",")},font:{primary:"Lato, sans-serif"},indent:{sidePadding:14},color:{primary:"#FB772F",background:"#FFFFFF",foreground:"#484644",foregroundLight:"#B2AFAB",fieldBackground:"#F4F4F4",fieldForeground:"#666666",activeBackground:"#FEE4D5"}});function f(e){var t=e.children;return r.a.createElement(m.a,{theme:p},t)}f.defaultProps={children:null};var v=f,h=n(19),b=n.n(h),C=n(27);var E=function(e,t){var n="https://api.exchangeratesapi.io/latest",r=Object(a.useState)(1),o=Object(d.a)(r,2),i=o[0],c=o[1];function l(){return(l=Object(C.a)(b.a.mark((function e(t,a){var r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n,"?base=").concat(t,"&symbols=").concat(a));case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent)&&o.rates&&o.rates[a]&&c(o.rates[a]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e,t){l.apply(this,arguments)}(e,t)}),[e,t]),i},x=[{code:"AUD",sign:"$",name:"Australian Dollar"},{code:"BGN",sign:"\u041b\u0432",name:"Bulgarian Lev"},{code:"BRL",sign:"R$",name:"Brazilian Real"},{code:"CAD",sign:"CA$",name:"Canadian Dollar"},{code:"CHF",sign:"Fr",name:"Swiss Franc"},{code:"CNY",sign:"\xa5",name:"Yuan Renminbi"},{code:"CZK",sign:"K\u010d",name:"Czech Koruna"},{code:"DKK",sign:"Kr",name:"Danish Krone"},{code:"EUR",sign:"\u20ac",name:"European Euro"},{code:"GBP",sign:"\xa3",name:"British Pound"},{code:"HKD",sign:"HK$",name:"Hong Kong Dollar",shortName:"H.K. Dollar"},{code:"HRK",sign:"Kn",name:"Croatian Kuna"},{code:"HUF",sign:"Ft",name:"Hungarian Forint"},{code:"IDR",sign:"Rp",name:"Indonesian Rupiah"},{code:"ILS",sign:"\u20aa",name:"Israeli New Sheqel",shortName:"Israeli Sheqel"},{code:"INR",sign:"\u20b9",name:"Indian Rupee"},{code:"ISK",sign:"\xcdkr",name:"Icelandic Kr\xf3na"},{code:"JPY",sign:"\xa5",name:"Japanese Yen"},{code:"KRW",sign:"\u20a9",name:"South Korean Won",shortName:"S.K. Won"},{code:"MXN",sign:"MEX$",name:"Mexican Peso"},{code:"MYR",sign:"Rm",name:"Malaysian Ringgit"},{code:"NOK",sign:"Kr",name:"Norwegian Krone"},{code:"NZD",sign:"NZ$",name:"New Zealand Dollar",shortName:"N.Z. Dollar"},{code:"PHP",sign:"\u20b1",name:"Philippine Peso"},{code:"PLN",sign:"Z\u0142",name:"Polish Zloty"},{code:"RON",sign:"L",name:"Romanian Leu"},{code:"RUB",sign:"\u20bd",name:"Russian Ruble"},{code:"SEK",sign:"Kr",name:"Swedish Krona"},{code:"SGD",sign:"S$",name:"Singapore Dollar"},{code:"THB",sign:"\u0e3f",name:"Thai Baht"},{code:"TRY",sign:"\u20ba",name:"Turkish New Lira",shortName:"Turkish Lira"},{code:"USD",sign:"$",name:"United States Dollar",shortName:"U.S. Dollar"},{code:"ZAR",sign:"R",name:"South African Rand",shortName:"S.A. Rand"}];function y(e){return x.find((function(t){return t.code===e}))}var k=Object(a.createContext)({value:""});function j(e){var t=e.children,n=Object(a.useState)(y("RUB")),o=Object(d.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)(y("PLN")),s=Object(d.a)(l,2),u=s[0],m=s[1],g=E(i.code,u.code);return r.a.createElement(k.Provider,{value:{targetCurrency:u,sourceCurrency:i,exchangeRate:g,exchange:function(e){var t=(e*g).toString();return t.slice(0,t.indexOf(".")+3)},getApproximateRate:function(){var e=new RegExp("\\d*\\.?0*\\d{0,3}"),t=new RegExp("\\d*\\.0*\\d{2}");return g.toFixed(10).match(g<1?e:t)[0]},swap:function(){var e=i;c(u),m(e)}}},t)}var w=k,N={setAppDimensionsViewportListner:function(){var e=document.documentElement;if(visualViewport)return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){e.style.setProperty("--app-height","".concat(visualViewport.height,"px")),e.style.setProperty("--app-top-offset","".concat(visualViewport.pageTop,"px"))}}},O=Object(a.createContext)({value:""});function L(e){var t=e.children,n=Object(a.useState)(""),o=Object(d.a)(n,2),i=o[0],c=o[1];return r.a.createElement(O.Provider,{value:{value:i,setValue:c,formatValue:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},t)}var R=O,F=n(5),S=n.n(F),B=n(64),H=Object(B.a)((function(e){return{root:{display:"grid",gridTemplateRows:"58px 252px 1fr",maxWidth:480,margin:"0 auto",height:"100%",backgroundColor:e.color.background,visibility:function(e){return e.isHidden?"hidden":"visible"}}}}));function M(e){var t=e.className,n=e.children,a=e.isHidden,o=H({isHidden:a});return r.a.createElement("div",{className:S()(o.root,t)},n)}M.defaultProps={className:"",isHidden:!1};var I=M;var P=function(){return r.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{marginRight:8}},r.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"#FB772F"}),r.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"url(#paint0_linear)"}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:"9",y1:"0",x2:"9",y2:"18",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FC6E4F"}),r.a.createElement("stop",{offset:"1",stopColor:"#FD5A37",stopOpacity:"0"}))))},A=Object(B.a)((function(){return{root:{fontSize:18,lineHeight:"24px",fontWeight:900,color:"#000"}}}));var D=function(){var e=A();return r.a.createElement("div",{className:e.root},"Currency Exchange")},K=Object(B.a)((function(e){return{root:{marginLeft:"auto",padding:[[0,10]],fontSize:12,lineHeight:"16px",fontWeight:700,border:"1px solid",color:e.color.primary,borderColor:e.color.primary,backgroundColor:e.color.background,borderRadius:99,transition:"background .15s ease, border .15s ease","&:active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground}}}}));var Z=function(){var e=K();return r.a.createElement("button",{className:e.root},"About")},T=Object(B.a)((function(e){return{root:{display:"flex",alignItems:"center",padding:[[0,e.indent.sidePadding]]}}}));var V=function(){var e=T();return r.a.createElement("div",{className:e.root},r.a.createElement(P,null),r.a.createElement(D,null),r.a.createElement(Z,null))},W={addCommasToNumber:function(e){var t=e.toString(),n=/\B(?=(\d{3})+(?!\d))/g;return t.includes(".")?t.split(".")[0].replace(n,",")+"."+t.split(".")[1]:t.replace(n,",")}},z=function(){return r.a.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none"},r.a.createElement("path",{d:"M1 1L6 6L11 1",strokeWidth:"2",strokeLinecap:"round"}))};var $=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(null),c=Object(d.a)(i,2),l=c[0],s=c[1];function u(){e(),o(!0),s((new Date).getTime())}function m(){var e=(new Date).getTime()-l;e>300?o(!1):setTimeout((function(){o(!1)}),e)}return{isActive:r,tapEventProps:{onTouchStart:u,onTouchEnd:m,onMouseDown:u,onMouseUp:m}}},U=Object(B.a)((function(e){return{root:{display:"block",position:"relative",padding:0,textAlign:"left",border:"none",background:"transparent","&::after":{content:"''",position:"absolute",top:-6,right:-12,bottom:-8,left:-8,backgroundColor:e.color.activeBackground,borderRadius:4,opacity:0,transition:"opacity .2s ease"},"&.is-active::after":{opacity:1}},currencyCode:{position:"relative",display:"inline-flex",alignItems:"center",fontSize:26,fontWeight:400,lineHeight:"34px",zIndex:2,"& > span":{color:e.color.fieldForeground},"& > svg":{marginLeft:10,marginTop:-2,"& > path":{stroke:e.color.primary}}},currencyName:{position:"relative",fontSize:12,fontWeight:400,lineHeight:"14px",color:"#929199",zIndex:2,whiteSpace:"nowrap"}}}));var q=function(e){var t=e.value,n=U(),a=$((function(){})),o=a.isActive,i=a.tapEventProps,c=t.shortName,l=t.name;return r.a.createElement("button",Object.assign({type:"button",className:S()(n.root,{"is-active":o})},i),r.a.createElement("div",{className:n.currencyCode},r.a.createElement("span",null,t.code),r.a.createElement(z,null)),r.a.createElement("div",{className:n.currencyName},c||l))},Y=Object(B.a)((function(e){return{root:{position:"relative"},value:{color:e.color.fieldForeground,fontSize:26,lineHeight:"34px",fontWeight:700,paddingLeft:20,wordBreak:"break-word",textAlign:"right"},cursor:{position:"absolute",top:-2,right:-3,width:1,height:34,backgroundColor:e.color.primary,animation:"1s cursorBlink step-end infinite"}}}));var G=function(e){var t=e.value,n=e.hasCursor,a=Y();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.value},t),n&&r.a.createElement("div",{className:a.cursor}))},J=Object(B.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:112,width:"100%",padding:[[15,e.indent.sidePadding]]}}}));var X=function(e){var t=e.currency,n=e.value,a=J();return r.a.createElement("div",{className:a.root},r.a.createElement(q,{value:t}),r.a.createElement(G,{value:n,hasCursor:!0}))},_=Object(B.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:140,width:"100%",padding:[[50,e.indent.sidePadding,10]],backgroundColor:"#F7F9FA"}}}));var Q=function(e){var t=e.currency,n=e.value,a=_();return r.a.createElement("div",{className:a.root},r.a.createElement(q,{value:t}),r.a.createElement(G,{value:n}))},ee=Object(B.a)((function(e){return{root:{position:"relative",width:40,height:40,minWidth:[[40],"!important"],padding:0,color:[[e.color.fieldForeground],"!important"],backgroundColor:e.color.background,border:"2px solid #F2F5F6",borderRadius:[["50%"],"!important"],touchAction:"manipulation",transition:"background .15s ease, border .15s ease",zIndex:20,display:"flex",justifyContent:"center",alignItems:"center","& path":{fill:e.color.primary},"&.is-active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground},"&::after":{content:"''",position:"absolute",top:-10,left:-10,right:-10,bottom:-10}}}}));var te=function(e){var t=e.onClick,n=ee(),a=$(t),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({onClick:t,className:S()(n.root,{"is-active":o})},i),r.a.createElement("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"none"},r.a.createElement("path",{d:"M12.5714 15.5667V7.77778H10.2857V15.5667H6.85714L11.4286 20L16 15.5667H12.5714ZM4.57143 0L0 4.43333H3.42857V12.2222H5.71429V4.43333H9.14286L4.57143 0Z"})))},ne=Object(B.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",padding:[[0,17,0,8]],height:40,border:"2px solid #F2F5F6",backgroundColor:e.color.background,borderRadius:99},icon:{margin:[[0,12,1,0]],"& path":{fill:e.color.primary}},rate:{fontSize:13,fontWeight:700,lineHeight:"20px",color:e.color.primary}}}));var ae=function(){var e=ne(),t=W.addCommasToNumber,n=Object(a.useContext)(w),o=n.sourceCurrency,i=n.targetCurrency,c=n.getApproximateRate;return r.a.createElement("div",{className:e.root},r.a.createElement("svg",{className:e.icon,width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"},r.a.createElement("path",{d:"M1.27445 6.73396C0.851377 7.08897 0.7962 7.71973 1.15121 8.1428C1.50621 8.56587 2.13697 8.62104 2.56004 8.26604L1.27445 6.73396ZM4.89655 5L5.6061 4.29534L4.95815 3.64289L4.25376 4.23396L4.89655 5ZM7.37931 7.5L6.66976 8.20466L7.37931 8.91913L8.08886 8.20466L7.37931 7.5ZM13.5509 2.70466C13.9401 2.31278 13.9379 1.67962 13.546 1.29045C13.1542 0.90128 12.521 0.903471 12.1318 1.29534L13.5509 2.70466ZM8.86897 0C8.31668 0 7.86897 0.447715 7.86897 1C7.86897 1.55228 8.31668 2 8.86897 2V0ZM13.8345 1H14.8345V0H13.8345V1ZM12.8345 6C12.8345 6.55228 13.2822 7 13.8345 7C14.3868 7 14.8345 6.55228 14.8345 6H12.8345ZM2.56004 8.26604L5.53935 5.76604L4.25376 4.23396L1.27445 6.73396L2.56004 8.26604ZM4.187 5.70466L6.66976 8.20466L8.08886 6.79534L5.6061 4.29534L4.187 5.70466ZM8.08886 8.20466L13.5509 2.70466L12.1318 1.29534L6.66976 6.79534L8.08886 8.20466ZM8.86897 2H13.8345V0H8.86897V2ZM12.8345 1V6H14.8345V1H12.8345Z"})),r.a.createElement("span",{className:e.rate},o.sign," 1 \u2248 ",i.sign," ",t(c())))},re=Object(B.a)((function(e){return{root:{position:"relative"},button:{position:"absolute",top:-20,left:e.indent.sidePadding},exchangeRate:{position:"absolute",top:-20,right:e.indent.sidePadding}}}));var oe=function(){var e=re(),t=Object(a.useContext)(w).swap;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.button},r.a.createElement(te,{onClick:t})),r.a.createElement("div",{className:e.exchangeRate},r.a.createElement(ae,null)))},ie=Object(B.a)((function(){return{root:{}}}));var ce=function(){var e=ie(),t=W.addCommasToNumber,n=Object(a.useContext)(R).value,o=Object(a.useContext)(w),i=o.sourceCurrency,c=o.targetCurrency,l=(0,o.exchange)(n),s=Math.trunc(l),u=s<999999999?l:s;return r.a.createElement("div",{className:e.root},r.a.createElement(X,{currency:i,value:t(n)}),r.a.createElement(oe,null),r.a.createElement(Q,{currency:c,value:n?t(u):""}))},le=Object(B.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:60,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent"}}}));var se=function(e){var t=e.label,n=e.onClick,a=le(),o=$(n),i=o.isActive,c=o.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:S()(a.root,{"is-active":i})},c),r.a.createElement("span",{className:a.label},t))},ue=Object(B.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:60,paddingTop:13,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent",transition:"background .15s ease"},path:{fill:e.color.fieldForeground}}}));var de=function(e){var t=e.onClick,n=ue(),a=$(t),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({onClick:t,className:S()(n.root,{"is-active":o})},i),r.a.createElement("span",{className:n.label},r.a.createElement("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none"},r.a.createElement("path",{className:n.path,d:"M0 2.50831C0 2.16501 0.060506 1.83832 0.181518 1.52824C0.313531 1.21816 0.489549 0.952381 0.709571 0.730897C0.929593 0.509413 1.19362 0.332226 1.50165 0.199335C1.80968 0.0664451 2.13971 0 2.49175 0C2.84378 0 3.16832 0.0664451 3.46535 0.199335C3.77338 0.332226 4.0374 0.509413 4.25743 0.730897C4.48845 0.952381 4.66997 1.21816 4.80198 1.52824C4.93399 1.83832 5 2.16501 5 2.50831C5 2.86268 4.93399 3.19491 4.80198 3.50498C4.66997 3.80399 4.48845 4.06423 4.25743 4.28571C4.0374 4.5072 3.77338 4.67885 3.46535 4.80066C3.16832 4.93355 2.84378 5 2.49175 5C2.13971 5 1.80968 4.93355 1.50165 4.80066C1.19362 4.67885 0.929593 4.5072 0.709571 4.28571C0.489549 4.06423 0.313531 3.80399 0.181518 3.50498C0.060506 3.19491 0 2.86268 0 2.50831Z"}))))},me=Object(B.a)((function(){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},grid:{width:"100%",maxWidth:360,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(4, 60px)"}}})),ge=n(28),pe=n.n(ge),fe=n(29),ve=n.n(fe),he=n(30),be=n.n(he),Ce=n(31),Ee=n.n(Ce),xe=n(32),ye=n.n(xe),ke=n(33),je=n.n(ke),we=n(34),Ne=n.n(we),Oe=n(35),Le=n.n(Oe),Re=n(36),Fe=n.n(Re),Se=n(37),Be=n.n(Se),He=Object(B.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active":{"& $path":{fill:e.color.primary},"& $circle":{fill:e.color.activeBackground}}},label:{display:"flex",justifyContent:"center",alignItems:"center",width:60,height:"100%"},path:{fill:e.color.background,transition:"fill .15s ease"},circle:{fill:e.color.primary,transition:"fill .15s ease"}}}));var Me=function(e){var t=e.onClick,n=He(),a=$(t),o=a.isActive,i=a.tapEventProps;return r.a.createElement("button",Object.assign({type:"button",className:S()(n.root,{"is-active":o})},i),r.a.createElement("span",{className:n.label},r.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},r.a.createElement("circle",{cx:"20",cy:"20",r:"20",className:n.circle}),r.a.createElement("path",{className:n.path,d:"M25.2201 24.6522C25.4002 24.6522 25.5597 24.7212 25.6989 24.8593L27 26.2598C26.2799 27.1448 25.392 27.8227 24.3363 28.2936C23.2889 28.7645 22.0286 29 20.5556 29C19.2381 29 18.0516 28.7767 16.9959 28.3302C15.9484 27.8836 15.0524 27.2625 14.3077 26.4668C13.563 25.6712 12.9902 24.7212 12.5892 23.617C12.1964 22.5129 12 21.3072 12 20C12 18.6766 12.2128 17.4668 12.6383 16.3708C13.0638 15.2666 13.6612 14.3166 14.4304 13.521C15.2079 12.7253 16.1326 12.1083 17.2046 11.6698C18.2766 11.2233 19.4632 11 20.7643 11C22.0573 11 23.2029 11.2111 24.2013 11.6333C25.2079 12.0555 26.063 12.6076 26.7668 13.2896L25.662 14.8119C25.5966 14.9093 25.5106 14.9946 25.4043 15.0677C25.3061 15.1407 25.1669 15.1773 24.9869 15.1773C24.8642 15.1773 24.7373 15.1448 24.6064 15.0798C24.4755 15.0068 24.3322 14.9215 24.1768 14.8241C24.0213 14.7185 23.8412 14.6049 23.6367 14.4831C23.4321 14.3613 23.1948 14.2517 22.9247 14.1543C22.6547 14.0487 22.3396 13.9635 21.9795 13.8985C21.6277 13.8254 21.2185 13.7889 20.752 13.7889C19.9583 13.7889 19.23 13.931 18.5671 14.2152C17.9124 14.4912 17.3478 14.8972 16.8732 15.433C16.3985 15.9608 16.0303 16.6103 15.7684 17.3816C15.5065 18.1448 15.3756 19.0176 15.3756 20C15.3756 20.9905 15.5147 21.8714 15.793 22.6428C16.0794 23.4141 16.464 24.0636 16.9468 24.5913C17.4296 25.1191 17.9984 25.525 18.653 25.8092C19.3077 26.0852 20.0115 26.2233 20.7643 26.2233C21.2144 26.2233 21.6195 26.1989 21.9795 26.1502C22.3478 26.1015 22.6833 26.0244 22.9861 25.9188C23.2971 25.8133 23.5876 25.6793 23.8576 25.5169C24.1358 25.3464 24.41 25.1394 24.68 24.8958C24.7619 24.8227 24.8478 24.7659 24.9378 24.7253C25.0278 24.6766 25.1219 24.6522 25.2201 24.6522Z"}))))},Ie={0:Be.a,1:pe.a,2:ve.a,3:be.a,4:Ee.a,5:ye.a,6:je.a,7:Ne.a,8:Le.a,9:Fe.a};var Pe=function(){var e=".",t=me(),n=Object(a.useContext)(R),o=n.setValue,i=n.value;function c(t){if(!i&&[e,0].includes(t))return null;var n=i.split(e),a=2===n.length,r=t===e;return a&&(r||2===n[1].length)||r&&i.length>11||i.replace(e,"").length>=13?null:void o(i+t)}return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.grid},new Array(9).fill(0).map((function(e,t){return r.a.createElement(se,{label:r.a.createElement("img",{src:Ie[t+1],alt:"Icon ".concat(t+1)}),onClick:function(){return c(t+1)},key:t+1})})),r.a.createElement(de,{onClick:function(){return c(e)}}),r.a.createElement(se,{label:r.a.createElement("img",{src:Ie[0],alt:"Icon 0"}),onClick:function(){return c(0)}}),r.a.createElement(Me,{onClick:function(){o("")}})))};var Ae=function(e){var t=e.isMenuOpen;return r.a.createElement(I,{isHidden:t},r.a.createElement(L,null,r.a.createElement(V,null),r.a.createElement(ce,null),r.a.createElement(Pe,null)))},De=n(65),Ke=Object(B.a)((function(){return{root:{}}}));var Ze=function(){var e=Ke();return r.a.createElement("div",{className:e.root},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto autem doloribus consequuntur tenetur quidem similique optio modi, odio quis?")},Te=Object(B.a)((function(e){return{root:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:20,"& > div":{height:"100%",width:"100%",backgroundColor:e.color.background}}}}));var Ve=function(e){var t=e.activeMenu,n=e.onEntered,a=e.onExit,o=Te(),i={direction:"up",timeout:300,mountOnEnter:!0,unmountOnExit:!0,onEntered:n,onExit:a};return r.a.createElement("div",{className:o.root},r.a.createElement(De.a,Object.assign({in:"currencySelect"===t},i),r.a.createElement("div",null,r.a.createElement(Ze,null))))};var We=function(){var e=N.setAppDimensionsViewportListner,t=Object(a.useState)(""),n=Object(d.a)(t,2),o=n[0],i=(n[1],Object(a.useState)(!1)),c=Object(d.a)(i,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){e()}),[e]),r.a.createElement(v,null,r.a.createElement(j,null,r.a.createElement(Ae,{isMenuOpen:l}),r.a.createElement(Ve,{activeMenu:o,onEntered:function(){return s(!0)},onExit:function(){return s(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u()(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(We,null))),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.9d08cf07.chunk.js.map