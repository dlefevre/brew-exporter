"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8431],{3558:(T,_,s)=>{s.r(_),s.d(_,{AccessControlFolderPermissions:()=>P,default:()=>h});var e=s(76687),E=s(42759),c=s(45284),m=s(78426),p=s(14230),D=s(52691),r=s(83076),M=s(48530),O=s(25189);function v(t,i){const a=i.match.params.uid;return{uid:a,pageNav:(0,D.ht)(t.navIndex,`folder-permissions-${a}`,(0,O._)(1))}}const A={getFolderByUid:M.Pb},o=(0,E.connect)(v,A),P=({uid:t,getFolderByUid:i,pageNav:a})=>{(0,e.useEffect)(()=>{i(t)},[i,t]);const C=p.Vt.hasPermission(r.AccessControlAction.FoldersPermissionsWrite);return e.createElement(m.T,{navId:"dashboards/browse",pageNav:a.main},e.createElement(m.T.Contents,null,e.createElement(c.P,{resource:"folders",resourceId:t,canSetPermissions:C})))},h=o(P)},28747:(T,_,s)=>{s.r(_),s.d(_,{FolderPermissions:()=>a,default:()=>C});var e=s(76687),E=s(42759),c=s(62549),m=s(23707),p=s(29480),D=s(78595),r=s(78426),M=s(61787),O=s(81418),v=s(13964),A=s(52691),o=s(48530),P=s(25189);const h=(g,d)=>{const n=d.match.params.uid;return{pageNav:(0,A.ht)(g.navIndex,`folder-permissions-${n}`,(0,P._)(1)),folderUid:n,folder:g.folder}},t={getFolderByUid:o.Pb,getFolderPermissions:o.a,updateFolderPermission:o.v7,removeFolderPermission:o.Uk,addFolderPermission:o.pz},i=(0,E.connect)(h,t);class a extends e.PureComponent{constructor(d){super(d),this.onOpenAddPermissions=()=>{this.setState({isAdding:!0})},this.onRemoveItem=n=>{this.props.removeFolderPermission(n)},this.onPermissionChanged=(n,l)=>{this.props.updateFolderPermission(n,l)},this.onAddPermission=n=>this.props.addFolderPermission(n),this.onCancelAddPermission=()=>{this.setState({isAdding:!1})},this.state={isAdding:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)}render(){const{pageNav:d,folder:n}=this.props,{isAdding:l}=this.state;if(n.id===0)return e.createElement(r.T,{navId:"dashboards/browse",pageNav:d.main},e.createElement(r.T.Contents,{isLoading:!0},e.createElement("span",null)));const I={title:n.title,url:n.url,id:n.id};return e.createElement(r.T,{navId:"browse",pageNav:d.main},e.createElement(r.T.Contents,null,e.createElement("div",{className:"page-action-bar"},e.createElement("h3",{className:"page-sub-heading"},"Folder Permissions"),e.createElement(c.u,{placement:"auto",content:e.createElement(v.Z,null)},e.createElement(m.J,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})),e.createElement("div",{className:"page-action-bar__spacer"}),e.createElement(p.zx,{className:"pull-right",onClick:this.onOpenAddPermissions,disabled:l},"Add Permission")),e.createElement(D.s,{in:l},e.createElement(M.Z,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})),e.createElement(O.Z,{items:n.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:I})))}}const C=i(a)}}]);

//# sourceMappingURL=FolderPermissions.c8efb337b0a50f76f71a.js.map