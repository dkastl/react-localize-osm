(this["webpackJsonpOpenStreetMap Localization"]=this["webpackJsonpOpenStreetMap Localization"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"name":"OpenStreetMap Localization","version":"0.1.20","private":true,"homepage":"/","dependencies":{"@fortawesome/fontawesome-free":"^5.15.2","@react-leaflet/core":">=1.0.0 <1.1.0 || ^1.1.1","@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^11.2.2","@testing-library/user-event":"^12.2.2","bootstrap":"^4.6.0","history":"^5.0.0","i18next":"^23.10.1","leaflet":"^1.7.1","leaflet.awesome-markers":"^2.0.5","osm-auth":"^2.4.0","react":"^17.0.2","react-bootstrap":"^1.4.3","react-dom":"^17.0.2","react-i18next":"^14.1.0","react-leaflet":"^3.2.5","react-scripts":"4.0.1","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts --openssl-legacy-provider start","build":"react-scripts --openssl-legacy-provider build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":[">0.2%","not dead","not op_mini all"],"devDependencies":{"@babel/plugin-proposal-private-property-in-object":"^7.21.11","@types/leaflet":"^1.5.19"}}')},34:function(e){e.exports=JSON.parse('{"Login":"Login","Logout":"Logout"}')},35:function(e){e.exports=JSON.parse('{"Login":"Anmelden","Logout":"Abmelden"}')},41:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(12),o=s.n(i),c=(s(41),s(33)),r=s(14),l=s(60),h=s(62),d=s(61),u=s(58);const g=e=>[e.lat,e.lng];function m(e){let{onLoad:t,onMove:s,onClick:a,center:n,zoom:i}=e;const o=Object(u.a)();let c=o.getCenter();return c.lat===n[0]&&c.lng===n[1]||o.flyTo(n,i),Object(u.b)({moveend:()=>{let e=o.getCenter();s({bbox:Object.values(o.getBounds()).map(g),center:g(e),zoom:o.getZoom()})},click:()=>{a()}}),t({bbox:Object.values(o.getBounds()).map(g)}),null}var p=s(59),b=s(11),j=s.n(b);s(42),s(43),s(44),s(45);const f=(e,t,s)=>j.a.AwesomeMarkers.icon({icon:e,prefix:"fa",markerColor:t,className:"awesome-marker awesome-marker-"+s}),y=e=>{let{type:t,shape:s,color:a="blue"}=e;return{icon:f(t,a,s),touched:f(t,"orange",s),focused:f(t,"red",s)}},x=y({type:"circle"}),O=[{cat:"tourism",tag:["hotel","hostel"],iconType:"hotel"},{cat:"place",tag:["city","town","neighborhood"],iconType:"city"},{cat:"place",tag:["village","hamlet"],iconType:"home"},{cat:"aeroway",iconType:"plane"},{cat:"shop",iconType:"store"},{cat:"historic",iconType:"monument"},{cat:"leisure",iconType:"futbol"},{cat:"tourism",iconType:"compass"},{cat:"highway",iconType:"road"},{cat:"building",iconType:"building"},{cat:"natural",iconType:"tree"},{cat:"waterway",iconType:"water"}].map((e=>({...e,...y({type:e.iconType})})));var k=(e,t,s)=>(O.find((t=>!t.tag&&e[t.cat]||e.tags[t.cat]&&-1!==e.tags[t.cat].indexOf(t.tag)))||x)[s?"focused":t?"touched":"icon"],C=s(1);function v(e){let{item:t,touched:s,focused:n,position:i,onClick:o}=e;const c=Object(a.useRef)(null),r=Object(a.useMemo)((()=>({click:o})),[o]);return Object(C.jsx)(p.a,{position:i,icon:k(t,s,n),eventHandlers:r,ref:c})}var w={tileUrl:"https://tile.tracestrack.com/auto-en/{z}/{x}/{y}.png?key=ad185d84befbbb5463e093c682930866",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',minZoom:3,maxZoom:19};const S=e=>{return[(t=e.center||e).lat,t.lon];var t};var L=function(e){let{center:t,zoom:s,items:a,touched:n,lang:i="en",focused:o,handlers:{onMove:c,onLoad:r,onClickItem:u,onClickMap:g}}=e,p=w.tileUrl;return w.addLang&&(p+="?lang="+i),Object(C.jsxs)(l.a,{center:t,zoom:s,scrollWheelZoom:!0,minZoom:w.minZoom,maxZoom:w.maxZoom,children:[Object(C.jsx)(h.a,{attribution:w.attribution,url:p,minZoom:w.minZoom,maxZoom:w.maxZoom}),Object(C.jsx)(m,{center:t,zoom:s,onMove:c,onLoad:r,onClick:g}),a.map((e=>Object(C.jsx)(v,{item:e,position:S(e),touched:-1!==n.indexOf(e.id),focused:o===e.id,onClick:()=>u(e.id)},e.id))),Object(C.jsx)(d.a,{})]})};function I(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Welcome"}),Object(C.jsxs)("p",{children:["OpenStreetMap Localization Tool (OsmLT) is started by Tracestrack.com. It greately faciliates localizing OpenStreetMap. It is open sourced on ",Object(C.jsx)("a",{href:"https://github.com/tracestrack/openstreetmap-localization-tool",children:"Github"}),"."]}),Object(C.jsx)("p",{children:"Login with your OpenStreetMap account and start editing today!"})]})}var T=s(6),M=s(8),z=s(17);function U(e){let{title:t,selected:s,onChange:n}=e;const[i,o]=Object(a.useState)(!1);Object(a.useEffect)((()=>{if(i){const e=document.addEventListener("click",(()=>{o(!1),document.removeEventListener("click",e)}))}}),[i]);return Object(C.jsxs)(M.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(M.a.Label,{children:t}),Object(C.jsx)(M.a.Control,{type:"tags",placeholder:"Enter language codes. Example: en, nl, zh",defaultValue:s,onChange:e=>{let t=e.target.value.split(",").map((e=>e.trim())).filter((e=>e.length>0));n(t)}}),Object(C.jsx)(M.a.Text,{className:"text-muted",children:"Use comma to separate languages. Example: en, nl, zh"})]})}var N=s(27);function _(e){let{title:t,onClick:s,loading:a,disabled:n,...i}=e;return Object(C.jsxs)(T.a,{disabled:n||a,onClick:s,...i,children:[t,a?Object(C.jsx)(N.a,{as:"span",animation:"border",size:"sm",className:"spinner-border ml-2"}):null]})}s(50);var A=function(e){let{filters:t,setFilter:s,tagsList:n,languages:i,languagesList:o,getItems:c,disabled:r,loading:l,updateItems:h,setLanguages:d}=e;const u=Object(a.useCallback)((e=>{13===e.charCode&&c()}),[c]),g=Object(a.useCallback)((e=>{let t=e.target.innerText;console.log(t),s(t,(()=>{c()}))}),[s,c]);return Object(C.jsxs)(M.a,{className:"item-filters",children:[Object(C.jsx)(U,{title:"Choose Languages",selected:i,onChange:d}),Object(C.jsxs)(M.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(C.jsx)(M.a.Label,{children:"Tag to search: "}),Object(C.jsx)(T.a,{variant:"outline-secondary",size:"sm",onClick:g,children:"place=city"}),Object(C.jsx)(T.a,{variant:"outline-secondary",size:"sm",onClick:g,children:"boundary"}),Object(C.jsx)(T.a,{variant:"outline-secondary",size:"sm",onClick:g,children:"leisure"}),Object(C.jsx)(T.a,{variant:"outline-secondary",size:"sm",onClick:g,children:"highway"}),Object(C.jsx)(T.a,{variant:"outline-secondary",size:"sm",onClick:g,children:"waterway"}),Object(C.jsx)(M.a.Control,{type:"text",value:t.tags,onChange:e=>s(e.target.value),onKeyPress:u})]}),Object(C.jsxs)(z.a,{className:"d-flex justify-content-end",children:[Object(C.jsx)(_,{title:"Get names",variant:"primary",onClick:c,loading:l.items}),Object(C.jsx)(_,{title:"Update names",variant:"success",disabled:r.updates,onClick:h,loading:l.updates})]})]})},F=s(28);function E(e){let{languages:t,onClick:s}=e;const a=["Category","Name",...t.map((e=>"name:".concat(e)))];return Object(C.jsx)("tr",{children:a.map((e=>Object(C.jsx)("th",{style:{cursor:"pointer"},onClick:()=>s(e.toLowerCase()),children:e},e)))})}var q=s(23);function P(e){let{item:t,category:s,languages:n,focused:i,handlers:{onFocus:o,onBlur:c,onChange:r,onIconClick:l}}=e;const h=Object(a.useRef)(null);return Object(a.useEffect)((()=>{i&&0!==document.activeElement.id.indexOf(t.id+"")&&h.current.focus()}),[i,t]),Object(C.jsxs)("tr",{children:[Object(C.jsxs)("td",{className:"category",children:[Object(C.jsx)(q.a,{variant:"info",children:s}),Object(C.jsx)("br",{}),Object(C.jsx)(q.a,{variant:"light",children:t.tags[s]})]}),Object(C.jsxs)("td",{children:[t.tags.wikidata&&Object(C.jsx)("span",{children:Object(C.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.wikidata.org/wiki/".concat(t.tags.wikidata),children:t.tags.name})}),!t.tags.wikidata&&Object(C.jsx)("span",{children:t.tags.name}),Object(C.jsx)("i",{className:"fa fa-crosshairs icon-btn mt-1",style:{float:"right"},onClick:()=>l(t)})]}),n.map(((e,s)=>Object(C.jsx)("td",{children:Object(C.jsx)("input",{type:"text",id:t.id+e,ref:s?null:h,value:t.tags["name:".concat(e)]||"",onChange:s=>r(t,e,s.target.value),onFocus:()=>i?null:o(t.id),onBlur:()=>i?c(t.id):null})},e)))]})}s(51);const B=(e,t,s)=>"category"===s?((e,t)=>e.category.localeCompare(t.caterory)||it.item.tags[e.category].localeCompare(t.item.tags[t.category]))(e,t):((e,t,s)=>(e.tags[s]||"").localeCompare(t.tags[s]||""))(e.item,t.item,s);var R=function(e){let{languages:t,handlers:s,items:n,focused:i,categories:o}=e;const[c,r]=Object(a.useState)("name"),[l,h]=Object(a.useState)(1);return Object(C.jsx)(a.Fragment,{children:Object(C.jsxs)(F.a,{size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsx)(E,{languages:t,onClick:e=>{e===c?h(-l):r(e)}})}),Object(C.jsx)("tbody",{children:n.filter((e=>e.tags.name)).map((e=>({item:e,category:o.find((t=>!!e.tags[t]))}))).sort(((e,t)=>l*B(e,t,c))).map((e=>{let{item:a,category:n}=e;return Object(C.jsx)(P,{category:n,languages:t,item:a,focused:i===a.id,handlers:s},a.id)}))})]})})},J=s(18),Z=(s(52),s(29)),D=s(31),G=s(16);function H(e){let{user:t,logout:s}=e;const{t:n}=Object(G.b)();return Object(C.jsxs)(a.Fragment,{children:[t.img?Object(C.jsx)(D.a,{src:t.img.href,className:"avatar",thumbnail:!0,rounded:!0}):null,Object(C.jsx)(J.a.Text,{className:"mx-2",children:t.display_name}),Object(C.jsx)(T.a,{onClick:s,children:n("Logout")})]})}function V(e){let{login:t,loading:s}=e;const{t:a}=Object(G.b)();return Object(C.jsx)(_,{title:a("Login"),loading:s,onClick:t})}var K=function(e){let{user:t,login:s,logout:a,loading:n}=e;return Object(C.jsxs)(J.a,{variant:"light",bg:"white",children:[Object(C.jsxs)(J.a.Brand,{className:"mr-auto",children:["OSM Localization Tool (OsmLT)   ",Object(C.jsxs)("span",{className:"version",children:["v",Z.version," by ",Object(C.jsx)("a",{href:"https://www.tracestrack.com/opensource/",children:"Tracestrack"})]})]}),t.loggedIn?Object(C.jsx)(H,{logout:a,user:t}):Object(C.jsx)(V,{login:s,loading:n})]})};function Q(e){let{changeset:t,handlers:{onUpdate:s,onClose:n}}=e;const[i,o]=Object(a.useState)((null===t||void 0===t?void 0:t.tags.comment)||"");return Object(a.useEffect)((()=>{o((null===t||void 0===t?void 0:t.tags.comment)||function(e){const t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}("lastComment")||"")}),[t]),Object(C.jsx)(r.a,{id:"changeset-box",className:"p-2",children:Object(C.jsxs)(r.a.Body,{children:[Object(C.jsxs)(z.a,{className:"pb-2 justify-content-center",children:[Object(C.jsx)(M.a.Label,{children:"Comment:"}),Object(C.jsx)(M.a.Control,{as:"textarea",value:i,onChange:e=>o(e.target.value)})]}),Object(C.jsx)(z.a,{className:"justify-content-center",children:Object(C.jsx)(T.a,{className:"m-1",onClick:()=>n({comment:i}),children:"Close changeset"})})]})})}s(53);var W=function(e){let{changeset:t,handlers:s}=e;const[n,i]=Object(a.useState)();return Object(a.useEffect)((()=>{t||i(!1)}),[t]),Object(C.jsxs)("div",{id:"changeset",children:[Object(C.jsx)(T.a,{id:"changeset-button",onClick:()=>i(!n),disabled:!t,children:t?"Active changeset: ".concat(t.id):"No active changeset"}),n?Object(C.jsx)(Q,{changeset:t,handlers:s}):null]})},Y=s(32);const X="qt body meta center";class ${constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.apiUrl=e.apiUrl||"https://overpass-api.de/api/interpreter"}request(e){const t=new FormData;t.append("data",e);const s=performance.now();return this.reqId=s,new Promise(((e,a)=>{fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},body:new URLSearchParams(t)}).then((t=>t.ok?t.json().then((t=>{let{elements:n,remark:i}=t;this.reqId!==s?a():(i&&-1!==i.indexOf("error")&&a(i),e(n))})):t.text().then(a))).catch((e=>a(e)))}))}query(e){let{bbox:t,zoom:s,center:a,filters:n,languages:i}=e;var o=n.tags;o.indexOf("=")>-1&&(o=o.replace("=",'"="'));const c=['nwr["'.concat(o,'"]["name"]')],r=n.hideFilled?c.map((e=>i.map((t=>"".concat(e,'[!"name:').concat(t,'"]'))).join(";\n"))):c.join(";\n"),l=n.limit?" "+n.limit:"",h="[out:json][timeout:25][bbox:".concat(t.join(","),"];\n            (\n                ").concat(r,";\n            );\n            out ").concat(X," ").concat(l,";");return this.request(h)}getById(e){const t=e.map((e=>{let[t,s]=e;return"".concat(t,"(").concat(s,")")})).join(";"),s="[out:json][timeout:25];\n        (\n            ".concat(t,";\n        );\n        out ").concat(X,";");return this.request(s)}}class ee{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.apiUrl=e.apiUrl||"https://nominatim.openstreetmap.org"}query(e){let{bbox:t,filters:s}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=[..."simple"===s.searchMode?["q="+s.search.q]:Object.entries(s.search).filter((e=>{let[t,s]=e;return"q"!==t&&!!s})).map((e=>{let[t,s]=e;return"".concat(t,"=").concat(s)})),"limit="+Math.min(s.limit,50),"format=json","bounded=1","dedupe=1"];a.length&&n.push("exclude_place_ids="+a.join(","));const i=performance.now();return this.reqId=i,new Promise(((e,t)=>{fetch(this.apiUrl+"/search?"+n.join("&")).then((s=>s.ok?s.json().then((s=>{s.error&&t(s),this.reqId!==i?t():e(s)})):s.text().then(t))).catch((e=>t(e)))}))}}const te="OSM Localization Tool (OsmLT): https://localize.osm.tracestrack.com";var se={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"};function ae(e){return Object.entries(e).map((e=>{let[t,s]=e,a=[],n="";Object.entries(s).forEach((e=>{let[t,s]=e;if(Array.isArray(s)){const e=t.replace(/s$/,"");n+=s.map((t=>ae({[e]:t}))).join("")}else"object"===typeof s?n+=ae({[t]:s}):a.push([t,(i=s,"string"!==typeof i?i:i.replace(/[<>&"']/g,(function(e){return se[e]})))]);var i}));const i=a.map((e=>{let[t,s]=e;return"".concat(t,'="').concat(s,'"')})).join(" ");return n?"<".concat(t," ").concat(i,">").concat(n,"</").concat(t,">"):"<".concat(t," ").concat(i,"/>")})).join("")}function ne(e){return ae({osm:{changeset:{tags:Object.entries(e.tags).map((e=>{let[t,s]=e;return{k:t,v:s}}))}}})}function ie(e,t){return ae({osmChange:{version:"0.6",generator:te,modify:Object.values(e).map((e=>{let{type:s,tags:a,nodes:n,members:i,...o}=e;return{[s]:{...o,changeset:t,tags:Object.entries(a).map((e=>{let[t,s]=e;return{k:t,v:s}})),...n?{nd:n.map((e=>({ref:e})))}:{},...i?{members:i}:{}}}}))}})}const oe=e=>e.map(((e,t)=>t%2?(e+180)%360-180:e%90));class ce{constructor(e){this.config=e,this.auth=Object(Y.a)({...e}),this.overpass=new $({apiUrl:e.overpassApiUrl}),this.nominatim=new ee,this.apiRoute="/api/0.6",this.currentChangeset=e.changeset||!1}fetch(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{method:s,body:a,headers:n={},...i}=t;return new Promise(((t,o)=>this.auth.xhr({method:s||"GET",path:this.apiRoute+e,content:a,options:{header:n,...i}},(function(e,s){e?o(e):t(s)}))))}fetchJson(e,t){return this.fetch(e,t).then((e=>JSON.parse(e)))}authenticated(){return this.auth.authenticated()}login(){return new Promise((e=>this.auth.authenticate((t=>{e(t)}))))}logout(){this.auth.logout()}getUser(){return this.fetchJson("/user/details.json")}getElements(e){return"search"===(e={...e,bbox:e.bbox.map(oe)}).filters.mode?this.nominatimIncSearch(e):this.overpass.query(e).then((e=>e))}nominatimIncSearch(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const s=e.filters.limit,a=t.map((e=>e.place_id));return this.nominatim.query(e,a).then((e=>(t=[...e,...t],t.length?(s&&e.length&&t.length,this.overpass.getById(t.map((e=>[e.osm_type,e.osm_id])))):[]))).catch((e=>{if(console.log(e),t.length)return this.overpass.getById(t.map((e=>[e.osm_type,e.osm_id])))}))}getTwins(e,t){return this.overpass.getTwins(e,t)}updateElements(e){return this.currentChangeset?this.checkChangesetOpen().then((t=>t?this.updateChangeset(e):this.createChangeset().then((()=>this.updateChangeset(e))))):this.createChangeset().then((()=>this.updateChangeset(e)))}getChangesets(){return this.fetch("/changesets")}getCurrentChangeset(){return this.checkChangesetOpen().then((e=>e?this._getCurrentChangeset():this.createChangeset().then((()=>this._getCurrentChangeset()))))}_getCurrentChangeset(){return this.fetchJson("/changeset/".concat(this.currentChangeset,".json")).then((e=>e.elements[0]))}createChangeset(){return this.fetch("/changeset/create",{method:"PUT",body:ae({osm:{changeset:[{tag:{k:"created_by",v:te}},{tag:{k:"comment",v:""}}]}}),headers:{"Content-Type":"text/plain"}}).then((e=>{this.currentChangeset=e}))}checkChangesetOpen(){return this.fetchJson("/changeset/".concat(this.currentChangeset,".json")).then((e=>{var t;return null===(t=e.elements)||void 0===t?void 0:t.pop().open}))}closeChangeset(e,t){this.fetch("/changeset/".concat(this.currentChangeset),{method:"PUT",body:ne(e),headers:{"Content-Type":"text/plain"}}).then((()=>{this.fetch("/changeset/".concat(this.currentChangeset,"/close"),{method:"PUT"}).then((()=>{this.currentChangeset=!1,t()}))}))}updateChangeset(e){return this.fetch("/changeset/".concat(this.currentChangeset,"/upload"),{method:"POST",body:ie(e,this.currentChangeset),headers:{"Content-Type":"text/plain"}}).then((e=>Object.fromEntries(Array.from(e.children[0].children).map((e=>[e.getAttribute("new_id"),{version:+e.getAttribute("new_version")}])))))}}class re{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:31536e3;this.cookieDuration=e}get(e){const t=document.cookie.split(";").find((t=>-1!==t.indexOf(e+"=")));return!!t&&t.replace(e+"=","").trim()}write(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.cookieDuration;const s=new Date(Date.now()+1e3*t).toUTCString();Object.entries(e).forEach((e=>{let[t,a]=e;document.cookie="".concat(t,"=").concat(a,"; path=/; expires=").concat(s)}))}clear(){document.cookie.split(";").forEach((e=>{const t=e.split("=")[0];document.cookie="".concat(t,"=; path=/")}))}}const le=(e,t)=>t.find((t=>!e.tags["name:".concat(t)]));class he{constructor(){this.updates={},this.storageKey="osm-localizer_updated-items"}load(){if(window.localStorage){const e=localStorage.getItem(this.storageKey);e&&(this.updates=JSON.parse(e))}}store(){window.localStorage&&localStorage.setItem(this.storageKey,JSON.stringify(this.updates))}patchAndStore(e,t){for(let s in t)e[s]&&(e[s]={...e[s],...t[s]},this.updates[s]=e[s]);this.store()}sync(e,t,s){const a=[];for(let n=0,i=e.length;n<i;n++){const i=e[n].id;this.updates[i]?this.updates[i].version>e[n].version?t&&!le(this.updates[i],s)||a.push(this.updates[i]):(delete this.updates[i],a.push(e[n])):a.push(e[n])}return this.store(),a}}s(54),s(55);var de={...{client_id:"M8nzCZPZGnlJoSrGAMbzsGXXZYtMPg_eyoyEjCyCydo",client_secret:"SdRMd2ReOVMO0VeWVdNuhY0hyYgbbLwMGAusMnO47Hs",url:"https://www.openstreetmap.org",redirect_uri:"https://localize.osm.tracestrack.com/land.html",apiUrl:"https://api.openstreetmap.org",scope:"openid write_api read_prefs"},overpassApiUrl:"https://overpass.kumi.systems/api/interpreter"};const ue=[{key:"de",title:"Deutsch"},{key:"en",title:"English"},{key:"fr",title:"Fran\xe7ais"},{key:"ja",title:"\u65e5\u672c\u8a9e"},{key:"ru",title:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{key:"zh-Hans",title:"\u7b80\u4f53\u4e2d\u6587"},{key:"zh-Hant",title:"\u7e41\u4f53\u4e2d\u6587"},{key:"zh",title:"\u4e2d\u6587"},{key:"ml",title:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},{key:"ta",title:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},{key:"kn",title:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},{key:"bn",title:"\u09ac\u09be\u0982\u09b2\u09be"},{key:"te",title:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},{key:"pa",title:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},{key:"hi",title:"\u0939\u093f\u0928\u094d\u0926\u0940"},{key:"it",title:"Italiano"},{key:"or",title:"\u0b13\u0b21\u0b3c\u0b3f\u0b06"}],ge=[{key:"amenity",title:"Amenity"},{key:"building",title:"Building"},{key:"highway",title:"Highway"},{key:"landuse",title:"Landuse"},{key:"leisure",title:"Leisure"},{key:"man_made",title:"Man-made"},{key:"natural",title:"Natural"},{key:"place",title:"Place"},{key:"public_transport",title:"Public transport"},{key:"railway",title:"Railway"},{key:"route",title:"Route"},{key:"tourism",title:"Tourism"},{key:"waterway",title:"Waterway"}],me="_osm-localization_languages",pe="_osm-locatization_changeset",be=e=>e.center?[e.center.lat,e.center.lon]:[e.lat,e.lon];class je extends a.Component{constructor(e){super(e),this.cookieManager=new re,this.osmApi=new ce({...de,changeset:this.cookieManager.get(pe)}),this.updatesStorage=new he,this.updatesStorage.load();const{zoom:t,center:s}=this.parseURLPath(),a=this.parseURLQuery();this.bbox=[],this.state={user:{loggedIn:!1},center:s,zoom:t,filters:a,items:[],itemsToUpdate:{},focusedItem:!1,watchFocus:!1,loading:{items:!1,updates:!1,auth:!1},serverMsg:{error:!1,text:""},changeset:null,lastReqTags:[]}}parseURLPath(){let e=6,t=[0,0];const s=window.location.hash.replace("#/","");if(s){const[a,n,i]=s.split("/");e=+a,t=[+n,+i]}return{zoom:e,center:t}}parseURLQuery(){const e={tags:["place"],limit:100,hideFilled:!1,search:{q:"",street:"",city:"",county:"",state:"",country:"",postalcode:""},searchMode:"simple",mode:"tags"},t=window.location.search.replace("?","");if(t){const a=Object.fromEntries(t.split("&").map((e=>e.split("="))));if(a.tags&&(e.tags=decodeURIComponent(a.tags)),a.search)try{const t=JSON.parse(decodeURI(a.search));for(let s in e.search)e.search[s]=t[s]||e.search[s],"q"!==s&&t[s]&&(e.searchMode="structured");a.tags||(e.mode="search")}catch(s){}if(a.limit){const t=parseInt(a.limit);isNaN(t)||(e.limit=t)}a.hide_filled&&(e.hideFilled=a.hide_filled&&0!==+a.hide_filled)}return e}loadChangeset(){this.osmApi.currentChangeset&&this.osmApi.getCurrentChangeset().then((e=>{console.log(e),this.setState({changeset:e})}))}closeChangeset(e){let{comment:t}=e,s={...this.state.changeset,tags:{...this.state.changeset.tags,comment:t}};""===s.tags.comment&&alert("Please add a commit message first."),console.log(s);let a=this;this.osmApi.closeChangeset(s,(()=>{a.cookieManager.write({lastComment:t}),window.location.reload()}))}updateLocation(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{zoom:t,center:[s,a],filters:{tags:n,limit:i,hideFilled:o,search:c,mode:r,searchMode:l}}=this.state,h=["/#",t,s.toFixed(4),a.toFixed(4)].join("/"),d=[];if("search"===r){const{q:e,...t}=c,s="simple"===l?{q:e}:t;d.push("search=".concat(JSON.stringify(s)))}else d.push("tags=".concat(encodeURIComponent(n))),o&&d.push("hide_filled=1");i&&d.push("limit=".concat(i));const u="?"+d.join("&");let g=window.location.protocol+"//"+window.location.host+window.location.pathname+u+h;e?window.history.replaceState({searchQ:u,hash:h},"",g):window.history.pushState({searchQ:u,hash:h},"",g)}componentDidMount(){this.osmApi.authenticated()&&this.getUser()}setServerMsg(e){console.log(e),this.setState({serverMsg:e});const t=()=>{document.removeEventListener("click",t),this.setState({serverMsg:{error:!1,text:""}})};document.addEventListener("click",t)}login(){this.setState({loading:{...this.state.loading,auth:!0}}),this.osmApi.login().then((()=>{this.getUser()}))}getLanguages(){const e=this.cookieManager.get(me);return!!e&&e.split("+")}setLanguages(e){this.setState({user:{...this.state.user,languages:e}}),this.storeLanguages(e)}storeLanguages(e){this.cookieManager.write({[me]:e.join("+")})}getUser(){this.osmApi.getUser().then((e=>{let t=this.getLanguages()||e.user.languages.filter((e=>ue.find((t=>{let{key:s}=t;return s===e}))));this.setState({loading:{...this.state.loading,auth:!1},user:{loggedIn:!0,...e.user,languages:t}}),this.storeLanguages(t),this.loadChangeset()}))}logout(){this.osmApi.logout(),this.setState({user:{loggedIn:!1}})}getItems(){this.setState({loading:{...this.state.loading,items:!0}}),this.osmApi.getElements({center:this.state.center,zoom:this.state.zoom,bbox:this.bbox,filters:this.state.filters,languages:this.state.user.languages}).then((e=>{this.setState({items:this.updatesStorage.sync(e,this.state.filters.hideFilled,this.state.user.languages),itemsToUpdate:{},loading:{...this.state.loading,items:!1},lastReqTags:"search"===this.state.filters.mode?ge.map((e=>e.key)):this.state.filters.tags.slice()})})).catch((e=>{console.log(e),this.setState({loading:{...this.state.loading,items:!1}}),this.setServerMsg({text:e,error:!0})}))}updatePosition(e){let{bbox:t,center:s,zoom:a}=e;this.setState({center:s,zoom:a},(()=>this.updateLocation(!0))),this.bbox=t}updateBbox(e){let{bbox:t}=e;this.bbox=t}updateItem(e,t,s){e.tags["name:".concat(t)]=s,this.setState({itemsToUpdate:{...this.state.itemsToUpdate,[e.id]:e}})}setFilter(e,t){console.log(e),this.setState({filters:{...this.state.filters,tags:e}},(()=>{this.updateLocation(),t&&t()}))}updateItems(){this.setState({loading:{...this.state.loading,updates:!0}});let e=this.state.itemsToUpdate;console.log(e),this.osmApi.updateElements(e).then((e=>{this.updatesStorage.patchAndStore(this.state.itemsToUpdate,e),this.cookieManager.write({[pe]:this.osmApi.currentChangeset}),this.setServerMsg({text:"Items are successfully updated.",error:!1}),this.setState({itemsToUpdate:{},loading:{...this.state.loading,updates:!1}}),this.loadChangeset()})).catch((e=>{this.setServerMsg({text:String.toString(e),error:!0}),this.setState({loading:{...this.state.loading,updates:!1}})}))}focusItem(e){if(this.state.watchFocus){const t=this.state.items.find((t=>t.id===e));this.setState({center:be(t),focusedItem:e})}else this.setState({focusedItem:e})}blurItem(){this.setState({focusedItem:!1})}centerItem(e){this.setState({center:be(e),zoom:Math.max(this.state.zoom,14)})}render(){const e={items:this.state.loading.updates||("tags"===this.state.filters.mode?this.state.zoom<10:!("simple"===this.state.filters.searchMode?this.state.filters.search.q:Object.entries(this.state.filters.search).find((e=>{let[t,s]=e;return"q"!==t&&!!s})))),updates:!Object.keys(this.state.itemsToUpdate).length},t=Object.keys(this.state.itemsToUpdate).map((e=>+e)),s={onLoad:this.updateBbox.bind(this),onMove:this.updatePosition.bind(this),onClickItem:this.focusItem.bind(this),onClickMap:this.blurItem.bind(this)},n={onFocus:this.focusItem.bind(this),onBlur:this.blurItem.bind(this),onChange:this.updateItem.bind(this),onIconClick:this.centerItem.bind(this)},i={onClose:this.closeChangeset.bind(this)},o=this.state.user.languages?this.state.user.languages[0]:"en",l=ge.map((e=>e.key));return Object(C.jsxs)(c.a,{className:"App",fluid:!0,children:[Object(C.jsx)(K,{login:this.login.bind(this),logout:this.logout.bind(this),user:this.state.user,loading:this.state.loading.auth}),Object(C.jsx)(L,{zoom:this.state.zoom,center:this.state.center,items:this.state.items,lang:o,touched:t,focused:this.state.focusedItem,watchFocus:this.state.watchFocus,handlers:s}),Object(C.jsx)(r.a,{className:"card-items card p-1",children:this.state.user.loggedIn?Object(C.jsxs)(a.Fragment,{children:[Object(C.jsxs)(r.a.Header,{children:[Object(C.jsx)(A,{filters:this.state.filters,setFilter:this.setFilter.bind(this),tagsList:ge,loading:this.state.loading,languages:this.state.user.languages||[],languagesList:ue,setLanguages:this.setLanguages.bind(this),items:this.state.items,getItems:this.getItems.bind(this),disabled:e,updateItems:this.updateItems.bind(this)}),Object(C.jsx)("div",{className:this.state.serverMsg.error?"text-danger":"text-success",children:this.state.serverMsg.text})]}),Object(C.jsx)(r.a.Body,{className:this.state.loading.items?"items-loading":"",children:Object(C.jsx)(R,{categories:l,languages:this.state.user.languages||[],items:this.state.items,focused:this.state.focusedItem,handlers:n})})]}):Object(C.jsx)(r.a.Body,{className:"d-flex align-items-center justify-content-center",children:Object(C.jsx)(I,{})})}),Object(C.jsx)(W,{changeset:this.state.changeset,handlers:i})]})}}var fe=je;var ye=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((t=>{let{getCLS:s,getFID:a,getFCP:n,getLCP:i,getTTFB:o}=t;s(e),a(e),n(e),i(e),o(e)}))},xe=s(24),Oe=s(34),ke=s(35);xe.a.use(G.a).init({resources:{en:{translation:Oe},de:{translation:ke}},lng:"en",interpolation:{escapeValue:!1}});xe.a;o.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(fe,{})}),document.getElementById("root")),ye()}},[[56,1,2]]]);
//# sourceMappingURL=main.66515244.chunk.js.map