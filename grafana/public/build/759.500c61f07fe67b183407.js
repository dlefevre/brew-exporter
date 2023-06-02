"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[759],{80759:(Oe,H,i)=>{i.d(H,{D:()=>Qe});var d=i(5819),e=i(76687),V=i(17479),W=i(46893),k=i(40314),T=i(60987),Q=i(40522),f=i(64222),A=i(59798),h=i(45464),v=i(29480),z=i(68127),P=i(96999),Z=i(88282),F=i(22818),G=i(28476),K=i(79423),Y=i(59356),j=i(84282);function J({pluginId:r}){const{value:t,loading:n,error:a}=(0,G.Z)(async()=>(0,Y.i)().get(`/api/plugins/${r}/markdown/query_help`),[]),s=(0,K.a)(t);return n?e.createElement(j.u,{text:"Loading help..."}):a?e.createElement("h3",null,"An error occurred when loading help."):t===""?e.createElement("h3",null,"No query help could be found."):e.createElement("div",{className:"markdown-html",dangerouslySetInnerHTML:{__html:s}})}var y=i(93882),X=i(35072),E=i(6226),R=i(30467),I=i(50011),q=i(39189),_=i(76022),C=i(52901),ee=i(45290),te=i(19428),p=i(38753),B=i(86814),S=i(28992),ae=i(32907),ne=i(32788);function M(r){const{selected:t,ds:n,onChange:a}=r,s=(0,C.wW)(se);return e.createElement(S.Z,{className:t?s.selectedDataSource:void 0,key:n.uid,onClick:()=>a(n.uid)},e.createElement(S.Z.Figure,null,e.createElement("img",{alt:`${n.meta.name} logo`,src:n.meta.info.logos.large})),e.createElement(S.Z.Meta,null,[n.meta.name,n.url,n.isDefault&&e.createElement(ae.V,{key:"default-tag",name:"default",colorIndex:1})]),e.createElement(S.Z.Tags,null,e.createElement(ne.o,{status:n.meta.signature})),e.createElement(S.Z.Heading,null,n.name))}function se(r){return{selectedDataSource:d.css`
      background-color: ${r.colors.emphasize(r.colors.background.secondary,.1)};
    `}}function re(r){const{dataSource:t}=r,n=(0,C.wW)(ie);return t?typeof t=="string"?e.createElement("span",null,"$",t," - not found"):"name"in t?e.createElement(e.Fragment,null,e.createElement("img",{className:n.pickerDSLogo,alt:`${t.meta.name} logo`,src:t.meta.info.logos.small}),e.createElement("span",null,t.name)):e.createElement("span",null,t.uid," - not found"):e.createElement("span",null,"Unknown")}function ie(r){return{pickerDSLogo:d.css`
      height: 20px;
      width: 20px;
      margin-right: ${r.spacing(1)};
    `}}function oe(r){const{current:t,onChange:n}=r,a=(0,C.wW)(U);return e.createElement(ee.JY,null,({showModal:s,hideModal:o})=>e.createElement(v.zx,{className:a.picker,onClick:()=>{s(le,{...r,onDismiss:o,onChange:l=>{n(l),o()}})}},e.createElement(re,{dataSource:t})))}function le(r){const{datasources:t,enableFileUpload:n,recentlyUsed:a=[],onChange:s,fileUploadOptions:o,onDismiss:l,current:c}=r,m=(0,e.useCallback)(u=>{s(u)},[s]),[D,N]=(0,e.useState)(""),g=(0,C.wW)(U),$=t.filter(u=>u?.name.toLocaleLowerCase().indexOf(D.toLocaleLowerCase())!==-1);return e.createElement(te.d,{closeOnMaskClick:!0,onClose:l},e.createElement("div",{className:g.drawerContent},e.createElement("div",{className:g.filterContainer},e.createElement(p.I,{onChange:u=>{N(u.currentTarget.value)},value:D})),e.createElement("div",{className:g.dataSourceList},e.createElement(P.$,null,a.map(u=>$.find(Ie=>Ie.uid===u)).map(u=>u?e.createElement(M,{selected:L(u,c),key:u.uid,ds:u,onChange:m}):null),a&&a.length>0&&e.createElement("hr",null),$.map(u=>e.createElement(M,{selected:L(u,c),key:u.uid,ds:u,onChange:m})))),n&&e.createElement("div",{className:g.additionalContent},e.createElement(B.Yo,{readAs:"readAsArrayBuffer",fileListRenderer:()=>{},options:{...o,onDrop:(...u)=>{l(),o?.onDrop?.(...u)}}},e.createElement(B.A_,{primaryText:"Upload file"})))))}function U(r){return{drawerContent:d.css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `,picker:d.css`
      background: ${r.colors.background.secondary};
    `,filterContainer:d.css`
      padding-bottom: ${r.spacing(1)};
    `,dataSourceList:d.css`
      height: 50px;
      flex-grow: 1;
    `,additionalContent:d.css`
      padding-top: ${r.spacing(1)};
    `}}function L(r,t){return!r||!t?!1:typeof t=="string"?r.uid===t:r.uid===t.uid}class ce extends e.PureComponent{constructor(){super(...arguments),this.dataSourceSrv=(0,f.F)(),this.state={},this.onChange=t=>{const n=this.dataSourceSrv.getInstanceSettings(t);n&&(this.props.onChange(n),this.setState({error:void 0}))}}componentDidMount(){const{current:t}=this.props;this.dataSourceSrv.getInstanceSettings(t)||this.setState({error:"Could not find data source "+t})}getCurrentDs(){const{current:t,noDefault:n}=this.props;if(!t&&n)return;const a=this.dataSourceSrv.getInstanceSettings(t);return a||(0,_.BT)(t)}getDatasources(){const{alerting:t,tracing:n,metrics:a,mixed:s,dashboard:o,variables:l,annotations:c,pluginId:m,type:D,filter:N,logs:g}=this.props;return this.dataSourceSrv.getList({alerting:t,tracing:n,metrics:a,logs:g,dashboard:o,mixed:s,variables:l,annotations:c,pluginId:m,filter:N,type:D})}render(){const{recentlyUsed:t,fileUploadOptions:n,enableFileUpload:a}=this.props;return e.createElement("div",null,e.createElement(oe,{datasources:this.getDatasources(),onChange:this.onChange,recentlyUsed:t,current:this.getCurrentDs(),fileUploadOptions:n,enableFileUpload:a}))}}const ue="DATASOURCE_PICKER",de=r=>e.createElement(q.G,{defaultValue:[],storageKey:r.localStorageKey??ue},(t,n)=>e.createElement(ce,{...r,recentlyUsed:t.map(a=>a.uid),onChange:a=>{n(me(t,{uid:a.uid,lastUse:(0,I.CQ)(new Date).toISOString()})),r.onChange(a)}}));function me(r,t){const n=r,a=n.findIndex(s=>s.uid===t.uid);return a!==-1?n[a]=t:n.push(t),n.sort((s,o)=>{const l=(0,I.CQ)(s.lastUse),c=(0,I.CQ)(o.lastUse);return l.isBefore(c)?1:c.isBefore(l)?-1:0}),n.slice(0,3)}var he=i(46939),O=i(78750),pe=i(56873),b=i(91653),ge=i(36119);async function fe(r,t,n,a){let s=n;const o={type:r.type,uid:t},l={...r?.getDefaultQuery?.(T.zj.PanelEditor),datasource:o,refId:"A"};if(a?.meta.id!==r.meta.id){if(r.meta.mixed)return n;if((0,b.p)(a)&&(0,b.CZ)(r)){const c=await a.exportToAbstractQueries(n);s=await r.importFromAbstractQueries(c)}else if(a&&r.importQueries)s=await r.importQueries(n,a);else return[l]}return s.length===0?[l]:s.map(c=>(!(0,ge.Pr)(c.datasource)&&!r.meta.mixed&&(c.datasource=o),c))}var ve=i(33456),ye=i(55377),Se=i(46587),Ee=i(4693),Ce=i(14378),xe=i(469);class De extends e.PureComponent{constructor(t){super(t),this.onRelativeTimeChange=a=>{this.setState({timeRangeFrom:a.target.value})},this.onTimeShiftChange=a=>{this.setState({timeRangeShift:a.target.value})},this.onOverrideTime=a=>{const{options:s,onChange:o}=this.props,l=x(a.target.value),c=w(l);c&&s.timeRange?.from!==l&&o({...s,timeRange:{...s.timeRange??{},from:l}}),this.setState({relativeTimeIsValid:c})},this.onTimeShift=a=>{const{options:s,onChange:o}=this.props,l=x(a.target.value),c=w(l);c&&s.timeRange?.shift!==l&&o({...s,timeRange:{...s.timeRange??{},shift:l}}),this.setState({timeShiftIsValid:c})},this.onToggleTimeOverride=()=>{const{onChange:a,options:s}=this.props;this.setState({timeRangeHide:!this.state.timeRangeHide},()=>{a({...s,timeRange:{...s.timeRange??{},hide:this.state.timeRangeHide}})})},this.onCacheTimeoutBlur=a=>{const{options:s,onChange:o}=this.props;o({...s,cacheTimeout:x(a.target.value)})},this.onQueryCachingTTLBlur=a=>{const{options:s,onChange:o}=this.props;let l=parseInt(a.target.value,10);(isNaN(l)||l===0)&&(l=null),o({...s,queryCachingTTL:l})},this.onMaxDataPointsBlur=a=>{const{options:s,onChange:o}=this.props;let l=parseInt(a.target.value,10);(isNaN(l)||l===0)&&(l=null),l!==s.maxDataPoints&&o({...s,maxDataPoints:l})},this.onMinIntervalBlur=a=>{const{options:s,onChange:o}=this.props,l=x(a.target.value);l!==s.minInterval&&o({...s,minInterval:l})},this.onOpenOptions=()=>{this.setState({isOpen:!0})},this.onCloseOptions=()=>{this.setState({isOpen:!1})};const{options:n}=t;this.state={timeRangeFrom:n.timeRange?.from||"",timeRangeShift:n.timeRange?.shift||"",timeRangeHide:n.timeRange?.hide??!1,isOpen:!1,relativeTimeIsValid:!0,timeShiftIsValid:!0}}renderCacheTimeoutOption(){const{dataSource:t,options:n}=this.props,a=`If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;return t.meta.queryOptions?.cacheTimeout?e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9,tooltip:a},"Cache timeout"),e.createElement(p.I,{type:"text",className:"width-6",placeholder:"60",spellCheck:!1,onBlur:this.onCacheTimeoutBlur,defaultValue:n.cacheTimeout??""}))):null}renderQueryCachingTTLOption(){const{dataSource:t,options:n}=this.props,a="Cache time-to-live: How long results from this queries in this panel will be cached, in milliseconds. Defaults to the TTL in the caching configuration for this datasource.";return t.cachingConfig?.enabled?e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9,tooltip:a},"Cache TTL"),e.createElement(p.I,{type:"number",className:"width-6",placeholder:`${t.cachingConfig.TTLMs}`,spellCheck:!1,onBlur:this.onQueryCachingTTLBlur,defaultValue:n.queryCachingTTL??void 0}))):null}renderMaxDataPointsOption(){const{data:t,options:n}=this.props,a=t.request?.maxDataPoints,s=n.maxDataPoints??"",o=s==="";return e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9,tooltip:e.createElement(e.Fragment,null,"The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer.")},"Max data points"),e.createElement(p.I,{type:"number",className:"width-6",placeholder:`${a}`,spellCheck:!1,onBlur:this.onMaxDataPointsBlur,defaultValue:s}),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:"gf-form-label query-segment-operator"},"="),e.createElement("div",{className:"gf-form-label"},"Width of panel"))))}renderIntervalOption(){const{data:t,dataSource:n,options:a}=this.props,s=t.request?.interval,o=n.interval??"No limit";return e.createElement(e.Fragment,null,e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9,tooltip:e.createElement(e.Fragment,null,"A lower limit for the interval. Recommended to be set to write frequency, for example ",e.createElement("code",null,"1m")," ","if your data is written every minute. Default value can be set in data source settings for most data sources.")},"Min interval"),e.createElement(p.I,{type:"text",className:"width-6",placeholder:`${o}`,spellCheck:!1,onBlur:this.onMinIntervalBlur,defaultValue:a.minInterval??""}))),e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9,tooltip:e.createElement(e.Fragment,null,"The evaluated interval that is sent to data source and is used in ",e.createElement("code",null,"$__interval")," and"," ",e.createElement("code",null,"$__interval_ms"))},"Interval"),e.createElement(h.c,{width:6},s),e.createElement("div",{className:"gf-form-label query-segment-operator"},"="),e.createElement("div",{className:"gf-form-label"},"Time range / max data points"))))}renderCollapsedText(t){const{data:n,options:a}=this.props,{isOpen:s}=this.state;if(s)return;let o=a.maxDataPoints??"";o===""&&n.request&&(o=`auto = ${n.request.maxDataPoints}`);let l=a.minInterval;return n.request&&(l=`${n.request.interval}`),e.createElement(e.Fragment,null,e.createElement("div",{className:t.collapsedText},"MD = ",o),e.createElement("div",{className:t.collapsedText},"Interval = ",l))}render(){const{timeRangeHide:t,relativeTimeIsValid:n,timeShiftIsValid:a}=this.state,{timeRangeFrom:s,timeRangeShift:o,isOpen:l}=this.state,c=Te();return e.createElement(xe.t,{id:"Query options",index:0,title:"Query options",headerElement:this.renderCollapsedText(c),isOpen:l,onOpen:this.onOpenOptions,onClose:this.onCloseOptions},this.renderMaxDataPointsOption(),this.renderIntervalOption(),this.renderCacheTimeoutOption(),this.renderQueryCachingTTLOption(),e.createElement("div",{className:"gf-form"},e.createElement(h.c,{width:9},"Relative time"),e.createElement(p.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onRelativeTimeChange,onBlur:this.onOverrideTime,invalid:!n,value:s})),e.createElement("div",{className:"gf-form"},e.createElement("span",{className:"gf-form-label width-9"},"Time shift"),e.createElement(p.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onTimeShiftChange,onBlur:this.onTimeShift,invalid:!a,value:o})),(o||s)&&e.createElement("div",{className:"gf-form-inline"},e.createElement(Ee._,{label:"Hide time info",labelWidth:18},e.createElement(Ce.r,{value:t,onChange:this.onToggleTimeOverride}))))}}const w=r=>r?Se.isValidTimeSpan(r):!0,x=r=>r===""?null:r,Te=(0,F.B)(()=>{const{theme:r}=y.vc;return{collapsedText:d.css`
      margin-left: ${r.spacing.md};
      font-size: ${r.typography.size.sm};
      color: ${r.colors.textWeak};
    `}});class Qe extends e.PureComponent{constructor(){super(...arguments),this.backendSrv=X.ae,this.dataSourceSrv=(0,f.F)(),this.querySubscription=null,this.state={isLoadingHelp:!1,helpContent:null,isPickerOpen:!1,isAddingMixed:!1,isHelpOpen:!1,queries:[],savedQueryUid:null,initialState:{queries:[],savedQueryUid:null},data:{state:V.Gu.NotStarted,series:[],timeRange:(0,W.JK)()}},this.onChangeDataSource=async t=>{const{dsSettings:n}=this.state,a=n?await(0,f.F)().get(n.uid):void 0,s=await(0,f.F)().get(t.uid),o=await fe(s,t.uid,this.state.queries,a),l=await this.dataSourceSrv.get(t.name);this.onChange({queries:o,savedQueryUid:null,dataSource:{name:t.name,uid:t.uid,type:t.meta.id,default:t.isDefault}}),this.setState({queries:o,savedQueryUid:null,dataSource:l,dsSettings:t})},this.onAddQueryClick=()=>{const{queries:t}=this.state;this.onQueriesChange((0,E.DI)(t,this.newQuery())),this.onScrollBottom()},this.onAddExpressionClick=()=>{this.onQueriesChange((0,E.DI)(this.state.queries,he.mV.newQuery())),this.onScrollBottom()},this.onScrollBottom=()=>{setTimeout(()=>{this.state.scrollElement&&this.state.scrollElement.scrollTo({top:1e4})},20)},this.onUpdateAndRun=t=>{this.props.onOptionsChange(t),this.props.onRunQueries()},this.onOpenHelp=()=>{this.setState({isHelpOpen:!0})},this.onCloseHelp=()=>{this.setState({isHelpOpen:!1})},this.renderMixedPicker=()=>e.createElement(A.q,{mixed:!1,onChange:this.onAddMixedQuery,current:null,autoFocus:!0,variables:!0,onBlur:this.onMixedPickerBlur,openMenuOnFocus:!0}),this.onAddMixedQuery=t=>{this.onAddQuery({datasource:t.name}),this.setState({isAddingMixed:!1})},this.onMixedPickerBlur=()=>{this.setState({isAddingMixed:!1})},this.onAddQuery=t=>{const{dsSettings:n,queries:a}=this.state;this.onQueriesChange((0,E.DI)(a,t,{type:n?.type,uid:n?.uid})),this.onScrollBottom()},this.onFileDrop=(t,n,a)=>{R.eM(t).subscribe(async s=>{const o=[];s.dataFrames.forEach(c=>{const m=(0,k.Y)(c);o.push(m)});const l=(0,f.F)().getInstanceSettings("-- Grafana --");await this.onChangeDataSource(l),this.onQueriesChange([{refId:"A",datasource:{type:"grafana",uid:"grafana"},queryType:pe.hR.Snapshot,snapshot:o,file:s.file}]),this.props.onRunQueries()})},this.onQueriesChange=t=>{this.onChange({queries:t}),this.setState({queries:t})},this.setScrollRef=t=>{this.setState({scrollElement:t})}}async componentDidMount(){const{options:t,queryRunner:n}=this.props;this.querySubscription=n.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:a=>this.onPanelDataUpdate(a)});try{const a=await this.dataSourceSrv.get(t.dataSource),s=this.dataSourceSrv.getInstanceSettings(t.dataSource),o=await this.dataSourceSrv.get(),l=a.getRef(),c=t.queries.map(m=>({...(0,E.vH)(m)&&a?.getDefaultQuery?.(T.zj.PanelEditor),datasource:l,...m}));this.setState({queries:c,dataSource:a,dsSettings:s,defaultDataSource:o,savedQueryUid:t.savedQueryUid,initialState:{queries:t.queries.map(m=>({...m})),dataSource:{...t.dataSource},savedQueryUid:t.savedQueryUid}})}catch(a){console.log("failed to load data source",a)}}componentWillUnmount(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onPanelDataUpdate(t){this.setState({data:t})}newQuery(){const{dsSettings:t,defaultDataSource:n}=this.state,a=t?.meta.mixed?n:t;return{...this.state.dataSource?.getDefaultQuery?.(T.zj.PanelEditor),datasource:{uid:a?.uid,type:a?.type}}}onChange(t){this.props.onOptionsChange({...this.props.options,...t})}renderTopSection(t){const{onOpenQueryInspector:n,options:a}=this.props,{dataSource:s,data:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:t.dataSourceRow},e.createElement(h.c,{htmlFor:"data-source-picker",width:"auto"},"Data source"),e.createElement("div",{className:t.dataSourceRowItem},y.ZP.featureToggles.drawerDataSourcePicker?e.createElement(de,{onChange:this.onChangeDataSource,current:a.dataSource,metrics:!0,mixed:!0,dashboard:!0,variables:!0,enableFileUpload:y.ZP.featureToggles.editPanelCSVDragAndDrop,fileUploadOptions:{onDrop:this.onFileDrop,maxSize:R.dg,multiple:!1,accept:R.DK}}):e.createElement(A.q,{onChange:this.onChangeDataSource,current:a.dataSource,metrics:!0,mixed:!0,dashboard:!0,variables:!0})),s&&e.createElement(e.Fragment,null,e.createElement("div",{className:t.dataSourceRowItem},e.createElement(v.zx,{variant:"secondary",icon:"question-circle",title:"Open data source help",onClick:this.onOpenHelp,"data-testid":"query-tab-help-button"})),e.createElement("div",{className:t.dataSourceRowItemOptions},e.createElement(De,{options:a,dataSource:s,data:o,onChange:this.onUpdateAndRun})),n&&e.createElement("div",{className:t.dataSourceRowItem},e.createElement(v.zx,{variant:"secondary",onClick:n,"aria-label":Q.wl.components.QueryTab.queryInspectorButton},"Query inspector")))))}renderQueries(t){const{onRunQueries:n}=this.props,{data:a,queries:s}=this.state;return(0,O.yl)(t.name)?e.createElement(O.hD,{queries:s,panelData:a,onChange:this.onQueriesChange,onRunQueries:n}):e.createElement("div",{"aria-label":Q.wl.components.QueryTab.content},e.createElement(ye.l,{queries:s,dsSettings:t,onQueriesChange:this.onQueriesChange,onAddQuery:this.onAddQuery,onRunQueries:n,data:a}))}isExpressionsSupported(t){return(t.meta.alerting||t.meta.mixed)===!0}renderExtraActions(){return ve.S.getAllExtraRenderAction().map((t,n)=>t({onAddQuery:this.onAddQuery,onChangeDataSource:this.onChangeDataSource,key:n})).filter(Boolean)}renderAddQueryRow(t,n){const{isAddingMixed:a}=this.state,s=!(a||(0,O.yl)(t.name));return e.createElement(z.Lh,{spacing:"md",align:"flex-start"},s&&e.createElement(v.zx,{icon:"plus",onClick:this.onAddQueryClick,variant:"secondary","aria-label":Q.wl.components.QueryTab.addQuery,"data-testid":"query-tab-add-query"},"Query"),y.ZP.expressionsEnabled&&this.isExpressionsSupported(t)&&e.createElement(v.zx,{icon:"plus",onClick:this.onAddExpressionClick,variant:"secondary",className:n.expressionButton,"data-testid":"query-tab-add-expression"},e.createElement("span",null,"Expression\xA0")),this.renderExtraActions())}render(){const{isHelpOpen:t,dsSettings:n}=this.state,a=Re();return e.createElement(P.$,{autoHeightMin:"100%",scrollRefCallback:this.setScrollRef},e.createElement("div",{className:a.innerWrapper},this.renderTopSection(a),n&&e.createElement(e.Fragment,null,e.createElement("div",{className:a.queriesWrapper},this.renderQueries(n)),this.renderAddQueryRow(n,a),t&&e.createElement(Z.u,{title:"Data source help",isOpen:!0,onDismiss:this.onCloseHelp},e.createElement(J,{pluginId:n.meta.id})))))}}const Re=(0,F.B)(()=>{const{theme:r}=y.ZP;return{innerWrapper:d.css`
      display: flex;
      flex-direction: column;
      padding: ${r.spacing.md};
    `,dataSourceRow:d.css`
      display: flex;
      margin-bottom: ${r.spacing.md};
    `,dataSourceRowItem:d.css`
      margin-right: ${r.spacing.inlineFormMargin};
    `,dataSourceRowItemOptions:d.css`
      flex-grow: 1;
      margin-right: ${r.spacing.inlineFormMargin};
    `,queriesWrapper:d.css`
      padding-bottom: 16px;
    `,expressionWrapper:d.css``,expressionButton:d.css`
      margin-right: ${r.spacing.sm};
    `}})}}]);

//# sourceMappingURL=759.500c61f07fe67b183407.js.map