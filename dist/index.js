!function(){function t(t){Object.defineProperty(t,"__esModule",{value:!0,configurable:!0})}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function r(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=n.parcelRequire8447;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},n.parcelRequire8447=a),a.register("6IYj1",(function(r,n){var o,i,a,u;t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t})),o=!0,(u=a||(a={}))[u.infinity=0]="infinity",u[u.minusInfinity=1]="minusInfinity",u[u.minusZero=2]="minusZero",i={type:"Arithmetic",lookup:Number,shouldTransform:function(t,e){return"number"===t&&(e===1/0||e===-1/0||function(t){return 1/t==-1/0}(e))},toSerializable:function(t){return t===1/0?a.infinity:t===-1/0?a.minusInfinity:a.minusZero},fromSerializable:function(t){return t===a.infinity?1/0:t===a.minusInfinity?-1/0:t===a.minusZero?-0:t}}})),a.register("1IXs5",(function(r,n){var o,i;t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t})),o=!0,i={type:"Function",lookup:Function,shouldTransform:function(t,e){return"function"==typeof e},toSerializable:function(t){var e="";try{e=t.toString().substring(e.indexOf("{")+1,e.lastIndexOf("}"))}catch(t){}return{name:t.name,body:e,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){try{var e=function(){};return"string"==typeof t.name&&Object.defineProperty(e,"name",{value:t.name,writable:!1}),"string"==typeof t.body&&Object.defineProperty(e,"body",{value:t.body,writable:!1}),"string"==typeof t.proto&&(e.constructor={name:t.proto}),e}catch(e){return t}}}})),a.register("944os",(function(r,n){var o,i,a;function u(t){for(var e={},r=0,n=t.attributes;r<n.length;r++){var o=n[r];e[o.name]=o.value}return e}t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t})),o=!0,i={type:"HTMLElement",shouldTransform:function(t,e){return e&&e.children&&"string"==typeof e.innerHTML&&"string"==typeof e.tagName},toSerializable:function(t){return{tagName:t.tagName.toLowerCase(),attributes:u(t),innerHTML:t.innerHTML}},fromSerializable:function(t){try{var e=(a||(a=document.implementation.createHTMLDocument("sandbox"))).createElement(t.tagName);e.innerHTML=t.innerHTML;for(var r=0,n=Object.keys(t.attributes);r<n.length;r++){var o=n[r];try{e.setAttribute(o,t.attributes[o])}catch(t){}}return e}catch(e){return t}}}})),a.register("8pGhu",(function(t,e){"use strict";var r=t.exports&&t.exports.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};t.exports.__esModule=!0,t.exports.default={type:"Map",lookup:Map,shouldTransform:function(t,e){return e&&e.constructor&&"Map"===e.constructor.name},toSerializable:function(t){var e={};return t.forEach((function(t,r){var n="object"==typeof r?JSON.stringify(r):r;e[n]=t})),{name:"Map",body:e,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){var e=t.body,n=r({},e);return"string"==typeof t.proto&&(n.constructor={name:t.proto}),n}}})),a.register("b88x3",(function(r,n){t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t}));var o,i,u=a("3VtqS");o=!0;var s,f,c,l="@t",d=/^#*@(t|r)$/,p="__console_feed_remaining__",h=(0,eval)("this"),m="function"==typeof ArrayBuffer,y="function"==typeof Map,v="function"==typeof Set,g=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],_=Array.prototype.slice,b={serialize:function(t){return JSON.stringify(t)},deserialize:function(t){return JSON.parse(t)}},x=((s=function(t,e,r){this.references=t,this.transforms=e,this.transformsMap=this._makeTransformsMap(),this.circularCandidates=[],this.circularCandidatesDescrs=[],this.circularRefCount=0,this.limit=null!=r?r:1/0})._createRefMark=function(t){var e=Object.create(null);return e["@r"]=t,e},s.prototype._createCircularCandidate=function(t,e,r){this.circularCandidates.push(t),this.circularCandidatesDescrs.push({parent:e,key:r,refIdx:-1})},s.prototype._applyTransform=function(t,e,r,n){var o=Object.create(null),i=n.toSerializable(t);return"object"==typeof i&&this._createCircularCandidate(t,e,r),o[l]=n.type,o.data=this._handleValue((function(){return i}),e,r),o},s.prototype._handleArray=function(t){for(var e=[],r=Math.min(t.length,this.limit),n=t.length-r,o=function(r){e[r]=i._handleValue((function(){return t[r]}),e,r)},i=this,a=0;a<r;a++)o(a);return e[r]=p+n,e},s.prototype._handlePlainObject=function(t){var e,r,n=Object.create(null),o=0,i=0,a=function(e){if(Reflect.has(t,e)){if(o>=u.limit)return i++,"continue";var r=d.test(e)?"#"+e:e;n[r]=u._handleValue((function(){return t[e]}),n,r),o++,i++}},u=this;for(var s in t)a(s);var f=i-o,c=null===(r=null===(e=null==t?void 0:t.__proto__)||void 0===e?void 0:e.constructor)||void 0===r?void 0:r.name;return c&&"Object"!==c&&(n.constructor={name:c}),f&&(n[p]=f),n},s.prototype._handleObject=function(t,e,r){return this._createCircularCandidate(t,e,r),Array.isArray(t)?this._handleArray(t):this._handlePlainObject(t)},s.prototype._ensureCircularReference=function(t){var e=this.circularCandidates.indexOf(t);if(e>-1){var r=this.circularCandidatesDescrs[e];return-1===r.refIdx&&(r.refIdx=r.parent?++this.circularRefCount:0),s._createRefMark(r.refIdx)}return null},s.prototype._handleValue=function(t,e,r){try{var n=t(),o=void 0===n?"undefined":(0,u.default)(n),i="object"===o&&null!==n;if(i){var a=this._ensureCircularReference(n);if(a)return a}var s=this._findTransform(o,n);return s?this._applyTransform(n,e,r,s):i?this._handleObject(n,e,r):n}catch(t){try{return this._handleValue((function(){return t instanceof Error?t:new Error(t)}),e,r)}catch(t){return null}}},s.prototype._makeTransformsMap=function(){if(y){var t=new Map;return this.transforms.forEach((function(e){e.lookup&&t.set(e.lookup,e)})),t}},s.prototype._findTransform=function(t,e){if(y&&e&&e.constructor&&(null==(o=this.transformsMap.get(e.constructor))?void 0:o.shouldTransform(t,e)))return o;for(var r=0,n=this.transforms;r<n.length;r++){var o;if((o=n[r]).shouldTransform(t,e))return o}},s.prototype.transform=function(){for(var t=this,e=[this._handleValue((function(){return t.references}),null,null)],r=0,n=this.circularCandidatesDescrs;r<n.length;r++){var o=n[r];o.refIdx>0&&(e[o.refIdx]=o.parent[o.key],o.parent[o.key]=s._createRefMark(o.refIdx))}return e},s),w=((f=function(t,e){this.activeTransformsStack=[],this.visitedRefs=Object.create(null),this.references=t,this.transformMap=e}).prototype._handlePlainObject=function(t){var e=Object.create(null);for(var r in"constructor"in t&&(t.constructor&&"string"==typeof t.constructor.name||(t.constructor={name:"Object"})),t)t.hasOwnProperty(r)&&(this._handleValue(t[r],t,r),d.test(r)&&(e[r.substring(1)]=t[r],delete t[r]));for(var n in e)t[n]=e[n]},f.prototype._handleTransformedObject=function(t,e,r){var n=t[l],o=this.transformMap[n];if(!o)throw new Error("Can't find transform for \""+n+'" type.');this.activeTransformsStack.push(t),this._handleValue(t.data,t,"data"),this.activeTransformsStack.pop(),e[r]=o.fromSerializable(t.data)},f.prototype._handleCircularSelfRefDuringTransform=function(t,e,r){var n=this.references;Object.defineProperty(e,r,{val:void 0,configurable:!0,enumerable:!0,get:function(){return void 0===this.val&&(this.val=n[t]),this.val},set:function(t){this.val=t}})},f.prototype._handleCircularRef=function(t,e,r){this.activeTransformsStack.includes(this.references[t])?this._handleCircularSelfRefDuringTransform(t,e,r):(this.visitedRefs[t]||(this.visitedRefs[t]=!0,this._handleValue(this.references[t],this.references,t)),e[r]=this.references[t])},f.prototype._handleValue=function(t,e,r){if("object"==typeof t&&null!==t){var n=t["@r"];if(void 0!==n)this._handleCircularRef(n,e,r);else if(t[l])this._handleTransformedObject(t,e,r);else if(Array.isArray(t))for(var o=0;o<t.length;o++)this._handleValue(t[o],t,o);else this._handlePlainObject(t)}},f.prototype.transform=function(){return this.visitedRefs[0]=!0,this._handleValue(this.references[0],this.references,0),this.references[0]},f),T=[{type:"[[NaN]]",shouldTransform:function(t,e){return"number"===t&&isNaN(e)},toSerializable:function(){return""},fromSerializable:function(){return NaN}},{type:"[[undefined]]",shouldTransform:function(t){return"undefined"===t},toSerializable:function(){return""},fromSerializable:function(){}},{type:"[[Date]]",lookup:Date,shouldTransform:function(t,e){return e instanceof Date},toSerializable:function(t){return t.getTime()},fromSerializable:function(t){var e=new Date;return e.setTime(t),e}},{type:"[[RegExp]]",lookup:RegExp,shouldTransform:function(t,e){return e instanceof RegExp},toSerializable:function(t){var e={src:t.source,flags:""};return t.global&&(e.flags+="g"),t.ignoreCase&&(e.flags+="i"),t.multiline&&(e.flags+="m"),e},fromSerializable:function(t){return new RegExp(t.src,t.flags)}},{type:"[[Error]]",lookup:Error,shouldTransform:function(t,e){return e instanceof Error},toSerializable:function(t){var e,r;return t.stack||null===(r=(e=Error).captureStackTrace)||void 0===r||r.call(e,t),{name:t.name,message:t.message,stack:t.stack}},fromSerializable:function(t){var e=new(h[t.name]||Error)(t.message);return e.stack=t.stack,e}},{type:"[[ArrayBuffer]]",lookup:m&&ArrayBuffer,shouldTransform:function(t,e){return m&&e instanceof ArrayBuffer},toSerializable:function(t){var e=new Int8Array(t);return _.call(e)},fromSerializable:function(t){if(m){var e=new ArrayBuffer(t.length);return new Int8Array(e).set(t),e}return t}},{type:"[[TypedArray]]",shouldTransform:function(t,e){if(m)return ArrayBuffer.isView(e)&&!(e instanceof DataView);for(var r=0,n=g;r<n.length;r++){var o=n[r];if("function"==typeof h[o]&&e instanceof h[o])return!0}return!1},toSerializable:function(t){return{ctorName:t.constructor.name,arr:_.call(t)}},fromSerializable:function(t){return"function"==typeof h[t.ctorName]?new h[t.ctorName](t.arr):t.arr}},{type:"[[Map]]",lookup:y&&Map,shouldTransform:function(t,e){return y&&e instanceof Map},toSerializable:function(t){var e=[];return t.forEach((function(t,r){e.push(r),e.push(t)})),e},fromSerializable:function(t){if(y){for(var e=new Map,r=0;r<t.length;r+=2)e.set(t[r],t[r+1]);return e}for(var n=[],o=0;o<t.length;o+=2)n.push([t[r],t[r+1]]);return n}},{type:"[[Set]]",lookup:v&&Set,shouldTransform:function(t,e){return v&&e instanceof Set},toSerializable:function(t){var e=[];return t.forEach((function(t){e.push(t)})),e},fromSerializable:function(t){if(v){for(var e=new Set,r=0;r<t.length;r++)e.add(t[r]);return e}return t}}],M=((c=function(t){this.transforms=[],this.transformsMap=Object.create(null),this.serializer=t||b,this.addTransforms(T)}).prototype.addTransforms=function(t){for(var e=0,r=t=Array.isArray(t)?t:[t];e<r.length;e++){var n=r[e];if(this.transformsMap[n.type])throw new Error('Transform with type "'+n.type+'" was already added.');this.transforms.push(n),this.transformsMap[n.type]=n}return this},c.prototype.removeTransforms=function(t){for(var e=0,r=t=Array.isArray(t)?t:[t];e<r.length;e++){var n=r[e],o=this.transforms.indexOf(n);o>-1&&this.transforms.splice(o,1),delete this.transformsMap[n.type]}return this},c.prototype.encode=function(t,e){var r=new x(t,this.transforms,e).transform();return this.serializer.serialize(r)},c.prototype.decode=function(t){var e=this.serializer.deserialize(t);return new w(e,this.transformsMap).transform()},c);i=M})),a.register("3VtqS",(function(t,r){function n(t){return t&&t.constructor===Symbol?"symbol":typeof t}e(t.exports,"default",(function(){return n}))})),a.register("kcPVQ",(function(r,n){var o,i;t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t})),o=!0;i=["log","debug","info","warn","error","table","clear","time","timeEnd","count","assert","command","result","dir"]})),a.register("e4e9o",(function(t,e){"use strict";var r=t.exports&&t.exports.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},n=t.exports&&t.exports.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=t.exports&&t.exports.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=t.exports&&t.exports.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},u=t.exports&&t.exports.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n},s=t.exports&&t.exports.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};t.exports.__esModule=!0;var f=s(a("ctjWB")),c=i(a("5QXCJ")),l=i(a("llCux")),d=i(a("gyqWU"));t.exports.default=function(t,e,n){var o=n||f.default();switch(t){case"clear":return{method:t,id:o};case"count":return!!(i="string"==typeof e[0]?e[0]:"default")&&r(r({},l.increment(i)),{id:o});case"time":case"timeEnd":var i;return!!(i="string"==typeof e[0]?e[0]:"default")&&("time"===t?(c.start(i),!1):r(r({},c.stop(i)),{id:o}));case"assert":if(0!==e.length){var a=d.test.apply(d,u([e[0]],e.slice(1)));if(a)return r(r({},a),{id:o})}return!1;case"error":return{method:t,id:o,data:e.map((function(t){try{return t.stack||t}catch(e){return t}}))};default:return{method:t,id:o,data:e}}}})),a.register("ctjWB",(function(r,n){var o,i;t(r.exports),e(r.exports,"__esModule",(function(){return o}),(function(t){return o=t})),e(r.exports,"default",(function(){return i}),(function(t){return i=t})),o=!0,i=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+"-"+Date.now()}})),a.register("5QXCJ",(function(t,e){"use strict";var r=t.exports&&t.exports.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};t.exports.__esModule=!0,t.exports.stop=t.exports.start=void 0;var n=a("9TyJf"),o=r(a("5KVAv")),i=a("8LwUo");t.exports.start=function(t){o.default(i.timeStart(t))},t.exports.stop=function(t){var e=null===n.state||void 0===n.state?void 0:n.state.timings[t];return e&&!e.end?(o.default(i.timeEnd(t)),{method:"log",data:[t+": "+n.state.timings[t].time+"ms"]}):{method:"warn",data:["Timer '"+t+"' does not exist"]}}})),a.register("9TyJf",(function(t,r){var n,o;e(t.exports,"update",(function(){return n}),(function(t){return n=t})),e(t.exports,"state",(function(){return o}),(function(t){return o=t})),n=o=void 0,n=function(t){o=t}})),a.register("5KVAv",(function(t,e){"use strict";var r=t.exports&&t.exports.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};t.exports.__esModule=!0;var n=r(a("lRVBC")),o=a("9TyJf");t.exports.default=function(t){o.update(n.default(o.state,t))}})),a.register("lRVBC",(function(t,e){"use strict";var r=t.exports&&t.exports.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};t.exports.__esModule=!0,t.exports.initialState=void 0,t.exports.initialState={timings:{},count:{}};var n=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.exports.default=function(e,o){var i,a,u;switch(void 0===e&&(e=t.exports.initialState),o.type){case"COUNT":var s=e.count[o.name]||0;return r(r({},e),{count:r(r({},e.count),(i={},i[o.name]=s+1,i))});case"TIME_START":return r(r({},e),{timings:r(r({},e.timings),(a={},a[o.name]={start:n()},a))});case"TIME_END":var f=e.timings[o.name],c=n(),l=c-f.start;return r(r({},e),{timings:r(r({},e.timings),(u={},u[o.name]=r(r({},f),{end:c,time:l}),u))});default:return e}}})),a.register("8LwUo",(function(t,r){var n,o,i;e(t.exports,"timeEnd",(function(){return n}),(function(t){return n=t})),e(t.exports,"timeStart",(function(){return o}),(function(t){return o=t})),e(t.exports,"count",(function(){return i}),(function(t){return i=t})),n=o=i=void 0,i=function(t){return{type:"COUNT",name:t}},o=function(t){return{type:"TIME_START",name:t}},n=function(t){return{type:"TIME_END",name:t}}})),a.register("llCux",(function(t,e){"use strict";var r=t.exports&&t.exports.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};t.exports.__esModule=!0,t.exports.increment=void 0;var n=a("9TyJf"),o=r(a("5KVAv")),i=a("8LwUo");t.exports.increment=function(t){return o.default(i.count(t)),{method:"log",data:[t+": "+n.state.count[t]]}}})),a.register("gyqWU",(function(t,e){"use strict";var r=t.exports&&t.exports.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n};t.exports.__esModule=!0,t.exports.test=void 0,t.exports.test=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return!t&&(0===e.length&&e.push("console.assert"),{method:"error",data:r(["Assertion failed:"],e)})}}));var u={},s=u&&u.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u.__esModule=!0,u.Decode=u.Encode=void 0;var f=s(a("6IYj1")),c=s(a("1IXs5")),l=s(a("944os")),d=s(a("8pGhu")),p=s(a("b88x3")),h=[l.default,c.default,f.default,d.default],m=new p.default;m.addTransforms(h),u.Encode=function(t,e){return JSON.parse(m.encode(t,e))},u.Decode=function(t){var e=m.decode(JSON.stringify(t));return e.data.pop(),e};var y={},v=y&&y.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};y.__esModule=!0;var g=v(a("kcPVQ")),_=v(a("e4e9o"));function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}y.default=function(t,e,r,n){void 0===r&&(r=!0);for(var o=t,i={pointers:{},src:{npm:"https://npmjs.com/package/console-feed",github:"https://github.com/samdenty/console-feed"}},a=function(t){var a=o[t];o[t]=function(){a.apply(this,arguments);var o=[].slice.call(arguments);setTimeout((function(){var i=_.default(t,o);if(i){var a=i;r&&(a=u.Encode(i,n)),e(a,i)}}))},i.pointers[t]=a},s=0,f=g.default;s<f.length;s++){a(f[s])}return o.feed=i,o};var w=new(function(){"use strict";function t(){var e,r,n,o=this;b(this,t),n={},(r="listeners")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,window.addEventListener("message",(function(t){var e,r,n;(null===(e=t.data)||void 0===e?void 0:e.event)&&(null===(n=(r=o.listeners)[t.data.event])||void 0===n||n.call(r,t.data.message))}))}var e,r,n;return e=t,(r=[{key:"emit",value:function(t,e){window.top&&window.top.postMessage({event:t,message:e},"*")}},{key:"listen",value:function(t,e){this.listeners[t]=e}},{key:"unregister",value:function(t){delete this.listeners[t]}}])&&x(e.prototype,r),n&&x(e,n),t}());w.listen("ping",(function(){return w.emit("pong",null)})),w.listen("history.back",(function(){return window.history.back()})),w.listen("history.forward",(function(){return window.history.forward()})),w.listen("location.reload",(function(){return window.location.reload()})),r(y)(window.console,(function(t){return w.emit("console-feed.message",(0,u.Decode)(t))}))}();
//# sourceMappingURL=index.js.map
