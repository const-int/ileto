(this.webpackJsonpileto=this.webpackJsonpileto||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/1.55fb78ec.svg"},31:function(e,t,n){e.exports=n.p+"static/media/2.c790b928.svg"},32:function(e,t,n){e.exports=n.p+"static/media/3.6b8d629c.svg"},33:function(e,t,n){e.exports=n.p+"static/media/4.1dbc658c.svg"},34:function(e,t,n){e.exports=n.p+"static/media/5.29aba8ff.svg"},35:function(e,t,n){e.exports=n.p+"static/media/6.1d7420d1.svg"},36:function(e,t,n){e.exports=n.p+"static/media/7.fa3d01d0.svg"},37:function(e,t,n){e.exports=n.p+"static/media/8.229c1fd1.svg"},38:function(e,t,n){e.exports=n.p+"static/media/9.933e4ebc.svg"},39:function(e,t,n){e.exports=n.p+"static/media/0.cc817843.svg"},44:function(e,t,n){e.exports=n(53)},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),i=n.n(a),c=n(24),l=n.n(c),s=n(25),u=n.n(s),d=(n(49),n(66)),g=n(40),m=Object(g.a)({props:{MuiButtonBase:{disableRipple:!0}},typography:{fontFamily:["Lato","sans-serif"].join(",")},font:{primary:"Lato, sans-serif"},indent:{sidePadding:14,sidePaddingLarge:24},color:{primary:"#FB772F",background:"#FFFFFF",backgroundAlt:"#F7F9FA",foreground:"#484644",foregroundLight:"#B2AFAB",fieldBackground:"#F4F4F4",fieldForeground:"#666666",activeBackground:"#FEE4D5",activeBackground2:"#FCA06D",flagBorder:"#e8e8e8"}});function p(e){var t=e.children;return o.a.createElement(d.a,{theme:m},t)}p.defaultProps={children:null};var f=p,v=n(8),b=n(20),h=n(3),C=n(21),y=n.n(C),E=n(29);var x=function(e,t){var n="https://api.exchangeratesapi.io/latest",o=Object(r.useState)(1),a=Object(h.a)(o,2),i=a[0],c=a[1];function l(){return(l=Object(E.a)(y.a.mark((function e(t,r){var o,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n,"?base=").concat(t,"&symbols=").concat(r));case 2:return o=e.sent,e.next=5,o.json();case 5:(a=e.sent)&&a.rates&&a.rates[r]&&c(a.rates[r]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(e,t){l.apply(this,arguments)}(e,t)}),[e,t]),i},j=[{code:"AUD",countryCode:"AU",sign:"$",name:"Australian Dollar"},{code:"BGN",countryCode:"BG",sign:"\u041b\u0432",name:"Bulgarian Lev"},{code:"BRL",countryCode:"BR",sign:"R$",name:"Brazilian Real"},{code:"CAD",countryCode:"CA",sign:"CA$",name:"Canadian Dollar"},{code:"CHF",countryCode:"CH",sign:"Fr",name:"Swiss Franc"},{code:"CNY",countryCode:"CN",sign:"\xa5",name:"Yuan Renminbi"},{code:"CZK",countryCode:"CZ",sign:"K\u010d",name:"Czech Koruna"},{code:"DKK",countryCode:"DK",sign:"Kr",name:"Danish Krone"},{code:"EUR",countryCode:"EU",sign:"\u20ac",name:"European Euro"},{code:"GBP",countryCode:"GB",sign:"\xa3",name:"British Pound"},{code:"HKD",countryCode:"HK",sign:"HK$",name:"Hong Kong Dollar",shortName:"H.K. Dollar"},{code:"HRK",countryCode:"HR",sign:"Kn",name:"Croatian Kuna"},{code:"HUF",countryCode:"HU",sign:"Ft",name:"Hungarian Forint"},{code:"IDR",countryCode:"ID",sign:"Rp",name:"Indonesian Rupiah"},{code:"ILS",countryCode:"IL",sign:"\u20aa",name:"Israeli New Sheqel",shortName:"Israeli Sheqel"},{code:"INR",countryCode:"IN",sign:"\u20b9",name:"Indian Rupee"},{code:"ISK",countryCode:"IS",sign:"\xcdkr",name:"Icelandic Kr\xf3na"},{code:"JPY",countryCode:"JP",sign:"\xa5",name:"Japanese Yen"},{code:"KRW",countryCode:"KR",sign:"\u20a9",name:"South Korean Won",shortName:"S.K. Won"},{code:"MXN",countryCode:"MX",sign:"MEX$",name:"Mexican Peso"},{code:"MYR",countryCode:"MY",sign:"Rm",name:"Malaysian Ringgit"},{code:"NOK",countryCode:"NO",sign:"Kr",name:"Norwegian Krone"},{code:"NZD",countryCode:"NZ",sign:"NZ$",name:"New Zealand Dollar",shortName:"N.Z. Dollar"},{code:"PHP",countryCode:"PH",sign:"\u20b1",name:"Philippine Peso"},{code:"PLN",countryCode:"PL",sign:"Z\u0142",name:"Polish Zloty"},{code:"RON",countryCode:"RO",sign:"L",name:"Romanian Leu"},{code:"RUB",countryCode:"RU",sign:"\u20bd",name:"Russian Ruble"},{code:"SEK",countryCode:"SE",sign:"Kr",name:"Swedish Krona"},{code:"SGD",countryCode:"SG",sign:"S$",name:"Singapore Dollar"},{code:"THB",countryCode:"TH",sign:"\u0e3f",name:"Thai Baht"},{code:"TRY",countryCode:"TR",sign:"\u20ba",name:"Turkish New Lira",shortName:"Turkish Lira"},{code:"USD",countryCode:"US",sign:"$",name:"United States Dollar",shortName:"U.S. Dollar"},{code:"ZAR",countryCode:"ZA",sign:"R",name:"South African Rand",shortName:"S.A. Rand"}];function k(e){return j.find((function(t){return t.code===e}))}var O=Object(r.createContext)({value:""});function w(e){var t=e.children,n=Object(r.useState)(k("RUB")),a=Object(h.a)(n,2),i=a[0],c=a[1],l=Object(r.useState)(k("GBP")),s=Object(h.a)(l,2),u=s[0],d=s[1],g=Object(r.useState)(JSON.parse(localStorage.getItem("ileto::favorite_currencries"))||{}),m=Object(h.a)(g,2),p=m[0],f=m[1],C=x(i.code,u.code);function y(e){localStorage.setItem("ileto::favorite_currencries",JSON.stringify(e))}return o.a.createElement(O.Provider,{value:{targetCurrency:u,sourceCurrency:i,exchangeRate:C,exchange:function(e){var t=(e*C).toString();return t.slice(0,t.indexOf(".")+3)},getApproximateRate:function(){var e=new RegExp("\\d*\\.?0*[1-9]{0,3}"),t=new RegExp("\\d*\\.\\d{2}");return C.toFixed(10).match(C<1?e:t)[0]},swap:function(){var e=i;c(u),d(e)},setSourceCurrency:c,setTargetCurrency:d,favoriteCurrencyCodes:p,addFavoriteCurrencyCode:function(e){if(!p[e]){var t=Object(b.a)(Object(b.a)({},p),{},Object(v.a)({},e,!0));f(t),y(t)}},removeFavoriteCurrencyCode:function(e){if(p[e]){var t=Object(b.a)({},p);delete t[e],f(t),y(t)}}}},t)}var N=O,L=Object(r.createContext)({value:""});function S(e){var t=e.children,n=Object(r.useState)(null),a=Object(h.a)(n,2),i=a[0],c=a[1],l=Object(r.useState)(!1),s=Object(h.a)(l,2),u=s[0],d=s[1];return o.a.createElement(L.Provider,{value:{menu:i,setMenu:c,isMenuOpen:u,setIsMenuOpen:d}},t)}var B=L,R={setAppDimensionsViewportListner:function(){var e=document.documentElement;if(visualViewport)return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){e.style.setProperty("--app-height","".concat(visualViewport.height,"px")),e.style.setProperty("--app-top-offset","".concat(visualViewport.pageTop,"px"))}}},A=Object(r.createContext)({value:""});function F(e){var t=e.children,n=Object(r.useState)(""),a=Object(h.a)(n,2),i=a[0],c=a[1];return o.a.createElement(A.Provider,{value:{value:i,setValue:c,formatValue:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},t)}var I=A,P=n(5),H=n.n(P),T=n(67),M=Object(T.a)((function(e){return{root:{display:"grid",gridTemplateRows:"58px 252px 1fr",maxWidth:480,margin:"0 auto",height:"100%",backgroundColor:e.color.background,visibility:function(e){return e.isHidden?"hidden":"visible"}}}}));function W(e){var t=e.className,n=e.children,a=Object(r.useContext)(B).isMenuOpen,i=M({isHidden:a});return o.a.createElement("div",{className:H()(i.root,t)},n)}W.defaultProps={className:"",isHidden:!1};var D=W;var K=function(){return o.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{marginRight:8}},o.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"#FB772F"}),o.a.createElement("circle",{cx:"9",cy:"9",r:"9",fill:"url(#paint0_linear)"}),o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"paint0_linear",x1:"9",y1:"0",x2:"9",y2:"18",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopColor:"#FC6E4F"}),o.a.createElement("stop",{offset:"1",stopColor:"#FD5A37",stopOpacity:"0"}))))},z=Object(T.a)((function(){return{root:{fontSize:18,lineHeight:"24px",fontWeight:900,color:"#000"}}}));var U=function(){var e=z();return o.a.createElement("div",{className:e.root},"Currency Exchange")};var Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=400,o=200,a=t?o:n,i=Object(r.useState)(!1),c=Object(h.a)(i,2),l=c[0],s=c[1],u=Object(r.useState)(null),d=Object(h.a)(u,2),g=d[0],m=d[1];function p(){e(),s(!0),m((new Date).getTime())}function f(){var e=(new Date).getTime()-g;e>a?s(!1):setTimeout((function(){s(!1)}),e)}var v="ontouchstart"in window||navigator.msMaxTouchPoints,b=v?{onTouchStart:p,onTouchEnd:f}:{onMouseDown:p,onMouseUp:f};return{isActive:l,tapEventProps:b}},V=Object(T.a)((function(e){return{root:{marginLeft:"auto",padding:[[0,10]],fontSize:12,lineHeight:"16px",fontWeight:700,border:"1px solid",color:e.color.primary,borderColor:e.color.primary,backgroundColor:e.color.background,borderRadius:99,transition:"background .15s ease, border .15s ease","&.is-active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground}}}}));var $=function(){var e=V(),t=Z((function(){})),n=t.isActive,r=t.tapEventProps;return o.a.createElement("button",Object.assign({type:"button",className:H()(e.root,{"is-active":n})},r),"About")},G=Object(T.a)((function(e){return{root:{display:"flex",alignItems:"center",padding:[[0,e.indent.sidePadding]]}}}));var Y=function(){var e=G();return o.a.createElement("div",{className:e.root},o.a.createElement(K,null),o.a.createElement(U,null),o.a.createElement($,null))},J={addCommasToNumber:function(e){var t=e.toString(),n=/\B(?=(\d{3})+(?!\d))/g;return t.includes(".")?t.split(".")[0].replace(n,",")+"."+t.split(".")[1]:t.replace(n,",")}},_=function(){return o.a.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none"},o.a.createElement("path",{d:"M1 1L6 6L11 1",strokeWidth:"2",strokeLinecap:"round"}))},X=Object(T.a)((function(e){return{root:{display:"block",position:"relative",padding:0,textAlign:"left",border:"none",background:"transparent","&::after":{content:"''",position:"absolute",top:-6,right:-12,bottom:-8,left:-8,backgroundColor:e.color.activeBackground,borderRadius:4,opacity:0,transition:"opacity .2s ease"},"&.is-active::after":{opacity:1}},currencyCode:{position:"relative",display:"inline-flex",alignItems:"center",fontSize:26,fontWeight:400,lineHeight:"34px",zIndex:2,"& > span":{color:e.color.fieldForeground},"& > svg":{marginLeft:10,marginTop:-2,"& > path":{stroke:e.color.primary}}},currencyName:{position:"relative",fontSize:14,fontWeight:400,lineHeight:"14px",color:"#929199",zIndex:2,whiteSpace:"nowrap"}}}));var q=function(e){var t=e.value,n=e.type,a=X(),i=Z((function(){})),c=i.isActive,l=i.tapEventProps,s=t.shortName,u=t.name,d=Object(r.useContext)(B).setMenu;return o.a.createElement("button",Object.assign({type:"button",className:H()(a.root,{"is-active":c}),onClick:function(){d("".concat(n,"CurrencySelect"))}},l),o.a.createElement("div",{className:a.currencyCode},o.a.createElement("span",null,t.code),o.a.createElement(_,null)),o.a.createElement("div",{className:a.currencyName},s||u))},Q=Object(T.a)((function(e){return{root:{position:"relative"},value:{color:e.color.fieldForeground,fontSize:26,lineHeight:"34px",fontWeight:700,paddingLeft:20,wordBreak:"break-word",textAlign:"right","& span":{position:"relative",top:-6,display:"inline-block",verticalAlign:"top",fontSize:16}},cursor:{position:"absolute",top:-2,right:-3,width:2,height:34,backgroundColor:e.color.primary,animation:"1s cursorBlink step-end infinite"}}}));var ee=function(e){var t=e.value,n=e.hasCursor,r=Q();return o.a.createElement("div",{className:r.root},o.a.createElement("div",{className:r.value,dangerouslySetInnerHTML:{__html:t}}),n&&o.a.createElement("div",{className:r.cursor}))},te=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:112,width:"100%",padding:[[15,e.indent.sidePadding]]}}}));var ne=function(e){var t=e.currency,n=e.value,r=te();return o.a.createElement("div",{className:r.root},o.a.createElement(q,{value:t,type:"source"}),o.a.createElement(ee,{value:n,hasCursor:!0}))},re=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:140,width:"100%",padding:[[50,e.indent.sidePadding,10]],backgroundColor:e.color.backgroundAlt}}}));var oe=function(e){var t=e.currency,n=e.value,r=re();return o.a.createElement("div",{className:r.root},o.a.createElement(q,{value:t,type:"target"}),o.a.createElement(ee,{value:n}))},ae=Object(T.a)((function(e){return{root:{position:"relative",width:40,height:40,minWidth:[[40],"!important"],padding:0,color:[[e.color.fieldForeground],"!important"],backgroundColor:e.color.background,border:"2px solid #F2F5F6",borderRadius:[["50%"],"!important"],touchAction:"manipulation",transition:"background .15s ease, border .15s ease",zIndex:20,display:"flex",justifyContent:"center",alignItems:"center","& path":{fill:e.color.primary},"&.is-active":{backgroundColor:e.color.activeBackground,borderColor:e.color.activeBackground},"&::after":{content:"''",position:"absolute",top:-10,left:-10,right:-10,bottom:-10}}}}));var ie=function(e){var t=e.onClick,n=ae(),r=Z(t,!1),a=r.isActive,i=r.tapEventProps;return o.a.createElement("button",Object.assign({type:"button",className:H()(n.root,{"is-active":a})},i),o.a.createElement("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"none"},o.a.createElement("path",{d:"M12.5714 15.5667V7.77778H10.2857V15.5667H6.85714L11.4286 20L16 15.5667H12.5714ZM4.57143 0L0 4.43333H3.42857V12.2222H5.71429V4.43333H9.14286L4.57143 0Z"})))},ce=Object(T.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",padding:[[0,15]],height:40,border:"2px solid #F2F5F6",backgroundColor:e.color.background,borderRadius:99},rate:{fontSize:14,fontWeight:700,lineHeight:"14px",color:e.color.primary}}}));var le=function(){var e=ce(),t=J.addCommasToNumber,n=Object(r.useContext)(N),a=n.sourceCurrency,i=n.targetCurrency,c=n.getApproximateRate;return o.a.createElement("div",{className:e.root},o.a.createElement("span",{className:e.rate},"1 ",a.code," = ",t(c())," ",i.code))},se=Object(T.a)((function(e){return{root:{position:"relative"},button:{position:"absolute",top:-20,left:e.indent.sidePadding},exchangeRate:{position:"absolute",top:-20,right:e.indent.sidePadding}}}));var ue=function(){var e=se(),t=Object(r.useContext)(N).swap;return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.button},o.a.createElement(ie,{onClick:t})),o.a.createElement("div",{className:e.exchangeRate},o.a.createElement(le,null)))},de=Object(T.a)((function(){return{root:{}}}));var ge=function(){var e=de(),t=J.addCommasToNumber,n=Object(r.useContext)(I).value,a=Object(r.useContext)(N),i=a.sourceCurrency,c=a.targetCurrency,l=(0,a.exchange)(n),s=Math.trunc(l),u=s<999?l:s;return o.a.createElement("div",{className:e.root},o.a.createElement(ne,{currency:i,value:t(n)}),o.a.createElement(ue,null),o.a.createElement(oe,{currency:c,value:n?t(u):""}))},me=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent"}}}));var pe=function(e){var t=e.label,n=e.onClick,r=me(),a=Z(n,!0),i=a.isActive,c=a.tapEventProps;return o.a.createElement("button",Object.assign({type:"button",className:H()(r.root,{"is-active":i})},c),o.a.createElement("span",{className:r.label},t))},fe=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none","&.is-active $label":{backgroundColor:e.color.activeBackground}},label:{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,paddingTop:13,borderRadius:"50%",color:e.color.fieldForeground,backgroundColor:"transparent",transition:"background .15s ease"},path:{fill:e.color.fieldForeground}}}));var ve=function(e){var t=e.onClick,n=fe(),r=Z(t,!0),a=r.isActive,i=r.tapEventProps;return o.a.createElement("button",Object.assign({onClick:t,className:H()(n.root,{"is-active":a})},i),o.a.createElement("span",{className:n.label},o.a.createElement("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none"},o.a.createElement("path",{className:n.path,d:"M0 2.50831C0 2.16501 0.060506 1.83832 0.181518 1.52824C0.313531 1.21816 0.489549 0.952381 0.709571 0.730897C0.929593 0.509413 1.19362 0.332226 1.50165 0.199335C1.80968 0.0664451 2.13971 0 2.49175 0C2.84378 0 3.16832 0.0664451 3.46535 0.199335C3.77338 0.332226 4.0374 0.509413 4.25743 0.730897C4.48845 0.952381 4.66997 1.21816 4.80198 1.52824C4.93399 1.83832 5 2.16501 5 2.50831C5 2.86268 4.93399 3.19491 4.80198 3.50498C4.66997 3.80399 4.48845 4.06423 4.25743 4.28571C4.0374 4.5072 3.77338 4.67885 3.46535 4.80066C3.16832 4.93355 2.84378 5 2.49175 5C2.13971 5 1.80968 4.93355 1.50165 4.80066C1.19362 4.67885 0.929593 4.5072 0.709571 4.28571C0.489549 4.06423 0.313531 3.80399 0.181518 3.50498C0.060506 3.19491 0 2.86268 0 2.50831Z"}))))},be=Object(T.a)((function(){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},grid:{width:"100%",maxWidth:360,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(4, 60px)"}}})),he=n(30),Ce=n.n(he),ye=n(31),Ee=n.n(ye),xe=n(32),je=n.n(xe),ke=n(33),Oe=n.n(ke),we=n(34),Ne=n.n(we),Le=n(35),Se=n.n(Le),Be=n(36),Re=n.n(Be),Ae=n(37),Fe=n.n(Ae),Ie=n(38),Pe=n.n(Ie),He=n(39),Te=n.n(He),Me=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:60,padding:0,background:"transparent",border:"none"},label:{display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60},path:{fill:e.color.background,transition:"fill .15s ease"},circle:{backgroundColor:function(t){return t.isActive?e.color.activeBackground2:e.color.primary},height:40,width:40,transition:"fill .15s ease",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%"}}}));var We=function(e){var t=e.onClick,n=Z(t,!0),a=n.isActive,i=n.tapEventProps,c=Me({isActive:a}),l=Object(r.useRef)(null),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){a&&!l.current?l.current=setTimeout((function(){s.current=setInterval((function(){t()}),40)}),500):(clearTimeout(l.current),clearTimeout(s.current),l.current=null,s.current=null)}),[a]),o.a.createElement("button",Object.assign({type:"button",className:c.root},i),o.a.createElement("span",{className:c.label},o.a.createElement("div",{className:c.circle},o.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 20 20"},o.a.createElement("path",{className:c.path,d:"M20 8.75H4.7875L11.775 1.7625L10 0L0 10L10 20L11.7625 18.2375L4.7875 11.25H20V8.75Z"})))))},De={0:Te.a,1:Ce.a,2:Ee.a,3:je.a,4:Oe.a,5:Ne.a,6:Se.a,7:Re.a,8:Fe.a,9:Pe.a};var Ke=function(){var e=be(),t=Object(r.useContext)(I),n=t.setValue,a=t.value;function i(e){if("0"===a&&"."!==e)return null;var t="."===e,r=a.split("."),o=2===r.length;return!a&&t||o&&(t||2===r[1].length)||t&&a.length>11||a.replace(".","").length>=13?null:void n(a+e)}return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.grid},new Array(9).fill(0).map((function(e,t){return o.a.createElement(pe,{label:o.a.createElement("img",{src:De[t+1],alt:"Icon ".concat(t+1)}),onClick:function(){return i(t+1)},key:t+1})})),o.a.createElement(ve,{onClick:function(){return i(".")}}),o.a.createElement(pe,{label:o.a.createElement("img",{src:De[0],alt:"Icon 0"}),onClick:function(){return i(0)}}),o.a.createElement(We,{onClick:function(){n((function(e){return e.substring(0,e.length-1)}))}})))};var ze=function(){return o.a.createElement(D,null,o.a.createElement(F,null,o.a.createElement(Y,null),o.a.createElement(ge,null),o.a.createElement(Ke,null)))},Ue=n(68),Ze=n(41),Ve=Object(T.a)((function(e){return{root:function(t){var n=t.isActive;return{display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,borderRadius:"50%",backgroundColor:n?e.color.activeBackground:e.color.primary,border:"none",transition:"background-color .15s ease, opacity .2s ease","& path":{fill:n?e.color.primary:e.color.background}}}}}));function $e(e){var t=e.onClick,n=e.icon,r=e.className,a=e.isActive,i=Object(Ze.a)(e,["onClick","icon","className","isActive"]),c=Ve({isActive:a});return o.a.createElement("button",Object.assign({type:"button",onClick:t,className:H()(c.root,r)},i),n)}$e.defaultProps={isActive:!1};var Ge=$e,Ye=Object(T.a)((function(e){return{root:function(t){return{position:"relative",backgroundColor:t.isActive?e.color.activeBackground2:e.color.primary,zIndex:2,height:30,width:30,"&::before":{content:"''",position:"absolute",top:-10,left:-10,right:-10,bottom:-10}}},cross:{width:12,height:12,minWidth:12,display:"block"}}}));var Je=function(){var e=Object(r.useContext)(B).setMenu,t=Z((function(){})),n=t.isActive,a=t.tapEventProps,i=Ye({isActive:n});return o.a.createElement(Ge,Object.assign({onClick:function(){return e(null)},icon:o.a.createElement("svg",{className:i.cross,viewBox:"0 0 14 14"},o.a.createElement("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"})),className:i.root},a))},_e=Object(T.a)((function(e){return{root:{fontSize:18,fontWeight:900,lineHeight:"24px",color:e.color.foreground}}}));function Xe(e){var t=e.text,n=_e();return o.a.createElement("div",{className:n.root},t)}Xe.defaultProps={text:""};var qe=Xe,Qe=Object(T.a)((function(e){return{root:{position:"sticky",top:0,height:60,padding:[[0,e.indent.sidePaddingLarge]],display:"grid",gridTemplateColumns:"1fr 32px",gridGap:e.indent.sidePaddingLarge,alignItems:"center",backgroundColor:e.color.backgroundAlt,borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:e.color.fieldBackground,zIndex:20},label:{fontSize:22,lineHeight:"30px",fontWeight:600,color:e.color.foreground},buttonWrap:{position:"relative",width:40,height:40,zIndex:2}}}));var et=function(){var e,t=Object(r.useContext)(B).menu,n=Qe(),a=(e={},Object(v.a)(e,"sourceCurrencySelect"===t,"Converting from..."),Object(v.a)(e,"targetCurrencySelect"===t,"Converting to..."),e).true;return o.a.createElement("div",{className:n.root},o.a.createElement(qe,{text:a}),o.a.createElement(Je,null))},tt=Object(T.a)((function(e){return{root:function(t){var n=t.isActive;return{height:50,display:"flex",alignItems:"center",width:"100%",padding:[[0,e.indent.sidePaddingLarge]],background:n?e.color.activeBackground:"transparent",border:"none",outline:"none",pointerEvents:"all",transition:"background .2s ease"}},description:{textAlign:"left"},code:{color:e.color.fieldForeground,fontSize:12,lineHeight:"16px",textTransform:"uppercase",fontWeight:400},name:{color:e.color.foreground,fontSize:16,lineHeight:"20px",fontWeight:400},flag:{width:36,height:36,flexShrink:0,marginRight:14,borderRadius:"50%",borderStyle:"solid",borderWidth:1,borderColor:e.color.flagBorder}}}));var nt=function(e){var t=e.code,n=e.name,a=e.countryCode,i=Object(r.useState)(!1),c=Object(h.a)(i,2),l=c[0],s=c[1],u=tt({isActive:l}),d=Object(r.useContext)(B),g=d.setMenu,m=d.menu,p=Object(r.useContext)(N),f=p.setSourceCurrency,v=p.setTargetCurrency;return o.a.createElement("button",{type:"button",className:u.root,onClick:function(){l||(s(!0),"sourceCurrencySelect"===m?f(k(t)):v(k(t)),setTimeout((function(){g(null),s(!1)}),300))}},o.a.createElement("img",{src:"/images/flags/1x1/".concat(a,".svg"),alt:"".concat(a," flag"),className:u.flag}),o.a.createElement("div",{className:u.description},o.a.createElement("div",{className:u.name},n),o.a.createElement("div",{className:u.code},t)))},rt=Object(T.a)((function(e){return{root:function(t){var n=t.isActive;return{position:"absolute",top:0,right:0,height:"100%",width:82,background:"transparent",border:"none",pointerEvents:"all",padding:[[0,e.indent.sidePaddingLarge]],"&::after":{content:"''",position:"absolute",top:"calc(50% - 20px)",left:"calc(50% - 20px)",width:40,height:40,opacity:n?1:0,borderRadius:"50%",backgroundColor:e.color.activeBackground,transition:"opacity .2s ease"}}},svg:{zIndex:2,position:"relative",width:21,height:20,"& path":{fill:e.color.primary}}}}));var ot=function(e){var t=e.code,n=Object(r.useState)(!1),a=Object(h.a)(n,2),i=a[0],c=a[1],l=rt({isActive:i}),s=Object(r.useContext)(N),u=s.favoriteCurrencyCodes,d=s.addFavoriteCurrencyCode,g=s.removeFavoriteCurrencyCode,m=Boolean(u[t]);return o.a.createElement("button",{type:"button",className:l.root,onClick:function(){i||(c(!0),setTimeout((function(){c(!1),m?g(t):d(t)}),150))}},m?o.a.createElement("svg",{className:l.svg,viewBox:"0 0 21 20"},o.a.createElement("path",{d:"M10.5 16.0737L16.989 20L15.267 12.6L21 7.62105L13.4505 6.97895L10.5 0L7.5495 6.97895L0 7.62105L5.733 12.6L4.011 20L10.5 16.0737Z"})):o.a.createElement("svg",{className:l.svg,viewBox:"0 0 21 20"},o.a.createElement("path",{d:"M21 7.62105L13.4505 6.96842L10.5 0L7.5495 6.97895L0 7.62105L5.733 12.6L4.011 20L10.5 16.0737L16.989 20L15.2775 12.6L21 7.62105ZM10.5 14.1053L6.552 16.4947L7.602 11.9895L4.116 8.9579L8.715 8.55789L10.5 4.31579L12.2955 8.56842L16.8945 8.96842L13.4085 12L14.4585 16.5053L10.5 14.1053Z"})))};var at=function(e){var t=e.code,n=e.name,r=e.countryCode;return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(nt,{code:t,name:n,countryCode:r}),o.a.createElement(ot,{code:t}))},it=Object(T.a)((function(e){return{root:{padding:[[22,0]]},label:{padding:[[0,e.indent.sidePaddingLarge,10]],fontSize:18,lineHeight:"24px",color:e.color.foreground},favorites:{paddingBottom:20,marginBottom:22,borderBottomWidth:2,borderBottomColor:e.color.fieldBackground,borderBottomStyle:"solid"}}}));var ct=function(){var e=it(),t=Object(r.useContext)(N).favoriteCurrencyCodes,n=Object.keys(t);return o.a.createElement("div",{className:e.root},Boolean(n.length>0)&&o.a.createElement("div",{className:e.favorites},o.a.createElement("div",{className:e.label},"Favorite currencies (",n.length,")"),o.a.createElement("div",null,n.map((function(e){var t=k(e),n=t.code,r=t.name,a=t.countryCode;return o.a.createElement(at,{code:n,name:r,countryCode:a,key:n})})))),o.a.createElement("div",{className:e.label},"All available currencies (",j.length,")"),o.a.createElement("div",null,j.map((function(e){var t=e.code,n=e.name,r=e.countryCode;return o.a.createElement(at,{code:t,name:n,countryCode:r,key:t})}))))},lt=Object(T.a)((function(){return{root:{maxWidth:480,margin:"0 auto",maxHeight:"var(--app-height)",overflowY:"scroll",pointerEvents:"all",position:"relative"}}}));var st=function(){var e=lt();return o.a.createElement("div",{className:e.root},o.a.createElement(et,null),o.a.createElement(ct,null))},ut=Object(T.a)((function(e){return{root:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:20,"& > div":{height:"100%",width:"100%",backgroundColor:e.color.background}}}}));var dt=function(){var e=ut(),t=Object(r.useContext)(B),n=t.menu,a=t.setIsMenuOpen,i={direction:"up",timeout:300,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(){return a(!0)},onExit:function(){return a(!1)}};return o.a.createElement("div",{className:e.root},o.a.createElement(Ue.a,Object.assign({in:["sourceCurrencySelect","targetCurrencySelect"].includes(n)},i),o.a.createElement("div",null,o.a.createElement(st,null))))};var gt=function(){var e=R.setAppDimensionsViewportListner;return Object(r.useEffect)((function(){e()}),[e]),o.a.createElement(f,null,o.a.createElement(w,null,o.a.createElement(S,null,o.a.createElement(ze,null),o.a.createElement(dt,null))))},mt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}u()(),i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement(gt,null))),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");mt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pt(t,e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.065de1c4.chunk.js.map