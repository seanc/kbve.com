function Y(o,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function f(o){return function(t){if(Array.isArray(t))return g(t)}(o)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(o)||function(t,n){if(!!t){if(typeof t=="string")return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,n)}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=o[n];return e}var P,y,c,b,O,w=(P=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],y=function(){function o(e){var i=e.targetModal,r=e.triggers,a=r===void 0?[]:r,l=e.onShow,s=l===void 0?function(){}:l,u=e.onClose,h=u===void 0?function(){}:u,M=e.openTrigger,D=M===void 0?"data-micromodal-trigger":M,S=e.closeTrigger,H=S===void 0?"data-micromodal-close":S,x=e.openClass,R=x===void 0?"is-open":x,C=e.disableScroll,W=C!==void 0&&C,A=e.disableFocus,U=A!==void 0&&A,L=e.awaitCloseAnimation,G=L!==void 0&&L,T=e.awaitOpenAnimation,J=T!==void 0&&T,F=e.debugMode,Q=F!==void 0&&F;(function(V,X){if(!(V instanceof X))throw new TypeError("Cannot call a class as a function")})(this,o),this.modal=document.getElementById(i),this.config={debugMode:Q,disableScroll:W,openTrigger:D,closeTrigger:H,openClass:R,onShow:s,onClose:h,awaitCloseAnimation:G,awaitOpenAnimation:J,disableFocus:U},a.length>0&&this.registerTriggers.apply(this,f(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,n;return t=o,(n=[{key:"registerTriggers",value:function(){for(var e=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];r.filter(Boolean).forEach(function(l){l.addEventListener("click",function(s){return e.showModal(s)})})}},{key:"showModal",value:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function a(){e.modal.removeEventListener("animationend",a,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,i)}},{key:"closeModal",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",function a(){i.classList.remove(r),i.removeEventListener("animationend",a,!1)},!1)}else i.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var i=document.querySelector("body");switch(e){case"enable":Object.assign(i.style,{overflow:""});break;case"disable":Object.assign(i.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){e.keyCode===27&&this.closeModal(e),e.keyCode===9&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(P);return Array.apply(void 0,f(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var i=this.getFocusableNodes();if(i.length!==0){var r=i.filter(function(a){return!a.hasAttribute(e.config.closeTrigger)});r.length>0&&r[0].focus(),r.length===0&&i[0].focus()}}}},{key:"retainFocus",value:function(e){var i=this.getFocusableNodes();if(i.length!==0)if(i=i.filter(function(a){return a.offsetParent!==null}),this.modal.contains(document.activeElement)){var r=i.indexOf(document.activeElement);e.shiftKey&&r===0&&(i[i.length-1].focus(),e.preventDefault()),!e.shiftKey&&i.length>0&&r===i.length-1&&(i[0].focus(),e.preventDefault())}else i[0].focus()}}])&&Y(t.prototype,n),o}(),c=null,b=function(o){if(!document.getElementById(o))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(o,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(o,'"></div>')),!1},O=function(o,t){if(function(e){e.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(o),!t)return!0;for(var n in t)b(n);return!0},{init:function(o){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},o),n=f(document.querySelectorAll("[".concat(t.openTrigger,"]"))),e=function(a,l){var s=[];return a.forEach(function(u){var h=u.attributes[l].value;s[h]===void 0&&(s[h]=[]),s[h].push(u)}),s}(n,t.openTrigger);if(t.debugMode!==!0||O(n,e)!==!1)for(var i in e){var r=e[i];t.targetModal=i,t.triggers=f(r),c=new y(t)}},show:function(o,t){var n=t||{};n.targetModal=o,n.debugMode===!0&&b(o)===!1||(c&&c.removeEventListeners(),(c=new y(n)).showModal())},close:function(o){o?c.closeModalById(o):c.closeModal()}});typeof window<"u"&&(window.MicroModal=w);const E="menu-modal",q=document.querySelector("#page-header"),N=document.documentElement,Z=document.querySelector(`#${E} ul`),_=document.querySelector("#open-nav-button"),ee=document.querySelector("#close-nav-button"),te=()=>{w.show(E,{disableScroll:!0})},I=()=>{w.close(E)};_.addEventListener("click",te);ee.addEventListener("click",I);document.addEventListener("scroll",()=>{const o=N.clientHeight-N.scrollTop-q.offsetHeight;q.classList.toggle("fixed-header",o<0)});Z.addEventListener("click",o=>{o.target.tagName==="A"&&I()});const p=["light","dark"],oe=document.querySelector("#theme-switcher"),B=()=>document.documentElement.dataset.theme,z=()=>{const o=B(),t=p.indexOf(o);return p[(t+1)%p.length]},j=()=>{const o=B();document.querySelector(`#icon-theme-${o}`).classList.add("hidden");const t=z();document.querySelector(`#icon-theme-${t}`).classList.remove("hidden")};oe.addEventListener("click",()=>{const o=z();document.documentElement.dataset.theme=o,localStorage.setItem("theme",o),j()});j();const ne=800,ie=.1;class re{x;y;z;xPrev;yPrev;constructor(t=0,n=0,e=0){this.x=t,this.y=n,this.z=e,this.xPrev=t,this.yPrev=n}update(t,n,e){this.xPrev=this.x,this.yPrev=this.y,this.z+=e*.0675,this.x+=this.x*(e*.0225)*this.z,this.y+=this.y*(e*.0225)*this.z,(this.x>t/2||this.x<-t/2||this.y>n/2||this.y<-n/2)&&(this.x=Math.random()*t-t/2,this.y=Math.random()*n-n/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(t){t.lineWidth=this.z,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.xPrev,this.yPrev),t.stroke()}}const K=Array.from({length:ne},()=>new re(0,0,0));let v=0;const m=document.querySelector("#starfield-canvas"),d=m.getContext("2d"),k=document.querySelector("#starfield"),ae=new ResizeObserver(se);ae.observe(k);function se(){v>0&&cancelAnimationFrame(v);const{clientWidth:o,clientHeight:t}=k,n=window.devicePixelRatio||1;m.width=o*n,m.height=t*n,m.style.width=`${o}px`,m.style.height=`${t}px`,d.scale(n,n);for(const e of K)e.x=Math.random()*o-o/2,e.y=Math.random()*t-t/2,e.z=0;d.translate(o/2,t/2),d.fillStyle="rgba(0, 0, 0, 0.4)",d.strokeStyle="white",v=requestAnimationFrame($)}function $(){const{clientWidth:o,clientHeight:t}=k;for(const n of K)n.update(o,t,ie),n.draw(d);d.fillRect(-o/2,-t/2,o,t),v=requestAnimationFrame($)}