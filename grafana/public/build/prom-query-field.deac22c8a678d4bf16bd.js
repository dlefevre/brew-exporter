"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6031],{22015:(k,I,a)=>{a.r(I),a.d(I,{default:()=>We});var A=a(5819),P=a(86832),M={id:"promql",extensions:[".promql"],aliases:["Prometheus","prometheus","prom","Prom","promql","Promql","promQL","PromQL"],mimetypes:[],loader:function(){return Promise.all([a.e(4746),a.e(6862)]).then(a.bind(a,81456))}},h=a(76687),L=a(52642),_=a(34032),q=a(40522),ee=a(52901),te=a(84502);function ne(){const e=new Map;return e.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:t=>{},onDidChangeTarget:t=>{},onWillSaveState:t=>{},get:(t,n,r)=>e.get(t)??r,getBoolean:(t,n,r)=>{const o=e.get(t);return o!==void 0?o==="true":r},getNumber:(t,n,r)=>{const o=e.get(t);return o!==void 0?parseInt(o,10):r},store:(t,n,r,o)=>{n==null?e.delete(t):e.set(t,n.toString())},remove:(t,n)=>{e.delete(t)},keys:(t,n)=>Array.from(e.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:t=>!0,flush:t=>Promise.resolve(void 0)}}let D=null;function re(){return D===null&&(D={storageService:ne()}),D}var oe=a(18778),le=a(88750);class w extends Error{constructor(t){super("should never happen")}}async function V(e){return(await e.getAllMetricNames()).map(n=>({type:"METRIC_NAME",label:n.name,insertText:n.name,detail:`${n.name} : ${n.type}`,documentation:n.help}))}const K=le.r8.map(e=>({type:"FUNCTION",label:e.label,insertText:e.insertText??"",detail:e.detail,documentation:e.documentation}));async function $(e){const t=await V(e);return[...K,...t]}const se=["$__interval","$__range","$__rate_interval","1m","5m","10m","30m","1h","1d"].map(e=>({type:"DURATION",label:e,insertText:e}));async function ie(e){return(await e.getHistory()).slice(0,10).map(n=>({type:"HISTORY",label:n,insertText:n}))}function U(e,t){const n=[...t];return e!==void 0&&n.push({name:"__name__",value:e,op:"="}),`{${n.map(o=>`${o.name}${o.op}"${(0,oe.U9)(o.value)}"`).join(",")}}`}async function ae(e,t,n){if(e===void 0&&t.length===0)return n.getAllLabelNames();{const r=U(e,t);return await n.getSeriesLabels(r,t)}}async function H(e,t,n,r,o){return(await ae(e,r,o)).map(i=>({type:"LABEL_NAME",label:i,insertText:`${i}${t}`,triggerOnInsert:n}))}async function ue(e,t,n){return H(e,"=",!0,t,n)}async function ce(e,t,n){return H(e,"",!1,t,n)}async function de(e,t,n,r){if(e===void 0&&n.length===0)return r.getLabelValues(t);{const o=U(e,n);return await r.getSeriesValues(t,o)}}async function me(e,t,n,r,o){return(await de(e,t,r,o)).map(i=>({type:"LABEL_VALUE",label:i,insertText:n?i:`"${i}"`}))}async function ge(e,t){switch(e.type){case"IN_DURATION":return se;case"IN_FUNCTION":return $(t);case"AT_ROOT":return $(t);case"EMPTY":{const n=await V(t);return[...await ie(t),...K,...n]}case"IN_LABEL_SELECTOR_NO_LABEL_NAME":return ue(e.metricName,e.otherLabels,t);case"IN_GROUPING":return ce(e.metricName,e.otherLabels,t);case"IN_LABEL_SELECTOR_WITH_LABEL_NAME":return me(e.metricName,e.labelName,e.betweenQuotes,e.otherLabels,t);default:throw new w(e)}}var l=a(50590);function fe(e,t){switch(t){case"parent":return e.parent;case"firstChild":return e.firstChild;case"lastChild":return e.lastChild;case"nextSibling":return e.nextSibling;default:throw new w(t)}}function m(e,t){let n=e;for(const[r,o]of t)if(n=fe(n,r),n===null||n.type.id!==o)return null;return n}function v(e,t){return t.slice(e.from,e.to)}function pe(e){const t=e.slice(1,e.length-1);if(e.startsWith('"')&&e.endsWith('"'))return t.replace(/\\"/,'"');if(e.startsWith("'")&&e.endsWith("'"))return t.replace(/\\'/,"'");if(e.startsWith("`")&&e.endsWith("`"))return t;throw new Error("FIXME: invalid string literal")}function he(e,t){return e.every((n,r)=>n===t[r])}const F=0,Ne=[{path:[l.m$,l.m6],fun:Ae},{path:[l.vD],fun:be},{path:[l.yY],fun:Te},{path:[l.nv,l.Zm],fun:Q},{path:[F,l.Zm],fun:Q},{path:[F,l.uM],fun:Se},{path:[l.XT],fun:ve}],Le=new Map([[l.M5,"="],[l.f0,"=~"],[l.IJ,"!="],[l.JW,"!~"]]);function Ce(e){const t=e.firstChild;return t===null?null:Le.get(t.type.id)??null}function Ee(e,t){if(e.type.id!==l.Zm)return null;const n=m(e,[["firstChild",l.m0]]);if(n===null)return null;const r=m(n,[["nextSibling",l.e8]]);if(r===null)return null;const o=Ce(r);if(o===null)return null;const s=m(e,[["lastChild",l.nv]]);if(s===null)return null;const i=v(n,t),g=pe(v(s,t));return{name:i,value:g,op:o}}function z(e,t){if(e.type.id!==l.m$)return[];let n=m(e,[["firstChild",l.z5]]);const r=[];for(;n!==null;){const o=m(n,[["lastChild",l.Zm]]);if(o===null)return[];const s=Ee(o,t);s!==null&&r.push(s),n=m(n,[["firstChild",l.z5]])}return r.reverse(),r}function ye(e){let t=e.firstChild;const n=[];for(;t!==null;)n.push(t),t=t.nextSibling;return n}function B(e,t){if(e.type.id===t)return e;const n=ye(e);for(const r of n){const o=B(r,t);if(o!==null)return o}return null}function ve(e,t,n){const r=m(e,[["parent",l.Ip],["parent",l.aZ]]);if(r===null)return null;const o=r.getChild(l.yY);if(o===null)return null;const s=B(o,l.tz);if(s===null)return null;const i=m(s,[["firstChild",l.xb]]);return i===null?null:{type:"IN_GROUPING",metricName:v(i,t),otherLabels:[]}}function Q(e,t,n){const r=!e.type.isError,o=m(e,[["parent",l.Zm]]);if(o===null)return null;const s=m(o,[["firstChild",l.m0]]);if(s===null)return null;const i=v(s,t),g=m(o,[["parent",l.z5]]);if(g===null)return null;let b=g,p=null;for(;p===null;){const d=b.parent;if(d===null)return null;const{id:S}=d.type;switch(S){case l.z5:b=d;continue;case l.m$:p=d;continue;default:return null}}const f=z(p,t).filter(d=>d.name!==i),T=m(p,[["parent",l.m6],["firstChild",l.tz],["firstChild",l.xb]]);return T===null?{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",labelName:i,betweenQuotes:r,otherLabels:f}:{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",metricName:v(T,t),labelName:i,betweenQuotes:r,otherLabels:f}}function be(e,t,n){return{type:"AT_ROOT"}}function Te(e,t,n){return{type:"IN_FUNCTION"}}function Se(e,t,n){return{type:"IN_DURATION"}}function Ie(e){return B(e,F)!==null}function Ae(e,t,n){if(Ie(e))return null;const r=m(e,[["firstChild",l.z5]]);if(r!==null&&!t.slice(r.to,n).includes(","))return null;const o=m(e,[["parent",l.m6],["firstChild",l.tz],["firstChild",l.xb]]),s=z(e,t);return o===null?{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",otherLabels:s}:{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",metricName:v(o,t),otherLabels:s}}function Me(e,t){const n=e.cursorAt(t);for(;;){if(n.from===t&&n.to===t){const{node:r}=n;if(r.type.isError)return r}if(!n.next())break}return null}function Re(e,t){if(e==="")return{type:"EMPTY"};const n=l.E2.parse(e),r=Me(n,t),o=r!=null?r.cursor():n.cursorAt(t),s=o.node,i=[o.type.id];for(;o.parent();)i.push(o.type.id);for(let g of Ne)if(he(g.path,i))return g.fun(s,e,t);return null}function Oe(){return{showWords:!1}}function Pe(e,t){switch(e){case"DURATION":return t.languages.CompletionItemKind.Unit;case"FUNCTION":return t.languages.CompletionItemKind.Variable;case"HISTORY":return t.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;case"METRIC_NAME":return t.languages.CompletionItemKind.Constructor;default:throw new w(e)}}function De(e,t){return{triggerCharacters:["{",",","[","(","=","~"," ",'"'],provideCompletionItems:(r,o)=>{const s=r.getWordAtPosition(o),i=s!=null?e.Range.lift({startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:s.startColumn,endColumn:s.endColumn}):e.Range.fromPositions(o),g={column:o.column,lineNumber:o.lineNumber},b=r.getOffsetAt(g),p=Re(r.getValue(),b);return(p!=null?ge(p,t):Promise.resolve([])).then(f=>{const T=f.length.toString().length;return{suggestions:f.map((d,S)=>({kind:Pe(d.type,e),label:d.label,insertText:d.insertText,detail:d.detail,documentation:d.documentation,sortText:S.toString().padStart(T,"0"),range:i,command:d.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0}))}})}}}const we={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,suggest:Oe(),suggestFontSize:12,wordWrap:"on"},Fe=2,R=M.id;let Z=!1;function Be(e){if(Z===!1){Z=!0;const{aliases:t,extensions:n,mimetypes:r,loader:o}=M;e.languages.register({id:R,aliases:t,extensions:n,mimetypes:r}),o().then(s=>{e.languages.setMonarchTokensProvider(R,s.language),e.languages.setLanguageConfiguration(R,s.languageConfiguration)})}}const xe=(e,t)=>({container:A.css`
      border-radius: ${e.shape.borderRadius()};
      border: 1px solid ${e.components.input.borderColor};
    `,placeholder:A.css`
      ::after {
        content: '${t}';
        font-family: ${e.typography.fontFamilyMonospace};
        opacity: 0.3;
      }
    `}),We=e=>{const t=(0,_.Z)(),n=(0,h.useRef)(re()),r=(0,h.useRef)(null),{languageProvider:o,history:s,onBlur:i,onRunQuery:g,initialValue:b,placeholder:p,onChange:x}=e,f=(0,L.Z)(o),T=(0,L.Z)(s),W=(0,L.Z)(g),d=(0,L.Z)(i),S=(0,L.Z)(x),G=(0,h.useRef)(null),Ve=(0,ee.l4)(),Y=xe(Ve,p);return(0,h.useEffect)(()=>()=>{G.current?.()},[]),h.createElement("div",{"aria-label":q.wl.components.QueryField.container,className:Y.container,ref:r},h.createElement(te.o,{overrideServices:n.current,options:we,language:"promql",value:b,beforeMount:c=>{Be(c)},onMount:(c,y)=>{const X=c.createContextKey("isEditorFocused"+t,!1);c.onDidBlurEditorWidget(()=>{X.set(!1),d.current(c.getValue())}),c.onDidFocusEditorText(()=>{X.set(!0)});const Ke=()=>Promise.resolve(T.current.map(u=>u.query.expr).filter(u=>u!==void 0)),$e=()=>{const{metrics:u,metricsMetadata:N}=f.current,C=u.map(E=>{const O=N?.[E];return{name:E,help:O?.help??"",type:O?.type??""}});return Promise.resolve(C)},Ue=()=>Promise.resolve(f.current.getLabelKeys()),He=u=>f.current.getLabelValues(u),ze=f.current.getSeriesValues,Qe=f.current.getSeriesLabels,J=De(y,{getHistory:Ke,getAllMetricNames:$e,getAllLabelNames:Ue,getLabelValues:He,getSeriesValues:ze,getSeriesLabels:Qe}),Ze={...J,provideCompletionItems:(u,N,C,E)=>c.getModel()?.id!==u.id?{suggestions:[]}:J.provideCompletionItems(u,N,C,E)},{dispose:Ge}=y.languages.registerCompletionItemProvider(R,Ze);G.current=Ge;const j=()=>{const u=r.current;if(u!==null){const N=c.getContentHeight();u.style.height=`${N+Fe}px`,u.style.width="100%";const C=u.clientWidth;c.layout({width:C,height:N})}};c.onDidContentSizeChange(j),j();const Ye=(0,P.debounce)(()=>{const u=c.getValue();S.current(u)},f.current.datasource.getDebounceTimeInMilliseconds());if(c.getModel()?.onDidChangeContent(()=>{Ye()}),c.addCommand(y.KeyMod.Shift|y.KeyCode.Enter,()=>{W.current(c.getValue())},"isEditorFocused"+t),c.addCommand(y.KeyMod.CtrlCmd|y.KeyCode.KeyK,function(){a.g.dispatchEvent(new KeyboardEvent("keydown",{key:"k",metaKey:!0}))}),p){const u=[{range:new y.Range(1,1,1,1),options:{className:Y.placeholder,isWholeLine:!0}}];let N=[];const C=()=>{const E=c.getModel();if(!E)return;const O=E.getValueLength()===0?u:[];N=E.deltaDecorations(N,O)};C(),c.onDidChangeModelContent(C)}}}))}},52642:(k,I,a)=>{a.d(I,{Z:()=>M});var A=a(76687),P=function(h){var L=(0,A.useRef)(h);return L.current=h,L};const M=P}}]);

//# sourceMappingURL=prom-query-field.deac22c8a678d4bf16bd.js.map