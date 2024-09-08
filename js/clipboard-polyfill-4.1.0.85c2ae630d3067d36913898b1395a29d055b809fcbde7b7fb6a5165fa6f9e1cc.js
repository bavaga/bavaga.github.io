(()=>{var d="text/plain",X="text/html",W=e=>{};function i(e){W(e)}function ce(e){W=e}var _=!0;function pe(){_=!1}function H(){return _}function q(){(console.warn||console.log).apply(console,arguments)}var b,w,y,ve=q.bind("[clipboard-polyfill]"),m=typeof window>"u"?void 0:window,z=typeof globalThis>"u"?void 0:globalThis,h=(y=(b=m)==null?void 0:b.Promise)!=null?y:(w=z)==null?void 0:w.Promise;function J(){if(!h)throw new Error("No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included");return h}var T,x,C,E,I,D=typeof navigator>"u"?void 0:navigator,a=D?.clipboard,S=(T=a?.read)==null?void 0:T.bind(a),U=(x=a?.readText)==null?void 0:x.bind(a),k=(C=a?.write)==null?void 0:C.bind(a),P=(E=a?.writeText)==null?void 0:E.bind(a),g=(I=m)==null?void 0:I.ClipboardItem,l=J(),s=m;function A(){return typeof ClipboardEvent>"u"&&s?.clipboardData!==void 0&&s?.clipboardData.setData!==void 0}function K(e){if(!s.clipboardData)return!1;var t=s.clipboardData.setData("Text",e);return t&&i("writeTextIE worked"),t}function Q(){if(!s.clipboardData)throw new Error("Cannot read IE clipboard Data ");var e=s.clipboardData.getData("Text");if(e==="")throw new Error("Empty clipboard or could not read plain text from clipboard");return e}function V(e,t,r){for(var n in i("listener called"),e.success=!0,t){var o=t[n],u=r.clipboardData;u.setData(n,o),n===d&&u.getData(n)!==o&&(i("setting text/plain failed"),e.success=!1)}r.preventDefault()}function O(e){var t={success:!1},r=V.bind(this,t,e);document.addEventListener("copy",r);try{document.execCommand("copy")}finally{document.removeEventListener("copy",r)}return t.success}function R(e,t){M(e);var r=O(t);return F(),r}function Y(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var r=R(t,e);return document.body.removeChild(t),r}function Z(e){i("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var r=t;t.attachShadow&&(i("Using shadow DOM."),r=t.attachShadow({mode:"open"}));var n=document.createElement("span");n.innerText=e,r.appendChild(n),document.body.appendChild(t),M(n);var o=document.execCommand("copy");return F(),document.body.removeChild(t),o}function M(e){var t=document.getSelection();if(t){var r=document.createRange();r.selectNodeContents(e),t.removeAllRanges(),t.addRange(r)}}function F(){var e=document.getSelection();e&&e.removeAllRanges()}function j(e){var t=d in e;if(A()){if(!t)throw new Error("No `text/plain` value was specified.");if(K(e[d]))return!0;throw new Error("Copying failed, possibly because the user rejected it.")}return O(e)?(i("regular execCopy worked"),!0):navigator.userAgent.indexOf("Edge")>-1?(i('UA "Edge" => assuming success'),!0):R(document.body,e)?(i("copyUsingTempSelection worked"),!0):Y(e)?(i("copyUsingTempElem worked"),!0):!!Z(e[d])&&(i("copyTextUsingDOM worked"),!0)}function B(e,t){for(var r=[],n=0;n<e.length;n++){var o=e[n];r.push(t(o))}return l.all(r).then(u=>{for(var c={},p=0;p<e.length;p++)c[e[p]]=u[p];return c})}var $=l.resolve(),ee=()=>l.resolve(!0),L=l.resolve(!1);function v(e){return new l((t,r)=>{try{t(e())}catch(n){r(n)}})}function te(e){var t={};return t[d]=e,t}function fe(e){return P?(i("Using `navigator.clipboard.writeText()`."),P(e).catch(t=>{N(e)})):N(e)}function N(e){return v(()=>l.resolve(re(e)))}function re(e){if(!j(te(e)))throw new Error("writeText() failed")}function ne(){return v(()=>{if(U)return i("Using `navigator.clipboard.readText()`."),U();if(A()){var e=Q();return l.resolve(e)}throw new Error("Read is not supported in your browser.")})}function f(e,t){for(var r=0;r<e.length;r++)if(e[r].types.indexOf(t)!==-1)return!0;return!1}function oe(e,t){var r,n=Object.keys(e),o={};for(var u in e){var c=e[u];o[u]=typeof c=="string"?G(u,c):c}return{types:n,presentationStyle:(r=t?.presentationStyle)!=null?r:"unspecified",getType:function(p){return l.resolve(o[p])}}}var ie=oe;function G(e,t){return new Blob([t],{type:e})}function ae(e){return new l((t,r)=>{var n=new FileReader;n.addEventListener("load",()=>{var o=n.result;typeof o=="string"?t(o):r("could not convert blob to string")}),n.readAsText(e)})}function le(e){return B(e.types,function(t){return e.getType(t)}).then(t=>new l((r,n)=>{var o={};e.presentationStyle&&(o.presentationStyle=e.presentationStyle),g?r(new g(t,o)):n("window.ClipboardItem is not defined")}))}function de(e){var t={};return t[d]=G(e,d),new ie(t)}function ue(e,t){return e.getType(t).then(r=>ae(r))}function se(e){return B(e.types,function(t){return ue(e,t)})}function ge(e){return v(()=>{if(k&&g){var t=k;return i("Using `navigator.clipboard.write()`."),l.all(e.map(le)).then(r=>t(r).then(ee).catch(n=>{if(!f(e,d)&&!f(e,X))throw n;return L}))}return L}).then(t=>{if(t)return $;var r=f(e,d);return H()&&!r&&i("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),se(e[0]).then(n=>{if(!j(n))throw new Error("write() failed")})})}function me(){return v(()=>S?(i("Using `navigator.clipboard.read()`."),S()):ne().then(e=>[de(e)]))}})();
