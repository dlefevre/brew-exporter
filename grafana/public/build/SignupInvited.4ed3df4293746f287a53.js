"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7429],{34362:(_,i,a)=>{a.d(i,{Yb:()=>o,d5:()=>r});var e=a(60379);const o=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function s(){const l=e.v.licenseInfo?.trialExpiry;return!!(l&&l>0)}const r=()=>s()&&e.v.featureToggles.featureHighlights},27084:(_,i,a)=>{a.r(i),a.d(i,{SignupInvitedPage:()=>c,default:()=>D});var e=a(76687),o=a(28476),s=a(59356),r=a(80370),l=a(83233),m=a(38753),g=a(29480),d=a(78426),v=a(93882),P=a(14230),p=a(34362);const M={main:{icon:"grafana",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},c=({match:O})=>{const E=O.params.code,[u,f]=(0,e.useState)(),[h,I]=(0,e.useState)(),[A,T]=(0,e.useState)();(0,o.Z)(async()=>{const n=await(0,s.i)().get(`/api/user/invite/${E}`);f({email:n.email,name:n.name,username:n.email}),I(n.name||n.email||n.username),T(n.invitedBy)},[E]);const C=async n=>{await(0,s.i)().post("/api/user/invite/complete",{...n,inviteCode:E}),window.location.href=(0,v.iE)().appSubUrl+"/"};return u?e.createElement(d.T,{navModel:M},e.createElement(d.T.Contents,null,e.createElement("h3",{className:"page-sub-heading"},"Hello ",h||"there","."),e.createElement("div",{className:"modal-tagline p-b-2"},e.createElement("em",null,A||"Someone")," has invited you to join Grafana and the organization"," ",e.createElement("span",{className:"highlight-word"},P.Vt.user.orgName),e.createElement("br",null),"Please complete the following and choose a password to accept your invitation and continue:"),e.createElement(r.l,{defaultValues:u,onSubmit:C},({register:n,errors:t})=>e.createElement(e.Fragment,null,e.createElement(l.g,{invalid:!!t.email,error:t.email&&t.email.message,label:"Email"},e.createElement(m.I,{placeholder:"email@example.com",...n("email",{required:"Email is required",pattern:{value:p.Yb,message:"Email is invalid"}})})),e.createElement(l.g,{invalid:!!t.name,error:t.name&&t.name.message,label:"Name"},e.createElement(m.I,{placeholder:"Name (optional)",...n("name")})),e.createElement(l.g,{invalid:!!t.username,error:t.username&&t.username.message,label:"Username"},e.createElement(m.I,{...n("username",{required:"Username is required"}),placeholder:"Username"})),e.createElement(l.g,{invalid:!!t.password,error:t.password&&t.password.message,label:"Password"},e.createElement(m.I,{...n("password",{required:"Password is required"}),type:"password",placeholder:"Password"})),e.createElement(g.zx,{type:"submit"},"Sign up"))))):null},D=c}}]);

//# sourceMappingURL=SignupInvited.4ed3df4293746f287a53.js.map