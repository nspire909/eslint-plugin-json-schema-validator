(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{152:function(e,t,i){},155:function(e,t,i){},164:function(e,t,i){"use strict";i(152)},166:function(e,t,i){"use strict";i.r(t),i.d(t,"language",(function(){return n}));const n={tokenPostfix:".toml",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["true","false","nan","+nan","-nan","inf","+inf","-inf"],numberInteger:/0|[+-]?\d[\d_]*/,numberFloat:/(?:0|[+-]?\d[\d_]*)(?:\.\d+)?(?:e[+-]?[1-9]\d*)?/,numberOctal:/0o[0-7][0-7_]*/,numberHex:/0x[\dA-Fa-f][\dA-F_a-f]*/,numberBinary:/0b[01][01_]*/,numberDate:/\d{4}-\d{2}-\d{2}([ Tt]\d{2}:\d{2}:\d{2}(\.\d+)?(( ?[+-]\d{1,2}(:\d{2})?)|Z)?)?/,escapes:/\\["\\bfnrt]/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},{include:"@inlineCollections"},[/(".*?"|'.*?'|.*?)([\t ]*)(=)(\s+|$)/,["type","white","operators","white"]],{include:"@numbers"},{include:"@scalars"},[/\S+$/,{cases:{"@keywords":"keyword","@default":"string"}}]],object:[{include:"@whitespace"},{include:"@comment"},[/\}/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/[=]/,"operators"],[/(?:".*?"|'.*?'|[^,[{]+?)(?=[=])/u,"type"],{include:"@inlineCollections"},{include:"@scalars"},{include:"@numbers"},[/[^\s,}]+/u,{cases:{"@keywords":"keyword","@default":"string"}}]],array:[{include:"@whitespace"},{include:"@comment"},[/\]/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/\./,"delimiter.comma"],{include:"@inlineCollections"},{include:"@scalars"},{include:"@numbers"},[/[^\s,.\]]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],whitespace:[[/[\t\n\r ]+/,"white"]],comment:[[/#.*$/,"comment"]],inlineCollections:[[/\[/,"@brackets","@array"],[/\{/,"@brackets","@object"]],scalars:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'''[^']*'''/,"string"],[/'[^']*'/,"string"],[/"""/,"string","@mlDoubleQuotedString"],[/"/,"string","@doubleQuotedString"]],mlDoubleQuotedString:[[/[^"\\]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"""/,"string","@pop"]],doubleQuotedString:[[/[^"\\]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],numbers:[[/@numberInteger(?=[\t ]*[#,\]}])/u,"number"],[/@numberFloat(?=[\t ]*[#,\]}])/u,"number.float"],[/@numberOctal(?=[\t ]*[#,\]}])/u,"number.octal"],[/@numberBinary(?=[\t ]*[#,\]}])/u,"number.binary"],[/@numberHex(?=[\t ]*[#,\]}])/u,"number.hex"],[/@numberDate(?=[\t ]*[#,\]}])/u,"number.date"],[/@numberInteger(?![\t ]*\S)/,"number"],[/@numberFloat(?![\t ]*\S)/,"number.float"],[/@numberBinary(?![\t ]*\S)/u,"number.binary"],[/@numberOctal(?![\t ]*\S)/,"number.octal"],[/@numberHex(?![\t ]*\S)/,"number.hex"],[/@numberDate(?![\t ]*\S)/,"number.date"]]}}},167:function(e,t,i){"use strict";i.r(t),i.d(t,"conf",(function(){return n})),i.d(t,"language",(function(){return r}));
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var n={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:!0}},r={tokenPostfix:".yaml",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["true","True","TRUE","false","False","FALSE","null","Null","Null","~"],numberInteger:/(?:0|[+-]?[0-9]+)/,numberFloat:/(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,numberOctal:/0o[0-7]+/,numberHex:/0x[0-9a-fA-F]+/,numberInfinity:/[+-]?\.(?:inf|Inf|INF)/,numberNaN:/\.(?:nan|Nan|NAN)/,numberDate:/\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,escapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/%[^ ]+.*$/,"meta.directive"],[/---/,"operators.directivesEnd"],[/\.{3}/,"operators.documentEnd"],[/[-?:](?= )/,"operators"],{include:"@anchor"},{include:"@tagHandle"},{include:"@flowCollections"},{include:"@blockStyle"},[/@numberInteger(?![ \t]*\S+)/,"number"],[/@numberFloat(?![ \t]*\S+)/,"number.float"],[/@numberOctal(?![ \t]*\S+)/,"number.octal"],[/@numberHex(?![ \t]*\S+)/,"number.hex"],[/@numberInfinity(?![ \t]*\S+)/,"number.infinity"],[/@numberNaN(?![ \t]*\S+)/,"number.nan"],[/@numberDate(?![ \t]*\S+)/,"number.date"],[/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,["type","white","operators","white"]],{include:"@flowScalars"},[/[^#]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],object:[{include:"@whitespace"},{include:"@comment"},[/\}/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/:(?= )/,"operators"],[/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,"type"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\},]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],array:[{include:"@whitespace"},{include:"@comment"},[/\]/,"@brackets","@pop"],[/,/,"delimiter.comma"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\],]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],multiString:[[/^( +).+$/,"string","@multiStringContinued.$1"]],multiStringContinued:[[/^( *).+$/,{cases:{"$1==$S2":"string","@default":{token:"@rematch",next:"@popall"}}}]],whitespace:[[/[ \t\r\n]+/,"white"]],comment:[[/#.*$/,"comment"]],flowCollections:[[/\[/,"@brackets","@array"],[/\{/,"@brackets","@object"]],flowScalars:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'[^']*'/,"string"],[/"/,"string","@doubleQuotedString"]],doubleQuotedString:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],blockStyle:[[/[>|][0-9]*[+-]?$/,"operators","@multiString"]],flowNumber:[[/@numberInteger(?=[ \t]*[,\]\}])/,"number"],[/@numberFloat(?=[ \t]*[,\]\}])/,"number.float"],[/@numberOctal(?=[ \t]*[,\]\}])/,"number.octal"],[/@numberHex(?=[ \t]*[,\]\}])/,"number.hex"],[/@numberInfinity(?=[ \t]*[,\]\}])/,"number.infinity"],[/@numberNaN(?=[ \t]*[,\]\}])/,"number.nan"],[/@numberDate(?=[ \t]*[,\]\}])/,"number.date"]],tagHandle:[[/\![^ ]*/,"tag"]],anchor:[[/[&*][^ ]+/,"namespace"]]}}},168:function(e,t,i){"use strict";i(155)},169:function(e,t,i){"use strict";const n={autoIndent:!0,automaticLayout:!0,find:{autoFindInSelection:!0,seedSearchStringFromSelection:!0},minimap:{enabled:!1},renderControlCharacters:!0,renderIndentGuides:!0,renderValidationDecorations:"on",renderWhitespace:"boundary",scrollBeyondLastLine:!1};function r(e,t){return Math.max(1,0|(void 0!==e?e:t))}function o(e,t){const i=e.getModel();null!=i&&t!==i.getValue()&&i.setValue(t)}function s(e){null!=e&&(e.getOriginalEditor&&s(e.getOriginalEditor()),e.getModifiedEditor&&s(e.getModifiedEditor()),e.getModel&&s(e.getModel()),e.dispose&&e.dispose())}function a(e){const t=("string"==typeof e.code?e.code:e.code&&e.code.value)||"";return`[${e.startLineNumber},${e.startColumn},${e.endLineNumber},${e.endColumn}]-${t}`}function l(e,t,i,n){const r=i.getPositionAt(n.range[0]),o=i.getPositionAt(n.range[1]),s={startLineNumber:r.lineNumber,startColumn:r.column,endLineNumber:o.lineNumber,endColumn:o.column};return{title:e,diagnostics:[t],kind:"quickfix",edit:{edits:[{resource:i.uri,edit:{range:s,text:n.text}}]}}}var d={name:"ESLintEditor",model:{prop:"code",event:"input"},props:{linter:{type:Object,default:null},code:{type:String,default:""},config:{type:Object,default:()=>({})},dark:{type:Boolean},filename:{type:String,default:"a.js"},preprocess:{type:Function,default:null,required:!1},postprocess:{type:Function,default:null,required:!1},fix:{type:Boolean},format:{type:Object,default:()=>({insertSpaces:!0,tabSize:4})},language:{type:String,default:"javascript"}},data(){return{monaco:null,monacoLoadingError:null,loadLanguage:null,editor:null,editing:!1,messages:[],fixedCode:this.code,fixedMessages:[],previewFix:!1,requestFix:!1,editorMessageMap:new Map,codeActionProviderDisposable:null}},computed:{codeEditor(){const e=this.editor;return null!=e?null!=e.getOriginalEditor?e.getOriginalEditor():e:null},fixedCodeEditor(){const e=this.editor;return null!=e&&null!=e.getModifiedEditor?e.getModifiedEditor():null},codeActionProvider(){return{provideCodeActions:(e,t,i)=>{const{editorMessageMap:n}=this,r=n.get(e.uri);if("quickfix"!==i.only||!r)return{actions:[],dispose(){}};const o=[];for(const t of i.markers){const i=r.get(a(t));if(i&&(i.fix&&o.push(l(`Fix this ${i.ruleId} problem`,t,e,i.fix)),i.suggestions))for(const n of i.suggestions)o.push(l(`${n.desc} (${i.ruleId})`,t,e,n.fix))}return{actions:o,dispose(){}}}}}},watch:{linter(){this.invalidate()},code(e){this.updateCode(e)},previewFix(){this.initialize()},config:{handler(){this.invalidate()},deep:!0},filename(){this.invalidate()},fix(){this.initialize()},fixedCode(e){const t=this.fixedCodeEditor;null!=t&&o(t,e)},fixedMessages(e){const t=this.fixedCodeEditor;null!=t&&this.updateMarkers(t,e)},format(e){const t=this.codeEditor;null!=t&&t.getModel().updateOptions(e)},messages(e){const t=this.codeEditor;null!=t&&this.updateMarkers(t,e,!0)},language(e){const{monaco:t,loadLanguage:i}=this;null!=t&&(async()=>{if(await i(e),e===this.language){for(const i of[this.codeEditor,this.fixedCodeEditor])null!=i&&t.editor.setModelLanguage(i.getModel(),e);s(this.codeActionProviderDisposable),this.codeActionProviderDisposable=this.monaco.languages.registerCodeActionProvider(this.language,this.codeActionProvider)}})().catch(t=>{console.error("Failed to set the language '%s':",e,t)})}},mounted(){(async()=>{const{monaco:e,loadLanguage:t}=await Promise.all([i.e(0),i.e(18)]).then(i.bind(null,890));await t(this.language),this.monaco=e,this.loadLanguage=t,this.codeActionProviderDisposable=e.languages.registerCodeActionProvider(this.language,this.codeActionProvider)})().catch(e=>{console.error("Failed to load Monaco editor:",e),this.monacoLoadingError=e})},beforeDestroy(){s(this.editor),s(this.codeActionProviderDisposable),this.$refs.monaco.innerHTML="",this.editor=null},methods:{fadeIn(e){this.$refs.monaco&&this.$refs.monaco.parentNode===e&&this.initialize()},initialize(){null!=this.monaco&&(s(this.editor),this.$refs.monaco.innerHTML="",this.editor=this.previewFix?this.createTwoPaneEditor():this.createEditor(),this.lint())},createEditor(){const{code:e,dark:t,format:i,language:r,messages:o,monaco:s}=this,a=s.editor.createModel(e,r);a.updateOptions(i),a.onDidChangeContent(()=>{this.$emit("input",a.getValue()),this.invalidate()});const l=s.editor.create(this.$refs.monaco,{model:a,theme:t?"vs-dark":"vs",...n});return this.updateMarkers(l,o,!0),l},createTwoPaneEditor(){const{code:e,dark:t,fixedCode:i,fixedMessages:r,format:o,language:s,messages:a,monaco:l}=this,d=l.editor.createDiffEditor(this.$refs.monaco,{originalEditable:!0,theme:t?"vs-dark":"vs",...n}),c=l.editor.createModel(e,s),u=l.editor.createModel(i,s),m=d.getOriginalEditor(),g=d.getModifiedEditor();return g.updateOptions({readOnly:!0}),c.updateOptions(o),c.onDidChangeContent(()=>{const e=c.getValue();this.fixedCode=e,this.$emit("input",e),this.invalidate()}),d.setModel({original:c,modified:u}),this.updateMarkers(m,a,!0),this.updateMarkers(g,r),d},messageToMarker(e){const{monaco:t,linter:i}=this,n=e.ruleId&&i.getRules().get(e.ruleId),o=n&&n.meta&&n.meta.docs&&n.meta.docs.url,s=r(e.line,1),a=r(e.column,1),l=r(e.endLine,s),d=r(e.endColumn,a+1);return{code:o?{value:e.ruleId,link:o}:e.ruleId||"FATAL",severity:t.MarkerSeverity.Error,source:"ESLint",message:e.message,startLineNumber:s,startColumn:a,endLineNumber:l,endColumn:d}},updateMarkers(e,t,i){const{monaco:n,editorMessageMap:r}=this,o=e.getModel(),s=e.getId();r.delete(o.uri);const l=[];let d=null;i&&(d=new Map,r.set(o.uri,d));for(const e of t){const t=this.messageToMarker(e);l.push(t),i&&d.set(a(t),e)}n.editor.setModelMarkers(o,s,l)},updateCode(e){const t=this.codeEditor;null!=t&&o(t,e),this.invalidate()},invalidate(){null==this.editor||this.editing||(this.editing=!0,setTimeout(()=>{this.lint(),this.editing=!1},667))},lint(){const{codeEditor:e,config:t,filename:i,preprocess:n,postprocess:r,linter:o}=this;if(null==e||null==o)return;this.editorMessageMap.clear();const s=e.getModel().getValue();try{this.messages=o.verify(s,t,{filename:i,preprocess:n,postprocess:r})}catch(e){this.messages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}try{const e=o.verifyAndFix(s,t,{filename:i});this.fixedCode=e.fixed?e.output:s,this.fixedMessages=e.messages}catch(e){this.fixedCode=s,this.fixedMessages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}this.$emit("change",{code:s,messages:this.messages,fixedCode:this.fixedCode,fixedMessages:this.fixedMessages}),this.requestFix&&(this.requestFix=!1,this.fixedCode!==this.code&&(this.$emit("input",this.fixedCode),this.updateCode(this.fixedCode)))},applyAutofix(){const{code:e,fixedCode:t,editing:i}=this;i?this.requestFix=!0:t!==e&&(this.$emit("input",t),this.updateCode(t))}}},c=(i(164),i(6)),u=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"eslint-editor-root",class:{"eslint-editor-dark":e.dark}},[t("transition",{attrs:{name:"eslint-editor-fade"},on:{"before-enter":e.fadeIn}},[e.monaco?t("div",{key:"editor",staticClass:"eslint-editor-swap-container"},[t("div",{ref:"monaco",staticClass:"eslint-editor-monaco"}),e._v(" "),e.fix?t("div",{staticClass:"eslint-editor-actions"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.previewFix,expression:"previewFix"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.previewFix)?e._i(e.previewFix,null)>-1:e.previewFix},on:{change:function(t){var i=e.previewFix,n=t.target,r=!!n.checked;if(Array.isArray(i)){var o=e._i(i,null);n.checked?o<0&&(e.previewFix=i.concat([null])):o>-1&&(e.previewFix=i.slice(0,o).concat(i.slice(o+1)))}else e.previewFix=r}}}),e._v("\n                        Preview\n                    ")]),e._v(" "),t("button",{on:{click:e.applyAutofix}},[e._v("\n                        Apply\n                    ")])]):e._e()]):t("div",{key:"placeholder",staticClass:"eslint-editor-swap-container"},[t("code",{staticClass:"eslint-editor-placeholder-code"},[e._v(e._s(e.code))]),e._v(" "),t("transition",{attrs:{name:"eslint-editor-fade"}},[e.monacoLoadingError?t("div",{key:"error",staticClass:"eslint-editor-placeholder-error"},[e._v("\n                        Failed to load this editor\n                    ")]):t("div",{key:"loading",staticClass:"eslint-editor-placeholder-loading"},[t("div",{staticClass:"eslint-editor-placeholder-loading-icon"},[t("div"),e._v(" "),t("div"),e._v(" "),t("div")]),e._v(" "),t("div",{staticClass:"eslint-editor-placeholder-loading-message"},[e._v("\n                            Now loading...\n                        ")])])])],1)])],1)}),[],!1,null,null,null);t.a=u.exports},174:function(e,t,i){"use strict";i.r(t);var n=i(169),r=i(160),o=i.n(r),s={name:"EslintPluginEditor",components:{EslintEditor:n.a},model:{prop:"code"},props:{code:{type:String,default:""},fix:{type:Boolean},rules:{type:Object,default:()=>({})},dark:{type:Boolean},language:{type:String,default:"json"},fileName:{type:String,default:"a.json"},parser:{type:String,default:"jsonc-eslint-parser"}},data:()=>({eslint4b:null,jsoncESLintParser:null,yamlESLintParser:null,tomlESLintParser:null,vueESLintParser:null,format:{insertSpaces:!0,tabSize:2}}),computed:{config(){return{globals:{ArrayBuffer:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1,WeakMap:!1,WeakSet:!1,Atomics:!1,SharedArrayBuffer:!1},rules:this.rules,parser:this.parser,parserOptions:{sourceType:"script",ecmaVersion:2020}}},linter(){if(!(this.eslint4b&&this.jsoncESLintParser&&this.yamlESLintParser&&this.tomlESLintParser&&this.vueESLintParser))return null;const e=new(0,this.eslint4b);e.defineParser("jsonc-eslint-parser",this.jsoncESLintParser),e.defineParser("yaml-eslint-parser",this.yamlESLintParser),e.defineParser("toml-eslint-parser",this.tomlESLintParser),e.defineParser("vue-eslint-parser",this.vueESLintParser);for(const t of Object.keys(o.a.rules)){const i=o.a.rules[t];e.defineRule(i.meta.docs.ruleId,i)}return e}},async mounted(){const[{default:e},t,n,r,o]=await Promise.all([Promise.all([i.e(3),i.e(4)]).then(i.t.bind(null,794,7)),Promise.resolve().then(i.t.bind(null,170,7)),Promise.resolve().then(i.t.bind(null,157,7)),Promise.resolve().then(i.t.bind(null,161,7)),Promise.resolve().then(i.t.bind(null,175,7)).then(()=>Promise.all([i.e(3),i.e(4),i.e(7),i.e(19)]).then(i.t.bind(null,889,7)))]);this.eslint4b=e,this.jsoncESLintParser=t,this.yamlESLintParser=n,this.tomlESLintParser=r,this.vueESLintParser=o;const s=this.$refs.editor;s.$watch("monaco",()=>{const{monaco:e}=s;e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.register({id:"toml"}),e.languages.setMonarchTokensProvider("toml",i(166).language),e.languages.register({id:"yaml"}),e.languages.setMonarchTokensProvider("yaml",i(167).language)}),s.$watch("codeEditor",()=>{s.codeEditor&&s.codeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(s.codeEditor))}),s.$watch("fixedCodeEditor",()=>{s.fixedCodeEditor&&s.fixedCodeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(s.fixedCodeEditor))})},methods:{onDidChangeModelDecorations(e){const{monaco:t}=this.$refs.editor,i=e.getModel();t.editor.setModelMarkers(i,"json",[])}}},a=(i(168),i(6)),l=Object(a.a)(s,(function(){var e=this;return(0,e._self._c)("eslint-editor",{ref:"editor",staticClass:"eslint-code-block",attrs:{linter:e.linter,config:e.config,code:e.code,language:e.language,filename:e.fileName,dark:e.dark,format:e.format,fix:e.fix},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,"08271a57",null);t.default=l.exports},894:function(e,t,i){"use strict";i.r(t);var n={name:"ESLintCodeBlock",components:{EslintPluginEditor:i(174).default},props:{fix:{type:Boolean},rules:{type:Object,default:()=>({})},fileName:{type:String,default:void 0}},data:()=>({code:"",height:""}),computed:{language(){const e=(""+this.fileName).toLowerCase();return e.endsWith(".yaml")||e.endsWith(".yml")?"yaml":e.endsWith(".toml")?"toml":e.endsWith(".vue")?"html":e.endsWith(".js")?"javascript":"json"}},mounted(){this.code=this.computeCodeFromSlot(this.$slots.default).trim()+"\n";const e=this.code.split("\n").length;this.height=Math.max(120,20*(1+e))+"px"},methods:{computeCodeFromSlot(e){return Array.isArray(e)?e.map(e=>e.text||this.computeCodeFromSlot(e.children)).join(""):""}}},r=i(6),o=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)("eslint-plugin-editor",{ref:"editor",style:{height:e.height},attrs:{rules:e.rules,dark:"",fix:e.fix,"file-name":e.fileName,language:e.language,parser:"yaml"===e.language?"yaml-eslint-parser":"toml"===e.language?"toml-eslint-parser":"html"===e.language?"vue-eslint-parser":"json"===e.language?"jsonc-eslint-parser":"espree"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})}),[],!1,null,null,null);t.default=o.exports}}]);