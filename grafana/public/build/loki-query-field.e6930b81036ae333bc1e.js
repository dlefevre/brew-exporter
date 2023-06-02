"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7142,1598],{39702:($,y)=>{var a;a={value:!0},y.hl=y.x=void 0,y.x={wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"},{open:"<",close:">"}],folding:{}};var O=["sum","avg","min","max","stddev","stdvar","count","topk","bottomk"],S=["json","logfmt","regexp","unpack","pattern"],L=["line_format","label_format"],C=["count_over_time","rate","bytes_over_time","bytes_rate","avg_over_time","sum_over_time","min_over_time","max_over_time","stdvar_over_time","stddev_over_time","quantile_over_time","first_over_time","last_over_time","absent_over_time"],A=["by","without"],D="(".concat(A.reduce(function(G,I){return"".concat(G,"|").concat(I)}),")"),F=["+","-","*","/","%","^","==","!=",">","<",">=","<=","|=","!=","|~","!~","and","or","unless","|"],K=O.concat(S).concat(L).concat(C).concat(A);y.hl={ignoreCase:!1,defaultToken:"",tokenPostfix:".logql",keywords:K,operators:F,vectorMatching:D,symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/@vectorMatching\s*(?=\()/,"type","@clauses"],[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/(^#.*$)/,"comment"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"type","@default":"identifier"}}],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+(?:ms|[smhdwy])/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\"]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\`]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}}},51286:($,y,a)=>{a.r(y),a.d(y,{default:()=>nt});var O=a(5819),S=a(86832),L=a(76687),C=a(52642),A=a(34032),D=a(40522),F=a(39702),K=a(52901),G=a(84502),I=a(40610);function ie(){const e=new Map;return e.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:t=>{},onDidChangeTarget:t=>{},onWillSaveState:t=>{},get:(t,n,r)=>e.get(t)??r,getBoolean:(t,n,r)=>{const o=e.get(t);return o!==void 0?o==="true":r},getNumber:(t,n,r)=>{const o=e.get(t);return o!==void 0?parseInt(o,10):r},store:(t,n,r,o)=>{n==null?e.delete(t):e.set(t,n.toString())},remove:(t,n)=>{e.delete(t)},keys:(t,n)=>Array.from(e.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:t=>!0,flush:t=>Promise.resolve(void 0)}}let ae={storageService:ie()};function ue(){return ae}class Z extends Error{constructor(t){super(`Unexpected case in switch statement: ${JSON.stringify(t)}`)}}var j=a(98786),m=a(41559),N=a(26554),Q=a(46738);const ce=[{type:"PATTERN",label:"{}",insertText:"{$0}",isSnippet:!0,triggerOnInsert:!0}],X=Q.$5.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}($0)`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),Y=Q.EH.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}({$0}[\\$__interval])`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),de=Q.md.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}($0)`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),ge=["$__interval","$__range","1m","5m","10m","30m","1h","1d"].map(e=>({type:"DURATION",label:e,insertText:e})),fe=[{type:"FUNCTION",label:"duration_seconds",documentation:"Will convert the label value in seconds from the go duration format (e.g 5m, 24s30ms).",insertText:"duration_seconds()"},{type:"FUNCTION",label:"duration",documentation:"Short version of duration_seconds().",insertText:"duration()"},{type:"FUNCTION",label:"bytes",documentation:"Will convert the label value to raw bytes applying the bytes unit (e.g. 5 MiB, 3k, 1G).",insertText:"bytes()"}],pe=[{operator:"|=",documentation:(0,m.kf)(N.B5.LineContains),afterPipe:!0},{operator:"!=",documentation:(0,m.kf)(N.B5.LineContainsNot)},{operator:"|~",documentation:(0,m.kf)(N.B5.LineMatchesRegex),afterPipe:!0},{operator:"!~",documentation:(0,m.kf)(N.B5.LineMatchesRegexNot)}];function me(e){return pe.filter(t=>!e||t.afterPipe).map(({operator:t,documentation:n})=>({type:"LINE_FILTER",label:`${t} ""`,insertText:`${e?t.replace("|",""):t} "$0"`,isSnippet:!0,documentation:n}))}async function he(e){return(await e.getHistory()).map(n=>({type:"HISTORY",label:n,insertText:n}))}async function ve(e,t){return(await t.getLabelNames(e)).map(r=>({type:"LABEL_NAME",label:r,insertText:`${r}=`,triggerOnInsert:!0}))}async function Le(e,t){const{extractedLabelKeys:n}=await t.getParserAndLabelKeys(e);return n.map(r=>({type:"LABEL_NAME",label:r,insertText:r,triggerOnInsert:!1}))}const Ne=["json","logfmt","pattern","regexp","unpack"];async function be(e,t,n,r,o,s){const i=new Set(Ne),u=[],h=o.some(d=>d==="level");if(t){const d=s?"":" (detected)";r?(i.delete("unpack"),u.push({type:"PARSER",label:`unpack${d}`,insertText:`${e}unpack`,documentation:(0,m.kf)(N.B5.Unpack)})):(i.delete("json"),u.push({type:"PARSER",label:`json${d}`,insertText:`${e}json`,documentation:h?"Use it to get log-levels in the histogram":(0,m.kf)(N.B5.Json)}))}if(n){i.delete("logfmt");const d=s?"":" (detected)";u.push({type:"PARSER",label:`logfmt${d}`,insertText:`${e}logfmt`,documentation:h?"Get detected levels in the histogram":(0,m.kf)(N.B5.Logfmt)})}return Array.from(i).sort().forEach(d=>{u.push({type:"PARSER",label:d,insertText:`${e}${d}`,documentation:(0,m.kf)(d)})}),u}async function Ee(e,t,n,r){let o=e;t&&(o=(0,S.trimEnd)(e,"| "));const{extractedLabelKeys:s,hasJSON:i,hasLogfmt:u,hasPack:h}=await r.getParserAndLabelKeys(o),f=(0,I.cQ)(o).queryWithParser,d=`${n?"":" "}${t?"":"| "}`,p=await be(d,i,u,h,s,f);return p.push({type:"PIPE_OPERATION",label:"line_format",insertText:`${d}line_format "{{.$0}}"`,isSnippet:!0,documentation:(0,m.kf)(N.B5.LineFormat)}),p.push({type:"PIPE_OPERATION",label:"label_format",insertText:`${d}label_format`,isSnippet:!0,documentation:(0,m.kf)(N.B5.LabelFormat)}),p.push({type:"PIPE_OPERATION",label:"unwrap",insertText:`${d}unwrap`,documentation:(0,m.kf)(N.B5.Unwrap)}),f&&s.forEach(_=>{p.push({type:"LABEL_NAME",label:`${_} (detected)`,insertText:`${d}${_}`,documentation:`"${_}" was suggested based on the content of your log lines for the label filter expression.`})}),f?[...p]:[...t&&n?[]:me(t),...p]}async function ye(e,t,n,r){return(await r.getLabelValues(e,n)).map(s=>({type:"LABEL_VALUE",label:s,insertText:t?(0,j.U9)(s):`"${(0,j.U9)(s)}"`}))}async function Ce(e,t){const{unwrapLabelKeys:n}=await t.getParserAndLabelKeys(e);return[...n.map(o=>({type:"LABEL_NAME",label:o,insertText:o,triggerOnInsert:!1})),...fe]}async function Te(e,t){switch(e.type){case"EMPTY":case"AT_ROOT":return[...await he(t),...ce,...X,...de,...Y];case"IN_RANGE":return ge;case"IN_GROUPING":return Le(e.logQuery,t);case"IN_LABEL_SELECTOR_NO_LABEL_NAME":return ve(e.otherLabels,t);case"IN_LABEL_SELECTOR_WITH_LABEL_NAME":return ye(e.labelName,e.betweenQuotes,e.otherLabels,t);case"AFTER_SELECTOR":return Ee(e.logQuery,e.afterPipe,e.hasSpace,t);case"AFTER_UNWRAP":return Ce(e.logQuery,t);case"IN_AGGREGATION":return[...Y,...X];default:throw new Z(e)}}var l=a(46545);function Se(e,t){return e[t]}function g(e,t){let n=e;for(const[r,o]of t)if(n=Se(n,r),n===null||n.type.id!==o)return null;return n}function V(e,t){return t.slice(e.from,e.to)}function Ae(e){const t=e.slice(1,e.length-1);if(e.startsWith('"')&&e.endsWith('"'))return t.replace(/\\"/gm,'"');if(e.startsWith("'")&&e.endsWith("'"))return t.replace(/\\'/gm,"'");if(e.startsWith("`")&&e.endsWith("`"))return t;throw new Error(`Invalid string literal: ${e}`)}function Ie(e,t){return e.every((n,r)=>n===t[r])}const P=0,Pe=[{path:[l.Qf],fun:Be},{path:[l.WZ],fun:we},{path:[l.Ld,l.xO],fun:ee},{path:[l.Kz],fun:Me},{path:[l.UN],fun:$e},{path:[P,l.xO],fun:ee},{path:[P,l.e6],fun:Ue},{path:[P,l.UN],fun:Fe},{path:[P,l.dh,l.cq,l.M0],fun:()=>({type:"IN_AGGREGATION"})},{path:[P,l.We,l.iP],fun:_e},{path:[P,l.Xt],fun:q},{path:[l.Xt],fun:q}],Re=new Map([["Eq","="],["Re","=~"],["Neq","!="],["Nre","!~"]]);function xe(e){return Re.get(e.name)??null}function Oe(e,t){if(e.type.id!==l.xO)return null;const n=g(e,[["firstChild",l.xb]]);if(n===null)return null;const r=n.nextSibling;if(r===null)return null;const o=xe(r);if(o===null)return null;const s=g(e,[["lastChild",l.Ld]]);if(s===null)return null;const i=V(n,t),u=Ae(V(s,t));return{name:i,value:u,op:o}}function J(e,t){if(e.type.id!==l.Qf)return[];let n=g(e,[["firstChild",l.gP]]);const r=[];for(;n!==null;){const o=g(n,[["lastChild",l.xO]]);if(o===null)return[];const s=Oe(o,t);s!==null&&r.push(s),n=g(n,[["firstChild",l.gP]])}return r.reverse(),r}function q(e,t,n){return{type:"AFTER_UNWRAP",logQuery:(0,I.SP)(t).trim()}}function _e(e,t,n){const r=g(e,[["parent",l.We],["parent",l.iP]]);if(r===null)return null;const{parent:o}=r;return o===null?null:o.type.id===l.bL||o.type.id===l.UN?B(o,t,n,!0):null}function Me(e,t,n){const r=g(e,[["parent",l.M0]]);if(r===null)return null;const o=r.getChild("MetricExpr");return o===null||g(o,[["firstChild",l.Tr],["lastChild",l.UN],["firstChild",l.Qf]])===null?null:{type:"IN_GROUPING",logQuery:(0,I.SP)(t).trim()}}function ee(e,t,n){const r=!e.type.isError,o=g(e,[["parent",l.xO]]);if(o===null)return null;const s=g(o,[["firstChild",l.xb]]);if(s===null)return null;const i=V(s,t),u=g(o,[["parent",l.gP]]);if(u===null)return null;let h=u,f=null;for(;f===null;){const v=h.parent;if(v===null)return null;switch(v.type.id){case l.gP:h=v;continue;case l.Qf:f=v;continue;default:return null}}const p=J(f,t).filter(v=>v.name!==i);return{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",labelName:i,betweenQuotes:r,otherLabels:p}}function we(e,t,n){const r=g(e,[["lastChild",l.wi],["lastChild",l.bL]]);return r!=null?B(r,t,n,!1):g(e,[["firstChild",P],["firstChild",l.xb]])!=null?{type:"AT_ROOT"}:null}function Ue(e,t,n){return{type:"IN_RANGE"}}function $e(e,t,n){return B(e,t,n,!1)}function Fe(e,t,n){const r=g(e,[["parent",l.UN]]);return r===null?null:B(r,t,n,!1)}function B(e,t,n,r){const o=g(e,[["firstChild",l.Qf]]);return!o||o.to>n?null:{type:"AFTER_SELECTOR",afterPipe:r,hasSpace:t.endsWith(" "),logQuery:(0,I.SP)(t).trim()}}function Be(e,t,n){const r=g(e,[["firstChild",l.gP]]);return r!==null&&!t.slice(r.to,n).includes(",")?null:{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",otherLabels:J(e,t)}}function ke(e,t,n){const r=t.trimEnd().length,o=r<n?r:n,s=e.cursorAt(o);do if(s.from===o&&s.to===o){const{node:i}=s;if(i.type.isError)return i}while(s.next());return null}function We(e,t){if(e==="")return{type:"EMPTY"};const n=l.E2.parse(e),r=ke(n,e,t),o=r!=null?r.cursor():n.cursorAt(t),s=o.node,i=[o.type.id];for(;o.parent();)i.push(o.type.id);for(let u of Pe)if(Ie(u.path,i))return u.fun(s,e,t);return null}const De=4;function Ke(){return{showWords:!1}}function Ge(e,t){switch(e){case"DURATION":return t.languages.CompletionItemKind.Unit;case"FUNCTION":return t.languages.CompletionItemKind.Variable;case"HISTORY":return t.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;case"PATTERN":return t.languages.CompletionItemKind.Constructor;case"PARSER":return t.languages.CompletionItemKind.Class;case"LINE_FILTER":return t.languages.CompletionItemKind.TypeParameter;case"PIPE_OPERATION":return t.languages.CompletionItemKind.Interface;default:throw new Z(e)}}function Qe(e,t){return{triggerCharacters:["{",",","[","(","=","~"," ",'"',"|"],provideCompletionItems:(r,o)=>{const s=r.getWordAtPosition(o),i=s!=null?e.Range.lift({startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:s.startColumn,endColumn:s.endColumn}):e.Range.fromPositions(o),u={column:o.column,lineNumber:o.lineNumber},h=r.getOffsetAt(u),f=We(r.getValue(),h);return(f!=null?Te(f,t):Promise.resolve([])).then(p=>{const v=p.length.toString().length;return{suggestions:p.map((b,H)=>({kind:Ge(b.type,e),label:b.label,insertText:b.insertText,insertTextRules:b.isSnippet?De:void 0,detail:b.detail,documentation:b.documentation,sortText:H.toString().padStart(v,"0"),range:i,command:b.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0}))}})}}}var Ve=a(18778);class He{constructor(t,n={current:[]}){this.languageProvider=t,this.historyRef=n}buildSelector(t){return`{${t.map(r=>`${r.name}${r.op}"${(0,Ve.U9)(r.value)}"`).join(",")}}`}getHistory(){return(0,S.chain)(this.historyRef.current).map(t=>t.query.expr).filter().uniq().value()}async getLabelNames(t=[]){if(t.length===0)return this.languageProvider.getLabelKeys();const n=await this.getSeriesLabels(t),r=Object.keys(n),o=new Set(t.map(s=>s.name));return r.filter(s=>!o.has(s))}async getLabelValues(t,n){return n.length===0?await this.languageProvider.getLabelValues(t):(await this.getSeriesLabels(n))[t]??[]}async getParserAndLabelKeys(t){return await this.languageProvider.getParserAndLabelKeys(t)}async getSeriesLabels(t){return await this.languageProvider.getSeriesLabels(this.buildSelector(t)).then(n=>n??{})}}var ze=a(53226);function Ze(e,t,n){if(!e)return!1;const r=te(t);if(!r.length)return!1;let o=r;if(e!==t){const s=te(e);o=r.flatMap(i=>s.filter(u=>i.text===u.text)||i)}return o.map(s=>je(e,n,s)).filter(Xe)}function te(e){const t=[];return l.E2.parse(e).iterate({enter:r=>{if(r.type.id===ze._A){const o=r.node;t.push({node:o,text:e.substring(o.from,o.to)})}}}),t}function je(e,t,n){if(t.length===1){const s=n.node.from===n.node.to,i=s&&n.node.parent?n.node.parent:n.node,u=s?e.substring(i.from,i.to):n.text;return{startLineNumber:1,startColumn:i.from+1,endLineNumber:1,endColumn:i.to+1,error:u}}let r=0,o=0;for(let s=0;s<t.length;s++){if(o=r+t[s].length,n.node.from>o){r+=t[s].length+1;continue}return{startLineNumber:s+1,startColumn:n.node.from-r+1,endLineNumber:s+1,endColumn:n.node.to-r+1,error:n.text}}return null}function Xe(e){return e!==null}const Ye={__interval:{text:"1s",value:"1s"},__interval_ms:{text:"1000",value:1e3},__range_ms:{text:"1000",value:1e3},__range_s:{text:"1",value:1},__range:{text:"1s",value:"1s"}},Je={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,suggest:Ke(),suggestFontSize:12,wordWrap:"on"},qe=2,M="logql";let ne=!1;function et(e){ne===!1&&(ne=!0,e.languages.register({id:M}),e.languages.setMonarchTokensProvider(M,F.hl),e.languages.setLanguageConfiguration(M,F.x))}const tt=(e,t)=>({container:O.css`
      border-radius: ${e.shape.borderRadius()};
      border: 1px solid ${e.components.input.borderColor};
      width: 100%;
    `,placeholder:O.css`
      ::after {
        content: '${t}';
        font-family: ${e.typography.fontFamilyMonospace};
        opacity: 0.3;
      }
    `}),nt=({history:e,onBlur:t,onRunQuery:n,initialValue:r,datasource:o,placeholder:s,onQueryType:i})=>{const u=(0,A.Z)(),h=(0,L.useRef)(ue()),f=(0,L.useRef)(null),d=(0,C.Z)(o.languageProvider),p=(0,C.Z)(e),v=(0,C.Z)(n),_=(0,C.Z)(t),b=(0,L.useRef)(null),H=(0,K.l4)(),re=tt(H,s);(0,L.useEffect)(()=>()=>{b.current?.()},[]);const rt=(c,E)=>{const k=[{range:new c.Range(1,1,1,1),options:{className:re.placeholder,isWholeLine:!0}}];let W=[];const w=()=>{const U=E.getModel();if(!U)return;const z=U.getValueLength()===0?k:[];W=U.deltaDecorations(W,z)};w(),E.onDidChangeModelContent(w)},ot=(0,S.debounce)(async c=>{!i||(0,I.RT)(c)===!1&&c!==""||i(c)},1e3);return L.createElement("div",{"aria-label":D.wl.components.QueryField.container,className:re.container,ref:f},L.createElement(G.o,{overrideServices:h.current,options:Je,language:M,value:r,beforeMount:c=>{et(c)},onMount:(c,E)=>{const k=c.createContextKey("isEditorFocused"+u,!1);c.onDidBlurEditorWidget(()=>{k.set(!1),_.current(c.getValue())}),c.onDidChangeModelContent(R=>{const T=c.getModel();if(!T)return;const x=T.getValue(),st=(Ze(x,o.interpolateString(x,Ye),T.getLinesContent())||[]).map(({error:le,...lt})=>({message:`${le?`Error parsing "${le}"`:"Parse error"}. The query appears to be incorrect and could fail to be executed.`,severity:E.MarkerSeverity.Error,...lt}));ot(x),E.editor.setModelMarkers(T,"owner",st)});const W=new He(d.current,p),w=Qe(E,W),U={...w,provideCompletionItems:(R,T,x,se)=>c.getModel()?.id!==R.id?{suggestions:[]}:w.provideCompletionItems(R,T,x,se)},{dispose:z}=E.languages.registerCompletionItemProvider(M,U);b.current=z;const oe=()=>{const R=f.current;if(R!==null){const T=c.getContentHeight();R.style.height=`${T+qe}px`;const x=R.clientWidth;c.layout({width:x,height:T})}};c.onDidContentSizeChange(oe),oe(),c.addCommand(E.KeyMod.Shift|E.KeyCode.Enter,()=>{v.current(c.getValue())},"isEditorFocused"+u),c.onDidFocusEditorText(()=>{k.set(!0),c.getValue().trim()===""&&c.trigger("","editor.action.triggerSuggest",{})}),rt(E,c)}}))}},52642:($,y,a)=>{a.d(y,{Z:()=>L});var O=a(76687),S=function(C){var A=(0,O.useRef)(C);return A.current=C,A};const L=S},93716:$=>{$.exports={id:"loki"}}}]);

//# sourceMappingURL=loki-query-field.e6930b81036ae333bc1e.js.map