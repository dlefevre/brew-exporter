"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5295],{40514:(k,m,n)=>{n.r(m),n.d(m,{SnapshotListPage:()=>h,default:()=>p});var e=n(76687),i=n(78426),y=n(53400),d=n(59356),f=n(87382),u=n(29480),v=n(82461);function S(){return(0,d.i)().get("/api/dashboard/snapshots").then(l=>l.map(a=>({...a,url:`/dashboard/snapshot/${a.key}`})))}const g=()=>{const[l,a]=(0,e.useState)([]),[s,c]=(0,e.useState)(),x=f.E1.getLocation().pathname,E=window.location.href,b=E.substring(0,E.indexOf(x));(0,y.Z)(async()=>{const t=await S();a(t)},[a]);const C=(0,e.useCallback)(async t=>{const r=l.filter(o=>o.key!==t.key);a(r),await(0,d.i)().delete(`/api/snapshots/${t.key}`).catch(()=>{a(l)})},[l]);return e.createElement("div",null,e.createElement("table",{className:"filter-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement("strong",null,"Name")),e.createElement("th",null,e.createElement("strong",null,"Snapshot url")),e.createElement("th",{style:{width:"70px"}}),e.createElement("th",{style:{width:"30px"}}),e.createElement("th",{style:{width:"25px"}}))),e.createElement("tbody",null,l.map(t=>{const r=t.externalUrl||t.url,o=t.externalUrl||`${b}${t.url}`;return e.createElement("tr",{key:t.key},e.createElement("td",null,e.createElement("a",{href:r},t.name)),e.createElement("td",null,e.createElement("a",{href:r},o)),e.createElement("td",null,t.external&&e.createElement("span",{className:"query-keyword"},"External")),e.createElement("td",{className:"text-center"},e.createElement(u.Qj,{href:r,variant:"secondary",size:"sm",icon:"eye"},"View")),e.createElement("td",{className:"text-right"},e.createElement(u.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>c(t)})))}))),e.createElement(v.s,{isOpen:!!s,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${s?.name}'?`,confirmText:"Delete",onDismiss:()=>c(void 0),onConfirm:()=>{C(s),c(void 0)}}))},h=({})=>e.createElement(i.T,{navId:"dashboards/snapshots"},e.createElement(i.T.Contents,null,e.createElement(g,null))),p=h}}]);

//# sourceMappingURL=SnapshotListPage.abf450ae8e19dbe4020f.js.map