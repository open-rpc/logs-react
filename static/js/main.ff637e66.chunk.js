(this["webpackJsonp@open-rpc/logs-react"]=this["webpackJsonp@open-rpc/logs-react"]||[]).push([[1],{335:function(e,t,a){e.exports=a(470)},342:function(e,t,a){},418:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(72),r=a.n(n),l=a(2),o=a.n(l),c=a(105),i=a(501),s=a(517),u=a(224),d=a(222),m=a(219),p=a.n(m),f=Object(d.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"},primary:{main:p.a[900]}}}),g=Object(d.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},palette:{type:"dark",background:{default:p.a[900],paper:p.a[800]},primary:{main:"#fff"}},overrides:{MuiAppBar:{root:{background:"transparent !important"}},MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:p.a[50]}}}}),h=(a(342),a(296)),b=a(518),v=a(524),E=a(503),y=a(504),O=a(505),j=a(151),w=a(523),S=a(506),k=a(525),x=a(476),N=a(508),C=a(300),D=a(317),R=a(319),P=a.n(R),M=a(321),B=a.n(M),q=a(323),J=a.n(q),L=(a(418),a(519)),I=function(e){return o.a.createElement(L.a,Object.assign({elevation:6,variant:"filled"},e))},A=a(320),T=a.n(A),H=Object(C.a)((function(e){return Object(D.a)({cardHeader:{padding:"0 8px 0 8px"},cardContent:{padding:"0 8px 0 8px"}})})),F=o.a.memo((function(e){var t,a=Object(u.a)(),n=((t=e.log).method.includes("rpc.")?"call rpc-call":"response"===t.type?t.payload.error?"call response-error":"call response-success":"call request")+" ".concat(a.value?"dark":""),r=Object(l.useState)(!1),i=Object(c.a)(r,2),s=i[0],d=i[1],m=H();return o.a.createElement(b.a,{m:2,key:JSON.stringify(e.log),className:["call-box","".concat("response"===e.log.type?"response":""),"".concat(e.filter.includes(e.log.method)||e.filter.includes("all")?"":"hidden")].join(" ")},o.a.createElement(v.a,{open:s,autoHideDuration:4e3,onClose:function(){d(!1)}},o.a.createElement(I,{severity:"success"},"Payload Copied to Clipboard")),o.a.createElement(E.a,{raised:!0,className:n,style:{color:"white"}},o.a.createElement(y.a,{className:m.cardHeader,title:e.log.type+" - "+e.log.method,subheader:e.log.timestamp.toISOString()}),o.a.createElement(O.a,{className:m.cardContent},e.log.batchId?o.a.createElement(j.a,null,"Batch: ",e.log.batchId):null,o.a.createElement(w.a,{defaultExpanded:e.open,TransitionProps:{unmountOnExit:!0}},o.a.createElement(S.a,{expandIcon:o.a.createElement(B.a,null)},o.a.createElement(j.a,null,"Payload"),o.a.createElement(k.a,{title:"Copy to clipboard"},o.a.createElement(x.a,{style:{padding:"4px"},onClick:function(t){return function(e,t){e.stopPropagation(),d(!0),T()(JSON.stringify(t,null,4))}(t,e.log.payload)}},o.a.createElement(J.a,{style:{fontSize:14}})))),o.a.createElement(N.a,null,o.a.createElement(P.a,{width:"350px",height:"350px",language:"json",value:JSON.stringify(e.log.payload,null,4),editorDidMount:function(e,t){},editorOptions:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",fixedOverflowWidgets:!0,readOnly:!0}}))))))})),z=a(324),W=a.n(z),G=function(e){return o.a.createElement("div",{style:{width:"100%"}},e.logs.map((function(t,a){return function(t,a){return e.logs.length-1===a?o.a.createElement(F,{log:t,filter:e.filter,open:!0}):o.a.createElement(F,{log:t,filter:e.filter,open:!1})}(t,a)})))},K=function(e){return o.a.createElement(W.a,null,o.a.createElement(G,{logs:e.logs,filter:e.filter,openRecentPayload:e.openRecentPayload}))},Q=a(25),U=a(150),V=a(180),X=a(522),Y=a(509),Z=a(510),$=a(511),_=a(512),ee=a(513),te=a(521),ae=a(475),ne=a(527),re=a(514),le=a(515),oe=a(520),ce=a(516),ie=a(325),se=a.n(ie),ue=a(247),de=a.n(ue),me=a(248),pe=a.n(me),fe=Object(C.a)((function(e){return Object(D.a)({modal:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,padding:"4 8 6"},drawer:{overflow:"hidden",width:200,flexShrink:0},drawerHeader:{display:"flex",alignItems:"center",justifyContent:"flex-end"},drawerPaper:{width:200,position:"static"}})})),ge=function(e,t){var a,n=Object(V.a)(e);try{var r=function(){var e=a.value;if(t.length===e.length&&t.every((function(t){return e.includes(t)})))return{v:!0}};for(n.s();!(a=n.n()).done;){var l=r();if("object"===typeof l)return l.v}}catch(o){n.e(o)}finally{n.f()}return!1},he=function(e){var t=Object(l.useState)([]),a=Object(c.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)([]),s=Object(c.a)(i,2),u=s[0],d=s[1],m=function(e){var t,a=[],n=Object(V.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;ge(a,[r.method])||a.push([r.method])}}catch(l){n.e(l)}finally{n.f()}return a}(e.logs),p=Object(l.useState)(!1),f=Object(c.a)(p,2),g=f[0],h=f[1],b=fe(),v=[["all"]].concat(Object(U.a)(m),Object(U.a)(n)),E=function(e,t){if(t)return d((function(t){return[].concat(Object(U.a)(t),[e.target.value])}));var a=Object(U.a)(u),n=a.indexOf(e.target.value);return n>-1?(a.splice(n,1),d(Object(U.a)(a))):void 0};return o.a.createElement("div",null,o.a.createElement(X.a,{className:b.drawer,variant:"persistent",anchor:e.alignment,open:e.isDrawerOpen,classes:{paper:b.drawerPaper}},o.a.createElement("div",{className:b.drawerHeader},o.a.createElement(x.a,{onClick:e.closeDrawer},"left"===e.alignment?o.a.createElement(de.a,null):o.a.createElement(pe.a,null))),o.a.createElement(Y.a,null),o.a.createElement(Z.a,null,v.map((function(t){return o.a.createElement($.a,{button:!0,key:t.join(" "),onClick:function(){return e.select(t)}},o.a.createElement(_.a,null,t.join(", ")))})),o.a.createElement("div",{style:m.length>2?{}:{display:"none"}},o.a.createElement($.a,{button:!0,onClick:function(){h(!0)}},o.a.createElement(ee.a,null,o.a.createElement(se.a,null)),o.a.createElement(_.a,null,"add new filter"))))),o.a.createElement(te.a,{open:g,onClose:function(){h(!1),d([])},"aria-labelledby":"modal-label"},o.a.createElement(ae.a,{className:b.modal},o.a.createElement(ne.a,null,o.a.createElement("h2",{id:"modal-label"},"Select methods you wish to filter by"),o.a.createElement(re.a,null,m.map((function(e){return o.a.createElement(le.a,{control:o.a.createElement(oe.a,{value:e,key:e.toString(),onChange:E,checked:u.includes(e[0])}),label:e.join(" ")})}))),o.a.createElement(ce.a,{variant:"contained",onClick:function(e){if(h(!1),d([]),!ge(n,u))return r([].concat(Object(U.a)(n),[u]))}},"Submit")))))},be=Object(C.a)((function(e){return Object(D.a)({logsReact:{display:"flex",width:"100%",height:"100%"},extendDiv:{width:"25px"},hide:{display:"none"},menuButton:{paddingLeft:0,paddingRight:0,marginLeft:0,marginRight:0},content:{width:"100%",height:"auto",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},left:{marginLeft:-200},right:{marginRight:-200},contentShift:{width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0,marginRight:0}})})),ve=function(e){var t=Object(l.useState)(["all"]),a=Object(c.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)(void 0===e.sidebarOpen||e.sidebarOpen),s=Object(c.a)(i,2),u=s[0],d=s[1],m=void 0!==e.sidebarAlign?e.sidebarAlign:"left",p=void 0!==e.openRecentPayload&&e.openRecentPayload,f=be(),g=function(e){r(e)},b=function(){d(!0)},v=function(){d(!1)};return o.a.createElement("div",null,"left"===m?o.a.createElement("div",{className:f.logsReact},o.a.createElement("div",{className:Object(Q.a)(f.extendDiv,u&&f.hide)},o.a.createElement(x.a,{"aria-label":"open filters",onClick:b,className:f.menuButton},o.a.createElement(pe.a,null))),o.a.createElement(he,{logs:e.logs,alignment:m,active:n,select:g,isDrawerOpen:u,closeDrawer:v}),o.a.createElement("div",{className:Object(Q.a)(f.content,f.left,Object(h.a)({},f.contentShift,u))},o.a.createElement(K,{logs:e.logs,filter:n,openRecentPayload:p}))):o.a.createElement("div",{className:f.logsReact},o.a.createElement("div",{className:Object(Q.a)(f.content,f.right,Object(h.a)({},f.contentShift,u))},o.a.createElement(K,{logs:e.logs,filter:n,openRecentPayload:p})),o.a.createElement(he,{logs:e.logs,alignment:m,active:n,select:g,isDrawerOpen:u,closeDrawer:v}),o.a.createElement("div",{className:Object(Q.a)(f.extendDiv,u&&f.hide)},o.a.createElement(x.a,{"aria-label":"open filters",onClick:b,className:f.menuButton},o.a.createElement(de.a,null)))))},Ee=0,ye=function(e){try{var t=JSON.parse(e);if(t){if(t.length>0){var a,n=Object(V.a)(t);try{for(n.s();!(a=n.n()).done;){if(!("jsonrpc"in a.value))return!1}}catch(r){n.e(r)}finally{n.f()}return!0}return"jsonrpc"in t}return!1}catch(l){return!1}},Oe=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],r=function(e){var t,a=null===(t=e.request.postData)||void 0===t?void 0:t.text;e.getContent((function(t){if(e.request&&e.request.url&&a&&ye(a)&&ye(t)){var r=JSON.parse(a),l=[],o=[];if(r.length){var i,s=Object(V.a)(r);try{for(s.s();!(i=s.n()).done;){var u=Object(c.a)(i.value,1)[0];l.push({type:"request",method:u.method,timestamp:new Date(e.startedDateTime),payload:u,batchId:Ee})}}catch(v){s.e(v)}finally{s.f()}Ee+=1}else l.push({type:"request",method:r.method,timestamp:new Date(e.startedDateTime),payload:r});var d=new Date(e.startedDateTime),m=JSON.parse(t);if(d.setMilliseconds(d.getMilliseconds()+e.time),m.length){var p,f=Object(V.a)(m);try{for(f.s();!(p=f.n()).done;){var g=Object(c.a)(p.value,2),h=g[0],b=g[1];o.push({type:"response",method:r[h].method,timestamp:d,payload:b,batchId:Ee})}}catch(v){f.e(v)}finally{f.f()}Ee+=1}else o.push({type:"response",method:r.method,timestamp:d,payload:m});n((function(e){return[].concat(Object(U.a)(e),l,o)}))}}))};return Object(l.useEffect)((function(){return chrome&&chrome.webRequest&&chrome.devtools.network.onRequestFinished.addListener(r),function(){chrome.devtools.network.onRequestFinished.removeListener(r)}}),[]),[a]},je=function(){var e=Object(u.a)().value?g:f;chrome.devtools.panels.create("JSONRPCLogger","","index.html",(function(e){}));var t=Oe(),a=Object(c.a)(t,1)[0];return o.a.createElement(i.a,{theme:e},o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement(ve,{logs:a})))};r.a.render(o.a.createElement(je,null),document.getElementById("root"))}},[[335,2,3]]]);