(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5032],{28901:(he,y,r)=>{"use strict";r.r(y),r.d(y,{plugin:()=>se});var w=r(83761),$=r(13609),S=r(5819),e=r(76687),T=r(52901);function F(){const t=(0,T.wW)(N);return e.createElement("div",null,e.createElement("h2",null,"MSSQL cheat sheet"),"Time series:",e.createElement("ul",{className:t.ulPadding},e.createElement("li",null,"return column named time (in UTC), as a unix time stamp or any sql native date data type. You can use the macros below."),e.createElement("li",null,"any other columns returned will be the time point values.")),"Optional:",e.createElement("ul",{className:t.ulPadding},e.createElement("li",null,"return column named ",e.createElement("i",null,"metric")," to represent the series name."),e.createElement("li",null,"If multiple value columns are returned the metric column is used as prefix."),e.createElement("li",null,"If no column named metric is found the column name of the value column is used as series name")),e.createElement("p",null,"Resultsets of time series queries need to be sorted by time."),"Table:",e.createElement("ul",{className:t.ulPadding},e.createElement("li",null,"return any set of columns")),"Macros:",e.createElement("ul",{className:t.ulPadding},e.createElement("li",null,"$__time(column) -> column AS time"),e.createElement("li",null,"$__timeEpoch(column) -> DATEDIFF(second, '1970-01-01', column) AS time"),e.createElement("li",null,"$__timeFilter(column) -> column BETWEEN '2017-04-21T05:01:17Z' AND '2017-04-21T05:01:17Z'"),e.createElement("li",null,"$__unixEpochFilter(column) -> column >= 1492750877 AND column <= 1492750877"),e.createElement("li",null,"$__unixEpochNanoFilter(column) -> column >= 1494410783152415214 AND column <= 1494497183142514872"),e.createElement("li",null,"$__timeGroup(column, '5m'[, fillvalue]) -> CAST(ROUND(DATEDIFF(second, '1970-01-01', column)/300.0, 0) as bigint)*300 by setting fillvalue grafana will fill in missing values according to the interval fillvalue can be either a literal value, NULL or previous; previous will fill in the previous seen value or NULL if none has been seen yet"),e.createElement("li",null,"$__timeGroupAlias(column, '5m'[, fillvalue]) -> CAST(ROUND(DATEDIFF(second, '1970-01-01', column)/300.0, 0) as bigint)*300 AS [time]"),e.createElement("li",null,"$__unixEpochGroup(column,'5m') -> FLOOR(column/300)*300"),e.createElement("li",null,"$__unixEpochGroupAlias(column,'5m') -> FLOOR(column/300)*300 AS [time]")),e.createElement("p",null,"Example of group by and order by with $__timeGroup:"),e.createElement("pre",null,e.createElement("code",null,"SELECT $__timeGroup(date_time_col, '1h') AS time, sum(value) as value ",e.createElement("br",null),"FROM yourtable",e.createElement("br",null),"GROUP BY $__timeGroup(date_time_col, '1h')",e.createElement("br",null),"ORDER BY 1",e.createElement("br",null))),"Or build your own conditionals using these macros which just return the values:",e.createElement("ul",{className:t.ulPadding},e.createElement("li",null,"$__timeFrom() -> '2017-04-21T05:01:17Z'"),e.createElement("li",null,"$__timeTo() -> '2017-04-21T05:01:17Z'"),e.createElement("li",null,"$__unixEpochFrom() -> 1492750877"),e.createElement("li",null,"$__unixEpochTo() -> 1492750877"),e.createElement("li",null,"$__unixEpochNanoFrom() -> 1494410783152415214"),e.createElement("li",null,"$__unixEpochNanoTo() -> 1494497183142514872")))}function N(t){return{ulPadding:(0,S.css)({margin:t.spacing(1,0),paddingLeft:t.spacing(5)})}}var u=r(76022),b=r(52993),c=r(4693),h=r(38753),A=r(74740),I=r(24156),R=r(44541),x=r(40640),M=r(14378),P=r(23061),W=r(47597),O=r(25933),B=r(93882),Q=r(2784),U=r(73493),g=(t=>(t.sqlAuth="SQL Server Authentication",t.windowsAuth="Windows Authentication",t))(g||{}),f=(t=>(t.disable="disable",t.false="false",t.true="true",t))(f||{});const G=t=>{const{options:a,onOptionsChange:i}=t,n=(0,T.wW)(H),l=a.jsonData;(0,U.D)(t);const s=()=>{(0,u.Mf)(t,"password")},o=m=>de=>{i({...a,[m]:de.currentTarget.value})},E=m=>{(0,u.tp)(t,"tlsSkipVerify",m.currentTarget.checked)},v=m=>{(0,u.tp)(t,"encrypt",m.value)},oe=m=>{i({...a,jsonData:{...l,authenticationType:m.value},secureJsonData:{...a.secureJsonData,password:""},secureJsonFields:{...a.secureJsonFields,password:!1},user:""})},ce=m=>{(0,u.tp)(t,"connectionTimeout",m??0)},ue=[{value:g.sqlAuth,label:"SQL Server Authentication"},{value:g.windowsAuth,label:"Windows Authentication"}],me=[{value:f.disable,label:"disable"},{value:f.false,label:"false"},{value:f.true,label:"true"}],d=15,L=46,p=25,D=20;return e.createElement(e.Fragment,null,e.createElement(b.C,{label:"MS SQL Connection",width:400},e.createElement(c._,{labelWidth:d,label:"Host"},e.createElement(h.I,{width:L,name:"host",type:"text",value:a.url||"",placeholder:"localhost:1433",onChange:o("url")})),e.createElement(c._,{labelWidth:d,label:"Database"},e.createElement(h.I,{width:L,name:"database",value:l.database||"",placeholder:"database name",onChange:(0,u._R)(t,"database")})),e.createElement(c._,{label:"Authentication",labelWidth:d,htmlFor:"authenticationType",tooltip:e.createElement("ul",{className:n.ulPadding},e.createElement("li",null,e.createElement("i",null,"SQL Server Authentication")," This is the default mechanism to connect to MS SQL Server. Enter the SQL Server Authentication login or the Windows Authentication login in the DOMAIN\\User format."),e.createElement("li",null,e.createElement("i",null,"Windows Authentication")," Windows Integrated Security - single sign on for users who are already logged onto Windows and have enabled this option for MS SQL Server."))},e.createElement(A.Ph,{value:l.authenticationType||g.sqlAuth,inputId:"authenticationType",options:ue,onChange:oe})),l.authenticationType===g.windowsAuth?null:e.createElement(I.Z,null,e.createElement(c._,{labelWidth:d,label:"User"},e.createElement(h.I,{width:d,value:a.user||"",placeholder:"user",onChange:o("user")})),e.createElement(c._,{label:"Password",labelWidth:d},e.createElement(R.m4,{width:d,placeholder:"Password",isConfigured:a.secureJsonFields&&a.secureJsonFields.password,onReset:s,onBlur:(0,u.fi)(t,"password")})))),B.vc.featureToggles.secureSocksDatasourceProxy&&e.createElement(x.i,{options:a,onOptionsChange:i}),e.createElement(b.C,{label:"TLS/SSL Auth"},e.createElement(c._,{labelWidth:p,htmlFor:"encrypt",tooltip:e.createElement(e.Fragment,null,"Determines whether or to which extent a secure SSL TCP/IP connection will be negotiated with the server.",e.createElement("ul",{className:n.ulPadding},e.createElement("li",null,e.createElement("i",null,"disable")," - Data sent between client and server is not encrypted."),e.createElement("li",null,e.createElement("i",null,"false")," - Data sent between client and server is not encrypted beyond the login packet. (default)"),e.createElement("li",null,e.createElement("i",null,"true")," - Data sent between client and server is encrypted.")),"If you're using an older version of Microsoft SQL Server like 2008 and 2008R2 you may need to disable encryption to be able to connect."),label:"Encrypt"},e.createElement(A.Ph,{options:me,value:l.encrypt||f.disable,inputId:"encrypt",onChange:v})),l.encrypt===f.true?e.createElement(e.Fragment,null,e.createElement(c._,{labelWidth:p,htmlFor:"skipTlsVerify",label:"Skip TLS Verify"},e.createElement(M.x,{id:"skipTlsVerify",onChange:E,value:l.tlsSkipVerify||!1})),l.tlsSkipVerify?null:e.createElement(e.Fragment,null,e.createElement(c._,{labelWidth:p,tooltip:e.createElement("span",null,"Path to file containing the public key certificate of the CA that signed the SQL Server certificate. Needed when the server certificate is self signed."),label:"TLS/SSL Root Certificate"},e.createElement(h.I,{value:l.sslRootCertFile||"",onChange:(0,u._R)(t,"sslRootCertFile"),placeholder:"TLS/SSL root certificate file path"})),e.createElement(c._,{labelWidth:p,label:"Hostname in server certificate"},e.createElement(h.I,{placeholder:"Common Name (CN) in server certificate",value:l.serverName||"",onChange:(0,u._R)(t,"serverName")})))):null),e.createElement(Q.K,{labelWidth:d,options:a,onOptionsChange:i}),e.createElement(b.C,{label:"MS SQL details"},e.createElement(c._,{tooltip:e.createElement("span",null,"A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example",e.createElement("code",null,"1m")," if your data is written every minute."),label:"Min time interval",labelWidth:D},e.createElement(h.I,{placeholder:"1m",value:l.timeInterval||"",onChange:(0,u._R)(t,"timeInterval")})),e.createElement(c._,{tooltip:e.createElement("span",null,"The number of seconds to wait before canceling the request when connecting to the database. The default is"," ",e.createElement("code",null,"0"),", meaning no timeout."),label:"Connection timeout",labelWidth:D},e.createElement(O.Y,{placeholder:"60",min:0,value:l.connectionTimeout,onChange:ce}))),e.createElement(P.b,{title:"User Permission",severity:"info"},"The database user should only be granted SELECT permissions on the specified database and tables you want to query. Grafana does not validate that queries are safe so queries can contain any SQL statement. For example, statements like ",e.createElement("code",null,"USE otherdb;")," and ",e.createElement("code",null,"DROP TABLE user;")," would be executed. To protect against this we ",e.createElement("em",null,"highly")," recommend you create a specific MS SQL user with restricted permissions. Check out the"," ",e.createElement(W.r,{rel:"noreferrer",target:"_blank",href:"http://docs.grafana.org/features/datasources/mssql/"},"Microsoft SQL Server Data Source Docs")," ","for more information."))};function H(t){return{ulPadding:(0,S.css)({margin:t.spacing(1,0),paddingLeft:t.spacing(5)})}}var V=r(39168),Y=r(63025);function j(){return"SELECT name FROM sys.databases WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');"}function J(t){return`SELECT TABLE_SCHEMA + '.' + TABLE_NAME as schemaAndName
    FROM [${t}].INFORMATION_SCHEMA.TABLES`}function Z(t,a){return`
   USE ${t}
   SELECT COLUMN_NAME as 'column',DATA_TYPE as 'type'
   FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${a}';`}var K=r(41275);class z{constructor(a,i,n){this.target=(0,K.Y)(a||{refId:"A"}),this.templateSrv=i,this.scopedVars=n}quoteLiteral(a){return"'"+a.replace(/'/g,"''")+"'"}}var C=r(56350);const X=({getColumns:t,getTables:a})=>(i,n)=>({...n&&(0,C.getStandardSQLCompletionProvider)(i,n),tables:{resolve:async l=>await a.current(l.table),parseName:l=>{if(!l)return{table:""};let s=l,o=s.value;for(;s.next&&s.next.type!==C.TokenType.Whitespace;)o+=s.next.value,s=s.next;return s.value.endsWith(".")&&(o=s.value.slice(0,s.value.length-1)),{table:o}}},columns:{resolve:async l=>{if(!l?.table)return[];const[s,o,E]=l.table.split(".");return await t.current({table:`${o}.${E}`,dataset:s,refId:"A"})}}});async function k(t,a){const i=await t.fields(a);return i.length>0?i.map(n=>({name:n.value,type:n.value,description:n.value})):[]}async function q(t,a){return await t.lookup?.(a)||[]}var _=r(86832),ee=r(78177);function te(t){switch(t){case"datetimeoffset":case"date":case"datetime2":case"smalldatetime":case"datetime":case"time":return"clock-nine";case"bit":return"toggle-off";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"calculator-alt";case"char":case"varchar":case"text":case"nchar":case"nvarchar":case"ntext":case"binary":case"varbinary":case"image":return"text";default:return}}function ae(t){switch(t){case"datetimeoffset":case"datetime2":case"smalldatetime":case"datetime":return"datetime";case"time":return"time";case"date":return"date";case"bit":return"boolean";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"number";case"char":case"varchar":case"text":case"nchar":case"nvarchar":case"ntext":case"binary":case"varbinary":case"image":return"text";default:return"text"}}function ne({sql:t,dataset:a,table:i}){let n="";if(!t||!(0,ee.IC)(t.columns))return n;if(n+=le(t.columns,t.limit),a&&i&&(n+=`FROM ${a}.${i} `),t.whereString&&(n+=`WHERE ${t.whereString} `),t.groupBy?.[0]?.property.name){const l=t.groupBy.map(s=>s.property.name).filter(s=>!(0,_.isEmpty)(s));n+=`GROUP BY ${l.join(", ")} `}return t.orderBy?.property.name&&(n+=`ORDER BY ${t.orderBy.property.name} `),t.orderBy?.property.name&&t.orderByDirection&&(n+=`${t.orderByDirection} `),n}function le(t,a){const i=t.map(n=>{let l="";return n.name&&n.alias?l+=`${n.name}(${n.parameters?.map(s=>`${s.name}`)}) AS ${n.alias}`:n.name?l+=`${n.name}(${n.parameters?.map(s=>`${s.name}`)})`:n.alias?l+=`${n.parameters?.map(s=>`${s.name}`)} AS ${n.alias}`:l+=`${n.parameters?.map(s=>`${s.name}`)}`,l});return`SELECT ${re(a)?"TOP("+a+")":""} ${i.join(", ")} `}const re=t=>t!==void 0&&t>=0;class ie extends V.D{constructor(a){super(a),this.sqlLanguageDefinition=void 0}getQueryModel(a,i,n){return new z(a,i,n)}async fetchDatasets(){return(await this.runSql(j(),{refId:"datasets"})).fields.name?.values.toArray().flat()??[]}async fetchTables(a){return(await this.runSql(J(a),{refId:"tables"})).fields.schemaAndName?.values.toArray().flat()??[]}async fetchFields(a){if(!a.table)return[];const[i,n]=a.table.split("."),l=await this.runSql(Z(a.dataset,n),{refId:"columns"}),s=[];for(let o=0;o<l.length;o++){const E=l.fields.column.values.get(o),v=l.fields.type.values.get(o);s.push({label:E,value:E,type:v,icon:te(v),raqbFieldType:ae(v)})}return s}getSqlLanguageDefinition(a){if(this.sqlLanguageDefinition!==void 0)return this.sqlLanguageDefinition;const i={getColumns:{current:n=>k(a,n)},getTables:{current:n=>q(a,n)}};return this.sqlLanguageDefinition={id:"sql",completionProvider:X(i),formatter:Y._},this.sqlLanguageDefinition}getDB(){return this.db!==void 0?this.db:{init:()=>Promise.resolve(!0),datasets:()=>this.fetchDatasets(),tables:a=>this.fetchTables(a),getEditorLanguageDefinition:()=>this.getSqlLanguageDefinition(this.db),fields:async a=>!a?.dataset||!a?.table?[]:this.fetchFields(a),validateQuery:a=>Promise.resolve({isError:!1,isValid:!0,query:a,error:"",rawSql:a.rawSql}),dsID:()=>this.id,dispose:a=>{},toRawSql:ne,lookup:async a=>{if(a){const i=a.split(".").filter(n=>n);return i.length>2?[]:i.length===1?(await this.fetchTables(i[0])).map(l=>({name:l,completion:l})):[]}else return(await this.fetchDatasets()).map(n=>({name:n,completion:`${n}.`}))}}}}const se=new w.hf(ie).setQueryEditor($.M).setQueryEditorHelp(F).setConfigEditor(G)},20770:()=>{},58228:()=>{}}]);

//# sourceMappingURL=mssqlPlugin.d185515f0346cf13b517.js.map