(()=>{"use strict";var t,e,n;!function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"}(t||(t={})),function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"}(e||(e={})),function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(n||(n={}));const o=["user","model","function","system"];var s,i,r,a,c,u,l,d;!function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"}(s||(s={})),function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"}(i||(i={})),function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"}(r||(r={})),function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"}(a||(a={})),function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"}(c||(c={})),function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"}(u||(u={})),function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"}(l||(l={}));class h extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class f extends h{constructor(t,e){super(t),this.response=e}}class p extends h{constructor(t,e,n,o){super(t),this.status=e,this.statusText=n,this.errorDetails=o}}class g extends h{}!function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"}(d||(d={}));class y{constructor(t,e,n,o,s){this.model=t,this.task=e,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var t,e;const n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta";let o=`${(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com"}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function m(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){const e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.19.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(t){throw new g(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${t.message}`)}for(const[t,e]of o.entries()){if("x-goog-api-key"===t)throw new g(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new g(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function v(t,e,n,o,s,i={},r=fetch){const{url:a,fetchOptions:c}=await async function(t,e,n,o,s,i){const r=new y(t,e,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},E(i)),{method:"POST",headers:await m(r),body:s})}}(t,e,n,o,s,i);return async function(t,e,n=fetch){let o;try{o=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof p||t instanceof g||(n=new h(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}(e,t)}return o.ok||await async function(t,e){let n,o="";try{const e=await t.json();o=e.error.message,e.error.details&&(o+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new p(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${o}`,t.status,t.statusText,n)}(o,t),o}(a,c,r)}function E(t){const e={};if(void 0!==(null==t?void 0:t.signal)||(null==t?void 0:t.timeout)>=0){const n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout((()=>n.abort()),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",(()=>{n.abort()})),e.signal=n.signal}return e}function C(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),w(t.candidates[0]))throw new f(`${b(t)}`,t);return function(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new f(`Text not available. ${b(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),w(t.candidates[0]))throw new f(`${b(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),O(t)[0]}if(t.promptFeedback)throw new f(`Function call not available. ${b(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),w(t.candidates[0]))throw new f(`${b(t)}`,t);return O(t)}if(t.promptFeedback)throw new f(`Function call not available. ${b(t)}`,t)},t}function O(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const _=[c.RECITATION,c.SAFETY,c.LANGUAGE];function w(t){return!!t.finishReason&&_.includes(t.finishReason)}function b(t){var e,n,o;let s="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null===(o=t.candidates)||void 0===o?void 0:o[0]){const e=t.candidates[0];w(e)&&(s+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(s+=`: ${e.finishMessage}`))}}else s+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(s+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);return s}function T(t){return this instanceof T?(this.v=t,this):new T(t)}"function"==typeof SuppressedError&&SuppressedError;const I=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function S(t){const e=[],n=t.getReader();for(;;){const{done:t,value:o}=await n.read();if(t)return C(A(e));e.push(o)}}function N(t){return function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(t,e||[]),i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(t){s[t]&&(o[t]=function(e){return new Promise((function(n,o){i.push([t,e,n,o])>1||a(t,e)}))})}function a(t,e){try{(n=s[t](e)).value instanceof T?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(t){l(i[0][3],t)}var n}function c(t){a("next",t)}function u(t){a("throw",t)}function l(t,e){t(e),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,(function*(){const e=t.getReader();for(;;){const{value:t,done:n}=yield T(e.read());if(n)break;yield yield T(C(t))}}))}function A(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const e of t){if(e.candidates)for(const t of e.candidates){const e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});const o={};for(const s of t.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[e].content.parts.push(o)}}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}async function R(t,e,n,o){return function(t){const e=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return function o(){return e.read().then((({value:e,done:s})=>{if(s)return n.trim()?void t.error(new h("Failed to parse stream")):void t.close();n+=e;let i,r=n.match(I);for(;r;){try{i=JSON.parse(r[1])}catch(e){return void t.error(new h(`Error parsing JSON response: "${r[1]}"`))}t.enqueue(i),n=n.substring(r[0].length),r=n.match(I)}return o()}))}()}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,o]=e.tee();return{stream:N(n),response:S(o)}}(await v(e,d.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o))}async function x(t,e,n,o){const s=await v(e,d.GENERATE_CONTENT,t,!1,JSON.stringify(n),o);return{response:C(await s.json())}}function L(t){if(null!=t)return"string"==typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function M(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(const n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new h("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new h("No content is provided for sending chat message.");return o?e:n}(e)}function j(t){let e;return e=t.contents?t:{contents:[M(t)]},t.systemInstruction&&(e.systemInstruction=L(t.systemInstruction)),e}const G=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],D={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},P="SILENT_ERROR";class H{constructor(t,e,n,s={}){this.model=e,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(const n of t){const{role:t,parts:s}=n;if(!e&&"user"!==t)throw new h(`First content should be with role 'user', got ${t}`);if(!o.includes(t))throw new h(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(o)}`);if(!Array.isArray(s))throw new h("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new h("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const t of s)for(const e of G)e in t&&(i[e]+=1);const r=D[t];for(const e of G)if(!r.includes(e)&&i[e]>0)throw new h(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,o,s,i,r,a;await this._sendPromise;const c=M(t),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e);let d;return this._sendPromise=this._sendPromise.then((()=>x(this._apiKey,this.model,u,l))).then((t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{const e=b(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}d=t})),await this._sendPromise,d}async sendMessageStream(t,e={}){var n,o,s,i,r,a;await this._sendPromise;const c=M(t),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e),d=R(this._apiKey,this.model,u,l);return this._sendPromise=this._sendPromise.then((()=>d)).catch((t=>{throw new Error(P)})).then((t=>t.response)).then((t=>{if(t.candidates&&t.candidates.length>0){this._history.push(c);const e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{const e=b(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}})).catch((t=>{t.message!==P&&console.error(t)})),d}}class F{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=L(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;const o=j(t),s=Object.assign(Object.assign({},this._requestOptions),e);return x(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(t,e={}){var n;const o=j(t),s=Object.assign(Object.assign({},this._requestOptions),e);return R(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(t){var e;return new H(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){const n=function(t,e){var n;let o={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]};const s=null!=t.generateContentRequest;if(t.contents){if(s)throw new g("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const e=M(t);o.contents=[e]}return{generateContentRequest:o}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){return(await v(e,d.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async embedContent(t,e={}){const n="string"==typeof(s=t)||Array.isArray(s)?{content:M(s)}:s,o=Object.assign(Object.assign({},this._requestOptions),e);var s;return async function(t,e,n,o){return(await v(e,d.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async batchEmbedContents(t,e={}){const n=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){const s=n.requests.map((t=>Object.assign(Object.assign({},t),{model:e})));return(await v(e,d.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}(this.apiKey,this.model,t,n)}}class U{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new F(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new g("Cached content must contain a `name` field.");if(!t.model)throw new g("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const n of o)if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new g(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}const s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new F(this.apiKey,s,n)}}function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function k(){k=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof m?e:m,r=Object.create(i.prototype),a=new R(o||[]);return s(r,"_invoke",{value:I(t,n,a)}),r}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",g="completed",y={};function m(){}function v(){}function E(){}var C={};u(C,r,(function(){return this}));var O=Object.getPrototypeOf,_=O&&O(O(x([])));_&&_!==n&&o.call(_,r)&&(C=_);var w=E.prototype=m.prototype=Object.create(C);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(s,i,r,a){var c=d(t[s],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==$(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,r,a)}),(function(t){n("throw",t,r,a)})):e.resolve(l).then((function(t){u.value=t,r(u)}),(function(t){return n("throw",t,r,a)}))}a(c.arg)}var i;s(this,"_invoke",{value:function(t,o){function s(){return new e((function(e,s){n(t,o,e,s)}))}return i=i?i.then(s,s):s()}})}function I(e,n,o){var s=h;return function(i,r){if(s===p)throw Error("Generator is already running");if(s===g){if("throw"===i)throw r;return{value:t,done:!0}}for(o.method=i,o.arg=r;;){var a=o.delegate;if(a){var c=S(a,o);if(c){if(c===y)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?g:f,u.arg===y)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=g,o.method="throw",o.arg=u.arg)}}}function S(e,n){var o=n.method,s=e.iterator[o];if(s===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var i=d(s,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var r=i.arg;return r?r.done?(n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function x(e){if(e||""===e){var n=e[r];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,i=function n(){for(;++s<e.length;)if(o.call(e,s))return n.value=e[s],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError($(e)+" is not iterable")}return v.prototype=E,s(w,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:v,configurable:!0}),v.displayName=u(E,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(T.prototype),u(T.prototype,a,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,o,s,i){void 0===i&&(i=Promise);var r=new T(l(t,n,o,s),i);return e.isGeneratorFunction(n)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},b(w),u(w,c,"Generator"),u(w,r,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=x,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function s(o,s){return a.type="throw",a.arg=e,n.next=o,s&&(n.method="next",n.arg=t),!!s}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return s("end");if(r.tryLoc<=this.prev){var c=o.call(r,"catchLoc"),u=o.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return s(r.catchLoc,!0);if(this.prev<r.finallyLoc)return s(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return s(r.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return s(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&o.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var i=s;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var r=i?i.completion:{};return r.type=t,r.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var s=o.arg;A(n)}return s}}throw Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:x(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),y}},e}function B(t,e,n,o,s,i,r){try{var a=t[i](r),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,s)}function K(){var t;return t=k().mark((function t(){var e,n,o;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new U("AIzaSyDB8myvxciBXBAbZtspVZuzQua3FYI4hpo"),t.next=3,e.getGenerativeModel({model:"gemini-1.5-flash"});case 3:return n=t.sent,t.next=6,n.generateContent("O que é uma batata?");case 6:return o=t.sent,t.abrupt("return",o.response.text());case 8:case"end":return t.stop()}}),t)})),K=function(){var e=this,n=arguments;return new Promise((function(o,s){var i=t.apply(e,n);function r(t){B(i,o,s,r,a,"next",t)}function a(t){B(i,o,s,r,a,"throw",t)}r(void 0)}))},K.apply(this,arguments)}chrome.runtime.onInstalled.addListener((function(){console.log("Extension installed"),function(){return K.apply(this,arguments)}().then((function(t){return console.log(t)}))}))})();