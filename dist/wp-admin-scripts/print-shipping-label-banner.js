this.wc=this.wc||{},this.wc.printShippingLabelBanner=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=478)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t,n){e.exports=n(76)()},10:function(e,t){!function(){e.exports=this.React}()},106:function(e,t,n){"use strict";var r=n(10),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(82),c=n(107),a=n(108),s="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function l(e,t,n,r){var i,a=typeof e;if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===o)return n(r,e,""===t?"."+u(e,0):t),1;var p=0,f=""===t?".":t+":";if(Array.isArray(e))for(var d=0;d<e.length;d++)p+=l(i=e[d],f+u(i,d),n,r);else{var h=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(h){0;for(var m,y=h.call(e),v=0;!(m=y.next()).done;)p+=l(i=m.value,f+u(i,v++),n,r)}else if("object"===a){0;var b=""+e;c(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===b?"object with keys {"+Object.keys(e).join(", ")+"}":b,"")}}return p}var p=/\/+/g;function f(e){return(""+e).replace(p,"$&/")}var d,h,m=y,y=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},v=function(e){c(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function b(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function g(e,t,n){var o,c,a=e.result,s=e.keyPrefix,u=e.func,l=e.context,p=u.call(l,t,e.count++);Array.isArray(p)?w(p,a,n,i.thatReturnsArgument):null!=p&&(r.isValidElement(p)&&(o=p,c=s+(!p.key||t&&t.key===p.key?"":f(p.key)+"/")+n,p=r.cloneElement(o,{key:c},void 0!==o.props?o.props.children:void 0)),a.push(p))}function w(e,t,n,r,o){var i="";null!=n&&(i=f(n)+"/");var c=b.getPooled(t,i,r,o);!function(e,t,n){null==e||l(e,"",t,n)}(e,g,c),b.release(c)}b.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)},(h=b).instancePool=[],h.getPooled=d||m,h.poolSize||(h.poolSize=10),h.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;c(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,i.thatReturnsArgument);return t}},107:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,c,a){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,c,a],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},108:function(e,t,n){"use strict";var r=n(82);e.exports=r},109:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},11:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},12:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},13:function(e,t,n){var r=n(75);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},14:function(e,t,n){var r=n(30),o=n(8);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},15:function(e,t){!function(){e.exports=this.wp.data}()},18:function(e,t){!function(){e.exports=this.wp.compose}()},2:function(e,t){!function(){e.exports=this.wp.i18n}()},22:function(e,t){!function(){e.exports=this.wc.data}()},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return m})),n.d(t,"f",(function(){return y}));var r=n(30),o=n.n(r),i=n(2),c=["wcAdminSettings","preloadSettings"],a="object"===("undefined"==typeof wcSettings?"undefined":o()(wcSettings))?wcSettings:{},s=Object.keys(a).reduce((function(e,t){return c.includes(t)||(e[t]=a[t]),e}),{}),u=s.adminUrl,l=(s.countries,s.currency),p=s.locale,f=s.orderStatuses,d=(s.siteTitle,s.wcAssetUrl);function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(c.includes(e))throw new Error(Object(i.__)("Mutable settings should be accessed via data store."));var r=s.hasOwnProperty(e)?s[e]:t;return n(r,t)}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(c.includes(e))throw new Error(Object(i.__)("Mutable settings should be mutated via data store."));s[e]=n(t)}function y(e){return(u||"")+e}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(n(10)),i=a(n(106)),c=a(n(109));function a(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function u(e,t){var n,c,a,l,p,f,d,h,m=[],y={};for(f=0;f<e.length;f++)if("string"!==(p=e[f]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+s);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){n=t[p.value],a=f;break}m.push(t[p.value])}else m.push(p.value);return n&&(l=function(e,t){var n,r,o=t[e],i=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return r;i--}}throw new Error("Missing closing component token `"+o.value+"`")}(a,e),d=u(e.slice(a+1,l),t),c=o.default.cloneElement(n,{},d),m.push(c),l<e.length-1&&(h=u(e.slice(l+1),t),m=m.concat(h))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(y["interpolation-child-"+t]=e)})),(0,i.default)(y))}t.default=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(s=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var i=(0,c.default)(t);try{return u(i,n)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},27:function(e,t){!function(){e.exports=this.wp.apiFetch}()},276:function(e,t,n){},28:function(e,t){!function(){e.exports=this.wc.tracks}()},3:function(e,t){!function(){e.exports=this.lodash}()},30:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},4:function(e,t){!function(){e.exports=this.wp.components}()},43:function(e,t){function n(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var c=e.apply(t,r);function a(e){n(c,o,i,a,s,"next",e)}function s(e){n(c,o,i,a,s,"throw",e)}a(void 0)}))}}},478:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),i=n(0),c=n(22),a=n(9),s=n.n(a),u=n(43),l=n.n(u),p=n(11),f=n.n(p),d=n(12),h=n.n(d),m=n(8),y=n.n(m),v=n(13),b=n.n(v),g=n(14),w=n.n(g),O=n(6),_=n.n(O),j=n(2),E=n(4),S=n(18),k=n(26),x=n.n(k),P=n(1),L=n.n(P),C=n(3),R=n(15),A=n(25),T=n(28);n(276);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_()(e);if(t){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}var M,D=function(e){b()(n,e);var t=B(n);function n(){var e;f()(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),o()(y()(e),"setDismissed",(function(t){e.props.updateOptions({woocommerce_shipping_dismissed_timestamp:t})})),o()(y()(e),"hideBanner",(function(){document.getElementById("woocommerce-admin-print-label").style.display="none"})),o()(y()(e),"remindMeLaterClicked",(function(){var t=e.props,n=t.onCloseAll,r=t.trackElementClicked;e.setDismissed(Date.now()),n(),e.hideBanner(),r("shipping_banner_dismiss_modal_remind_me_later")})),o()(y()(e),"closeForeverClicked",(function(){var t=e.props,n=t.onCloseAll,r=t.trackElementClicked;e.setDismissed(-1),n(),e.hideBanner(),r("shipping_banner_dismiss_modal_close_forever")})),e}return h()(n,[{key:"render",value:function(){var e=this.props,t=e.onClose;return e.visible?Object(i.createElement)(E.Modal,{title:Object(j.__)("Are you sure?","woocommerce-admin"),onRequestClose:t,className:"wc-admin-shipping-banner__dismiss-modal"},Object(i.createElement)("p",{className:"wc-admin-shipping-banner__dismiss-modal-help-text"},Object(j.__)("With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.","woocommerce-admin")),Object(i.createElement)("div",{className:"wc-admin-shipping-banner__dismiss-modal-actions"},Object(i.createElement)(E.Button,{isSecondary:!0,onClick:this.remindMeLaterClicked},Object(j.__)("Remind me later","woocommerce-admin")),Object(i.createElement)(E.Button,{isPrimary:!0,onClick:this.closeForeverClicked},Object(j.__)("I don't need this","woocommerce-admin")))):null}}]),n}(i.Component),I=Object(S.compose)(Object(R.withDispatch)((function(e){return{updateOptions:e(c.OPTIONS_STORE_NAME).updateOptions}})))(D),N="download",W="install",G="activate",F="setup",q="start",U=(M={},o()(M,N,Object(j.__)("download","woocommerce-admin")),o()(M,W,Object(j.__)("install","woocommerce-admin")),o()(M,G,Object(j.__)("activate","woocommerce-admin")),o()(M,F,Object(j.__)("set up","woocommerce-admin")),o()(M,q,Object(j.__)("start","woocommerce-admin")),M);function Q(e){var t,n,r=e.isSetupError,o=e.errorReason;return r?Object(i.createElement)("div",{className:"wc-admin-shipping-banner-install-error"},Object(i.createElement)(E.Dashicon,{icon:"warning"}),(n=(t=o)in U?U[t]:U[F],Object(j.sprintf)(Object(j.__)("Unable to %s the plugin. Refresh the page and try again.","woocommerce-admin"),n))):null}var H=n(27),J=n.n(H);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_()(e);if(t){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}var z=Object(A.g)("wcAdminAssetUrl",""),K="woocommerce-services",X=function(e){b()(r,e);var t,n=Y(r);function r(e){var t;f()(this,r),t=n.call(this,e),o()(y()(t),"isSetupError",(function(){return t.state.wcsSetupError})),o()(y()(t),"closeDismissModal",(function(){t.setState({isDismissModalOpen:!1}),t.trackElementClicked("shipping_banner_dismiss_modal_close_button")})),o()(y()(t),"openDismissModal",(function(){t.setState({isDismissModalOpen:!0}),t.trackElementClicked("shipping_banner_dimiss")})),o()(y()(t),"hideBanner",(function(){t.setState({showShippingBanner:!1})})),o()(y()(t),"createShippingLabelClicked",(function(){var e=t.props.activePlugins;t.setState({isShippingLabelButtonBusy:!0}),t.trackElementClicked("shipping_banner_create_label"),e.includes(K)?t.acceptTosAndGetWCSAssets():t.installAndActivatePlugins(K)})),o()(y()(t),"woocommerceServiceLinkClicked",(function(){t.trackElementClicked("shipping_banner_woocommerce_service_link")})),o()(y()(t),"trackBannerEvent",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.props,o=r.activePlugins,i=r.isJetpackConnected;Object(T.recordEvent)(e,V({banner_name:"wcadmin_install_wcs_prompt",jetpack_installed:o.includes("jetpack"),jetpack_connected:i,wcs_installed:o.includes(K)},n))})),o()(y()(t),"trackImpression",(function(){t.trackBannerEvent("banner_impression")})),o()(y()(t),"trackElementClicked",(function(e){t.trackBannerEvent("banner_element_clicked",{element:e})})),o()(y()(t),"getInstallText",(function(){return t.props.activePlugins.includes(K)?Object(j.__)('You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',"woocommerce-admin"):Object(j.__)('By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',"woocommerce-admin")}));var i=new URL(window.location.href).searchParams.get("post");return t.state={showShippingBanner:!0,isDismissModalOpen:!1,setupErrorReason:F,orderId:parseInt(i,10),wcsAssetsLoaded:!1,wcsAssetsLoading:!1,wcsSetupError:!1,isShippingLabelButtonBusy:!1,installText:t.getInstallText(),isWcsModalOpen:!1},t}return h()(r,[{key:"componentDidMount",value:function(){this.state.showShippingBanner&&this.trackImpression()}},{key:"installAndActivatePlugins",value:(t=l()(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.installPlugins,o=n.activatePlugins,!n.isRequesting){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,r([t]);case 5:if(!0===e.sent.success){e.next=9;break}return this.setState({setupErrorReason:W,wcsSetupError:!0}),e.abrupt("return");case 9:return e.next=11,o([t]);case 11:if(!0===e.sent.success){e.next=15;break}return this.setState({setupErrorReason:G,wcsSetupError:!0}),e.abrupt("return");case 15:this.acceptTosAndGetWCSAssets();case 16:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"acceptTosAndGetWCSAssets",value:function(){var e=this;return J()({path:"/wc/v1/connect/tos",method:"POST",data:{accepted:!0}}).then((function(){return J()({path:"/wc/v1/connect/assets",method:"GET"})})).then((function(t){return e.loadWcsAssets(t)})).catch((function(){return e.setState({wcsSetupError:!0})}))}},{key:"generateMetaBoxHtml",value:function(e,t,n){var r=JSON.stringify(n).replace(/"/g,"&quot;"),o=Object(j.__)("Toggle panel:","woocommerce-admin");return'\n<div id="'.concat(e,'" class="postbox">\n\t<div class="postbox-header">\n\t\t<h2 class="hndle"><span>').concat(t,'</span></h2>\n\t\t<div class="handle-actions">\n\t\t\t<button type="button" class="handlediv" aria-expanded="true">\n\t\t\t\t<span class="screen-reader-text">').concat(o," ").concat(t,'</span>\n\t\t\t\t<span class="toggle-indicator" aria-hidden="true"></span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class="inside">\n\t\t<div class="wcc-root woocommerce wc-connect-create-shipping-label" data-args="').concat(r,'">\n\t\t</div>\n\t</div>\n</div>\n')}},{key:"loadWcsAssets",value:function(e){var t=this,n=e.assets;if(this.state.wcsAssetsLoaded||this.state.wcsAssetsLoading)this.openWcsModal();else{this.setState({wcsAssetsLoading:!0});var r=n.wc_connect_admin_script,o=n.wc_connect_admin_style;if(void 0===window.wcsPluginData){var i=r.substring(0,r.lastIndexOf("/")+1);window.wcsPluginData={assetPath:i}}var c=this.state.orderId,a=this.props.itemsCount,s=this.generateMetaBoxHtml("woocommerce-order-label",Object(j.__)("Shipping Label","woocommerce-admin"),{order:{id:c},context:"shipping_label",items:a});document.getElementById("woocommerce-order-data").insertAdjacentHTML("beforebegin",s);var u=this.generateMetaBoxHtml("woocommerce-order-shipment-tracking",Object(j.__)("Shipment Tracking","woocommerce-admin"),{order:{id:c},context:"shipment_tracking",items:a});document.getElementById("woocommerce-order-actions").insertAdjacentHTML("afterend",u),window.jQuery&&(window.jQuery("#normal-sortables").sortable("refresh"),window.jQuery("#side-sortables").sortable("refresh"),window.jQuery("#woocommerce-order-label").hide()),Promise.all([new Promise((function(e,t){var n=document.createElement("script");n.src=r,n.async=!0,n.onload=e,n.onerror=t,document.body.appendChild(n)})),new Promise((function(e,t){if(""!==o){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.href=o,r.media="all",r.onload=e,r.onerror=t,n.appendChild(r)}else e()}))]).then((function(){t.setState({wcsAssetsLoaded:!0,wcsAssetsLoading:!1,isShippingLabelButtonBusy:!1}),t.openWcsModal()}))}}},{key:"openWcsModal",value:function(){var e=this;window.wcsGetAppStoreAsync&&window.wcsGetAppStoreAsync("wc-connect-create-shipping-label").then((function(t){var n=t.getState(),r=e.state.orderId,o=n.ui.selectedSiteId,i=t.subscribe((function(){var n=t.getState(),c=Object(C.get)(n,["extensions","woocommerce","woocommerceServices",o,"shippingLabel",r],null),a=Object(C.get)(n,["extensions","woocommerce","woocommerceServices",o,"labelSettings"],null),s=Object(C.get)(n,["extensions","woocommerce","woocommerceServices",o,"packages"],null),u=Object(C.get)(n,["extensions","woocommerce","sites",o,"data","locations"]);c&&a&&a.meta&&s&&u&&(c.loaded&&a.meta.isLoaded&&s.isLoaded&&Object(C.isArray)(u)&&!e.state.isWcsModalOpen?(window.jQuery&&(e.setState({isWcsModalOpen:!0}),window.jQuery(".shipping-label__new-label-button").click()),t.dispatch({type:"NOTICE_CREATE",notice:{duration:1e4,status:"is-success",text:Object(j.__)("Plugin installed and activated","woocommerce-admin")}})):c.showPurchaseDialog&&(i(),window.jQuery&&window.jQuery("#woocommerce-order-label").show()))}));document.getElementById("woocommerce-admin-print-label").style.display="none"}))}},{key:"render",value:function(){var e=this.state,t=e.isDismissModalOpen,n=e.showShippingBanner,r=e.isShippingLabelButtonBusy;return n?Object(i.createElement)("div",null,Object(i.createElement)("div",{className:"wc-admin-shipping-banner-container"},Object(i.createElement)("img",{className:"wc-admin-shipping-banner-illustration",src:z+"shippingillustration.svg",alt:Object(j.__)("Shipping ","woocommerce-admin")}),Object(i.createElement)("div",{className:"wc-admin-shipping-banner-blob"},Object(i.createElement)("h3",null,Object(j.__)("Print discounted shipping labels with a click.","woocommerce-admin")),Object(i.createElement)("p",null,x()({mixedString:this.state.installText,components:{tosLink:Object(i.createElement)(E.ExternalLink,{href:"https://wordpress.com/tos",target:"_blank",type:"external"}),wcsLink:Object(i.createElement)(E.ExternalLink,{href:"https://woocommerce.com/products/shipping/",target:"_blank",type:"external",onClick:this.woocommerceServiceLinkClicked})}})),Object(i.createElement)(Q,{isSetupError:this.isSetupError(),errorReason:this.state.setupErrorReason})),Object(i.createElement)(E.Button,{disabled:r,isPrimary:!0,isBusy:r,onClick:this.createShippingLabelClicked},Object(j.__)("Create shipping label","woocommerce-admin")),Object(i.createElement)("button",{onClick:this.openDismissModal,type:"button",className:"notice-dismiss",disabled:this.state.isShippingLabelButtonBusy},Object(i.createElement)("span",{className:"screen-reader-text"},Object(j.__)("Close Print Label Banner.","woocommerce-admin")))),Object(i.createElement)(I,{visible:t,onClose:this.closeDismissModal,onCloseAll:this.hideBanner,trackElementClicked:this.trackElementClicked})):null}}]),r}(i.Component);X.propTypes={itemsCount:L.a.number.isRequired,isJetpackConnected:L.a.bool.isRequired,activePlugins:L.a.array.isRequired,activatePlugins:L.a.func.isRequired,installPlugins:L.a.func.isRequired,isRequesting:L.a.bool.isRequired};var Z=Object(S.compose)(Object(R.withSelect)((function(e){var t=e(c.PLUGINS_STORE_NAME),n=t.isPluginsRequesting,r=t.isJetpackConnected,o=t.getActivePlugins;return{isRequesting:n("activatePlugins")||n("installPlugins"),isJetpackConnected:r(),activePlugins:o()}})),Object(R.withDispatch)((function(e){var t=e(c.PLUGINS_STORE_NAME);return{activatePlugins:t.activatePlugins,installPlugins:t.installPlugins}})))(X);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=document.getElementById("wc-admin-shipping-banner-root"),re=ne.dataset.args&&JSON.parse(ne.dataset.args)||{},oe=Object(c.withPluginsHydration)(te(te({},window.wcSettings.plugins),{},{jetpackStatus:window.wcSettings.dataEndpoints.jetpackStatus}))(Z);Object(i.render)(Object(i.createElement)(oe,{itemsCount:re.items}),ne)},5:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},67:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new j(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=w(c,n);if(a){if(a===l)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,c),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function p(){}function f(){}function d(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(E([])));y&&y!==t&&n.call(y,o)&&(h=y);var v=d.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(o,i){function c(){return new t((function(r,c){!function r(o,i,c,a){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,c,a)}),(function(e){r("throw",e,c,a)})):t.resolve(p).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,a)}))}a(s.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v.constructor=d,d.constructor=f,f.displayName=a(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new g(s(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(v),a(v,c,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},75:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},76:function(e,t,n){"use strict";var r=n(77);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},77:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},82:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},9:function(e,t,n){e.exports=n(67)}});