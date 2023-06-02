(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8595,5296],{55377:(Q,P,e)=>{"use strict";e.d(P,{l:()=>M});var t=e(76687),O=e(1249),f=e(83740),m=e(64222),y=e(2788);class M extends t.PureComponent{constructor(){super(...arguments),this.onRemoveQuery=n=>{this.props.onQueriesChange(this.props.queries.filter(r=>r!==n))},this.onDragStart=n=>{const{queries:r,dsSettings:s}=this.props;(0,f.ff)("query_row_reorder_started",{startIndex:n.source.index,numberOfQueries:r.length,datasourceType:s.type})},this.onDragEnd=n=>{const{queries:r,onQueriesChange:s,dsSettings:d}=this.props;if(!n||!n.destination)return;const a=n.source.index,i=n.destination.index;if(a===i){(0,f.ff)("query_row_reorder_canceled",{startIndex:a,endIndex:i,numberOfQueries:r.length,datasourceType:d.type});return}const c=Array.from(r),[g]=c.splice(a,1);c.splice(i,0,g),s(c),(0,f.ff)("query_row_reorder_ended",{startIndex:a,endIndex:i,numberOfQueries:r.length,datasourceType:d.type})}}onChangeQuery(n,r){const{queries:s,onQueriesChange:d}=this.props;d(s.map((a,i)=>i===r?n:a))}onDataSourceChange(n,r){const{queries:s,onQueriesChange:d}=this.props;d(s.map((a,i)=>{if(i!==r)return a;const c={type:n.type,uid:n.uid};return a.datasource&&(0,m.F)().getInstanceSettings(a.datasource)?.type===n.type?{...a,datasource:c}:{refId:a.refId,hide:a.hide,datasource:c}}))}render(){const{dsSettings:n,data:r,queries:s,app:d,history:a,eventBus:i,onAddQuery:c,onRunQueries:g,onQueryCopied:v,onQueryRemoved:C,onQueryToggled:T}=this.props;return t.createElement(O.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},t.createElement(O.bK,{droppableId:"transformations-list",direction:"vertical"},D=>t.createElement("div",{"data-testid":"query-editor-rows",ref:D.innerRef,...D.droppableProps},s.map((u,_)=>{const o=R(u,n),E=n.meta.mixed?h=>this.onDataSourceChange(h,_):void 0;return t.createElement(y.x,{id:u.refId,index:_,key:u.refId,data:r,query:u,dataSource:o,onChangeDataSource:E,onChange:h=>this.onChangeQuery(h,_),onRemoveQuery:this.onRemoveQuery,onAddQuery:c,onRunQuery:g,onQueryCopied:v,onQueryRemoved:C,onQueryToggled:T,queries:s,app:d,history:a,eventBus:i})}),D.placeholder)))}}const R=(p,n)=>p.datasource&&(0,m.F)().getInstanceSettings(p.datasource)||n},30102:(Q,P,e)=>{"use strict";e.r(P),e.d(P,{TestStuffPage:()=>v,default:()=>D,getDefaultState:()=>C});var t=e(76687),O=e(22462),f=e(19977),m=e(25821),y=e(17451),M=e(57891),R=e(35860),p=e(68127),n=e(37316),r=e(29480),s=e(78426),d=e(93882),a=e(30035),i=e(25381),c=e(80759),g=e(9700);const v=()=>{const[u,_]=(0,t.useState)(C()),{queryOptions:o,queryRunner:E}=u,h=()=>{const l={from:"now-1h",to:"now"};E.run({queries:o.queries,datasource:o.dataSource,timezone:"browser",timeRange:{from:m.parse(l.from),to:m.parse(l.to),raw:l},maxDataPoints:o.maxDataPoints??100,minInterval:o.minInterval})},B=l=>{_({...u,queryOptions:l})},L=(0,t.useMemo)(()=>E.getData({withFieldConfig:!0,withTransforms:!0}),[E]),I=(0,O.Z)(L),A={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"},S=(0,a.iG)();return t.createElement(s.T,{navModel:{node:A,main:A}},t.createElement(s.T.Contents,null,t.createElement(p.Lh,null,t.createElement(T,{extensionPointId:"grafana/sandbox/testing"})),I&&t.createElement(f.Z,{style:{width:"100%",height:"600px"}},({width:l})=>t.createElement("div",null,t.createElement(i.$,{title:"Hello",pluginId:"timeseries",width:l,height:300,data:I,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),t.createElement(n.i,{data:I.series[0],width:l,height:300}))),t.createElement("div",{style:{marginTop:"16px",height:"45%"}},t.createElement(c.D,{options:o,queryRunner:E,onRunQueries:h,onOptionsChange:B})),t.createElement("div",{style:{display:"flex",gap:"1em"}},t.createElement(r.zx,{onClick:()=>S.success("Success toast","some more text goes here"),variant:"primary"},"Success"),t.createElement(r.zx,{onClick:()=>S.warning("Warning toast","some more text goes here","bogus-trace-99999"),variant:"secondary"},"Warning"),t.createElement(r.zx,{onClick:()=>S.error("Error toast","some more text goes here","bogus-trace-fdsfdfsfds"),variant:"destructive"},"Error"))))};function C(){const u={fieldConfig:{defaults:{color:{mode:y.S.PaletteClassic}},overrides:[]},replaceVariables:o=>o,theme:d.vc.theme2},_={getTransformations:()=>[],getFieldOverrideOptions:()=>u,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new g.o(_),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100,savedQueryUid:null}}}function T({extensionPointId:u}){const{extensions:_}=(0,M.I)({extensionPointId:u});return _.length===0?null:t.createElement("div",null,_.map((o,E)=>(0,R.c)(o)?t.createElement(r.Qj,{href:o.path,title:o.description,key:o.id},o.title):null))}const D=v},4833:()=>{}}]);

//# sourceMappingURL=TestStuffPage.ab6b9cf1fe00f7871799.js.map