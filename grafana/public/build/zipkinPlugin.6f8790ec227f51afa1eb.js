"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4023],{49353:(K,S,e)=>{e.d(S,{n:()=>T});var E=e(5819),t=e(76687),p=e(76022),g=e(24156),A=e(4693),I=e(14378);function T({options:v,onOptionsChange:h}){return t.createElement("div",{className:P.container},t.createElement("h3",{className:"page-heading"},"Node graph"),t.createElement(g.Z,{className:P.row},t.createElement(A._,{tooltip:"Displays the node graph above the trace view. Default: disabled",label:"Enable node graph",labelWidth:26},t.createElement(I.x,{id:"enableNodeGraph",value:v.jsonData.nodeGraph?.enabled,onChange:d=>(0,p.tp)({onOptionsChange:h,options:v},"nodeGraph",{...v.jsonData.nodeGraph,enabled:d.currentTarget.checked})}))))}const P={container:E.css`
    label: container;
    width: 100%;
  `,row:E.css`
    label: row;
    align-items: baseline;
  `}},36979:(K,S,e)=>{e.d(S,{F:()=>d});var E=e(5819),t=e(76687),p=e(76022),g=e(59798),A=e(52901),I=e(24156),T=e(4693),P=e(29480),v=e(38753),h=e(33670);function d({options:a,onOptionsChange:c}){const u=(0,A.wW)(r);return t.createElement("div",{className:(0,E.css)({width:"100%"})},t.createElement("h3",{className:"page-heading"},"Trace to metrics"),t.createElement("div",{className:u.infoText},"Navigate from a trace span to the selected data source's metrics."),t.createElement(I.Z,{className:u.row},t.createElement(T._,{tooltip:"The Prometheus data source the trace is going to navigate to",label:"Data source",labelWidth:26},t.createElement(g.q,{inputId:"trace-to-metrics-data-source-picker",pluginId:"prometheus",current:a.jsonData.tracesToMetrics?.datasourceUid,noDefault:!0,width:40,onChange:m=>(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,datasourceUid:m.uid})})),a.jsonData.tracesToMetrics?.datasourceUid?t.createElement(P.zx,{type:"button",variant:"secondary",size:"sm",fill:"text",onClick:()=>{(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,datasourceUid:void 0})}},"Clear"):null),t.createElement(I.Z,null,t.createElement(T._,{label:"Span start time shift",labelWidth:26,grow:!0,tooltip:"Shifts the start time of the span. Default: 0 (Time units can be used here, for example: 5s, -1m, 3h)"},t.createElement(v.I,{type:"text",placeholder:"0",width:40,onChange:m=>(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,spanStartTimeShift:m.currentTarget.value}),value:a.jsonData.tracesToMetrics?.spanStartTimeShift||""}))),t.createElement(I.Z,null,t.createElement(T._,{label:"Span end time shift",labelWidth:26,grow:!0,tooltip:"Shifts the end time of the span. Default: 0 (Time units can be used here, for example: 5s, -1m, 3h)"},t.createElement(v.I,{type:"text",placeholder:"0",width:40,onChange:m=>(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,spanEndTimeShift:m.currentTarget.value}),value:a.jsonData.tracesToMetrics?.spanEndTimeShift||""}))),t.createElement(I.Z,null,t.createElement(T._,{tooltip:"Tags that will be used in the metrics query",label:"Tags",labelWidth:26},t.createElement(h.a,{values:a.jsonData.tracesToMetrics?.tags??[],onChange:m=>(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,tags:m})}))),a.jsonData.tracesToMetrics?.queries?.map((m,y)=>t.createElement("div",{key:y,className:u.queryRow},t.createElement(T._,{label:"Link Label",labelWidth:26,tooltip:"Descriptive label for the linked query"},t.createElement(v.I,{label:"Link Label",type:"text",allowFullScreen:!0,value:m.name,width:40,onChange:L=>{let U=a.jsonData.tracesToMetrics?.queries.slice()??[];U[y].name=L.currentTarget.value,(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,queries:U})}})),t.createElement(T._,{label:"Query",labelWidth:10,tooltip:"The Prometheus query that will run when navigating from a trace to metrics. Interpolate tags using the `$__tags` keyword",grow:!0},t.createElement(v.I,{label:"Query",type:"text",allowFullScreen:!0,value:m.query,onChange:L=>{let U=a.jsonData.tracesToMetrics?.queries.slice()??[];U[y].query=L.currentTarget.value,(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,queries:U})}})),t.createElement(P.zx,{variant:"destructive",title:"Remove query",icon:"times",type:"button",onClick:()=>{let L=a.jsonData.tracesToMetrics?.queries.slice();L?.splice(y,1),(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,queries:L})}}))),t.createElement(P.zx,{variant:"secondary",title:"Add query",icon:"plus",type:"button",onClick:()=>{(0,p.tp)({onOptionsChange:c,options:a},"tracesToMetrics",{...a.jsonData.tracesToMetrics,queries:[...a.jsonData.tracesToMetrics?.queries??[],{query:""}]})}},"Add query"))}const r=a=>({infoText:E.css`
    padding-bottom: ${a.spacing(2)};
    color: ${a.colors.text.secondary};
  `,row:E.css`
    label: row;
    align-items: baseline;
  `,queryRow:E.css`
    display: flex;
  `})},6692:(K,S,e)=>{e.d(S,{et:()=>g,fy:()=>I,nO:()=>A,np:()=>P});var E=e(19078),t=e(85591),p=e(89674);function g(v){return v.sort((d,r)=>d[0]-r[0]),v.reduce((d,r)=>{if(!d.length)return[r];const a=d.slice(-1)[0],[c,u]=a,[m,y]=r;return y<u?d:m>u?[...d,r]:[...d.slice(0,-1),[c,y]]},[]).reduce((d,r)=>d+(r[1]-r[0]),0)}function A(v){const h={};let d;for(let r=0;d=v(r),!!d;r++){h[d.id]?h[d.id].span=d.span:h[d.id]={span:d.span,children:[]};for(const a of d.parentIds)a&&(h[a]?h[a].children.push(d.id):h[a]={span:void 0,children:[d.id]})}return h}function I(v,h,d){return{main:`${T(v)}ms (${T(v/h*100)}%)`,secondary:`${T(d)}ms (${T(d/v*100)}%)`}}function T(v){return parseFloat(v.toFixed(2))}function P(){const v=new E.v({fields:[{name:t.z.id,type:p.fS.string},{name:t.z.title,type:p.fS.string},{name:t.z.subTitle,type:p.fS.string},{name:t.z.mainStat,type:p.fS.string,config:{displayName:"Total time (% of trace)"}},{name:t.z.secondaryStat,type:p.fS.string,config:{displayName:"Self time (% of total)"}},{name:t.z.color,type:p.fS.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),h=new E.v({fields:[{name:t.z.id,type:p.fS.string},{name:t.z.target,type:p.fS.string},{name:t.z.source,type:p.fS.string}],meta:{preferredVisualisationType:"nodeGraph"}});return[v,h]}},18331:(K,S,e)=>{e.r(S),e.d(S,{plugin:()=>ge});var E=e(83761),t=e(76687),p=e(60379),g=e(42022),A=e(40640),I=e(49353),T=e(52866),P=e(36979),v=e(21027);const h=({options:s,onOptionsChange:n})=>t.createElement(t.Fragment,null,t.createElement(g.E,{defaultUrl:"http://localhost:9411",dataSourceConfig:s,showAccessOptions:!1,onChange:n}),p.v.featureToggles.secureSocksDatasourceProxy&&t.createElement(A.i,{options:s,onOptionsChange:n}),t.createElement("div",{className:"gf-form-group"},t.createElement(T.Z,{options:s,onOptionsChange:n})),p.v.featureToggles.traceToMetrics?t.createElement("div",{className:"gf-form-group"},t.createElement(P.F,{options:s,onOptionsChange:n})):null,t.createElement("div",{className:"gf-form-group"},t.createElement(I.n,{options:s,onOptionsChange:n})),t.createElement("div",{className:"gf-form-group"},t.createElement(v.SpanBarSettings,{options:s,onOptionsChange:n})));var d=e(5819),r=e(86832),a=e(41481),c=e(91641),u=e(1301),m=e(52901),y=e(24156),L=e(4693),U=e(20927),k=e(86814),J=e(6053),w=e(88600),G=e(39677),Q=e(30035),V=e(1245);const j="/api/v2",Y=s=>({tracesCascader:(0,d.css)({label:"tracesCascader",marginRight:s.spacing(1)})}),H=({query:s,onChange:n,onRunQuery:o,datasource:l})=>{const f=X(l),i=(0,m.l4)(),B=(0,m.wW)(Y),{onLoadOptions:N,allOptions:M}=q(l),O=(0,t.useCallback)((D,W)=>{if(W.length===3){const z=W[2].value;n({...s,query:z}),o()}},[n,o,s]),R=D=>{const W={...s,query:D};n(W)};let C=_(f,M);return t.createElement(t.Fragment,null,t.createElement(y.Z,null,t.createElement(L._,{label:"Query type"},t.createElement(U.S,{options:[{value:"traceID",label:"TraceID"},{value:"upload",label:"JSON File"}],value:s.queryType||"traceID",onChange:D=>n({...s,queryType:D}),size:"md"}))),s.queryType==="upload"?t.createElement("div",{className:(0,d.css)({padding:i.spacing(2)})},t.createElement(k.Yo,{options:{multiple:!1},onLoad:D=>{l.uploadedJson=D,o()}})):t.createElement(y.Z,null,t.createElement(J.O,{options:C,onChange:O,loadData:N,variant:"secondary",buttonProps:{className:B.tracesCascader}},"Traces"),t.createElement("div",{className:"gf-form gf-form--grow flex-shrink-1 min-width-15"},t.createElement(w.q,{query:s.query,onChange:R,onRunQuery:o,placeholder:"Insert Trace ID (run with Shift+Enter)",portalOrigin:"zipkin"}))))};function X(s){const n=`${j}/services`,[o,l]=(0,a.Z)(async()=>{try{const f=await s.metadataRequest(n);return f?f.sort().map(i=>({label:i,value:i,isLeaf:!1})):[]}catch(f){const i=f instanceof Error?f:"An unknown error occurred";throw(0,V.WI)((0,G.$l)((0,Q.t_)("Failed to load services from Zipkin",i))),f}},[s]);return(0,c.Z)(()=>{l()}),o}function q(s){const n=(0,u.Z)(),[o,l]=(0,t.useState)({}),[,f]=(0,a.Z)(async function(M){const O=`${j}/spans`;try{const R=await s.metadataRequest(O,{serviceName:M});n()&&l(C=>{const D=(0,r.fromPairs)(R.map(W=>[W,void 0]));return{...C,[M]:D}})}catch(R){const C=R instanceof Error?R:"An unknown error occurred";throw(0,V.WI)((0,G.$l)((0,Q.t_)("Failed to load spans from Zipkin",C))),R}},[s,o]),[,i]=(0,a.Z)(async function(M,O){const R=`${j}/traces`,C={serviceName:M,spanName:O};try{const D=await s.metadataRequest(R,C);if(n()){const W=D.length?(0,r.fromPairs)(D.map(z=>{const x=z.find(he=>!he.parentId);return[`${x.name} [${Math.floor(x.duration/1e3)} ms]`,x.traceId]})):ae;l(z=>{const x=z[M];return{...z,[M]:{...x,[O]:W}}})}}catch(D){const W=D instanceof Error?D:"An unknown error occurred";throw(0,V.WI)((0,G.$l)((0,Q.t_)("Failed to load spans from Zipkin",W))),D}},[s]);return{onLoadOptions:(0,t.useCallback)(N=>{const M=N[0].value;if(N.length===1)f(M);else if(N.length===2){const O=N[1].value;i(M,O)}},[f,i]),allOptions:o}}function _(s,n){return(0,t.useMemo)(()=>{let o=[];return s.value&&s.value.length?o=s.value.map(l=>({...l,children:n[l.value]&&Object.keys(n[l.value]).map(f=>({label:f,value:f,isLeaf:!1,children:n[l.value][f]&&Object.keys(n[l.value][f]).map(i=>({label:i,value:n[l.value][f][i]}))}))})):s.value&&!s.value.length&&(o=te),o},[s,n])}const ee="__NO_TRACES__",te=[{label:"No traces found",value:"no_traces",isLeaf:!0}],ae={"[No traces in time range]":ee};var Z=e(39792),re=e(89017),ne=e(45536),se=e(19078),oe=e(89674),le=e(34304),ie=e(59356),ce=e(60960),F=e(85591),$=e(6692);function de(s){const{nodes:n,edges:o}=ue(s),[l,f]=(0,$.np)();for(const i of n)l.add(i);for(const i of o)f.add(i);return[l,f]}function ue(s){const n=[],o=[],l=me(s),f=(0,$.nO)(i=>{if(!(i>=s.length))return{span:s[i],id:s[i].id,parentIds:s[i].parentId?[s[i].parentId]:[]}});for(const i of s){const B=f[i.id].children.map(R=>{const C=f[R].span;return[C.timestamp,C.timestamp+C.duration]}),N=(0,$.et)(B),M=i.duration-N,O=(0,$.fy)(i.duration/1e3,l/1e3,M/1e3);n.push({[F.z.id]:i.id,[F.z.title]:i.localEndpoint?.serviceName||i.remoteEndpoint?.serviceName||"unknown",[F.z.subTitle]:i.name,[F.z.mainStat]:O.main,[F.z.secondaryStat]:O.secondary,[F.z.color]:M/l}),i.parentId&&f[i.parentId].span&&o.push({[F.z.id]:i.parentId+"--"+i.id,[F.z.target]:i.id,[F.z.source]:i.parentId})}return{nodes:n,edges:o}}function me(s){let n=0,o=1/0;for(const l of s)l.timestamp<o&&(o=l.timestamp),l.timestamp+l.duration>n&&(n=l.timestamp+l.duration);return n-o}var fe=e(11740);class pe extends E.MF{constructor(n,o=(0,le.J)()){super(n),this.instanceSettings=n,this.templateSrv=o,this.uploadedJson=null,this.nodeGraph=n.jsonData.nodeGraph}query(n){const o=n.targets[0];if(o.queryType==="upload"){if(!this.uploadedJson)return(0,Z.of)({data:[]});try{const l=JSON.parse(this.uploadedJson);return(0,Z.of)(b({data:l},this.nodeGraph?.enabled))}catch{return(0,Z.of)({error:{message:"JSON is not valid Zipkin format"},data:[]})}}if(o.query){const l=this.applyVariables(o,n.scopedVars);return this.request(`${j}/trace/${encodeURIComponent(l.query)}`).pipe((0,ne.U)(f=>b(f,this.nodeGraph?.enabled)))}return(0,Z.of)(ve)}async metadataRequest(n,o){return(await(0,re.n)(this.request(n,o,{hideFromInspector:!0}))).data}async testDatasource(){return await this.metadataRequest(`${j}/services`),{status:"success",message:"Data source is working"}}getQueryDisplayText(n){return n.query}interpolateVariablesInQueries(n,o){return!n||n.length===0?[]:n.map(l=>({...l,datasource:this.getRef(),...this.applyVariables(l,o)}))}applyVariables(n,o){return{...{...n},query:this.templateSrv.replace(n.query??"",o)}}request(n,o,l){const f=o?(0,ce.tW)(o):"",i=`${this.instanceSettings.url}${n}${f.length?`?${f}`:""}`,B={...l,url:i};return(0,ie.i)().fetch(B)}}function b(s,n=!1){let o=s?.data?[(0,fe.m)(s?.data)]:[];return n&&o.push(...de(s?.data)),{data:o}}const ve={data:[new se.v({fields:[{name:"trace",type:oe.fS.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}})]},ge=new E.hf(pe).setQueryEditor(H).setConfigEditor(h)},11740:(K,S,e)=>{e.d(S,{H:()=>h,m:()=>A});var E=e(86832),t=e.n(E),p=e(19078),g=e(89674);function A(r){const a=r.map(I),c=new p.v({fields:[{name:"traceID",type:g.fS.string},{name:"spanID",type:g.fS.string},{name:"parentSpanID",type:g.fS.string},{name:"operationName",type:g.fS.string},{name:"serviceName",type:g.fS.string},{name:"serviceTags",type:g.fS.other},{name:"startTime",type:g.fS.number},{name:"duration",type:g.fS.number},{name:"logs",type:g.fS.other},{name:"tags",type:g.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}});for(const u of a)c.add(u);return c}function I(r){const a={traceID:r.traceId,spanID:r.id,parentSpanID:r.parentId,operationName:r.name,serviceName:r.localEndpoint?.serviceName||r.remoteEndpoint?.serviceName||"unknown",serviceTags:P(r),startTime:r.timestamp/1e3,duration:r.duration/1e3,logs:r.annotations?.map(T)??[],tags:Object.keys(r.tags||{}).reduce((c,u)=>u==="error"?(c.push({key:"error",value:!0}),c.push({key:"errorValue",value:r.tags.error}),c):(c.push({key:u,value:r.tags[u]}),c),[])};return r.kind&&(a.tags=[{key:"kind",value:r.kind},...a.tags??[]]),r.shared&&(a.tags=[{key:"shared",value:r.shared},...a.tags??[]]),a}function T(r){return{timestamp:r.timestamp,fields:[{key:"annotation",value:r.value}]}}function P(r){const a=r.localEndpoint||r.remoteEndpoint;return a?[v("ipv4",a.ipv4),v("ipv6",a.ipv6),v("port",a.port),v("endpointType",r.localEndpoint?"local":"remote")].filter(E.identity):[]}function v(r,a){if(a)return{key:r,value:a}}const h=r=>{let a=[];for(let c=0;c<r.length;c++){const u=r.get(c);a.push({traceId:u.traceID,parentId:u.parentSpanID,name:u.operationName,id:u.spanID,timestamp:u.startTime*1e3,duration:u.duration*1e3,...d(u),annotations:u.logs.length?u.logs.map(m=>({timestamp:m.timestamp,value:m.fields[0].value})):void 0,tags:u.tags.length?u.tags.filter(m=>m.key!=="kind"&&m.key!=="endpointType"&&m.key!=="shared").reduce((m,y)=>y.key==="error"?{...m,[y.key]:u.tags.find(L=>L.key==="errorValue").value||""}:{...m,[y.key]:y.value},{}):void 0,kind:u.tags.find(m=>m.key==="kind")?.value,shared:u.tags.find(m=>m.key==="shared")?.value})}return a},d=r=>{const a=r.serviceTags.find(c=>c.key==="endpointType")?.value==="local"?"localEndpoint":"remoteEndpoint";return r.serviceName!=="unknown"?{[a]:{serviceName:r.serviceName,ipv4:r.serviceTags.find(c=>c.key==="ipv4")?.value,ipv6:r.serviceTags.find(c=>c.key==="ipv6")?.value,port:r.serviceTags.find(c=>c.key==="port")?.value}}:void 0}},91641:(K,S,e)=>{e.d(S,{Z:()=>p});var E=e(53592),t=function(g){(0,E.Z)(function(){g()})};const p=t}}]);

//# sourceMappingURL=zipkinPlugin.6f8790ec227f51afa1eb.js.map