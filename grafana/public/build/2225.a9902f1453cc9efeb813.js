"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2225],{89895:(C,N,t)=>{t.d(N,{P:()=>n});var e=t(76687),h=t(56350),L=t(74740),o=t(87597);const n=v=>{const I=D(v),c=l(I,v);return e.createElement(h.EditorField,{label:"Group by function","data-testid":"cloud-monitoring-aggregation"},e.createElement(L.Ph,{width:"auto",onChange:({value:T})=>v.onChange(T),value:c,options:[{label:"Template Variables",options:v.templateVariableOptions},{label:"Aggregations",expanded:!0,options:I}],placeholder:"Select Reducer",inputId:`${v.refId}-group-by-function`,menuPlacement:"top"}))},D=({metricDescriptor:v})=>{const I=v?.valueType,c=v?.metricKind;return(0,e.useMemo)(()=>!I||!c?[]:(0,o.A_)(I,c).map(T=>({...T,label:T.text})),[I,c])},l=(v,I)=>(0,e.useMemo)(()=>[...v,...I.templateVariableOptions].find(T=>T.value===I.crossSeriesReducer),[v,I.crossSeriesReducer,I.templateVariableOptions])},43341:(C,N,t)=>{t.d(N,{B:()=>D});var e=t(86832),h=t.n(e),L=t(76687),o=t(56350),n=t(38753);const D=({refId:l,value:v="",onChange:I})=>{const[c,T]=(0,L.useState)(v??""),A=(0,e.debounce)(I,1e3);return I=p=>{T(p.target.value),A(p.target.value)},L.createElement(o.EditorField,{label:"Alias by"},L.createElement(n.I,{id:`${l}-alias-by`,value:c,onChange:I}))}},27391:(C,N,t)=>{t.d(N,{v:()=>l});var e=t(76687),h=t(56350),L=t(40567),o=t(87597),n=t(35135),D=t(45856);const l=({refId:v,templateVariableOptions:I,onChange:c,query:T,customMetaData:A,datasource:p,metricDescriptor:U,preprocessor:M})=>{const u=(0,e.useMemo)(()=>(0,o.kU)(A,p),[A,p]);return e.createElement(h.EditorFieldGroup,null,e.createElement(h.EditorField,{label:"Alignment function",tooltip:"The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result."},e.createElement(n.X,{inputId:`${v}-alignment-function`,templateVariableOptions:I,query:T,onChange:a=>c({...T,...a}),metricDescriptor:U,preprocessor:M})),e.createElement(h.EditorField,{label:"Alignment period",tooltip:u},e.createElement(D.$,{inputId:`${v}-alignment-period`,templateVariableOptions:I,current:T.alignmentPeriod,onChange:a=>c({...T,alignmentPeriod:a}),aligmentPeriods:L.dD})))}},35135:(C,N,t)=>{t.d(N,{X:()=>o});var e=t(76687),h=t(74740),L=t(87597);const o=({inputId:n,query:D,templateVariableOptions:l,onChange:v,metricDescriptor:I,preprocessor:c})=>{const{perSeriesAligner:T}=D;let{valueType:A,metricKind:p}=I||{};const{perSeriesAligner:U,alignOptions:M}=(0,e.useMemo)(()=>(0,L.ID)(A,p,T,c),[A,p,T,c]);return e.createElement(h.Ph,{onChange:({value:u})=>v({...D,perSeriesAligner:u}),value:[...M,...l].find(u=>u.value===U),options:[{label:"Template Variables",options:l},{label:"Alignment options",expanded:!0,options:M}],placeholder:"Select Alignment",inputId:n,menuPlacement:"top"})}},12803:(C,N,t)=>{t.d(N,{X:()=>l});var e=t(76687),h=t(56350),L=t(74740),o=t(40567),n=t(87597),D=t(89895);const l=({refId:v,labels:I=[],query:c,onChange:T,variableOptionGroup:A,metricDescriptor:p})=>{const U=(0,e.useMemo)(()=>[A,...(0,n.gY)([...I,...o.$e])],[I,A]);return e.createElement(h.EditorFieldGroup,null,e.createElement(h.EditorField,{label:"Group by",tooltip:"You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series."},e.createElement(L.NU,{inputId:`${v}-group-by`,width:"auto",placeholder:"Choose label",options:U,value:c.groupBys??[],onChange:M=>{T({...c,groupBys:M.map(u=>u.value)})},menuPlacement:"top"})),e.createElement(D.P,{metricDescriptor:p,templateVariableOptions:A.options,crossSeriesReducer:c.crossSeriesReducer,groupBys:c.groupBys??[],onChange:M=>T({...c,crossSeriesReducer:M}),refId:v}))}},23333:(C,N,t)=>{t.d(N,{p:()=>A});var e=t(76687),h=t(97124),L=t(56350),o=t(68127),n=t(74740),D=t(87597);const l="=",v="AND",I=p=>p.flatMap(({key:U,operator:M,value:u,condition:a})=>[U,M,u,a]).slice(0,-1),c=["=","!=","=~","!=~"].map(h.E),T=["metric.type"],A=({labels:p={},filters:U,onChange:M,variableOptionGroup:u})=>{const a=(0,D.mi)(U),_=a.filter(({key:s})=>!T.includes(s)),E=a.filter(({key:s})=>T.includes(s)),i=(0,e.useMemo)(()=>[u,...(0,D.gY)(Object.keys(p))],[p,u]),r=({key:s="",value:d=""})=>{i.some(f=>f.options?i.some(K=>K.label===s):f.label===s)||i.push({label:s,value:s});const R=p.hasOwnProperty(s)?[u,...p[s].map(h.E)]:[u];return R.some(f=>f.label===d)||R.push({label:d,value:d}),{options:i,valueOptions:R}},m=s=>{const d=s.concat(E).map(({key:G,operator:R,value:$,condition:f})=>({key:G||"",operator:R||l,value:$||"",condition:f||v}));M(I(d))},O=(s,d,G)=>{const{key:R="",operator:$=l,value:f="",condition:K=v}=s,{options:y,valueOptions:X}=r(s);return e.createElement(o.Lh,{spacing:"xs",width:"auto"},e.createElement(n.Ph,{"aria-label":"Filter label key",formatCreateLabel:B=>`Use label key: ${B}`,allowCustomValue:!0,value:R,options:y,onChange:({value:B=""})=>d({key:B,operator:$,value:f,condition:K})}),e.createElement(n.Ph,{value:$,options:c,onChange:({value:B=l})=>d({key:R,operator:B,value:f,condition:K})}),e.createElement(n.Ph,{"aria-label":"Filter label value",placeholder:"add filter value",formatCreateLabel:B=>`Use label value: ${B}`,allowCustomValue:!0,value:f,options:X,onChange:({value:B=""})=>d({key:R,operator:$,value:B,condition:K})}),e.createElement(L.AccessoryButton,{"aria-label":"Remove",icon:"times",variant:"secondary",onClick:G,type:"button"}))};return e.createElement(L.EditorRow,null,e.createElement(L.EditorField,{label:"Filter",tooltip:"To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression."},e.createElement(L.EditorList,{items:_,renderItem:O,onChange:m})))}},41236:(C,N,t)=>{t.d(N,{a:()=>L});var e=t(76687),h=t(62889);function L({query:o,onChange:n,onRunQuery:D}){const l=v=>{v.key==="Enter"&&(v.shiftKey||v.ctrlKey)&&(v.preventDefault(),D())};return e.createElement(e.Fragment,null,e.createElement(h.K,{name:"Query",className:"slate-query-field",value:o,rows:10,placeholder:"Enter a Cloud Monitoring MQL query (Run with Shift+Enter)",onBlur:D,onChange:v=>n(v.currentTarget.value),onKeyDown:l}))}},41614:(C,N,t)=>{t.d(N,{a1:()=>M,mO:()=>A});var e=t(76687),h=t(56350),L=t(80807),o=t(68127),n=t(14378),D=t(40567),l=t(18342);const v=({refId:u,onChange:a,graphPeriod:_,variableOptionGroup:E})=>e.createElement(h.EditorRow,null,e.createElement(h.EditorField,{label:"Graph period",htmlFor:`${u}-graph-period`,tooltip:e.createElement(e.Fragment,null,"Set ",e.createElement("code",null,"graph_period")," which forces a preferred period between points. Automatically set to the current interval if left blank.")},e.createElement(o.Lh,null,e.createElement(n.r,{"data-testid":`${u}-switch-graph-period`,value:_!=="disabled",onChange:i=>a(i.currentTarget.checked?"":"disabled")}),e.createElement(l.$d,{inputId:`${u}-graph-period`,templateVariableOptions:E.options,current:_,onChange:a,disabled:_==="disabled",aligmentPeriods:D.Ry}))));var I=t(41236),c=t(75231),T=t(32033);const A=u=>({projectName:u.getDefaultProject(),crossSeriesReducer:"REDUCE_NONE",alignmentPeriod:"cloud-monitoring-auto",perSeriesAligner:L.CS.ALIGN_MEAN,groupBys:[],filters:[]}),p=u=>({projectName:u.getDefaultProject(),query:""});function U({refId:u,query:a,datasource:_,onChange:E,onRunQuery:i,customMetaData:r,variableOptionGroup:m}){const O=(0,e.useCallback)(d=>{E({...a,timeSeriesList:d}),i()},[E,i,a]),s=(0,e.useCallback)(d=>{E({...a,timeSeriesQuery:d}),i()},[E,i,a]);return(0,e.useEffect)(()=>{a.queryType===L.xL.TIME_SERIES_LIST&&!a.timeSeriesList&&O(A(_)),a.queryType===L.xL.TIME_SERIES_QUERY&&!a.timeSeriesQuery&&s(p(_))},[O,s,a.queryType,a.timeSeriesList,a.timeSeriesQuery,_]),e.createElement(h.EditorRows,null,[L.xL.TIME_SERIES_LIST,L.xL.ANNOTATION].includes(a.queryType)&&a.timeSeriesList&&e.createElement(T.s,{refId:u,variableOptionGroup:m,customMetaData:r,onChange:O,datasource:_,query:a.timeSeriesList,aliasBy:a.aliasBy,onChangeAliasBy:d=>E({...a,aliasBy:d})}),a.queryType===L.xL.TIME_SERIES_QUERY&&a.timeSeriesQuery&&e.createElement(e.Fragment,null,e.createElement(c.I,{refId:u,datasource:_,onChange:d=>s({...a.timeSeriesQuery,projectName:d}),templateVariableOptions:m.options,projectName:a.timeSeriesQuery.projectName}),e.createElement(I.a,{onChange:d=>s({...a.timeSeriesQuery,query:d}),onRunQuery:i,query:a.timeSeriesQuery.query}),e.createElement(v,{onChange:d=>s({...a.timeSeriesQuery,graphPeriod:d}),graphPeriod:a.timeSeriesQuery.graphPeriod,refId:u,variableOptionGroup:m})))}const M=e.memo(U)},45856:(C,N,t)=>{t.d(N,{$:()=>L});var e=t(76687),h=t(74740);function L({inputId:o,templateVariableOptions:n,onChange:D,current:l,disabled:v,aligmentPeriods:I}){const c=(0,e.useMemo)(()=>I.map(A=>({...A,label:A.text})),[I]),T=(0,e.useMemo)(()=>c.filter(A=>!A.hidden),[c]);return e.createElement(h.Ph,{width:"auto",onChange:({value:A})=>D(A),value:[...c,...n].find(A=>A.value===l),options:[{label:"Template Variables",options:n},{label:"Aggregations",expanded:!0,options:T}],placeholder:"Select Period",inputId:o,disabled:v,allowCustomValue:!0,menuPlacement:"top"})}},16567:(C,N,t)=>{t.d(N,{A:()=>l});var e=t(76687),h=t(56350),L=t(20927),o=t(87597),n=t(80807);const D={label:"None",value:n.mG.None},l=({query:I,metricDescriptor:c,onChange:T})=>{const A=v(c);return e.createElement(h.EditorField,{label:"Pre-processing",tooltip:"Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metric's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series"},e.createElement(L.S,{onChange:p=>{const{perSeriesAligner:U}=I,{valueType:M,metricKind:u}=c??{},{perSeriesAligner:a}=(0,o.ID)(M,u,U,p);T({...I,preprocessor:p,perSeriesAligner:a})},value:I.preprocessor??n.mG.None,options:A}))},v=I=>{const c=I?.metricKind,T=I?.valueType;return(0,e.useMemo)(()=>{if(!c||c===n.lH.GAUGE||T===n.$h.DISTRIBUTION)return[D];const A=[D,{label:"Rate",value:n.mG.Rate,description:"Data points are aligned and converted to a rate per time series"}];return c===n.lH.CUMULATIVE?[...A,{label:"Delta",value:n.mG.Delta,description:"Data points are aligned by their delta (difference) per time series"}]:A},[c,T])}},75231:(C,N,t)=>{t.d(N,{I:()=>o});var e=t(76687),h=t(56350),L=t(74740);function o({refId:n,projectName:D,datasource:l,onChange:v,templateVariableOptions:I}){const[c,T]=(0,e.useState)([]);(0,e.useEffect)(()=>{l.getProjects().then(p=>T(p))},[l]);const A=(0,e.useMemo)(()=>[{label:"Template Variables",options:I},...c],[c,I]);return e.createElement(h.EditorField,{label:"Project"},e.createElement(L.Ph,{width:"auto",allowCustomValue:!0,formatCreateLabel:p=>`Use project: ${p}`,onChange:({value:p})=>v(p),options:A,value:{value:D,label:D},placeholder:"Select Project",inputId:`${n}-project`}))}},72225:(C,N,t)=>{t.d(N,{W:()=>I});var e=t(76687),h=t(97124),L=t(56350),o=t(80807),n=t(40567);const D=c=>{const{query:T,onChange:A,onRunQuery:p}=c,{queryType:U}=T;return e.createElement(L.EditorHeader,null,e.createElement(L.InlineSelect,{label:"Query type",options:n.XI,value:U,onChange:({value:M})=>{A({...T,queryType:M}),p()}}),e.createElement(L.FlexItem,{grow:1}))};var l=t(96306),v=t(18342);const I=c=>{const{datasource:T,query:A,onRunQuery:p,onChange:U}=c,[M,u]=(0,e.useState)(!1),a=(0,e.useMemo)(()=>{if(!M){u(!0);const s=T.migrateQuery(A);return U({...s}),s}return A},[A,T,U,M]),_={...(0,l.w)(T),...a.sloQuery},E=s=>{U({...a,sloQuery:s}),p()},r=(c.data?.series.length?c.data?.series[0].meta:{})?.custom??{},m={label:"Template Variables",expanded:!1,options:T.getVariables().map(h.E)};(0,e.useEffect)(()=>{Object.values(o.xL).includes(a.queryType)||U({...a,queryType:o.xL.TIME_SERIES_LIST})});const O=a.queryType;return e.createElement(L.EditorRows,null,e.createElement(D,{query:a,onChange:U,onRunQuery:p}),O!==o.xL.SLO&&e.createElement(v.a1,{refId:a.refId,variableOptionGroup:m,customMetaData:r,onChange:U,onRunQuery:p,datasource:T,query:a}),O===o.xL.SLO&&e.createElement(v.D6,{refId:a.refId,variableOptionGroup:m,customMetaData:r,onChange:E,onRunQuery:p,datasource:T,query:_,aliasBy:a.aliasBy,onChangeAliasBy:s=>U({...a,aliasBy:s})}))}},96306:(C,N,t)=>{t.d(N,{D:()=>M,w:()=>U});var e=t(76687),h=t(56350),L=t(40567),o=t(87597),n=t(80807),D=t(43341),l=t(74740);const v=({refId:u,current:a,templateVariableOptions:_,onChange:E})=>{const i=L.yy.map(m=>({...m,label:m.text}));a&&!i.find(m=>m.value===a)&&i.push({label:a,text:a,value:a,hidden:!1});const r=i.filter(m=>!m.hidden);return e.createElement(h.EditorField,{label:"Lookback period",htmlFor:`${u}-lookback-period`},e.createElement(l.Ph,{inputId:`${u}-lookback-period`,width:"auto",allowCustomValue:!0,value:[...i,..._].find(m=>m.value===a),options:[{label:"Template Variables",options:_},{label:"Predefined periods",expanded:!0,options:r}],onChange:({value:m})=>E(m)}))};var I=t(45856),c=t(75231);const T=({refId:u,query:a,templateVariableOptions:_,onChange:E,datasource:i})=>{const[r,m]=(0,e.useState)([]),{projectName:O,serviceId:s}=a;return(0,e.useEffect)(()=>{!O||!s||i.getServiceLevelObjectives(O,s).then(d=>{m([{label:"Template Variables",options:_},...d])})},[i,O,s,_]),e.createElement(h.EditorField,{label:"SLO"},e.createElement(l.Ph,{inputId:`${u}-slo`,width:"auto",allowCustomValue:!0,value:a?.sloId&&{value:a?.sloId,label:a?.sloName||a?.sloId},placeholder:"Select SLO",options:r,onChange:async({value:d="",label:G=""})=>{const $=(await i.getServiceLevelObjectives(O,s)).find(({value:f})=>f===i.templateSrv.replace(d));E({...a,sloId:d,sloName:G,goal:$?.goal})}}))},A=({refId:u,query:a,templateVariableOptions:_,onChange:E,datasource:i})=>e.createElement(h.EditorField,{label:"Selector",htmlFor:`${u}-slo-selector`},e.createElement(l.Ph,{inputId:`${u}-slo-selector`,width:"auto",allowCustomValue:!0,value:[...L.IR,..._].find(r=>r.value===a?.selectorName),options:[{label:"Template Variables",options:_},...L.IR],onChange:({value:r})=>E({...a,selectorName:r??""})})),p=({refId:u,query:a,templateVariableOptions:_,onChange:E,datasource:i})=>{const[r,m]=(0,e.useState)([]),{projectName:O}=a;return(0,e.useEffect)(()=>{O&&i.getSLOServices(O).then(s=>{m([{label:"Template Variables",options:_},...s])})},[i,O,_]),e.createElement(h.EditorField,{label:"Service"},e.createElement(l.Ph,{inputId:`${u}-slo-service`,width:"auto",allowCustomValue:!0,value:a?.serviceId&&{value:a?.serviceId,label:a?.serviceName||a?.serviceId},placeholder:"Select service",options:r,onChange:({value:s="",label:d=""})=>E({...a,serviceId:s,serviceName:d,sloId:""})}))},U=u=>({projectName:u.getDefaultProject(),alignmentPeriod:"cloud-monitoring-auto",perSeriesAligner:n.CS.ALIGN_MEAN,aliasBy:"",selectorName:"select_slo_health",serviceId:"",serviceName:"",sloId:"",sloName:"",lookbackPeriod:""});function M({refId:u,query:a,datasource:_,onChange:E,variableOptionGroup:i,customMetaData:r,aliasBy:m,onChangeAliasBy:O}){const s=(0,e.useMemo)(()=>(0,o.kU)(r,_),[r,_]);return e.createElement(e.Fragment,null,e.createElement(h.EditorRow,null,e.createElement(c.I,{refId:u,templateVariableOptions:i.options,projectName:a.projectName,datasource:_,onChange:d=>E({...a,projectName:d})}),e.createElement(p,{refId:u,datasource:_,templateVariableOptions:i.options,query:a,onChange:E}),e.createElement(T,{refId:u,datasource:_,templateVariableOptions:i.options,query:a,onChange:E}),e.createElement(A,{refId:u,datasource:_,templateVariableOptions:i.options,query:a,onChange:E}),a.selectorName===L.Fh&&e.createElement(v,{refId:u,onChange:d=>E({...a,lookbackPeriod:d}),current:a.lookbackPeriod,templateVariableOptions:i.options}),e.createElement(h.EditorFieldGroup,null,e.createElement(h.EditorField,{label:"Alignment period",tooltip:s},e.createElement(I.$,{inputId:`${u}-alignment-period`,templateVariableOptions:i.options,current:a.alignmentPeriod,onChange:d=>E({...a,alignmentPeriod:d}),aligmentPeriods:L.dD}))),e.createElement(D.B,{refId:u,value:m,onChange:O})))}},32033:(C,N,t)=>{t.d(N,{s:()=>i});var e=t(5819),h=t(86832),L=t.n(h),o=t(76687),n=t(56350),D=t(52901),l=t(97879),v=t(74740),I=t(87597),c=t(80807),T=t(43341),A=t(27391),p=t(12803),U=t(23333),M=t(41614),u=t(16567),a=t(75231);function _({refId:r,onChange:m,datasource:O,query:s,variableOptionGroup:d,customMetaData:G,aliasBy:R,onChangeAliasBy:$}){const[f,K]=(0,o.useState)({}),[y,X]=(0,o.useState)([]),[B,k]=(0,o.useState)(),[q,z]=(0,o.useState)([]),[ee,ne]=(0,o.useState)([]),[se,J]=(0,o.useState)(""),[b,oe]=(0,o.useState)({...O.timeSrv.timeRange()});(P=>{b!==null&&(b.raw.from.toString()!==P.raw.from.toString()||b.raw.to.toString()!==P.raw.to.toString())&&oe({...P})})(O.timeSrv.timeRange());const re=(0,D.l4)(),Z=(0,l.D)(re),w=(0,D.wW)(E),{projectName:H,groupBys:te,crossSeriesReducer:le}=s,x=(0,I.WH)(s),{templateSrv:V}=O,j=(0,o.useCallback)((P,S)=>P.find(g=>g.type===V.replace(S)),[V]);(0,o.useEffect)(()=>{H&&x&&O.getLabels(x,r,H,{groupBys:te,crossSeriesReducer:le},b).then(P=>K(P))},[O,te,x,H,r,le,b]),(0,o.useEffect)(()=>{(async()=>{if(H){const S=await O.getMetricTypes(H),g=Ee(S);X(S),ne(g)}})()},[O,H,w,Z.optionDescription]),(0,o.useEffect)(()=>{const S=(F=>{const Q=j(F,x);return Q?F.filter(W=>W.service===Q.service).map(W=>({service:W.service,value:W.type,label:W.displayName,component:function(){return o.createElement("div",null,o.createElement("div",{className:w},W.type),o.createElement("div",{className:Z.optionDescription},W.description))}})):[]})(y),g=S.length>0?S[0].service:"",Y=j(y,x);k(Y),z(S),J(g)},[y,j,x,w,Z.optionDescription]);const ie=({value:P})=>{const S=y.filter(g=>g.service===V.replace(P)).map(g=>({service:g.service,value:g.type,label:g.displayName,description:g.description}));s.filters=[],S.length>0&&!S.some(g=>g.value===V.replace(x))?(ae(S[0]),J(P),z(S)):(J(P),z(S))},Ee=P=>{const S=P.map(g=>({value:g.service,label:(0,h.startCase)(g.serviceShortName)}));return S.length>0?(0,h.uniqBy)(S,g=>g.value):[]},ae=({value:P})=>{const S=j(y,P);k(S);const{metricKind:g,valueType:Y}=S,F=g===c.lH.GAUGE||Y===c.$h.DISTRIBUTION?c.mG.None:c.mG.Rate,{perSeriesAligner:Q}=(0,I.ID)(Y,g,s.perSeriesAligner,F);Object.assign(s,{...(0,M.mO)(O),projectName:s.projectName,filters:s.filters}),m({...(0,I.Av)({...s,perSeriesAligner:Q},P),preprocessor:F})};return o.createElement(o.Fragment,null,o.createElement(n.EditorRow,null,o.createElement(n.EditorFieldGroup,null,o.createElement(a.I,{refId:r,templateVariableOptions:d.options,projectName:H,datasource:O,onChange:P=>{m({...s,projectName:P})}}),o.createElement(n.EditorField,{label:"Service",width:"auto"},o.createElement(v.Ph,{width:"auto",onChange:ie,value:[...ee,...d.options].find(P=>P.value===se),options:[{label:"Template Variables",options:d.options},...ee],placeholder:"Select Services",inputId:`${r}-service`})),o.createElement(n.EditorField,{label:"Metric name",width:"auto"},o.createElement(v.Ph,{width:"auto",onChange:ae,value:[...q,...d.options].find(P=>P.value===x),options:[{label:"Template Variables",options:d.options},...q],placeholder:"Select Metric",inputId:`${r}-select-metric`})))),o.createElement(o.Fragment,null,o.createElement(U.p,{labels:f,filters:s.filters,onChange:P=>m({...s,filters:P}),variableOptionGroup:d}),o.createElement(n.EditorRow,null,o.createElement(u.A,{metricDescriptor:B,query:s,onChange:m}),o.createElement(p.X,{refId:r,labels:Object.keys(f),query:s,onChange:m,variableOptionGroup:d,metricDescriptor:B}),o.createElement(A.v,{refId:r,datasource:O,templateVariableOptions:d.options,query:s,customMetaData:G,onChange:m,metricDescriptor:B,preprocessor:s.preprocessor}),o.createElement(T.B,{refId:r,value:R,onChange:$}))))}const E=r=>e.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${r.colors.text.secondary};
`,i=o.memo(_)},18342:(C,N,t)=>{t.d(N,{zI:()=>D,a1:()=>c.a1,$d:()=>a.$,D6:()=>T.D,Th:()=>M});var e=t(75231),h=t(12803),L=t(27391),o=t(23333),n=t(76687);const D=()=>n.createElement("div",{className:"gf-form grafana-info-box alert-info"},n.createElement("div",null,n.createElement("h5",null,"Annotation Query Format"),n.createElement("p",null,"An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned."," "),n.createElement("p",null,"The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"),n.createElement("code",null,"{{metric.type}}"," has value: ","{{metric.value}}"),n.createElement("p",null,"Example Result: ",n.createElement("code",null,"monitoring.googleapis.com/uptime_check/http_status has this value: 502")),n.createElement("span",null,"Patterns:"),n.createElement("p",null,n.createElement("code",null,"{{metric.value}}")," = value of the metric/point"),n.createElement("p",null,n.createElement("code",null,"{{metric.type}}")," = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"),n.createElement("p",null,n.createElement("code",null,"{{metric.name}}")," = name part of metric e.g. instance/cpu/usage_time"),n.createElement("p",null,n.createElement("code",null,"{{metric.service}}")," = service part of metric e.g. compute"),n.createElement("p",null,n.createElement("code",null,"{{metric.label.label_name}}")," = Metric label metadata e.g. metric.label.instance_name"),n.createElement("p",null,n.createElement("code",null,"{{resource.label.label_name}}")," = Resource label metadata e.g. resource.label.zone")));var l=t(35135),v=t(43341),I=t(89895),c=t(41614),T=t(96306),A=t(41236),p=t(4693),U=t(74740);const M=({label:E,onChange:i,value:r,options:m,allowCustomValue:O=!1})=>n.createElement(p._,{label:E,labelWidth:20},n.createElement(U.Ph,{width:25,allowCustomValue:O,value:r,onChange:({value:s})=>i(s),options:m}));var u=t(32033),a=t(45856),_=t(16567)},40567:(C,N,t)=>{t.d(N,{$e:()=>T,Eu:()=>D,Fh:()=>A,IR:()=>p,Ry:()=>I,XI:()=>U,dD:()=>v,lx:()=>l,yy:()=>c});var e=t(80807);const h=71,L=19,o=14,n=28,D=[{text:"none",value:"ALIGN_NONE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.STRING,e.$h.VALUE_TYPE_UNSPECIFIED,e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"delta",value:"ALIGN_DELTA",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.CUMULATIVE,e.lH.DELTA]},{text:"rate",value:"ALIGN_RATE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.CUMULATIVE,e.lH.DELTA]},{text:"interpolate",value:"ALIGN_INTERPOLATE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE]},{text:"next older",value:"ALIGN_NEXT_OLDER",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.STRING,e.$h.VALUE_TYPE_UNSPECIFIED,e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"min",value:"ALIGN_MIN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"max",value:"ALIGN_MAX",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"mean",value:"ALIGN_MEAN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count",value:"ALIGN_COUNT",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"sum",value:"ALIGN_SUM",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"stddev",value:"ALIGN_STDDEV",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count true",value:"ALIGN_COUNT_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"count false",value:"ALIGN_COUNT_FALSE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"fraction true",value:"ALIGN_FRACTION_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"percentile 99",value:"ALIGN_PERCENTILE_99",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 95",value:"ALIGN_PERCENTILE_95",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 50",value:"ALIGN_PERCENTILE_50",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 05",value:"ALIGN_PERCENTILE_05",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percent change",value:"ALIGN_PERCENT_CHANGE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]}],l=[{text:"none",value:"REDUCE_NONE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.BOOL,e.$h.STRING],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"mean",value:"REDUCE_MEAN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"min",value:"REDUCE_MIN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"max",value:"REDUCE_MAX",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"sum",value:"REDUCE_SUM",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"std. dev.",value:"REDUCE_STDDEV",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"count",value:"REDUCE_COUNT",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.BOOL,e.$h.STRING],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"count true",value:"REDUCE_COUNT_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count false",value:"REDUCE_COUNT_FALSE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"99th percentile",value:"REDUCE_PERCENTILE_99",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"95th percentile",value:"REDUCE_PERCENTILE_95",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"50th percentile",value:"REDUCE_PERCENTILE_50",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"5th percentile",value:"REDUCE_PERCENTILE_05",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]}],v=[{text:"grafana auto",value:"grafana-auto"},{text:"stackdriver auto",value:"stackdriver-auto",hidden:!0},{text:"cloud monitoring auto",value:"cloud-monitoring-auto"},{text:"1m",value:"+60s"},{text:"2m",value:"+120s"},{text:"5m",value:"+300s"},{text:"10m",value:"+600s"},{text:"30m",value:"+1800s"},{text:"1h",value:"+3600s"},{text:"3h",value:"+7200s"},{text:"6h",value:"+21600s"},{text:"1d",value:"+86400s"},{text:"3d",value:"+259200s"},{text:"1w",value:"+604800s"}],I=[{text:"auto",value:"auto"},{text:"1m",value:"1m"},{text:"2m",value:"2m"},{text:"5m",value:"5m"},{text:"10m",value:"10m"},{text:"30m",value:"30m"},{text:"1h",value:"1h"},{text:"3h",value:"3h"},{text:"6h",value:"6h"},{text:"1d",value:"1d"},{text:"3d",value:"3d"},{text:"1w",value:"1w"}],c=[{text:"1m",value:"1m"},{text:"2m",value:"2m"},{text:"5m",value:"5m"},{text:"10m",value:"10m"},{text:"30m",value:"30m"},{text:"1h",value:"1h"},{text:"3h",value:"3h"},{text:"6h",value:"6h"},{text:"24h",value:"24h"},{text:"72h",value:"72h"}],T=["metadata.system_labels.cloud_account","metadata.system_labels.name","metadata.system_labels.region","metadata.system_labels.state","metadata.system_labels.instance_group","metadata.system_labels.node_name","metadata.system_labels.service_name","metadata.system_labels.top_level_controller_type","metadata.system_labels.top_level_controller_name","metadata.system_labels.container_image"],A="select_slo_burn_rate",p=[{label:"SLI Value",value:"select_slo_health"},{label:"SLO Compliance",value:"select_slo_compliance"},{label:"SLO Error Budget Remaining",value:"select_slo_budget_fraction"},{label:"SLO Burn Rate",value:A}],U=[{label:"Builder",value:e.xL.TIME_SERIES_LIST},{label:"MQL",value:e.xL.TIME_SERIES_QUERY},{label:"Service Level Objectives (SLO)",value:e.xL.SLO}]},87597:(C,N,t)=>{t.d(N,{A_:()=>T,Av:()=>_,FL:()=>I,ID:()=>p,Qd:()=>A,Qf:()=>v,WH:()=>a,gY:()=>U,kU:()=>u,mi:()=>M,oU:()=>c,qA:()=>l});var e=t(86832),h=t.n(e),L=t(46587),o=t(34304),n=t(40567),D=t(80807);const l=E=>(0,e.uniqBy)(E,"service"),v=(E,i)=>E.filter(r=>r.service===i),I=(E,i,r,m)=>{const O=v(E,m).map(R=>({value:R.type,name:R.displayName})),s=O.some(R=>R.value===r),d=O.length?O[0].value:"";return{metricTypes:O,selectedMetricType:s?i:d}},c=(E,i,r)=>(r&&r===D.mG.Rate&&(i=D.lH.GAUGE),E?n.Eu.filter(m=>m.valueTypes.indexOf(E)!==-1&&m.metricKinds.indexOf(i)!==-1):[]),T=(E,i)=>i?n.lx.filter(r=>r.valueTypes.indexOf(E)!==-1&&r.metricKinds.indexOf(i)!==-1):[],A=async(E,i,r)=>{const m="handleLabelKeysQuery",O=await E.getLabels(i,m,r);return[...Object.keys(O),...n.$e]},p=(E=D.$h.DOUBLE,i=D.lH.GAUGE,r=D.CS.ALIGN_MEAN,m)=>{const O=(0,o.J)(),s=c(E,i,m).map(d=>({...d,label:d.text}));return s.some(d=>d.value===O.replace(r))||(r=s.length>0?s[0].value:D.CS.ALIGN_MEAN),{alignOptions:s,perSeriesAligner:r}},U=E=>{const i=E.reduce((r,m)=>{const O=m.split(".").map(e.startCase),s=(O.length===2?O:(0,e.initial)(O)).join(" "),d={value:m,label:m};return r[s]?r[s]=[...r[s],d]:r[s]=[d],r},{});return Object.entries(i).map(([r,m])=>({label:r,options:m,expanded:!0}),[])},M=E=>(0,e.chunk)(E,4).map(([i,r,m,O="AND"])=>({key:i,operator:r,value:m,condition:O})),u=(E,i)=>{const{perSeriesAligner:r,alignmentPeriod:m}=E;if(!m||!r)return"";const O=n.Eu.find(G=>G.value===i.templateSrv.replace(r)),s=parseInt(m,10);return`${L.secondsToHms(s)} interval (${O?.text??""})`},a=E=>{const i=E?.filters?.findIndex(m=>m==="metric.type");return E?.filters?.[i+2]||""},_=(E,i)=>{if(!E.filters)return E.filters=["metric.type","=",i],E;const r=E?.filters?.findIndex(m=>m==="metric.type");return r===-1?E.filters.push("metric.type","=",i):E.filters[r+2]=i,E}},80807:(C,N,t)=>{t.d(N,{$h:()=>n,Bp:()=>e,CS:()=>D,lH:()=>o,mG:()=>L,xL:()=>h});var e=(l=>(l.Projects="projects",l.Services="services",l.DefaultProject="defaultProject",l.MetricTypes="metricTypes",l.LabelKeys="labelKeys",l.LabelValues="labelValues",l.ResourceTypes="resourceTypes",l.Aggregations="aggregations",l.Aligners="aligners",l.AlignmentPeriods="alignmentPeriods",l.Selectors="selectors",l.SLOServices="sloServices",l.SLO="slo",l))(e||{}),h=(l=>(l.TIME_SERIES_LIST="timeSeriesList",l.TIME_SERIES_QUERY="timeSeriesQuery",l.SLO="slo",l.ANNOTATION="annotation",l))(h||{}),L=(l=>(l.None="none",l.Rate="rate",l.Delta="delta",l))(L||{}),o=(l=>(l.METRIC_KIND_UNSPECIFIED="METRIC_KIND_UNSPECIFIED",l.GAUGE="GAUGE",l.DELTA="DELTA",l.CUMULATIVE="CUMULATIVE",l))(o||{}),n=(l=>(l.VALUE_TYPE_UNSPECIFIED="VALUE_TYPE_UNSPECIFIED",l.BOOL="BOOL",l.INT64="INT64",l.DOUBLE="DOUBLE",l.STRING="STRING",l.DISTRIBUTION="DISTRIBUTION",l.MONEY="MONEY",l))(n||{}),D=(l=>(l.ALIGN_DELTA="ALIGN_DELTA",l.ALIGN_RATE="ALIGN_RATE",l.ALIGN_INTERPOLATE="ALIGN_INTERPOLATE",l.ALIGN_NEXT_OLDER="ALIGN_NEXT_OLDER",l.ALIGN_MIN="ALIGN_MIN",l.ALIGN_MAX="ALIGN_MAX",l.ALIGN_MEAN="ALIGN_MEAN",l.ALIGN_COUNT="ALIGN_COUNT",l.ALIGN_SUM="ALIGN_SUM",l.ALIGN_STDDEV="ALIGN_STDDEV",l.ALIGN_COUNT_TRUE="ALIGN_COUNT_TRUE",l.ALIGN_COUNT_FALSE="ALIGN_COUNT_FALSE",l.ALIGN_FRACTION_TRUE="ALIGN_FRACTION_TRUE",l.ALIGN_PERCENTILE_99="ALIGN_PERCENTILE_99",l.ALIGN_PERCENTILE_95="ALIGN_PERCENTILE_95",l.ALIGN_PERCENTILE_50="ALIGN_PERCENTILE_50",l.ALIGN_PERCENTILE_05="ALIGN_PERCENTILE_05",l.ALIGN_PERCENT_CHANGE="ALIGN_PERCENT_CHANGE",l.ALIGN_NONE="ALIGN_NONE",l))(D||{})}}]);

//# sourceMappingURL=2225.a9902f1453cc9efeb813.js.map