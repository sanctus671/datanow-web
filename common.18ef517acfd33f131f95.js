(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"DK3/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i}));var i=function(){var e=window.TapticEngine;e&&e.selection()},r=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},s=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},Jky2:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));var i=n("mrSG"),r=function(e,t){return null!==t.closest(e)},o=function(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(e,t,n){return Object(i.b)(void 0,void 0,void 0,(function(){var r;return Object(i.e)(this,(function(i){return null!=e&&"#"!==e[0]&&!c.test(e)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(e,n)]):[2,!1]}))}))}},NTBD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var i=function(e,t,n){var i=new MutationObserver((function(e){n(r(e,t))}));return i.observe(e,{childList:!0,subtree:!0}),i},r=function(e,t){var n;return e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++)n=o(e.addedNodes[i],t)||n})),n},o=function(e,t){if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find((function(e){return!0===e.checked}))}},X7az:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("mrSG"),r=(n("ZZ/e"),n("Pfr9")),o=(n("p6m0"),n("ri4K"),function(){function e(e,t,n){var i=this;this.popoverController=e,this.sitesSerivce=t,this.authenticationService=n,this.sites=[],this.activeSite={},this.activeProcess={},this.initialSetup(),this.authenticationService.authState.subscribe((function(e){i.activeSite.siteId||i.initialSetup()}))}return e.prototype.ngOnInit=function(){},e.prototype.initialSetup=function(){var e=this;this.sitesSerivce.getActiveSite().then((function(t){e.sitesSerivce.getActiveProcess().then((function(n){e.sitesSerivce.getSites().then((function(i){e.sites=i,e.setActiveSite(t),n&&e.setActiveProcess(n)}))}))}))},e.prototype.setActiveSite=function(e){if(!e&&this.sites.length>0)e=this.sites[0].siteId,this.activeSite=this.sites[0],this.sitesSerivce.updateActiveSite(e);else if(e)for(var t=0,n=this.sites;t<n.length;t++){var i=n[t];i.siteId===e&&(this.activeSite=i,this.sitesSerivce.updateActiveSite(e))}},e.prototype.setActiveProcess=function(e){if(!e&&this.activeSite.siteId&&this.activeSite.processes&&this.activeSite.processes.length>0)e=this.activeSite.processes[0].processId,this.activeProcess=this.activeSite.processes[0],this.sitesSerivce.updateActiveProcess(this.activeSite.siteId,e);else if(e&&this.activeSite.siteId)for(var t=0,n=this.activeSite.processes;t<n.length;t++){var i=n[t];i.processId===e&&(this.activeProcess=i,this.sitesSerivce.updateActiveProcess(this.activeSite.siteId,e))}},e.prototype.siteSelectPopover=function(e){return i.b(this,void 0,void 0,(function(){var t,n=this;return i.e(this,(function(i){switch(i.label){case 0:return[4,this.popoverController.create({component:r.a,componentProps:{sites:this.sites,activeSite:this.activeSite,activeProcess:this.activeProcess},event:e,mode:"ios",showBackdrop:!1,cssClass:"site-select-popover"})];case 1:return(t=i.sent()).present(),[2,t.onDidDismiss().then((function(e){e&&e.data&&e.data.processId&&e.data.siteId?n.selectSite(e.data.siteId,e.data.processId):e&&e.data&&e.data.siteId&&n.selectSite(e.data.siteId,null)}))]}}))}))},e.prototype.selectSite=function(e,t){var n=this;e&&this.setActiveSite(e),t?this.setActiveProcess(t):(this.activeProcess={},this.sitesSerivce.updateActiveProcess(this.activeSite.siteId,null)),this.siteSelected=!0,setTimeout((function(){n.siteSelected=!1}),800)},e}())},deqC:function(e,t,n){"use strict";var i=n("CcnG"),r=n("Ip0R"),o=n("oBZk"),s=n("ZZ/e");n("X7az"),n("p6m0"),n("ri4K"),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var c=i.rb({encapsulation:0,styles:[['.site-selector[_ngcontent-%COMP%]{position:absolute;right:0;top:0;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;cursor:pointer}.site-selector[_ngcontent-%COMP%]   .site-selector__current-selection[_ngcontent-%COMP%]{padding-right:40px;overflow:hidden;text-align:right}.site-selector[_ngcontent-%COMP%]   .site-selector__current-selection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Neatrif Studio",sans-serif!important;font-style:normal;font-weight:400;font-size:12px;line-height:14px;color:#33395d;margin:0}.site-selector[_ngcontent-%COMP%]   .site-selector__current-selection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#2dca73;font-size:14px;vertical-align:middle;margin-bottom:3px;opacity:0;-webkit-transition:opacity .4s;transition:ease .4s opacity}.site-selector[_ngcontent-%COMP%]   .site-selector__current-selection[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:"Neatrif Studio",sans-serif!important;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#008dff;margin:0}.site-selector[_ngcontent-%COMP%]   .site-selector__current-selection.site-selector__current-selection--site-selected[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{opacity:1}.site-selector[_ngcontent-%COMP%]   .site-selector__dropdown[_ngcontent-%COMP%]{position:absolute;right:15px;top:0;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}']],data:{}});function a(e){return i.Lb(0,[(e()(),i.tb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(e()(),i.Kb(1,null,["",""]))],null,(function(e,t){var n=t.component;e(t,1,0,n.activeProcess.processId?n.activeProcess.name:"Select a process")}))}function l(e){return i.Lb(0,[(e()(),i.tb(0,0,null,null,13,"div",[["class","site-selector"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.siteSelectPopover(n)&&i),i}),null,null)),(e()(),i.tb(1,0,null,null,9,"div",[["class","site-selector__current-selection"]],null,null,null,null,null)),i.Hb(512,null,r.q,r.r,[i.s,i.t,i.k,i.D]),i.sb(3,278528,null,0,r.h,[r.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Gb(4,{"site-selector__current-selection--site-selected":0}),(e()(),i.tb(5,0,null,null,3,"h5",[],null,null,null,null,null)),(e()(),i.tb(6,0,null,null,1,"ion-icon",[["name","ios-checkmark-badge"]],null,null,null,o.D,o.i)),i.sb(7,49152,null,0,s.C,[i.h,i.k,i.z],{name:[0,"name"]},null),(e()(),i.Kb(8,null,[" ",""])),(e()(),i.ib(16777216,null,null,1,null,a)),i.sb(10,16384,null,0,r.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(e()(),i.tb(11,0,null,null,2,"div",[["class","site-selector__dropdown"]],null,null,null,null,null)),(e()(),i.tb(12,0,null,null,1,"ion-icon",[["name","md-arrow-dropdown"]],null,null,null,o.D,o.i)),i.sb(13,49152,null,0,s.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],(function(e,t){var n=t.component,i=e(t,4,0,n.siteSelected);e(t,3,0,"site-selector__current-selection",i),e(t,7,0,"ios-checkmark-badge"),e(t,10,0,n.activeProcess.processId),e(t,13,0,"md-arrow-dropdown")}),(function(e,t){var n=t.component;e(t,8,0,n.activeSite.siteId?n.activeSite.name:"Select a site")}))}function u(e){return i.Lb(0,[(e()(),i.ib(16777216,null,null,1,null,l)),i.sb(1,16384,null,0,r.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(e,t){e(t,1,0,t.component.activeSite.siteId)}),null)}},uYVq:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){return function(e,t){this.x=e,this.y=t}}(),r=function(e,t,n,i,r){var c=s(e.y,t.y,n.y,i.y,r);return o(e.x,t.x,n.x,i.x,c[0])},o=function(e,t,n,i,r){return r*(3*t*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-e*Math.pow(r-1,3)},s=function(e,t,n,i,r){return c((i-=r)-3*(n-=r)+3*(t-=r)-(e-=r),3*n-6*t+3*e,3*t-3*e,e).filter((function(e){return e>=0&&e<=1}))},c=function(e,t,n,i){if(0===e)return function(e,t,n){var i=t*t-4*e*n;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]}(t,n,i);var r=(3*(n/=e)-(t/=e)*t)/3,o=(2*t*t*t-9*t*n+27*(i/=e))/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];var s=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(o/2,.5)-t/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-t/3];var c=Math.sqrt(Math.pow(-r/3,3)),a=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),l=2*Math.pow(c,1/3);return[l*Math.cos(a/3)-t/3,l*Math.cos((a+2*Math.PI)/3)-t/3,l*Math.cos((a+4*Math.PI)/3)-t/3]}},"v7+D":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n("mrSG"),r=function(e,t,n,r,o){return Object(i.b)(void 0,void 0,void 0,(function(){var s;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach((function(e){return s.classList.add(e)})),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}}))}))},o=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},zrW2:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return s}));var i=n("mrSG"),r=n("ae0+"),o=n("ocqh"),s=function(e){return new Promise((function(t,n){Object(r.m)((function(){c(e),a(e).then((function(n){n.animation&&n.animation.destroy(),l(e),t(n)}),(function(t){l(e),n(t)}))}))}))},c=function(e){var t=e.enteringEl,n=e.leavingEl;O(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),n&&y(n,!1)},a=function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(n){switch(n.label){case 0:return[4,u(e)];case 1:return[2,(t=n.sent())?d(t,e):f(e)]}}))}))},l=function(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},u=function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,n.e(101).then(n.bind(null,"KWkT"))]:[2,void 0];case 1:return t=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(102).then(n.bind(null,"l2mW"))];case 3:t=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,t]}}))}))},d=function(e,t){return Object(i.b)(void 0,void 0,void 0,(function(){var r,o;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,v(t,!0)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,5,,6]),[4,n.e(6).then(n.bind(null,"5QBn"))];case 3:return[4,i.sent().create(e,t.baseEl,t)];case 4:return r=i.sent(),[3,6];case 5:return i.sent(),r=e(t.baseEl,t),[3,6];case 6:return b(t.enteringEl,t.leavingEl),[4,p(r,t)];case 7:return o=i.sent(),t.progressCallback&&t.progressCallback(void 0),o&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:o,animation:r}]}}))}))},f=function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t,n;return Object(i.e)(this,(function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,v(e,!1)];case 1:return i.sent(),b(t,n),m(t,n),[2,{hasCompleted:!0}]}}))}))},v=function(e,t){return Object(i.b)(void 0,void 0,void 0,(function(){var n;return Object(i.e)(this,(function(i){switch(i.label){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[S(e.enteringEl),S(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(n)];case 1:return i.sent(),[4,h(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}}))}))},h=function(e,t){return Object(i.b)(void 0,void 0,void 0,(function(){return Object(i.e)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},p=function(e,t){var n=t.progressCallback,i=new Promise((function(t){e.onFinish((function(n){"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),i},b=function(e,t){g(t,o.c),g(e,o.a)},m=function(e,t){g(e,o.b),g(t,o.d)},g=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},S=function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(S))];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},y=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},O=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},M=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},zwjO:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,c.forEach((function(e){for(var n=t.querySelectorAll(e),i=n.length-1;i>=0;i--){var s=n[i];s.parentNode?s.parentNode.removeChild(s):t.removeChild(s);for(var c=o(s),a=0;a<c.length;a++)r(c[a])}}));for(var i=o(t),s=0;s<i.length;s++)r(i[s]);var a=document.createElement("div");a.appendChild(t);var l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(u){return console.error(u),""}},r=function(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var n=e.attributes.item(t),i=n.name;if(s.includes(i.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}else e.removeAttribute(i)}var a=o(e);for(t=0;t<a.length;t++)r(a[t])}},o=function(e){return null!=e.children?e.children:e.childNodes},s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);