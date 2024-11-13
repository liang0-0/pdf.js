/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */var e={d:(E,n)=>{for(var a in n)e.o(n,a)&&!e.o(E,a)&&Object.defineProperty(E,a,{enumerable:!0,get:n[a]})},o:(e,E)=>Object.prototype.hasOwnProperty.call(e,E)},__webpack_exports__={};e.d(__webpack_exports__,{AppOptions:()=>AppOptions,OptionKind:()=>n});{var E=new Map;"undefined"==typeof navigator&&(globalThis.navigator=Object.create(null));const e=navigator.userAgent||"",n=navigator.platform||"",a=navigator.maxTouchPoints||1,t=/Android/.test(e);(/\b(iPad|iPhone|iPod)(?=;)/.test(e)||"MacIntel"===n&&a>1||t)&&E.set("maxCanvasPixels",5242880);t&&E.set("useSystemFonts",!1)}const n={BROWSER:1,VIEWER:2,API:4,WORKER:8,EVENT_DISPATCH:16,PREFERENCE:128},a={BOOLEAN:1,NUMBER:2,OBJECT:4,STRING:8,UNDEFINED:16},t={allowedGlobalEvents:{value:null,kind:n.BROWSER},canvasMaxAreaInBytes:{value:-1,kind:n.BROWSER+n.API},isInAutomation:{value:!1,kind:n.BROWSER},localeProperties:{value:{lang:navigator.language||"en-US"},kind:n.BROWSER},nimbusDataStr:{value:"",kind:n.BROWSER},supportsCaretBrowsingMode:{value:!1,kind:n.BROWSER},supportsDocumentFonts:{value:!0,kind:n.BROWSER},supportsIntegratedFind:{value:!1,kind:n.BROWSER},supportsMouseWheelZoomCtrlKey:{value:!0,kind:n.BROWSER},supportsMouseWheelZoomMetaKey:{value:!0,kind:n.BROWSER},supportsPinchToZoom:{value:!0,kind:n.BROWSER},toolbarDensity:{value:0,kind:n.BROWSER+n.EVENT_DISPATCH},altTextLearnMoreUrl:{value:"",kind:n.VIEWER+n.PREFERENCE},annotationEditorMode:{value:0,kind:n.VIEWER+n.PREFERENCE},annotationMode:{value:2,kind:n.VIEWER+n.PREFERENCE},cursorToolOnLoad:{value:0,kind:n.VIEWER+n.PREFERENCE},debuggerSrc:{value:"./debugger.mjs",kind:n.VIEWER},defaultZoomDelay:{value:400,kind:n.VIEWER+n.PREFERENCE},defaultZoomValue:{value:"",kind:n.VIEWER+n.PREFERENCE},disableHistory:{value:!1,kind:n.VIEWER},disablePageLabels:{value:!1,kind:n.VIEWER+n.PREFERENCE},enableAltText:{value:!1,kind:n.VIEWER+n.PREFERENCE},enableAltTextModelDownload:{value:!0,kind:n.VIEWER+n.PREFERENCE+n.EVENT_DISPATCH},enableGuessAltText:{value:!0,kind:n.VIEWER+n.PREFERENCE+n.EVENT_DISPATCH},enableHighlightFloatingButton:{value:!1,kind:n.VIEWER+n.PREFERENCE},enableNewAltTextWhenAddingImage:{value:!0,kind:n.VIEWER+n.PREFERENCE},enablePermissions:{value:!1,kind:n.VIEWER+n.PREFERENCE},enablePrintAutoRotate:{value:!0,kind:n.VIEWER+n.PREFERENCE},enableScripting:{value:!0,kind:n.VIEWER+n.PREFERENCE},enableUpdatedAddImage:{value:!1,kind:n.VIEWER+n.PREFERENCE},externalLinkRel:{value:"noopener noreferrer nofollow",kind:n.VIEWER},externalLinkTarget:{value:0,kind:n.VIEWER+n.PREFERENCE},highlightEditorColors:{value:"yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F",kind:n.VIEWER+n.PREFERENCE},historyUpdateUrl:{value:!1,kind:n.VIEWER+n.PREFERENCE},ignoreDestinationZoom:{value:!1,kind:n.VIEWER+n.PREFERENCE},imageResourcesPath:{value:"./images/",kind:n.VIEWER},maxCanvasPixels:{value:2**25,kind:n.VIEWER},forcePageColors:{value:!1,kind:n.VIEWER+n.PREFERENCE},pageColorsBackground:{value:"Canvas",kind:n.VIEWER+n.PREFERENCE},pageColorsForeground:{value:"CanvasText",kind:n.VIEWER+n.PREFERENCE},pdfBugEnabled:{value:!1,kind:n.VIEWER+n.PREFERENCE},printResolution:{value:150,kind:n.VIEWER},sidebarViewOnLoad:{value:-1,kind:n.VIEWER+n.PREFERENCE},scrollModeOnLoad:{value:-1,kind:n.VIEWER+n.PREFERENCE},spreadModeOnLoad:{value:-1,kind:n.VIEWER+n.PREFERENCE},textLayerMode:{value:1,kind:n.VIEWER+n.PREFERENCE},viewOnLoad:{value:0,kind:n.VIEWER+n.PREFERENCE},cMapPacked:{value:!0,kind:n.API},cMapUrl:{value:"../web/cmaps/",kind:n.API},disableAutoFetch:{value:!1,kind:n.API+n.PREFERENCE},disableFontFace:{value:!1,kind:n.API+n.PREFERENCE},disableRange:{value:!1,kind:n.API+n.PREFERENCE},disableStream:{value:!1,kind:n.API+n.PREFERENCE},docBaseUrl:{value:"",kind:n.API},enableHWA:{value:!0,kind:n.API+n.VIEWER+n.PREFERENCE},enableXfa:{value:!0,kind:n.API+n.PREFERENCE},fontExtraProperties:{value:!1,kind:n.API},isEvalSupported:{value:!0,kind:n.API},isOffscreenCanvasSupported:{value:!0,kind:n.API},maxImageSize:{value:-1,kind:n.API},pdfBug:{value:!1,kind:n.API},standardFontDataUrl:{value:"../web/standard_fonts/",kind:n.API},useSystemFonts:{value:void 0,kind:n.API,type:a.BOOLEAN+a.UNDEFINED},verbosity:{value:1,kind:n.API},workerPort:{value:null,kind:n.WORKER},workerSrc:{value:"../build/pdf.worker.mjs",kind:n.WORKER}};t.defaultUrl={value:"compressed.tracemonkey-pldi-09.pdf",kind:n.VIEWER};t.sandboxBundleSrc={value:"../build/pdf.sandbox.mjs",kind:n.VIEWER};t.viewerCssTheme={value:0,kind:n.VIEWER+n.PREFERENCE};t.enableFakeMLManager={value:!0,kind:n.VIEWER};t.disablePreferences={value:!1,kind:n.VIEWER};for(const e in t){const{value:a,kind:o,type:i}=t[e];if(o&n.PREFERENCE){if(o===n.PREFERENCE)throw new Error(`Cannot use only "PREFERENCE" kind: ${e}`);if(o&n.BROWSER)throw new Error(`Cannot mix "PREFERENCE" and "BROWSER" kind: ${e}`);if(void 0!==i)throw new Error(`Cannot have \`type\`-field for "PREFERENCE" kind: ${e}`);if("object"==typeof E&&E.has(e))throw new Error(`Should not have compatibility-value for "PREFERENCE" kind: ${e}`);if("boolean"!=typeof a&&"string"!=typeof a&&!Number.isInteger(a))throw new Error(`Invalid value for "PREFERENCE" kind: ${e}`)}else if(o&n.BROWSER){if(void 0!==i)throw new Error(`Cannot have \`type\`-field for "BROWSER" kind: ${e}`);if("object"==typeof E&&E.has(e))throw new Error(`Should not have compatibility-value for "BROWSER" kind: ${e}`);if(void 0===a)throw new Error(`Invalid value for "BROWSER" kind: ${e}`)}}class AppOptions{static eventBus;static#e=new Map;static{for(const e in t)this.#e.set(e,t[e].value);for(const[e,n]of E)this.#e.set(e,n);this._hasInvokedSet=!1;this._checkDisablePreferences=()=>{if(this.get("disablePreferences"))return!0;this._hasInvokedSet&&console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.');return!1}}static get(e){return this.#e.get(e)}static getAll(e=null,E=!1){const n=Object.create(null);for(const a in t){const o=t[a];(!e||e&o.kind)&&(n[a]=E?o.value:this.#e.get(a))}return n}static set(e,E){this.setAll({[e]:E})}static setAll(e,E=!1){this._hasInvokedSet||=!0;let o;for(const i in e){const l=t[i],R=e[i];if(!l||!(typeof R==typeof l.value||a[(typeof R).toUpperCase()]&l.type))continue;const{kind:r}=l;if(!E||r&n.BROWSER||r&n.PREFERENCE){this.eventBus&&r&n.EVENT_DISPATCH&&(o||=new Map).set(i,R);this.#e.set(i,R)}}if(o)for(const[e,E]of o)this.eventBus.dispatch(e.toLowerCase(),{source:this,value:E})}}var o=__webpack_exports__.AppOptions,i=__webpack_exports__.OptionKind;export{o as AppOptions,i as OptionKind};