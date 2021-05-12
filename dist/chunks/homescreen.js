(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[34],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(240);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/**
 * External dependencies
 */




var appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "b"]);
var getFilteredCurrencyInstance = function getFilteredCurrencyInstance(query) {
  var config = appCurrency.getCurrencyConfig();
  var filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
var CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(111);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(659);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(283);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * External dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getAdminLink */ "f"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__["getNewPath"])(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

var getIndicatorValues = function getIndicatorValues(_ref) {
  var indicator = _ref.indicator,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      currency = _ref.currency,
      formatAmount = _ref.formatAmount,
      persistedQuery = _ref.persistedQuery;
  var primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(primaryData.data, function (data) {
    return data.stat === indicator.stat;
  });
  var secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(secondaryData.data, function (data) {
    return data.stat === indicator.stat;
  });

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  var href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  var reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  var reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  var isCurrency = primaryItem.format === 'currency';
  var delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  var primaryValue = isCurrency ? formatAmount(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  var secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue: primaryValue,
    secondaryValue: secondaryValue,
    delta: delta,
    reportUrl: reportUrl,
    reportUrlType: reportUrlType
  };
};
var getIndicatorData = function getIndicatorData(select, indicators, query, filters) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["REPORTS_STORE_NAME"]),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isResolving = _select.isResolving;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var filterQuery = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["getFilterQuery"])({
    filters: filters,
    query: query
  });

  var primaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_9___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var secondaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_9___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var primaryData = getReportItems('performance-indicators', primaryQuery);
  var primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  var primaryRequesting = isResolving('getReportItems', ['performance-indicators', primaryQuery]);
  var secondaryData = getReportItems('performance-indicators', secondaryQuery);
  var secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  var secondaryRequesting = isResolving('getReportItems', ['performance-indicators', secondaryQuery]);
  return {
    primaryData: primaryData,
    primaryError: primaryError,
    primaryRequesting: primaryRequesting,
    secondaryData: secondaryData,
    secondaryError: secondaryError,
    secondaryRequesting: secondaryRequesting,
    defaultDateRange: defaultDateRange
  };
};

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DEFAULT_ACTIONABLE_STATUSES; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ config; });

// UNUSED EXPORTS: DEFAULT_ORDER_STATUSES, DEFAULT_DATE_RANGE

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(51);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(122);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(111);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(57);

// CONCATENATED MODULE: ./client/analytics/settings/default-date.js




/**
 * External dependencies
 */





var default_date_DefaultDate = function DefaultDate(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _useSettings = Object(external_wc_data_["useSettings"])('wc_admin', ['wcAdminSettings']),
      wcAdminSettings = _useSettings.wcAdminSettings;

  var defaultDateRange = wcAdminSettings.woocommerce_default_date_range;

  var change = function change(query) {
    onChange({
      target: {
        name: 'woocommerce_default_date_range',
        value: Object(qs_lib["stringify"])(query)
      }
    });
  };

  var query = Object(qs_lib["parse"])(value.replace(/&amp;/g, '&'));

  var _getDateParamsFromQue = Object(external_wc_date_["getDateParamsFromQuery"])(query, defaultDateRange),
      period = _getDateParamsFromQue.period,
      compare = _getDateParamsFromQue.compare,
      before = _getDateParamsFromQue.before,
      after = _getDateParamsFromQue.after;

  var _getCurrentDates = Object(external_wc_date_["getCurrentDates"])(query, defaultDateRange),
      primaryDate = _getCurrentDates.primary,
      secondaryDate = _getCurrentDates.secondary;

  var dateQuery = {
    period: period,
    compare: compare,
    before: before,
    after: after,
    primaryDate: primaryDate,
    secondaryDate: secondaryDate
  };
  return Object(external_wp_element_["createElement"])(external_wc_components_["DateRangeFilterPicker"], {
    query: query,
    onRangeSelect: change,
    dateQuery: dateQuery,
    isoDateFormat: external_wc_date_["isoDateFormat"]
  });
};

/* harmony default export */ var default_date = (default_date_DefaultDate);
// CONCATENATED MODULE: ./client/analytics/settings/config.js






/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var SETTINGS_FILTER = 'woocommerce_admin_analytics_settings';
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var DEFAULT_ORDER_STATUSES = ['completed', 'processing', 'refunded', 'cancelled', 'failed', 'pending', 'on-hold'];
var DEFAULT_DATE_RANGE = 'period=month&compare=previous_year';
var filteredOrderStatuses = Object.keys(wc_admin_settings["d" /* ORDER_STATUSES */]).filter(function (status) {
  return status !== 'refunded';
}).map(function (key) {
  return {
    value: key,
    label: wc_admin_settings["d" /* ORDER_STATUSES */][key],
    description: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Exclude the %s status from reports', 'woocommerce-admin'), wc_admin_settings["d" /* ORDER_STATUSES */][key])
  };
});
var unregisteredOrderStatuses = Object(wc_admin_settings["g" /* getSetting */])('unregisteredOrderStatuses', {});
var orderStatusOptions = [{
  key: 'defaultStatuses',
  options: filteredOrderStatuses.filter(function (status) {
    return DEFAULT_ORDER_STATUSES.includes(status.value);
  })
}, {
  key: 'customStatuses',
  label: Object(external_wp_i18n_["__"])('Custom Statuses', 'woocommerce-admin'),
  options: filteredOrderStatuses.filter(function (status) {
    return !DEFAULT_ORDER_STATUSES.includes(status.value);
  })
}, {
  key: 'unregisteredStatuses',
  label: Object(external_wp_i18n_["__"])('Unregistered Statuses', 'woocommerce-admin'),
  options: Object.keys(unregisteredOrderStatuses).map(function (key) {
    return {
      value: key,
      label: key,
      description: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Exclude the %s status from reports', 'woocommerce-admin'), key)
    };
  })
}];
var config = Object(external_wp_hooks_["applyFilters"])(SETTINGS_FILTER, {
  woocommerce_excluded_report_order_statuses: {
    label: Object(external_wp_i18n_["__"])('Excluded Statuses:', 'woocommerce-admin'),
    inputType: 'checkboxGroup',
    options: orderStatusOptions,
    helpText: lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Orders with these statuses are excluded from the totals in your reports. ' + 'The {{strong}}Refunded{{/strong}} status can not be excluded.', 'woocommerce-admin'),
      components: {
        strong: Object(external_wp_element_["createElement"])("strong", null)
      }
    }),
    defaultValue: ['pending', 'cancelled', 'failed']
  },
  woocommerce_actionable_order_statuses: {
    label: Object(external_wp_i18n_["__"])('Actionable Statuses:', 'woocommerce-admin'),
    inputType: 'checkboxGroup',
    options: orderStatusOptions,
    helpText: Object(external_wp_i18n_["__"])('Orders with these statuses require action on behalf of the store admin. ' + 'These orders will show up in the Home Screen - Orders task.', 'woocommerce-admin'),
    defaultValue: DEFAULT_ACTIONABLE_STATUSES
  },
  woocommerce_default_date_range: {
    name: 'woocommerce_default_date_range',
    label: Object(external_wp_i18n_["__"])('Default Date Range:', 'woocommerce-admin'),
    inputType: 'component',
    component: default_date,
    helpText: Object(external_wp_i18n_["__"])('Select a default date range. When no range is selected, reports will be viewed by ' + 'the default date range.', 'woocommerce-admin'),
    defaultValue: DEFAULT_DATE_RANGE
  }
});

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getLinkTypeAndHref; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ store_management_links_StoreManagementLinks; });

// UNUSED EXPORTS: getItemsByCategory, generateExtensionLinks

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(293);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__(438);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(101);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/megaphone.js
var megaphone = __webpack_require__(745);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js
var box = __webpack_require__(746);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/brush.js
var brush = __webpack_require__(747);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/home.js
var home = __webpack_require__(748);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js
var pencil = __webpack_require__(749);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/payment.js
var payment = __webpack_require__(750);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/percent.js
var percent = __webpack_require__(751);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/shipping.js
var shipping = __webpack_require__(752);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(44);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(58);

// EXTERNAL MODULE: ./client/store-management-links/style.scss
var style = __webpack_require__(701);

// EXTERNAL MODULE: ./client/store-management-links/quick-link-category/style.scss
var quick_link_category_style = __webpack_require__(702);

// CONCATENATED MODULE: ./client/store-management-links/quick-link-category/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var quick_link_category_QuickLinkCategory = function QuickLinkCategory(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__category"
  }, Object(external_wp_element_["createElement"])("h3", {
    className: "woocommerce-quick-links__category-header"
  }, title), children);
};
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(461);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__(634);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(111);

// EXTERNAL MODULE: ./client/store-management-links/quick-link/style.scss
var quick_link_style = __webpack_require__(703);

// CONCATENATED MODULE: ./client/store-management-links/quick-link/index.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var quick_link_QuickLink = function QuickLink(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      href = _ref.href,
      linkType = _ref.linkType,
      onClick = _ref.onClick;
  var isExternal = linkType === 'external';
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__item"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    onClick: onClick,
    href: href,
    type: linkType,
    className: "woocommerce-quick-links__item-link"
  }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "woocommerce-quick-links__item-link__icon",
    icon: icon
  }), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    className: "woocommerce-quick-links__item-link__text",
    as: "div",
    variant: "button"
  }, title), isExternal && Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    icon: external["a" /* default */]
  })));
};
// CONCATENATED MODULE: ./client/store-management-links/index.js











/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




function getItemsByCategory(shopUrl) {
  return [{
    title: Object(external_wp_i18n_["__"])('Marketing & Merchandising', 'woocommerce-admin'),
    items: [{
      title: Object(external_wp_i18n_["__"])('Marketing', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-admin',
        path: 'marketing'
      }),
      icon: megaphone["a" /* default */],
      listItemTag: 'marketing'
    }, {
      title: Object(external_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'post-new.php?post_type=product'
      }),
      icon: box["a" /* default */],
      listItemTag: 'add-products'
    }, {
      title: Object(external_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'customize.php'
      }),
      icon: brush["a" /* default */],
      listItemTag: 'personalize-store'
    }, {
      title: Object(external_wp_i18n_["__"])('View my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'external',
        href: shopUrl
      }),
      icon: home["a" /* default */],
      listItemTag: 'view-store'
    }]
  }, {
    title: Object(external_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
    items: [{
      title: Object(external_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'general'
      }),
      icon: pencil["a" /* default */],
      listItemTag: 'edit-store-details'
    }, {
      title: Object(external_wp_i18n_["__"])('Payments', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'checkout'
      }),
      icon: payment["a" /* default */],
      listItemTag: 'payment-settings'
    }, {
      title: Object(external_wp_i18n_["__"])('Tax', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'tax'
      }),
      icon: percent["a" /* default */],
      listItemTag: 'tax-settings'
    }, {
      title: Object(external_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'shipping'
      }),
      icon: shipping["a" /* default */],
      listItemTag: 'shipping-settings'
    }]
  }];
}
function getLinkTypeAndHref(_ref) {
  var path = _ref.path,
      _ref$tab = _ref.tab,
      tab = _ref$tab === void 0 ? null : _ref$tab,
      type = _ref.type,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? null : _ref$href;
  return {
    'wc-admin': {
      href: "admin.php?page=wc-admin&path=%2F".concat(path),
      linkType: 'wc-admin'
    },
    'wp-admin': {
      href: path,
      linkType: 'wp-admin'
    },
    'wc-settings': {
      href: "admin.php?page=wc-settings&tab=".concat(tab),
      linkType: 'wp-admin'
    }
  }[type] || {
    href: href,
    linkType: 'external'
  };
}
var generateExtensionLinks = function generateExtensionLinks(links) {
  return links.reduce(function (acc, _ref2) {
    var icon = _ref2.icon,
        href = _ref2.href,
        title = _ref2.title;
    var url = new URL(href, window.location.href); // We do not support extension links that take users away from the host.

    if (url.origin === window.location.origin) {
      acc.push({
        icon: icon,
        link: {
          href: href,
          linkType: 'wp-admin'
        },
        title: title,
        listItemTag: 'quick-links-extension-link'
      });
    }

    return acc;
  }, []);
};
var store_management_links_StoreManagementLinks = function StoreManagementLinks() {
  var shopUrl = Object(wc_admin_settings["g" /* getSetting */])('shopUrl');
  var extensionQuickLinks = generateExtensionLinks(Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_homescreen_quicklinks', []));
  var itemCategories = getItemsByCategory(shopUrl);
  var extensionCategory = {
    title: Object(external_wp_i18n_["__"])('Extensions', 'woocommerce-admin'),
    items: extensionQuickLinks
  };
  var categories = extensionQuickLinks.length ? [].concat(toConsumableArray_default()(itemCategories), [extensionCategory]) : itemCategories;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small"
  }, Object(external_wp_i18n_["__"])('Store management', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    size: "custom",
    className: "woocommerce-store-management-links__card-body"
  }, categories.map(function (category) {
    return Object(external_wp_element_["createElement"])(quick_link_category_QuickLinkCategory, {
      key: category.title,
      title: category.title
    }, category.items.map(function (_ref3) {
      var icon = _ref3.icon,
          listItemTag = _ref3.listItemTag,
          title = _ref3.title,
          _ref3$link = _ref3.link,
          href = _ref3$link.href,
          linkType = _ref3$link.linkType;
      return Object(external_wp_element_["createElement"])(quick_link_QuickLink, {
        icon: icon,
        key: "".concat(title, "_").concat(listItemTag, "_").concat(href),
        title: title,
        linkType: linkType,
        href: href,
        onClick: function onClick() {
          Object(external_wc_tracks_["recordEvent"])('home_quick_links_click', {
            task_name: listItemTag
          });
        }
      });
    }));
  })));
};

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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+MpXvjKivcYxtqnC98bVz7iEr0JX+2oXpQzetO0q7imaXrC8gldVuqqm1iMNLntej7SaWceXXvxuvfXWcMEFF4SrrroqfOhDH8qqtOMAEZVqGtF2td6VV16ZbU+PvG2ptLV///5w3XXXVZfRI63azCvZqSQYB8zvf//77Jj10HvVe1iyZEnNPtPhXr/61a+q50dVqkbVs/F5TauZVdK++uqrQ3rudOxaT+9n8eLFNdvMu4FQIMZVy2loKtTisNaQIGsbttfT9t80iB966KGaf2ud22+/veY5nTs79zpv+lvo/cT0N8j7TOu5tCbEPkf299DfIQ5gC2u0L4/wbbfQlVIGb141s8m7iI7lu/q0tKaLZdourSDXhTgtlTXzvr72ta/V3JhoW2qvjSng1PYa9/DVcjfeeOOAUldadX/gwIEs2Ozxuc99bsCNh9qIb7vttuq/0yAbqrQp4a677spt01d7Zlzy1nrx/vPaX+NzG/dctrG4NtmGUQerWPxva0eOKSTjY9+9e3fuubN2eKNz9/73v79mGT334Q9/uOa5vHOhv8MnPvGJmr/pWP//gZE3kuHbjqErpQzeeJq/uJrZpDMDNZoUYbTo4h9ffPVeijqD6YIctytKo/el7aXDZWxb6QW+aDalNJDScawKlDh4izrspAF+4oknhuFIA0jhdv/99+cuq9d++tOf1qybhk08sUV6YxAvG5d043VUwrXagHT9eB17PZ14Y82aNYXnTtXa6U1X/LnR7/H+dDOUdvaKX4s/R3lBjvaj8L2hEpDf2/hCaJXvbXy+LUNXShe86UUmb0IChc1oVDcPVjw1ojQaNpLeYKQdflLN9lodyd6tCqN0GshWiT8H9h6smjh9pNXraQeqtJ3XSqxpSMZ/A3324nXiqt44rPOGGsVV0boxqDetqII7/ZzH20+rtRtNUZp2JqPEC3PrD58N37x/+B2g7rp/b2Vbz4V2VbrhROmk9nklNatujsdm6vexNmdyXiefetKATEufo0nnWDc4uhmw0t9ITmCibcfvX+298VCqRvJ6u6t0bzdp9h40n7MFmwIyDS1bx8bzql08HUaUriOnn356zb/r/e21jfhvr33F5/bNb35z09uS9HPERDOIraqEpibD0Njcofj5tr7KNtqj93KR0gVv2oHExnim0ouJekGP9y8rGKvjLhuNPx4Jrd5XXjus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"

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(30);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(255);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(658);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(115);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(111);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/style.scss
var style = __webpack_require__(688);

// EXTERNAL MODULE: ./client/analytics/settings/config.js + 1 modules
var config = __webpack_require__(674);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/orders/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function getUnreadOrders(select, orderStatuses) {
  var _select = select(external_wc_data_["ITEMS_STORE_NAME"]),
      getItemsTotalCount = _select.getItemsTotalCount,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  if (!orderStatuses.length) {
    return 0;
  }

  var ordersQuery = {
    page: 1,
    per_page: 1,
    // Core endpoint requires per_page > 0.
    status: orderStatuses,
    _fields: ['id']
  };
  var defaultValue = null; // Disable eslint rule requiring `totalOrders` to be defined below because the next two statements
  // depend on `getItemsTotalCount` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var totalOrders = getItemsTotalCount('orders', ordersQuery, defaultValue);
  var isError = Boolean(getItemsError('orders', ordersQuery));
  var isRequesting = isResolving('getItemsTotalCount', ['orders', ordersQuery, defaultValue]);

  if (isError || isRequesting) {
    return null;
  }

  return totalOrders;
}
function getOrderStatuses(select) {
  var _select2 = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getMutableSetting = _select2.getSetting;

  var _getMutableSetting = getMutableSetting('wc_admin', 'wcAdminSettings', {}),
      _getMutableSetting$wo = _getMutableSetting.woocommerce_actionable_order_statuses,
      orderStatuses = _getMutableSetting$wo === void 0 ? config["a" /* DEFAULT_ACTIONABLE_STATUSES */] : _getMutableSetting$wo;

  return orderStatuses;
}
var getLowStockCountQuery = {
  page: 1,
  per_page: 1,
  low_in_stock: true,
  status: 'publish',
  _fields: ['id']
};
function getLowStockCount(select) {
  var _select3 = select(external_wc_data_["ITEMS_STORE_NAME"]),
      getItemsTotalCount = _select3.getItemsTotalCount,
      getItemsError = _select3.getItemsError,
      isResolving = _select3.isResolving;

  var defaultValue = null; // Disable eslint rule requiring `totalLowStockProducts` to be defined below because the next two statements
  // depend on `getItemsTotalCount` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var totalLowStockProducts = getItemsTotalCount('products', getLowStockCountQuery, defaultValue);
  var isError = Boolean(getItemsError('products', getLowStockCountQuery));
  var isRequesting = isResolving('getItemsTotalCount', ['products', getLowStockCountQuery, defaultValue]);

  if (isError || isRequesting && totalLowStockProducts === defaultValue) {
    return null;
  }

  return totalLowStockProducts;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(51);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(653);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(636);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/orders/style.scss
var orders_style = __webpack_require__(690);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/orders/index.js
















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var orders_OrdersPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(OrdersPanel, _Component);

  var _super = _createSuper(OrdersPanel);

  function OrdersPanel() {
    classCallCheck_default()(this, OrdersPanel);

    return _super.apply(this, arguments);
  }

  createClass_default()(OrdersPanel, [{
    key: "recordOrderEvent",
    value: function recordOrderEvent(eventName) {
      Object(external_wc_tracks_["recordEvent"])("activity_panel_orders_".concat(eventName), {});
    }
  }, {
    key: "renderEmptyCard",
    value: function renderEmptyCard() {
      var _this = this;

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: "woocommerce-empty-activity-card",
        title: "",
        icon: ""
      }, Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-order-empty__success-icon",
        role: "img",
        "aria-labelledby": "woocommerce-order-empty-message"
      }, "\uD83C\uDF89"), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        id: "woocommerce-order-empty-message"
      }, Object(external_wp_i18n_["__"])('You’ve fulfilled all your orders', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'edit.php?post_type=shop_order',
        onClick: function onClick() {
          return _this.recordOrderEvent('orders_manage');
        },
        className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
        type: "wp-admin"
      }, Object(external_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
    }
  }, {
    key: "renderOrders",
    value: function renderOrders() {
      var _this2 = this;

      var orders = this.props.orders;
      var Currency = this.context;

      if (orders.length === 0) {
        return this.renderEmptyCard();
      }

      var getCustomerString = function getCustomerString(order) {
        var extendedInfo = order.extended_info || {};

        var _ref = extendedInfo.customer || {},
            firstName = _ref.first_name,
            lastName = _ref.last_name;

        if (!firstName && !lastName) {
          return '';
        }

        var name = [firstName, lastName].join(' ');
        return "{{customerLink}}".concat(name, "{{/customerLink}}");
      };

      var orderCardTitle = function orderCardTitle(order) {
        var extendedInfo = order.extended_info,
            orderId = order.order_id,
            orderNumber = order.order_number;

        var _ref2 = extendedInfo || {},
            customer = _ref2.customer;

        var customerUrl = customer.customer_id ? Object(external_wc_navigation_["getNewPath"])({}, '/analytics/customers', {
          filter: 'single_customer',
          customers: customer.customer_id
        }) : null;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, lib_default()({
          mixedString: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('{{orderLink}}Order #%(orderNumber)s{{/orderLink}} %(customerString)s', 'woocommerce-admin'), {
            orderNumber: orderNumber,
            customerString: getCustomerString(order)
          }),
          components: {
            orderLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
              href: Object(wc_admin_settings["f" /* getAdminLink */])('post.php?action=edit&post=' + orderId),
              onClick: function onClick() {
                return _this2.recordOrderEvent('order_number');
              },
              type: "wp-admin"
            }),
            destinationFlag: customer.country ? Object(external_wp_element_["createElement"])(external_wc_components_["Flag"], {
              code: customer.country,
              round: false
            }) : null,
            customerLink: customerUrl ? Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
              href: customerUrl,
              onClick: function onClick() {
                return _this2.recordOrderEvent('customer_name');
              },
              type: "wc-admin"
            }) : Object(external_wp_element_["createElement"])("span", null)
          }
        }));
      };

      var cards = [];
      orders.forEach(function (order) {
        var dateCreatedGmt = order.date_created_gmt,
            extendedInfo = order.extended_info,
            orderId = order.order_id,
            totalSales = order.total_sales;
        var productsCount = extendedInfo && extendedInfo.products ? extendedInfo.products.length : 0;
        var total = totalSales;
        cards.push(Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
          key: orderId,
          className: "woocommerce-order-activity-card",
          title: orderCardTitle(order),
          date: dateCreatedGmt,
          onClick: function onClick(_ref3) {
            var target = _ref3.target;

            _this2.recordOrderEvent('orders_begin_fulfillment');

            if (!target.href) {
              window.location.href = Object(wc_admin_settings["f" /* getAdminLink */])("post.php?action=edit&post=".concat(orderId));
            }
          },
          subtitle: Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["_n"])('%d product', '%d products', productsCount, 'woocommerce-admin'), productsCount)), Object(external_wp_element_["createElement"])("span", null, Currency.formatAmount(total)))
        }, Object(external_wp_element_["createElement"])(external_wc_components_["OrderStatus"], {
          order: order,
          orderStatusMap: Object(wc_admin_settings["g" /* getSetting */])('orderStatuses', {})
        })));
      });
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, cards, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'edit.php?post_type=shop_order',
        className: "woocommerce-layout__activity-panel-outbound-link",
        onClick: function onClick() {
          return _this2.recordOrderEvent('orders_manage');
        },
        type: "wp-admin"
      }, Object(external_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          isError = _this$props.isError,
          orderStatuses = _this$props.orderStatuses;

      if (isError) {
        if (!orderStatuses.length) {
          return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
            title: Object(external_wp_i18n_["__"])("You currently don't have any actionable statuses. " + 'To display orders here, select orders that require further review in settings.', 'woocommerce-admin'),
            actionLabel: Object(external_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
            actionURL: Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin&path=/analytics/settings')
          });
        }

        var title = Object(external_wp_i18n_["__"])('There was an error getting your orders. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        }));
      }

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, isRequesting ? Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        className: "woocommerce-order-activity-card",
        hasAction: true,
        hasDate: true,
        lines: 1
      }) : this.renderOrders()));
    }
  }]);

  return OrdersPanel;
}(external_wp_element_["Component"]);

orders_OrdersPanel.propTypes = {
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool,
  countUnreadOrders: prop_types_default.a.number,
  orders: prop_types_default.a.array.isRequired,
  orderStatuses: prop_types_default.a.array
};
orders_OrdersPanel.defaultProps = {
  orders: [],
  isError: false,
  isRequesting: false
};
orders_OrdersPanel.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var activity_panel_orders = (Object(external_wp_data_["withSelect"])(function (select, props) {
  var countUnreadOrders = props.countUnreadOrders,
      orderStatuses = props.orderStatuses;

  var _select = select(external_wc_data_["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError;

  var _select2 = select(external_wc_data_["REPORTS_STORE_NAME"]),
      getReportItems = _select2.getReportItems,
      getReportItemsError = _select2.getReportItemsError,
      isResolving = _select2.isResolving;

  if (!orderStatuses.length && countUnreadOrders === 0) {
    return {
      isRequesting: false
    };
  } // Query the core Orders endpoint for the most up-to-date statuses.


  var actionableOrdersQuery = {
    page: 1,
    per_page: 5,
    status: orderStatuses,
    _fields: ['id', 'date_created_gmt', 'status']
  };
  /* eslint-disable @wordpress/no-unused-vars-before-return */

  var actionableOrders = Array.from(getItems('orders', actionableOrdersQuery).values());
  var isRequestingActionable = isResolving('getItems', ['orders', actionableOrdersQuery]);

  if (isRequestingActionable) {
    return {
      isError: Boolean(getItemsError('orders', actionableOrdersQuery)),
      isRequesting: isRequestingActionable,
      orderStatuses: orderStatuses
    };
  } // Retrieve the Order stats data from our reporting table.


  var ordersQuery = {
    page: 1,
    per_page: 5,
    extended_info: true,
    match: 'any',
    order_includes: Object(external_lodash_["map"])(actionableOrders, 'id'),
    status_is: orderStatuses,
    _fields: ['order_id', 'order_number', 'status', 'total_sales', 'extended_info.customer', 'extended_info.products']
  };
  var reportOrders = getReportItems('orders', ordersQuery).data;
  var isError = Boolean(getReportItemsError('orders', ordersQuery));
  var isRequesting = isResolving('getReportItems', ['orders', ordersQuery]);
  /* eslint-enable @wordpress/no-unused-vars-before-return */

  var orders = [];

  if (countUnreadOrders === null || typeof reportOrders === 'undefined' || reportOrders.length && !actionableOrders.length || isRequesting) {
    return {
      isRequesting: true
    };
  }

  if (reportOrders.length) {
    // Merge the core endpoint data with our reporting table.
    var actionableOrdersById = Object(external_lodash_["keyBy"])(actionableOrders, 'id');
    orders = reportOrders.map(function (order) {
      return Object(external_lodash_["merge"])({}, order, actionableOrdersById[order.order_id] || {});
    });
  }

  return {
    orders: orders,
    isError: isError,
    isRequesting: isRequesting,
    orderStatuses: orderStatuses
  };
})(orders_OrdersPanel));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(67);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__(691);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(441);

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__(92);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(21);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/card.js

















function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */


var card_ProductStockCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ProductStockCard, _Component);

  var _super = card_createSuper(ProductStockCard);

  function ProductStockCard(props) {
    var _this;

    classCallCheck_default()(this, ProductStockCard);

    _this = _super.call(this, props);
    _this.state = {
      quantity: props.product.stock_quantity,
      editing: false,
      edited: false
    };
    _this.beginEdit = _this.beginEdit.bind(assertThisInitialized_default()(_this));
    _this.cancelEdit = _this.cancelEdit.bind(assertThisInitialized_default()(_this));
    _this.onQuantityChange = _this.onQuantityChange.bind(assertThisInitialized_default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(assertThisInitialized_default()(_this));
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ProductStockCard, [{
    key: "recordStockEvent",
    value: function recordStockEvent(eventName) {
      var eventProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object(external_wc_tracks_["recordEvent"])("activity_panel_stock_".concat(eventName), eventProps);
    }
  }, {
    key: "beginEdit",
    value: function beginEdit() {
      var _this2 = this;

      var product = this.props.product;
      this.setState({
        editing: true,
        quantity: product.stock_quantity
      }, function () {
        if (_this2.quantityInput) {
          _this2.quantityInput.focus();
        }
      });
      this.recordStockEvent('update_stock');
    }
  }, {
    key: "cancelEdit",
    value: function cancelEdit() {
      var product = this.props.product;
      this.setState({
        editing: false,
        quantity: product.stock_quantity
      });
      this.recordStockEvent('cancel');
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.keyCode === external_wp_keycodes_["ESCAPE"]) {
        this.cancelEdit();
      }
    }
  }, {
    key: "onQuantityChange",
    value: function onQuantityChange(event) {
      this.setState({
        quantity: event.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, product, updateProductStock, createNotice, quantity, success;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, product = _this$props.product, updateProductStock = _this$props.updateProductStock, createNotice = _this$props.createNotice;
                quantity = parseInt(this.state.quantity, 10); // Bail on an actual update if the quantity is unchanged.

                if (!(product.stock_quantity === quantity)) {
                  _context.next = 5;
                  break;
                }

                this.setState({
                  editing: false
                });
                return _context.abrupt("return");

              case 5:
                this.setState({
                  editing: false,
                  edited: true
                });
                _context.next = 8;
                return updateProductStock(product, quantity);

              case 8:
                success = _context.sent;

                if (success) {
                  createNotice('success', Object(external_wp_i18n_["sprintf"])(
                  /* translators: %s = name of the product having stock updated */
                  Object(external_wp_i18n_["__"])('%s stock updated', 'woocommerce-admin'), product.name), {
                    actions: [{
                      label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
                      onClick: function onClick() {
                        updateProductStock(product, product.stock_quantity);

                        _this3.recordStockEvent('undo');
                      }
                    }]
                  });
                } else {
                  createNotice('error', Object(external_wp_i18n_["sprintf"])(
                  /* translators: %s = name of the product having stock updated */
                  Object(external_wp_i18n_["__"])('%s stock could not be updated', 'woocommerce-admin'), product.name));
                }

                this.recordStockEvent('save', {
                  quantity: quantity
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getActions",
    value: function getActions() {
      var editing = this.state.editing;

      if (editing) {
        return [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: "save",
          type: "submit",
          isPrimary: true
        }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: "cancel",
          type: "reset"
        }, Object(external_wp_i18n_["__"])('Cancel', 'woocommerce-admin'))];
      }

      return [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "update",
        isSecondary: true,
        onClick: this.beginEdit
      }, Object(external_wp_i18n_["__"])('Update stock', 'woocommerce-admin'))];
    }
  }, {
    key: "getBody",
    value: function getBody() {
      var _this4 = this;

      var product = this.props.product;
      var _this$state = this.state,
          editing = _this$state.editing,
          quantity = _this$state.quantity;

      if (editing) {
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["BaseControl"], {
          className: "woocommerce-stock-activity-card__edit-quantity"
        }, Object(external_wp_element_["createElement"])("input", {
          className: "components-text-control__input",
          type: "number",
          value: quantity,
          onKeyDown: this.handleKeyDown,
          onChange: this.onQuantityChange,
          ref: function ref(input) {
            _this4.quantityInput = input;
          }
        })), Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["__"])('in stock', 'woocommerce-admin')));
      }

      return Object(external_wp_element_["createElement"])("span", {
        className: classnames_default()('woocommerce-stock-activity-card__stock-quantity', {
          'out-of-stock': product.stock_quantity < 1
        })
      }, Object(external_wp_i18n_["sprintf"])(
      /* translators: %d = stock quantity of the product being updated */
      Object(external_wp_i18n_["__"])('%d in stock', 'woocommerce-admin'), product.stock_quantity));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var product = this.props.product;
      var _this$state2 = this.state,
          edited = _this$state2.edited,
          editing = _this$state2.editing;
      var notifyLowStockAmount = Object(wc_admin_settings["g" /* getSetting */])('notifyLowStockAmount', 0);
      var lowStockAmount = Number.isFinite(product.low_stock_amount) ? product.low_stock_amount : notifyLowStockAmount;
      var isLowStock = product.stock_quantity <= lowStockAmount;
      var lastOrderDate = product.last_order_date ? Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = time since last product order. e.g.: "10 minutes ago" - translated. */
      Object(external_wp_i18n_["__"])('Last ordered %s', 'woocommerce-admin'), external_moment_default.a.utc(product.last_order_date).fromNow()) : null; // Hide cards that are not in low stock and have not been edited.
      // This allows clearing cards which are no longer in low stock after
      // closing & opening the panel without having to make another request.

      if (!isLowStock && !edited) {
        return null;
      }

      var title = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'post.php?action=edit&post=' + (product.parent_id || product.id),
        onClick: function onClick() {
          return _this5.recordStockEvent('product_name');
        },
        type: "wp-admin"
      }, product.name);
      var subtitle = null;

      if (product.type === 'variation') {
        subtitle = Object.values(product.attributes).map(function (attr) {
          return attr.option;
        }).join(', ');
      }

      var productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
      var productImageClasses = classnames_default()('woocommerce-stock-activity-card__image-overlay__product', {
        'is-placeholder': !productImage || !productImage.src
      });
      var icon = Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-stock-activity-card__image-overlay"
      }, Object(external_wp_element_["createElement"])("div", {
        className: productImageClasses
      }, Object(external_wp_element_["createElement"])(external_wc_components_["ProductImage"], {
        product: product
      })));
      var activityCardClasses = classnames_default()('woocommerce-stock-activity-card', {
        'is-dimmed': !editing && !isLowStock
      });
      var activityCard = Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: activityCardClasses,
        title: title,
        subtitle: subtitle,
        icon: icon,
        date: lastOrderDate,
        actions: this.getActions()
      }, this.getBody());

      if (editing) {
        return Object(external_wp_element_["createElement"])("form", {
          onReset: this.cancelEdit,
          onSubmit: this.onSubmit
        }, activityCard);
      }

      return activityCard;
    }
  }]);

  return ProductStockCard;
}(external_wp_element_["Component"]);
// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/index.js

















function stock_createSuper(Derived) { var hasNativeReflectConstruct = stock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function stock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




var productsQuery = {
  page: 1,
  per_page: 5,
  low_in_stock: true,
  status: 'publish',
  _fields: ['attributes', 'id', 'images', 'last_order_date', 'low_stock_amount', 'name', 'parent_id', 'stock_quantity', 'type']
};
var stock_StockPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(StockPanel, _Component);

  var _super = stock_createSuper(StockPanel);

  function StockPanel(props) {
    var _this;

    classCallCheck_default()(this, StockPanel);

    _this = _super.call(this, props);
    _this.updateStock = _this.updateStock.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StockPanel, [{
    key: "updateStock",
    value: function () {
      var _updateStock = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(product, quantity) {
        var _this$props, invalidateResolution, updateProductStock, products, success;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, invalidateResolution = _this$props.invalidateResolution, updateProductStock = _this$props.updateProductStock, products = _this$props.products;
                _context.next = 3;
                return updateProductStock(product, quantity);

              case 3:
                success = _context.sent;

                if (success) {
                  // Request more low stock products.
                  invalidateResolution('getItems', ['products', productsQuery]);

                  if (products.length < 2) {
                    invalidateResolution('getItemsTotalCount', ['products', getLowStockCountQuery, null]);
                  }
                }

                return _context.abrupt("return", success);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateStock(_x, _x2) {
        return _updateStock.apply(this, arguments);
      }

      return updateStock;
    }()
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var _this2 = this;

      var _this$props2 = this.props,
          products = _this$props2.products,
          createNotice = _this$props2.createNotice;
      return products.map(function (product) {
        return Object(external_wp_element_["createElement"])(card_ProductStockCard, {
          key: product.id,
          product: product,
          updateProductStock: _this2.updateStock,
          createNotice: createNotice
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          countLowStockProducts = _this$props3.countLowStockProducts,
          isError = _this$props3.isError,
          isRequesting = _this$props3.isRequesting,
          products = _this$props3.products;

      if (isError) {
        var title = Object(external_wp_i18n_["__"])('There was an error getting your low stock products. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        });
      } // Show placeholders only for the first products fetch.


      if (isRequesting && !products.length) {
        var numPlaceholders = Math.min(5, countLowStockProducts);
        var placeholders = Array.from(new Array(numPlaceholders)).map(function (v, idx) {
          return Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
            key: idx,
            className: "woocommerce-stock-activity-card",
            hasAction: true,
            lines: 1
          });
        });
        return Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, placeholders);
      }

      return Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, this.renderProducts());
    }
  }]);

  return StockPanel;
}(external_wp_element_["Component"]);
stock_StockPanel.propTypes = {
  countLowStockProducts: prop_types_default.a.number,
  products: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
stock_StockPanel.defaultProps = {
  products: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var stock = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var products = Array.from(getItems('products', productsQuery).values());
  var isError = Boolean(getItemsError('products', productsQuery));
  var isRequesting = isResolving('getItems', ['products', productsQuery]);
  return {
    products: products,
    isError: isError,
    isRequesting: isRequesting
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ITEMS_STORE_NAME"]),
      invalidateResolution = _dispatch.invalidateResolution,
      updateProductStock = _dispatch.updateProductStock;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    invalidateResolution: invalidateResolution,
    updateProductStock: updateProductStock
  };
}))(stock_StockPanel));
// EXTERNAL MODULE: ./node_modules/gridicons/dist/star.js
var star = __webpack_require__(337);
var star_default = /*#__PURE__*/__webpack_require__.n(star);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/star-outline.js
var star_outline = __webpack_require__(693);
var star_outline_default = /*#__PURE__*/__webpack_require__.n(star_outline);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/reviews/style.scss
var reviews_style = __webpack_require__(694);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/checkmark-circle-icon.js

/* harmony default export */ var checkmark_circle_icon = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "1",
    y: "1",
    width: "14",
    height: "14"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM7.99992 13.333C5.05992 13.333 2.66659 10.9397 2.66659 7.99967C2.66659 5.05967 5.05992 2.66634 7.99992 2.66634C10.9399 2.66634 13.3333 5.05967 13.3333 7.99967C13.3333 10.9397 10.9399 13.333 7.99992 13.333ZM6.66658 9.44634L11.0599 5.05301L11.9999 5.99967L6.66658 11.333L3.99992 8.66634L4.93992 7.72634L6.66658 9.44634Z",
    fill: "white"
  })), Object(external_wp_element_["createElement"])("g", {
    mask: "url(#mask0)"
  }, Object(external_wp_element_["createElement"])("rect", {
    width: "16",
    height: "16",
    fill: "#4AB866"
  })));
});
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(649);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/utils.js
/**
 * External dependencies
 */

var REVIEW_PAGE_LIMIT = 5;
var unapprovedReviewsQuery = {
  page: 1,
  per_page: 1,
  status: 'hold',
  _embed: 1,
  _fields: ['id']
};
function getUnapprovedReviews(select) {
  var _select = select(external_wc_data_["REVIEWS_STORE_NAME"]),
      getReviewsTotalCount = _select.getReviewsTotalCount,
      getReviewsError = _select.getReviewsError,
      isResolving = _select.isResolving; // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var totalReviews = getReviewsTotalCount(unapprovedReviewsQuery);
  var isError = Boolean(getReviewsError(unapprovedReviewsQuery));
  var isRequesting = isResolving('getReviewsTotalCount', [unapprovedReviewsQuery]);

  if (isError || isRequesting && totalReviews === undefined) {
    return null;
  }

  return totalReviews;
}
// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/index.js











function reviews_createSuper(Derived) { var hasNativeReflectConstruct = reviews_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function reviews_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */















/**
 * Internal dependencies
 */







var reviewsQuery = {
  page: 1,
  per_page: REVIEW_PAGE_LIMIT,
  status: 'hold',
  _embed: 1
};

var reviews_ReviewsPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(ReviewsPanel, _Component);

  var _super = reviews_createSuper(ReviewsPanel);

  function ReviewsPanel() {
    classCallCheck_default()(this, ReviewsPanel);

    return _super.apply(this, arguments);
  }

  createClass_default()(ReviewsPanel, [{
    key: "recordReviewEvent",
    value: function recordReviewEvent(eventName, eventData) {
      Object(external_wc_tracks_["recordEvent"])("reviews_".concat(eventName), eventData || {});
    }
  }, {
    key: "deleteReview",
    value: function deleteReview(reviewId) {
      var _this$props = this.props,
          deleteReview = _this$props.deleteReview,
          createNotice = _this$props.createNotice,
          updateReview = _this$props.updateReview,
          clearReviewsCache = _this$props.clearReviewsCache;

      if (reviewId) {
        deleteReview(reviewId).then(function () {
          clearReviewsCache();
          createNotice('success', Object(external_wp_i18n_["__"])('Review successfully deleted.', 'woocommerce-admin'), {
            actions: [{
              label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
              onClick: function onClick() {
                updateReview(reviewId, {
                  status: 'untrash'
                }, {
                  _embed: 1
                }).then(function () {
                  return clearReviewsCache();
                });
              }
            }]
          });
        }).catch(function () {
          createNotice('error', Object(external_wp_i18n_["__"])('Review could not be deleted.', 'woocommerce-admin'));
        });
      }
    }
  }, {
    key: "updateReviewStatus",
    value: function updateReviewStatus(reviewId, newStatus, oldStatus) {
      var _this$props2 = this.props,
          createNotice = _this$props2.createNotice,
          updateReview = _this$props2.updateReview,
          clearReviewsCache = _this$props2.clearReviewsCache;

      if (reviewId) {
        updateReview(reviewId, {
          status: newStatus
        }).then(function () {
          clearReviewsCache();
          createNotice('success', Object(external_wp_i18n_["__"])('Review successfully updated.', 'woocommerce-admin'), {
            actions: [{
              label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
              onClick: function onClick() {
                updateReview(reviewId, {
                  status: oldStatus
                }, {
                  _embed: 1
                }).then(function () {
                  return clearReviewsCache();
                });
              }
            }]
          });
        }).catch(function () {
          createNotice('error', Object(external_wp_i18n_["__"])('Review could not be updated.', 'woocommerce-admin'));
        });
      }
    }
  }, {
    key: "renderReview",
    value: function renderReview(review) {
      var _this = this;

      var product = review && review._embedded && review._embedded.up && review._embedded.up[0] || null;

      if (review.isUpdating) {
        return Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
          key: review.id,
          className: "woocommerce-review-activity-card",
          hasAction: true,
          hasDate: true,
          lines: 1
        });
      }

      if (Object(external_lodash_["isNull"])(product) || review.status !== reviewsQuery.status) {
        return null;
      }

      var title = lib_default()({
        mixedString: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('{{authorLink}}%s{{/authorLink}}{{verifiedCustomerIcon/}} reviewed {{productLink}}%s{{/productLink}}', 'woocommerce-admin'), review.reviewer, product.name),
        components: {
          productLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: product.permalink,
            onClick: function onClick() {
              return _this.recordReviewEvent('product');
            },
            type: "external"
          }),
          authorLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin&path=%2Fcustomers&search=' + review.reviewer),
            onClick: function onClick() {
              return _this.recordReviewEvent('customer');
            },
            type: "external"
          }),
          verifiedCustomerIcon: review.verified ? Object(external_wp_element_["createElement"])("span", {
            className: "woocommerce-review-activity-card__verified"
          }, Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
            text: Object(external_wp_i18n_["__"])('Verified owner', 'woocommerce-admin')
          }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_element_["createElement"])(checkmark_circle_icon, null)))) : null
        }
      });
      var subtitle = Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["ReviewRating"], {
        review: review,
        icon: star_outline_default.a,
        outlineIcon: star_default.a,
        size: 13
      }));
      var productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
      var productImageClasses = classnames_default()('woocommerce-review-activity-card__image-overlay__product', {
        'is-placeholder': !productImage || !productImage.src
      });
      var icon = Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-review-activity-card__image-overlay"
      }, Object(external_wp_element_["createElement"])("div", {
        className: productImageClasses
      }, Object(external_wp_element_["createElement"])(external_wc_components_["ProductImage"], {
        product: product,
        width: 33,
        height: 33
      })));
      var manageReviewEvent = {
        date: review.date_created_gmt,
        status: review.status
      };
      var cardActions = [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "approve-action",
        isSecondary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('approve', manageReviewEvent);

          _this.updateReviewStatus(review.id, 'approved', review.status);
        }
      }, Object(external_wp_i18n_["__"])('Approve', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "spam-action",
        isTertiary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('mark_as_spam', manageReviewEvent);

          _this.updateReviewStatus(review.id, 'spam', review.status);
        }
      }, Object(external_wp_i18n_["__"])('Mark as spam', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "delete-action",
        isDestructive: true,
        isTertiary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('delete', manageReviewEvent);

          _this.deleteReview(review.id);
        }
      }, Object(external_wp_i18n_["__"])('Delete', 'woocommerce-admin'))];
      return Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: "woocommerce-review-activity-card",
        key: review.id,
        title: title,
        subtitle: subtitle,
        date: review.date_created_gmt,
        icon: icon,
        actions: cardActions
      }, Object(external_wp_element_["createElement"])("span", {
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(review.review)
      }));
    }
  }, {
    key: "renderReviews",
    value: function renderReviews(reviews) {
      var _this2 = this;

      var renderedReviews = reviews.map(function (review) {
        return _this2.renderReview(review, _this2.props);
      });

      if (renderedReviews.filter(Boolean).length === 0) {
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null);
      }

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, renderedReviews, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: Object(wc_admin_settings["f" /* getAdminLink */])('edit-comments.php?comment_type=review'),
        onClick: function onClick() {
          return _this2.recordReviewEvent('reviews_manage');
        },
        className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
        type: "wp-admin"
      }, Object(external_wp_i18n_["__"])('Manage all reviews', 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isRequesting = _this$props3.isRequesting,
          isError = _this$props3.isError,
          reviews = _this$props3.reviews;

      if (isError) {
        var title = Object(external_wp_i18n_["__"])('There was an error getting your reviews. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        }));
      }

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, isRequesting && !reviews.length ? Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        className: "woocommerce-review-activity-card",
        hasAction: true,
        hasDate: true,
        lines: 1
      }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, this.renderReviews(reviews))));
    }
  }]);

  return ReviewsPanel;
}(external_wp_element_["Component"]);

reviews_ReviewsPanel.propTypes = {
  reviews: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
reviews_ReviewsPanel.defaultProps = {
  reviews: [],
  isError: false,
  isRequesting: false
};
reviews_ReviewsPanel.contextType = currency_context["a" /* CurrencyContext */];

/* harmony default export */ var activity_panel_reviews = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, props) {
  var hasUnapprovedReviews = props.hasUnapprovedReviews;

  var _select = select(external_wc_data_["REVIEWS_STORE_NAME"]),
      getReviews = _select.getReviews,
      getReviewsError = _select.getReviewsError,
      isResolving = _select.isResolving;

  var reviews = [];
  var isError = false;
  var isRequesting = false;

  if (hasUnapprovedReviews) {
    reviews = getReviews(reviewsQuery);
    isError = Boolean(getReviewsError(reviewsQuery));
    isRequesting = isResolving('getReviews', [reviewsQuery]);
  }

  return {
    reviews: reviews,
    isError: isError,
    isRequesting: isRequesting
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, props) {
  var _dispatch = dispatch(external_wc_data_["REVIEWS_STORE_NAME"]),
      deleteReview = _dispatch.deleteReview,
      updateReview = _dispatch.updateReview,
      invalidateResolution = _dispatch.invalidateResolution;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  var clearReviewsCache = function clearReviewsCache() {
    invalidateResolution('getReviews', [reviewsQuery]);

    if (props.reviews && props.reviews.length < 2) {
      invalidateResolution('getReviewsTotalCount', [unapprovedReviewsQuery]);
    }
  };

  return {
    deleteReview: deleteReview,
    createNotice: createNotice,
    updateReview: updateReview,
    clearReviewsCache: clearReviewsCache
  };
})])(reviews_ReviewsPanel));
// CONCATENATED MODULE: ./client/homescreen/activity-panel/panels.js



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function getAllPanels(_ref) {
  var countLowStockProducts = _ref.countLowStockProducts,
      countUnapprovedReviews = _ref.countUnapprovedReviews,
      countUnreadOrders = _ref.countUnreadOrders,
      isTaskListHidden = _ref.isTaskListHidden,
      manageStock = _ref.manageStock,
      orderStatuses = _ref.orderStatuses,
      publishedProductCount = _ref.publishedProductCount,
      reviewsEnabled = _ref.reviewsEnabled,
      totalOrderCount = _ref.totalOrderCount;

  if (isTaskListHidden !== 'yes') {
    return [];
  }

  return [totalOrderCount > 0 && {
    className: 'woocommerce-homescreen-card',
    count: countUnreadOrders,
    collapsible: true,
    id: 'orders-panel',
    initialOpen: false,
    panel: Object(external_wp_element_["createElement"])(activity_panel_orders, {
      countUnreadOrders: countUnreadOrders,
      orderStatuses: orderStatuses
    }),
    title: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin')
  }, totalOrderCount > 0 && publishedProductCount > 0 && manageStock === 'yes' && {
    className: 'woocommerce-homescreen-card',
    count: countLowStockProducts,
    id: 'stock-panel',
    initialOpen: false,
    collapsible: countLowStockProducts !== 0,
    panel: Object(external_wp_element_["createElement"])(stock, {
      countLowStockProducts: countLowStockProducts
    }),
    title: Object(external_wp_i18n_["__"])('Stock', 'woocommerce-admin')
  }, publishedProductCount > 0 && reviewsEnabled === 'yes' && {
    className: 'woocommerce-homescreen-card',
    id: 'reviews-panel',
    count: countUnapprovedReviews,
    initialOpen: false,
    collapsible: countUnapprovedReviews !== 0,
    panel: Object(external_wp_element_["createElement"])(activity_panel_reviews, {
      hasUnapprovedReviews: countUnapprovedReviews > 0
    }),
    title: Object(external_wp_i18n_["__"])('Reviews', 'woocommerce-admin')
  } // Add another panel row here
  ].filter(Boolean);
}
// CONCATENATED MODULE: ./client/homescreen/activity-panel/index.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var activity_panel_ActivityPanel = function ActivityPanel() {
  var panelsData = Object(external_wp_data_["useSelect"])(function (select) {
    var totalOrderCount = Object(wc_admin_settings["g" /* getSetting */])('orderCount', 0);
    var orderStatuses = getOrderStatuses(select);
    var reviewsEnabled = Object(wc_admin_settings["g" /* getSetting */])('reviewsEnabled', 'no');
    var countUnreadOrders = getUnreadOrders(select, orderStatuses);
    var manageStock = Object(wc_admin_settings["g" /* getSetting */])('manageStock', 'no');
    var countLowStockProducts = getLowStockCount(select);
    var countUnapprovedReviews = getUnapprovedReviews(select);
    var publishedProductCount = Object(wc_admin_settings["g" /* getSetting */])('publishedProductCount', 0);

    var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select.getOption;

    var isTaskListHidden = getOption('woocommerce_task_list_hidden');
    return {
      countLowStockProducts: countLowStockProducts,
      countUnapprovedReviews: countUnapprovedReviews,
      countUnreadOrders: countUnreadOrders,
      isTaskListHidden: isTaskListHidden,
      manageStock: manageStock,
      publishedProductCount: publishedProductCount,
      reviewsEnabled: reviewsEnabled,
      totalOrderCount: totalOrderCount,
      orderStatuses: orderStatuses
    };
  });
  var panels = getAllPanels(panelsData);
  Object(external_wp_element_["useEffect"])(function () {
    var visiblePanels = panels.reduce(function (acc, panel) {
      acc[panel.id] = true;
      return acc;
    }, {
      taskList: panelsData.isTaskListHidden !== 'yes'
    });
    Object(external_wc_tracks_["recordEvent"])('activity_panel_visible_panels', visiblePanels);
  }, [panelsData.isTaskListHidden]);

  if (panels.length === 0) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Panel"], {
    className: "woocommerce-activity-panel"
  }, panels.map(function (panelData) {
    var className = panelData.className,
        count = panelData.count,
        id = panelData.id,
        initialOpen = panelData.initialOpen,
        panel = panelData.panel,
        title = panelData.title,
        collapsible = panelData.collapsible;
    return collapsible ? Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
      title: [Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
        key: title,
        variant: "title.small"
      }, title), count !== null && Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
        key: "".concat(title, "-badge"),
        count: count
      })],
      key: id,
      className: className,
      initialOpen: initialOpen,
      collapsible: collapsible,
      disabled: !collapsible,
      onToggle: function onToggle(isOpen) {
        if (!isOpen) {
          return;
        }

        Object(external_wc_tracks_["recordEvent"])('activity_panel_open', {
          tab: id
        });
      }
    }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, panel)) : Object(external_wp_element_["createElement"])("div", {
      className: "components-panel__body",
      key: id
    }, Object(external_wp_element_["createElement"])("h2", {
      className: "components-panel__body-title"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: "components-panel__body-toggle",
      "aria-expanded": false,
      disabled: true
    }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
      variant: "title.small"
    }, title), count !== null && Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
      count: count
    }))));
  }));
};
// CONCATENATED MODULE: ./client/homescreen/column.js



/**
 * External dependencies
 */

var column_Column = function Column(_ref) {
  var children = _ref.children,
      _ref$shouldStick = _ref.shouldStick,
      shouldStick = _ref$shouldStick === void 0 ? false : _ref$shouldStick;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isContentStuck = _useState2[0],
      setIsContentStuck = _useState2[1];

  var content = Object(external_wp_element_["useRef"])(null);
  var initialTop = Object(external_wp_element_["useRef"])(null);
  var maybeStickContent = Object(external_wp_element_["useCallback"])(function () {
    if (!content.current) {
      return;
    }

    var _content$current$getB = content.current.getBoundingClientRect(),
        bottom = _content$current$getB.bottom,
        top = _content$current$getB.top;

    if (initialTop.current === null) {
      initialTop.current = top;
    }

    var shouldBeSticky = bottom < window.innerHeight;

    if (top === initialTop.current) {
      setIsContentStuck(shouldBeSticky);
    }
  }, []);
  Object(external_wp_element_["useLayoutEffect"])(function () {
    if (!shouldStick) {
      return;
    }

    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    window.addEventListener('scroll', maybeStickContent);
    return function () {
      window.removeEventListener('resize', maybeStickContent);
      window.removeEventListener('scroll', maybeStickContent);
    };
  }, [maybeStickContent, shouldStick]);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-homescreen-column",
    ref: content,
    style: {
      position: shouldStick && isContentStuck ? 'sticky' : 'static'
    }
  }, children);
};
// EXTERNAL MODULE: ./client/inbox-panel/index.js + 3 modules
var inbox_panel = __webpack_require__(742);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(58);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/style.scss
var intro_modal_style = __webpack_require__(696);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-1.png
var nav_intro_1 = __webpack_require__(697);
var nav_intro_1_default = /*#__PURE__*/__webpack_require__.n(nav_intro_1);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-2.png
var nav_intro_2 = __webpack_require__(698);
var nav_intro_2_default = /*#__PURE__*/__webpack_require__.n(nav_intro_2);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-3.png
var nav_intro_3 = __webpack_require__(699);
var nav_intro_3_default = /*#__PURE__*/__webpack_require__.n(nav_intro_3);

// CONCATENATED MODULE: ./client/homescreen/constants.js
/**
 * Welcome modal dismissed option name.
 */
var WELCOME_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_task_list_welcome_modal_dismissed';
/**
 * Welcome from calypso modal dismissed option name.
 */

var WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_welcome_from_calypso_modal_dismissed';
// CONCATENATED MODULE: ./client/navigation/components/intro-modal/index.js




/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






var INTRO_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_navigation_intro_modal_dismissed';
var intro_modal_IntroModal = function IntroModal() {
  var _useState = Object(external_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _useDispatch.updateOptions;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select.getOption,
        isOptionResolving = _select.isResolving;

    var dismissedOption = getOption(INTRO_MODAL_DISMISSED_OPTION_NAME);
    return {
      isDismissed: dismissedOption === 'yes',
      isWelcomeModalShown: getOption(WELCOME_MODAL_DISMISSED_OPTION_NAME) !== 'yes',
      isResolving: typeof dismissedOption === 'undefined' || isOptionResolving('getOption', [INTRO_MODAL_DISMISSED_OPTION_NAME]) || isOptionResolving('getOption', [WELCOME_MODAL_DISMISSED_OPTION_NAME])
    };
  }),
      isDismissed = _useSelect.isDismissed,
      isResolving = _useSelect.isResolving,
      isWelcomeModalShown = _useSelect.isWelcomeModalShown;

  var dismissModal = function dismissModal() {
    updateOptions(defineProperty_default()({}, INTRO_MODAL_DISMISSED_OPTION_NAME, 'yes'));
    Object(external_wc_tracks_["recordEvent"])('navigation_intro_modal_close', {});
    setOpen(false);
  }; // Dismiss the modal when the welcome modal is shown.
  // It is likely in this case that the navigation is on by default.


  Object(external_wp_element_["useEffect"])(function () {
    if (!isResolving && isWelcomeModalShown && !isDismissed) {
      dismissModal();
    }
  }, [isDismissed, isResolving, isWelcomeModalShown]);

  if (!isOpen || isDismissed || isResolving || isWelcomeModalShown) {
    return null;
  }

  var getPage = function getPage(title, description, imageUrl) {
    return {
      content: Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__page-wrapper"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__page-text"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.large",
        as: "h2"
      }, title), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body.large"
      }, description)), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__image-wrapper"
      }, Object(external_wp_element_["createElement"])("img", {
        alt: title,
        src: imageUrl
      })))
    };
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    className: "woocommerce-navigation-intro-modal",
    onFinish: dismissModal,
    pages: [getPage(Object(external_wp_i18n_["__"])('A new navigation for WooCommerce', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('All of your store management features in one place', 'woocommerce-admin'), nav_intro_1_default.a), getPage(Object(external_wp_i18n_["__"])('Focus on managing your store', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('Give your attention to key areas of WooCommerce with little distraction', 'woocommerce-admin'), nav_intro_2_default.a), getPage(Object(external_wp_i18n_["__"])('Easily find and favorite your extensions', 'woocommerce-admin'), Object(external_wp_i18n_["__"])("They'll appear in the top level of the navigation for quick access", 'woocommerce-admin'), nav_intro_3_default.a)]
  });
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(66);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(204);

// EXTERNAL MODULE: external ["wc","explat"]
var external_wc_explat_ = __webpack_require__(289);

// EXTERNAL MODULE: ./client/homescreen/stats-overview/style.scss
var stats_overview_style = __webpack_require__(700);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(101);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/defaults.js
/**
 * External dependencies
 */

/**
 * List of homepage stats enabled by default
 *
 * @hook woocommerce_admin_homepage_default_stats
 * @example
 * addFilter(
 *	'woocommerce_admin_homepage_default_stats',
 *	'plugin-domain',
 *	( defaultStats ) =>
 *		defaultStats.filter( ( stat ) => stat !== 'jetpack/stats/views' )
 *);
 */

var DEFAULT_STATS = Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
var DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];
// EXTERNAL MODULE: ./client/dashboard/store-performance/utils.js
var utils = __webpack_require__(660);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/stats-list.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var stats_list_StatsList = function StatsList(_ref) {
  var stats = _ref.stats,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      primaryRequesting = _ref.primaryRequesting,
      secondaryRequesting = _ref.secondaryRequesting,
      primaryError = _ref.primaryError,
      secondaryError = _ref.secondaryError,
      query = _ref.query;

  var _useContext = Object(external_wp_element_["useContext"])(currency_context["a" /* CurrencyContext */]),
      formatAmount = _useContext.formatAmount,
      getCurrencyConfig = _useContext.getCurrencyConfig;

  if (primaryError || secondaryError) {
    return null;
  }

  var persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
  var currency = getCurrencyConfig();
  return Object(external_wp_element_["createElement"])("ul", {
    className: classnames_default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(function (item) {
    if (primaryRequesting || secondaryRequesting) {
      return Object(external_wp_element_["createElement"])(external_wc_components_["SummaryNumberPlaceholder"], {
        key: item.stat
      });
    }

    var _getIndicatorValues = Object(utils["b" /* getIndicatorValues */])({
      indicator: item,
      primaryData: primaryData,
      secondaryData: secondaryData,
      currency: currency,
      formatAmount: formatAmount,
      persistedQuery: persistedQuery
    }),
        primaryValue = _getIndicatorValues.primaryValue,
        secondaryValue = _getIndicatorValues.secondaryValue,
        delta = _getIndicatorValues.delta,
        reportUrl = _getIndicatorValues.reportUrl,
        reportUrlType = _getIndicatorValues.reportUrlType;

    return Object(external_wp_element_["createElement"])(external_wc_components_["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(external_wp_i18n_["__"])('Previous Period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: function onLinkClickCallback() {
        Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ var stats_list = (Object(external_wp_data_["withSelect"])(function (select, _ref2) {
  var stats = _ref2.stats,
      query = _ref2.query;

  if (stats.length === 0) {
    return;
  }

  return Object(utils["a" /* getIndicatorData */])(select, stats, query);
})(stats_list_StatsList));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(158);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// CONCATENATED MODULE: ./packages/data/src/plugins/constants.ts
/**
 * External dependencies
 */

var STORE_NAME = 'wc/admin/plugins';
var PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

var pluginNames = {
  'facebook-for-woocommerce': Object(external_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(external_wp_i18n_["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'google-listings-and-ads': Object(external_wp_i18n_["__"])('Google Listings and Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(external_wp_i18n_["__"])('MailPoet', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/src/plugins/action-types.ts
var ACTION_TYPES;

(function (ACTION_TYPES) {
  ACTION_TYPES["UPDATE_ACTIVE_PLUGINS"] = "UPDATE_ACTIVE_PLUGINS";
  ACTION_TYPES["UPDATE_INSTALLED_PLUGINS"] = "UPDATE_INSTALLED_PLUGINS";
  ACTION_TYPES["SET_IS_REQUESTING"] = "SET_IS_REQUESTING";
  ACTION_TYPES["SET_ERROR"] = "SET_ERROR";
  ACTION_TYPES["UPDATE_JETPACK_CONNECTION"] = "UPDATE_JETPACK_CONNECTION";
  ACTION_TYPES["UPDATE_JETPACK_CONNECT_URL"] = "UPDATE_JETPACK_CONNECT_URL";
  ACTION_TYPES["SET_PAYPAL_ONBOARDING_STATUS"] = "SET_PAYPAL_ONBOARDING_STATUS";
  ACTION_TYPES["SET_RECOMMENDED_PLUGINS"] = "SET_RECOMMENDED_PLUGINS";
})(ACTION_TYPES || (ACTION_TYPES = {}));
// CONCATENATED MODULE: ./packages/data/src/constants.js
var JETPACK_NAMESPACE = '/jetpack/v4';
var NAMESPACE = '/wc-analytics';
var WC_ADMIN_NAMESPACE = '/wc-admin';
var WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

var MAX_PER_PAGE = 100;
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 365 * DAY / 12;
var DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
// CONCATENATED MODULE: ./packages/data/src/plugins/actions.ts


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installPlugins),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(activatePlugins),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installAndActivatePlugins),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpack),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_installJetpackAndConnect),
    _marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpackWithFailureRedirect);









/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function isWPError(error) {
  return error.errors !== undefined;
}

function formatErrors(response) {
  if (isWPError(response)) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(function (plugin) {
      response.errors[plugin] = response.errors[plugin].map(function (pluginError) {
        return pluginNames[plugin] ? pluginError.replace("`".concat(plugin, "`"), pluginNames[plugin]) : pluginError;
      });
    });
  }

  return response;
}

var actions_formatErrorMessage = function formatErrorMessage(pluginErrors) {
  var actionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'install';
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', Object.keys(pluginErrors).length, 'woocommerce-admin'), {
    actionType: actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};

function updateActivePlugins(active) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: ACTION_TYPES.UPDATE_ACTIVE_PLUGINS,
    active: active,
    replace: replace
  };
}
function updateInstalledPlugins(installed) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: ACTION_TYPES.UPDATE_INSTALLED_PLUGINS,
    installed: installed,
    replace: replace
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: ACTION_TYPES.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setError(selector, error) {
  return {
    type: ACTION_TYPES.SET_ERROR,
    selector: selector,
    error: error
  };
}
function updateIsJetpackConnected(jetpackConnection) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECTION,
    jetpackConnection: jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl: jetpackConnectUrl,
    redirectUrl: redirectUrl
  };
}
function installPlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function installPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('installPlugins', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/install"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context.sent;

          if (!results.data.installed.length) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return updateInstalledPlugins(results.data.installed);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context.next = 13;
          return setIsRequesting('installPlugins', false);

        case 13:
          return _context.abrupt("return", results);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return setError('installPlugins', _context.t0);

        case 20:
          throw new Error(actions_formatErrorMessage(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 16]]);
}
function activatePlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function activatePlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting('activatePlugins', true);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/activate"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context2.sent;

          if (!results.data.activated.length) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return updateActivePlugins(results.data.activated);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context2.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context2.next = 13;
          return setIsRequesting('activatePlugins', false);

        case 13:
          return _context2.abrupt("return", results);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 20;
          return setError('activatePlugins', _context2.t0);

        case 20:
          throw new Error(formatErrors(_context2.t0));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 16]]);
}
function installAndActivatePlugins(plugins) {
  var activations;
  return external_regeneratorRuntime_default.a.wrap(function installAndActivatePlugins$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'installPlugins', plugins);

        case 3:
          _context3.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'activatePlugins', plugins);

        case 5:
          activations = _context3.sent;
          return _context3.abrupt("return", activations);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
var actions_createErrorNotice = function createErrorNotice(errorMessage) {
  return Object(external_wp_dataControls_["dispatch"])('core/notices', 'createNotice', errorMessage);
};
function connectToJetpack(getAdminLink) {
  var url, error;
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpack$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(external_wp_dataControls_["select"])(STORE_NAME, 'getJetpackConnectUrl', {
            redirect_url: getAdminLink('admin.php?page=wc-admin')
          });

        case 2:
          url = _context4.sent;
          _context4.next = 5;
          return Object(external_wp_dataControls_["select"])(STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

        case 5:
          error = _context4.sent;

          if (!error) {
            _context4.next = 10;
            break;
          }

          throw new Error(error);

        case 10:
          return _context4.abrupt("return", url);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function actions_installJetpackAndConnect(errorAction, getAdminLink) {
  var url;
  return external_regeneratorRuntime_default.a.wrap(function installJetpackAndConnect$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'installPlugins', ['jetpack']);

        case 3:
          _context5.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'activatePlugins', ['jetpack']);

        case 5:
          _context5.next = 7;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'connectToJetpack', getAdminLink);

        case 7:
          url = _context5.sent;
          window.location.href = url;
          _context5.next = 15;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 15;
          return errorAction(_context5.t0.message);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 11]]);
}
function connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  var url;
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpackWithFailureRedirect$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'connectToJetpack', getAdminLink);

        case 3:
          url = _context6.sent;
          window.location.href = url;
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return errorAction(_context6.t0.message);

        case 11:
          window.location.href = failureRedirect;

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}
function setPaypalOnboardingStatus(status) {
  return {
    type: ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS,
    paypalOnboardingStatus: status
  };
}
function setRecommendedPlugins(type, plugins) {
  return {
    type: ACTION_TYPES.SET_RECOMMENDED_PLUGINS,
    recommendedType: type,
    plugins: plugins
  };
}
// CONCATENATED MODULE: ./client/homescreen/stats-overview/install-jetpack-cta.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var install_jetpack_cta_getJetpackInstallText = function getJetpackInstallText(jetpackInstallState) {
  return {
    unavailable: Object(external_wp_i18n_["__"])('Get Jetpack', 'woocommerce-admin'),
    installed: Object(external_wp_i18n_["__"])('Activate Jetpack', 'woocommerce-admin'),
    activated: Object(external_wp_i18n_["__"])('Connect Jetpack', 'woocommerce-admin')
  }[jetpackInstallState] || '';
};

var install_jetpack_cta_JetpackCTA = function JetpackCTA(_ref) {
  var onClickInstall = _ref.onClickInstall,
      onClickDismiss = _ref.onClickDismiss,
      isBusy = _ref.isBusy,
      jetpackInstallState = _ref.jetpackInstallState;
  return Object(external_wp_element_["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], null, Object(external_wp_i18n_["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])("footer", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    onClick: function onClick() {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_install_jetpack');
      onClickInstall();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, install_jetpack_cta_getJetpackInstallText(jetpackInstallState)), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    onClick: function onClick() {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_dismiss_install_jetpack');
      onClickDismiss();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, Object(external_wp_i18n_["__"])('No thanks', 'woocommerce-admin'))));
};
var install_jetpack_cta_InstallJetpackCTA = function InstallJetpackCTA() {
  var _useUser = Object(external_wc_data_["useUser"])(),
      currentUserCan = _useUser.currentUserCan;

  var _useUserPreferences = Object(external_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["PLUGINS_STORE_NAME"]),
        getPluginInstallState = _select.getPluginInstallState,
        isPluginsRequesting = _select.isPluginsRequesting;

    var installState = getPluginInstallState('jetpack');
    var busyState = isPluginsRequesting('getJetpackConnectUrl') || isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins');
    return {
      isBusy: busyState,
      jetpackInstallState: installState,
      canUserInstallPlugins: currentUserCan('install_plugins')
    };
  }),
      canUserInstallPlugins = _useSelect.canUserInstallPlugins,
      jetpackInstallState = _useSelect.jetpackInstallState,
      isBusy = _useSelect.isBusy;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]),
      installJetpackAndConnect = _useDispatch.installJetpackAndConnect;

  if (!canUserInstallPlugins) {
    return null;
  }

  var onClickInstall = function onClickInstall() {
    installJetpackAndConnect(actions_createErrorNotice, wc_admin_settings["f" /* getAdminLink */]);
  };

  return Object(external_wp_element_["createElement"])(install_jetpack_cta_JetpackCTA, {
    jetpackInstallState: jetpackInstallState,
    isBusy: isBusy,
    onClickInstall: onClickInstall,
    onClickDismiss: function onClickDismiss() {
      var homepageStats = userPrefs.homepage_stats || {};
      homepageStats.installJetpackDismissed = true;
      updateUserPreferences({
        homepage_stats: homepageStats
      });
    }
  });
};
// CONCATENATED MODULE: ./client/homescreen/stats-overview/index.js








/**
 * External dependencies
 */












/**
 * Internal dependencies
 */






var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('dataEndpoints', {
  performanceIndicators: []
}),
    performanceIndicators = _getSetting.performanceIndicators;

var stats_overview_stats = performanceIndicators.filter(function (indicator) {
  return DEFAULT_STATS.includes(indicator.stat);
});
var stats_overview_StatsOverview = function StatsOverview() {
  var _useUserPreferences = Object(external_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var hiddenStats = Object(external_lodash_["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], DEFAULT_HIDDEN_STATS);
  var jetPackIsConnected = Object(external_wp_data_["useSelect"])(function (select) {
    return select(external_wc_data_["PLUGINS_STORE_NAME"]).isJetpackConnected();
  }, []);
  var homePageStats = userPrefs.homepage_stats || {};
  var userDismissedJetpackInstall = homePageStats.installJetpackDismissed;

  var toggleStat = function toggleStat(stat) {
    var nextHiddenStats = Object(external_lodash_["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  var activeStats = stats_overview_stats.filter(function (item) {
    return !hiddenStats.includes(item.stat);
  });
  var HeaderText = Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small"
  }, Object(external_wp_i18n_["__"])('Stats overview', 'woocommerce-admin'));
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wc_explat_["Experiment"], {
    name: "woocommerce_test_experiment",
    defaultExperience: HeaderText,
    treatmentExperience: HeaderText,
    loadingExperience: HeaderText
  }), Object(external_wp_element_["createElement"])(external_wc_components_["EllipsisMenu"], {
    label: Object(external_wp_i18n_["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["MenuTitle"], null, Object(external_wp_i18n_["__"])('Display stats:', 'woocommerce-admin')), stats_overview_stats.map(function (item) {
        var checked = !hiddenStats.includes(item.stat);
        return Object(external_wp_element_["createElement"])(external_wc_components_["MenuItem"], {
          checked: checked,
          isCheckbox: true,
          isClickable: true,
          key: item.stat,
          onInvoke: function onInvoke() {
            return toggleStat(item.stat);
          }
        }, item.label);
      }));
    }
  })), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wp_components_["TabPanel"], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: function onSelect(period) {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_date_picker_update', {
        period: period
      });
    },
    tabs: [{
      title: Object(external_wp_i18n_["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(external_wp_i18n_["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(external_wp_i18n_["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, function (tab) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !jetPackIsConnected && !userDismissedJetpackInstall && Object(external_wp_element_["createElement"])(install_jetpack_cta_InstallJetpackCTA, null), Object(external_wp_element_["createElement"])(stats_list, {
      query: {
        period: tab.name,
        compare: 'previous_period'
      },
      stats: activeStats
    }));
  })), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(external_wc_navigation_["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: function onClick() {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(external_wp_i18n_["__"])('View detailed stats', 'woocommerce-admin'))));
};
/* harmony default export */ var stats_overview = (stats_overview_StatsOverview);
// EXTERNAL MODULE: ./client/store-management-links/index.js + 2 modules
var store_management_links = __webpack_require__(682);

// EXTERNAL MODULE: ./client/task-list/style.scss
var task_list_style = __webpack_require__(679);

// CONCATENATED MODULE: ./client/task-list/placeholder.js





/**
 * Internal dependencies
 */


var placeholder_TaskListPlaceholder = function TaskListPlaceholder(props) {
  var _props$numTasks = props.numTasks,
      numTasks = _props$numTasks === void 0 ? 5 : _props$numTasks;
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map(function (v, i) {
    return Object(external_wp_element_["createElement"])("div", {
      key: i,
      className: "woocommerce-list__item has-action"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-before"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-text"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-title"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-after"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))));
  })))));
};

/* harmony default export */ var placeholder = (placeholder_TaskListPlaceholder);
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/line-chart.js


/**
 * External dependencies
 */

var line_chart_LineChartIllustration = function LineChartIllustration() {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M125.85 217.924l-1.055-.321c-34.868-10.598-101.138-36.619-95.91-101.998 7.156-89.462 89.192-28.933 194.231-87.715 161.485-90.37 242.851-42.249 253.957 78.717 10.842 118.101-82.942 115.494-138.938 123.306-118.486 16.529-165.516 2.231-212.285-11.989z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M125 33h267v185H125z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M327.367 93.974a6.417 6.417 0 00-6.285 7.671 6.418 6.418 0 005.035 5.044 6.405 6.405 0 006.579-2.73 6.427 6.427 0 00-.797-8.105 6.404 6.404 0 00-4.532-1.88zm0 11.615a5.18 5.18 0 01-3.668-1.522 5.2 5.2 0 01-1.23-5.38 5.196 5.196 0 014.168-3.447 5.18 5.18 0 014.967 2.137 5.201 5.201 0 01-1.546 7.453 5.186 5.186 0 01-2.706.75l.015.009z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M329.332 103.181l.806-.811a.354.354 0 00.078-.391.365.365 0 00-.078-.116l-1.456-1.461 1.456-1.458a.363.363 0 00.105-.254.36.36 0 00-.105-.254l-.806-.81a.354.354 0 00-.254-.106.356.356 0 00-.255.106l-1.456 1.458-1.456-1.458a.35.35 0 00-.253-.105.355.355 0 00-.253.105l-.809.826a.362.362 0 00-.078.39.363.363 0 00.078.117l1.456 1.458-1.456 1.461a.369.369 0 00-.105.254.356.356 0 00.105.254l.809.81a.354.354 0 00.39.078.354.354 0 00.116-.078l1.456-1.461 1.456 1.461a.366.366 0 00.509-.015zM314.559 145.63a6.413 6.413 0 00-2.722-4.13 6.429 6.429 0 00-4.883-.957l-.192.046c-.346.08-.684.191-1.01.33a6.437 6.437 0 00-3.892 5.926 6.433 6.433 0 003.907 5.916l.183.074a6.402 6.402 0 007.999-2.997 6.423 6.423 0 00.735-3.001 6.196 6.196 0 00-.125-1.207zm-1.184 1.978a.028.028 0 010 .018v.058a5.213 5.213 0 01-.913 2.181 5.191 5.191 0 01-4.068 2.146 5.162 5.162 0 01-3.445-1.2 5.2 5.2 0 01.693-8.443 4.936 4.936 0 011.026-.464l.192-.058a5.176 5.176 0 014.527.859 5.201 5.201 0 012.058 4.129 4.906 4.906 0 01-.07.774z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M310.223 149.613l.808-.81a.349.349 0 00.078-.116.348.348 0 000-.275.353.353 0 00-.078-.117l-1.455-1.458 1.455-1.458a.36.36 0 00.079-.393.36.36 0 00-.079-.117l-.808-.807a.362.362 0 00-.391-.078.349.349 0 00-.116.078l-1.455 1.464-1.465-1.464a.366.366 0 00-.254-.106.36.36 0 00-.253.106l-.809.807a.358.358 0 00-.078.393.358.358 0 00.078.117l1.459 1.458-1.459 1.458a.356.356 0 00-.078.392.382.382 0 00.078.116l.809.81a.365.365 0 00.253.106.366.366 0 00.254-.106l1.458-1.458 1.456 1.458a.353.353 0 00.513 0zM295.605 51.781l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm-3.628-4.619a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.403 6.403 0 00-4.531-1.88zm0 11.616a5.186 5.186 0 01-4.793-3.208 5.2 5.2 0 011.124-5.663 5.186 5.186 0 015.654-1.126 5.204 5.204 0 011.685 8.476 5.17 5.17 0 01-3.67 1.515v.006zm3.628-6.99l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zM306.96 98.595l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm-3.628-4.621a6.417 6.417 0 00-6.285 7.671 6.412 6.412 0 005.035 5.044 6.401 6.401 0 006.578-2.73 6.42 6.42 0 00-.797-8.105 6.4 6.4 0 00-4.531-1.88zm0 11.615a5.18 5.18 0 01-4.793-3.208 5.201 5.201 0 013.781-7.085 5.179 5.179 0 015.326 2.21c.57.854.874 1.86.874 2.887a5.202 5.202 0 01-1.516 3.677 5.178 5.178 0 01-3.672 1.516v.003zm3.628-6.99l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zM287.774 145.407l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm-3.628-4.622a6.416 6.416 0 00-6.285 7.671 6.414 6.414 0 005.035 5.044 6.393 6.393 0 003.702-.365 6.418 6.418 0 003.957-5.931 6.43 6.43 0 00-1.877-4.539 6.403 6.403 0 00-4.532-1.88zm0 11.616a5.181 5.181 0 01-2.882-.876 5.2 5.2 0 011.87-9.418 5.186 5.186 0 015.326 2.21c.57.855.874 1.859.874 2.887a5.191 5.191 0 01-1.515 3.678 5.163 5.163 0 01-3.673 1.516v.003zm3.628-6.991l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zM349.568 75.187l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm-3.628-4.619a6.402 6.402 0 00-4.17 1.5 6.422 6.422 0 00-1.386 8.21 6.415 6.415 0 003.447 2.79 6.4 6.4 0 004.477-.092c.317-.126.624-.278.915-.456a6.418 6.418 0 002.93-7.236 6.422 6.422 0 00-2.309-3.413 6.4 6.4 0 00-3.904-1.303zm2.273 11.087a5.056 5.056 0 01-.665.272 5.213 5.213 0 01-3.406-.067 5.197 5.197 0 01-1.681-8.731 5.182 5.182 0 018.501 2.56 5.195 5.195 0 01-2.749 5.966zm1.355-6.468l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M268.92 47H150.08c-3.358 0-6.08 2.91-6.08 6.5s2.722 6.5 6.08 6.5h118.84c3.358 0 6.08-2.91 6.08-6.5s-2.722-6.5-6.08-6.5z",
    opacity: ".6"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 71H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M279.927 94H150.073c-3.354 0-6.073 2.91-6.073 6.5s2.719 6.5 6.073 6.5h129.854c3.354 0 6.073-2.91 6.073-6.5s-2.719-6.5-6.073-6.5z",
    opacity: ".6"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 118H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M261.916 141H150.084c-3.36 0-6.084 2.686-6.084 6s2.724 6 6.084 6h111.832c3.36 0 6.084-2.686 6.084-6s-2.724-6-6.084-6z",
    opacity: ".1"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M316.161 47.162a6.4 6.4 0 00-5.92 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.404 6.404 0 00-4.532-1.88zm0 11.616a5.18 5.18 0 01-2.882-.876 5.198 5.198 0 011.87-9.417 5.181 5.181 0 015.326 2.21c.57.854.874 1.859.874 2.887a5.195 5.195 0 01-3.201 4.8c-.63.26-1.305.392-1.987.39v.006z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M318.127 56.366l.808-.807a.35.35 0 00.078-.117.346.346 0 000-.276.35.35 0 00-.078-.117l-1.458-1.458 1.455-1.458a.35.35 0 00.078-.117.346.346 0 000-.277.35.35 0 00-.078-.117l-.808-.807a.364.364 0 00-.254-.105.358.358 0 00-.253.105l-1.456 1.458-1.455-1.458a.361.361 0 00-.51 0l-.806.807a.365.365 0 00-.107.255.365.365 0 00.107.256l1.456 1.458-1.453 1.455a.365.365 0 00-.079.394.381.381 0 00.079.116l.806.807a.353.353 0 00.255.106.363.363 0 00.255-.106l1.455-1.458 1.456 1.458a.352.352 0 00.253.107.356.356 0 00.254-.104zM369.966 70.568a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.995 6.404 6.404 0 0010.94-4.539 6.403 6.403 0 00-3.953-5.935 6.383 6.383 0 00-2.455-.484zm0 11.616a5.179 5.179 0 01-3.17-1.076 5.203 5.203 0 01-1.621-6.136 5.187 5.187 0 015.512-3.13 5.186 5.186 0 012.985 1.519 5.2 5.2 0 01-1.158 8.146 5.18 5.18 0 01-2.548.674v.003z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M371.925 79.772l.808-.807a.363.363 0 000-.51l-1.458-1.459 1.458-1.458a.348.348 0 00.078-.116.343.343 0 000-.275.346.346 0 00-.078-.116l-.808-.81a.358.358 0 00-.507 0l-1.452 1.458-1.456-1.458a.358.358 0 00-.507 0l-.808.81a.36.36 0 00-.078.391.348.348 0 00.078.116l1.455 1.458-1.455 1.458a.364.364 0 000 .51l.808.808a.35.35 0 00.507 0l1.456-1.458 1.458 1.458a.358.358 0 00.501 0z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M344 94h90v80h-90z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M364.607 150.419H357v25.307h7.607v-25.307zM379.317 132h-7.607v43.455h7.607V132zM394.026 136h-7.607v61.603h7.607V136zM408.736 123h-7.607v55.726h7.607V123zM423.445 132.197h-7.607v38.342h7.607v-38.342z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M356.331 134l-.331-.495 15.486-21.052 13.65 14.005 11.039-17.456 4.84 5.868 13.168-11.268 14.625 14.021L451.763 99l.237.594-23.213 18.833-14.619-14.015-13.201 11.297-4.748-5.756-11.014 17.418-13.677-14.031L356.331 134z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/page-content/index.js


/**
 * External dependencies
 */

var page_content_PageContent = function PageContent(_ref) {
  var title = _ref.title,
      body = _ref.body;
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce__welcome-modal__page-content"
  }, Object(external_wp_element_["createElement"])("h2", {
    className: "woocommerce__welcome-modal__page-content__header"
  }, title), Object(external_wp_element_["createElement"])("p", {
    className: "woocommerce__welcome-modal__page-content__body"
  }, body));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-from-calypso-modal/style.scss
var welcome_from_calypso_modal_style = __webpack_require__(704);

// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/welcome-from-calypso-modal.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




var page = {
  image: Object(external_wp_element_["createElement"])(line_chart_LineChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_wp_i18n_["__"])('Welcome to your new store management experience', 'woocommerce-admin'),
    body: lib_default()({
      mixedString: Object(external_wp_i18n_["__"])("We've designed your navigation and home screen to help you focus on the things that matter most in managing your online store. {{link}}Learn more{{/link}} about these changes – or explore on your own.", 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/",
          type: "external",
          target: "_blank"
        })
      }
    })
  })
};
function WelcomeFromCalypsoModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      guideIsOpen = _useState2[0],
      setGuideIsOpen = _useState2[1];

  Object(external_wp_element_["useEffect"])(function () {
    Object(external_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_open');
  }, []);

  if (!guideIsOpen) {
    return null;
  }

  var guideClassNames = classnames_default()('woocommerce__welcome-modal', 'woocommerce__welcome-from-calypso-modal');
  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    onFinish: function onFinish() {
      if (onClose) {
        onClose();
      }

      setGuideIsOpen(false);
      Object(external_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_close');
    },
    className: guideClassNames,
    finishButtonText: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: [page]
  });
}
// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/index.js

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/inbox.js


/**
 * External dependencies
 */

var inbox_InboxIllustration = function InboxIllustration() {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M33.576 185.926c-6.271-.911-14.742-.279-17.182 7.085-1.239 3.736-.178 7.645.98 11.08 4.89 14.682 11.49 28.444 19.643 40.954 3.897 5.965 8.253 11.884 9.592 19.504 1.34 7.619-.56 16.084-2.934 23.945-5.595 18.62-13.762 36.371-24.188 52.572 16.006 9.711 34.165 19.634 52.684 12.57 11.09-4.232 21.041-14.268 32.365-15.961 7.562-1.132 14.735 1.648 21.594 4.467a998.376 998.376 0 0195.343 45.227c13.023 7.042 26.207 14.481 40.901 16.153 14.694 1.672 31.486-3.518 41.947-17.66 1.611-2.179 3.241-4.669 5.483-5.546 2.02-.776 4.069-.045 5.952.688l113.896 44.033c6.241 2.411 12.718 4.853 19.534 3.832 6.606-.985 12.833-5.095 18.858-9.148 13.771-9.237 29.242-21.105 32.239-39.005 2.407-14.347-4.339-27.253-11.974-37.283-7.636-10.03-16.705-19.204-20.353-32.315-5.549-19.955 2.798-42.949 9.281-64.164a405.4 405.4 0 0013.244-58.574c2.588-17.377 4.004-35.179.91-51.659-3.095-16.481-11.265-31.624-24.089-38.27-16.746-8.681-38.828-2.057-54.255-13.347-13.04-9.513-17.58-29.035-25.856-44.316-14.698-27.146-41.453-40.923-67.958-50.405-28.1-10.066-58.213-16.679-88.607-10-6.962 1.527-14.047 3.833-20.152 8.649-9.36 7.388-15.196 19.616-22.986 29.33C156.104 57.468 100.341 49.156 68.22 87.48c-11.398 13.594-17.581 31.878-18.797 49.831-1.31 19.318 8.69 33.652 8.706 50.888-7.135 2.277-17.21-1.211-24.553-2.273z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M113 33h267v185H113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 73.79h-114.69V47.88h114.69V73.79zm-114.015-.673h113.341V48.554H134.451v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 56.63h-12.818v12.786h12.818V56.63z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 67.733h-13.493V54.274h13.493v13.46zm-12.819-.673h12.144V54.947h-12.144V67.06z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 56.966h-50v.673h50v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 61.677h-60.044v.673h60.044v-.673z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 66.387h-50v.673h50v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 147.142h-114.69v-25.909h114.69v25.909zm-114.015-.673h113.341v-24.563H134.451v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 129.981h-12.818v12.786h12.818v-12.786z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 141.085h-13.493v-13.459h13.493v13.459zm-12.819-.673h12.144v-12.113h-12.144v12.113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 130.318h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 135.028h-50v.673h50v-.673z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M215.267 139.739h-40v.673h40v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M289.62 110.465H174.93V84.557h114.69v25.908zm-114.016-.672h113.341V85.23H175.604v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M267.694 106.092h12.818V93.305h-12.818v12.787z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282.873 104.409H269.38V90.95h13.493v13.459zm-12.818-.673h12.144V91.623h-12.144v12.113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.129 93.642h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M238.085 98.353h-50v.672h50v-.672z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M243.085 103.063h-55v.673h55v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M266.035 66.154a5.363 5.363 0 005.369-5.356 5.363 5.363 0 00-5.369-5.356c-2.966 0-5.37 2.398-5.37 5.356 0 2.958 2.404 5.356 5.37 5.356zM273.793 140.515c2.966 0 5.37-2.398 5.37-5.356 0-2.958-2.404-5.356-5.37-5.356a5.363 5.363 0 00-5.369 5.356 5.363 5.363 0 005.369 5.356zM153.706 102.83a5.363 5.363 0 005.37-5.356c0-2.959-2.404-5.357-5.37-5.357s-5.37 2.398-5.37 5.357a5.363 5.363 0 005.37 5.356z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M401.276 172h-70.552a8.79 8.79 0 01-6.169-2.517 8.532 8.532 0 01-2.555-6.078V131.56a3.368 3.368 0 011.078-2.471l37.386-34.915A8.113 8.113 0 01366 92c2.06 0 4.041.778 5.536 2.174l35.645 33.289a8.882 8.882 0 012.084 2.944 8.78 8.78 0 01.735 3.515v29.483c0 2.28-.919 4.466-2.555 6.078a8.79 8.79 0 01-6.169 2.517z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F0F0F0",
    d: "M393.267 106h-54.534c-2.614 0-4.733 2.053-4.733 4.585v52.83c0 2.532 2.119 4.585 4.733 4.585h54.534c2.614 0 4.733-2.053 4.733-4.585v-52.83c0-2.532-2.119-4.585-4.733-4.585z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M366 150.493l-41.579-20.323a1.667 1.667 0 00-1.631.091 1.695 1.695 0 00-.579.619 1.725 1.725 0 00-.211.826v34.967a5.345 5.345 0 001.543 3.767 5.261 5.261 0 003.725 1.56h77.464a5.261 5.261 0 003.725-1.56 5.345 5.345 0 001.543-3.767v-34.368c0-.352-.088-.699-.257-1.008a2.069 2.069 0 00-1.688-1.071 2.035 2.035 0 00-1.009.205L366 150.493zM390 118h-48v2h48v-2zM390 124h-48v2h48v-2z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M384 130h-42v2h42v-2z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M335 112a7 7 0 100-14 7 7 0 000 14z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M336 98a8.003 8.003 0 00-7.391 4.939 7.992 7.992 0 00-.455 4.622 7.993 7.993 0 006.285 6.285A8 8 0 00344 106a8.022 8.022 0 00-8-8zm-1.642 12.265l-4.1-4.1 1.15-1.15 2.954 2.954 6.234-6.234 1.15 1.15-7.388 7.38z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/pie-chart.js


/**
 * External dependencies
 */

var pie_chart_PieChartIllustration = function PieChartIllustration() {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M30.501 63.74c7.21-10.372 19.533-17.051 31.735-22.399l2.057-.888c12.774-5.469 25.944-10.008 39.27-14.127 7.129-2.21 14.285-4.313 21.448-6.389l5.615-1.62c7.29-2.106 14.596-4.21 21.916-6.315a6165.97 6165.97 0 0121.511-6.139 3346.684 3346.684 0 0127.597-7.677 2189.847 2189.847 0 0121.603-5.782c9.237-2.42 18.491-4.764 27.761-7.035 7.246-1.77 14.502-3.483 21.767-5.14a1152.381 1152.381 0 0128.025-6 940.985 940.985 0 0119.106-3.654l2.908-.52c27.416-4.852 55.724-8.222 82.193-2.775l.715.151c.355.074.71.148 1.067.23a87.181 87.181 0 0114.309 4.404c8.282 3.398 15.644 8.247 20.596 14.967 7.763 10.54 8.624 24.398 6.126 37.281-2.498 12.884-8.007 25.346-12.299 37.974-1.257 3.7-2.378 7.49-3.34 11.33-5.997 24.068-5.398 49.993 11.766 67.323a93.715 93.715 0 007.029 6.227c3.928 3.218 7.905 6.424 11.03 10.3 7.28 9.017 9.211 20.756 10.296 32.099 1.425 15.086 1.236 31.775-9.516 44.175-11.153 12.875-30.519 17.317-48.211 18.232-27.498 1.457-54.442-3.316-81.339-6.956-26.898-3.641-54.739-6.141-81.787-.263a121.18 121.18 0 00-17.082 5.062 108.9 108.9 0 00-21.21 10.677c-9.622 6.318-17.826 14.22-23.006 23.613-11.123 20.092-39.488 28.645-62.664 24.15-22.115-4.288-39.921-20.774-44.019-40.738-4.538-22.229 6.615-44.308 16.332-66.515a358.83 358.83 0 003.437-8.081 238.988 238.988 0 001.795-4.513 165.185 165.185 0 002.828-7.947c4.39-13.591 6.016-28.984-2.295-40.321-4.658-6.347-11.477-10.355-19.238-13.393-17.388-6.801-39.481-8.722-52.38-21.167C22.84 94.854 21.359 76.92 30.502 63.74z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M124 33h267v185H124z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M169 152.005V229a734.947 734.947 0 01-15.628-.991l-2.372-.181v-75.823c0-.395.072-.785.212-1.15.14-.365.345-.696.604-.975.258-.279.565-.5.903-.651a2.61 2.61 0 011.066-.229h12.43c.366 0 .728.078 1.066.229.338.151.645.372.903.651.259.279.464.61.604.975.14.365.212.755.212 1.15z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M186 229.733V127.377c0-.63.31-1.235.861-1.681.551-.446 1.299-.696 2.079-.696h13.12c.386 0 .768.061 1.125.181.357.119.681.294.954.515.273.221.489.483.637.771.148.289.224.598.224.91V230l-19-.267z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225 230.002v-97.406a2.843 2.843 0 012.843-2.845h12.689a2.844 2.844 0 012.844 2.845v97.196l-18.376.21z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282 88.368v140.224c-6 .145-12 .281-18 .408V88.368c0-.628.293-1.23.816-1.674.522-.445 1.231-.694 1.969-.694h12.43c.738 0 1.447.25 1.969.694.523.444.816 1.046.816 1.674z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M319 112.954v115.709c-6 .12-12 .232-18 .337V112.954c0-.518.293-1.015.816-1.382.522-.366 1.231-.572 1.969-.572h12.43c.738 0 1.447.206 1.969.572.523.367.816.864.816 1.382z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    stroke: "#CCC",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M160.125 133.501l41.91-46.767 41.91 23.545 41.91-72.248 41.909 34.511"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M160 139.005c2.761 0 5-2.24 5-5.003a5.002 5.002 0 00-5-5.002c-2.761 0-5 2.24-5 5.002a5.002 5.002 0 005 5.003zM201.5 93.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00201.5 78c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM243.784 119.31c4.985 0 9.026-4.043 9.026-9.031s-4.041-9.031-9.026-9.031c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM286.027 46.062c4.985 0 9.027-4.043 9.027-9.031S291.012 28 286.027 28c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM327.5 80.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00327.5 65c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM408 137l-36 2-18-30.926c5.588-3.326 12.033-5.083 18.606-5.074C392.154 103 408 118.222 408 137zM351.107 110l-.143.088c-7.887 4.836-13.573 12.518-15.859 21.429a35.211 35.211 0 003.603 26.338l.084.145L370 140.317 351.107 110zm-12.19 47.543a34.886 34.886 0 01-3.485-25.944c2.25-8.77 7.826-16.342 15.566-21.138l18.531 29.738-30.612 17.344zM408.664 138.651l-35.891 2.797 10.3 32.297.162-.046c7.808-2.265 14.585-6.957 19.211-13.301 4.626-6.344 6.824-13.96 6.23-21.588l-.012-.159zm-35.447 3.081l35.134-2.738c1.116 15.348-9.387 29.753-25.051 34.355l-10.083-31.617zM370.719 142.639l-30.714 17.335.088.131c3.977 5.942 9.926 10.554 16.982 13.165 7.056 2.61 14.849 3.083 22.245 1.349l.164-.038-8.765-31.942zm-30.249 17.435l30.034-16.951 8.57 31.234c-7.278 1.673-14.935 1.192-21.871-1.374-6.936-2.566-12.794-7.086-16.733-12.909z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M423 97h-17v-1h17v1zM423 101h-17v-3h17v3zM416 104h-17.979l-.05.068L384 122.821l.28.179 13.92-18.685H416V104z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-modal/style.scss
var welcome_modal_style = __webpack_require__(705);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/index.js



/**
 * External dependencies
 */




/**
 * Internal dependencies
 */






var pages = [{
  image: Object(external_wp_element_["createElement"])(line_chart_LineChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_wp_i18n_["__"])('Welcome to your WooCommerce store’s online HQ!', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])("Here's where you’ll find setup suggestions, tips and tools, and key data on your store’s performance and earnings — all the basics for store management and growth.", 'woocommerce-admin')
  })
}, {
  image: Object(external_wp_element_["createElement"])(inbox_InboxIllustration, null),
  content: Object(external_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_wp_i18n_["__"])('A personalized inbox full of relevant advice', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])('Check your inbox for helpful growth tips tailored to your store and notifications about key traffic and sales milestones. We look forward to celebrating them with you!', 'woocommerce-admin')
  })
}, {
  image: Object(external_wp_element_["createElement"])(pie_chart_PieChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_wp_i18n_["__"])('Good data leads to smart business decisions', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])('Monitor your stats to improve performance, increase sales, and track your progress toward revenue goals. The more you know, the better you can serve your customers and grow your store.', 'woocommerce-admin')
  })
}];
var welcome_modal_WelcomeModal = function WelcomeModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      guideIsOpen = _useState2[0],
      setGuideIsOpen = _useState2[1];

  Object(external_wp_element_["useEffect"])(function () {
    Object(external_wc_tracks_["recordEvent"])('task_list_welcome_modal_open');
  }, []);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, guideIsOpen && Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    onFinish: function onFinish() {
      setGuideIsOpen(false);
      onClose();
      Object(external_wc_tracks_["recordEvent"])('task_list_welcome_modal_close');
    },
    className: 'woocommerce__welcome-modal',
    finishButtonText: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: pages
  }));
};
// EXTERNAL MODULE: ./client/homescreen/style.scss
var homescreen_style = __webpack_require__(706);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var dashboard_style = __webpack_require__(654);

// CONCATENATED MODULE: ./client/homescreen/layout.js












/**
 * External dependencies
 */







/**
 * Internal dependencies
 */














var TaskList = Object(external_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | task-list */[__webpack_require__.e(6), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, 761));
});
var layout_Layout = function Layout(_ref) {
  var defaultHomescreenLayout = _ref.defaultHomescreenLayout,
      isBatchUpdating = _ref.isBatchUpdating,
      query = _ref.query,
      requestingTaskList = _ref.requestingTaskList,
      taskListComplete = _ref.taskListComplete,
      bothTaskListsHidden = _ref.bothTaskListsHidden,
      shouldShowWelcomeModal = _ref.shouldShowWelcomeModal,
      shouldShowWelcomeFromCalypsoModal = _ref.shouldShowWelcomeFromCalypsoModal,
      isTaskListHidden = _ref.isTaskListHidden,
      updateOptions = _ref.updateOptions;
  var userPrefs = Object(external_wc_data_["useUserPreferences"])();
  var twoColumns = (userPrefs.homepage_layout || defaultHomescreenLayout) === 'two_columns';

  var _useState = Object(external_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      showInbox = _useState2[0],
      setShowInbox = _useState2[1];

  var isTaskListEnabled = bothTaskListsHidden === false;
  var isDashboardShown = !query.task;

  if (isBatchUpdating && !showInbox) {
    setShowInbox(true);
  }

  var isWideViewport = Object(external_wp_element_["useRef"])(true);
  var maybeToggleColumns = Object(external_wp_element_["useCallback"])(function () {
    isWideViewport.current = window.innerWidth >= 782;
  }, []);
  Object(external_wp_element_["useLayoutEffect"])(function () {
    maybeToggleColumns();
    window.addEventListener('resize', maybeToggleColumns);
    return function () {
      window.removeEventListener('resize', maybeToggleColumns);
    };
  }, [maybeToggleColumns]);
  var shouldStickColumns = isWideViewport.current && twoColumns;
  var shouldShowStoreLinks = taskListComplete || isTaskListHidden;

  var renderColumns = function renderColumns() {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(column_Column, {
      shouldStick: shouldStickColumns
    }, Object(external_wp_element_["createElement"])(activity_header["a" /* default */], {
      className: "your-store-today",
      title: Object(external_wp_i18n_["__"])('Your store today', 'woocommerce-admin'),
      subtitle: Object(external_wp_i18n_["__"])("To do's, tips, and insights for your business", 'woocommerce-admin')
    }), Object(external_wp_element_["createElement"])(activity_panel_ActivityPanel, null), isTaskListEnabled && renderTaskList(), Object(external_wp_element_["createElement"])(inbox_panel["default"], null)), Object(external_wp_element_["createElement"])(column_Column, {
      shouldStick: shouldStickColumns
    }, Object(external_wp_element_["createElement"])(stats_overview, null), shouldShowStoreLinks && Object(external_wp_element_["createElement"])(store_management_links["a" /* StoreManagementLinks */], null)));
  };

  var renderTaskList = function renderTaskList() {
    if (requestingTaskList) {
      return Object(external_wp_element_["createElement"])(placeholder, null);
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Suspense"], {
      fallback: Object(external_wp_element_["createElement"])(placeholder, null)
    }, Object(external_wp_element_["createElement"])(TaskList, {
      query: query,
      userPreferences: userPrefs
    }));
  };

  return Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-homescreen', {
      'two-columns': twoColumns
    })
  }, isDashboardShown ? renderColumns() : renderTaskList(), shouldShowWelcomeModal && Object(external_wp_element_["createElement"])(welcome_modal_WelcomeModal, {
    onClose: function onClose() {
      updateOptions(defineProperty_default()({}, WELCOME_MODAL_DISMISSED_OPTION_NAME, 'yes'));
    }
  }), shouldShowWelcomeFromCalypsoModal && Object(external_wp_element_["createElement"])(WelcomeFromCalypsoModal, {
    onClose: function onClose() {
      updateOptions(defineProperty_default()({}, WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME, 'yes'));
    }
  }), window.wcAdminFeatures.navigation && Object(external_wp_element_["createElement"])(intro_modal_IntroModal, null));
};
layout_Layout.propTypes = {
  /**
   * If the task list option is being fetched.
   */
  requestingTaskList: prop_types_default.a.bool.isRequired,

  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types_default.a.bool,

  /**
   * If the task list is hidden.
   */
  bothTaskListsHidden: prop_types_default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * If the welcome modal should display
   */
  shouldShowWelcomeModal: prop_types_default.a.bool,

  /**
   * If the welcome from Calypso modal should display.
   */
  shouldShowWelcomeFromCalypsoModal: prop_types_default.a.bool,

  /**
   * Dispatch an action to update an option
   */
  updateOptions: prop_types_default.a.func.isRequired
};
/* harmony default export */ var layout = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["NOTES_STORE_NAME"]),
      isNotesRequesting = _select.isNotesRequesting;

  var _select2 = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isResolving = _select2.isResolving,
      hasFinishedResolution = _select2.hasFinishedResolution;

  var welcomeFromCalypsoModalDismissed = getOption(WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME) === 'yes';
  var welcomeFromCalypsoModalDismissedResolved = hasFinishedResolution('getOption', [WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME]);
  var fromCalypsoUrlArgIsPresent = !!window.location.search.match('from-calypso');
  var shouldShowWelcomeFromCalypsoModal = welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed && fromCalypsoUrlArgIsPresent;
  var welcomeModalDismissed = getOption(WELCOME_MODAL_DISMISSED_OPTION_NAME) === 'yes';
  var welcomeModalDismissedHasResolved = hasFinishedResolution('getOption', [WELCOME_MODAL_DISMISSED_OPTION_NAME]);
  var shouldShowWelcomeModal = welcomeModalDismissedHasResolved && !welcomeModalDismissed && welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed;
  var defaultHomescreenLayout = getOption('woocommerce_default_homepage_layout') || 'single_column';
  var isTaskListHidden = getOption('woocommerce_task_list_hidden') === 'yes';
  return {
    defaultHomescreenLayout: defaultHomescreenLayout,
    isBatchUpdating: isNotesRequesting('batchUpdateNotes'),
    shouldShowWelcomeModal: shouldShowWelcomeModal,
    shouldShowWelcomeFromCalypsoModal: shouldShowWelcomeFromCalypsoModal,
    isTaskListHidden: isTaskListHidden,
    bothTaskListsHidden: isTaskListHidden && getOption('woocommerce_extended_task_list_hidden') === 'yes',
    requestingTaskList: isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden']) || isResolving('getOption', ['woocommerce_extended_task_list_hidden']),
    taskListComplete: !isResolving('getOption', ['woocommerce_task_list_complete']) && getOption('woocommerce_task_list_complete') === 'yes'
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    updateOptions: dispatch(external_wc_data_["OPTIONS_STORE_NAME"]).updateOptions
  };
}))(layout_Layout));
// CONCATENATED MODULE: ./client/homescreen/index.tsx


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


var homescreen_Homescreen = function Homescreen(_ref) {
  var profileItems = _ref.profileItems,
      query = _ref.query;

  var _ref2 = profileItems || {},
      profilerCompleted = _ref2.completed,
      profilerSkipped = _ref2.skipped;

  if (!profilerCompleted && !profilerSkipped) {
    Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
  }

  return Object(external_wp_element_["createElement"])(layout, {
    query: query
  });
};

var onboardingData = Object(wc_admin_settings["g" /* getSetting */])('onboarding', {});

var homescreen_withSelectHandler = function withSelectHandler(select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
};

/* harmony default export */ var homescreen = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(onboardingData.profile || onboardingData.tasksStatus ? Object(external_wc_data_["withOnboardingHydration"])({
  profileItems: onboardingData.profile,
  tasksStatus: onboardingData.tasksStatus
}) : external_lodash_["identity"], Object(external_wp_data_["withSelect"])(homescreen_withSelectHandler))(homescreen_Homescreen));

/***/ })

}]);