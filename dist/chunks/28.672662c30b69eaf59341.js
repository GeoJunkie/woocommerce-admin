(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[28],{172:function(e,t,n){"use strict";var r=n(9),o=n(19),c=n(4),a=n.n(c),i=n(0);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.as,n=void 0===t?"div":t,c=e.className,s=Object(o.a)(e,["as","className"]);return function(e){var t=e.as,n=void 0===t?"div":t,r=Object(o.a)(e,["as"]);return"function"==typeof r.children?r.children(r):Object(i.createElement)(n,r)}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({as:n,className:a()("components-visually-hidden",c)},s))}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=new WeakMap;function c(e,t){return Object(r.useMemo)((function(){var n=function(e){var t=o.get(e)||0;return o.set(e,t+1),t}(e);return t?"".concat(t,"-").concat(n):n}),[e])}},253:function(e,t,n){"use strict";var r=n(0),o=n(4),c=n.n(o),a=n(172);function i(e){var t=e.id,n=e.label,o=e.hideLabelFromVision,l=e.help,s=e.className,u=e.children;return Object(r.createElement)("div",{className:c()("components-base-control",s)},Object(r.createElement)("div",{className:"components-base-control__field"},n&&t&&(o?Object(r.createElement)(a.a,{as:"label",htmlFor:t},n):Object(r.createElement)("label",{className:"components-base-control__label",htmlFor:t},n)),n&&!t&&(o?Object(r.createElement)(a.a,{as:"label"},n):Object(r.createElement)(i.VisualLabel,null,n)),u),!!l&&Object(r.createElement)("p",{id:t+"__help",className:"components-base-control__help"},l))}i.VisualLabel=function(e){var t=e.className,n=e.children;return t=c()("components-base-control__label",t),Object(r.createElement)("span",{className:t},n)},t.a=i},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(8),o=n(27),c=n(0),a=n(4),i=n.n(a),l=n(96);function s(e){var t,n,a,s,u,d,b=e.renderContent,p=e.renderToggle,f=e.position,m=void 0===f?"bottom right":f,O=e.className,v=e.contentClassName,h=e.expandOnMobile,j=e.headerTitle,y=e.focusOnMount,_=e.popoverProps,g=e.onClose,k=e.onToggle,w=Object(c.useRef)(),E=(t=!1,n=k,a=Object(c.useState)(t),s=Object(o.a)(a,2),u=s[0],d=s[1],[u,function(e){d(e),n&&n(e)}]),D=Object(o.a)(E,2),S=D[0],P=D[1];function C(){g&&g(),P(!1)}Object(c.useEffect)((function(){return function(){k&&k(!1)}}),[]);var T={isOpen:S,onToggle:function(){P(!S)},onClose:C};return Object(c.createElement)("div",{className:i()("components-dropdown",O),ref:w},p(T),S&&Object(c.createElement)(l.a,Object(r.a)({position:m,onClose:C,onFocusOutside:function(){w.current.contains(document.activeElement)||document.activeElement.closest('[role="dialog"]')||C()},expandOnMobile:h,headerTitle:j,focusOnMount:y},_,{anchorRef:w.current,className:i()("components-dropdown__content",_?_.className:void 0,v)}),b(T)))}},692:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),o=n(19),c=n(0),a=n(175),i=n(253);function l(e){var t=e.label,n=e.hideLabelFromVision,s=e.value,u=e.help,d=e.className,b=e.onChange,p=e.type,f=void 0===p?"text":p,m=Object(o.a)(e,["label","hideLabelFromVision","value","help","className","onChange","type"]),O=Object(a.a)(l),v="inspector-text-control-".concat(O);return Object(c.createElement)(i.a,{label:t,hideLabelFromVision:n,id:v,help:u,className:d},Object(c.createElement)("input",Object(r.a)({className:"components-text-control__input",type:f,id:v,value:s,onChange:function(e){return b(e.target.value)},"aria-describedby":u?v+"__help":void 0},m)))}},718:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(0),o=n(49),c=n(188),a=n.n(c),i=n(33),l=a()(i.b),s=function(e){var t=l.getCurrencyConfig(),n=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return a()(n)},u=Object(r.createContext)(l)},725:function(e,t,n){"use strict";var r=n(5),o=n.n(r),c=n(14),a=n.n(c),i=n(13),l=n.n(i),s=n(10),u=n.n(s),d=n(16),b=n.n(d),p=n(17),f=n.n(p),m=n(6),O=n.n(m),v=n(0),h=n(1),j=n.n(h),y=n(2),_=n(24),g=n(68),k=n(33),w=n(41),E=n(35),D=n(61),S=n(718);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var F=function(e){b()(n,e);var t=T(n);function n(){var e;return a()(this,n),(e=t.call(this)).trackDateSelect=e.trackDateSelect.bind(u()(e)),e.trackFilterSelect=e.trackFilterSelect.bind(u()(e)),e.trackAdvancedFilterAction=e.trackAdvancedFilterAction.bind(u()(e)),e}return l()(n,[{key:"trackDateSelect",value:function(e){var t=this.props.report;Object(D.recordEvent)("datepicker_update",C({report:t},Object(y.omitBy)(e,y.isUndefined)))}},{key:"trackFilterSelect",value:function(e){var t=this.props.report;Object(D.recordEvent)("analytics_filter",{report:t,filter:e.filter||"all"})}},{key:"trackAdvancedFilterAction",value:function(e,t){var n=this.props.report;switch(e){case"add":Object(D.recordEvent)("analytics_filters_add",{report:n,filter:t.key});break;case"remove":Object(D.recordEvent)("analytics_filters_remove",{report:n,filter:t.key});break;case"filter":var r=Object.keys(t).reduce((function(e,n){return e[Object(y.snakeCase)(n)]=t[n],e}),{});Object(D.recordEvent)("analytics_filters_filter",C({report:n},r));break;case"clear_all":Object(D.recordEvent)("analytics_filters_clear_all",{report:n});break;case"match":Object(D.recordEvent)("analytics_filters_all_any",{report:n,value:t.match})}}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,n=e.filters,r=e.path,o=e.query,c=e.showDatePicker,a=e.defaultDateRange,i=Object(E.getDateParamsFromQuery)(o,a),l=i.period,s=i.compare,u=i.before,d=i.after,b=Object(E.getCurrentDates)(o,a),p={period:l,compare:s,before:u,after:d,primaryDate:b.primary,secondaryDate:b.secondary},f=this.context;return Object(v.createElement)(g.ReportFilters,{query:o,siteLocale:k.c.siteLocale,currency:f.getCurrencyConfig(),path:r,filters:n,advancedFilters:t,showDatePicker:c,onDateSelect:this.trackDateSelect,onFilterSelect:this.trackFilterSelect,onAdvancedFilterAction:this.trackAdvancedFilterAction,dateQuery:p,isoDateFormat:E.isoDateFormat})}}]),n}(v.Component);F.contextType=S.a,t.a=Object(_.withSelect)((function(e){return{defaultDateRange:e(w.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}}))(F),F.propTypes={advancedFilters:j.a.object,filters:j.a.array,path:j.a.string.isRequired,query:j.a.object,showDatePicker:j.a.bool,report:j.a.string.isRequired}},892:function(e,t,n){"use strict";n.r(t);var r=n(60),o=n.n(r),c=n(5),a=n.n(c),i=n(30),l=n.n(i),s=n(0),u=n(3),d=n(270),b=n(2),p=n(690),f=n(72),m=n(115),O=n(49),v=n(418),h=n(44),j=Object(s.createElement)(h.c,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(h.b,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),y=n(24),_=n(68),g=n(41),k=n(32),w=n(35),E=n(61),D=(n(737),Object(s.lazy)((function(){return Promise.all([n.e(3),n.e(2),n.e(30)]).then(n.bind(null,911))}))),S=Object(s.lazy)((function(){return Promise.all([n.e(5),n.e(36)]).then(n.bind(null,915))})),P=Object(s.lazy)((function(){return n.e(48).then(n.bind(null,904))})),C=Object(O.applyFilters)("woocommerce_dashboard_default_sections",[{key:"store-performance",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(P,e))},title:Object(u.__)("Performance","woocommerce-admin"),isVisible:!0,icon:"arrow-right-alt",hiddenBlocks:["coupons/amount","coupons/orders_count","downloads/download_count","taxes/order_tax","taxes/total_tax","taxes/shipping_tax","revenue/shipping","orders/avg_order_value","revenue/refunds","revenue/gross_sales"]},{key:"charts",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(D,e))},title:Object(u.__)("Charts","woocommerce-admin"),isVisible:!0,icon:"chart-bar",hiddenBlocks:["orders_avg_order_value","avg_items_per_order","products_items_sold","revenue_total_sales","revenue_refunds","coupons_amount","coupons_orders_count","revenue_shipping","taxes_total_tax","taxes_order_tax","taxes_shipping_tax","downloads_download_count"]},{key:"leaderboards",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(S,e))},title:Object(u.__)("Leaderboards","woocommerce-admin"),isVisible:!0,icon:"editor-ol",hiddenBlocks:["coupons","customers"]}]),T=n(37),F=n.n(T),N=n(14),R=n.n(N),x=n(13),M=n.n(x),B=n(10),V=n.n(B),A=n(16),I=n.n(A),H=n(17),L=n.n(H),U=n(6),q=n.n(U),Q=n(692);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var o=q()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L()(this,n)}}var G=function(e){I()(n,e);var t=z(n);function n(e){var r;return R()(this,n),(r=t.call(this,e)).onMoveUp=r.onMoveUp.bind(V()(r)),r.onMoveDown=r.onMoveDown.bind(V()(r)),r}return M()(n,[{key:"onMoveUp",value:function(){var e=this.props,t=e.onMove,n=e.onToggle;t(-1),n()}},{key:"onMoveDown",value:function(){var e=this.props,t=e.onMove,n=e.onToggle;t(1),n()}},{key:"render",value:function(){var e=this.props,t=e.onRemove,n=e.isFirst,r=e.isLast,o=e.onTitleBlur,c=e.onTitleChange,a=e.titleInput;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"woocommerce-ellipsis-menu__item"},Object(s.createElement)(Q.a,{label:Object(u.__)("Section Title","woocommerce-admin"),onBlur:o,onChange:c,required:!0,value:a})),Object(s.createElement)("div",{className:"woocommerce-dashboard-section-controls"},!n&&Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:this.onMoveUp},Object(s.createElement)(m.a,{icon:"arrow-up-alt2",label:Object(u.__)("Move up")}),Object(u.__)("Move up","woocommerce-admin")),!r&&Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:this.onMoveDown},Object(s.createElement)(m.a,{icon:"arrow-down-alt2",label:Object(u.__)("Move Down")}),Object(u.__)("Move Down","woocommerce-admin")),Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:t},Object(s.createElement)(m.a,{icon:"trash",label:Object(u.__)("Remove block")}),Object(u.__)("Remove section","woocommerce-admin"))))}}]),n}(s.Component);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var o=q()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L()(this,n)}}var Z=function(e){I()(n,e);var t=J(n);function n(e){var r;R()(this,n),r=t.call(this,e);var o=e.title;return r.state={titleInput:o},r.onToggleHiddenBlock=r.onToggleHiddenBlock.bind(V()(r)),r.onTitleChange=r.onTitleChange.bind(V()(r)),r.onTitleBlur=r.onTitleBlur.bind(V()(r)),r}return M()(n,[{key:"onTitleChange",value:function(e){this.setState({titleInput:e})}},{key:"onTitleBlur",value:function(){var e=this.props,t=e.onTitleUpdate,n=e.title,r=this.state.titleInput;""===r?this.setState({titleInput:n}):t&&t(r)}},{key:"onToggleHiddenBlock",value:function(e){var t=this;return function(){var n=Object(b.xor)(t.props.hiddenBlocks,[e]);t.props.onChangeHiddenBlocks(n)}}},{key:"render",value:function(){var e=this.props,t=e.component,n=o()(e,["component"]),r=this.state.titleInput;return Object(s.createElement)("div",{className:"woocommerce-dashboard-section"},Object(s.createElement)(t,F()({onTitleChange:this.onTitleChange,onTitleBlur:this.onTitleBlur,onToggleHiddenBlock:this.onToggleHiddenBlock,titleInput:r,controls:G},n)))}}]),n}(s.Component),W=n(725),K=n(718);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=Object(O.applyFilters)("woocommerce_admin_dashboard_filters",[]);t.default=Object(d.a)(Object(y.withSelect)((function(e){return{defaultDateRange:e(g.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})))((function(e){var t,n,r,c,a,i,d,O,h,y=e.defaultDateRange,D=e.path,S=e.query,P=Object(g.useUserPreferences)(),T=P.updateUserPreferences,F=function(e){if(!e||0===e.length)return C;var t=C.map((function(e){return e.key})),n=e.map((function(e){return e.key})),r=new Set([].concat(l()(n),l()(t))),o=[];return r.forEach((function(t){var n=C.find((function(e){return e.key===t}));if(n){var r=e.find((function(e){return e.key===t}));o.push(Y(Y({},n),r))}})),o}(o()(P,["updateUserPreferences"]).dashboard_sections),N=function(e){T({dashboard_sections:e})},R=function(e,t){var n=F.map((function(n){return n.key===e?Y(Y({},n),t):n}));N(n)},x=function(e){return function(t){Object(E.recordEvent)("dash_section_rename",{key:e}),R(e,{title:t})}},M=function(e,t){return function(){t&&t();var n=F.findIndex((function(t){return e===t.key})),r=F.splice(n,1).shift();r.isVisible=!r.isVisible,F.push(r),r.isVisible?Object(E.recordEvent)("dash_section_add",{key:r.key}):Object(E.recordEvent)("dash_section_remove",{key:r.key}),N(F)}},B=function e(t,n){var r=F.splice(t,1).shift(),o=t+n;if(F[n<0?o:o-1].isVisible||0===t||t===F.length-1){F.splice(o,0,r),N(F);var c={key:r.key,direction:n>0?"down":"up"};Object(E.recordEvent)("dash_section_order_change",c)}else e(t,n+n)};return Object(s.createElement)(K.a.Provider,{value:Object(K.b)(Object(k.getQuery)())},(n=Object(w.getDateParamsFromQuery)(S,y),r=n.period,c=n.compare,a=n.before,i=n.after,d=Object(w.getCurrentDates)(S,y),O={period:r,compare:c,before:a,after:i,primaryDate:d.primary,secondaryDate:d.secondary},h=F.filter((function(e){return e.isVisible})).map((function(e){return e.key})),Object(s.createElement)(s.Fragment,null,Object(s.createElement)(W.a,{report:"dashboard",query:S,path:D,dateQuery:O,isoDateFormat:w.isoDateFormat,filters:$}),F.map((function(e,t){return e.isVisible?Object(s.createElement)(Z,{component:e.component,hiddenBlocks:e.hiddenBlocks,key:e.key,onChangeHiddenBlocks:(n=e.key,function(e){R(n,{hiddenBlocks:e})}),onTitleUpdate:x(e.key),path:D,query:S,title:e.title,onMove:Object(b.partial)(B,t),onRemove:M(e.key),isFirst:e.key===h[0],isLast:e.key===h[h.length-1],filters:$}):null;var n})),0===(t=F.filter((function(e){return!1===e.isVisible}))).length?null:Object(s.createElement)(p.a,{position:"top center",className:"woocommerce-dashboard-section__add-more",renderToggle:function(e){var t=e.onToggle,n=e.isOpen;return Object(s.createElement)(f.a,{onClick:t,title:Object(u.__)("Add more sections","woocommerce-admin"),"aria-expanded":n},Object(s.createElement)(v.a,{icon:j}))},renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(_.H,null,Object(u.__)("Dashboard Sections","woocommerce-admin")),Object(s.createElement)("div",{className:"woocommerce-dashboard-section__add-more-choices"},t.map((function(e){return Object(s.createElement)(f.a,{key:e.key,onClick:M(e.key,n),className:"woocommerce-dashboard-section__add-more-btn",title:Object(u.sprintf)(Object(u.__)("Add %s section","woocommerce-admin"),e.title)},Object(s.createElement)(m.a,{icon:e.icon,size:30}),Object(s.createElement)("span",{className:"woocommerce-dashboard-section__add-more-btn-title"},e.title))}))))}}))))}))}}]);