"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{48550:(G,p,n)=>{n.r(p),n.d(p,{UsersListPageContent:()=>Z,UsersListPageUnconnected:()=>F,default:()=>de});var e=n(76687),h=n(42759),D=n(79423),I=n(68127),M=n(91285),A=n(78426),C=n(14230),c=n(69326),i=n(29480),R=n(40520);const x={revokeInvite:R.GY},N=(0,h.connect)(null,x);class P extends e.PureComponent{render(){const{invitee:a,revokeInvite:r}=this.props;return e.createElement("tr",null,e.createElement("td",null,a.email),e.createElement("td",null,a.name),e.createElement("td",{className:"text-right"},e.createElement(c.m,{icon:"copy",variant:"secondary",size:"sm",getText:()=>a.url},"Copy Invite"),"\xA0"),e.createElement("td",null,e.createElement(i.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>r(a.code),"aria-label":"Revoke Invite"})))}}const T=N(P);class B extends e.PureComponent{render(){const{invitees:a}=this.props;return e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null),e.createElement("th",{style:{width:"34px"}}))),e.createElement("tbody",{"data-testid":"InviteesTable-body"},a.map((r,o)=>e.createElement(T,{key:`${r.id}-${o}`,invitee:r}))))}}var m=n(14911),U=n(3714);const{selectAll:S,selectById:z,selectTotal:s}=U.wl,d=(t,a)=>a,E=(0,m.P1)([S,d],(t,a)=>{const r=new RegExp(a,"i");return t.filter(l=>r.test(l.name)||r.test(l.email))});var g=n(30708),J=n(20927),Y=n(93882),X=n(83076),w=n(86832),b=n(59356),k=n(79563),u=n(16296);function f(){return async(t,a)=>{try{const{perPage:r,page:o,searchQuery:l}=a().users,v=await(0,b.i)().get("/api/org/users/search",(0,k.y)({perpage:r,page:o,query:l}));t((0,u.eT)(v))}catch{(0,u.k7)()}}}const q=(0,w.debounce)(t=>t(f()),300);function _(t){return async a=>{await(0,b.i)().patch(`/api/org/users/${t.userId}`,{role:t.role}),a(f())}}function ee(t){return async a=>{await(0,b.i)().delete(`/api/org/users/${t}`),a(f())}}function te(t){return async a=>{a((0,u.tZ)()),a((0,u.PJ)(t)),a(f())}}function ne(t){return async a=>{a((0,u.tZ)()),a((0,u.w4)(t)),q(a)}}const ae=t=>{const a=new RegExp(t.searchQuery,"i");return t.users.filter(r=>a.test(r.login)||a.test(r.email)||a.test(r.name))},Q=t=>t.searchQuery;function se(t){return{searchQuery:Q(t.users),pendingInvitesCount:s(t.invites),externalUserMngLinkName:t.users.externalUserMngLinkName,externalUserMngLinkUrl:t.users.externalUserMngLinkUrl,canInvite:t.users.canInvite}}const re={changeSearchQuery:ne},le=(0,h.connect)(se,re)(({canInvite:t,externalUserMngLinkName:a,externalUserMngLinkUrl:r,searchQuery:o,pendingInvitesCount:l,changeSearchQuery:v,onShowInvites:L,showInvites:O})=>{const W=[{label:"Users",value:"users"},{label:`Pending Invites (${l})`,value:"invites"}],K=C.Vt.hasAccess(X.AccessControlAction.OrgUsersAdd,t)&&!Y.ZP.disableLoginForm;return e.createElement("div",{className:"page-action-bar","data-testid":"users-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(g.H,{value:o,onChange:v,placeholder:"Search user by login, email or name"})),l>0&&e.createElement("div",{style:{marginLeft:"1rem"}},e.createElement(J.S,{value:O?"invites":"users",options:W,onChange:L})),K&&e.createElement(i.Qj,{href:"org/users/invite"},"Invite"),r&&e.createElement(i.Qj,{href:r,target:"_blank",rel:"noopener"},a))});var oe=n(76597);function ce(t){const a=Q(t.users);return{users:ae(t.users),searchQuery:Q(t.users),page:t.users.page,totalPages:t.users.totalPages,perPage:t.users.perPage,invitees:E(t.invites,a),externalUserMngInfo:t.users.externalUserMngInfo,isLoading:t.users.isLoading}}const ie={loadUsers:f,fetchInvitees:R.nW,changePage:te,updateUser:_,removeUser:ee},me=(0,h.connect)(ce,ie),F=({users:t,page:a,totalPages:r,invitees:o,externalUserMngInfo:l,isLoading:v,loadUsers:L,fetchInvitees:O,changePage:W,updateUser:j,removeUser:K})=>{const[$,Ee]=(0,e.useState)(!1),H=l?(0,D.a)(l):"";(0,e.useEffect)(()=>{L(),O()},[O,L]);const ge=(y,V)=>{j({...V,role:y})},ue=()=>{Ee(!$)},ve=()=>$?e.createElement(B,{invitees:o}):e.createElement(I.wc,{spacing:"md"},e.createElement(oe.P,{users:t,orgId:C.Vt.user.orgId,onRoleChange:(y,V)=>ge(y,V),onRemoveUser:y=>K(y.userId)}),e.createElement(I.Lh,{justify:"flex-end"},e.createElement(M.t,{onNavigate:W,currentPage:a,numberOfPages:r,hideWhenSinglePage:!0})));return e.createElement(A.T.Contents,{isLoading:!v},e.createElement(le,{onShowInvites:ue,showInvites:$}),H&&e.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:H}}),v&&ve())},Z=me(F);function de(){return e.createElement(A.T,{navId:"users"},e.createElement(Z,null))}},76597:(G,p,n)=>{n.d(p,{P:()=>x});var e=n(76687),h=n(29480),D=n(82461),I=n(88575),M=n(34816),A=n(84814),C=n(93882),c=n(14230),i=n(83076),R=n(57837);const x=({users:N,orgId:P,onRoleChange:T,onRemoveUser:B})=>{const[m,U]=(0,e.useState)(null),[S,z]=(0,e.useState)([]);return(0,e.useEffect)(()=>{async function s(){try{if(c.Vt.hasPermission(i.AccessControlAction.ActionRolesList)){let d=await(0,M.ul)(P);z(d)}}catch{console.error("Error loading options")}}c.Vt.licensedAccessControlEnabled()&&s()},[P]),e.createElement(e.Fragment,null,e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Login"),e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null,"Seen"),e.createElement("th",null,"Role"),e.createElement("th",{style:{width:"34px"}}),e.createElement("th",null,"Origin"),e.createElement("th",null))),e.createElement("tbody",null,N.map((s,d)=>{let E=!c.Vt.hasPermissionInMetadata(i.AccessControlAction.OrgUsersWrite,s);return C.ZP.featureToggles.onlyExternalOrgRoleSync&&(E=s?.isExternallySynced||E),e.createElement("tr",{key:`${s.userId}-${d}`},e.createElement("td",{className:"width-2 text-center"},e.createElement("img",{className:"filter-table__avatar",src:s.avatarUrl,alt:"User avatar"})),e.createElement("td",{className:"max-width-6"},e.createElement("span",{className:"ellipsis",title:s.login},s.login)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:s.email},s.email)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:s.name},s.name)),e.createElement("td",{className:"width-1"},s.lastSeenAtAge),e.createElement("td",{className:"width-8"},c.Vt.licensedAccessControlEnabled()?e.createElement(I.R,{userId:s.userId,orgId:P,roleOptions:S,basicRole:s.role,onBasicRoleChange:g=>T(g,s),basicRoleDisabled:E}):e.createElement(R.A,{"aria-label":"Role",value:s.role,disabled:E,onChange:g=>T(g,s)})),e.createElement("td",{className:"width-1 text-center"},s.isDisabled&&e.createElement("span",{className:"label label-tag label-tag--gray"},"Disabled")),e.createElement("td",{className:"width-1"},Array.isArray(s.authLabels)&&s.authLabels.length>0&&e.createElement(A.e,{label:s.authLabels[0],removeIcon:!1,count:0})),c.Vt.hasPermissionInMetadata(i.AccessControlAction.OrgUsersRemove,s)&&e.createElement("td",{className:"text-right"},e.createElement(h.zx,{size:"sm",variant:"destructive",onClick:()=>{U(s)},icon:"times","aria-label":"Delete user"})))}))),Boolean(m)&&e.createElement(D.s,{body:`Are you sure you want to delete user ${m?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{U(null)},isOpen:!0,onConfirm:()=>{m&&(B(m),U(null))}}))}}}]);

//# sourceMappingURL=UsersListPage.b4bd1e0151cd940525f5.js.map