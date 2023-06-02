"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1477],{61099:(y,m,t)=>{t.d(m,{e:()=>e});var e=(i=>(i.OpenSource="Open Source",i.Pro="Pro",i.Enterprise="Enterprise",i))(e||{})},98679:(y,m,t)=>{t.d(m,{H:()=>oe});var e=t(76687),i=t(98914),l=t(64222),M=t(97842),d=t(83076),a=t(76902),f=t(5819),p=t(40522),h=t(4693),A=t(38753),O=t(14378),Y=t(52901),L=t(87191);function j({dataSourceName:n,isDefault:s,onDefaultChange:r,onNameChange:u,alertingSupported:E,disabled:v}){return e.createElement(e.Fragment,null,e.createElement(H,{enabled:E}),e.createElement("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings"},e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form max-width-30"},e.createElement(h._,{label:"Name",tooltip:`The name is used when you select the data source in panels. The default data source is
              'preselected in new panels.`,grow:!0,disabled:v},e.createElement(A.I,{id:"basic-settings-name",type:"text",value:n,placeholder:"Name",onChange:P=>u(P.currentTarget.value),required:!0,"aria-label":p.wl.pages.DataSource.name}))),e.createElement(h._,{label:"Default",labelWidth:8,disabled:v},e.createElement(O.x,{id:"basic-settings-default",value:s,onChange:P=>{r(P.currentTarget.checked)}})))))}function H({enabled:n}){const s=(0,Y.wW)(J);return e.createElement("div",{className:s.badge},n?e.createElement(L.C,{color:"green",icon:"check-circle",text:"Alerting supported"}):e.createElement(L.C,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"}))}const J=n=>({badge:f.css`
    margin-bottom: ${n.spacing(2)};
  `});var S=t(29480),$=t(14230);function Q({canSave:n,canDelete:s,onDelete:r,onSubmit:u,onTest:E,exploreUrl:v}){const P=$.Vt.hasPermission(d.AccessControlAction.DataSourcesExplore);return e.createElement("div",{className:"gf-form-button-row"},e.createElement(S.zx,{variant:"secondary",fill:"solid",type:"button",onClick:()=>history.back()},"Back"),e.createElement(S.Qj,{variant:"secondary",fill:"solid",href:v,disabled:!P},"Explore"),e.createElement(S.zx,{type:"button",variant:"destructive",disabled:!s,onClick:r,"aria-label":p.wl.pages.DataSource.delete},"Delete"),n&&e.createElement(S.zx,{type:"submit",variant:"primary",disabled:!n,onClick:x=>u(x),"aria-label":p.wl.pages.DataSource.saveAndTest},"Save & test"),!n&&e.createElement(S.zx,{variant:"primary",onClick:E},"Test"))}var G=t(61099),I=t(23061),T=t(39189),X=t(93882);const Z="datasources.settings.cloudInfoBox.isDismissed";function _({dataSource:n}){let s="",r="";if(n.readOnly||(n.version??0)>2||X.vc.buildInfo.edition!==G.e.OpenSource)return null;switch(n.type){case"prometheus":s="Prometheus",r="Loki";break;case"loki":s="Loki",r="Prometheus";break;default:return null}return e.createElement(T.G,{storageKey:Z,defaultValue:!1},(u,E)=>u?null:e.createElement(I.b,{title:`Configure your ${s} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{E(!0)}},"Or skip the effort and get ",s," (and ",r,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",e.createElement("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${n.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage."},"free-forever Grafana Cloud plan"),"."))}const w="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function b(){return e.createElement(I.b,{"aria-label":p.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source"},w)}function U({dataSourceRights:n,onDelete:s}){const{readOnly:r,hasDeleteRights:u}=n,E=!r&&u,v=()=>history.back();return e.createElement(e.Fragment,null,r&&e.createElement(b,null),e.createElement("div",{className:"gf-form-button-row"},E&&e.createElement(S.zx,{type:"submit",variant:"destructive",onClick:s},"Delete"),e.createElement(S.zx,{variant:"secondary",fill:"outline",type:"button",onClick:v},"Back")))}const o="You are not allowed to modify this data source. Please contact your server admin to update this data source.";function c(){return e.createElement(I.b,{severity:"info",title:"Missing rights"},o)}function g({plugin:n,pageId:s}){if(!n||!n.configPages)return null;const r=n.configPages.find(({id:u})=>u===s);return r?e.createElement(r.body,{plugin:n,query:{}}):e.createElement("div",null,"Page not found: ",r)}var D=t(86832),R=t(58802);class k extends e.PureComponent{constructor(s){super(s),this.element=null,this.onModelChanged=r=>{this.props.onModelChange(r)},this.scopeProps={ctrl:{datasourceMeta:s.dataSourceMeta,current:(0,D.cloneDeep)(s.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:s}=this.props;if(this.element&&!s.components.ConfigEditor){const r=(0,R.w)(),u='<plugin-component type="datasource-config-ctrl" />';this.component=r.load(this.element,this.scopeProps,u)}}componentDidUpdate(s){const{plugin:r}=this.props;!r.components.ConfigEditor&&this.props.dataSource!==s.dataSource&&(this.scopeProps.ctrl.current=(0,D.cloneDeep)(this.props.dataSource),this.component?.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:s,dataSource:r}=this.props;return s?e.createElement("div",{ref:u=>this.element=u},s.components.ConfigEditor&&e.createElement(s.components.ConfigEditor,{options:r,onOptionsChange:this.onModelChanged})):null}}var N=t(49989);function V({state:n}){return e.createElement("div",{className:"gf-form"},e.createElement("div",{className:"gf-form-label width-10"},"Plugin state"),e.createElement("div",{className:"gf-form-label gf-form-label--transparent"},e.createElement(N.u,{state:n})))}function B({testingStatus:n}){const s=n?.status==="error",r=n?.message,u=n?.details?.message,E=n?.details?.verboseMessage;return r?e.createElement("div",{className:"gf-form-group p-t-2"},e.createElement(I.b,{severity:s?"error":"success",title:r,"aria-label":p.wl.pages.DataSource.alert},n?.details&&e.createElement(e.Fragment,null,u,E?e.createElement("details",{style:{whiteSpace:"pre-wrap"}},E):null))):null}function oe({uid:n,pageId:s}){(0,a.E)(n);const r=(0,d.useDispatch)(),u=(0,a.wl)(n),E=(0,a.Qs)(u.type),v=(0,a._l)(),P=(0,a.YY)(n),x=(0,a.Rz)(n),q=(0,a.q6)(),ee=(0,a.hw)(n),z=(0,a.qj)(),te=C=>r((0,a.yr)(C)),W=C=>r((0,a.BX)(C)),ae=C=>r((0,a.rl)(C));return e.createElement(re,{pageId:s,dataSource:u,dataSourceMeta:E,dataSourceSettings:v,dataSourceRights:P,exploreUrl:x,onDelete:q,onDefaultChange:te,onNameChange:W,onOptionsChange:ae,onTest:ee,onUpdate:z})}function re({pageId:n,dataSource:s,dataSourceMeta:r,dataSourceSettings:u,dataSourceRights:E,exploreUrl:v,onDelete:P,onDefaultChange:x,onNameChange:q,onOptionsChange:ee,onTest:z,onUpdate:te}){const{plugin:W,loadError:ae,testingStatus:C,loading:ce}=u,{readOnly:F,hasWriteRights:ne,hasDeleteRights:le}=E,ie=s.id>0,K=(0,l.F)()?.getInstanceSettings(s.uid),ue=Boolean(K?.meta?.alerting??!1),de=K?.type==="alertmanager",Ee=ue||de,se=async me=>{me.preventDefault(),await te({...s}),z()};return ae?e.createElement(U,{dataSourceRights:E,onDelete:P}):ce?e.createElement(M.Z,null):!ie||!K?null:n?e.createElement(i.n,{instanceSettings:K},e.createElement(g,{pageId:n,plugin:W})):e.createElement("form",{onSubmit:se},!ne&&e.createElement(c,null),F&&e.createElement(b,null),r.state&&e.createElement(V,{state:r.state}),e.createElement(_,{dataSource:s}),e.createElement(j,{dataSourceName:s.name,isDefault:s.isDefault,onDefaultChange:x,onNameChange:q,alertingSupported:Ee,disabled:F||!ne}),W&&e.createElement(i.n,{instanceSettings:K},e.createElement(k,{plugin:W,dataSource:s,dataSourceMeta:r,onModelChange:ee})),e.createElement(B,{testingStatus:C}),e.createElement(Q,{onSubmit:se,onDelete:P,onTest:z,exploreUrl:v,canSave:!F&&ne,canDelete:!F&&le}))}},9868:(y,m,t)=>{t.r(m),t.d(m,{EditDataSourcePage:()=>d,default:()=>a});var e=t(76687),i=t(78426),l=t(98679),M=t(76902);function d(f){const p=f.match.params.uid,A=new URLSearchParams(f.location.search).get("page"),O=(0,M.MF)(p,A);return e.createElement(i.T,{navId:"datasources",pageNav:O.main},e.createElement(i.T.Contents,null,e.createElement(l.H,{uid:p,pageId:A})))}const a=d},23247:(y,m,t)=>{t.d(m,{V:()=>l});var e=t(76687),i=t(76606);const l=(0,e.createContext)(i.n)},69491:(y,m,t)=>{t.d(m,{E:()=>j,IA:()=>X,MF:()=>w,OU:()=>$,Qs:()=>Z,YY:()=>b,_l:()=>_,d7:()=>U,hw:()=>H,nH:()=>Q,q6:()=>I,qj:()=>G,wi:()=>S,wl:()=>T,zJ:()=>J});var e=t(76687),i=t(46495),l=t(92329),M=t(14230),d=t(52691),a=t(83076),f=t(39874),p=t(41019),h=t(39940),A=t(23247),O=t(41102),Y=t(42212),L=t(98665);const j=o=>{const c=(0,a.useDispatch)();(0,e.useEffect)(()=>(c((0,h.M9)(o)),function(){c((0,i.e)({cleanupAction:D=>D.dataSourceSettings=Y.fk}))}),[o,c])},H=o=>{const c=(0,a.useDispatch)(),g=U();return()=>c((0,h.kY)(o,g.Edit))},J=()=>{const o=(0,a.useDispatch)(),c=(0,a.useSelector)(D=>D.dataSources.isLoadingDataSources),g=(0,a.useSelector)(D=>D.dataSources.dataSources);return(0,e.useEffect)(()=>{o((0,h.bZ)())},[o]),{isLoading:c,dataSources:g}},S=o=>{const c=(0,a.useDispatch)();(0,e.useEffect)(()=>{c((0,h.gv)(o))},[c,o])},$=()=>{const o=(0,a.useDispatch)();(0,e.useEffect)(()=>{o((0,h.Kj)())},[o])},Q=()=>{const o=(0,a.useDispatch)(),c=U();return g=>{o((0,h.J_)(g,c.Edit))}},G=()=>{const o=(0,a.useDispatch)();return async c=>o((0,h.oe)(c))},I=()=>{const o=(0,a.useDispatch)(),{name:c}=(0,a.useSelector)(g=>g.dataSources.dataSource);return()=>{l.Z.publish(new f.VJ({title:"Delete",text:`Are you sure you want to delete the "${c}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>o((0,h.F5)())}))}},T=o=>(0,a.useSelector)(c=>(0,L.f6)(c.dataSources,o)),X=o=>{const c=T(o);return(0,p.iU)(c)},Z=o=>(0,a.useSelector)(c=>(0,L.G4)(c.dataSources,o)),_=()=>(0,a.useSelector)(o=>o.dataSourceSettings),w=(o,c)=>{const g=T(o),{plugin:D,loadError:R,loading:k}=_(),N=(0,a.useSelector)(B=>B.navIndex),V=c?`datasource-${c}-${o}`:`datasource-settings-${o}`;if(R){const B={text:R,subTitle:"Data Source Error",icon:"exclamation-triangle"};return{node:B,main:B}}return k||!D?(0,d.ht)(N,V,(0,O.xG)("settings")):(0,d.ht)(N,V,(0,O.nI)((0,O.B1)(g,D),c||"settings"))},b=o=>{const c=T(o),g=c.readOnly===!0,D=M.Vt.hasPermissionInMetadata(a.AccessControlAction.DataSourcesWrite,c),R=M.Vt.hasPermissionInMetadata(a.AccessControlAction.DataSourcesDelete,c);return{readOnly:g,hasWriteRights:D,hasDeleteRights:R}},U=()=>(0,e.useContext)(A.V)},76902:(y,m,t)=>{t.d(m,{BX:()=>d.BX,E:()=>l.E,Ht:()=>d.Ht,I5:()=>a.I5,IA:()=>a.IA,IO:()=>a.IO,J_:()=>e.J_,MF:()=>l.MF,Nu:()=>d.Nu,OU:()=>l.OU,Qs:()=>l.Qs,Rz:()=>l.IA,Vj:()=>i.V,YY:()=>l.YY,_l:()=>l._l,d7:()=>l.d7,hw:()=>l.hw,mt:()=>a.mt,nH:()=>l.nH,q6:()=>l.q6,qj:()=>l.qj,r7:()=>a.r7,rl:()=>d.rl,wi:()=>l.wi,wl:()=>l.wl,yr:()=>d.yr,zJ:()=>l.zJ,zT:()=>d.zT});var e=t(39940),i=t(23247),l=t(69491),M=t(41102),d=t(42212),a=t(98665)},49989:(y,m,t)=>{t.d(m,{u:()=>M});var e=t(76687),i=t(80946),l=t(87191);const M=a=>{const f=d(a.state);return f?e.createElement(l.C,{color:f.color,title:f.tooltip,text:f.text,icon:f.icon}):null};function d(a){switch(a){case i.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case i.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case i.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=EditDataSourcePage.e794cc5f967c0d6a2a6b.js.map