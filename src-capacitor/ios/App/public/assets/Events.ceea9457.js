import{K as V,L as g,M as q,O as X,R as H,U as Z,V as ee,W as o,X as k,Y as te,Z as U}from"./index.aa1ba04f.js";function ne(t){return typeof t=="object"&&t!==null}function se(t,e){if(!Boolean(t))throw new Error(e!=null?e:"Unexpected invariant triggered.")}const ie=/\r\n|[\n\r]/g;function L(t,e){let n=0,i=1;for(const s of t.body.matchAll(ie)){if(typeof s.index=="number"||se(!1),s.index>=e)break;n=s.index+s[0].length,i+=1}return{line:i,column:e+1-n}}function re(t){return G(t.source,L(t.source,t.start))}function G(t,e){const n=t.locationOffset.column-1,i="".padStart(n)+t.body,s=e.line-1,a=t.locationOffset.line-1,c=e.line+a,u=e.line===1?n:0,p=e.column+u,_=`${t.name}:${c}:${p}
`,h=i.split(/\r\n|[\n\r]/g),x=h[s];if(x.length>120){const E=Math.floor(p/80),S=p%80,m=[];for(let T=0;T<x.length;T+=80)m.push(x.slice(T,T+80));return _+P([[`${c} |`,m[0]],...m.slice(1,E+1).map(T=>["|",T]),["|","^".padStart(S)],["|",m[E+1]]])}return _+P([[`${c-1} |`,h[s-1]],[`${c} |`,x],["|","^".padStart(p)],[`${c+1} |`,h[s+1]]])}function P(t){const e=t.filter(([i,s])=>s!==void 0),n=Math.max(...e.map(([i])=>i.length));return e.map(([i,s])=>i.padStart(n)+(s?" "+s:"")).join(`
`)}function ae(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class $ extends Error{constructor(e,...n){var i,s,a;const{nodes:c,source:u,positions:p,path:_,originalError:h,extensions:x}=ae(n);super(e),this.name="GraphQLError",this.path=_!=null?_:void 0,this.originalError=h!=null?h:void 0,this.nodes=B(Array.isArray(c)?c:c?[c]:void 0);const E=B((i=this.nodes)===null||i===void 0?void 0:i.map(m=>m.loc).filter(m=>m!=null));this.source=u!=null?u:E==null||(s=E[0])===null||s===void 0?void 0:s.source,this.positions=p!=null?p:E==null?void 0:E.map(m=>m.start),this.locations=p&&u?p.map(m=>L(u,m)):E==null?void 0:E.map(m=>L(m.source,m.start));const S=ne(h==null?void 0:h.extensions)?h==null?void 0:h.extensions:void 0;this.extensions=(a=x!=null?x:S)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),h!=null&&h.stack?Object.defineProperty(this,"stack",{value:h.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,$):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+=`

`+re(n.loc));else if(this.source&&this.locations)for(const n of this.locations)e+=`

`+G(this.source,n);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function B(t){return t===void 0||t.length===0?void 0:t}function f(t,e,n){return new $(`Syntax Error: ${n}`,{source:t,positions:[e]})}let w;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(w||(w={}));let r;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(r||(r={}));class oe{constructor(e){const n=new V(r.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==r.EOF)do if(e.next)e=e.next;else{const n=ue(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===r.COMMENT);return e}}function ce(t){return t===r.BANG||t===r.DOLLAR||t===r.AMP||t===r.PAREN_L||t===r.PAREN_R||t===r.SPREAD||t===r.COLON||t===r.EQUALS||t===r.AT||t===r.BRACKET_L||t===r.BRACKET_R||t===r.BRACE_L||t===r.PIPE||t===r.BRACE_R}function v(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function D(t,e){return Y(t.charCodeAt(e))&&j(t.charCodeAt(e+1))}function Y(t){return t>=55296&&t<=56319}function j(t){return t>=56320&&t<=57343}function N(t,e){const n=t.source.body.codePointAt(e);if(n===void 0)return r.EOF;if(n>=32&&n<=126){const i=String.fromCodePoint(n);return i==='"'?`'"'`:`"${i}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function d(t,e,n,i,s){const a=t.line,c=1+n-t.lineStart;return new V(e,n,i,a,c,s)}function ue(t,e){const n=t.source.body,i=n.length;let s=e;for(;s<i;){const a=n.charCodeAt(s);switch(a){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++t.line,t.lineStart=s;continue;case 13:n.charCodeAt(s+1)===10?s+=2:++s,++t.line,t.lineStart=s;continue;case 35:return de(t,s);case 33:return d(t,r.BANG,s,s+1);case 36:return d(t,r.DOLLAR,s,s+1);case 38:return d(t,r.AMP,s,s+1);case 40:return d(t,r.PAREN_L,s,s+1);case 41:return d(t,r.PAREN_R,s,s+1);case 46:if(n.charCodeAt(s+1)===46&&n.charCodeAt(s+2)===46)return d(t,r.SPREAD,s,s+3);break;case 58:return d(t,r.COLON,s,s+1);case 61:return d(t,r.EQUALS,s,s+1);case 64:return d(t,r.AT,s,s+1);case 91:return d(t,r.BRACKET_L,s,s+1);case 93:return d(t,r.BRACKET_R,s,s+1);case 123:return d(t,r.BRACE_L,s,s+1);case 124:return d(t,r.PIPE,s,s+1);case 125:return d(t,r.BRACE_R,s,s+1);case 34:return n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34?_e(t,s):pe(t,s)}if(g(a)||a===45)return he(t,s,a);if(q(a))return Ee(t,s);throw f(t.source,s,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:v(a)||D(n,s)?`Unexpected character: ${N(t,s)}.`:`Invalid character: ${N(t,s)}.`)}return d(t,r.EOF,i,i)}function de(t,e){const n=t.source.body,i=n.length;let s=e+1;for(;s<i;){const a=n.charCodeAt(s);if(a===10||a===13)break;if(v(a))++s;else if(D(n,s))s+=2;else break}return d(t,r.COMMENT,e,s,n.slice(e+1,s))}function he(t,e,n){const i=t.source.body;let s=e,a=n,c=!1;if(a===45&&(a=i.charCodeAt(++s)),a===48){if(a=i.charCodeAt(++s),g(a))throw f(t.source,s,`Invalid number, unexpected digit after 0: ${N(t,s)}.`)}else s=R(t,s,a),a=i.charCodeAt(s);if(a===46&&(c=!0,a=i.charCodeAt(++s),s=R(t,s,a),a=i.charCodeAt(s)),(a===69||a===101)&&(c=!0,a=i.charCodeAt(++s),(a===43||a===45)&&(a=i.charCodeAt(++s)),s=R(t,s,a),a=i.charCodeAt(s)),a===46||q(a))throw f(t.source,s,`Invalid number, expected digit but got: ${N(t,s)}.`);return d(t,c?r.FLOAT:r.INT,e,s,i.slice(e,s))}function R(t,e,n){if(!g(n))throw f(t.source,e,`Invalid number, expected digit but got: ${N(t,e)}.`);const i=t.source.body;let s=e+1;for(;g(i.charCodeAt(s));)++s;return s}function pe(t,e){const n=t.source.body,i=n.length;let s=e+1,a=s,c="";for(;s<i;){const u=n.charCodeAt(s);if(u===34)return c+=n.slice(a,s),d(t,r.STRING,e,s+1,c);if(u===92){c+=n.slice(a,s);const p=n.charCodeAt(s+1)===117?n.charCodeAt(s+2)===123?le(t,s):fe(t,s):me(t,s);c+=p.value,s+=p.size,a=s;continue}if(u===10||u===13)break;if(v(u))++s;else if(D(n,s))s+=2;else throw f(t.source,s,`Invalid character within String: ${N(t,s)}.`)}throw f(t.source,s,"Unterminated string.")}function le(t,e){const n=t.source.body;let i=0,s=3;for(;s<12;){const a=n.charCodeAt(e+s++);if(a===125){if(s<5||!v(i))break;return{value:String.fromCodePoint(i),size:s}}if(i=i<<4|y(a),i<0)break}throw f(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+s)}".`)}function fe(t,e){const n=t.source.body,i=M(n,e+2);if(v(i))return{value:String.fromCodePoint(i),size:6};if(Y(i)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){const s=M(n,e+8);if(j(s))return{value:String.fromCodePoint(i,s),size:12}}throw f(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function M(t,e){return y(t.charCodeAt(e))<<12|y(t.charCodeAt(e+1))<<8|y(t.charCodeAt(e+2))<<4|y(t.charCodeAt(e+3))}function y(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function me(t,e){const n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw f(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function _e(t,e){const n=t.source.body,i=n.length;let s=t.lineStart,a=e+3,c=a,u="";const p=[];for(;a<i;){const _=n.charCodeAt(a);if(_===34&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34){u+=n.slice(c,a),p.push(u);const h=d(t,r.BLOCK_STRING,e,a+3,X(p).join(`
`));return t.line+=p.length-1,t.lineStart=s,h}if(_===92&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34&&n.charCodeAt(a+3)===34){u+=n.slice(c,a),c=a+1,a+=4;continue}if(_===10||_===13){u+=n.slice(c,a),p.push(u),_===13&&n.charCodeAt(a+1)===10?a+=2:++a,u="",c=a,s=a;continue}if(v(_))++a;else if(D(n,a))a+=2;else throw f(t.source,a,`Invalid character within String: ${N(t,a)}.`)}throw f(t.source,a,"Unterminated string.")}function Ee(t,e){const n=t.source.body,i=n.length;let s=e+1;for(;s<i;){const a=n.charCodeAt(s);if(H(a))++s;else break}return d(t,r.NAME,e,s,n.slice(e,s))}function xe(t,e){return new Ne(t,e).parseDocument()}class Ne{constructor(e,n){const i=Z(e)?e:new ee(e);this._lexer=new oe(i),this._options=n}parseName(){const e=this.expectToken(r.NAME);return this.node(e,{kind:o.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:o.DOCUMENT,definitions:this.many(r.SOF,this.parseDefinition,r.EOF)})}parseDefinition(){if(this.peek(r.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(n.kind===r.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw f(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(r.BRACE_L))return this.node(e,{kind:o.OPERATION_DEFINITION,operation:k.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let i;return this.peek(r.NAME)&&(i=this.parseName()),this.node(e,{kind:o.OPERATION_DEFINITION,operation:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(r.NAME);switch(e.value){case"query":return k.QUERY;case"mutation":return k.MUTATION;case"subscription":return k.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(r.PAREN_L,this.parseVariableDefinition,r.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:o.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(r.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(r.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(r.DOLLAR),this.node(e,{kind:o.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:o.SELECTION_SET,selections:this.many(r.BRACE_L,this.parseSelection,r.BRACE_R)})}parseSelection(){return this.peek(r.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,n=this.parseName();let i,s;return this.expectOptionalToken(r.COLON)?(i=n,s=this.parseName()):s=n,this.node(e,{kind:o.FIELD,alias:i,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(r.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(r.PAREN_L,n,r.PAREN_R)}parseArgument(e=!1){const n=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(n,{kind:o.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(r.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(r.NAME)?this.node(e,{kind:o.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:o.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;const n=this._lexer.token;return this.expectKeyword("fragment"),((e=this._options)===null||e===void 0?void 0:e.allowLegacyFragmentVariables)===!0?this.node(n,{kind:o.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:o.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const n=this._lexer.token;switch(n.kind){case r.BRACKET_L:return this.parseList(e);case r.BRACE_L:return this.parseObject(e);case r.INT:return this._lexer.advance(),this.node(n,{kind:o.INT,value:n.value});case r.FLOAT:return this._lexer.advance(),this.node(n,{kind:o.FLOAT,value:n.value});case r.STRING:case r.BLOCK_STRING:return this.parseStringLiteral();case r.NAME:switch(this._lexer.advance(),n.value){case"true":return this.node(n,{kind:o.BOOLEAN,value:!0});case"false":return this.node(n,{kind:o.BOOLEAN,value:!1});case"null":return this.node(n,{kind:o.NULL});default:return this.node(n,{kind:o.ENUM,value:n.value})}case r.DOLLAR:if(e)if(this.expectToken(r.DOLLAR),this._lexer.token.kind===r.NAME){const i=this._lexer.token.value;throw f(this._lexer.source,n.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:o.STRING,value:e.value,block:e.kind===r.BLOCK_STRING})}parseList(e){const n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:o.LIST,values:this.any(r.BRACKET_L,n,r.BRACKET_R)})}parseObject(e){const n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:o.OBJECT,fields:this.any(r.BRACE_L,n,r.BRACE_R)})}parseObjectField(e){const n=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(n,{kind:o.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const n=[];for(;this.peek(r.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const n=this._lexer.token;return this.expectToken(r.AT),this.node(n,{kind:o.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let n;if(this.expectOptionalToken(r.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(r.BRACKET_R),n=this.node(e,{kind:o.LIST_TYPE,type:i})}else n=this.parseNamedType();return this.expectOptionalToken(r.BANG)?this.node(e,{kind:o.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:o.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(r.STRING)||this.peek(r.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),s=this.many(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);return this.node(e,{kind:o.SCHEMA_DEFINITION,description:n,directives:i,operationTypes:s})}parseOperationTypeDefinition(){const e=this._lexer.token,n=this.parseOperationType();this.expectToken(r.COLON);const i=this.parseNamedType();return this.node(e,{kind:o.OPERATION_TYPE_DEFINITION,operation:n,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),s=this.parseConstDirectives();return this.node(e,{kind:o.SCALAR_TYPE_DEFINITION,description:n,name:i,directives:s})}parseObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:o.OBJECT_TYPE_DEFINITION,description:n,name:i,interfaces:s,directives:a,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(r.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseFieldDefinition,r.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName(),s=this.parseArgumentDefs();this.expectToken(r.COLON);const a=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(e,{kind:o.FIELD_DEFINITION,description:n,name:i,arguments:s,type:a,directives:c})}parseArgumentDefs(){return this.optionalMany(r.PAREN_L,this.parseInputValueDef,r.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName();this.expectToken(r.COLON);const s=this.parseTypeReference();let a;this.expectOptionalToken(r.EQUALS)&&(a=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(e,{kind:o.INPUT_VALUE_DEFINITION,description:n,name:i,type:s,defaultValue:a,directives:c})}parseInterfaceTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:o.INTERFACE_TYPE_DEFINITION,description:n,name:i,interfaces:s,directives:a,fields:c})}parseUnionTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(e,{kind:o.UNION_TYPE_DEFINITION,description:n,name:i,directives:s,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(r.EQUALS)?this.delimitedMany(r.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(e,{kind:o.ENUM_TYPE_DEFINITION,description:n,name:i,directives:s,values:a})}parseEnumValuesDefinition(){return this.optionalMany(r.BRACE_L,this.parseEnumValueDefinition,r.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(e,{kind:o.ENUM_VALUE_DEFINITION,description:n,name:i,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw f(this._lexer.source,this._lexer.token.start,`${O(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(e,{kind:o.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:i,directives:s,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseInputValueDef,r.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===r.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.optionalMany(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:o.SCHEMA_EXTENSION,directives:n,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:o.SCALAR_TYPE_EXTENSION,name:n,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:o.OBJECT_TYPE_EXTENSION,name:n,interfaces:i,directives:s,fields:a})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:o.INTERFACE_TYPE_EXTENSION,name:n,interfaces:i,directives:s,fields:a})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.UNION_TYPE_EXTENSION,name:n,directives:i,types:s})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.ENUM_TYPE_EXTENSION,name:n,directives:i,values:s})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:i,fields:s})}parseDirectiveDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(r.AT);const i=this.parseName(),s=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(e,{kind:o.DIRECTIVE_DEFINITION,description:n,name:i,arguments:s,repeatable:a,locations:c})}parseDirectiveLocations(){return this.delimitedMany(r.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(w,n.value))return n;throw this.unexpected(e)}node(e,n){var i;return((i=this._options)===null||i===void 0?void 0:i.noLocation)!==!0&&(n.loc=new te(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){const n=this._lexer.token;if(n.kind===e)return this._lexer.advance(),n;throw f(this._lexer.source,n.start,`Expected ${K(e)}, found ${O(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this._lexer.advance(),!0):!1}expectKeyword(e){const n=this._lexer.token;if(n.kind===r.NAME&&n.value===e)this._lexer.advance();else throw f(this._lexer.source,n.start,`Expected "${e}", found ${O(n)}.`)}expectOptionalKeyword(e){const n=this._lexer.token;return n.kind===r.NAME&&n.value===e?(this._lexer.advance(),!0):!1}unexpected(e){const n=e!=null?e:this._lexer.token;return f(this._lexer.source,n.start,`Unexpected ${O(n)}.`)}any(e,n,i){this.expectToken(e);const s=[];for(;!this.expectOptionalToken(i);)s.push(n.call(this));return s}optionalMany(e,n,i){if(this.expectOptionalToken(e)){const s=[];do s.push(n.call(this));while(!this.expectOptionalToken(i));return s}return[]}many(e,n,i){this.expectToken(e);const s=[];do s.push(n.call(this));while(!this.expectOptionalToken(i));return s}delimitedMany(e,n){this.expectOptionalToken(e);const i=[];do i.push(n.call(this));while(this.expectOptionalToken(e));return i}}function O(t){const e=t.value;return K(t.kind)+(e!=null?` "${e}"`:"")}function K(t){return ce(t)?`"${t}"`:t}var b=new Map,F=new Map,z=!0,C=!1;function Q(t){return t.replace(/[\s,]+/g," ").trim()}function Te(t){return Q(t.source.body.substring(t.start,t.end))}function Ie(t){var e=new Set,n=[];return t.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var s=i.name.value,a=Te(i.loc),c=F.get(s);c&&!c.has(a)?z&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):c||F.set(s,c=new Set),c.add(a),e.has(a)||(e.add(a),n.push(i))}else n.push(i)}),U(U({},t),{definitions:n})}function ve(t){var e=new Set(t.definitions);e.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(s){var a=i[s];a&&typeof a=="object"&&e.add(a)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function Ae(t){var e=Q(t);if(!b.has(e)){var n=xe(t,{experimentalFragmentVariables:C,allowLegacyFragmentVariables:C});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");b.set(e,ve(Ie(n)))}return b.get(e)}function I(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var i=t[0];return e.forEach(function(s,a){s&&s.kind==="Document"?i+=s.loc.source.body:i+=s,i+=t[a+1]}),Ae(i)}function ye(){b.clear(),F.clear()}function ke(){z=!1}function Oe(){C=!0}function be(){C=!1}var A={gql:I,resetCaches:ye,disableFragmentWarnings:ke,enableExperimentalFragmentVariables:Oe,disableExperimentalFragmentVariables:be};(function(t){t.gql=A.gql,t.resetCaches=A.resetCaches,t.disableFragmentWarnings=A.disableFragmentWarnings,t.enableExperimentalFragmentVariables=A.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=A.disableExperimentalFragmentVariables})(I||(I={}));I.default=I;var l=I;const J=l`
  fragment UserInfo on users {
    id
    member_code
    avatar_url
    member_info {
      id
      first_names
      last_names
      email
      subscriptions {
        expiration
      }
    }
  }
`,W=l`
  fragment EventsFragment on events {
    date
    description
    image_url
    invitation_url
    title
    type
    id
  }
`,Ce=l`
  ${J}
  query GetUserSession($password: String!, $member_code: String!) {
    users(
      where: {
        password: { _eq: $password }
        member_code: { _eq: $member_code }
      }
    ) {
      ...UserInfo
    }
  }
`;l`
  ${J}
  query USER_BY_ID($id: uuid = "") {
    users_by_pk(id: $id) {
      ...UserInfo
    }
  }
`;const De=l`
  query getProviderProducts($id: uuid = "", $query: String = "") {
    providers(where: { id: { _eq: $id } }) {
      products(
        where: { name: { _ilike: $query }, description: { _ilike: $query } }
      ) {
        id
        available
        description
        name
        base_price_sol
        details
        image_url
        offer_discount
      }
    }
  }
`,Se=l`
  query getDetailProduct($id: uuid = "") {
    products(where: { id: { _eq: $id } }) {
      base_price_sol
      description
      name
      image_url
      id
    }
  }
`,Re=l`
  query getListOfProducts($filters: [products_bool_exp!]) {
    products(where: { _or: $filters }) {
      name
      id
      base_price_sol
      unit_system
      available
    }
  }
`,Le=l`
  query getListOfProviders(
    $query: String = "%%"
    $limit: Int = 100
    $offset: Int = 0
    $order_by: providers_order_by! = {}
  ) {
    providers(
      where: {
        _or: [
          { commercial_name: { _ilike: $query } }
          { legal_name: { _ilike: $query } }
        ]
        is_active: { _eq: true }
      }
      offset: $offset
      limit: $limit
      order_by: [$order_by]
    ) {
      logo_url
      id
    }
    providers_aggregate(
      where: { commercial_name: { _ilike: $query }, is_active: { _eq: true } }
      offset: $offset
      limit: $limit
    ) {
      aggregate {
        count
      }
    }
  }
`,we=l`
  query getProviderDetail($id: uuid = "") {
    providers(where: { id: { _eq: $id } }) {
      address
      b2b_email
      b2b_phone
      commercial_name
      details
      logo_url
    }
  }
`,Fe=l`
  ${W}
  query GetEventsList($limit: Int, $name: String = "%%") {
    events(
      order_by: { date: asc }
      limit: $limit
      where: {
        is_active: { _eq: true }
        title: { _ilike: $name }
        date: { _gte: "now()" }
      }
    ) {
      ...EventsFragment
    }
  }
`,$e=l`
  ${W}
  query GetEventById($event_id: uuid!, $member_id: uuid = "") {
    events_by_pk(id: $event_id) {
      ...EventsFragment
      inscriptions(
        where: { member_id: { _eq: $member_id }, event_id: { _eq: $event_id } }
      ) {
        id
      }
    }
  }
`;l`
  query GetEventsByUser($userId: uuid!) {
    events(
      distinct_on: date
      where: { inscriptions: { member_id: { _eq: $userId } } }
    ) {
      date
    }
  }
`;const Ue=l`
  query EventsByMemberAndDay(
    $from_date: timestamptz
    $to_date: timestamptz
    $member_id: uuid = ""
  ) {
    events(
      where: {
        date: { _gte: $from_date, _lt: $to_date }
        inscriptions: { member_id: { _eq: $member_id } }
      }
    ) {
      id
      date
      title
    }
  }
`,Pe=l`
  query userActiveInscriptions($member_id: uuid!, $from_date: timestamptz!) {
    inscriptions(
      where: {
        member_id: { _eq: $member_id }
        event_information: { date: { _gte: $from_date } }
      }
    ) {
      event_information {
        date
      }
    }
  }
`,Be=l`
  mutation UpdateUserPassword($password: String!, $id: uuid!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { password: $password }) {
      id
    }
  }
`,Me=l`
  mutation UpdateUserAvatar($avatar: String!, $id: uuid!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { avatar_url: $avatar }) {
      avatar_url
    }
  }
`,Ve=l`
  mutation InsertUserInEvent($event_id: uuid!, $member_id: uuid!) {
    insert_inscriptions_one(
      object: { event_id: $event_id, member_id: $member_id }
    ) {
      id
    }
  }
`,qe=l`
  mutation RemoveUserFromEvent($inscription_id: uuid!) {
    delete_inscriptions_by_pk(id: $inscription_id) {
      id
    }
  }
`;export{Fe as E,Le as P,Ve as S,Ce as U,Be as a,Me as b,we as c,Ue as d,$e as e,qe as f,Pe as g,De as h,Se as i,Re as j};
