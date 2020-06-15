(this["webpackJsonp@open-rpc/logs-react"]=this["webpackJsonp@open-rpc/logs-react"]||[]).push([[1],{498:function(e,t,a){e.exports=a(709)},505:function(e,t,a){},658:function(e,t,a){},702:function(e,t,a){},703:function(e,t,a){},704:function(e,t,a){},709:function(e,t,a){"use strict";a.r(t);var n=a(143),r=a.n(n),l=a(4),o=a.n(l),c=a(207),i=a(733),u=a(744),s=a(753),m=a(488),d=a(747),f=a(319),p=a(316),b=a(411),v=a.n(b),E=Object(p.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"}}}),g=Object(p.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},palette:{type:"dark",background:{default:v.a[900],paper:v.a[800]}},overrides:{MuiAppBar:{root:{background:"transparent !important"}},MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:v.a[50]}}}}),h=(a(505),a(748)),O=a(755),y=a(735),j=a(736),k=a(737),S=a(756),N=a(738),C=a(373),w=a(740),M=a(477),x=a.n(M),J=a(479),q=a.n(J),D=a(481),T=a.n(D),B=(a(658),a(751)),L=function(e){return o.a.createElement(B.a,Object.assign({elevation:6,variant:"filled"},e))},P=a(478),A=a.n(P),R=o.a.memo((function(e){var t,a=Object(f.a)(),n=((t=e.log).method.includes("rpc.")?"call rpc-call":"response"===t.type?t.payload.error?"call response-error":"call response-success":"call request")+" ".concat(a.value?"dark":""),r=Object(l.useState)(!1),i=Object(c.a)(r,2),u=i[0],d=i[1];return o.a.createElement(h.a,{m:2,key:JSON.stringify(e.log),className:["call-box","".concat("response"===e.log.type?"response":""),"".concat(e.filter.includes(e.log.method)||e.filter.includes("all")?"":"hidden")].join(" ")},o.a.createElement(O.a,{open:u,autoHideDuration:4e3,onClose:function(){d(!1)}},o.a.createElement(L,{severity:"success"},"Payload Copied to Clipboard")),o.a.createElement(y.a,{raised:!0,className:n,style:{color:"white"}},o.a.createElement(j.a,{title:e.log.type+" - "+e.log.method,subheader:e.log.timestamp.toISOString()}),o.a.createElement(k.a,null,o.a.createElement(S.a,{TransitionProps:{mountOnEnter:!0,unmountOnExit:!0}},o.a.createElement(N.a,{expandIcon:o.a.createElement(q.a,null)},o.a.createElement(C.a,null,"Payload"),o.a.createElement(s.a,{title:"Copy to clipboard"},o.a.createElement(m.a,{style:{padding:"4px"},onClick:function(t){return function(e,t){e.stopPropagation(),d(!0),A()(JSON.stringify(t,null,4))}(t,e.log.payload)}},o.a.createElement(T.a,{style:{fontSize:14}})))),o.a.createElement(w.a,null,o.a.createElement(x.a,{width:"350",height:"350",language:"json",value:JSON.stringify(e.log.payload,null,4),editorDidMount:function(e,t){},editorOptions:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",fixedOverflowWidgets:!0,readOnly:!0}}))))))})),F=a(482),I=a.n(F),z=function(e){return o.a.createElement("div",{style:{width:"100%"}},e.logs.map((function(t){return o.a.createElement(R,{log:t,filter:e.filter})})))},H=function(e){return o.a.createElement(I.a,null,o.a.createElement(z,{logs:e.logs,filter:e.filter}))},W=a(276),G=a(453),K=(a(702),function(e){var t=Object(f.a)(),a=e.filter.join(", ");return o.a.createElement("div",{key:a,onClick:function(){return e.select(e.filter)},className:["method-list-item","".concat(t.value?"dark":"light"),"".concat(e.active?"active":"")].join(" ")},o.a.createElement("div",{className:"method-info"},o.a.createElement("h1",{className:"method-title"},a)))}),Q=a(741),U=a(749),V=a(487),X=a(754),Y=a(742),Z=a(743),$=a(752),_=(a(703),function(e,t){var a,n=Object(G.a)(e);try{var r=function(){var e=a.value;if(t.length===e.length&&t.every((function(t){return e.includes(t)})))return{v:!0}};for(n.s();!(a=n.n()).done;){var l=r();if("object"===typeof l)return l.v}}catch(o){n.e(o)}finally{n.f()}return!1}),ee=function(e){var t=Object(l.useState)([]),a=Object(c.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)([]),u=Object(c.a)(i,2),s=u[0],m=u[1],d=function(e){var t,a=[],n=Object(G.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;_(a,[r.method])||a.push([r.method])}}catch(l){n.e(l)}finally{n.f()}return a}(e.logs),f=Object(l.useState)(!1),p=Object(c.a)(f,2),b=p[0],v=p[1],E=[["all"]].concat(Object(W.a)(d),Object(W.a)(n)),g=function(e,t){if(t)return m((function(t){return[].concat(Object(W.a)(t),[e.target.value])}));var a=Object(W.a)(s),n=a.indexOf(e.target.value);return n>-1?(a.splice(n,1),m(Object(W.a)(a))):void 0};return o.a.createElement("div",{className:"method-list"},E.map((function(t){return o.a.createElement(K,{key:t.join(" "),filter:t,active:_([t],e.active),select:e.select})})),o.a.createElement(Q.a,{variant:"contained",onClick:function(){v(!0)},disabled:!(d.length>2)},"add new filter"),o.a.createElement(U.a,{open:b,onClose:function(){v(!1),m([])},"aria-labelledby":"modal-label"},o.a.createElement(V.a,{className:"modal"},o.a.createElement(X.a,null,o.a.createElement("h2",{id:"modal-label"},"Select methods you wish to filter by"),o.a.createElement(Y.a,null,d.map((function(e){return o.a.createElement(Z.a,{control:o.a.createElement($.a,{value:e,key:e.toString(),onChange:g,checked:s.includes(e[0])}),label:e.join(" ")})}))),o.a.createElement(Q.a,{variant:"contained",onClick:function(e){if(v(!1),m([]),!_(n,s))return r([].concat(Object(W.a)(n),[s]))}},"Submit")))))},te=a(758),ae=a(745),ne=a(746),re=(a(704),function(e){var t=Object(l.useState)(["all"]),a=Object(c.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)(!0),s=Object(c.a)(i,2),m=s[0],d=s[1],f=Object(l.useState)(!1),p=Object(c.a)(f,2),b=p[0],v=p[1];return o.a.createElement("div",{className:["logs-react","".concat(b?"full-screen":"")].join(" ")},o.a.createElement(te.a,Object.assign({direction:"right",in:m,mountOnEnter:!0,unmountOnExit:!1},m?{timeout:400}:{}),o.a.createElement("div",{className:"scrollable sidebar"},o.a.createElement(ee,{logs:e.logs,active:n,select:function(e){r(e)}}))),o.a.createElement("div",{className:"content"},o.a.createElement(H,{logs:e.logs,filter:n})),o.a.createElement(u.a,{position:"fixed",style:{top:"auto",bottom:0}},o.a.createElement(ae.a,null,o.a.createElement(Z.a,{control:o.a.createElement(ne.a,{onChange:function(){d((function(e){return!e})),m?setTimeout((function(){return v((function(e){return!e}))}),400):v((function(e){return!e}))},checked:m}),label:"Show Filters"}))))}),le=function(e){try{return"jsonrpc"in JSON.parse(e)}catch(t){return!1}},oe=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],r=function(e){var t,a=null===(t=e.request.postData)||void 0===t?void 0:t.text;e.getContent((function(t){if(e.request&&e.request.url&&a&&le(a)&&le(t)){var r=JSON.parse(a),l={type:"request",method:r.method,timestamp:new Date(e.startedDateTime),payload:r},o=new Date(e.startedDateTime);o.setMilliseconds(o.getMilliseconds()+e.time);var c={type:"response",method:r.method,timestamp:o,payload:JSON.parse(t)};n((function(e){return[].concat(Object(W.a)(e),[l,c])}))}}))};return Object(l.useEffect)((function(){return chrome&&chrome.webRequest&&chrome.devtools.network.onRequestFinished.addListener(r),function(){chrome.devtools.network.onRequestFinished.removeListener(r)}}),[]),[a]},ce=a(483),ie=a.n(ce),ue=a(484),se=a.n(ue),me=function(){var e=Object(f.a)(),t=e.value?g:E;chrome.devtools.panels.create("JSONRPCLogger","","index.html",(function(e){}));var a=oe(),n=Object(c.a)(a,1)[0];return o.a.createElement(i.a,{theme:t},o.a.createElement(u.a,{position:"sticky",color:"default",elevation:0},o.a.createElement(s.a,{title:"Toggle Dark Mode"},o.a.createElement(m.a,{onClick:e.toggle},e.value?o.a.createElement(ie.a,null):o.a.createElement(se.a,null)))),o.a.createElement("div",null,o.a.createElement(d.a,null),o.a.createElement(re,{logs:n})))};r.a.render(o.a.createElement(me,null),document.getElementById("root"))}},[[498,2,3]]]);