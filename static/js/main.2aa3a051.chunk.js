(window.webpackJsonprobolympics=window.webpackJsonprobolympics||[]).push([[0],{183:function(e,t,a){e.exports=a(400)},188:function(e,t,a){},207:function(e,t){},209:function(e,t){},241:function(e,t){},242:function(e,t){},307:function(e,t){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(174),c=a.n(o),i=(a(188),a(429)),l=a(428),u=a(424),m=a(402),s=a(427),f=a(180),E=a(425),d=a(426),h=Object(m.a)({footer:{borderTop:"0.0625rem solid rgba(0,0,0,.1)",padding:"1em 0",textAlign:"center",backgroundColor:"#212121",color:"#E0E0E0"}}),p=function(){var e=h();return r.a.createElement("footer",{className:e.footer},r.a.createElement("h6",{variant:"body1"},"\xa9\xa0",(new Date).getFullYear(),"\xa0 ?"))},b=a(58),g=a(178),v=a.n(g),w=function(e){return new Promise(function(t){v.a.init({key:e,callback:function(e){t(e)},simpleSheet:!0})})},y=function(e){try{var t=parseInt(e.split("[")[1].split(" ")[0]);return isNaN(t)?0:t}catch(a){return 0}},j=a(418),O=a(420),k=a(423),S=a(419),x=a(421),N=a(422),C=Object(j.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}}),q=function(e){var t=C(),a=e.equiposCategoria,n=e.numRondas;return r.a.createElement(O.a,{className:t.table},r.a.createElement(x.a,null,r.a.createElement(N.a,null,r.a.createElement(S.a,null,"Equipo"),function(){for(var e=[],t=1;t<=n;t++)e.push(r.a.createElement(S.a,{align:"right"},"Ronda ",t));return e}())),r.a.createElement(k.a,null,Object.keys(a).map(function(e){return r.a.createElement(N.a,{key:e},r.a.createElement(S.a,{component:"th",scope:"row"},e),function(e){for(var t=[],o=1;o<=n;o++)t.push(r.a.createElement(S.a,{align:"right"},void 0===a[e][o]?"-":a[e][o]));return t}(e))})))},J=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),i=Object(b.a)(c,2),l=i[0],m=i[1],s=Object(n.useState)(),f=Object(b.a)(s,2),E=f[0],d=f[1],h=Object(n.useState)(),p=Object(b.a)(h,2),g=p[0],v=p[1];return Object(n.useEffect)(function(){w("18mN2sOgJ2xywXhx0oYzFbeSsB9rok35eQQWHheokCDg").then(function(e){(function(e){var t={};return new Promise(function(a){w("1gXX_7SrtsZ_ZQUabEGSn-j5EgwIWI_BkQfXjAsaZi4A").then(function(n){Object.values(n).map(function(e){return e.Correo});Object.values(e).forEach(function(e){var a=e.ronda,n=e.categoria,r=(e.email,e["equipo"+n]);switch(t[n]||(t[n]={}),t[n][r]||(t[n][r]={}),t[n][r][a]||(t[n][r][a]=0),n){case"Elementary":for(var o=1;o<=5;o++)t[n][r][a]+=y(e["elementary0"+o]);break;case"Junior":for(var c=1;c<=3;c++)t[n][r][a]+=y(e["elementary0"+c]);break;case"Senior":for(var i=1;i<=5;i++)t[n][r][a]+=y(e["elementary0"+i])}}),a(t)})})})(e).then(function(e){o(e)})})},[]),Object(n.useEffect)(function(){console.log("Puntuaciones totales: ",a),a&&(m(a.Elementary),d(a.Junior),v(a.Senior))},[a]),r.a.createElement("div",{style:{padding:20}},r.a.createElement("h3",null,"Puntajes totales"),r.a.createElement("h5",null,"Elementary"),r.a.createElement(u.a,{item:!0,xs:12},void 0!==l&&r.a.createElement(q,{equiposCategoria:l,numRondas:4})),r.a.createElement("h5",null,"Junior"),r.a.createElement(u.a,{item:!0,xs:12},void 0!==E&&r.a.createElement(q,{equiposCategoria:E,numRondas:5})),r.a.createElement("h5",null,"Senior"),r.a.createElement(u.a,{item:!0,xs:12},void 0!==g&&r.a.createElement(q,{equiposCategoria:g,numRondas:3})))},R=Object(m.a)(function(e){return{title:{flexGrow:1},root:{minHeight:"100vh",margin:"auto",marginBottom:"4rem"}}}),B={palette:{primary:E.a,secondary:d.a},status:{danger:"orange"}},W=function(){var e=R();return r.a.createElement(s.a,{theme:Object(f.a)(B)},r.a.createElement(i.a,{color:"primary",position:"sticky",elevation:0},r.a.createElement(l.a,null,r.a.createElement("h3",{variant:"h6",color:"inherit",className:e.title,"data-testid":"header"},"Olimpiada Nacional de Rob\xf3tica"))),r.a.createElement(u.a,{item:!0,xs:12,className:e.root},r.a.createElement(J,null)),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);
//# sourceMappingURL=main.2aa3a051.chunk.js.map