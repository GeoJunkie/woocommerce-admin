(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[36],{689:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(8),n=r(28),o=r(19),c=r(0),i=r(2),s=r(175),l=r(253);function d(e){var t=e.help,r=e.label,u=e.multiple,m=void 0!==u&&u,b=e.onChange,f=e.options,p=void 0===f?[]:f,h=e.className,g=e.hideLabelFromVision,y=Object(o.a)(e,["help","label","multiple","onChange","options","className","hideLabelFromVision"]),_=Object(s.a)(d),O="inspector-select-control-".concat(_);return!Object(i.isEmpty)(p)&&Object(c.createElement)(l.a,{label:r,hideLabelFromVision:g,id:O,help:t,className:h},Object(c.createElement)("select",Object(a.a)({id:O,className:"components-select-control__input",onChange:function(e){if(m){var t=Object(n.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}));b(t)}else b(e.target.value)},"aria-describedby":t?"".concat(O,"__help"):void 0,multiple:m},y),p.map((function(e,t){return Object(c.createElement)("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,disabled:e.disabled},e.label)}))))}},719:function(e,t,r){"use strict";var a=r(14),n=r.n(a),o=r(13),c=r.n(o),i=r(16),s=r.n(i),l=r(17),d=r.n(l),u=r(6),m=r.n(u),b=r(0),f=r(3),p=r(1),h=r.n(p),g=r(68),y=r(33);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var O=function(e){s()(r,e);var t=_(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e,t,r,a,n=this.props,o=n.className,c=n.isError,i=n.isEmpty;return c?(e=Object(f.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),t=Object(f.__)("Reload","woocommerce-admin"),a=function(){window.location.reload()}):i&&(e=Object(f.__)("No results could be found for this date range.","woocommerce-admin"),t=Object(f.__)("View Orders","woocommerce-admin"),r=Object(y.f)("edit.php?post_type=shop_order")),Object(b.createElement)(g.EmptyContent,{className:o,title:e,actionLabel:t,actionURL:r,actionCallback:a})}}]),r}(b.Component);O.propTypes={className:h.a.string,isError:h.a.bool,isEmpty:h.a.bool},O.defaultProps={className:""},t.a=O},726:function(e,t,r){"use strict";var a=r(736),n=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(a.sanitize)(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})}}},889:function(e,t,r){},890:function(e,t,r){},915:function(e,t,r){"use strict";r.r(t);var a=r(38),n=r.n(a),o=r(60),c=r.n(o),i=r(0),s=r(3),l=r(270),d=r(1),u=r.n(d),m=r(689),b=r(24),f=r(68),p=r(41),h=r(33),g=r(61),y=r(14),_=r.n(y),O=r(13),v=r.n(O),w=r(16),j=r.n(w),E=r(17),R=r.n(E),T=r(6),k=r.n(T),L=r(32),N=r(719),q=r(726);r(889);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=k()(e);if(t){var n=k()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return R()(this,r)}}var S=function(e){j()(r,e);var t=C(r);function r(){return _()(this,r),t.apply(this,arguments)}return v()(r,[{key:"getFormattedHeaders",value:function(){return this.props.headers.map((function(e,t){return{isLeftAligned:0===t,hiddenByDefault:!1,isSortable:!1,key:e.label,label:e.label}}))}},{key:"getFormattedRows",value:function(){return this.props.rows.map((function(e){return e.map((function(e){return{display:Object(i.createElement)("div",{dangerouslySetInnerHTML:Object(q.a)(e.display)}),value:e.value}}))}))}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.isError,a=e.totalRows,n=e.title,o="woocommerce-leaderboard";if(r)return Object(i.createElement)(N.a,{className:o,isError:!0});var c=this.getFormattedRows();return t||0!==c.length?Object(i.createElement)(f.TableCard,{className:o,headers:this.getFormattedHeaders(),isLoading:t,rows:c,rowsPerPage:a,showMenu:!1,title:n,totalRows:a}):Object(i.createElement)(f.Card,{title:n,className:o},Object(i.createElement)(f.EmptyTable,null,Object(s.__)("No data recorded for the selected time period.","woocommerce-admin")))}}]),r}(i.Component);S.propTypes={headers:u.a.arrayOf(u.a.shape({label:u.a.string})),id:u.a.string.isRequired,query:u.a.object,rows:u.a.arrayOf(u.a.arrayOf(u.a.shape({display:u.a.node,value:u.a.oneOfType([u.a.string,u.a.number,u.a.bool])}))).isRequired,title:u.a.string.isRequired,totalRows:u.a.number.isRequired},S.defaultProps={rows:[],isError:!1,isRequesting:!1};var I=Object(l.a)(Object(b.withSelect)((function(e,t){var r=t.id,a=t.query,n=t.totalRows,o=t.filters,c=e(p.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,i=Object(p.getFilterQuery)({filters:o,query:a}),s={id:r,per_page:n,persisted_query:Object(L.getPersistedQuery)(a),query:a,select:e,defaultDateRange:c,filterQuery:i};return Object(p.getLeaderboard)(s)})))(S),P=(r(890),function(e){var t=e.allLeaderboards,r=e.controls,a=e.isFirst,o=e.isLast,l=e.hiddenBlocks,d=e.onMove,u=e.onRemove,b=e.onTitleBlur,h=e.onTitleChange,y=e.onToggleHiddenBlock,_=e.query,O=e.title,v=e.titleInput,w=e.filters,j=Object(p.useUserPreferences)(),E=j.updateUserPreferences,R=c()(j,["updateUserPreferences"]),T=Object(i.useState)(parseInt(R.dashboard_leaderboard_rows||5,10)),k=n()(T,2),L=k[0],N=k[1],q=function(e){N(parseInt(e,10));var t={dashboard_leaderboard_rows:parseInt(e,10)};E(t)};return Object(i.createElement)(i.Fragment,null,Object(i.createElement)("div",{className:"woocommerce-dashboard__dashboard-leaderboards"},Object(i.createElement)(f.SectionHeader,{title:O||Object(s.__)("Leaderboards","woocommerce-admin"),menu:Object(i.createElement)(f.EllipsisMenu,{label:Object(s.__)("Choose which leaderboards to display and other settings","woocommerce-admin"),renderContent:function(e){var n=e.onToggle;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(f.MenuTitle,null,Object(s.__)("Leaderboards","woocommerce-admin")),function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.onToggleHiddenBlock;return t.map((function(e){var t=!r.includes(e.id);return Object(i.createElement)(f.MenuItem,{checked:t,isCheckbox:!0,isClickable:!0,key:e.id,onInvoke:function(){a(e.id)(),Object(g.recordEvent)("dash_leaderboards_toggle",{status:t?"off":"on",key:e.id})}},e.label)}))}({allLeaderboards:t,hiddenBlocks:l,onToggleHiddenBlock:y}),Object(i.createElement)(m.a,{className:"woocommerce-dashboard__dashboard-leaderboards__select",label:Object(s.__)("Rows Per Table","woocommerce-admin"),value:L,options:Array.from({length:20},(function(e,t){return{v:t+1,label:t+1}})),onChange:q}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(i.createElement)(r,{onToggle:n,onMove:d,onRemove:u,isFirst:a,isLast:o,onTitleBlur:b,onTitleChange:h,titleInput:v}))}})}),Object(i.createElement)("div",{className:"woocommerce-dashboard__columns"},function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.query,n=e.rowsPerTable,o=e.filters;return t.map((function(e){if(!r.includes(e.id))return Object(i.createElement)(I,{headers:e.headers,id:e.id,key:e.id,query:a,title:e.label,totalRows:n,filters:o})}))}({allLeaderboards:t,hiddenBlocks:l,query:_,rowsPerTable:L,filters:w}))))});P.propTypes={query:u.a.object.isRequired};t.default=Object(l.a)(Object(b.withSelect)((function(e){var t=e(p.ITEMS_STORE_NAME),r=t.getItems,a=t.getItemsError;return{allLeaderboards:Object(h.g)("dataEndpoints",{leaderboards:[]}).leaderboards,getItems:r,getItemsError:a}})))(P)}}]);