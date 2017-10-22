!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t="";switch(e.name){case"QuotaExceededError":t="QuotaExceededError";break;case"NotFoundError":t="NotFoundError";break;case"SecurityError":t="SecurityError";break;case"InvalidModificationError":t="InvalidModificationError";break;case"InvalidStateError":t="InvalidStateError";break;default:t="Unknown Error"}console.error(t)}var t=null;return{init:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=arguments[1];navigator.webkitPersistentStorage.requestQuota(1048576*o,function(o){window.webkitRequestFileSystem(window.PERSISTENT,o,function(e){t=e,n&&n()},e)},e)},usedAndRemaining:function(e){navigator.webkitPersistentStorage.queryUsageAndQuota(function(t,o){e&&e(t,o)})},createDir:function(o,n){t.root.getDirectory(o,{create:!0},function(e){n&&n(e)},e)},getDir:function(o,n){t.root.getDirectory(o,{},function(e){n&&n(e)},e)},deleteDir:function(o,n,r){var n=n||{};void 0===n.recursive&&(n.recursive=!1),t.root.getDirectory(o,{},function(t){n.recursive?t.removeRecursively(function(){r&&r()},e):t.remove(function(){r&&r()},e)},e)},createFile:function(e,o,n){t.root.getFile(e,{create:!0},function(e){e.createWriter(function(t){t.onwriteend=function(){n&&n(e)},t.onerror=function(e){console.log(e)};var r=new Blob([o.file],{type:o.fileType});t.write(r)})})},deleteFile:function(o,n){t.root.getFile(o,{create:!1},function(t){t.remove(function(){n&&n()},e)},e)},purge:function(){t.root.createReader().readEntries(function(t){for(var o,n=0;o=t[n];++n)o.isDirectory?o.removeRecursively(function(){},e):o.remove(function(){},e);console.info("Local storage emptied.")},e)}}}();t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={transitionEnd:function(){var e={transition:"transitionend",webkitTransition:"webkitTransitionEnd"},t=document.createElement("fake");for(var o in e)if(void 0!==t.style[o])return e[o];return!1},debounce:function(e,t,o){var n=null;return function(){var r=this,i=arguments,a=function(){n=null,o||e.apply(r,i)},l=o&&!n;clearTimeout(n),n=setTimeout(a,t),l&&e.apply(r,i)}},trigger:function(e,t){var o=document.createEvent("HTMLEvents");o.initEvent(e,!0,!1),t.dispatchEvent(o)},templater:function(e,t){return e.replace(/\{(.*?)\}/g,function(e,o){return t[o]||""})},notifications:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;window.timerNotice&&(chrome.notifications.clear(e),clearTimeout(window.timerNotice)),chrome.notifications.create(e,{type:"basic",iconUrl:"icons/icon128.png",title:"Visual bookmarks",message:e},function(){window.timerNotice=setTimeout(function(){chrome.notifications.clear(e)},t)})},imageLoaded:function(e,t){var o=new Image;o.onload=function(){t.done&&t.done(e)},o.onerror=function(){t.fail&&t.fail(e)},o.src=e},base64ToBlob:function(e,t,o){for(var n=e,r=t||"",i=atob(n.split(",")[1]),a=(n.split(",")[0].split(":")[1].split(";")[0],new ArrayBuffer(i.length)),l=new Uint8Array(a),s=0;s<i.length;s++)l[s]=i.charCodeAt(s);var c=new Blob([a],{type:r});return o?o(c):c},resizeScreen:function(e,t){var o=new Image;o.onload=function(){300<o.height&&(o.width*=300/o.height,o.height=300);var e=document.createElement("canvas"),n=e.getContext("2d");e.width=o.width,e.height=o.height,n.drawImage(o,0,0,o.width,o.height),t(e.toDataURL("image/jpg"))},o.src=e},rand:function(e,t){return Math.round(e-.5+Math.random()*(t-e+1))},getDomain:function(e){return e.replace(/https?:\/\/(www.)?/i,"").replace(/\/.*/i,"")}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll("[data-locale-message]");Array.prototype.slice.call(e).forEach(function(e){var t=e.getAttribute("data-locale-message");if(~t.indexOf("placeholder"))return void(e.placeholder=chrome.i18n.getMessage(t));e.textContent=chrome.i18n.getMessage(t)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Element.prototype.matches=Element.prototype.matches||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return!!o[n]},Element.prototype.closest=Element.prototype.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){a&&(clearTimeout(l),e.removeChild(a));var t=Object.assign(document.createElement("span"),{className:"ripple"});return e.appendChild(t),t}function t(t,o){if(1!==o.which)return!0;var n=o.target.closest(t);if(n){n.classList.add("ripple-container");var r=a=e(n),i=n.getBoundingClientRect(),l=i.width,s=i.height,c=i.left,d=i.top,u=0,f=0;u=o.pageX-(c+window.pageXOffset),f=o.pageY-(d+window.pageYOffset);var g=Math.max(l,s),m=n.getAttribute("data-ripple-color")||"rgba(255,255,255, .7)";r.style.width=g+"px",r.style.height=g+"px",r.style.left=u-g/2+"px",r.style.top=f-g/2+"px",r.style.backgroundColor=m,setTimeout(function(){r.style.cssText+="transform: scale(2.5); opacity: 0.5"},10)}}function o(e,t){if(!a)return!0;if("mouseout"===t.type&&!t.target.closest(e))return!0;if("mouseup"===t.type&&1!==t.which)return!0;var o=a;a.style.opacity=0,a=null,l=setTimeout(function(){o.parentNode.removeChild(o),l=null},800)}var n={},r=void 0,i=void 0,a=void 0,l=void 0;return n.init=function(e){r=t.bind(null,e),i=o.bind(null,e),document.body.addEventListener("mousedown",r),document.body.addEventListener("mouseout",i),document.body.addEventListener("mouseup",i)},n}();t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){Object.keys(r).forEach(function(e){null===localStorage.getItem(e)&&localStorage.setItem(e,r[e])}),["http://free.pagepeeker.com/v2/thumbs.php?size=x&url=[URL]","http://api.webthumbnail.org/?width=500&height=400&screen=1280&url=[URL]"].indexOf(localStorage.getItem("thumbnailing_service"))>-1&&localStorage.setItem("thumbnailing_service","https://logo.clearbit.com/[URL]"),"true"===localStorage.getItem("enable_sync")&&chrome.storage.onChanged.addListener(function(e,t){n.restoreFromSync(),window.location.reload()})}function t(e){chrome.storage.sync.get(function(t){Object.keys(t).forEach(function(e){localStorage.setItem(e,t[e])}),e&&e()})}function o(){var e={};Object.keys(r).forEach(function(t){localStorage[t]&&(e[t]=localStorage[t])}),chrome.storage.sync.set(e)}var r={background_color:"#f7f7f7",background_image:"background_color",background_external:"",default_folder_id:1,dial_columns:5,vertical_center:"false",drag_and_drop:"true",auto_generate_thumbnail:"true",enable_sync:"false",show_toolbar:"true",show_favicon:"true",thumbnailing_service:"https://logo.clearbit.com/[URL]"};return{init:e,restoreFromSync:t,syncToStorage:o}}();t.default=n},function(e,t){},,function(e,t,o){var n,r;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(i){"use strict";n=i,void 0!==(r="function"==typeof n?n.call(t,o,t,e):n)&&(e.exports=r)}(function(){"use strict";function e(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=b({},t),e[W]=this;var o={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var n in o)!(n in t)&&(t[n]=o[n]);ae(t);for(var r in this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!t.forceFallback&&Z,i(e,"mousedown",this._onTapStart),i(e,"touchstart",this._onTapStart),i(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(i(e,"dragover",this),i(e,"dragenter",this)),re.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function t(e,t){"clone"!==e.lastPullMode&&(t=!0),D&&D.state!==t&&(s(D,"display",t?"none":""),t||D.state&&(e.options.group.revertClone?(I.insertBefore(D,T),e._animate(w,D)):I.insertBefore(D,w)),D.state=t)}function o(e,t,o){if(e){o=o||J;do{if(">*"===t&&e.parentNode===o||p(e,t))return e}while(e=n(e))}return null}function n(e){var t=e.host;return t&&t.nodeType?t:e.parentNode}function r(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}function i(e,t,o){e.addEventListener(t,o,$)}function a(e,t,o){e.removeEventListener(t,o,$)}function l(e,t,o){if(e)if(e.classList)e.classList[o?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(X," ").replace(" "+t+" "," ");e.className=(n+(o?" "+t:"")).replace(X," ")}}function s(e,t,o){var n=e&&e.style;if(n){if(void 0===o)return J.defaultView&&J.defaultView.getComputedStyle?o=J.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in n||(t="-webkit-"+t),n[t]=o+("string"==typeof o?"":"px")}}function c(e,t,o){if(e){var n=e.getElementsByTagName(t),r=0,i=n.length;if(o)for(;r<i;r++)o(n[r],r);return n}return[]}function d(e,t,o,n,r,i,a){e=e||t[W];var l=J.createEvent("Event"),s=e.options,c="on"+o.charAt(0).toUpperCase()+o.substr(1);l.initEvent(o,!0,!0),l.to=t,l.from=r||t,l.item=n||t,l.clone=D,l.oldIndex=i,l.newIndex=a,t.dispatchEvent(l),s[c]&&s[c].call(e,l)}function u(e,t,o,n,r,i,a,l){var s,c,d=e[W],u=d.options.onMove;return s=J.createEvent("Event"),s.initEvent("move",!0,!0),s.to=t,s.from=e,s.dragged=o,s.draggedRect=n,s.related=r||t,s.relatedRect=i||t.getBoundingClientRect(),s.willInsertAfter=l,e.dispatchEvent(s),u&&(c=u.call(d,s,a)),c}function f(e){e.draggable=!1}function g(){ee=!1}function m(e,t){var o=e.lastElementChild,n=o.getBoundingClientRect();return t.clientY-(n.top+n.height)>5||t.clientX-(n.left+n.width)>5}function h(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,n=0;o--;)n+=t.charCodeAt(o);return n.toString(36)}function v(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!p(e,t)||o++;return o}function p(e,t){if(e){t=t.split(".");var o=t.shift().toUpperCase(),n=new RegExp("\\s("+t.join("|")+")(?=\\s)","g");return!(""!==o&&e.nodeName.toUpperCase()!=o||t.length&&((" "+e.className+" ").match(n)||[]).length!=t.length)}return!1}function _(e,t){var o,n;return function(){void 0===o&&(o=arguments,n=this,setTimeout(function(){1===o.length?e.call(n,o[0]):e.apply(n,o),o=void 0},t))}}function b(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function k(e){return G?G(e).clone(!0)[0]:V&&V.dom?V.dom(e).cloneNode(!0):e.cloneNode(!0)}function y(e){for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var n=t[o];n.checked&&ne.push(n)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var w,S,E,D,I,T,x,C,L,B,M,A,N,O,R,q,j,P,Y,U,F={},X=/\s+/g,H=/left|right|inline/,W="Sortable"+(new Date).getTime(),z=window,J=z.document,Q=z.parseInt,G=z.jQuery||z.Zepto,V=z.Polymer,$=!1,Z=!!("draggable"in J.createElement("div")),K=function(e){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(e=J.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents)}(),ee=!1,te=Math.abs,oe=Math.min,ne=[],re=[],ie=_(function(e,t,o){if(o&&t.scroll){var n,r,i,a,l,s,c=o[W],d=t.scrollSensitivity,u=t.scrollSpeed,f=e.clientX,g=e.clientY,m=window.innerWidth,h=window.innerHeight;if(L!==o&&(C=t.scroll,L=o,B=t.scrollFn,!0===C)){C=o;do{if(C.offsetWidth<C.scrollWidth||C.offsetHeight<C.scrollHeight)break}while(C=C.parentNode)}C&&(n=C,r=C.getBoundingClientRect(),i=(te(r.right-f)<=d)-(te(r.left-f)<=d),a=(te(r.bottom-g)<=d)-(te(r.top-g)<=d)),i||a||(i=(m-f<=d)-(f<=d),a=(h-g<=d)-(g<=d),(i||a)&&(n=z)),F.vx===i&&F.vy===a&&F.el===n||(F.el=n,F.vx=i,F.vy=a,clearInterval(F.pid),n&&(F.pid=setInterval(function(){if(s=a?a*u:0,l=i?i*u:0,"function"==typeof B)return B.call(c,l,s,e);n===z?z.scrollTo(z.pageXOffset+l,z.pageYOffset+s):(n.scrollTop+=s,n.scrollLeft+=l)},24)))}},30),ae=function(e){function t(e,t){return void 0!==e&&!0!==e||(e=o.name),"function"==typeof e?e:function(o,n){var r=n.options.group.name;return t?e:e&&(e.join?e.indexOf(r)>-1:r==e)}}var o={},n=e.group;n&&"object"==typeof n||(n={name:n}),o.name=n.name,o.checkPull=t(n.pull,!0),o.checkPut=t(n.put),o.revertClone=n.revertClone,e.group=o};e.prototype={constructor:e,_onTapStart:function(e){var t,n=this,r=this.el,i=this.options,a=i.preventOnFilter,l=e.type,s=e.touches&&e.touches[0],c=(s||e).target,u=e.target.shadowRoot&&e.path[0]||c,f=i.filter;if(y(r),!w&&!("mousedown"===l&&0!==e.button||i.disabled)&&(c=o(c,i.draggable,r))&&x!==c){if(t=v(c,i.draggable),"function"==typeof f){if(f.call(this,e,c,this))return d(n,u,"filter",c,r,t),void(a&&e.preventDefault())}else if(f&&(f=f.split(",").some(function(e){if(e=o(u,e.trim(),r))return d(n,e,"filter",c,r,t),!0})))return void(a&&e.preventDefault());i.handle&&!o(u,i.handle,r)||this._prepareDragStart(e,s,c,t)}},_prepareDragStart:function(e,t,o,n){var r,a=this,s=a.el,u=a.options,g=s.ownerDocument;o&&!w&&o.parentNode===s&&(P=e,I=s,w=o,S=w.parentNode,T=w.nextSibling,x=o,q=u.group,O=n,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,w.style["will-change"]="transform",r=function(){a._disableDelayedDrag(),w.draggable=a.nativeDraggable,l(w,u.chosenClass,!0),a._triggerDragStart(e,t),d(a,I,"choose",w,I,O)},u.ignore.split(",").forEach(function(e){c(w,e.trim(),f)}),i(g,"mouseup",a._onDrop),i(g,"touchend",a._onDrop),i(g,"touchcancel",a._onDrop),i(g,"pointercancel",a._onDrop),i(g,"selectstart",a),u.delay?(i(g,"mouseup",a._disableDelayedDrag),i(g,"touchend",a._disableDelayedDrag),i(g,"touchcancel",a._disableDelayedDrag),i(g,"mousemove",a._disableDelayedDrag),i(g,"touchmove",a._disableDelayedDrag),i(g,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(r,u.delay)):r())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(e,"mouseup",this._disableDelayedDrag),a(e,"touchend",this._disableDelayedDrag),a(e,"touchcancel",this._disableDelayedDrag),a(e,"mousemove",this._disableDelayedDrag),a(e,"touchmove",this._disableDelayedDrag),a(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,t){t=t||("touch"==e.pointerType?e:null),t?(P={target:w,clientX:t.clientX,clientY:t.clientY},this._onDragStart(P,"touch")):this.nativeDraggable?(i(w,"dragend",this),i(I,"dragstart",this._onDragStart)):this._onDragStart(P,!0);try{J.selection?setTimeout(function(){J.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){if(I&&w){var t=this.options;l(w,t.ghostClass,!0),l(w,t.dragClass,!1),e.active=this,d(this,I,"start",w,I,O)}else this._nulling()},_emulateDragOver:function(){if(Y){if(this._lastX===Y.clientX&&this._lastY===Y.clientY)return;this._lastX=Y.clientX,this._lastY=Y.clientY,K||s(E,"display","none");var e=J.elementFromPoint(Y.clientX,Y.clientY),t=e,o=re.length;if(t)do{if(t[W]){for(;o--;)re[o]({clientX:Y.clientX,clientY:Y.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);K||s(E,"display","")}},_onTouchMove:function(t){if(P){var o=this.options,n=o.fallbackTolerance,r=o.fallbackOffset,i=t.touches?t.touches[0]:t,a=i.clientX-P.clientX+r.x,l=i.clientY-P.clientY+r.y,c=t.touches?"translate3d("+a+"px,"+l+"px,0)":"translate("+a+"px,"+l+"px)";if(!e.active){if(n&&oe(te(i.clientX-this._lastX),te(i.clientY-this._lastY))<n)return;this._dragStarted()}this._appendGhost(),U=!0,Y=i,s(E,"webkitTransform",c),s(E,"mozTransform",c),s(E,"msTransform",c),s(E,"transform",c),t.preventDefault()}},_appendGhost:function(){if(!E){var e,t=w.getBoundingClientRect(),o=s(w),n=this.options;E=w.cloneNode(!0),l(E,n.ghostClass,!1),l(E,n.fallbackClass,!0),l(E,n.dragClass,!0),s(E,"top",t.top-Q(o.marginTop,10)),s(E,"left",t.left-Q(o.marginLeft,10)),s(E,"width",t.width),s(E,"height",t.height),s(E,"opacity","0.8"),s(E,"position","fixed"),s(E,"zIndex","100000"),s(E,"pointerEvents","none"),n.fallbackOnBody&&J.body.appendChild(E)||I.appendChild(E),e=E.getBoundingClientRect(),s(E,"width",2*t.width-e.width),s(E,"height",2*t.height-e.height)}},_onDragStart:function(e,t){var o=e.dataTransfer,n=this.options;this._offUpEvents(),q.checkPull(this,this,w,e)&&(D=k(w),D.draggable=!1,D.style["will-change"]="",s(D,"display","none"),l(D,this.options.chosenClass,!1),I.insertBefore(D,w),d(this,I,"clone",w)),l(w,n.dragClass,!0),t?("touch"===t?(i(J,"touchmove",this._onTouchMove),i(J,"touchend",this._onDrop),i(J,"touchcancel",this._onDrop),i(J,"pointermove",this._onTouchMove),i(J,"pointerup",this._onDrop)):(i(J,"mousemove",this._onTouchMove),i(J,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(o&&(o.effectAllowed="move",n.setData&&n.setData.call(this,o,w)),i(J,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(n){var r,i,a,l,c=this.el,d=this.options,f=d.group,h=e.active,v=q===f,p=!1,_=d.sort;if(void 0!==n.preventDefault&&(n.preventDefault(),!d.dragoverBubble&&n.stopPropagation()),!w.animated&&(U=!0,h&&!d.disabled&&(v?_||(l=!I.contains(w)):j===this||(h.lastPullMode=q.checkPull(this,h,w,n))&&f.checkPut(this,h,w,n))&&(void 0===n.rootEl||n.rootEl===this.el))){if(ie(n,d,this.el),ee)return;if(r=o(n.target,d.draggable,c),i=w.getBoundingClientRect(),j!==this&&(j=this,p=!0),l)return t(h,!0),S=I,void(D||T?I.insertBefore(w,D||T):_||I.appendChild(w));if(0===c.children.length||c.children[0]===E||c===n.target&&m(c,n)){if(0!==c.children.length&&c.children[0]!==E&&c===n.target&&(r=c.lastElementChild),r){if(r.animated)return;a=r.getBoundingClientRect()}t(h,v),!1!==u(I,c,w,i,r,a,n)&&(w.contains(c)||(c.appendChild(w),S=c),this._animate(i,w),r&&this._animate(a,r))}else if(r&&!r.animated&&r!==w&&void 0!==r.parentNode[W]){M!==r&&(M=r,A=s(r),N=s(r.parentNode)),a=r.getBoundingClientRect();var b=a.right-a.left,k=a.bottom-a.top,y=H.test(A.cssFloat+A.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),x=r.offsetWidth>w.offsetWidth,C=r.offsetHeight>w.offsetHeight,L=(y?(n.clientX-a.left)/b:(n.clientY-a.top)/k)>.5,B=r.nextElementSibling,O=!1;if(y){var R=w.offsetTop,P=r.offsetTop;O=R===P?r.previousElementSibling===w&&!x||L&&x:r.previousElementSibling===w||w.previousElementSibling===r?(n.clientY-a.top)/k>.5:P>R}else p||(O=B!==w&&!C||L&&C);var Y=u(I,c,w,i,r,a,n,O);!1!==Y&&(1!==Y&&-1!==Y||(O=1===Y),ee=!0,setTimeout(g,30),t(h,v),w.contains(c)||(O&&!B?c.appendChild(w):r.parentNode.insertBefore(w,O?B:r)),S=w.parentNode,this._animate(i,w),this._animate(a,r))}}},_animate:function(e,t){var o=this.options.animation;if(o){var n=t.getBoundingClientRect();1===e.nodeType&&(e=e.getBoundingClientRect()),s(t,"transition","none"),s(t,"transform","translate3d("+(e.left-n.left)+"px,"+(e.top-n.top)+"px,0)"),t.offsetWidth,s(t,"transition","all "+o+"ms"),s(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=setTimeout(function(){s(t,"transition",""),s(t,"transform",""),t.animated=!1},o)}},_offUpEvents:function(){var e=this.el.ownerDocument;a(J,"touchmove",this._onTouchMove),a(J,"pointermove",this._onTouchMove),a(e,"mouseup",this._onDrop),a(e,"touchend",this._onDrop),a(e,"pointerup",this._onDrop),a(e,"touchcancel",this._onDrop),a(e,"pointercancel",this._onDrop),a(e,"selectstart",this)},_onDrop:function(t){var o=this.el,n=this.options;clearInterval(this._loopId),clearInterval(F.pid),clearTimeout(this._dragStartTimer),a(J,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(J,"drop",this),a(o,"dragstart",this._onDragStart)),this._offUpEvents(),t&&(U&&(t.preventDefault(),!n.dropBubble&&t.stopPropagation()),E&&E.parentNode&&E.parentNode.removeChild(E),I!==S&&"clone"===e.active.lastPullMode||D&&D.parentNode&&D.parentNode.removeChild(D),w&&(this.nativeDraggable&&a(w,"dragend",this),f(w),w.style["will-change"]="",l(w,this.options.ghostClass,!1),l(w,this.options.chosenClass,!1),d(this,I,"unchoose",w,I,O),I!==S?(R=v(w,n.draggable))>=0&&(d(null,S,"add",w,I,O,R),d(this,I,"remove",w,I,O,R),d(null,S,"sort",w,I,O,R),d(this,I,"sort",w,I,O,R)):w.nextSibling!==T&&(R=v(w,n.draggable))>=0&&(d(this,I,"update",w,I,O,R),d(this,I,"sort",w,I,O,R)),e.active&&(null!=R&&-1!==R||(R=O),d(this,I,"end",w,I,O,R),this.save()))),this._nulling()},_nulling:function(){I=w=S=E=T=D=x=C=L=P=Y=U=R=M=A=j=q=e.active=null,ne.forEach(function(e){e.checked=!0}),ne.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":w&&(this._onDragOver(e),r(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,r=0,i=n.length,a=this.options;r<i;r++)e=n[r],o(e,a.draggable,this.el)&&t.push(e.getAttribute(a.dataIdAttr)||h(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,r){var i=n.children[r];o(i,this.options.draggable,n)&&(t[e]=i)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return o(e,t||this.options.draggable,this.el)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];o[e]=t,"group"===e&&ae(o)},destroy:function(){var e=this.el;e[W]=null,a(e,"mousedown",this._onTapStart),a(e,"touchstart",this._onTapStart),a(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(e,"dragover",this),a(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),re.splice(re.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},i(J,"touchmove",function(t){e.active&&t.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){$={capture:!1,passive:!1}}}))}catch(e){}return e.utils={on:i,off:a,css:s,find:c,is:function(e,t){return!!o(e,t,e)},extend:b,throttle:_,closest:o,toggleClass:l,clone:k,index:v},e.create=function(t,o){return new e(t,o)},e.version="1.6.0",e})},,function(t,o,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(6);r(i);n(3);var a=n(8),l=r(a),s=n(5),c=r(s),d=n(2),u=r(d),f=n(4),g=r(f),m=n(0),h=r(m),v=n(1),p=r(v);localStorage.getItem("custom_dials")||localStorage.setItem("custom_dials","{}"),h.default.init(500),h.default.usedAndRemaining(function(e){0===e&&(localStorage.setItem("custom_dials","{}"),localStorage.setItem("background_local",""))}),(0,u.default)(),g.default.init(".md-ripple"),c.default.init();var _=function(){function e(){if(D){if("true"===localStorage.getItem("vertical_center")&&document.getElementById("content").classList.add("flex-vertical-center"),s(t()),"false"===localStorage.getItem("show_toolbar"))document.getElementById("header").remove(),document.getElementById("main").classList.add("hidden-toolbar");else{o();var e=p.default.debounce(function(e){u(e)},500);document.getElementById("bookmarkSearch").addEventListener("input",e,!1)}D.addEventListener("change",function(e){if(e.target.closest(".c-upload__input")){e.preventDefault();var t=e.target.getAttribute("data-id");c(e.target,t)}}),D.addEventListener("click",function(e){if(e.target.matches(".bookmark__del--bookmark"))g(e);else if(e.target.closest(".bookmark__del--folder"))m(e);else if(e.target.matches(".bookmark__edit")){var t=e.target.closest(".bookmark"),o=t.querySelector(".bookmark__title").textContent,n=t.querySelector(".bookmark__link").getAttribute("href");"#"===n.charAt(0)&&(n="");var r=e.target.getAttribute("data-id"),i=a(r);b.show(r,o,n,i)}else if(e.target.matches(".bookmark__screen")){e.preventDefault();var l=e.target.closest(".bookmark"),s=l.getAttribute("data-sort"),c=l.querySelector(".bookmark__link").href;d(l,s,c)}else e.target.matches("#add")&&b.show("New","","")},!1),document.getElementById("closeModal").addEventListener("click",function(){b.hide()},!1),document.body.addEventListener("keydown",function(e){27===e.which&&p.default.trigger("click",document.getElementById("closeModal"))},!1),document.getElementById("formBookmark").addEventListener("submit",function(e){e.preventDefault();var t=this.getAttribute("data-action"),o=document.getElementById("title").value,n=document.getElementById("url").value;"New"!==t?w(t,o,n)&&b.hide():y(o,n)&&b.hide()},!1),document.getElementById("resetCustomImage").addEventListener("click",function(e){if(e.preventDefault(),confirm(chrome.i18n.getMessage("confirm_delete_image"))){var t=e.target,o=t.getAttribute("data-bookmark");v(o,function(){var e=D.querySelector('[data-sort="'+o+'"]');e.querySelector(".bookmark__img").style.backgroundImage="",e.querySelector(".bookmark__img").classList.remove("bookmark__img--contain"),e.querySelector(".bookmark__img").classList.add("bookmark__img--folder"),t.closest("#customScreen").style.display="",p.default.notifications(chrome.i18n.getMessage("notice_image_removed"))})}}),window.addEventListener("hashchange",function(e){s(t()),"true"===localStorage.getItem("show_toolbar")&&o()},!1),"true"===localStorage.getItem("drag_and_drop")&&(I=l.default.create(D,{animation:200,filter:".bookmark__control",draggable:".column",ghostClass:"column--ghost",chosenClass:"column--chosen",preventOnFilter:!1,onUpdate:function(){Array.prototype.slice.call(D.querySelectorAll(".bookmark")).forEach(function(e,t){S.move(e.getAttribute("data-sort"),{parentId:D.getAttribute("data-folder"),index:t})})}}))}}function t(){var e=localStorage.getItem("default_folder_id");return""!==window.location.hash&&(e=window.location.hash.slice(1)),e}function o(){var e=document.getElementById("selectFolder");e.innerHTML="",e.removeEventListener("change",f,!1),S.getTree(function(o){var n=[],r=[],i=void 0,a=void 0;for(r.push(o[0].children[0]),r.push(o[0].children[1]);void 0!==(i=r.pop());)if(void 0!==i.children){for("0"===i.parentId&&(i.path=""),i.path+=i.title;void 0!==(a=i.children.pop());)void 0!==a.children&&(a.path=i.path+"/",r.push(a));n.push(i)}n.sort(function(e,t){return e.path.localeCompare(t.path)});var l=[];n.forEach(function(e){l.push("<option"+(e.id===t()?" selected":"")+' value="'+e.id+'">'+e.path+"</option>")}),e.innerHTML=l.join(""),e.addEventListener("change",f,!1)})}function n(e){var t="true"===localStorage.getItem("show_favicon")?'<img class="bookmark__favicon" width="16" height="16" src="chrome://favicon/{url}" alt="">':"",o=a(e.id),n=o?'<div class="bookmark__img" style="background-image: url(\''+o+"');\"></div>":'<div class="bookmark__img bookmark__img--external" data-fail-thumb="/img/404.svg" data-external-thumb="{thumbnailing_service}"></div>',r='<div class="column">\n        <div class="bookmark" data-sort="{id}">\n          '+n+'\n          <div class="bookmark__control bookmark__control--left">\n            <button class="bookmark__edit" data-bookmark="bookmark" data-title="{title}" data-url="{url}" data-id="{id}"></button>\n            <div class="bookmark__divider"></div>\n            <button class="bookmark__screen" data-id="{id}"></button>\n          </div>\n          <div class="bookmark__control bookmark__control--right">\n            <button class="bookmark__del--bookmark" data-id="{id}"></button>\n          </div>\n          <div class="bookmark__caption">\n            '+t+'\n            <div class="bookmark__title">{title}</div>\n          </div>\n          <a class="bookmark__link" href="{url}" title="{title}"></a>\n        </div>\n      </div>';return p.default.templater(r,{id:e.id,url:e.url,thumbnailing_service:localStorage.getItem("thumbnailing_service").replace("[URL]",p.default.getDomain(e.url)),title:e.title})}function r(e){var t=void 0,o=a(e.id);t=o?'<div class="bookmark__img bookmark__img--contain" style="background-image: url('+o+')"></div>':'<div class="bookmark__img bookmark__img--folder"></div>';var n='<div class="column">\n        <div class="bookmark" data-sort="{id}">\n          '+t+'\n          <div class="bookmark__control bookmark__control--left">\n            <button class="bookmark__edit" data-bookmark="folder" data-title="{title}" data-id="{id}"></button>\n            <div class="bookmark__divider"></div>\n            <div class="bookmark__image-folder">\n              <input type="file" name="" id="folderImage-{id}" class="c-upload__input" data-id="{id}">\n              <label for="folderImage-{id}" class="c-upload__label"></label>\n            </div>\n          </div>\n          <div class="bookmark__control bookmark__control--right">\n            <button class="bookmark__del--folder" data-id="{id}"></button>\n          </div>\n          <div class="bookmark__caption">\n            <img src="/img/folder.svg" class="bookmark__favicon" width="16" height="16" alt="">\n            <div class="bookmark__title">{title}</div>\n          </div>\n          <a class="bookmark__link" href="#{url}" title="{title}"></a>\n        </div>\n      </div>';return p.default.templater(n,{id:e.id,url:e.id,title:e.title})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];e.forEach(function(e){void 0!==e.url&&o.push(n(e)),void 0!==e.children&&o.push(r(e))}),D.innerHTML=o.join("")+"\n      "+(t?'<div class="column--nosort">\n          <div class="bookmark--create">\n            <div class="bookmark__img--add"></div>\n            <a class="bookmark__link--create" id="add"></a>\n          </div>\n        </div>':"")+"\n    ";var i=D.querySelectorAll(".bookmark__img--external"),a=!0,l=!1,s=void 0;try{for(var c,d=i[Symbol.iterator]();!(a=(c=d.next()).done);a=!0)!function(){var e=c.value;p.default.imageLoaded(e.dataset.externalThumb,{done:function(t){e.style.backgroundImage="url("+t+")"},fail:function(){e.style.backgroundImage="url("+e.dataset.failThumb+")"}})}()}catch(e){l=!0,s=e}finally{try{!a&&d.return&&d.return()}finally{if(l)throw s}}}function a(e){var t=JSON.parse(localStorage.getItem("custom_dials")),o=void 0;return t&&(o=t[e]),o}function s(e){S.getSubTree(e,function(t){void 0!==t?(i(t[0].children,!0),D.setAttribute("data-folder",e)):p.default.notifications(chrome.i18n.getMessage("notice_cant_find_id"),15e3)})}function c(e,t){var o=e.files[0];if(o){if(!/image\/(jpe?g|png)$/.test(o.type))return alert(chrome.i18n.getMessage("alert_file_type_fail"));e.value="";var n=e.closest(".bookmark"),r=void 0;n.innerHTML+='<div id="overlay_id_'+t+'" class="bookmark__overlay">'+E+"</div>";var i=new FileReader;i.readAsDataURL(o),i.onload=function(){p.default.resizeScreen(i.result,function(e){var o=p.default.base64ToBlob(e,"image/jpg"),i="folder-"+t+".jpg";h.default.createDir("images",function(e){h.default.createFile("/images/"+i,{file:o,fileType:"jpg"},function(e){var o=JSON.parse(localStorage.getItem("custom_dials"));o[t]=e.toURL(),localStorage.setItem("custom_dials",JSON.stringify(o));var i=n.querySelector(".bookmark__img");i.classList.remove("bookmark__img--folder"),i.classList.add("bookmark__img--contain"),i.style.backgroundImage="url('"+e.toURL()+"?refresh="+p.default.rand(1,9999)+"')",(r=document.getElementById("overlay_id_"+t))&&n.removeChild(r),p.default.notifications(chrome.i18n.getMessage("notice_folder_image_updated"))})})})},i.onerror=function(){console.warn("Image upload failed")}}}function d(e,t,o){var n=void 0;e.innerHTML+='<div id="overlay_id_'+t+'" class="bookmark__overlay">'+E+"</div>";var r=e.querySelector(".bookmark__img");chrome.runtime.sendMessage({captureUrl:o,id:t},function(o){if(o.warning)return console.warn(o.warning),(n=document.getElementById("overlay_id_"+t))&&e.removeChild(n),!1;r.classList.remove("bookmark__img--external"),r.style.backgroundImage="url('"+o+"?refresh="+p.default.rand(1,9999)+"')",(n=document.getElementById("overlay_id_"+t))&&e.removeChild(n)})}function u(e){var o=e.target.value.trim().toLowerCase();S.search(o,function(e){e.length>0?("true"===localStorage.getItem("drag_and_drop")&&I.option("disabled",!0),i(e)):("true"===localStorage.getItem("drag_and_drop")&&I.option("disabled",!1),s(t()))})}function f(e){var t=this.value;window.location.hash="#"+t,s(t)}function g(e){e.preventDefault();var t=e.target,o=t.closest(".column");if(confirm(chrome.i18n.getMessage("confirm_delete_bookmark"),"")){var n=t.getAttribute("data-id");S.remove(n,function(){D.removeChild(o),v(n),p.default.notifications(chrome.i18n.getMessage("notice_bookmark_removed"))})}}function m(e){e.preventDefault();var t=e.target,n=t.closest(".column");if(confirm(chrome.i18n.getMessage("confirm_delete_folder"),"")){var r=t.getAttribute("data-id");S.removeTree(r,function(){D.removeChild(n),v(r),o(),p.default.notifications(chrome.i18n.getMessage("notice_folder_removed"))})}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},o=a(e);if(o){var n=o.split("/").pop();h.default.deleteFile("/images/"+n,function(){var o=JSON.parse(localStorage.getItem("custom_dials"));delete o[e],localStorage.setItem("custom_dials",JSON.stringify(o)),t()})}}function _(e){return!!/^(http|https|ftp|file|chrome|chrome-extension):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(e)}function k(e,t){if(0!==e.length)return _(t)||0===t.length||(t="http://"+t),{title:e,url:t}}function y(e,t){var o=k(e,t);return void 0!==o?(o.parentId=D.getAttribute("data-folder"),S.create(o,function(e){var t=void 0;t=e.url?n(e):r(e),D.querySelector(".column--nosort").insertAdjacentHTML("beforeBegin",t);var o=D.querySelector('[data-sort="'+e.id+'"]');if(e.url)if("true"===localStorage.getItem("auto_generate_thumbnail"))d(o,e.id,e.url);else{var i=o.querySelector(".bookmark__img");i.classList.add("bookmark__img--external"),p.default.imageLoaded(i.dataset.externalThumb,{done:function(e){i.style.backgroundImage="url("+e+")"},fail:function(){i.style.backgroundImage=i.dataset.failThumb}})}}),!0):(alert(chrome.i18n.getMessage("alert_create_fail_bookmark")),!1)}function w(e,t,o){var n=k(t,o),r=D.querySelector('[data-sort="'+e+'"]');r.querySelector(".bookmark__edit");return 0===o.length||_(o)||(n=void 0),void 0!==n?(S.update(e,n,function(e){r.querySelector(".bookmark__link").href=e.url?e.url:"#"+e.id,r.querySelector(".bookmark__title").textContent=e.title,r.querySelector(".bookmark__link").title=e.title,p.default.notifications(chrome.i18n.getMessage("notice_bookmark_updated"))}),!0):(alert(chrome.i18n.getMessage("alert_update_fail_bookmark")),!1)}var S=chrome.bookmarks,E='\n    <svg class="loading" viewBox= "0 0 100 100" xmlns= "http://www.w3.org/2000/svg" >\n      <circle class="path" fill="none" stroke-width="8" stroke-linecap="round" cx="50" cy="50" r="40"></circle>\n    </svg>\n  ',D=document.getElementById("includeThree"),I=null;return{init:e}}(),b=function(){var e=(document.getElementById("modal-overlay"),document.getElementById("modal"),document.getElementById("formBookmark")),t=document.getElementById("modalHead"),o=document.getElementById("title"),n=document.getElementById("url"),r=document.getElementById("customScreen"),i=document.getElementById("main"),a=document.body,l=null,s=void 0;return{show:function(c,d,u,f){l||("New"!==c?(f&&!u&&(r.style.display="block",r.querySelector("img").src=f+"?refresh="+p.default.rand(1,9999),r.querySelector("#resetCustomImage").setAttribute("data-bookmark",c)),t.innerHTML=chrome.i18n.getMessage("edit_bookmark")+" - <span>"+d+"</span>",o.value=d,u?(n.style.display="",n.value=u):n.style.display="none"):(setTimeout(function(){o.focus()},100),t.textContent=chrome.i18n.getMessage("add_bookmark"),n.style.display="",o.value="",n.value=""),e.setAttribute("data-action",c),s=window.pageYOffset,i.style.top=-s+"px",i.classList.add("fixed"),a.classList.add("modal--show"),l=!0)},hide:function(){l&&(a.classList.remove("modal--show"),setTimeout(function(){i.classList.remove("fixed"),i.style.top="",window.scrollTo(0,s),s=null,r.style.display="",e.reset()},250),l=null)}}}(),k=function(){return{setBG:function(){var t=document.getElementById("bg"),o=localStorage.getItem("background_image");if("background_color"===o)return t.style.backgroundColor=localStorage.getItem("background_color"),void setTimeout(function(){t.style.opacity=1},20);var n="background_local"===o?localStorage.getItem("background_local"):localStorage.getItem("background_external");n&&""!==n&&p.default.imageLoaded(n,{done:function(e){t.style.backgroundImage="url('"+e+"')",t.style.opacity=1},fail:function(){console.warn("Local background image resource problem: "+e.type),t.style.opacity=1}})},calculateStyles:function(){var e=parseInt(localStorage.getItem("dial_columns")),t=document.getElementById("generateStyles");if(e>=8&&window.innerWidth<1200){var o=Math.floor(1170/e),n=o/(4/3);return void(t.innerHTML=".bookmarks {justify-content: center} .column, .column--nosort {width: "+o+"px; height: "+n+"px}")}if(!(window.innerWidth<768)){var r=Math.floor(document.getElementById("includeThree").offsetWidth),i=Math.floor(r/e),a=i/(4/3);t.innerHTML=".column, .column--nosort {width: "+i+"px; height: "+a+"px}"}}}}();k.calculateStyles(),_.init(),window.addEventListener("load",function(){return k.setBG()}),window.addEventListener("resize",function(){return k.calculateStyles()})}]);