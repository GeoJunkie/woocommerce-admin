(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[19],{584:function(e,t,r){"use strict";r.r(t);r(38),r(53),r(41),r(60),r(49),r(61);var o=r(7),a=r.n(o),c=r(0),i=(r(186),r(88),r(192),r(2)),n=r(1),l=r.n(n),s=r(26),m=r(141),d=r(599),u=Object(m.applyFilters)("woocommerce_admin_variations_report_charts",[{key:"items_sold",label:Object(i.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(i.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(i.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),b=Object(m.applyFilters)("woocommerce_admin_variations_report_filters",[{label:Object(i.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter-variations",showFilters:function(){return!0},filters:[{label:Object(i.__)("All Variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(i.__)("Single Variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:d.g,labels:{placeholder:Object(i.__)("Type to search for a variation","woocommerce-admin"),button:Object(i.__)("Single Variation","woocommerce-admin")}}}]},{label:Object(i.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:d.g,labels:{helpText:Object(i.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(i.__)("Search for variations to compare","woocommerce-admin"),title:Object(i.__)("Compare Variations","woocommerce-admin"),update:Object(i.__)("Compare","woocommerce-admin")}}},{label:Object(i.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),_=Object(m.applyFilters)("woocommerce_admin_variations_report_advanced_filters",{title:Object(i._x)("Variations Match {{select /}} Filters","A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{attribute:{allowMultiple:!0,labels:{add:Object(i.__)("Attribute","woocommerce-admin"),placeholder:Object(i.__)("Search attributes","woocommerce-admin"),remove:Object(i.__)("Remove attribute filter","woocommerce-admin"),rule:Object(i.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(i._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(i._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}},category:{labels:{add:Object(i.__)("Categories","woocommerce-admin"),placeholder:Object(i.__)("Search categories","woocommerce-admin"),remove:Object(i.__)("Remove categories filter","woocommerce-admin"),rule:Object(i.__)("Select a category filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Category{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select categories","woocommerce-admin")},rules:[{value:"includes",label:Object(i._x)("Includes","categories","woocommerce-admin")},{value:"excludes",label:Object(i._x)("Excludes","categories","woocommerce-admin")}],input:{component:"Search",type:"categories",getLabels:d.a}},product:{labels:{add:Object(i.__)("Products","woocommerce-admin"),placeholder:Object(i.__)("Search products","woocommerce-admin"),remove:Object(i.__)("Remove products filter","woocommerce-admin"),rule:Object(i.__)("Select a product filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(i._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(i._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"variableProducts",getLabels:d.d}}}}),p=r(602),v=r(601),O=r(598),y=r(603),f=r(625),j=r(604),w=r(210);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var g=function(e){var t=function(e){var t=e.query,r="compare-variations"===t["filter-variations"]&&t.variations&&t.variations.split(",").length>1;return{compareObject:"variations",itemsLabel:Object(i.__)("%d variations","woocommerce-admin"),mode:r?"item-comparison":"time-comparison"}}(e),r=t.itemsLabel,o=t.mode,n=e.path,l=e.query,s=e.isError,m=e.isRequesting,d=e.addCesSurveyForAnalytics;if(s)return Object(c.createElement)(O.a,{isError:!0});var w=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l);return"item-comparison"===o&&(w.segmentby="variation"),b[0].filters.find((function(e){return"compare-variations"===e.value})).settings.onClick=d,Object(c.createElement)(c.Fragment,null,Object(c.createElement)(j.a,{query:l,path:n,filters:b,advancedFilters:_,report:"variations"}),Object(c.createElement)(y.a,{mode:o,charts:u,endpoint:"variations",isRequesting:m,query:w,selectedChart:Object(p.a)(l.chart,u),filters:b,advancedFilters:_}),Object(c.createElement)(v.a,{charts:u,mode:o,filters:b,advancedFilters:_,endpoint:"variations",isRequesting:m,itemsLabel:r,path:n,query:w,selectedChart:Object(p.a)(w.chart,u)}),Object(c.createElement)(f.a,{isRequesting:m,query:l,filters:b,advancedFilters:_}))};g.propTypes={path:l.a.string.isRequired,query:l.a.object.isRequired};t.default=Object(s.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(w.c).addCesSurveyForAnalytics}}))(g)},625:function(e,t,r){"use strict";r(64);var o=r(22),a=r.n(o),c=r(23),i=r.n(c),n=r(18),l=r.n(n),s=r(24),m=r.n(s),d=r(25),u=r.n(d),b=r(14),_=r.n(b),p=r(0),v=(r(41),r(2)),O=r(5),y=r(145),f=r(50),j=r(281),w=r(85),h=r(605),g=r(613),S=r(597),k=r(599);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=_()(e);if(t){var a=_()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return u()(this,r)}}var q=Object(w.g)("manageStock","no"),x=Object(w.g)("stockStatuses",{}),R=function(e){return Object(k.h)(e.extended_info||{})},F=function(e){m()(r,e);var t=C(r);function r(){var e;return a()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(l()(e)),e.getRowsContent=e.getRowsContent.bind(l()(e)),e.getSummary=e.getSummary.bind(l()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(v.__)("Product / Variation Title","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0},{label:Object(v.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(v.__)("Items Sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(v.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(v.__)("Net Sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(v.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===q?{label:Object(v.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===q?{label:Object(v.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.props.query,r=Object(f.getPersistedQuery)(t),o=this.context,a=o.formatAmount,c=o.formatDecimal,i=o.getCurrencyConfig;return Object(O.map)(e,(function(e){var t=e.items_sold,o=e.net_revenue,n=e.orders_count,l=e.product_id,s=e.variation_id,m=e.extended_info||{},d=m.stock_status,u=m.stock_quantity,b=m.low_stock_amount,_=m.sku,O=R(e),h=Object(f.getNewPath)(r,"/analytics/orders",{filter:"advanced",variation_includes:s}),S=Object(w.f)("post.php?post=".concat(l,"&action=edit"));return[{display:Object(p.createElement)(y.Link,{href:S,type:"wp-admin"},O),value:O},{display:_,value:_},{display:Object(j.formatValue)(i(),"number",t),value:t},{display:a(o),value:c(o)},{display:Object(p.createElement)(y.Link,{href:h,type:"wc-admin"},n),value:n},"yes"===q?{display:Object(g.a)(d,u,b)?Object(p.createElement)(y.Link,{href:S,type:"wp-admin"},Object(v._x)("Low","Indication of a low quantity","woocommerce-admin")):x[d],value:x[d]}:null,"yes"===q?{display:u,value:u}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.variations_count,r=void 0===t?0:t,o=e.items_sold,a=void 0===o?0:o,c=e.net_revenue,i=void 0===c?0:c,n=e.orders_count,l=void 0===n?0:n,s=this.context,m=s.formatAmount,d=(0,s.getCurrencyConfig)();return[{label:Object(v._n)("variation sold","variations sold",r,"woocommerce-admin"),value:Object(j.formatValue)(d,"number",r)},{label:Object(v._n)("item sold","items sold",a,"woocommerce-admin"),value:Object(j.formatValue)(d,"number",a)},{label:Object(v.__)("net sales","woocommerce-admin"),value:m(i)},{label:Object(v._n)("orders","orders",l,"woocommerce-admin"),value:Object(j.formatValue)(d,"number",l)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,o=e.filters,a=e.isRequesting,c=e.query,i={helpText:Object(v.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(v.__)("Search by variation name or SKU","woocommerce-admin")};return Object(p.createElement)(h.a,{baseSearchQuery:r,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:a,itemIdField:"variation_id",labels:i,query:c,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:c.orderby||"items_sold",order:c.order||"desc",extended_info:!0,products:c.products,variations:c.variations},title:Object(v.__)("Variations","woocommerce-admin"),columnPrefsKey:"variations_report_columns",filters:o,advancedFilters:t})}}]),r}(p.Component);F.contextType=S.a,t.a=F}}]);