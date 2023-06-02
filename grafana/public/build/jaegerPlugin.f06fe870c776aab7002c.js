"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[890],{49353:(B,O,a)=>{a.d(O,{n:()=>h});var D=a(5819),n=a(76687),t=a(76022),P=a(24156),C=a(4693),M=a(14378);function h({options:o,onOptionsChange:c}){return n.createElement("div",{className:N.container},n.createElement("h3",{className:"page-heading"},"Node graph"),n.createElement(P.Z,{className:N.row},n.createElement(C._,{tooltip:"Displays the node graph above the trace view. Default: disabled",label:"Enable node graph",labelWidth:26},n.createElement(M.x,{id:"enableNodeGraph",value:o.jsonData.nodeGraph?.enabled,onChange:l=>(0,t.tp)({onOptionsChange:c,options:o},"nodeGraph",{...o.jsonData.nodeGraph,enabled:l.currentTarget.checked})}))))}const N={container:D.css`
    label: container;
    width: 100%;
  `,row:D.css`
    label: row;
    align-items: baseline;
  `}},36979:(B,O,a)=>{a.d(O,{F:()=>l});var D=a(5819),n=a(76687),t=a(76022),P=a(59798),C=a(52901),M=a(24156),h=a(4693),N=a(29480),o=a(38753),c=a(33670);function l({options:r,onOptionsChange:g}){const L=(0,C.wW)(d);return n.createElement("div",{className:(0,D.css)({width:"100%"})},n.createElement("h3",{className:"page-heading"},"Trace to metrics"),n.createElement("div",{className:L.infoText},"Navigate from a trace span to the selected data source's metrics."),n.createElement(M.Z,{className:L.row},n.createElement(h._,{tooltip:"The Prometheus data source the trace is going to navigate to",label:"Data source",labelWidth:26},n.createElement(P.q,{inputId:"trace-to-metrics-data-source-picker",pluginId:"prometheus",current:r.jsonData.tracesToMetrics?.datasourceUid,noDefault:!0,width:40,onChange:v=>(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,datasourceUid:v.uid})})),r.jsonData.tracesToMetrics?.datasourceUid?n.createElement(N.zx,{type:"button",variant:"secondary",size:"sm",fill:"text",onClick:()=>{(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,datasourceUid:void 0})}},"Clear"):null),n.createElement(M.Z,null,n.createElement(h._,{label:"Span start time shift",labelWidth:26,grow:!0,tooltip:"Shifts the start time of the span. Default: 0 (Time units can be used here, for example: 5s, -1m, 3h)"},n.createElement(o.I,{type:"text",placeholder:"0",width:40,onChange:v=>(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,spanStartTimeShift:v.currentTarget.value}),value:r.jsonData.tracesToMetrics?.spanStartTimeShift||""}))),n.createElement(M.Z,null,n.createElement(h._,{label:"Span end time shift",labelWidth:26,grow:!0,tooltip:"Shifts the end time of the span. Default: 0 (Time units can be used here, for example: 5s, -1m, 3h)"},n.createElement(o.I,{type:"text",placeholder:"0",width:40,onChange:v=>(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,spanEndTimeShift:v.currentTarget.value}),value:r.jsonData.tracesToMetrics?.spanEndTimeShift||""}))),n.createElement(M.Z,null,n.createElement(h._,{tooltip:"Tags that will be used in the metrics query",label:"Tags",labelWidth:26},n.createElement(c.a,{values:r.jsonData.tracesToMetrics?.tags??[],onChange:v=>(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,tags:v})}))),r.jsonData.tracesToMetrics?.queries?.map((v,S)=>n.createElement("div",{key:S,className:L.queryRow},n.createElement(h._,{label:"Link Label",labelWidth:26,tooltip:"Descriptive label for the linked query"},n.createElement(o.I,{label:"Link Label",type:"text",allowFullScreen:!0,value:v.name,width:40,onChange:W=>{let R=r.jsonData.tracesToMetrics?.queries.slice()??[];R[S].name=W.currentTarget.value,(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,queries:R})}})),n.createElement(h._,{label:"Query",labelWidth:10,tooltip:"The Prometheus query that will run when navigating from a trace to metrics. Interpolate tags using the `$__tags` keyword",grow:!0},n.createElement(o.I,{label:"Query",type:"text",allowFullScreen:!0,value:v.query,onChange:W=>{let R=r.jsonData.tracesToMetrics?.queries.slice()??[];R[S].query=W.currentTarget.value,(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,queries:R})}})),n.createElement(N.zx,{variant:"destructive",title:"Remove query",icon:"times",type:"button",onClick:()=>{let W=r.jsonData.tracesToMetrics?.queries.slice();W?.splice(S,1),(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,queries:W})}}))),n.createElement(N.zx,{variant:"secondary",title:"Add query",icon:"plus",type:"button",onClick:()=>{(0,t.tp)({onOptionsChange:g,options:r},"tracesToMetrics",{...r.jsonData.tracesToMetrics,queries:[...r.jsonData.tracesToMetrics?.queries??[],{query:""}]})}},"Add query"))}const d=r=>({infoText:D.css`
    padding-bottom: ${r.spacing(2)};
    color: ${r.colors.text.secondary};
  `,row:D.css`
    label: row;
    align-items: baseline;
  `,queryRow:D.css`
    display: flex;
  `})},6692:(B,O,a)=>{a.d(O,{et:()=>P,fy:()=>M,nO:()=>C,np:()=>N});var D=a(19078),n=a(85591),t=a(89674);function P(o){return o.sort((l,d)=>l[0]-d[0]),o.reduce((l,d)=>{if(!l.length)return[d];const r=l.slice(-1)[0],[g,L]=r,[v,S]=d;return S<L?l:v>L?[...l,d]:[...l.slice(0,-1),[g,S]]},[]).reduce((l,d)=>l+(d[1]-d[0]),0)}function C(o){const c={};let l;for(let d=0;l=o(d),!!l;d++){c[l.id]?c[l.id].span=l.span:c[l.id]={span:l.span,children:[]};for(const r of l.parentIds)r&&(c[r]?c[r].children.push(l.id):c[r]={span:void 0,children:[l.id]})}return c}function M(o,c,l){return{main:`${h(o)}ms (${h(o/c*100)}%)`,secondary:`${h(l)}ms (${h(l/o*100)}%)`}}function h(o){return parseFloat(o.toFixed(2))}function N(){const o=new D.v({fields:[{name:n.z.id,type:t.fS.string},{name:n.z.title,type:t.fS.string},{name:n.z.subTitle,type:t.fS.string},{name:n.z.mainStat,type:t.fS.string,config:{displayName:"Total time (% of trace)"}},{name:n.z.secondaryStat,type:t.fS.string,config:{displayName:"Self time (% of total)"}},{name:n.z.color,type:t.fS.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),c=new D.v({fields:[{name:n.z.id,type:t.fS.string},{name:n.z.target,type:t.fS.string},{name:n.z.source,type:t.fS.string}],meta:{preferredVisualisationType:"nodeGraph"}});return[o,c]}},10695:(B,O,a)=>{a.r(O),a.d(O,{plugin:()=>Se});var D=a(83761),n=a(5819),t=a(76687),P=a(52901);function C(){const i=(0,P.wW)(M);return t.createElement(t.Fragment,null,t.createElement("h2",{id:"jaeger-cheat-sheet"},"Jaeger Cheat Sheet"),t.createElement("p",null,"This cheat sheet provides a quick overview of the query types that are available. For more details about the Jaeger data source, check out"," ",t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/datasources/jaeger",target:"_blank",rel:"noreferrer",className:i.anchorTag},"the documentation"),"."),t.createElement("hr",null),t.createElement("ul",{className:i.unorderedList},t.createElement("li",null,"Search - filter traces by service name. Addtionally, you can filter by tags or min/max duration, as well as limit the number of traces that are returned."),t.createElement("li",null,"TraceID - if you have a trace ID, simply enter the trace ID to see the trace."),t.createElement("li",null,"JSON File - you can upload a JSON file that contains a single trace to visualize it. If the file has multiple traces then the first trace is used for visualization. An example of a valid JSON file can be found in"," ",t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/datasources/jaeger/#upload-json-trace-file",target:"_blank",rel:"noreferrer",className:i.anchorTag},"this section")," ","of the documentation.")))}const M=i=>({anchorTag:n.css`
    color: ${i.colors.text.link};
  `,unorderedList:n.css`
    list-style-type: none;
  `});var h=a(60379),N=a(42022),o=a(40640),c=a(49353),l=a(52866),d=a(36979),r=a(21027);const g=({options:i,onOptionsChange:e})=>t.createElement(t.Fragment,null,t.createElement(N.E,{defaultUrl:"http://localhost:16686",dataSourceConfig:i,showAccessOptions:!1,onChange:e}),h.v.featureToggles.secureSocksDatasourceProxy&&t.createElement(o.i,{options:i,onOptionsChange:e}),t.createElement("div",{className:"gf-form-group"},t.createElement(l.Z,{options:i,onOptionsChange:e})),h.v.featureToggles.traceToMetrics?t.createElement("div",{className:"gf-form-group"},t.createElement(d.F,{options:i,onOptionsChange:e})):null,t.createElement("div",{className:"gf-form-group"},t.createElement(c.n,{options:i,onOptionsChange:e})),t.createElement("div",{className:"gf-form-group"},t.createElement(r.SpanBarSettings,{options:i,onOptionsChange:e})));var L=a(86814),v=a(24156),S=a(4693),W=a(88600),R=a(20927),V=a(97124),j=a(34304),ee=a(11526),Z=a(74740),J=a(38753),te=a(39677),ae=a(30035),re=a(1245),ne=a(49036),w=a.n(ne);function se(i){if(!i)return"";const e=w().parse(i);return Object.keys(e).forEach(s=>{const m=e[s];typeof m!="string"&&(e[s]=String(m))}),JSON.stringify(e)}function oe(i){if(!i)return"";try{return w().stringify(JSON.parse(i))}catch{return i}}const H="e.g. 1.2s, 100ms, 500us",Y="All",ie={label:Y,value:void 0};function le({datasource:i,query:e,onChange:s}){const[m,p]=(0,t.useState)(),[u,E]=(0,t.useState)(),[T,U]=(0,t.useState)({services:!1,operations:!1}),x=(0,t.useCallback)(async(f,y,z="")=>{U(I=>({...I,[y]:!0}));try{const I=await i.metadataRequest(f);return I?I.sort().map(A=>({label:A,value:A})).filter(A=>A.value?(0,ee.C)(A.value,z).found:!1):[{label:`No ${y} found`,value:`No ${y} found`}]}catch(I){return I instanceof Error&&(0,re.WI)((0,te.$l)((0,ae.t_)("Error",I))),[]}finally{U(I=>({...I,[y]:!1}))}},[i]);return(0,t.useEffect)(()=>{(async()=>{const y=await x("/api/services","services");e.service&&(0,j.J)().containsTemplate(e.service)&&y.push((0,V.E)(e.service)),p(y)})()},[i,x,e.service]),(0,t.useEffect)(()=>{const f=async()=>{const y=await x(`/api/services/${encodeURIComponent((0,j.J)().replace(e.service))}/operations`,"operations");e.operation&&(0,j.J)().containsTemplate(e.operation)&&y.push((0,V.E)(e.operation)),E([ie,...y])};e.service&&f()},[i,e.service,x,e.operation]),t.createElement("div",{className:(0,n.css)({maxWidth:"500px"})},t.createElement(v.Z,null,t.createElement(S._,{label:"Service Name",labelWidth:14,grow:!0},t.createElement(Z.Ph,{inputId:"service",options:m,onOpenMenu:()=>x("/api/services","services"),isLoading:T.services,value:m?.find(f=>f?.value===e.service)||void 0,placeholder:"Select a service",onChange:f=>s({...e,service:f?.value,operation:e.service!==f?.value?void 0:e.operation}),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-service-name",allowCustomValue:!0}))),t.createElement(v.Z,null,t.createElement(S._,{label:"Operation Name",labelWidth:14,grow:!0,disabled:!e.service},t.createElement(Z.Ph,{inputId:"operation",options:u,onOpenMenu:()=>x(`/api/services/${encodeURIComponent((0,j.J)().replace(e.service))}/operations`,"operations"),isLoading:T.operations,value:u?.find(f=>f.value===e.operation)||null,placeholder:"Select an operation",onChange:f=>s({...e,operation:f?.value||void 0}),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-operation-name",allowCustomValue:!0}))),t.createElement(v.Z,null,t.createElement(S._,{label:"Tags",labelWidth:14,grow:!0,tooltip:"Values should be in logfmt."},t.createElement(J.I,{id:"tags",value:oe(e.tags),placeholder:"http.status_code=200 error=true",onChange:f=>s({...e,tags:f.currentTarget.value})}))),t.createElement(v.Z,null,t.createElement(S._,{label:"Min Duration",labelWidth:14,grow:!0},t.createElement(J.I,{id:"minDuration",name:"minDuration",value:e.minDuration||"",placeholder:H,onChange:f=>s({...e,minDuration:f.currentTarget.value})}))),t.createElement(v.Z,null,t.createElement(S._,{label:"Max Duration",labelWidth:14,grow:!0},t.createElement(J.I,{id:"maxDuration",name:"maxDuration",value:e.maxDuration||"",placeholder:H,onChange:f=>s({...e,maxDuration:f.currentTarget.value})}))),t.createElement(v.Z,null,t.createElement(S._,{label:"Limit",labelWidth:14,grow:!0,tooltip:"Maximum number of returned results"},t.createElement(J.I,{id:"limit",name:"limit",value:e.limit||"",type:"number",onChange:f=>s({...e,limit:f.currentTarget.value?parseInt(f.currentTarget.value,10):void 0})}))))}const ye=null;function ce({datasource:i,query:e,onChange:s,onRunQuery:m}){const p=(0,P.wW)(me),u=T=>{const U={...e,query:T};s(U)},E=()=>{switch(e.queryType){case"search":return t.createElement(le,{datasource:i,query:e,onChange:s});case"upload":return t.createElement("div",{className:p.fileDropzoneContainer},t.createElement(L.Yo,{options:{multiple:!1},onLoad:T=>{i.uploadedJson=T,m()}}));default:return t.createElement(v.Z,null,t.createElement(S._,{label:"Trace ID",labelWidth:14,grow:!0},t.createElement(W.q,{query:e.query,onChange:u,onRunQuery:m,onBlur:()=>{},placeholder:"Enter a Trace ID (run with Shift+Enter)",portalOrigin:"jaeger"})))}};return t.createElement(t.Fragment,null,t.createElement("div",{className:p.container},t.createElement(v.Z,null,t.createElement(S._,{label:"Query type"},t.createElement(R.S,{options:[{value:"search",label:"Search"},{value:void 0,label:"TraceID"},{value:"upload",label:"JSON File"}],value:e.queryType,onChange:T=>s({...e,queryType:T}),size:"md"}))),E()))}const me=i=>({container:n.css`
    width: 100%;
  `,fileDropzoneContainer:n.css`
    padding: ${i.spacing(2)};
  `});var $=a(86832),X=a(89017),b=a(39792),G=a(45536),ue=a(36708),de=a(25821),fe=a(19078),pe=a(89674),ge=a(59356),ve=a(60960),he=a(71808),F=a(85591),K=a(6692);function k(i){const{nodes:e,edges:s}=Ee(i),[m,p]=(0,K.np)();for(const u of e)m.add(u);for(const u of s)p.add(u);return[m,p]}function Ee(i){const e=[],s=[],m=Te(i.spans),p=(0,K.nO)(u=>{if(u>=i.spans.length)return;const E=i.spans[u];return{span:E,id:E.spanID,parentIds:E.references?.filter(T=>T.refType==="CHILD_OF").map(T=>T.spanID)||[]}});for(const u of i.spans){const E=i.processes[u.processID],T=p[u.spanID].children.map(z=>{const I=p[z].span;return[I.startTime,I.startTime+I.duration]}),U=(0,K.et)(T),x=u.duration-U,f=(0,K.fy)(u.duration/1e3,m/1e3,x/1e3);e.push({[F.z.id]:u.spanID,[F.z.title]:E?.serviceName??"",[F.z.subTitle]:u.operationName,[F.z.mainStat]:f.main,[F.z.secondaryStat]:f.secondary,[F.z.color]:x/m});const y=u.references?.find(z=>z.refType==="CHILD_OF")?.spanID;y&&p[y].span&&s.push({[F.z.id]:y+"--"+u.spanID,[F.z.target]:u.spanID,[F.z.source]:y})}return{nodes:e,edges:s}}function Te(i){let e=0,s=1/0;for(const m of i)m.startTime<s&&(s=m.startTime),m.startTime+m.duration>e&&(e=m.startTime+m.duration);return e-s}var Q=a(94986);class De extends D.MF{constructor(e,s=(0,he.$t)(),m=(0,j.J)()){super(e),this.instanceSettings=e,this.timeSrv=s,this.templateSrv=m,this.uploadedJson=null,this.nodeGraph=e.jsonData.nodeGraph}async metadataRequest(e,s){return(await(0,X.n)(this._request(e,s,{hideFromInspector:!0}))).data.data}isSearchFormValid(e){return!!e.service}query(e){const s=e.targets[0];if(!s)return(0,b.of)({data:[_]});if(s.queryType==="search"&&!this.isSearchFormValid(s))return(0,b.of)({error:{message:"You must select a service."},data:[]});if(s.queryType!=="search"&&s.query)return this._request(`/api/traces/${encodeURIComponent(this.templateSrv.replace(s.query,e.scopedVars))}`).pipe((0,G.U)(u=>{const E=u?.data?.data?.[0];if(!E)return{data:[_]};let T=[(0,Q.xM)(E)];return this.nodeGraph?.enabled&&T.push(...k(E)),{data:T}}));if(s.queryType==="upload"){if(!this.uploadedJson)return(0,b.of)({data:[]});try{const u=JSON.parse(this.uploadedJson).data[0];let E=[(0,Q.xM)(u)];return this.nodeGraph?.enabled&&E.push(...k(u)),(0,b.of)({data:E})}catch{return(0,b.of)({error:{message:"The JSON file uploaded is not in a valid Jaeger format"},data:[]})}}let m=(0,$.pick)(this.applyVariables(s,e.scopedVars),["service","operation","tags","minDuration","maxDuration","limit"]),p=(0,$.pickBy)(m,$.identity);return p.operation===Y&&(p=(0,$.omit)(p,"operation")),p.tags&&(p={...p,tags:se(p.tags.toString())}),this._request("/api/traces",{...p,...this.getTimeRange(),lookback:"custom"}).pipe((0,G.U)(u=>({data:[(0,Q.Wp)(u.data.data,this.instanceSettings)]})))}interpolateVariablesInQueries(e,s){return!e||e.length===0?[]:e.map(m=>({...m,datasource:this.getRef(),...this.applyVariables(m,s)}))}applyVariables(e,s){let m={...e};return e.tags&&this.templateSrv.containsTemplate(e.tags)&&(m={...e,tags:this.templateSrv.replace(e.tags,s)}),{...m,service:this.templateSrv.replace(e.service??"",s),operation:this.templateSrv.replace(e.operation??"",s),minDuration:this.templateSrv.replace(e.minDuration??"",s),maxDuration:this.templateSrv.replace(e.maxDuration??"",s)}}async testDatasource(){return(0,X.n)(this._request("/api/services").pipe((0,G.U)(e=>(e?.data?.data||[]).length>0?{status:"success",message:"Data source connected and services found."}:{status:"error",message:"Data source connected, but no services received. Verify that Jaeger is configured properly."}),(0,ue.K)(e=>{let s="Jaeger: ";return e.statusText?s+=e.statusText:s+="Cannot connect to Jaeger",e.status&&(s+=`. ${e.status}`),e.data&&e.data.message?s+=`. ${e.data.message}`:e.data&&(s+=`. ${JSON.stringify(e.data)}`),(0,b.of)({status:"error",message:s})})))}getTimeRange(){const e=this.timeSrv.timeRange();return{start:q(e.from,!1),end:q(e.to,!0)}}getQueryDisplayText(e){return e.query||""}_request(e,s,m){const p=s?(0,ve.tW)(s):"",u=`${this.instanceSettings.url}${e}${p.length?`?${p}`:""}`,E={...m,url:u};return(0,ge.i)().fetch(E)}}function q(i,e){return typeof i=="string"&&(i=de.parse(i,e)),i.valueOf()*1e3}const _=new fe.v({fields:[{name:"trace",type:pe.fS.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}}),Se=new D.hf(De).setConfigEditor(g).setQueryEditor(ce).setQueryEditorHelp(C)},94986:(B,O,a)=>{a.d(O,{Wp:()=>M,c6:()=>N,xM:()=>P});var D=a(19078),n=a(89674),t=a(21027);function P(o){const c=o.spans.map(d=>C(d,o.processes)),l=new D.v({fields:[{name:"traceID",type:n.fS.string},{name:"spanID",type:n.fS.string},{name:"parentSpanID",type:n.fS.string},{name:"operationName",type:n.fS.string},{name:"serviceName",type:n.fS.string},{name:"serviceTags",type:n.fS.other},{name:"startTime",type:n.fS.number},{name:"duration",type:n.fS.number},{name:"logs",type:n.fS.other},{name:"tags",type:n.fS.other},{name:"warnings",type:n.fS.other},{name:"stackTraces",type:n.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const d of c)l.add(d);return l}function C(o,c){return{spanID:o.spanID,traceID:o.traceID,parentSpanID:o.references?.find(l=>l.refType==="CHILD_OF")?.spanID,operationName:o.operationName,startTime:o.startTime/1e3,duration:o.duration/1e3,logs:o.logs.map(l=>({...l,timestamp:l.timestamp/1e3})),tags:o.tags,warnings:o.warnings??void 0,stackTraces:o.stackTraces,serviceName:c[o.processID].serviceName,serviceTags:c[o.processID].tags}}function M(o,c){const l=new D.v({fields:[{name:"traceID",type:n.fS.string,config:{unit:"string",displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:c.uid,datasourceName:c.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:n.fS.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:n.fS.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:n.fS.number,config:{displayNameFromDS:"Duration",unit:"\xB5s"}}],meta:{preferredVisualisationType:"table"}}),d=o.map(h).sort((r,g)=>g?.startTime-r?.startTime);for(const r of d)l.add(r);return l}function h(o){const c=(0,t.transformTraceData)(o);if(c)return{traceID:c.traceID,startTime:c.startTime/1e3,duration:c.duration,traceName:c.traceName}}function N(o){let c={traceID:"",spans:[],processes:{},warnings:null},l=[];for(let d=0;d<o.length;d++){const r=o.get(d);c.traceID||(c.traceID=r.traceID),l.find(g=>g===r.serviceName)||(l.push(r.serviceName),c.processes[`p${l.length}`]={serviceName:r.serviceName,tags:r.serviceTags}),c.spans.push({traceID:r.traceID,spanID:r.spanID,duration:r.duration*1e3,references:r.parentSpanID?[{refType:"CHILD_OF",spanID:r.parentSpanID,traceID:r.traceID}]:[],flags:0,logs:r.logs.map(g=>({...g,timestamp:g.timestamp*1e3})),operationName:r.operationName,processID:Object.keys(c.processes).find(g=>c.processes[g].serviceName===r.serviceName)||"",startTime:r.startTime*1e3,tags:r.tags,warnings:r.warnings?r.warnings:null})}return{data:[c],total:0,limit:0,offset:0,errors:null}}}}]);

//# sourceMappingURL=jaegerPlugin.f06fe870c776aab7002c.js.map