"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6987],{99160:(ot,We,i)=>{i.d(We,{q:()=>Ne});var h=i(5819),W=i(76687),Ke=i(52901);const Ce=10,Ne=({colorPalette:ue,min:xe,max:Fe,display:G,hoverValue:Le,useStopsPercentage:Ge})=>{const[fe,De]=(0,W.useState)([]),[Me,Pe]=(0,W.useState)({isShown:!1,value:0}),[we,Te]=(0,W.useState)(null),qe=(0,Ke.l4)(),Ae=Je(qe,fe);(0,W.useEffect)(()=>{De(g({colorArray:ue,stops:Ce,useStopsPercentage:Ge}))},[ue,Ge]);const _e=Ze=>{const et=Ze.nativeEvent.offsetX,tt=Ze.currentTarget.offsetWidth,ze=Math.floor(et*100/tt+1),Ve=Math.floor((Fe-xe)*ze/100+xe);Pe({isShown:!0,value:Ve}),Te(ze)},Oe=()=>{Pe({isShown:!1,value:0})};return(0,W.useEffect)(()=>{Te(Le==null?null:o((Le-xe)/(Fe-xe)))},[Le,xe,Fe]),W.createElement("div",{className:Ae.scaleWrapper,onMouseMove:_e,onMouseLeave:Oe},W.createElement("div",{className:Ae.scaleGradient},G&&(Me.isShown||Le!==void 0)&&W.createElement("div",{className:Ae.followerContainer},W.createElement("div",{className:Ae.follower,style:{left:`${we}%`}}))),G&&W.createElement("div",{className:Ae.followerContainer},W.createElement("div",{className:Ae.legendValues},W.createElement("span",null,G(xe)),W.createElement("span",null,G(Fe))),we!=null&&(Me.isShown||Le!==void 0)&&W.createElement("span",{className:Ae.hoverValue,style:{left:`${we}%`}},G(Le??Me.value))))},g=({colorArray:ue,stops:xe,useStopsPercentage:Fe=!0})=>{const G=ue.length;if(Fe&&G<=20){const De=1/G*100;let Me=0;const Pe=[];for(const we of ue)Me>0?Pe.push(`${we} ${Me}%`):Pe.push(we),Me+=De,Pe.push(`${we} ${Me}%`);return Pe}const Le=ue[G-1],Ge=Math.ceil(G/xe),fe=new Set;for(let De=0;De<G;De+=Ge)fe.add(ue[De]);return fe.add(Le),[...fe]};function o(ue){return ue>1?100:ue<0?0:ue*100}const Je=(ue,xe)=>({scaleWrapper:h.css`
    width: 100%;
    font-size: 11px;
    opacity: 1;
  `,scaleGradient:h.css`
    background: linear-gradient(90deg, ${xe.join()});
    height: 10px;
    pointer-events: none;
  `,legendValues:h.css`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  `,hoverValue:h.css`
    position: absolute;
    margin-top: -14px;
    padding: 3px 15px;
    background: ${ue.colors.background.primary};
    transform: translateX(-50%);
  `,followerContainer:h.css`
    position: relative;
    pointer-events: none;
    white-space: nowrap;
  `,follower:h.css`
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid ${ue.colors.text.primary};
    margin-top: 5px;
  `})},83054:(ot,We,i)=>{i.d(We,{Ky:()=>be,n:()=>we,nM:()=>ct,nf:()=>$e,vs:()=>_e});var h=i(73441),W=i(86832),Ke=i.n(W),Ce=i(60987),Ne=i(91653),g=i(89674),o=i(45525),Je=i(30393),ue=i(24160),xe=i(51375),Fe=i(83204),G=i(64222),Le=i(34304),Ge=i(5024),fe=i(40018);const De=/^[+-]?inf(?:inity)?$/i,Me=(n,r)=>r.app===Ce.zj.Explore&&(n.meta?.custom?.resultType==="vector"||n.meta?.custom?.resultType==="scalar")?!0:r.targets.find(y=>y.refId===n.refId)?.format==="table",Pe=(n,r)=>r.targets.find(y=>y.refId===n.refId)?.format==="heatmap";function we(n,r,E){const[y,S]=(0,W.partition)(n.data,te=>Me(te,r)),k=qe(y),[$,N]=(0,W.partition)(S,te=>te.meta?.custom?.resultType==="exemplar"),{exemplarTraceIdDestinations:U}=E,T=$.map(te=>{if(U?.length)for(const ke of U){const Be=te.fields.find(oe=>oe.name===ke.name);if(Be){const oe=Oe(ke);Be.config.links=Be.config.links?.length?[...Be.config.links,...oe]:oe}}return{...te,meta:{...te.meta,dataTopic:Ne.w5.Annotations}}}),[Q,ve]=(0,W.partition)(N,te=>Pe(te,r));Q.forEach(te=>{if(te.name==null){let ke=te.fields.find(Be=>Be.name==="Value");if(ke){let Be=ke.labels?.le;Be&&(te.name=Be,ke.config.displayNameFromDS=Be)}}});const _=(0,W.groupBy)(Q,te=>te.refId);let re=[];for(const te in _){const ke=_[te],Be=(0,W.groupBy)(ke,oe=>{const Ie=oe.fields.find(He=>He.name===g.M5);if(Ie?.labels&&Te in Ie.labels){const{le:He,...C}=Ie?.labels;return Object.values(C).join()}return Object.values(Ie?.labels??[]).join()});(0,W.forOwn)(Be,(oe,Ie)=>{const He=oe.sort($e);re.push(nt(at(He)))})}const Ee=ve.map(te=>({...te,meta:{...te.meta,preferredVisualisationType:"graph"}})),Ye=(0,W.flatten)(re);return{...n,data:[...Ee,...k,...Ye,...T]}}const Te="le";function qe(n){if(n.length===0||n.length===1&&n[0].length===0)return n;const r=(0,W.groupBy)(n,"refId"),E=Object.keys(r);return E.map(S=>{const k=Ae(E.length,S),$=je({data:[],valueName:k}),N=Ve([]),U=[];r[S].forEach(Q=>{const _=Q.fields[1]?.labels??{};Object.keys(_).sort().forEach(re=>{if(!U.some(Ee=>Ee.name===re)){const Ee=re===Te;U.push({name:re,config:{filterable:!0},type:Ee?g.fS.number:g.fS.string,values:new o.G})}})}),r[S].forEach(Q=>{const ve=Q.fields[0]?.values??new o.G,_=Q.fields[1]?.values??new o.G;ve.toArray().forEach(re=>N.values.add(re)),_.toArray().forEach(re=>{$.values.add(be(re));const Ee=Q.fields[1].labels??{};U.forEach(Ye=>Ye.values.add(ze(Ee,Ye.name)))})});const T=[N,...U,$];return{refId:S,fields:T,meta:{...n[0].meta,preferredVisualisationType:"rawPrometheus"},length:N.values.length}})}function Ae(n,r=""){return n>1?`Value #${r}`:"Value"}function _e(n,r){const E={format:r.target.format,step:r.query.step,legendFormat:r.target.legendFormat,start:r.query.start,end:r.query.end,query:r.query.expr,responseListLength:r.responseListLength,scopedVars:r.scopedVars,refId:r.target.refId,valueWithRefId:r.target.valueWithRefId,meta:{preferredVisualisationType:r.query.instant?"rawPrometheus":"graph"}},y=n.data.data;if((0,fe.WS)(y)){const k=[];y.forEach(U=>{const T=U.exemplars.map(Q=>({[g.Ls]:Q.timestamp*1e3,[g.M5]:Q.value,...Q.labels,...U.seriesLabels}));k.push(...T)});const $=Ze(k,E),N=new Je.i($);if(N.meta={dataTopic:Ne.w5.Annotations},r.exemplarTraceIdDestinations?.length)for(const U of r.exemplarTraceIdDestinations){const T=N.fields.find(Q=>Q.name===U.name);if(T){const Q=Oe(U);T.config.links=T.config.links?.length?[...T.config.links,...Q]:Q}}return[N]}if(!y?.result)return[];if(y.resultType==="scalar")return[{meta:E.meta,refId:E.refId,length:1,fields:[Ve([y.result]),je({data:[y.result]})]}];if(E.format==="table")return[tt(y.result,E)];const S=[];return y.result.forEach(k=>S.push(et(k,E))),E.format==="heatmap"?nt(at(S.sort($e))):S}function Oe(n){const r=[];if(n.datasourceUid){const y=(0,G.F)().getInstanceSettings(n.datasourceUid);y&&r.push({title:n.urlDisplayLabel||`Query with ${y?.name}`,url:"",internal:{query:{query:"${__value.raw}",queryType:"traceql"},datasourceUid:n.datasourceUid,datasourceName:y?.name??"Data source not found"}})}return n.url&&r.push({title:n.urlDisplayLabel||`Go to ${n.url}`,url:n.url,targetBlank:!0}),r}function Ze(n,r){const E=r.step||15,y={},S=[];for(const U of n){const T=String(Math.floor(U[g.Ls]/1e3/E)*E*1e3);y[T]||(y[T]=[]),y[T].push(U),S.push(U[g.M5])}const k=(0,h.deviation)(S),$=Object.keys(y).sort(),N=[];for(const U of $){const T=y[U];if(T.length===1)N.push(T[0]);else{const ve=T.map(_=>_[g.M5]).sort(h.descending).reduce((_,re)=>{if(_.length===0)_.push(re);else{const Ee=_[_.length-1];k&&Ee-re>=2*k&&_.push(re)}return _},[]);N.push(...ve.map(_=>T.find(re=>re[g.M5]===_)))}}return N}function et(n,r){const{name:E,labels:y}=it(n.metric,r),S=[];if((0,fe.el)(n)){const k=r.step?r.step*1e3:NaN;let $=r.start*1e3;const N=[];for(const T of n.values){let Q=be(T[1]);isNaN(Q)&&(Q=null);const ve=T[0]*1e3;for(let _=$;_<ve;_+=k)N.push([_,null]);$=ve+k,N.push([ve,Q])}const U=r.end*1e3;for(let T=$;T<=U;T+=k)N.push([T,null]);S.push(Ve(N,!0)),S.push(je({data:N,parseValue:!1,labels:y,displayNameFromDS:E}))}else S.push(Ve([n.value])),S.push(je({data:[n.value],labels:y,displayNameFromDS:E}));return{meta:r.meta,refId:r.refId,length:S[0].values.length,fields:S,name:E}}function tt(n,r){if(!n||n.length===0)return{meta:r.meta,refId:r.refId,length:0,fields:[]};const E=r.responseListLength>1||r.valueWithRefId?`Value #${r.refId}`:"Value",y=Ve([]),S=Object.keys(n.reduce(($,N)=>({...$,...N.metric}),{})).sort().map($=>({name:$,config:{filterable:!0},type:$===Te?g.fS.number:g.fS.string,values:new o.G})),k=je({data:[],valueName:E});return n.forEach($=>{(0,fe.el)($)?$.values.forEach(N=>{y.values.add(N[0]*1e3),S.forEach(U=>U.values.add(ze($.metric,U.name))),k.values.add(be(N[1]))}):(y.values.add($.value[0]*1e3),S.forEach(N=>N.values.add(ze($.metric,N.name))),k.values.add(be($.value[1])))}),{meta:r.meta,refId:r.refId,length:y.values.length,fields:[y,...S,k]}}function ze(n,r){return n.hasOwnProperty(r)?r===Te?be(n[r]):n[r]:""}function Ve(n,r=!1){return{name:g.Ls,type:g.fS.time,config:{},values:new o.G(n.map(E=>r?E[0]:E[0]*1e3))}}function je({data:n,valueName:r=g.M5,parseValue:E=!0,labels:y,displayNameFromDS:S}){return{name:r,type:g.fS.number,display:(0,ue.U_)(),config:{displayNameFromDS:S},labels:y,values:new o.G(n.map(k=>E?be(k[1]):k[1]))}}function it(n,r){if(r?.legendFormat)return{name:(0,Ge.W)((0,Le.J)().replace(r.legendFormat,r?.scopedVars),n),labels:n};const{__name__:E,...y}=n,S=(0,xe.aA)(y);let k=`${E??""}${S}`;return k||(k=r.query),{name:k,labels:y}}function ct(n){const r=n.__name__||"";delete n.__name__;const E=Object.entries(n).map(y=>`${y[0]}="${y[1]}"`).join(",");return`${r}{${E}}`}function nt(n){if(n.length===0)return[];const r=n[0].fields.find(y=>y.type===g.fS.time),E=n.map(y=>{let S=y.fields.find(k=>k.type===g.fS.number);return{...S,name:S.config.displayNameFromDS}});return[{...n[0],meta:{...n[0].meta,type:Fe.P.HeatmapRows},fields:[r,...E]}]}function at(n){for(let r=n.length-1;r>0;r--){const E=n[r].fields.find(S=>S.name===g.M5),y=n[r-1].fields.find(S=>S.name===g.M5);if(!E||!y)throw new Error("Prometheus heatmap transform error: data should be a time series");for(let S=0;S<E.values.length;S++){const k=y.values.get(S)||[0];E.values.toArray()[S]-=k}}return n}function $e(n,r){let E,y;try{E=be(n.name??n.fields[1].name),y=be(r.name??r.fields[1].name)}catch(S){return console.error(S),0}return E>y?1:E<y?-1:0}function be(n){return De.test(n)?n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY:parseFloat(n)}},40018:(ot,We,i)=>{i.d(We,{WS:()=>Ke,el:()=>W,jo:()=>Ne,pD:()=>Ce,x3:()=>h});var h=(g=>(g.Low="Low",g.Medium="Medium",g.High="High",g.None="None",g))(h||{});function W(g){return"values"in g}function Ke(g){return g==null||!Array.isArray(g)?!1:g.length?"exemplars"in g[0]:!1}var Ce=(g=>(g.Auto="__auto",g.Verbose="__verbose",g.Custom="__custom",g))(Ce||{}),Ne=(g=>(g[g.LabelNames=0]="LabelNames",g[g.LabelValues=1]="LabelValues",g[g.MetricNames=2]="MetricNames",g[g.VarQueryResult=3]="VarQueryResult",g[g.SeriesQuery=4]="SeriesQuery",g))(Ne||{})},93434:(ot,We,i)=>{i.r(We),i.d(We,{plugin:()=>Et});var h=i(76687),W=i(27222),Ke=i(94069),Ce=i(89674),Ne=i(52676),g=i(60379),o=i(23361),Je=i(73821),ue=i(58205),xe=i(99160),Fe=i(28046),G=i(69790),Le=i(5819),Ge=i(22496),fe=i(83204),De=i(63010),Me=i(52901),Pe=i(47722),we=i(80791),Te=i(56998),qe=i(29353),Ae=i(60047),_e=i(55485),Oe=i(45738),Ze=i(81736),et=i(68127),tt=i(29480),ze=i(15858),Ve=i(22141);const je=e=>e.hover.seriesIdx===2?h.createElement(Ve.H,{data:e.data.exemplars,rowIndex:e.hover.dataIdx,header:"Exemplar"}):h.createElement(it,{...e}),it=({data:e,hover:l,showHistogram:a})=>{const c=l.dataIdx,t=e.heatmap?.fields[0],s=e.heatmap?.fields[1],u=e.heatmap?.fields[2],f=d=>{if(t?.display)return(0,Oe.zc)(t.display(d));if(t?.type===Ce.fS.time){const v="YYYY-MM-DD HH:mm:ss";return(0,ze.h4)().getCurrent()?.formatDate(d,v)}return`${d}`},I=t?.values.toArray(),M=s?.values.toArray(),D=u?.values.toArray(),Y=(0,G.d8)(e.heatmap),O=s?.display?d=>(0,Oe.zc)(s.display(d)):d=>`${d}`,de=c%e.yBucketCount;let J,ce,R;if(Y.yOrdinalDisplay){const d=e.yLayout===o.kv.le?de-1:de,v=e.yLayout===o.kv.le?de:de+1;J=d<0?Y.yMinDisplay:`${Y.yOrdinalDisplay[d]}`,ce=`${Y.yOrdinalDisplay[v]}`,(!Y.yOrdinalLabel||Number.isNaN(+Y.yOrdinalLabel[0]))&&(R=e.yLayout===o.kv.le?ce:J)}else{const d=M?.[de];if(e.yLayout===o.kv.le)if(ce=`${d}`,e.yLog){let X=(e.yLog===2?Math.log2:Math.log10)(d)-1/e.yLogSplit;J=`${e.yLog**X}`}else J=`${d-e.yBucketSize}`;else if(J=`${d}`,e.yLog){let X=(e.yLog===2?Math.log2:Math.log10)(d)+1/e.yLogSplit;ce=`${e.yLog**X}`}else ce=`${d+e.yBucketSize}`}let P,F;e.xLayout===o.kv.le?(F=I?.[c],P=F-e.xBucketSize):(P=I?.[c],F=P+e.xBucketSize);const A=D?.[c],ne=e.heatmap?.fields.filter(d=>!Boolean(d.config.custom?.hideFrom?.tooltip)),z=[],ae=new Set;for(const d of ne??[])if(d.getLinks){const v=d.values.get(c),X=d.display?d.display(v):{text:`${v}`,numeric:+v};d.getLinks({calculatedValue:X,valueRowIndex:c}).forEach(ee=>{const q=`${ee.title}/${ee.href}`;ae.has(q)||(z.push(ee),ae.add(q))})}let H=(0,h.useRef)(null),Z=150,K=50,se=Math.round(Z*devicePixelRatio),w=Math.round(K*devicePixelRatio);(0,h.useEffect)(()=>{if(a){let d=H.current?.getContext("2d");if(d&&I&&M&&D){let v=c;for(;I[v--]===I[c];);v++;let X=v+e.yBucketCount,ee=0,q=v;for(;q<X;){let b=D[q];ee=Math.max(ee,b),q++}let ie=new Path2D,he=new Path2D;q=v;let pe=0;for(;q<X;){let b=D[q];if(b>0){let Se=b/ee,Re=pe/(e.yBucketCount+1);(q===c?ie:he).rect(Math.round(se*Re),Math.round(w*(1-Se)),Math.round(se/e.yBucketCount),Math.round(w*Se))}q++,pe++}d.clearRect(0,0,se,w),d.fillStyle="#ffffff80",d.fill(he),d.fillStyle="#ff000080",d.fill(ie)}}},[c]);const[ge]=(0,h.useState)(()=>e.heatmap?.meta?.type===fe.P.HeatmapCells&&!(0,G.qJ)(e.heatmap));if(ge)return h.createElement("div",null,h.createElement(Ve.H,{data:e.heatmap,rowIndex:c}));const ye=()=>{if(R)return h.createElement("div",null,"Name: ",R);switch(e.yLayout){case o.kv.unknown:return h.createElement("div",null,O(J))}return h.createElement("div",null,"Bucket: ",O(J)," - ",O(ce))};return h.createElement(h.Fragment,null,h.createElement("div",null,h.createElement("div",null,f(P)),e.xLayout!==o.kv.unknown&&h.createElement("div",null,f(F))),a&&h.createElement("canvas",{width:se,height:w,ref:H,style:{width:se+"px",height:w+"px"}}),h.createElement("div",null,ye(),h.createElement("div",null,(0,Ze.C)(u,e.heatmap),": ",e.display(A))),z.length>0&&h.createElement(et.wc,null,z.map((d,v)=>h.createElement(tt.Qj,{key:v,icon:"external-link-alt",target:d.target,href:d.href,onClick:d.onClick,fill:"text",style:{width:"100%"}},d.title))))};var ct=i(69582),nt=i(24160),at=i(83054),$e=i(56048),be=i(83030),n=i(20057),r=i(73489),E=i(63708),y=i(31956);function S(e){const{dataRef:l,theme:a,eventBus:c,onhover:t,onclick:s,onzoom:u,isToolTipOpen:f,timeZone:I,getTimeRange:M,palette:D,cellGap:Y,hideLE:O,hideGE:de,yAxisConfig:J,ySizeDivisor:ce,sync:R}=e,P="x";let F="time",A=!0;l.current?.heatmap?.fields[0].type!==Ce.fS.time&&(F=l.current?.heatmap?.fields[0].config?.unit??"x",A=!1);const ne=devicePixelRatio;let z=l.current?.heatmap?.meta?.type;const ae=a.visualization.getColorByName(e.exemplarColor);let H,Z,K=new E.U(I),se;K.addHook("init",m=>{m.root.querySelectorAll(".u-cursor-pt").forEach(x=>{Object.assign(x.style,{borderRadius:"0",border:"1px solid white",background:"transparent"})}),s&&m.over.addEventListener("mouseup",x=>{m.cursor.drag._x||m.cursor.drag._y||s(x)},!0)}),u&&K.addHook("setSelect",m=>{u({xMin:m.posToVal(m.select.left,P),xMax:m.posToVal(m.select.left+m.select.width,P)}),m.setSelect({left:0,top:0,width:0,height:0},!1)}),A&&K.addHook("setData",m=>{let{min:x,max:p}=m.scales.x,B=M().from.valueOf(),L=M().to.valueOf();(x!==B||p!==L)&&queueMicrotask(()=>{m.setScale(P,{min:B,max:L})})}),K.addHook("syncRect",(m,x)=>{se=x});const w={point:{[F]:null},data:l.current?.heatmap},ge=new be.es(w);let ye;t&&K.addHook("setLegend",m=>{if(m.cursor.idxs!=null)for(let x=0;x<m.cursor.idxs.length;x++){const p=m.cursor.idxs[x];if(p!=null){const{left:B,top:L}=m.cursor;w.rowIndex=p,w.point[F]=m.posToVal(B,P),c.publish(ge),f.current||(ye&&(clearTimeout(ye),ye=0),t({seriesIdx:x,dataIdx:p,pageX:se.left+B,pageY:se.top+L}));return}}f.current||ye||(ye=setTimeout(()=>{t(null),w.rowIndex=void 0,w.point[F]=null,c.publish(ge)},100))}),K.addHook("drawClear",m=>{H=H||new y.lW(0,0,m.bbox.width,m.bbox.height),H.clear(),m.series.forEach((x,p)=>{p>0&&(x._paths=null)})}),K.setMode(2),K.addScale({scaleKey:P,isTime:A,orientation:o.wN.Horizontal,direction:o.bQ.Right,range:(m,x,p)=>{if(A)return[M().from.valueOf(),M().to.valueOf()];if(l.current?.xLayout===o.kv.le)return[x-l.current?.xBucketSize,p];if(l.current?.xLayout===o.kv.ge)return[x,p+l.current?.xBucketSize];{let B=l.current?.xBucketSize/2;return[x-B,p+B]}}});let d;if(!A){d=[];for(let m=0;m<10;m++)d.push(m*l.current?.xBucketSize)}K.addAxis({scaleKey:P,placement:o.LB.Bottom,incrs:d,isTime:A,theme:a,timeZone:I});const v=l.current?.heatmap?.fields[1];if(!v)return K;const ee=v.config?.custom?.scaleDistribution??{type:o.wf.Linear},q=Boolean(J.reverse),ie=z===fe.P.HeatmapCells&&!(0,G.qJ)(l.current?.heatmap),he=ee.type!==o.wf.Linear||ie,pe=(0,G.d8)(l.current?.heatmap).yOrdinalDisplay!=null,b="y_"+(Math.random()+1).toString(36).substring(7);K.addScale({scaleKey:b,isTime:!1,orientation:o.wN.Vertical,direction:q?o.bQ.Down:o.bQ.Up,distribution:he?o.wf.Log:o.wf.Linear,log:ee.log??2,range:ie?(m,x,p)=>{let B,L;if([B,L]=he?$e.Z.rangeLog(x,p,ee.log??2,!0):[x,p],he&&!pe){let V=m.scales[b].log,le=V===2?Math.log2:Math.log10,{min:j,max:Ue}=J;if(j!=null&&j>0){let Qe=le(j);B=V**(0,n.mB)(Qe,1)}if(Ue!=null&&Ue>0){let Qe=le(Ue);L=V**(0,n.UO)(Qe,1)}}return[B,L]}:(m,x,p)=>{let B=x,L=p,{min:V,max:le}=J;if(he){let j=m.scales[b].log,Ue=!1,Qe=!1,rt=j===2?Math.log2:Math.log10;if(ce!==1){let Xe=rt(x),mt=rt(p);Number.isInteger(Xe)||(B=j**(0,n.mB)(Xe,1),Ue=!0),Number.isInteger(mt)||(L=j**(0,n.UO)(mt,1),Qe=!0)}if(l.current?.yLayout===o.kv.le?Ue||(B/=j):l.current?.yLayout===o.kv.ge?Qe||(L*=j):(B/=j/2,L*=j/2),!pe){if(V!=null&&V>0){let Xe=rt(V);B=j**(0,n.mB)(Xe,1)}if(le!=null&&le>0){let Xe=rt(le);L=j**(0,n.UO)(Xe,1)}}}else{let j=l.current?.yBucketSize;j===0&&(j=1),j&&(l.current?.yLayout===o.kv.le?B-=j:l.current?.yLayout===o.kv.ge?L+=j:(B-=j/2,L+=j/2)),pe||(B=V??B,L=le??L)}return[B,L]}});const Se=v.display??(0,Oe.Cf)("short");K.addAxis({scaleKey:b,show:J.axisPlacement!==o.LB.Hidden,placement:J.axisPlacement||o.LB.Left,size:J.axisWidth||null,label:J.axisLabel,theme:a,formatValue:(m,x)=>(0,Oe.zc)(Se(m,x)),splits:pe?m=>{const x=(0,G.d8)(l.current?.heatmap);if(!x.yOrdinalDisplay)return[0,1];let p=x.yOrdinalDisplay.map((B,L)=>L);switch(l.current?.yLayout){case o.kv.le:p.unshift(-1);break;case o.kv.ge:p.push(p.length);break}if(m.height<60)p=[p[0],p[p.length-1]];else for(;p.length>3&&(m.height-15)/p.length<10;)p=p.filter((B,L)=>L%2===0);return p}:void 0,values:pe?(m,x)=>{const p=(0,G.d8)(l.current?.heatmap);return p.yOrdinalDisplay?x.map(B=>B<0?p.yMinDisplay??"":p.yOrdinalDisplay[B]??""):x}:void 0});const Re=ie?U:$;K.addSeries({facets:[{scale:P,auto:!0,sorted:1},{scale:b,auto:!0}],pathBuilder:Re({each:(m,x,p,B,L,V,le)=>{H.add({x:B-m.bbox.left,y:L-m.bbox.top,w:V,h:le,sidx:x,didx:p})},gap:Y,hideLE:O,hideGE:de,xAlign:l.current?.xLayout===o.kv.le?-1:l.current?.xLayout===o.kv.ge?1:0,yAlign:(l.current?.yLayout===o.kv.le?-1:l.current?.yLayout===o.kv.ge?1:0)*(q?-1:1),ySizeDivisor:ce,disp:{fill:{values:(m,x)=>{let p=ie?3:2;return Q(m.data[x][p],D,l.current?.minValue,l.current?.maxValue)},index:D}}}),theme:a,scaleKey:""}),K.addSeries({facets:[{scale:P,auto:!0,sorted:1},{scale:b,auto:!0}],pathBuilder:N({each:(m,x,p,B,L,V,le)=>{H.add({x:B-m.bbox.left,y:L-m.bbox.top,w:V,h:le,sidx:x,didx:p})}},ae),theme:a,scaleKey:""});const me={drag:{x:!0,y:!1,setScale:!1},dataIdx:(m,x)=>{if(x===1){Z=null;let p=m.cursor.left*ne,B=m.cursor.top*ne;H.get(p,B,1,1,L=>{(0,y.Pn)(p,B,L.x,L.y,L.x+L.w,L.y+L.h)&&(Z=L)})}return Z&&x===Z.sidx?Z.didx:null},points:{fill:"rgba(255,255,255, 0.3)",bbox:(m,x)=>{let p=Z&&x===Z.sidx;return{left:p?Z.x/ne:-10,top:p?Z.y/ne:-10,width:p?Z.w/ne:0,height:p?Z.h/ne:0}}}};return R&&R()!==r.m.Off&&(me.sync={key:"__global_",scales:[P,b],filters:{pub:(m,x,p,B,L,V,le)=>(p<0?(w.point[F]=null,c.publish(new be.xH)):(w.point[F]=x.posToVal(p,P),c.publish(ge)),!0)}},K.setSync()),K.setCursor(me),K}const k=4;function $(e){const{disp:l,each:a,gap:c=1,hideLE:t=-1/0,hideGE:s=1/0,xAlign:u=1,yAlign:f=1,ySizeDivisor:I=1}=e,M=devicePixelRatio,D=c>=k?Math.round:O=>O,Y=Math.round(c*M);return(O,de)=>($e.Z.orient(O,de,(J,ce,R,P,F,A,ne,z,ae,H,Z,K,se,w,ge)=>{let ye=O.data[de];const d=ye[0],v=ye[1],X=ye[2],ee=d.length;let q=l.fill.values(O,de),ie=l.fill.index??[...new Set(q)],he=ie.map(V=>new Path2D),pe=ee-v.lastIndexOf(v[0]),b=ee/pe,Se=v[1]-v[0]||F.max-F.min,Re=d[pe]-d[0],me,m;P.distr===3?me=Math.abs(A(d[0]*P.log,P,H,z)-A(d[0],P,H,z)):me=Math.abs(A(Re,P,H,z)-A(0,P,H,z)),F.distr===3?m=Math.abs(ne(v[0]*F.log,F,Z,ae)-ne(v[0],F,Z,ae))/I:m=Math.abs(ne(Se,F,Z,ae)-ne(0,F,Z,ae))/I,me=Math.max(1,D(me-Y)),m=Math.max(1,D(m-Y));let x=u===-1?-me:u===0?-me/2:0,p=f===1?-m:f===0?-m/2:0,B=v.slice(0,pe).map(V=>D(ne(V,F,Z,ae)+p)),L=Array.from({length:b},(V,le)=>D(A(d[le*pe],P,H,z)+x));for(let V=0;V<ee;V++)if(X[V]>t&&X[V]<s){let le=L[~~(V/pe)],j=B[V%pe],Ue=he[q[V]];w(Ue,le,j,me,m),a(O,1,V,le,j,me,m)}return O.ctx.save(),O.ctx.rect(O.bbox.left,O.bbox.top,O.bbox.width,O.bbox.height),O.ctx.clip(),he.forEach((V,le)=>{O.ctx.fillStyle=ie[le],O.ctx.fill(V)}),O.ctx.restore(),null}),null)}function N(e,l){return(a,c)=>($e.Z.orient(a,c,(t,s,u,f,I,M,D,Y,O,de,J,ce,R,P,F)=>{let A=new Path2D,ne=[A],z=[l??"rgba(255,0,255,0.7)"];for(let ae=0;ae<s.length;ae++){let H=u[ae];H-=.5;let Z=Math.round(Math.random())*2-1;H+=Z*.5*Math.random();let K=M(s[ae],f,de,Y),se=D(H,I,J,O),w=8,ge=8;P(A,K-w/2,se-ge/2,w,ge),e.each(a,c,ae,K-w/2,se-ge/2,w,ge)}a.ctx.save(),a.ctx.rect(a.bbox.left,a.bbox.top,a.bbox.width,a.bbox.height),a.ctx.clip(),ne.forEach((ae,H)=>{a.ctx.fillStyle=z[H],a.ctx.fill(ae)}),a.ctx.restore()}),null)}function U(e){const{disp:l,each:a,gap:c=1,hideLE:t=-1/0,hideGE:s=1/0}=e,u=devicePixelRatio,f=c>=k?Math.round:M=>M,I=Math.round(c*u);return(M,D)=>($e.Z.orient(M,D,(Y,O,de,J,ce,R,P,F,A,ne,z,ae,H,Z,K)=>{let se=M.data[D];const w=se[0],ge=se[1],ye=se[2],d=se[3],v=w.length;let X=l.fill.values(M,D),ee=l.fill.index??[...new Set(X)],q=ee.map(b=>new Path2D),ie=new Map,he=new Map;for(let b=0;b<w.length;b++){let Se=w[b],Re=ge[b],me=ye[b];ie.has(Se)||ie.set(Se,f(R(Se,J,ne,F))),he.has(Re)||he.set(Re,f(P(Re,ce,z,A))),he.has(me)||he.set(me,f(P(me,ce,z,A)))}let pe=ie.get(w.find(b=>b!==w[0]))-ie.get(w[0]);for(let b=0;b<v;b++){if(d[b]<=t||d[b]>=s)continue;let Se=w[b],Re=ge[b],me=ye[b],m=ie.get(Se),x=he.get(Re),p=he.get(me),B=pe,L=x-p;B=Math.max(1,B-I),L=Math.max(1,L-I);let V=m,le=x,j=q[X[b]];Z(j,V,le,B,L),a(M,1,b,V,le,B,L)}M.ctx.save(),M.ctx.rect(M.bbox.left,M.bbox.top,M.bbox.width,M.bbox.height),M.ctx.clip(),q.forEach((b,Se)=>{M.ctx.fillStyle=ee[Se],M.ctx.fill(b)}),M.ctx.restore()}),null)}const T=(e,l,a,c=-1/0,t=1/0)=>{if(l==null){l=1/0;for(let s=0;s<e.length;s++)e[s]>c&&e[s]<t&&(l=Math.min(l,e[s]))}if(a==null){a=-1/0;for(let s=0;s<e.length;s++)e[s]>c&&e[s]<t&&(a=Math.max(a,e[s]))}return[l,a]},Q=(e,l,a,c)=>{let t=Math.max(c-a,1),s=l.length,u=Array(e.length);for(let f=0;f<e.length;f++)u[f]=e[f]<a?0:e[f]>c?s-1:Math.min(s-1,Math.floor(s*(e[f]-a)/t));return u};function ve(e,l,a,c){let t=e.series;if(!t?.length)return{};const s=e.annotations?.find(f=>f.name==="exemplar");if(c&&s?.fields.forEach((f,I)=>{s.fields[I].getLinks=c(s,f)}),l.calculate)return re((0,G.xf)(t,l.calculation??{}),s,l,a);let u;for(const f of t)switch(f.meta?.type){case fe.P.HeatmapCells:return(0,G.qJ)(f)?re(f,s,l,a):_(f,s,l,a);case fe.P.HeatmapRows:u=f}return u||(t.length>1?(t.every(I=>!Number.isNaN((0,at.Ky)(I.name??I.fields[1].name)))&&t.sort(at.nf),u=[(0,ct._9)({frames:t})][0]):u=t[0]),re((0,G.Cj)({unit:l.yAxis?.unit,decimals:l.yAxis?.decimals,...l.rowsFrame,frame:u}),s,l,a)}const _=(e,l,a,c)=>{if(e.meta?.type!==fe.P.HeatmapCells||(0,G.qJ)(e))return{warning:"Expected sparse heatmap format",heatmap:e};Ee(e.fields[1],a.yAxis,c);const t=Ee(e.fields[3],a.cellValues,c);let[s,u]=T(e.fields[3].values.toArray(),a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge);return{heatmap:e,minValue:s,maxValue:u,exemplars:l,display:f=>(0,Oe.zc)(t(f))}},re=(e,l,a,c)=>{if(e.meta?.type!==fe.P.HeatmapCells)return{warning:"Expected heatmap scanlines format",heatmap:e};if(e.fields.length<2||e.length<2)return{heatmap:e};const t=(0,G.d8)(e);let s,u,f;for(const z of e.fields)switch(z.name){case"y":u=z.name;case"yMin":case"yMax":{u||(u=z.name),t.yOrdinalDisplay==null&&Ee(z,a.yAxis,c);break}case"x":case"xMin":case"xMax":s=z.name;break;default:z.type===Ce.fS.number&&!f&&(f=z)}if(!u)return{warning:"Missing Y field",heatmap:e};if(!u)return{warning:"Missing X field",heatmap:e};if(!f)return{warning:"Missing value field",heatmap:e};const I=Ee(f,a.cellValues,c),M=e.fields[0].values.toArray(),D=e.fields[1].values.toArray(),Y=M.length;let O=Y-D.lastIndexOf(D[0]),de=Y/O,J=D[1]-D[0],ce=M[O]-M[0],[R,P]=T(f.values.toArray(),a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge),F=a.calculation?.xBuckets,A=a.calculation?.yBuckets;return{heatmap:e,exemplars:l?.length?l:void 0,xBucketSize:ce,yBucketSize:J,xBucketCount:de,yBucketCount:O,yLog:A?.scale?.log??0,xLog:F?.scale?.log??0,xLogSplit:F?.scale?.log?+(F?.value??"1"):1,yLogSplit:A?.scale?.log?+(A?.value??"1"):1,minValue:R,maxValue:P,xLayout:s==="xMax"?o.kv.le:s==="xMin"?o.kv.ge:o.kv.unknown,yLayout:u==="yMax"?o.kv.le:u==="yMin"?o.kv.ge:o.kv.unknown,display:z=>(0,Oe.zc)(I(z))}};function Ee(e,l,a){if(l?.unit?.length||l?.decimals!=null){const{unit:c,decimals:t}=l;e.display=void 0,e.config={...e.config},c?.length&&(e.config.unit=c),t!=null&&(e.config.decimals=t)}return e.display||(e.display=(0,nt.U_)({field:e,theme:a})),e.display}var Ye=i(73441),te=i(40041),ke=i(63374);const Be=Object.freeze([0,0]);var oe=(e=>(e.Opacity="opacity",e.Scheme="scheme",e))(oe||{}),Ie=(e=>(e.Exponential="exponential",e.Linear="linear",e))(Ie||{});const He={calculate:!1,cellGap:1,cellValues:{},color:{scheme:"Oranges",fill:"dark-orange",reverse:!1,exponent:.5,steps:64},exemplars:{color:"rgba(255,0,255,0.7)"},filterValues:{le:1e-9},legend:{show:!0},showValue:o.Jp.Auto,tooltip:{show:!0,yHistogram:!1}},C={...He,color:{...He.color,mode:oe.Scheme,scale:Ie.Exponential},yAxis:{...He.yAxis,axisPlacement:o.LB.Left},rowsFrame:{...He.rowsFrame,layout:o.kv.auto}},lt=[{name:"BrBG",invert:"always"},{name:"PiYG",invert:"always"},{name:"PRGn",invert:"always"},{name:"PuOr",invert:"always"},{name:"RdBu",invert:"always"},{name:"RdGy",invert:"always"},{name:"RdYlBu",invert:"always"},{name:"RdYlGn",invert:"always"},{name:"Spectral",invert:"always"},{name:"Blues",invert:"dark"},{name:"Greens",invert:"dark"},{name:"Greys",invert:"dark"},{name:"Oranges",invert:"dark"},{name:"Purples",invert:"dark"},{name:"Reds",invert:"dark"},{name:"Turbo",invert:"light"},{name:"Cividis",invert:"light"},{name:"Viridis",invert:"light"},{name:"Magma",invert:"light"},{name:"Inferno",invert:"light"},{name:"Plasma",invert:"light"},{name:"Warm",invert:"light"},{name:"Cool",invert:"light"},{name:"Cubehelix",invert:"light",name2:"CubehelixDefault"},{name:"BuGn",invert:"dark"},{name:"BuPu",invert:"dark"},{name:"GnBu",invert:"dark"},{name:"OrRd",invert:"dark"},{name:"PuBuGn",invert:"dark"},{name:"PuBu",invert:"dark"},{name:"PuRd",invert:"dark"},{name:"RdPu",invert:"dark"},{name:"YlGnBu",invert:"dark"},{name:"YlGn",invert:"dark"},{name:"YlOrBr",invert:"dark"},{name:"YlOrRd",invert:"dark"},{name:"Rainbow",invert:"always"},{name:"Sinebow",invert:"always"}],ft=lt.find(e=>e.name==="Spectral");function ut(e,l){const a={...C.color,...e},c=[],t=(a.steps??128)-1;if(e.mode===oe.Opacity){const s=(0,ke.Z)(l.visualization.getColorByName(e.fill)).toPercentageRgb(),u=a.scale===Ie.Exponential?Ye.scalePow().exponent(a.exponent).domain([0,1]).range([0,1]):Ye.scaleLinear().domain([0,1]).range([0,1]);for(let f=0;f<=t;f++)s.a=u(f/t),c.push((0,ke.Z)(s).toString("hex8"))}else{const s=lt.find(I=>I.name===a.scheme)??ft;let u="interpolate"+(s.name2??s.name);const f=te[u];for(let I=0;I<=t;I++){let M=f(I/t),D=M.indexOf("rgb")===0?"#"+[...M.matchAll(/\d+/g)].map(Y=>(+Y[0]).toString(16).padStart(2,"0")).join(""):M;c.push(D)}(s.invert==="always"||s.invert==="dark"&&l.isDark||s.invert==="light"&&l.isLight)&&c.reverse(),e.reverse&&c.reverse()}return c}const ht=({data:e,id:l,timeRange:a,timeZone:c,width:t,height:s,options:u,fieldConfig:f,eventBus:I,onChangeTimeRange:M,replaceVariables:D})=>{const Y=(0,Me.l4)(),O=(0,Me.wW)(pt),{sync:de}=(0,Pe.R9)();let J=(0,h.useRef)(a);J.current=a;const ce=(0,h.useCallback)((d,v)=>(0,Ge.oB)(d,v,v.state?.scopedVars??{},D),[D]),R=(0,h.useMemo)(()=>{try{return ve(e,u,Y,ce)}catch(d){return{warning:`${d}`}}},[e,u,Y,ce]),P=(0,h.useMemo)(()=>{let d=[],v=[];const X=(0,G.d8)(R.heatmap);return R.exemplars?.length&&X.yMatchWithLabel&&(d=R.exemplars?.fields[0].values.toArray(),X.yOrdinalDisplay!=null?v=(R.exemplars?.fields.find(ie=>ie.name===X.yMatchWithLabel).values.toArray()).map(ie=>X.yOrdinalLabel?.indexOf(ie)):v=R.exemplars?.fields[1].values.toArray()),[null,R.heatmap?.fields.map(ee=>ee.values.toArray()),[d,v]]},[R.heatmap,R.exemplars]),F=(0,h.useMemo)(()=>ut(u.color,Y),[u.color,Y]),[A,ne]=(0,h.useState)(void 0),[z,ae]=(0,h.useState)(!1),H=(0,h.useRef)(!1),Z=()=>{H.current=!1,ae(!1),se(null)},K=()=>{H.current=!H.current,ae(H.current)},se=(0,h.useCallback)(d=>{ne(d??void 0)},[u,e.structureRev]),w=(0,h.useRef)(R);w.current=R;const ge=(0,h.useMemo)(()=>{const d=w.current?.heatmap?.fields[1].config?.custom?.scaleDistribution;return S({dataRef:w,theme:Y,eventBus:I,onhover:se,onclick:u.tooltip.show?K:null,onzoom:v=>{v.xMax-v.xMin>1&&M({from:v.xMin,to:v.xMax})},isToolTipOpen:H,timeZone:c,getTimeRange:()=>J.current,sync:de,palette:F,cellGap:u.cellGap,hideLE:u.filterValues?.le,hideGE:u.filterValues?.ge,exemplarColor:u.exemplars?.color??"rgba(255,0,255,0.7)",yAxisConfig:u.yAxis,ySizeDivisor:d?.type===o.wf.Log?+(u.calculation?.yBuckets?.value||1):1})},[u,c,e.structureRev]),ye=()=>{if(!R.heatmap||!u.legend.show)return null;let X=w.current?.heatmap?.meta?.type===fe.P.HeatmapCells&&!(0,G.qJ)(w.current?.heatmap)?3:2;const ee=R.heatmap.fields[X];let q;return A&&R.heatmap.fields&&A.seriesIdx===1&&(q=ee.values.get(A.dataIdx)),h.createElement(we.AY.Legend,{placement:"bottom",maxHeight:"20%"},h.createElement("div",{className:O.colorScaleWrapper},h.createElement(xe.q,{hoverValue:q,colorPalette:F,min:w.current.minValue,max:w.current.maxValue,display:R.display})))};return R.warning||!R.heatmap?h.createElement(De.Z,{panelId:l,fieldConfig:f,data:e,needsNumberField:!0,message:R.warning}):h.createElement(h.Fragment,null,h.createElement(we.AY,{width:t,height:s,legend:ye()},(d,v)=>h.createElement(Te.N,{config:ge,data:P,width:d,height:v,timeRange:a})),h.createElement(qe.h_,null,A&&u.tooltip.show&&h.createElement(Ae.S,{position:{x:A.pageX,y:A.pageY},offset:{x:10,y:10},allowPointerEvents:H.current},z&&h.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",paddingBottom:"6px"}},h.createElement(_e.P,{onClick:Z,style:{position:"relative",top:"auto",right:"auto",marginRight:0}})),h.createElement(je,{timeRange:a,data:R,hover:A,showHistogram:u.tooltip.yHistogram}))))},pt=e=>({colorScaleWrapper:Le.css`
    margin-left: 25px;
    padding: 10px 0;
    max-width: 300px;
  `}),gt=e=>Object.keys(e.options).length===0?dt(e,"heatmap",{angular:e},e.fieldConfig):e.options,dt=(e,l,a,c)=>{if(l==="heatmap"&&a.angular){const{fieldConfig:t,options:s}=yt({...a.angular,fieldConfig:c});return e.fieldConfig=t,s}if(l==="heatmap-new"){const{bucketFrame:t,...s}=e.options;return t?{...s,rowsFrame:t}:e.options}return{}};function yt(e){const l={defaults:{},overrides:[]},a=e.dataFormat!=="tsbuckets",c={...C.calculation},t={logBase:1,...e.yAxis};a&&(e.xBucketSize?c.xBuckets={mode:o.kW.Size,value:`${e.xBucketSize}`}:e.xBucketNumber&&(c.xBuckets={mode:o.kW.Count,value:`${e.xBucketNumber}`}),e.yBucketSize?c.yBuckets={mode:o.kW.Size,value:`${e.yBucketSize}`}:e.xBucketNumber&&(c.yBuckets={mode:o.kW.Count,value:`${e.yBucketNumber}`}),t.logBase>1&&(c.yBuckets={mode:o.kW.Count,value:+t.splitFactor>0?`${t.splitFactor}`:void 0,scale:{type:o.wf.Log,log:t.logBase}}));const s=st(e.cards?.cardPadding,2),u={calculate:a,calculation:c,color:{...C.color,steps:128},cellGap:s||1,cellRadius:st(e.cards?.cardRound),yAxis:{axisPlacement:t.show===!1?o.LB.Hidden:o.LB.Left,reverse:Boolean(e.reverseYBuckets),axisWidth:st(t.width),min:t.min,max:t.max,unit:t.format,decimals:t.decimals},cellValues:{decimals:st(e.tooltipDecimals)},rowsFrame:{layout:xt(e.yBucketBound)},legend:{show:Boolean(e.legend?.show)},showValue:o.Jp.Never,tooltip:{show:Boolean(e.tooltip?.show),yHistogram:Boolean(e.tooltip?.showHistogram)},exemplars:{...C.exemplars}};e.hideZeroBuckets&&(u.filterValues={...C.filterValues});const f=e.color??{};switch(f?.mode){case"spectrum":{u.color.mode=oe.Scheme;const I=f.colorScheme;let M=lt.find(D=>D.name===I);M||(M=lt.find(D=>I.indexOf(D.name)>=0)),u.color.scheme=M?M.name:C.color.scheme;break}case"opacity":{u.color.mode=oe.Opacity,u.color.scale=f.scale;break}}return u.color.fill=f.cardColor,u.color.min=f.min,u.color.max=f.max,typeof f.min=="number"&&typeof f.max=="number"&&f.min>f.max&&(u.color.min=f.max,u.color.max=f.min,u.color.reverse=!0),{fieldConfig:l,options:u}}function xt(e){switch(e){case"upper":return o.kv.ge;case"lower":return o.kv.le;case"middle":return o.kv.unknown}return o.kv.auto}function st(e,l){if(e==null||e==="")return l;const a=+e;return isNaN(a)?l:a}class vt{getSuggestionsForData(l){const{dataSummary:a}=l;if(!l.data?.series||!a.hasData||a.timeFieldCount<1||a.numberFieldCount<2||a.numberFieldCount>10)return;const c=ve(l.data,C,g.v.theme2);!c||c.warning||l.getListAppender({name:"",pluginId:"heatmap",options:{},fieldConfig:{defaults:{custom:{}},overrides:[]}})}}const Et=new W.c(ht).useFieldConfig({disableStandardOptions:Object.values(Ke.qb).filter(e=>e!==Ke.qb.Links),useCustomConfig:e=>{e.addCustomEditor({id:"scaleDistribution",path:"scaleDistribution",name:"Y axis scale",category:["Heatmap"],editor:Je.Y,override:Je.Y,defaultValue:{type:o.wf.Linear},shouldApply:l=>l.type===Ce.fS.number,process:Ne.kG,hideFromDefaults:!0}),(0,ue.B)(e)}}).setPanelChangeHandler(dt).setMigrationHandler(gt).setPanelOptions((e,l)=>{const a=l.options??C;let c=!1;try{const s=ve({series:l.data},a,g.v.theme2);c=(0,G.d8)(s.heatmap).yOrdinalDisplay!=null}catch{}let t=["Heatmap"];e.addRadio({path:"calculate",name:"Calculate from data",defaultValue:C.calculate,category:t,settings:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}}),a.calculate&&(0,Fe.J)("calculation.",e,a.calculation,t),t=["Y Axis"],e.addRadio({path:"yAxis.axisPlacement",name:"Placement",defaultValue:C.yAxis.axisPlacement??o.LB.Left,category:t,settings:{options:[{label:"Left",value:o.LB.Left},{label:"Right",value:o.LB.Right},{label:"Hidden",value:o.LB.Hidden}]}}).addUnitPicker({category:t,path:"yAxis.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"yAxis.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),c||e.addNumberInput({path:"yAxis.min",name:"Min value",settings:{placeholder:"Auto"},category:t}).addTextInput({path:"yAxis.max",name:"Max value",settings:{placeholder:"Auto"},category:t}),e.addNumberInput({path:"yAxis.axisWidth",name:"Axis width",defaultValue:C.yAxis.axisWidth,settings:{placeholder:"Auto",min:5},category:t}).addTextInput({path:"yAxis.axisLabel",name:"Axis label",defaultValue:C.yAxis.axisLabel,settings:{placeholder:"Auto"},category:t}),a.calculate||e.addRadio({path:"rowsFrame.layout",name:"Tick alignment",defaultValue:C.rowsFrame?.layout??o.kv.auto,category:t,settings:{options:[{label:"Auto",value:o.kv.auto},{label:"Top (LE)",value:o.kv.le},{label:"Middle",value:o.kv.unknown},{label:"Bottom (GE)",value:o.kv.ge}]}}),e.addBooleanSwitch({path:"yAxis.reverse",name:"Reverse",defaultValue:C.yAxis.reverse===!0,category:t}),t=["Colors"],e.addRadio({path:"color.mode",name:"Mode",defaultValue:C.color.mode,category:t,settings:{options:[{label:"Scheme",value:oe.Scheme},{label:"Opacity",value:oe.Opacity}]}}),e.addColorPicker({path:"color.fill",name:"Color",defaultValue:C.color.fill,category:t,showIf:s=>s.color.mode===oe.Opacity}),e.addRadio({path:"color.scale",name:"Scale",defaultValue:C.color.scale,category:t,settings:{options:[{label:"Exponential",value:Ie.Exponential},{label:"Linear",value:Ie.Linear}]},showIf:s=>s.color.mode===oe.Opacity}),e.addSliderInput({path:"color.exponent",name:"Exponent",defaultValue:C.color.exponent,category:t,settings:{min:.1,max:2,step:.1},showIf:s=>s.color.mode===oe.Opacity&&s.color.scale===Ie.Exponential}),e.addSelect({path:"color.scheme",name:"Scheme",description:"",defaultValue:C.color.scheme,category:t,settings:{options:lt.map(s=>({value:s.name,label:s.name}))},showIf:s=>s.color.mode!==oe.Opacity}),e.addSliderInput({path:"color.steps",name:"Steps",defaultValue:C.color.steps,category:t,settings:{min:2,max:128,step:1}}).addBooleanSwitch({path:"color.reverse",name:"Reverse",defaultValue:C.color.reverse,category:t}).addCustomEditor({id:"__scale__",path:"__scale__",name:"",category:t,editor:()=>{const s=ut(a.color,g.v.theme2);return h.createElement("div",null,h.createElement(xe.q,{colorPalette:s,min:1,max:100}))}}),e.addNumberInput({path:"color.min",name:"Start color scale from value",defaultValue:C.color.min,settings:{placeholder:"Auto (min)"},category:t}).addNumberInput({path:"color.max",name:"End color scale at value",defaultValue:C.color.max,settings:{placeholder:"Auto (max)"},category:t}),t=["Cell display"],a.calculate||e.addTextInput({path:"rowsFrame.value",name:"Value name",defaultValue:C.rowsFrame?.value,settings:{placeholder:"Value"},category:t}),e.addUnitPicker({category:t,path:"cellValues.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"cellValues.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),e.addSliderInput({name:"Cell gap",path:"cellGap",defaultValue:C.cellGap,category:t,settings:{min:0,max:25}}).addNumberInput({path:"filterValues.le",name:"Hide cells with values <=",defaultValue:C.filterValues?.le,settings:{placeholder:"None"},category:t}).addNumberInput({path:"filterValues.ge",name:"Hide cells with values >=",defaultValue:C.filterValues?.ge,settings:{placeholder:"None"},category:t}),t=["Tooltip"],e.addBooleanSwitch({path:"tooltip.show",name:"Show tooltip",defaultValue:C.tooltip.show,category:t}),e.addBooleanSwitch({path:"tooltip.yHistogram",name:"Show histogram (Y axis)",defaultValue:C.tooltip.yHistogram,category:t,showIf:s=>s.tooltip.show}),t=["Legend"],e.addBooleanSwitch({path:"legend.show",name:"Show legend",defaultValue:C.legend.show,category:t}),t=["Exemplars"],e.addColorPicker({path:"exemplars.color",name:"Color",defaultValue:C.exemplars.color,category:t})}).setSuggestionsSupplier(new vt)}}]);

//# sourceMappingURL=heatmapPanel.c5d64a91fbf619557c29.js.map