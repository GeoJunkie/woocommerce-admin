(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[52],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(25);
var global = __webpack_require__(8);
var has = __webpack_require__(22);
var isObject = __webpack_require__(23);
var defineProperty = __webpack_require__(27).f;
var copyConstructorProperties = __webpack_require__(108);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(26);
var toAbsoluteIndex = __webpack_require__(102);
var toInteger = __webpack_require__(52);
var toLength = __webpack_require__(43);
var toObject = __webpack_require__(49);
var arraySpeciesCreate = __webpack_require__(153);
var createProperty = __webpack_require__(119);
var arrayMethodHasSpeciesSupport = __webpack_require__(128);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(255);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * External dependencies
 */


/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string} url with in-app-purchase query parameters
 */

var getInAppPurchaseUrl = function getInAppPurchaseUrl(url) {
  var queryArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search;
  var connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('connectNonce', '');
  queryArgs = _objectSpread({
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('wcVersion'),
    'wccom-connect-nonce': connectNonce
  }, queryArgs);
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(26);
var $trim = __webpack_require__(285).trim;
var forcedStringTrimMethod = __webpack_require__(640);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var whitespaces = __webpack_require__(286);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(26);
var $findIndex = __webpack_require__(114).findIndex;
var addToUnscopables = __webpack_require__(118);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(26);
var $entries = __webpack_require__(443).entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupListOfObjectsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAllPropsToValue; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(655);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_8__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * Returns an object with items grouped by the sent key.
 *
 * @param {Array} array array of objects.
 * @param {string} key the object prop that will be used to group elements.
 * @param {string} defaultKey if the key is not found in the object, it will use this value.
 * @return {Object} Object that contains the grouped elements.
 */
var groupListOfObjectsBy = function groupListOfObjectsBy(array, key) {
  var defaultKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';

  if (array && Array.isArray(array) && array.length) {
    if (!key) {
      return array;
    }

    return array.reduce(function (result, currentValue) {
      if (!currentValue[key]) {
        currentValue[key] = defaultKey;
      }

      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  }

  return {};
};
/**
 * Returns a (shallow) copy of an object with all its props set to the specified value
 *
 * @param {*} obj the Object to copy.
 * @param {*} value the value to set all props on the object to.
 */

var setAllPropsToValue = function setAllPropsToValue(obj, value) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_ref, 1),
        key = _ref2[0];

    return _objectSpread(_objectSpread({}, acc), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, key, value));
  }, {});
};

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(639);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(281);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(261);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(258);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(158);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(111);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__);













/**
 * External dependencies
 */







var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getSetting */ "g"])('dataEndpoints', {
  countries: {}
}),
    countries = _getSetting.countries;
/**
 * Form validation.
 *
 * @param {Object} values Keyed values of all fields in the form.
 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
 */


function validateStoreAddress(values) {
  var errors = {};

  if (!values.addressLine1.trim().length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.trim().length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.trim().length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.trim().length) {
    errors.postCode = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Please add a post code', 'woocommerce-admin');
  }

  return errors;
}
/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */

function getCountryStateOptions() {
  var countryStateOptions = countries.reduce(function (acc, country) {
    if (!country.states.length) {
      acc.push({
        key: country.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__["decodeEntities"])(country.name)
      });
      return acc;
    }

    var countryStates = country.states.map(function (state) {
      return {
        key: country.code + ':' + state.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__["decodeEntities"])(country.name) + ' — ' + Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__["decodeEntities"])(state.name)
      };
    });
    acc.push.apply(acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(countryStates));
    return acc;
  }, []);
  return countryStateOptions;
}
/**
 * Get the autofill countryState fields and set value from filtered options.
 *
 * @param {Array} options Array of filterable options.
 * @param {string} countryState The value of the countryState field.
 * @param {Function} setValue Set value of the countryState input.
 * @return {Object} React component.
 */

function useGetCountryStateAutofill(options, countryState, setValue) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      autofillCountry = _useState2[0],
      setAutofillCountry = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      autofillState = _useState4[0],
      setAutofillState = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var filteredOptions = [];
    var countrySearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_14__["escapeRegExp"])(autofillCountry), 'i');

    if (autofillState.length || autofillCountry.length) {
      filteredOptions = options.filter(function (option) {
        return countrySearch.test(option.label);
      });
    }

    if (autofillCountry.length && autofillState.length) {
      var stateSearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_14__["escapeRegExp"])(autofillState.replace(/\s/g, '')), 'i');
      filteredOptions = filteredOptions.filter(function (option) {
        return stateSearch.test(option.label.replace('-', '').replace(/\s/g, ''));
      });

      if (filteredOptions.length > 1) {
        var countryKeyOptions = [];
        countryKeyOptions = filteredOptions.filter(function (option) {
          return countrySearch.test(option.key);
        });

        if (countryKeyOptions.length > 0) {
          filteredOptions = countryKeyOptions;
        }
      }

      if (filteredOptions.length > 1) {
        var stateKeyOptions = [];
        stateKeyOptions = filteredOptions.filter(function (option) {
          return stateSearch.test(option.key);
        });

        if (stateKeyOptions.length === 1) {
          filteredOptions = stateKeyOptions;
        }
      }
    }

    if (filteredOptions.length === 1 && countryState !== filteredOptions[0].key) {
      setValue('countryState', filteredOptions[0].key);
    }
  }, [autofillCountry, autofillState, countryState, options, setValue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillCountry(event.target.value);
    },
    value: autofillCountry,
    name: "country",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "country"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillState(event.target.value);
    },
    value: autofillState,
    name: "state",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "address-level1"
  }));
}
/**
 * Store address fields.
 *
 * @param {Object} props Props for input components.
 * @return {Object} -
 */

function StoreAddress(props) {
  var getInputProps = props.getInputProps,
      setValue = props.setValue;
  var countryStateOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getCountryStateOptions();
  }, []);
  var countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(26);
var getOwnPropertyDescriptor = __webpack_require__(45).f;
var toLength = __webpack_require__(43);
var notARegExp = __webpack_require__(290);
var requireObjectCoercible = __webpack_require__(40);
var correctIsRegExpLogic = __webpack_require__(291);
var IS_PURE = __webpack_require__(59);

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TaskDashboard", function() { return /* binding */ task_list_TaskDashboard; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(204);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js


/**
 * WordPress dependencies
 */

var check = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ var library_check = (check);
//# sourceMappingURL=check.js.map
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./client/task-list/style.scss
var style = __webpack_require__(679);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(257);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(99);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(111);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(220);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(649);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(332);

// CONCATENATED MODULE: ./client/dashboard/components/cart-modal.js












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var cart_modal_CartModal = /*#__PURE__*/function (_Component) {
  inherits_default()(CartModal, _Component);

  var _super = _createSuper(CartModal);

  function CartModal(props) {
    var _this;

    classCallCheck_default()(this, CartModal);

    _this = _super.call(this, props);
    _this.state = {
      purchaseNowButtonBusy: false,
      purchaseLaterButtonBusy: false
    };
    return _this;
  }

  createClass_default()(CartModal, [{
    key: "onClickPurchaseNow",
    value: function onClickPurchaseNow() {
      var _this$props = this.props,
          productIds = _this$props.productIds,
          onClickPurchaseNow = _this$props.onClickPurchaseNow;
      this.setState({
        purchaseNowButtonBusy: true
      });

      if (!productIds.length) {
        return;
      }

      Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: true
      });
      var url = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])('https://woocommerce.com/cart', {
        'wccom-replace-with': productIds.join(',')
      });

      if (onClickPurchaseNow) {
        onClickPurchaseNow(url);
        return;
      }

      window.location = url;
    }
  }, {
    key: "onClickPurchaseLater",
    value: function onClickPurchaseLater() {
      var productIds = this.props.productIds;
      Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: false
      });
      this.setState({
        purchaseLaterButtonBusy: true
      });
      this.props.onClickPurchaseLater();
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          productIds = _this$props2.productIds;
      Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: false
      });
      onClose();
    }
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var productIds = this.props.productIds;

      var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('onboarding', {}),
          _getSetting$productTy = _getSetting.productTypes,
          productTypes = _getSetting$productTy === void 0 ? {} : _getSetting$productTy,
          _getSetting$themes = _getSetting.themes,
          themes = _getSetting$themes === void 0 ? [] : _getSetting$themes;

      var listItems = [];
      productIds.forEach(function (productId) {
        var productInfo = Object(external_lodash_["find"])(productTypes, function (productType) {
          return productType.product === productId;
        });

        if (productInfo) {
          listItems.push({
            title: productInfo.label,
            content: productInfo.description
          });
        }

        var themeInfo = Object(external_lodash_["find"])(themes, function (theme) {
          return theme.id === productId;
        });

        if (themeInfo) {
          listItems.push({
            title: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s — %s per year', 'woocommerce-admin'), themeInfo.title, Object(external_wp_htmlEntities_["decodeEntities"])(themeInfo.price)),
            content: Object(external_wp_element_["createElement"])("span", {
              dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(themeInfo.excerpt)
            })
          });
        }
      });
      return Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
        items: listItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          purchaseNowButtonBusy = _this$state.purchaseNowButtonBusy,
          purchaseLaterButtonBusy = _this$state.purchaseLaterButtonBusy;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
        title: Object(external_wp_i18n_["__"])('Would you like to add the following paid features to your store now?', 'woocommerce-admin'),
        onRequestClose: function onRequestClose() {
          return _this2.onClose();
        },
        className: "woocommerce-cart-modal"
      }, this.renderProducts(), Object(external_wp_element_["createElement"])("p", {
        className: "woocommerce-cart-modal__help-text"
      }, Object(external_wp_i18n_["__"])("You won't have access to this functionality until the extensions have been purchased and installed.", 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-cart-modal__actions"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isLink: true,
        isBusy: purchaseLaterButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseLater();
        }
      }, Object(external_wp_i18n_["__"])("I'll do it later", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: purchaseNowButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseNow();
        }
      }, Object(external_wp_i18n_["__"])('Buy now', 'woocommerce-admin'))));
    }
  }]);

  return CartModal;
}(external_wp_element_["Component"]);

/* harmony default export */ var cart_modal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getInstalledPlugins = _select.getInstalledPlugins;

  var _select2 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select2.getProfileItems;

  var profileItems = getProfileItems();
  var installedPlugins = getInstalledPlugins();
  var productIds = Object(utils["e" /* getProductIdsForCart */])(profileItems, false, installedPlugins);
  return {
    profileItems: profileItems,
    productIds: productIds
  };
}))(cart_modal_CartModal));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(67);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(157);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(101);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(28);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(48);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./client/task-list/tasks/appearance.js


















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appearance_createSuper(Derived) { var hasNativeReflectConstruct = appearance_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function appearance_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */

var appearance_Appearance = /*#__PURE__*/function (_Component) {
  inherits_default()(Appearance, _Component);

  var _super = appearance_createSuper(Appearance);

  function Appearance(props) {
    var _this;

    classCallCheck_default()(this, Appearance);

    _this = _super.call(this, props);
    var _props$tasksStatus = props.tasksStatus,
        hasHomepage = _props$tasksStatus.hasHomepage,
        hasProducts = _props$tasksStatus.hasProducts;
    _this.stepVisibility = {
      homepage: !hasHomepage,
      import: !hasProducts
    };
    _this.state = {
      isDirty: false,
      isPending: false,
      logo: null,
      stepIndex: 0,
      isUpdatingLogo: false,
      isUpdatingNotice: false,
      storeNoticeText: props.demoStoreNotice || ''
    };
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    _this.createHomepage = _this.createHomepage.bind(assertThisInitialized_default()(_this));
    _this.importProducts = _this.importProducts.bind(assertThisInitialized_default()(_this));
    _this.updateLogo = _this.updateLogo.bind(assertThisInitialized_default()(_this));
    _this.updateNotice = _this.updateNotice.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Appearance, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var themeMods = this.props.tasksStatus.themeMods;

      if (themeMods && themeMods.custom_logo) {
        /* eslint-disable react/no-did-mount-set-state */
        this.setState({
          logo: {
            id: themeMods.custom_logo
          }
        });
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$state = this.state,
          isPending = _this$state.isPending,
          logo = _this$state.logo;
      var demoStoreNotice = this.props.demoStoreNotice;

      if (logo && !logo.url && !isPending) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          isPending: true
        });
        wp.media.attachment(logo.id).fetch().then(function () {
          var logoUrl = wp.media.attachment(logo.id).get('url');

          _this2.setState({
            isPending: false,
            logo: {
              id: logo.id,
              url: logoUrl
            }
          });
        });
        /* eslint-enable react/no-did-update-set-state */
      }

      if (demoStoreNotice && prevProps.demoStoreNotice !== demoStoreNotice) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          storeNoticeText: demoStoreNotice
        });
        /* eslint-enable react/no-did-update-set-state */
      }
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var stepIndex = this.state.stepIndex;
      var nextStep = this.getSteps()[stepIndex + 1];

      if (nextStep) {
        this.setState({
          stepIndex: stepIndex + 1
        });
      } else {
        Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
      }
    }
  }, {
    key: "importProducts",
    value: function importProducts() {
      var _this3 = this;

      var _this$props = this.props,
          clearTaskStatusCache = _this$props.clearTaskStatusCache,
          createNotice = _this$props.createNotice;
      this.setState({
        isPending: true
      });
      Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_import_demo', {});
      external_wp_apiFetch_default()({
        path: "".concat(external_wc_data_["WC_ADMIN_NAMESPACE"], "/onboarding/tasks/import_sample_products"),
        method: 'POST'
      }).then(function (result) {
        if (result.failed && result.failed.length) {
          createNotice('error', Object(external_wp_i18n_["__"])('There was an error importing some of the sample products', 'woocommerce-admin'));
        } else {
          createNotice('success', Object(external_wp_i18n_["__"])('All sample products have been imported', 'woocommerce-admin'));
          clearTaskStatusCache();
        }

        _this3.setState({
          isPending: false
        });

        _this3.completeStep();
      }).catch(function (error) {
        createNotice('error', error.message);

        _this3.setState({
          isPending: false
        });
      });
    }
  }, {
    key: "createHomepage",
    value: function createHomepage() {
      var _this4 = this;

      var _this$props2 = this.props,
          clearTaskStatusCache = _this$props2.clearTaskStatusCache,
          createNotice = _this$props2.createNotice;
      this.setState({
        isPending: true
      });
      Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
        create_homepage: true
      });
      external_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/tasks/create_homepage',
        method: 'POST'
      }).then(function (response) {
        clearTaskStatusCache();
        createNotice(response.status, response.message, {
          actions: response.edit_post_link ? [{
            label: Object(external_wp_i18n_["__"])('Customize', 'woocommerce-admin'),
            onClick: function onClick() {
              Object(external_wc_tracks_["queueRecordEvent"])('tasklist_appearance_customize_homepage', {});
              window.location = "".concat(response.edit_post_link, "&wc_onboarding_active_task=homepage");
            }
          }] : null
        });

        _this4.setState({
          isPending: false
        });

        _this4.completeStep();
      }).catch(function (error) {
        createNotice('error', error.message);

        _this4.setState({
          isPending: false
        });
      });
    }
  }, {
    key: "updateLogo",
    value: function () {
      var _updateLogo = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this$props3, clearTaskStatusCache, createNotice, stylesheet, themeMods, updateOptions, logo, updatedThemeMods, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props3 = this.props, clearTaskStatusCache = _this$props3.clearTaskStatusCache, createNotice = _this$props3.createNotice, stylesheet = _this$props3.stylesheet, themeMods = _this$props3.themeMods, updateOptions = _this$props3.updateOptions;
                logo = this.state.logo;
                updatedThemeMods = _objectSpread(_objectSpread({}, themeMods), {}, {
                  custom_logo: logo ? logo.id : null
                });
                Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_upload_logo');
                this.setState({
                  isUpdatingLogo: true
                });
                _context.next = 7;
                return updateOptions(defineProperty_default()({}, "theme_mods_".concat(stylesheet), updatedThemeMods));

              case 7:
                update = _context.sent;
                clearTaskStatusCache();

                if (update.success) {
                  this.setState({
                    isUpdatingLogo: false
                  });
                  createNotice('success', Object(external_wp_i18n_["__"])('Store logo updated sucessfully', 'woocommerce-admin'));
                  this.completeStep();
                } else {
                  createNotice('error', update.message);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateLogo() {
        return _updateLogo.apply(this, arguments);
      }

      return updateLogo;
    }()
  }, {
    key: "updateNotice",
    value: function () {
      var _updateNotice = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2() {
        var _this$props4, clearTaskStatusCache, createNotice, updateOptions, storeNoticeText, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props4 = this.props, clearTaskStatusCache = _this$props4.clearTaskStatusCache, createNotice = _this$props4.createNotice, updateOptions = _this$props4.updateOptions;
                storeNoticeText = this.state.storeNoticeText;
                Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_set_store_notice', {
                  added_text: Boolean(storeNoticeText.length)
                });
                this.setState({
                  isUpdatingNotice: true
                });
                _context2.next = 6;
                return updateOptions({
                  woocommerce_task_list_appearance_complete: true,
                  woocommerce_demo_store: storeNoticeText.length ? 'yes' : 'no',
                  woocommerce_demo_store_notice: storeNoticeText
                });

              case 6:
                update = _context2.sent;
                clearTaskStatusCache();

                if (update.success) {
                  this.setState({
                    isUpdatingNotice: false
                  });
                  createNotice('success', Object(external_wp_i18n_["__"])("🎨 Your store is looking great! Don't forget to continue personalizing it", 'woocommerce-admin'));
                  this.completeStep();
                } else {
                  createNotice('error', update.message);
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateNotice() {
        return _updateNotice.apply(this, arguments);
      }

      return updateNotice;
    }()
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this5 = this;

      var _this$state2 = this.state,
          isDirty = _this$state2.isDirty,
          isPending = _this$state2.isPending,
          logo = _this$state2.logo,
          storeNoticeText = _this$state2.storeNoticeText,
          isUpdatingLogo = _this$state2.isUpdatingLogo;
      var steps = [{
        key: 'import',
        label: Object(external_wp_i18n_["__"])('Import sample products', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('We’ll add some products that will make it easier to see what your store looks like', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          onClick: this.importProducts,
          isBusy: isPending,
          isPrimary: true
        }, Object(external_wp_i18n_["__"])('Import products', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          onClick: function onClick() {
            return _this5.completeStep();
          }
        }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: this.stepVisibility.import
      }, {
        key: 'homepage',
        label: Object(external_wp_i18n_["__"])('Create a custom homepage', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Create a new homepage and customize it to suit your needs', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          isBusy: isPending,
          onClick: this.createHomepage
        }, Object(external_wp_i18n_["__"])('Create homepage', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isTertiary: true,
          onClick: function onClick() {
            Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
              create_homepage: false
            });

            _this5.completeStep();
          }
        }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: this.stepVisibility.homepage
      }, {
        key: 'logo',
        label: Object(external_wp_i18n_["__"])('Upload a logo', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Ensure your store is on-brand by adding your logo', 'woocommerce-admin'),
        content: isPending ? null : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["ImageUpload"], {
          image: logo,
          onChange: function onChange(image) {
            return _this5.setState({
              isDirty: true,
              logo: image
            });
          }
        }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          disabled: !logo && !isDirty,
          onClick: this.updateLogo,
          isBusy: isUpdatingLogo,
          isPrimary: true
        }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isTertiary: true,
          onClick: function onClick() {
            return _this5.completeStep();
          }
        }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: true
      }, {
        key: 'notice',
        label: Object(external_wp_i18n_["__"])('Set a store notice', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Optionally display a prominent notice across all pages of your store', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], {
          label: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
          placeholder: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
          value: storeNoticeText,
          onChange: function onChange(value) {
            return _this5.setState({
              storeNoticeText: value
            });
          }
        }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          onClick: this.updateNotice,
          isPrimary: true
        }, Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'))),
        visible: true
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          isPending = _this$state3.isPending,
          stepIndex = _this$state3.stepIndex,
          isUpdatingLogo = _this$state3.isUpdatingLogo,
          isUpdatingNotice = _this$state3.isUpdatingNotice;
      var currentStep = this.getSteps()[stepIndex].key;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-appearance"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        isPending: isUpdatingNotice || isUpdatingLogo || isPending,
        isVertical: true,
        currentStep: currentStep,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Appearance;
}(external_wp_element_["Component"]);

/* harmony default export */ var appearance = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption;

  var _select2 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getTasksStatus = _select2.getTasksStatus;

  var tasksStatus = getTasksStatus();
  return {
    demoStoreNotice: getOption('woocommerce_demo_store_notice'),
    stylesheet: getOption('stylesheet'),
    tasksStatus: tasksStatus
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch3.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    },
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(appearance_Appearance));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(30);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/template-part-sidebar.js


/**
 * WordPress dependencies
 */

var templatePartSidebar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var template_part_sidebar = (templatePartSidebar);
//# sourceMappingURL=template-part-sidebar.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(675);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle.js


/**
 * WordPress dependencies
 */

var plusCircle = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ var plus_circle = (plusCircle);
//# sourceMappingURL=plus-circle.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);
//# sourceMappingURL=archive.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/download.js


/**
 * WordPress dependencies
 */

var download = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ var library_download = (download);
//# sourceMappingURL=download.js.map
// EXTERNAL MODULE: ./client/task-list/tasks/products/product-template-modal.scss
var product_template_modal = __webpack_require__(732);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(643);

// CONCATENATED MODULE: ./client/task-list/tasks/products/product-template-modal.js




/**
 * External dependencies
 */








/**
 * Internal dependencies
 */



var ONBOARDING_PRODUCT_TEMPLATES_FILTER = 'woocommerce_admin_onboarding_product_templates';
var PRODUCT_TEMPLATES = [{
  key: 'physical',
  title: Object(external_wp_i18n_["__"])('Physical product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Tangible items that get delivered to customers', 'woocommerce-admin')
}, {
  key: 'digital',
  title: Object(external_wp_i18n_["__"])('Digital product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Items that customers download or access through your website', 'woocommerce-admin')
}, {
  key: 'variable',
  title: Object(external_wp_i18n_["__"])('Variable product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Products with several versions that customers can choose from', 'woocommerce-admin')
}];
function ProductTemplateModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_wp_element_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectedTemplate = _useState2[0],
      setSelectedTemplate = _useState2[1];

  var _useState3 = Object(external_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isRedirecting = _useState4[0],
      setIsRedirecting = _useState4[1];

  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wc_data_["ITEMS_STORE_NAME"]),
      createProductFromTemplate = _useDispatch.createProductFromTemplate;

  var createTemplate = function createTemplate() {
    setIsRedirecting(true);
    Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_selection', {
      product_type: selectedTemplate
    });

    if (selectedTemplate) {
      createProductFromTemplate({
        template_name: selectedTemplate,
        status: 'draft'
      }, {
        _fields: ['id']
      }).then(function (data) {
        if (data && data.id) {
          var link = Object(wc_admin_settings["f" /* getAdminLink */])("post.php?post=".concat(data.id, "&action=edit&wc_onboarding_active_task=products&tutorial=true"));
          window.location = link;
        }
      }, function (error) {
        // failed creating product with template
        Object(notices["a" /* createNoticesFromResponse */])(error);
        setIsRedirecting(false);
      });
    } else if (onClose) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_dismiss');
      onClose();
    }
  };

  var templates = Object(external_wp_hooks_["applyFilters"])(ONBOARDING_PRODUCT_TEMPLATES_FILTER, PRODUCT_TEMPLATES);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: Object(external_wp_i18n_["__"])('Start with a template'),
    isDismissible: true,
    onRequestClose: function onRequestClose() {
      return onClose();
    },
    className: "woocommerce-product-template-modal"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__wrapper"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__list"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["RadioControl"], {
    selected: selectedTemplate,
    options: templates.map(function (item) {
      return {
        label: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-title"
        }, item.title), Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-subtitle"
        }, item.subtitle)),
        value: item.key
      };
    }),
    onChange: setSelectedTemplate
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__actions"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    isBusy: isRedirecting,
    disabled: !selectedTemplate || isRedirecting,
    onClick: createTemplate
  }, Object(external_wp_i18n_["__"])('Go')))));
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/products.js




function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


var subTasks = [{
  key: 'addProductTemplate',
  title: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Start with a template', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))),
  content: Object(external_wp_i18n_["__"])('Use a template to add physical, digital, and variable products', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: template_part_sidebar
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'product_template'
    });
  }
}, {
  key: 'addProductManually',
  title: Object(external_wp_i18n_["__"])('Add manually', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For small stores we recommend adding products manually', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: plus_circle
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'manually'
    });
  },
  href: Object(wc_admin_settings["f" /* getAdminLink */])('post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true')
}, {
  key: 'importProducts',
  title: Object(external_wp_i18n_["__"])('Import via CSV', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For larger stores we recommend importing all products at once via CSV file', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_archive
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'import'
    });
  },
  href: Object(wc_admin_settings["f" /* getAdminLink */])('edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=product-import')
}, {
  key: 'migrateProducts',
  title: Object(external_wp_i18n_["__"])('Import from another service', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For stores currently selling elsewhere we suggest using a product migration service', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_download
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'migrate'
    });
  },
  // @todo This should be replaced with the in-app purchase iframe when ready.
  href: 'https://woocommerce.com/products/cart2cart/',
  target: '_blank'
}];
function Products() {
  var _useState = Object(external_wp_element_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectTemplate = _useState2[0],
      setSelectTemplate = _useState2[1];

  var onTaskClick = function onTaskClick(task) {
    task.onClick();

    if (task.key === 'addProductTemplate') {
      setSelectTemplate(true);
    }
  };

  var listItems = subTasks.map(function (task) {
    return products_objectSpread(products_objectSpread({}, task), {}, {
      onClick: function onClick() {
        return onTaskClick(task);
      }
    });
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    size: null
  }, Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
    items: listItems
  }))), selectTemplate ? Object(external_wp_element_["createElement"])(ProductTemplateModal, {
    onClose: function onClose() {
      return setSelectTemplate(null);
    }
  }) : null);
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(39);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(651);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(51);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/dashboard/components/connect/index.js











function connect_createSuper(Derived) { var hasNativeReflectConstruct = connect_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function connect_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







var connect_Connect = /*#__PURE__*/function (_Component) {
  inherits_default()(Connect, _Component);

  var _super = connect_createSuper(Connect);

  function Connect(props) {
    var _this;

    classCallCheck_default()(this, Connect);

    _this = _super.call(this, props);
    _this.state = {
      isConnecting: false
    };
    _this.connectJetpack = _this.connectJetpack.bind(assertThisInitialized_default()(_this));
    props.setIsPending(true);
    return _this;
  }

  createClass_default()(Connect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          error = _this$props.error,
          isRequesting = _this$props.isRequesting,
          onError = _this$props.onError,
          setIsPending = _this$props.setIsPending;

      if (prevProps.isRequesting && !isRequesting) {
        setIsPending(false);
      }

      if (error && error !== prevProps.error) {
        if (onError) {
          onError();
        }

        createNotice('error', error);
      }
    }
  }, {
    key: "connectJetpack",
    value: function () {
      var _connectJetpack = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this$props2, jetpackConnectUrl, onConnect;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, jetpackConnectUrl = _this$props2.jetpackConnectUrl, onConnect = _this$props2.onConnect;
                this.setState({
                  isConnecting: true
                }, function () {
                  if (onConnect) {
                    onConnect();
                  }

                  window.location = jetpackConnectUrl;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectJetpack() {
        return _connectJetpack.apply(this, arguments);
      }

      return connectJetpack;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          hasErrors = _this$props3.hasErrors,
          isRequesting = _this$props3.isRequesting,
          onSkip = _this$props3.onSkip,
          skipText = _this$props3.skipText,
          onAbort = _this$props3.onAbort,
          abortText = _this$props3.abortText;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, hasErrors ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: function onClick() {
          return window.location.reload();
        }
      }, Object(external_wp_i18n_["__"])('Retry', 'woocommerce-admin')) : Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isRequesting,
        isBusy: this.state.isConnecting,
        isPrimary: true,
        onClick: this.connectJetpack
      }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')), onSkip && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: onSkip
      }, skipText || Object(external_wp_i18n_["__"])('No thanks', 'woocommerce-admin')), onAbort && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: onAbort
      }, abortText || Object(external_wp_i18n_["__"])('Abort', 'woocommerce-admin')));
    }
  }]);

  return Connect;
}(external_wp_element_["Component"]);
connect_Connect.propTypes = {
  /**
   * Method to create a displayed notice.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Human readable error message.
   */
  error: prop_types_default.a.string,

  /**
   * Bool to determine if the "Retry" button should be displayed.
   */
  hasErrors: prop_types_default.a.bool,

  /**
   * Bool to check if the connection URL is still being requested.
   */
  isRequesting: prop_types_default.a.bool,

  /**
   * Generated Jetpack connection URL.
   */
  jetpackConnectUrl: prop_types_default.a.string,

  /**
   * Called before the redirect to Jetpack.
   */
  onConnect: prop_types_default.a.func,

  /**
   * Called when the plugin has an error retrieving the jetpackConnectUrl.
   */
  onError: prop_types_default.a.func,

  /**
   * Called when the plugin connection is skipped.
   */
  onSkip: prop_types_default.a.func,

  /**
   * Redirect URL to encode as a URL param for the connection path.
   */
  redirectUrl: prop_types_default.a.string,

  /**
   * Text used for the skip connection button.
   */
  skipText: prop_types_default.a.string,

  /**
   * Control the `isPending` logic of the parent containing the Stepper.
   */
  setIsPending: prop_types_default.a.func,

  /**
   * Called when the plugin connection is aborted.
   */
  onAbort: prop_types_default.a.func,

  /**
   * Text used for the abort connection button.
   */
  abortText: prop_types_default.a.string
};
connect_Connect.defaultProps = {
  setIsPending: function setIsPending() {}
};
/* harmony default export */ var connect = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, props) {
  var _select = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getJetpackConnectUrl = _select.getJetpackConnectUrl,
      isPluginsRequesting = _select.isPluginsRequesting,
      getPluginsError = _select.getPluginsError;

  var queryArgs = {
    redirect_url: props.redirectUrl || window.location.href
  };
  var isRequesting = isPluginsRequesting('getJetpackConnectUrl');
  var error = getPluginsError('getJetpackConnectUrl') || '';
  var jetpackConnectUrl = getJetpackConnectUrl(queryArgs);
  return {
    error: error,
    isRequesting: isRequesting,
    jetpackConnectUrl: jetpackConnectUrl
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(connect_Connect));
// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(665);

// CONCATENATED MODULE: ./client/task-list/tasks/steps/location.js


















function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { location_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function location_createSuper(Derived) { var hasNativeReflectConstruct = location_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function location_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var location_StoreLocation = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreLocation, _Component);

  var _super = location_createSuper(StoreLocation);

  function StoreLocation() {
    var _this;

    classCallCheck_default()(this, StoreLocation);

    _this = _super.apply(this, arguments);
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StoreLocation, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
        var _this$props, onComplete, createNotice, isSettingsError, updateAndPersistSettingsForGroup, settings;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, onComplete = _this$props.onComplete, createNotice = _this$props.createNotice, isSettingsError = _this$props.isSettingsError, updateAndPersistSettingsForGroup = _this$props.updateAndPersistSettingsForGroup, settings = _this$props.settings;
                _context.next = 3;
                return updateAndPersistSettingsForGroup('general', {
                  general: location_objectSpread(location_objectSpread({}, settings), {}, {
                    woocommerce_store_address: values.addressLine1,
                    woocommerce_store_address_2: values.addressLine2,
                    woocommerce_default_country: values.countryState,
                    woocommerce_store_city: values.city,
                    woocommerce_store_postcode: values.postCode
                  })
                });

              case 3:
                if (!isSettingsError) {
                  onComplete(values);
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your store location', 'woocommerce-admin'));
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getInitialValues",
    value: function getInitialValues() {
      var settings = this.props.settings;
      var storeAddress = settings.woocommerce_store_address,
          storeAddress2 = settings.woocommerce_store_address_2,
          storeCity = settings.woocommerce_store_city,
          defaultCountry = settings.woocommerce_default_country,
          storePostcode = settings.woocommerce_store_postcode;
      return {
        addressLine1: storeAddress || '',
        addressLine2: storeAddress2 || '',
        city: storeCity || '',
        countryState: defaultCountry || '',
        postCode: storePostcode || ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      var isSettingsRequesting = this.props.isSettingsRequesting;

      if (isSettingsRequesting) {
        return null;
      }

      return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
        initialValues: this.getInitialValues(),
        onSubmitCallback: this.onSubmit,
        validate: store_address["b" /* validateStoreAddress */]
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            handleSubmit = _ref.handleSubmit,
            setValue = _ref.setValue;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(store_address["a" /* StoreAddress */], {
          getInputProps: getInputProps,
          setValue: setValue
        }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit
        }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
      });
    }
  }]);

  return StoreLocation;
}(external_wp_element_["Component"]);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(733);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/globe.js


/**
 * WordPress dependencies
 */

var globe = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"
}));
/* harmony default export */ var library_globe = (globe);
//# sourceMappingURL=globe.js.map
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(636);

// CONCATENATED MODULE: ./client/task-list/tasks/shipping/rates.js






















function rates_createSuper(Derived) { var hasNativeReflectConstruct = rates_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function rates_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



var rates_ShippingRates = /*#__PURE__*/function (_Component) {
  inherits_default()(ShippingRates, _Component);

  var _super = rates_createSuper(ShippingRates);

  function ShippingRates() {
    var _this;

    classCallCheck_default()(this, ShippingRates);

    _this = _super.apply(this, arguments);
    _this.updateShippingZones = _this.updateShippingZones.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ShippingRates, [{
    key: "getShippingMethods",
    value: function getShippingMethods(zone) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Sometimes the wc/v3/shipping/zones response does not include a methods attribute, return early if so.
      if (!zone || !zone.methods || !Array.isArray(zone.methods)) {
        return [];
      }

      if (!type) {
        return zone.methods;
      }

      return zone.methods ? zone.methods.filter(function (method) {
        return method.method_id === type;
      }) : [];
    }
  }, {
    key: "disableShippingMethods",
    value: function disableShippingMethods(zone, methods) {
      if (!methods.length) {
        return;
      }

      methods.forEach(function (method) {
        external_wp_apiFetch_default()({
          method: 'POST',
          path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods/").concat(method.instance_id),
          data: {
            enabled: false
          }
        });
      });
    }
  }, {
    key: "updateShippingZones",
    value: function () {
      var _updateShippingZones = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
        var _this2 = this;

        var _this$props, clearTaskStatusCache, createNotice, shippingZones, restOfTheWorld, shippingCost;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, clearTaskStatusCache = _this$props.clearTaskStatusCache, createNotice = _this$props.createNotice, shippingZones = _this$props.shippingZones;
                restOfTheWorld = false;
                shippingCost = false;
                shippingZones.forEach(function (zone) {
                  if (zone.id === 0) {
                    restOfTheWorld = zone.toggleable && values["".concat(zone.id, "_enabled")];
                  } else {
                    shippingCost = values["".concat(zone.id, "_rate")] !== '' && parseFloat(values["".concat(zone.id, "_rate")]) !== parseFloat(0);
                  }

                  var shippingMethods = _this2.getShippingMethods(zone);

                  var methodType = parseFloat(values["".concat(zone.id, "_rate")]) === parseFloat(0) ? 'free_shipping' : 'flat_rate';
                  var shippingMethod = _this2.getShippingMethods(zone, methodType).length ? _this2.getShippingMethods(zone, methodType)[0] : null;

                  if (zone.toggleable && !values["".concat(zone.id, "_enabled")]) {
                    // Disable any shipping methods that exist if toggled off.
                    _this2.disableShippingMethods(zone, shippingMethods);

                    return;
                  } else if (shippingMethod) {
                    // Disable all methods except the one being updated.
                    var methodsToDisable = shippingMethods.filter(function (method) {
                      return method.instance_id !== shippingMethod.instance_id;
                    });

                    _this2.disableShippingMethods(zone, methodsToDisable);
                  }

                  external_wp_apiFetch_default()({
                    method: 'POST',
                    path: shippingMethod ? // Update the first existing method if one exists, otherwise create a new one.
                    "/wc/v3/shipping/zones/".concat(zone.id, "/methods/").concat(shippingMethod.instance_id) : "/wc/v3/shipping/zones/".concat(zone.id, "/methods"),
                    data: {
                      method_id: methodType,
                      enabled: true,
                      settings: {
                        cost: values["".concat(zone.id, "_rate")]
                      }
                    }
                  });
                });
                Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_costs', {
                  shipping_cost: shippingCost,
                  rest_world: restOfTheWorld
                });
                clearTaskStatusCache();
                createNotice('success', Object(external_wp_i18n_["__"])('Your shipping rates have been updated', 'woocommerce-admin'));
                this.props.onComplete();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateShippingZones(_x) {
        return _updateShippingZones.apply(this, arguments);
      }

      return updateShippingZones;
    }()
  }, {
    key: "renderInputPrefix",
    value: function renderInputPrefix() {
      var _this$context$getCurr = this.context.getCurrencyConfig(),
          symbolPosition = _this$context$getCurr.symbolPosition,
          symbol = _this$context$getCurr.symbol;

      if (symbolPosition.indexOf('right') === 0) {
        return null;
      }

      return Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-prefix"
      }, symbol);
    }
  }, {
    key: "renderInputSuffix",
    value: function renderInputSuffix(rate) {
      var _this$context$getCurr2 = this.context.getCurrencyConfig(),
          symbolPosition = _this$context$getCurr2.symbolPosition,
          symbol = _this$context$getCurr2.symbol;

      if (symbolPosition.indexOf('right') === 0) {
        return Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-shipping-rate__control-suffix"
        }, symbol);
      }

      return parseFloat(rate) === parseFloat(0) ? Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-suffix"
      }, Object(external_wp_i18n_["__"])('Free shipping', 'woocommerce-admin')) : null;
    }
  }, {
    key: "getFormattedRate",
    value: function getFormattedRate(value) {
      var formatDecimalString = this.context.formatDecimalString;
      var currencyString = formatDecimalString(value);

      if (!value.length || !currencyString.length) {
        return formatDecimalString(0);
      }

      return formatDecimalString(value);
    }
  }, {
    key: "getInitialValues",
    value: function getInitialValues() {
      var _this3 = this;

      var formatDecimalString = this.context.formatDecimalString;
      var values = {};
      this.props.shippingZones.forEach(function (zone) {
        var shippingMethods = _this3.getShippingMethods(zone);

        var rate = shippingMethods.length && shippingMethods[0].settings.cost ? _this3.getFormattedRate(shippingMethods[0].settings.cost.value) : formatDecimalString(0);
        values["".concat(zone.id, "_rate")] = rate;

        if (shippingMethods.length && shippingMethods[0].enabled) {
          values["".concat(zone.id, "_enabled")] = true;
        } else {
          values["".concat(zone.id, "_enabled")] = false;
        }
      });
      return values;
    }
  }, {
    key: "validate",
    value: function validate(values) {
      var errors = {};
      var rates = Object.keys(values).filter(function (field) {
        return field.endsWith('_rate');
      });
      rates.forEach(function (rate) {
        if (values[rate] < 0) {
          errors[rate] = Object(external_wp_i18n_["__"])('Shipping rates can not be negative numbers.', 'woocommerce-admin');
        }
      });
      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          buttonText = _this$props2.buttonText,
          shippingZones = _this$props2.shippingZones;

      if (!shippingZones.length) {
        return null;
      }

      return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
        initialValues: this.getInitialValues(),
        onSubmitCallback: this.updateShippingZones,
        validate: this.validate
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            handleSubmit = _ref.handleSubmit,
            setTouched = _ref.setTouched,
            setValue = _ref.setValue,
            values = _ref.values;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-shipping-rates"
        }, shippingZones.map(function (zone) {
          return Object(external_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate",
            key: zone.id
          }, Object(external_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__icon"
          }, zone.locations ? zone.locations.map(function (location) {
            return Object(external_wp_element_["createElement"])(external_wc_components_["Flag"], {
              size: 24,
              code: location.code,
              key: location.code
            });
          }) : // Icon used for zones without locations or "Rest of the world".
          Object(external_wp_element_["createElement"])(icon["a" /* default */], {
            icon: library_globe
          })), Object(external_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__main"
          }, zone.toggleable ? Object(external_wp_element_["createElement"])("label", {
            htmlFor: "woocommerce-shipping-rate__toggle-".concat(zone.id),
            className: "woocommerce-shipping-rate__name"
          }, zone.name, Object(external_wp_element_["createElement"])(external_wp_components_["FormToggle"], extends_default()({
            id: "woocommerce-shipping-rate__toggle-".concat(zone.id)
          }, getInputProps("".concat(zone.id, "_enabled"))))) : Object(external_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__name"
          }, zone.name), (!zone.toggleable || values["".concat(zone.id, "_enabled")]) && Object(external_wp_element_["createElement"])(external_wc_components_["TextControlWithAffixes"], extends_default()({
            label: Object(external_wp_i18n_["__"])('Shipping cost', 'woocommerce-admin'),
            required: true
          }, getInputProps("".concat(zone.id, "_rate")), {
            onBlur: function onBlur() {
              setTouched("".concat(zone.id, "_rate"));
              setValue("".concat(zone.id, "_rate"), _this4.getFormattedRate(values["".concat(zone.id, "_rate")]));
            },
            prefix: _this4.renderInputPrefix(),
            suffix: _this4.renderInputSuffix(values["".concat(zone.id, "_rate")]),
            className: "muriel-input-text woocommerce-shipping-rate__control-wrapper"
          }))));
        })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit
        }, buttonText || Object(external_wp_i18n_["__"])('Update', 'woocommerce-admin')));
      });
    }
  }]);

  return ShippingRates;
}(external_wp_element_["Component"]);

rates_ShippingRates.propTypes = {
  /**
   * Text displayed on the primary button.
   */
  buttonText: prop_types_default.a.string,

  /**
   * Function used to mark the step complete.
   */
  onComplete: prop_types_default.a.func.isRequired,

  /**
   * Function to create a transient notice in the store.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Array of shipping zones returned from the WC REST API with added
   * `methods` and `locations` properties appended from separate API calls.
   */
  shippingZones: prop_types_default.a.array
};
rates_ShippingRates.defaultProps = {
  shippingZones: []
};
rates_ShippingRates.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var shipping_rates = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    }
  };
}))(rates_ShippingRates));
// CONCATENATED MODULE: ./client/task-list/tasks/shipping/index.js























function shipping_createSuper(Derived) { var hasNativeReflectConstruct = shipping_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function shipping_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






var shipping_Shipping = /*#__PURE__*/function (_Component) {
  inherits_default()(Shipping, _Component);

  var _super = shipping_createSuper(Shipping);

  function Shipping(props) {
    var _this;

    classCallCheck_default()(this, Shipping);

    _this = _super.call(this, props);
    _this.initialState = {
      isPending: false,
      step: 'store_location',
      shippingZones: []
    }; // Cache active plugins to prevent removal mid-step.

    _this.activePlugins = props.activePlugins;
    _this.state = _this.initialState;
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Shipping, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(this.initialState);
    }
  }, {
    key: "fetchShippingZones",
    value: function () {
      var _fetchShippingZones = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2() {
        var _this$props, countryCode, countryName, shippingZones, zones, hasCountryZone, zone;

        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  isPending: true
                });
                _this$props = this.props, countryCode = _this$props.countryCode, countryName = _this$props.countryName; // @todo The following fetches for shipping information should be moved into
                // @woocommerce/data to make these methods and states more readily available.

                shippingZones = [];
                _context2.next = 5;
                return external_wp_apiFetch_default()({
                  path: '/wc/v3/shipping/zones'
                });

              case 5:
                zones = _context2.sent;
                hasCountryZone = false;
                _context2.next = 9;
                return Promise.all(zones.map( /*#__PURE__*/function () {
                  var _ref = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(zone) {
                    var countryLocation;
                    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(zone.id === 0)) {
                              _context.next = 8;
                              break;
                            }

                            _context.next = 3;
                            return external_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods")
                            });

                          case 3:
                            zone.methods = _context.sent;
                            zone.name = Object(external_wp_i18n_["__"])('Rest of the world', 'woocommerce-admin');
                            zone.toggleable = true;
                            shippingZones.push(zone);
                            return _context.abrupt("return");

                          case 8:
                            _context.next = 10;
                            return external_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/locations")
                            });

                          case 10:
                            zone.locations = _context.sent;
                            countryLocation = zone.locations.find(function (location) {
                              return countryCode === location.code;
                            });

                            if (!countryLocation) {
                              _context.next = 18;
                              break;
                            }

                            _context.next = 15;
                            return external_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods")
                            });

                          case 15:
                            zone.methods = _context.sent;
                            shippingZones.push(zone);
                            hasCountryZone = true;

                          case 18:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 9:
                if (hasCountryZone) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 12;
                return external_wp_apiFetch_default()({
                  method: 'POST',
                  path: '/wc/v3/shipping/zones',
                  data: {
                    name: countryName
                  }
                });

              case 12:
                zone = _context2.sent;
                _context2.next = 15;
                return external_wp_apiFetch_default()({
                  method: 'POST',
                  path: "/wc/v3/shipping/zones/".concat(zone.id, "/locations"),
                  data: [{
                    code: countryCode,
                    type: 'country'
                  }]
                });

              case 15:
                zone.locations = _context2.sent;
                shippingZones.push(zone);

              case 17:
                shippingZones.reverse();
                this.setState({
                  isPending: false,
                  shippingZones: shippingZones
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchShippingZones() {
        return _fetchShippingZones.apply(this, arguments);
      }

      return fetchShippingZones;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          countryCode = _this$props2.countryCode,
          settings = _this$props2.settings;
      var storeAddress = settings.woocommerce_store_address,
          defaultCountry = settings.woocommerce_default_country,
          storePostCode = settings.woocommerce_store_postcode;
      var step = this.state.step;

      if (step === 'rates' && (prevProps.countryCode !== countryCode || prevState.step !== 'rates')) {
        this.fetchShippingZones();
      }

      var isCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

      if (step === 'store_location' && isCompleteAddress) {
        this.completeStep();
      }
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var createNotice = this.props.createNotice;
      var step = this.state.step;
      var steps = this.getSteps();
      var currentStepIndex = steps.findIndex(function (s) {
        return s.key === step;
      });
      var nextStep = steps[currentStepIndex + 1];

      if (nextStep) {
        this.setState({
          step: nextStep.key
        });
      } else {
        createNotice('success', Object(external_wp_i18n_["__"])("📦 Shipping is done! Don't worry, you can always change it later", 'woocommerce-admin'));
        Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
      }
    }
  }, {
    key: "getPluginsToActivate",
    value: function getPluginsToActivate() {
      var countryCode = this.props.countryCode;
      var plugins = [];

      if (['GB', 'CA', 'AU'].includes(countryCode)) {
        plugins.push('woocommerce-shipstation-integration');
      } else if (countryCode === 'US') {
        plugins.push('woocommerce-services');
        plugins.push('jetpack');
      }

      return Object(external_lodash_["difference"])(plugins, this.activePlugins);
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this2 = this;

      var _this$props3 = this.props,
          countryCode = _this$props3.countryCode,
          isJetpackConnected = _this$props3.isJetpackConnected,
          settings = _this$props3.settings;
      var pluginsToActivate = this.getPluginsToActivate();
      var requiresJetpackConnection = !isJetpackConnected && countryCode === 'US';
      var steps = [{
        key: 'store_location',
        label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_location', {
              country: country
            });

            _this2.completeStep();
          }
        })),
        visible: true
      }, {
        key: 'rates',
        label: Object(external_wp_i18n_["__"])('Set shipping costs', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Define how much customers pay to ship to different destinations', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(shipping_rates, extends_default()({
          buttonText: pluginsToActivate.length || requiresJetpackConnection ? Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'),
          shippingZones: this.state.shippingZones,
          onComplete: this.completeStep
        }, this.props)),
        visible: settings.woocommerce_ship_to_countries === 'disabled' ? false : true
      }, {
        key: 'label_printing',
        label: Object(external_wp_i18n_["__"])('Enable shipping label printing', 'woocommerce-admin'),
        description: pluginsToActivate.includes('woocommerce-shipstation-integration') ? lib_default()({
          mixedString: Object(external_wp_i18n_["__"])('We recommend using ShipStation to save time at the post office by printing your shipping ' + 'labels at home. Try ShipStation free for 30 days. {{link}}Learn more{{/link}}.', 'woocommerce-admin'),
          components: {
            link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
              href: "https://woocommerce.com/products/shipstation-integration",
              target: "_blank",
              type: "external"
            })
          }
        }) : Object(external_wp_i18n_["__"])('With WooCommerce Shipping and Jetpack you can save time at the ' + 'Post Office by printing your shipping labels at home', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], extends_default()({
          onComplete: function onComplete(plugins, response) {
            Object(notices["a" /* createNoticesFromResponse */])(response);
            Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
              install: true,
              plugins_to_activate: pluginsToActivate
            });

            _this2.completeStep();
          },
          onError: function onError(errors, response) {
            return Object(notices["a" /* createNoticesFromResponse */])(response);
          },
          onSkip: function onSkip() {
            Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
              install: false,
              plugins_to_activate: pluginsToActivate
            });
            Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
          },
          pluginSlugs: pluginsToActivate
        }, this.props)),
        visible: pluginsToActivate.length
      }, {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable label printing', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(connect, extends_default()({
          redirectUrl: Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin'),
          completeStep: this.completeStep
        }, this.props, {
          onConnect: function onConnect() {
            Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_connect_store');
          }
        })),
        visible: requiresJetpackConnection
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isPending = _this$state.isPending,
          step = _this$state.step;
      var isUpdateSettingsRequesting = this.props.isUpdateSettingsRequesting;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-shipping"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        isPending: isPending || isUpdateSettingsRequesting,
        isVertical: true,
        currentStep: step,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Shipping;
}(external_wp_element_["Component"]);
/* harmony default export */ var shipping = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select2.getActivePlugins,
      isJetpackConnected = _select2.isJetpackConnected;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      settings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country);

  var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('dataEndpoints', {}),
      _getSetting$countries = _getSetting.countries,
      countries = _getSetting$countries === void 0 ? [] : _getSetting$countries;

  var country = countryCode ? countries.find(function (c) {
    return c.code === countryCode;
  }) : null;
  var countryName = country ? country.name : null;
  var activePlugins = getActivePlugins();
  return {
    countryCode: countryCode,
    countryName: countryName,
    isUpdateSettingsRequesting: isUpdateSettingsRequesting('general'),
    settings: settings,
    activePlugins: activePlugins,
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]),
      updateAndPersistSettingsForGroup = _dispatch2.updateAndPersistSettingsForGroup;

  return {
    createNotice: createNotice,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup
  };
}))(shipping_Shipping));
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(58);

// CONCATENATED MODULE: ./client/task-list/tasks/tax.js



















function tax_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tax_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tax_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tax_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function tax_createSuper(Derived) { var hasNativeReflectConstruct = tax_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function tax_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






var tax_Tax = /*#__PURE__*/function (_Component) {
  inherits_default()(Tax, _Component);

  var _super = tax_createSuper(Tax);

  function Tax(props) {
    var _this;

    classCallCheck_default()(this, Tax);

    _this = _super.call(this, props);
    var hasCompleteAddress = props.hasCompleteAddress,
        pluginsToActivate = props.pluginsToActivate;
    _this.initialState = {
      isPending: false,
      stepIndex: hasCompleteAddress ? 1 : 0,
      // Cache the value of pluginsToActivate so that we can
      // show/hide tasks based on it, but not have them update mid task.
      cachedPluginsToActivate: pluginsToActivate
    };
    _this.state = _this.initialState;
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Tax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(this.initialState);
    }
  }, {
    key: "shouldShowSuccessScreen",
    value: function shouldShowSuccessScreen() {
      var _this$props = this.props,
          isJetpackConnected = _this$props.isJetpackConnected,
          hasCompleteAddress = _this$props.hasCompleteAddress,
          pluginsToActivate = _this$props.pluginsToActivate;
      return hasCompleteAddress && !pluginsToActivate.length && isJetpackConnected && this.isTaxJarSupported();
    }
  }, {
    key: "isTaxJarSupported",
    value: function isTaxJarSupported() {
      var _this$props2 = this.props,
          countryCode = _this$props2.countryCode,
          tasksStatus = _this$props2.tasksStatus;
      var _tasksStatus$automate = tasksStatus.automatedTaxSupportedCountries,
          automatedTaxSupportedCountries = _tasksStatus$automate === void 0 ? [] : _tasksStatus$automate,
          taxJarActivated = tasksStatus.taxJarActivated;
      return !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
      automatedTaxSupportedCountries.includes(countryCode);
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var stepIndex = this.state.stepIndex;
      var steps = this.getSteps();
      var nextStep = steps[stepIndex + 1];

      if (nextStep) {
        this.setState({
          stepIndex: stepIndex + 1
        });
      }
    }
  }, {
    key: "manuallyConfigureTaxRates",
    value: function () {
      var _manuallyConfigureTaxRates = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this2 = this;

        var _this$props3, generalSettings, updateAndPersistSettingsForGroup;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props3 = this.props, generalSettings = _this$props3.generalSettings, updateAndPersistSettingsForGroup = _this$props3.updateAndPersistSettingsForGroup;

                if (generalSettings.woocommerce_calc_taxes !== 'yes') {
                  this.setState({
                    isPending: true
                  });
                  updateAndPersistSettingsForGroup('general', {
                    general: tax_objectSpread(tax_objectSpread({}, generalSettings), {}, {
                      woocommerce_calc_taxes: 'yes'
                    })
                  }).then(function () {
                    return _this2.redirectToTaxSettings();
                  }).catch(function (error) {
                    return Object(notices["a" /* createNoticesFromResponse */])(error);
                  });
                } else {
                  this.redirectToTaxSettings();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function manuallyConfigureTaxRates() {
        return _manuallyConfigureTaxRates.apply(this, arguments);
      }

      return manuallyConfigureTaxRates;
    }()
  }, {
    key: "updateAutomatedTax",
    value: function updateAutomatedTax(isEnabling) {
      var _this3 = this;

      var _this$props4 = this.props,
          clearTaskStatusCache = _this$props4.clearTaskStatusCache,
          createNotice = _this$props4.createNotice,
          updateAndPersistSettingsForGroup = _this$props4.updateAndPersistSettingsForGroup,
          generalSettings = _this$props4.generalSettings,
          taxSettings = _this$props4.taxSettings;
      Promise.all([updateAndPersistSettingsForGroup('tax', {
        tax: tax_objectSpread(tax_objectSpread({}, taxSettings), {}, {
          wc_connect_taxes_enabled: isEnabling ? 'yes' : 'no'
        })
      }), updateAndPersistSettingsForGroup('general', {
        general: tax_objectSpread(tax_objectSpread({}, generalSettings), {}, {
          woocommerce_calc_taxes: 'yes'
        })
      })]).then(function () {
        clearTaskStatusCache();

        if (isEnabling) {
          createNotice('success', Object(external_wp_i18n_["__"])("You're awesome! One less item on your to-do list ✅", 'woocommerce-admin'));
          Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
        } else {
          _this3.redirectToTaxSettings();
        }
      }).catch(function () {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating your tax settings', 'woocommerce-admin'));
      });
    }
  }, {
    key: "redirectToTaxSettings",
    value: function redirectToTaxSettings() {
      window.location = Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax');
    }
  }, {
    key: "doNotChargeSalesTax",
    value: function doNotChargeSalesTax() {
      var updateOptions = this.props.updateOptions;
      Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
        connect: false,
        no_tax: true
      });
      updateOptions({
        woocommerce_no_sales_tax: true,
        woocommerce_calc_taxes: 'no'
      }).then(function () {
        window.location = Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin');
      });
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this4 = this;

      var _this$props5 = this.props,
          generalSettings = _this$props5.generalSettings,
          isJetpackConnected = _this$props5.isJetpackConnected,
          isPending = _this$props5.isPending,
          tosAccepted = _this$props5.tosAccepted,
          updateOptions = _this$props5.updateOptions;
      var cachedPluginsToActivate = this.state.cachedPluginsToActivate;
      var step2Label, agreementText;

      if (cachedPluginsToActivate.includes('woocommerce-services')) {
        step2Label = Object(external_wp_i18n_["__"])('Install Jetpack and WooCommerce Tax', 'woocommerce-admin');
        agreementText = Object(external_wp_i18n_["__"])('By installing Jetpack and WooCommerce Tax you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
      } else {
        step2Label = Object(external_wp_i18n_["__"])('Install Jetpack', 'woocommerce-admin');
        agreementText = Object(external_wp_i18n_["__"])('By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
      }

      var steps = [{
        key: 'store_location',
        label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(external_wc_tracks_["recordEvent"])('tasklist_tax_set_location', {
              country: country
            });

            _this4.completeStep();
          },
          isSettingsRequesting: false,
          settings: generalSettings
        })),
        visible: true
      }, {
        key: 'plugins',
        label: step2Label,
        description: Object(external_wp_i18n_["__"])('Jetpack and WooCommerce Tax allow you to automate sales tax calculations', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
          onComplete: function onComplete(plugins, response) {
            Object(notices["a" /* createNoticesFromResponse */])(response);
            Object(external_wc_tracks_["recordEvent"])('tasklist_tax_install_extensions', {
              install_extensions: true
            });
            updateOptions({
              woocommerce_setup_jetpack_opted_in: true
            });

            _this4.completeStep();
          },
          onError: function onError(errors, response) {
            return Object(notices["a" /* createNoticesFromResponse */])(response);
          },
          onSkip: function onSkip() {
            Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_install_extensions', {
              install_extensions: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_wp_i18n_["__"])('Set up manually', 'woocommerce-admin'),
          onAbort: function onAbort() {
            return _this4.doNotChargeSalesTax();
          },
          abortText: Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')
        }), !tosAccepted && Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
          variant: "caption",
          className: "woocommerce-task__caption"
        }, lib_default()({
          mixedString: agreementText,
          components: {
            link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
              href: 'https://wordpress.com/tos/',
              target: "_blank",
              type: "external"
            })
          }
        }))),
        visible: (cachedPluginsToActivate.length || !tosAccepted) && this.isTaxJarSupported()
      }, {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable automated sales tax calculations', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(connect, extends_default()({}, this.props, {
          onConnect: function onConnect() {
            Object(external_wc_tracks_["recordEvent"])('tasklist_tax_connect_store', {
              connect: true,
              no_tax: false
            });
          },
          onSkip: function onSkip() {
            Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
              connect: false,
              no_tax: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin'),
          onAbort: function onAbort() {
            return _this4.doNotChargeSalesTax();
          },
          abortText: Object(external_wp_i18n_["__"])("My business doesn't charge sales tax", 'woocommerce-admin')
        })),
        visible: !isJetpackConnected && this.isTaxJarSupported()
      }, {
        key: 'manual_configuration',
        label: Object(external_wp_i18n_["__"])('Configure tax rates', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('Head over to the tax rate settings screen to configure your tax rates', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          disabled: isPending,
          isPrimary: true,
          isBusy: isPending,
          onClick: function onClick() {
            Object(external_wc_tracks_["recordEvent"])('tasklist_tax_config_rates');

            _this4.manuallyConfigureTaxRates();
          }
        }, Object(external_wp_i18n_["__"])('Configure', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, generalSettings.woocommerce_calc_taxes !== 'yes' && lib_default()({
          mixedString: Object(external_wp_i18n_["__"])(
          /*eslint-disable max-len*/
          'By clicking "Configure" you\'re enabling tax rates and calculations. More info {{link}}here{{/link}}.',
          /*eslint-enable max-len*/
          'woocommerce-admin'),
          components: {
            link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
              href: "https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/#section-1",
              target: "_blank",
              type: "external"
            })
          }
        }))),
        visible: !this.isTaxJarSupported()
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "renderSuccessScreen",
    value: function renderSuccessScreen() {
      var _this5 = this;

      var isPending = this.props.isPending;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax__success"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-task-tax__success-icon",
        role: "img",
        "aria-labelledby": "woocommerce-task-tax__success-message"
      }, "\uD83C\uDF8A"), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        id: "woocommerce-task-tax__success-message"
      }, Object(external_wp_i18n_["__"])('Good news!', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Tax{{/strong}} ' + 'can automate your sales tax calculations for you.', 'woocommerce-admin'),
        components: {
          strong: Object(external_wp_element_["createElement"])("strong", null)
        }
      })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isPending,
        isPrimary: true,
        isBusy: isPending,
        onClick: function onClick() {
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: true
          });

          _this5.updateAutomatedTax(true);
        }
      }, Object(external_wp_i18n_["__"])('Yes please', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isPending,
        isTertiary: true,
        onClick: function onClick() {
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: false
          });

          _this5.updateAutomatedTax(false);
        }
      }, Object(external_wp_i18n_["__"])("No thanks, I'll set up manually", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isPending,
        isTertiary: true,
        onClick: function onClick() {
          return _this5.doNotChargeSalesTax();
        }
      }, Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var stepIndex = this.state.stepIndex;
      var _this$props6 = this.props,
          isPending = _this$props6.isPending,
          isResolving = _this$props6.isResolving;
      var step = this.getSteps()[stepIndex];
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, this.shouldShowSuccessScreen() ? this.renderSuccessScreen() : Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        isPending: isPending || isResolving,
        isVertical: true,
        currentStep: step.key,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Tax;
}(external_wp_element_["Component"]);

/* harmony default export */ var tax = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      isJetpackConnected = _select3.isJetpackConnected,
      isPluginsRequesting = _select3.isPluginsRequesting;

  var _select4 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getTasksStatus = _select4.getTasksStatus;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var storeAddress = generalSettings.woocommerce_store_address,
      defaultCountry = generalSettings.woocommerce_default_country,
      storePostCode = generalSettings.woocommerce_store_postcode;
  var hasCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

  var _getSettings2 = getSettings('tax'),
      _getSettings2$tax = _getSettings2.tax,
      taxSettings = _getSettings2$tax === void 0 ? {} : _getSettings2$tax;

  var activePlugins = getActivePlugins();
  var pluginsToActivate = Object(external_lodash_["difference"])(['jetpack', 'woocommerce-services'], activePlugins);
  var connectOptions = getOption('wc_connect_options') || {};
  var tosAccepted = connectOptions.tos_accepted || getOption('woocommerce_setup_jetpack_opted_in');
  var tasksStatus = getTasksStatus();
  var isPending = isUpdateSettingsRequesting('tax') || isUpdateSettingsRequesting('general');
  var isResolving = isPluginsRequesting('getJetpackConnectUrl');
  return {
    countryCode: countryCode,
    generalSettings: generalSettings,
    hasCompleteAddress: hasCompleteAddress,
    isJetpackConnected: isJetpackConnected(),
    isPending: isPending,
    isResolving: isResolving,
    pluginsToActivate: pluginsToActivate,
    tasksStatus: tasksStatus,
    taxSettings: taxSettings,
    tosAccepted: tosAccepted
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]),
      updateAndPersistSettingsForGroup = _dispatch3.updateAndPersistSettingsForGroup;

  var _dispatch4 = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch4.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    },
    createNotice: createNotice,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup,
    updateOptions: updateOptions
  };
}))(tax_Tax));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(329);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/visa.js

/* harmony default export */ var visa = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.5",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M22.6435 24.004H19.248L21.3718 11.7534H24.7671L22.6435 24.004Z",
    fill: "#15195A"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M34.952 12.0528C34.2823 11.8049 33.22 11.5312 31.9066 11.5312C28.5534 11.5312 26.1922 13.1993 26.1777 15.5842C26.1499 17.3437 27.8683 18.321 29.1536 18.9077C30.4672 19.5072 30.9138 19.8985 30.9138 20.4329C30.9004 21.2536 29.8522 21.6319 28.8747 21.6319C27.5191 21.6319 26.7927 21.4369 25.6889 20.9803L25.2417 20.7845L24.7666 23.5345C25.563 23.873 27.0302 24.1733 28.5534 24.1865C32.1162 24.1865 34.4356 22.5442 34.4631 20.0028C34.4767 18.6082 33.5693 17.5396 31.613 16.6665C30.4254 16.1059 29.6981 15.728 29.6981 15.1544C29.7121 14.6331 30.3133 14.099 31.6539 14.099C32.7577 14.0729 33.5687 14.3204 34.1831 14.5681L34.4902 14.6982L34.952 12.0528Z",
    fill: "#15195A"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M41.0301 11.7534H43.6565L46.3957 24.0039H43.2519C43.2519 24.0039 42.9442 22.5963 42.8467 22.1662H38.4873C38.3612 22.4919 37.7747 24.0039 37.7747 24.0039H34.2119L39.2554 12.7699C39.6049 11.9748 40.2202 11.7534 41.0301 11.7534ZM40.8208 16.2365C40.8208 16.2365 39.7448 18.9603 39.4652 19.6641H42.2875C42.1478 19.0516 41.5048 16.1192 41.5048 16.1192L41.2676 15.0636C41.1676 15.3355 41.0231 15.7092 40.9256 15.9612C40.8596 16.1321 40.8151 16.2471 40.8208 16.2365Z",
    fill: "#15195A"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.53636 11.7534H9.99929C10.7398 11.7792 11.3406 12.0008 11.5361 12.7832L12.7233 18.4113C12.7234 18.4118 12.7236 18.4124 12.7238 18.4129L13.0871 20.1072L16.4124 11.7534H20.0028L14.6657 23.991H11.0752L8.04881 13.3464C7.00461 12.7769 5.81289 12.3188 4.48047 12.0009L4.53636 11.7534Z",
    fill: "#15195A"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/mastercard.js

/* harmony default export */ var mastercard = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.5",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.6846 27.0292V28.3215V29.6137H18.1154V29.2999C17.9349 29.5327 17.661 29.6787 17.2886 29.6787C16.5546 29.6787 15.9791 29.1112 15.9791 28.3215C15.9791 27.5324 16.5546 26.9642 17.2886 26.9642C17.661 26.9642 17.9349 27.1103 18.1154 27.343V27.0292H18.6846ZM17.3594 27.494C16.8667 27.494 16.5652 27.8672 16.5652 28.3215C16.5652 28.7757 16.8667 29.1489 17.3594 29.1489C17.8302 29.1489 18.148 28.7918 18.148 28.3215C18.148 27.8511 17.8302 27.494 17.3594 27.494ZM37.9186 28.3215C37.9186 27.8672 38.2201 27.494 38.7128 27.494C39.1842 27.494 39.5014 27.8511 39.5014 28.3215C39.5014 28.7918 39.1842 29.1489 38.7128 29.1489C38.2201 29.1489 37.9186 28.7757 37.9186 28.3215ZM40.0386 25.9913V28.3215V29.6137H39.4688V29.2999C39.2882 29.5327 39.0143 29.6787 38.642 29.6787C37.9079 29.6787 37.3325 29.1112 37.3325 28.3215C37.3325 27.5324 37.9079 26.9642 38.642 26.9642C39.0143 26.9642 39.2882 27.1103 39.4688 27.343V25.9913H40.0386ZM25.7496 27.4674C26.1163 27.4674 26.352 27.6945 26.4122 28.0943H25.0538C25.1146 27.7211 25.3441 27.4674 25.7496 27.4674ZM24.4571 28.3215C24.4571 27.5157 24.9937 26.9642 25.7609 26.9642C26.4943 26.9642 26.9983 27.5157 27.0039 28.3215C27.0039 28.397 26.9983 28.4675 26.9926 28.5375L25.0488 28.5375C25.1309 29.0029 25.465 29.1706 25.8317 29.1706C26.0944 29.1706 26.374 29.0728 26.5933 28.9001L26.8723 29.3167C26.5545 29.5815 26.1934 29.6787 25.7991 29.6787C25.0156 29.6787 24.4571 29.1434 24.4571 28.3215ZM32.6337 28.3215C32.6337 27.8672 32.9353 27.494 33.4279 27.494C33.8987 27.494 34.2165 27.8511 34.2165 28.3215C34.2165 28.7918 33.8987 29.1489 33.4279 29.1489C32.9353 29.1489 32.6337 28.7757 32.6337 28.3215ZM34.7529 27.0292V28.3215V29.6137H34.1837V29.2999C34.0026 29.5327 33.7293 29.6787 33.3569 29.6787C32.6229 29.6787 32.0475 29.1112 32.0475 28.3215C32.0475 27.5324 32.6229 26.9642 33.3569 26.9642C33.7293 26.9642 34.0026 27.1103 34.1837 27.343V27.0292H34.7529ZM29.4191 28.3215C29.4191 29.1056 29.972 29.6787 30.8157 29.6787C31.21 29.6787 31.4726 29.5921 31.7572 29.3705L31.4839 28.9162C31.2701 29.0679 31.0457 29.1489 30.7988 29.1489C30.3443 29.1434 30.0102 28.8191 30.0102 28.3215C30.0102 27.8239 30.3443 27.4996 30.7988 27.494C31.0457 27.494 31.2701 27.5751 31.4839 27.7267L31.7572 27.2724C31.4726 27.0509 31.21 26.9642 30.8157 26.9642C29.972 26.9642 29.4191 27.5373 29.4191 28.3215ZM36.0674 27.3431C36.2153 27.1159 36.4291 26.9643 36.7575 26.9643C36.8729 26.9643 37.0371 26.986 37.1631 27.0349L36.9876 27.5646C36.8672 27.5157 36.7469 27.4997 36.6315 27.4997C36.2592 27.4997 36.073 27.7373 36.073 28.165V29.6138H35.5032V27.0293H36.0674V27.3431ZM21.4996 27.2347C21.2257 27.0564 20.8483 26.9642 20.4321 26.9642C19.7689 26.9642 19.342 27.278 19.342 27.7917C19.342 28.2132 19.6599 28.4731 20.2453 28.5542L20.5142 28.5919C20.8264 28.6352 20.9737 28.7163 20.9737 28.8624C20.9737 29.0623 20.7656 29.1762 20.377 29.1762C19.9827 29.1762 19.6981 29.0518 19.5063 28.9057L19.238 29.3433C19.5502 29.5704 19.9444 29.6787 20.3713 29.6787C21.1273 29.6787 21.5654 29.3272 21.5654 28.8352C21.5654 28.3809 21.2207 28.1432 20.6509 28.0621L20.3826 28.0238C20.1363 27.9916 19.9388 27.9433 19.9388 27.77C19.9388 27.5806 20.125 27.4674 20.4371 27.4674C20.7712 27.4674 21.0947 27.5918 21.2533 27.689L21.4996 27.2347ZM28.1542 27.3431C28.3015 27.1159 28.5152 26.9643 28.8437 26.9643C28.959 26.9643 29.1233 26.986 29.2493 27.0349L29.0738 27.5646C28.9534 27.5157 28.833 27.4997 28.7177 27.4997C28.3454 27.4997 28.1592 27.7373 28.1592 28.165V29.6138H27.59V27.0293L28.1542 27.0293V27.3431ZM23.9862 27.0292H23.0553V26.2451H22.4799V27.0292H21.949V27.5429H22.4799V28.7219C22.4799 29.3216 22.7156 29.6787 23.3888 29.6787C23.6358 29.6787 23.9204 29.6032 24.1009 29.4788L23.9367 28.9973C23.7668 29.0945 23.5806 29.1434 23.4327 29.1434C23.1481 29.1434 23.0553 28.9701 23.0553 28.7108V27.5429H23.9862V27.0292ZM15.4758 27.9917V29.6138H14.9003V28.1755C14.9003 27.7373 14.7142 27.4941 14.3255 27.4941C13.9475 27.4941 13.6849 27.7324 13.6849 28.1811V29.6138H13.1095V28.1755C13.1095 27.7373 12.9183 27.4941 12.5403 27.4941C12.151 27.4941 11.899 27.7324 11.899 28.1811V29.6138H11.3242V27.0293H11.894V27.348C12.1078 27.0454 12.3811 26.9643 12.6606 26.9643C13.0606 26.9643 13.3451 27.1376 13.5257 27.4242C13.767 27.0615 14.1118 26.9587 14.4459 26.9643C15.0815 26.9699 15.4758 27.3808 15.4758 27.9917Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M29.9381 22.6376H21.3115V7.33105H29.9381V22.6376Z",
    fill: "#FF5F00"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M21.8586 14.9846C21.8586 11.8796 23.331 9.11372 25.624 7.33129C23.9472 6.02789 21.831 5.24994 19.5311 5.24994C14.0864 5.24994 9.67285 9.60822 9.67285 14.9846C9.67285 20.361 14.0864 24.7192 19.5311 24.7192C21.831 24.7192 23.9472 23.9413 25.624 22.6379C23.331 20.8555 21.8586 18.0896 21.8586 14.9846Z",
    fill: "#EB001B"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M41.5758 14.9846C41.5758 20.361 37.1622 24.7192 31.7175 24.7192C29.4177 24.7192 27.3014 23.9413 25.624 22.6379C27.9176 20.8555 29.3901 18.0896 29.3901 14.9846C29.3901 11.8796 27.9176 9.11372 25.624 7.33129C27.3014 6.02789 29.4177 5.24994 31.7175 5.24994C37.1622 5.24994 41.5758 9.60822 41.5758 14.9846Z",
    fill: "#F79E1B"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/maestro.js

/* harmony default export */ var maestro = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.5",
    y: "0.5",
    width: "49.6897",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M29.9708 22.8244H21.3047V7.35352H29.9708V22.8244Z",
    fill: "#6C6BBD"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M21.8549 15.0891C21.8549 11.9507 23.3341 9.15521 25.6375 7.35365C23.9531 6.03626 21.8272 5.24995 19.5168 5.24995C14.0471 5.24995 9.61328 9.65501 9.61328 15.0891C9.61328 20.5232 14.0471 24.9282 19.5168 24.9282C21.8272 24.9282 23.9531 24.1419 25.6375 22.8245C23.3341 21.023 21.8549 18.2274 21.8549 15.0891Z",
    fill: "#EB001B"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M41.6626 15.0891C41.6626 20.5232 37.2288 24.9282 31.7591 24.9282C29.4487 24.9282 27.3228 24.1419 25.6377 22.8245C27.9418 21.023 29.421 18.2274 29.421 15.0891C29.421 11.9507 27.9418 9.15521 25.6377 7.35365C27.3228 6.03626 29.4487 5.24995 31.7591 5.24995C37.2288 5.24995 41.6626 9.65501 41.6626 15.0891Z",
    fill: "#0099DF"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M32.9036 27.1956C33.0188 27.1956 33.1845 27.2175 33.311 27.2669L33.1347 27.8024C33.0138 27.753 32.8929 27.7367 32.777 27.7367C32.403 27.7367 32.216 27.9769 32.216 28.4085V29.8735H31.6436V27.2613H32.2103V27.5784C32.3589 27.3489 32.5736 27.1956 32.9036 27.1956Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M30.7887 27.7807H29.8536V28.9611C29.8536 29.2232 29.9468 29.3984 30.2333 29.3984C30.382 29.3984 30.569 29.3489 30.739 29.2507L30.904 29.7368C30.7226 29.8625 30.4367 29.9395 30.1893 29.9395C29.5123 29.9395 29.2762 29.5785 29.2762 28.9717V27.7807H28.7422V27.2615H29.2762V26.469H29.8536V27.2615H30.7887V27.7807Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.1754 27.1958C24.9128 27.1958 25.4191 27.7532 25.4247 28.5676C25.4247 28.6433 25.4192 28.7135 25.4135 28.7842L25.4134 28.7859H23.4607C23.5432 29.2557 23.8788 29.4252 24.2472 29.4252C24.511 29.4252 24.7919 29.327 25.0116 29.1519L25.2925 29.5729C24.9732 29.8406 24.6105 29.9388 24.2144 29.9388C23.4273 29.9388 22.8662 29.3977 22.8662 28.5676C22.8662 27.7532 23.4052 27.1958 24.1754 27.1958ZM24.1648 27.7036C23.7574 27.7036 23.5269 27.9607 23.4658 28.3379H24.8304C24.77 27.9332 24.5332 27.7036 24.1648 27.7036Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M27.9386 27.9283C27.7793 27.8295 27.455 27.7038 27.1193 27.7038C26.8057 27.7038 26.6187 27.8189 26.6187 28.0103C26.6187 28.1848 26.8164 28.2342 27.0639 28.2668L27.3334 28.3049C27.9058 28.3875 28.2522 28.6277 28.2522 29.0868C28.2522 29.5841 27.812 29.9395 27.0532 29.9395C26.6237 29.9395 26.2277 29.83 25.9141 29.6004L26.1836 29.1575C26.3763 29.3052 26.6628 29.4309 27.0589 29.4309C27.4493 29.4309 27.6584 29.3164 27.6584 29.1137C27.6584 28.9667 27.5098 28.8842 27.1962 28.841L26.9266 28.8028C26.3379 28.7203 26.0186 28.4582 26.0186 28.0322C26.0186 27.513 26.4481 27.1958 27.1137 27.1958C27.5318 27.1958 27.9115 27.289 28.1861 27.4692L27.9386 27.9283Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.561 27.3015C35.3872 27.2308 35.1982 27.1958 34.9942 27.1958C34.7902 27.1958 34.6013 27.2308 34.4275 27.3015C34.2537 27.3716 34.1044 27.4685 33.9785 27.5918C33.8526 27.715 33.7537 27.8608 33.6819 28.0284C33.6101 28.1967 33.5742 28.3793 33.5742 28.5764C33.5742 28.7734 33.6101 28.9561 33.6819 29.1243C33.7537 29.292 33.8526 29.4384 33.9785 29.5616C34.1044 29.6848 34.2537 29.7812 34.4275 29.8519C34.6013 29.9219 34.7902 29.9569 34.9942 29.9569C35.1982 29.9569 35.3872 29.9219 35.561 29.8519C35.7348 29.7812 35.8853 29.6848 36.0118 29.5616C36.139 29.4384 36.2379 29.292 36.3097 29.1243C36.3815 28.9561 36.4174 28.7734 36.4174 28.5764C36.4174 28.3793 36.3815 28.1967 36.3097 28.0284C36.2379 27.8608 36.139 27.715 36.0118 27.5918C35.8853 27.4685 35.7348 27.3716 35.561 27.3015ZM34.666 27.7969C34.7674 27.7563 34.8763 27.7356 34.9941 27.7356C35.1118 27.7356 35.2214 27.7563 35.3221 27.7969C35.4235 27.8382 35.5117 27.8958 35.5854 27.9696C35.6603 28.0434 35.7182 28.1322 35.761 28.2354C35.8032 28.3386 35.824 28.4525 35.824 28.5763C35.824 28.7008 35.8032 28.8141 35.761 28.9173C35.7182 29.0205 35.6603 29.1093 35.5854 29.1831C35.5117 29.2569 35.4235 29.3145 35.3221 29.3558C35.2214 29.3971 35.1118 29.4171 34.9941 29.4171C34.8763 29.4171 34.7674 29.3971 34.666 29.3558C34.5652 29.3145 34.4777 29.2569 34.404 29.1831C34.3303 29.1093 34.2724 29.0205 34.2302 28.9173C34.188 28.8141 34.1672 28.7008 34.1672 28.5763C34.1672 28.4525 34.188 28.3386 34.2302 28.2354C34.2724 28.1322 34.3303 28.0434 34.404 27.9696C34.4777 27.8958 34.5652 27.8382 34.666 27.7969Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.2524 27.2615V28.5676V29.8737H21.6806V29.5566C21.4986 29.7918 21.224 29.9394 20.85 29.9394C20.1126 29.9394 19.5352 29.3652 19.5352 28.5676C19.5352 27.7694 20.1126 27.1958 20.85 27.1958C21.224 27.1958 21.4986 27.3434 21.6806 27.5786V27.2615H22.2524ZM20.9211 27.7312C20.4262 27.7312 20.1233 28.1084 20.1233 28.5675C20.1233 29.0267 20.4262 29.4033 20.9211 29.4033C21.394 29.4033 21.7133 29.0429 21.7133 28.5675C21.7133 28.0921 21.394 27.7312 20.9211 27.7312Z",
    fill: "#231F20"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M19.0293 29.8735V28.234C19.0293 27.6166 18.6332 27.2012 17.9953 27.1956C17.6597 27.19 17.3127 27.2938 17.0709 27.6604C16.8896 27.3707 16.603 27.1956 16.2013 27.1956C15.9211 27.1956 15.6459 27.2775 15.4312 27.5834V27.2613H14.8594V29.8735H15.4368V28.4254C15.4368 27.9719 15.69 27.7311 16.0804 27.7311C16.4601 27.7311 16.6528 27.9769 16.6528 28.4198V29.8735H17.2302V28.4254C17.2302 27.9719 17.4947 27.7311 17.8738 27.7311C18.2649 27.7311 18.4519 27.9769 18.4519 28.4198V29.8735H19.0293V29.8735Z",
    fill: "#231F20"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/amex.js

/* harmony default export */ var amex = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "1.18945",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "#006FCF",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1205 25.2823V18.0771H19.3189L20.1985 19.1441L21.1072 18.0771H50.8653V24.7854C50.8653 24.7854 50.0871 25.2751 49.187 25.2823H32.7093L31.7176 24.1465V25.2823H28.4679V23.3435C28.4679 23.3435 28.0239 23.6141 27.0642 23.6141H25.9581V25.2823H21.0376L20.1593 24.1924L19.2675 25.2823H11.1205ZM1.56836 12.6465L3.41294 8.63574H6.60294L7.64976 10.8824V8.63574H11.6152L12.2384 10.2596L12.8425 8.63574H30.6434V9.4521C30.6434 9.4521 31.5792 8.63574 33.1171 8.63574L38.8928 8.65457L39.9215 10.8718V8.63574H43.24L44.1534 9.90939V8.63574H47.5023V15.841H44.1534L43.2781 14.5632V15.841H38.4025L37.9121 14.7052H36.6014L36.1191 15.841H32.8126C31.4893 15.841 30.6434 15.0413 30.6434 15.0413V15.841H25.658L24.6685 14.7052V15.841H6.13036L5.64039 14.7052H4.33383L3.84732 15.841H1.56836V12.6465ZM1.5779 14.9189L4.06583 9.52391H5.95199L8.43755 14.9189H6.7821L6.32542 13.8386H3.65672L3.19767 14.9189H1.5779ZM5.79982 12.6674L4.98636 10.7795L4.17053 12.6674H5.79982ZM8.60869 14.9182V9.52317L10.9105 9.53115L12.2493 13.0095L13.556 9.52317H15.8394V14.9182H14.3933V10.9429L12.8603 14.9182H11.592L10.0548 10.9429V14.9182H8.60869ZM16.8289 14.9182V9.52317H21.5479V10.73H18.2902V11.6528H21.4717V12.7886H18.2902V13.7469H21.5479V14.9182H16.8289ZM22.3851 14.9189V9.52391H25.6033C26.6696 9.52391 27.625 10.1389 27.625 11.2742C27.625 12.2447 26.8195 12.8698 26.0385 12.9313L27.9413 14.9189H26.1741L24.4402 13.0023H23.8313V14.9189H22.3851ZM25.4843 10.7306H23.8313V11.8664H25.5057C25.7956 11.8664 26.1694 11.6569 26.1694 11.2985C26.1694 11.0199 25.8809 10.7306 25.4843 10.7306ZM29.692 14.9182H28.2154V9.52317H29.692V14.9182ZM33.1931 14.9182H32.8744C31.3323 14.9182 30.396 13.7851 30.396 12.2429C30.396 10.6626 31.3218 9.52317 33.2692 9.52317H34.8676V10.8009H33.2108C32.4202 10.8009 31.8611 11.3763 31.8611 12.2562C31.8611 13.301 32.5004 13.7398 33.4215 13.7398H33.802L33.1931 14.9182ZM33.8521 14.9189L36.34 9.52391H38.2262L40.7117 14.9189H39.0563L38.5996 13.8386H35.9309L35.4719 14.9189H33.8521ZM38.074 12.6674L37.2605 10.7795L36.4447 12.6674H38.074ZM40.8805 14.9182V9.52317H42.7191L45.0667 12.9128V9.52317H46.5128V14.9182H44.7337L42.3267 11.4398V14.9182H40.8805ZM12.1099 24.3594V18.9643H16.8289V20.1711H13.5713V21.0939H16.7528V22.2297H13.5713V23.1881H16.8289V24.3594H12.1099ZM35.2329 24.3594V18.9643H39.9519V20.1711H36.6943V21.0939H39.8606V22.2297H36.6943V23.1881H39.9519V24.3594H35.2329ZM17.0121 24.3594L19.3097 21.6951L16.9574 18.9643H18.7793L20.1803 20.6525L21.586 18.9643H23.3366L21.0151 21.6618L23.317 24.3594H21.4953L20.1351 22.6978L18.8079 24.3594H17.0121ZM23.4887 24.3603V18.9653H26.6831C27.9938 18.9653 28.7595 19.7531 28.7595 20.7799C28.7595 22.0193 27.7832 22.6566 26.4952 22.6566H24.9729V24.3603H23.4887ZM26.5761 20.1853H24.973V21.4276H26.5714C26.9937 21.4276 27.2897 21.1665 27.2897 20.8064C27.2897 20.4232 26.9922 20.1853 26.5761 20.1853ZM29.3875 24.3594V18.9643H32.6056C33.672 18.9643 34.6274 19.5793 34.6274 20.7146C34.6274 21.6851 33.8218 22.3102 33.0409 22.3717L34.9437 24.3594H33.1765L31.4426 22.4427H30.8337V24.3594H29.3875ZM32.4867 20.171H30.8337V21.3068H32.5082C32.798 21.3068 33.1718 21.0974 33.1718 20.7389C33.1718 20.4603 32.8833 20.171 32.4867 20.171ZM40.6217 24.3594V23.1881H43.5159C43.9441 23.1881 44.1295 22.9722 44.1295 22.7355C44.1295 22.5087 43.9447 22.2794 43.5159 22.2794H42.208C41.0712 22.2794 40.4381 21.6334 40.4381 20.6636C40.4381 19.7985 41.0178 18.9643 42.7072 18.9643H45.5233L44.9144 20.1782H42.4788C42.0132 20.1782 41.8699 20.4061 41.8699 20.6237C41.8699 20.8473 42.047 21.0939 42.4027 21.0939H43.7727C45.04 21.0939 45.5899 21.7644 45.5899 22.6424C45.5899 23.5863 44.9772 24.3594 43.7038 24.3594H40.6217ZM45.7176 24.3594V23.1881H48.6118C49.04 23.1881 49.2254 22.9722 49.2254 22.7355C49.2254 22.5087 49.0406 22.2794 48.6118 22.2794H47.3039C46.1671 22.2794 45.534 21.6334 45.534 20.6636C45.534 19.7985 46.1138 18.9643 47.8031 18.9643H50.6192L50.0103 20.1782H47.5747C47.1092 20.1782 46.9658 20.4061 46.9658 20.6237C46.9658 20.8473 47.1429 21.0939 47.4986 21.0939H48.8687C50.1359 21.0939 50.6858 21.7644 50.6858 22.6424C50.6858 23.5863 50.0731 24.3594 48.7997 24.3594H45.7176Z",
    fill: "white"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/applepay.js

/* harmony default export */ var applepay = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.878906",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.8352 13.0607C15.4642 13.5024 14.8707 13.8507 14.2771 13.8009C14.2029 13.2038 14.4935 12.5693 14.8336 12.1774C15.2045 11.7233 15.8537 11.3999 16.3792 11.375C16.4411 11.997 16.1999 12.6066 15.8352 13.0607ZM16.373 13.9192C15.8501 13.8889 15.373 14.0774 14.9876 14.2297C14.7396 14.3277 14.5296 14.4106 14.3698 14.4106C14.1905 14.4106 13.9718 14.3232 13.7263 14.2251C13.4046 14.0965 13.0367 13.9495 12.651 13.9565C11.7669 13.969 10.9446 14.4728 10.4933 15.2753C9.56588 16.8801 10.2522 19.2563 11.1486 20.5626C11.5876 21.2095 12.1131 21.9186 12.8056 21.8937C13.1102 21.8822 13.3294 21.7886 13.5562 21.6918C13.8173 21.5803 14.0885 21.4645 14.512 21.4645C14.9208 21.4645 15.1802 21.5773 15.4292 21.6856C15.6659 21.7885 15.8933 21.8874 16.2308 21.8813C16.948 21.8689 17.3993 21.2344 17.8383 20.5875C18.312 19.8931 18.5202 19.2155 18.5518 19.1127L18.5555 19.1008C18.5547 19.1 18.5488 19.0973 18.5385 19.0926C18.3802 19.0196 17.1698 18.4621 17.1582 16.9672C17.1465 15.7124 18.1182 15.0767 18.2712 14.9766L18.2712 14.9766C18.2805 14.9705 18.2868 14.9664 18.2896 14.9642C17.6713 14.0436 16.7068 13.9441 16.373 13.9192ZM21.3377 21.8128V12.1153H24.9546C26.8217 12.1153 28.1263 13.4091 28.1263 15.3001C28.1263 17.1911 26.797 18.4974 24.9051 18.4974H22.8339V21.8128H21.3377ZM22.8339 13.3841H24.5589C25.8572 13.3841 26.5991 14.0808 26.5991 15.3062C26.5991 16.5317 25.8572 17.2346 24.5527 17.2346H22.8339V13.3841ZM33.0661 20.6496C32.6704 21.4085 31.7986 21.8874 30.8589 21.8874C29.4678 21.8874 28.4971 21.0539 28.4971 19.7974C28.4971 18.5533 29.4368 17.838 31.1742 17.7322L33.0413 17.6203V17.0853C33.0413 16.2953 32.5282 15.8661 31.6131 15.8661C30.8589 15.8661 30.3086 16.258 30.1973 16.8552H28.8495C28.8928 15.5986 30.0675 14.6842 31.6564 14.6842C33.369 14.6842 34.4819 15.5862 34.4819 16.9858V21.8128H33.097V20.6496H33.0661ZM31.2609 20.7368C30.4633 20.7368 29.9563 20.3511 29.9563 19.7602C29.9563 19.1506 30.4448 18.796 31.3784 18.74L33.0415 18.6343V19.1817C33.0415 20.0898 32.2748 20.7368 31.2609 20.7368ZM39.0756 22.1922C38.4759 23.8903 37.7897 24.4502 36.3306 24.4502C36.2193 24.4502 35.8483 24.4377 35.7617 24.4129V23.2496C35.8545 23.2621 36.0832 23.2745 36.2007 23.2745C36.8623 23.2745 37.2332 22.9946 37.462 22.2668L37.598 21.8376L35.0631 14.7775H36.6273L38.3894 20.5065H38.4203L40.1823 14.7775H41.7033L39.0756 22.1922Z",
    fill: "black"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/cb.js

/* harmony default export */ var cb = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "1.18945",
    y: "0.5",
    width: "49.6897",
    height: "34",
    rx: "2.5",
    fill: "url(#paint0_linear)",
    stroke: "#F1F1F1"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.7636 16.9816H26.6269C26.5657 15.4963 26.2201 13.9649 25.1717 12.9813C23.9229 11.8096 21.7355 11.375 19.781 11.375C17.7466 11.375 15.4968 11.8517 14.2414 13.1088C13.1588 14.1918 12.9248 15.9341 12.9248 17.4997C12.9248 19.1395 13.3827 21.0469 14.5571 22.1456C15.8059 23.3147 17.8294 23.625 19.781 23.625C21.6767 23.625 23.7302 23.2746 24.9718 22.1647C26.2099 21.0561 26.6377 19.1888 26.6377 17.4997V17.4918H19.7636V16.9816ZM27.0876 17.4921V23.3511H36.6352V23.3432C38.0322 23.267 39.1436 22.0059 39.1436 20.4575C39.1436 18.9084 38.0322 17.5664 36.6352 17.4895V17.4921H27.0876ZM36.5263 11.6203C37.8879 11.6203 38.9687 12.8032 38.9687 14.2957C38.9687 15.7087 37.9762 16.8626 36.7135 16.9816H27.0873V11.6118H36.2251C36.2813 11.6049 36.3468 11.6097 36.4108 11.6144C36.4508 11.6174 36.4901 11.6203 36.5263 11.6203Z",
    fill: "#FEFEFE"
  }), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("linearGradient", {
    id: "paint0_linear",
    x1: "14.4385",
    y1: "-4.43215",
    x2: "2.09335",
    y2: "33.4202",
    gradientUnits: "userSpaceOnUse"
  }, Object(external_wp_element_["createElement"])("stop", {
    stopColor: "#222E72"
  }), Object(external_wp_element_["createElement"])("stop", {
    offset: "0.591647",
    stopColor: "#40CBFF"
  }), Object(external_wp_element_["createElement"])("stop", {
    offset: "1",
    stopColor: "#3CB792"
  }))));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/diners.js

/* harmony default export */ var diners = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "1.18945",
    y: "0.5",
    width: "49",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.30356 21.1794C8.30356 20.493 7.95026 20.5381 7.6123 20.5309V20.3325C7.90535 20.347 8.20582 20.347 8.49964 20.347C8.8153 20.347 9.24386 20.3325 9.80068 20.3325C11.7479 20.3325 12.8085 21.6523 12.8085 23.0038C12.8085 23.7601 12.3724 25.6602 9.71022 25.6602C9.32704 25.6602 8.97313 25.6451 8.61983 25.6451C8.28172 25.6451 7.95026 25.6521 7.6123 25.6602V25.4616C8.06302 25.4154 8.28172 25.4004 8.30356 24.8815V21.1794ZM9.04049 24.759C9.04049 25.3469 9.4545 25.4153 9.82282 25.4153C11.4476 25.4153 11.9807 24.1715 11.9807 23.0344C11.9807 21.6071 11.0785 20.5769 9.62735 20.5769C9.31835 20.5769 9.17617 20.5992 9.04049 20.6074V24.759Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.0713 25.4613H13.2138C13.4243 25.4613 13.5748 25.4613 13.5748 25.2088V23.1406C13.5748 22.8053 13.4622 22.7589 13.1836 22.6067V22.4849C13.537 22.377 13.9585 22.233 13.9882 22.2101C14.0412 22.1794 14.0856 22.1712 14.1239 22.1712C14.1608 22.1712 14.1762 22.2171 14.1762 22.2788V25.2088C14.1762 25.4613 14.342 25.4613 14.5528 25.4613H14.6801V25.6599C14.4244 25.6599 14.1608 25.6448 13.8909 25.6448C13.6202 25.6448 13.3493 25.6518 13.0713 25.6599V25.4613ZM13.8758 20.9962C13.6799 20.9962 13.5074 20.813 13.5074 20.6146C13.5074 20.4235 13.6881 20.2476 13.8758 20.2476C14.071 20.2476 14.2445 20.4084 14.2445 20.6146C14.2445 20.8211 14.0786 20.9962 13.8758 20.9962Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3957 23.1866C15.3957 22.9048 15.3126 22.8285 14.9598 22.6833V22.5383C15.2826 22.4316 15.5907 22.3319 15.952 22.1714C15.9748 22.1714 15.9966 22.1866 15.9966 22.2476V22.7439C16.426 22.4316 16.7944 22.1714 17.299 22.1714C17.9373 22.1714 18.1628 22.6447 18.1628 23.2401V25.209C18.1628 25.4614 18.3287 25.4614 18.5391 25.4614H18.6747V25.66C18.4107 25.66 18.1478 25.6449 17.8774 25.6449C17.6065 25.6449 17.3356 25.652 17.0649 25.66V25.4614H17.2005C17.4112 25.4614 17.561 25.4614 17.561 25.209V23.233C17.561 22.7974 17.299 22.5839 16.8699 22.5839C16.629 22.5839 16.2455 22.782 15.9966 22.9507V25.209C15.9966 25.4614 16.1628 25.4614 16.3735 25.4614H16.5085V25.66C16.2455 25.66 15.9822 25.6449 15.711 25.6449C15.4409 25.6449 15.1698 25.652 14.8994 25.66V25.4614H15.0351C15.2454 25.4614 15.3957 25.4614 15.3957 25.209V23.1866Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.2463 23.5536C19.2309 23.6223 19.2309 23.7366 19.2463 23.9963C19.2906 24.7212 19.7503 25.3162 20.3512 25.3162C20.7654 25.3162 21.0889 25.0871 21.3666 24.8053L21.4716 24.9122C21.1256 25.3777 20.6972 25.7748 20.0811 25.7748C18.8851 25.7748 18.6445 24.5987 18.6445 24.1106C18.6445 22.6144 19.6369 22.1714 20.1627 22.1714C20.7725 22.1714 21.4272 22.5606 21.4342 23.3699C21.4342 23.4163 21.4342 23.4616 21.4272 23.5075L21.3592 23.5536H19.2463ZM20.5777 23.309C20.7653 23.309 20.7873 23.2097 20.7873 23.1177C20.7873 22.7291 20.5544 22.4161 20.1331 22.4161C19.6748 22.4161 19.3588 22.759 19.2687 23.309H20.5777Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6074 25.4614H21.8106C22.0203 25.4614 22.1709 25.4614 22.1709 25.209V23.0646C22.1709 22.8285 21.8929 22.782 21.78 22.721V22.6069C22.3289 22.3701 22.6298 22.1714 22.6986 22.1714C22.7426 22.1714 22.7652 22.1943 22.7652 22.2711V22.9581H22.781C22.9684 22.6605 23.2848 22.1714 23.7433 22.1714C23.9312 22.1714 24.1715 22.3011 24.1715 22.576C24.1715 22.782 24.0294 22.9661 23.8189 22.9661C23.585 22.9661 23.585 22.782 23.3215 22.782C23.1939 22.782 22.7728 22.9581 22.7728 23.4163V25.209C22.7728 25.4614 22.923 25.4614 23.1337 25.4614H23.5543V25.66C23.1408 25.652 22.8261 25.6449 22.5023 25.6449C22.194 25.6449 21.878 25.652 21.6074 25.66V25.4614Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.5026 24.5985C24.6006 25.1022 24.9008 25.5303 25.4508 25.5303C25.8937 25.5303 26.059 25.2552 26.059 24.9882C26.059 24.0871 24.4202 24.3775 24.4202 23.1488C24.4202 22.7208 24.7587 22.1714 25.586 22.1714C25.8262 22.1714 26.1495 22.2406 26.4425 22.3934L26.4953 23.1712H26.3225C26.2473 22.6906 25.9845 22.416 25.5027 22.416C25.2019 22.416 24.9164 22.5913 24.9164 22.9195C24.9164 23.8131 26.6606 23.5378 26.6606 24.7362C26.6606 25.2396 26.2625 25.7746 25.3673 25.7746C25.0668 25.7746 24.7127 25.6675 24.4504 25.5149L24.3672 24.637L24.5026 24.5985Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M33.4502 21.7134H33.2626C33.1195 20.8213 32.4953 20.4621 31.6537 20.4621C30.7879 20.4621 29.5325 21.0494 29.5325 22.8812C29.5325 24.4236 30.6158 25.5305 31.7736 25.5305C32.5173 25.5305 33.1353 25.0112 33.2854 24.2093L33.4584 24.2549L33.2854 25.3696C32.9696 25.5683 32.1196 25.7748 31.6227 25.7748C29.8638 25.7748 28.751 24.622 28.751 22.9048C28.751 21.3396 30.1271 20.2173 31.601 20.2173C32.2099 20.2173 32.7963 20.4163 33.3754 20.6226L33.4502 21.7134Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M33.7217 25.461H33.864C34.0753 25.461 34.2254 25.461 34.2254 25.2086V20.9583C34.2254 20.4617 34.1128 20.4466 33.8267 20.3625V20.2402C34.1273 20.1411 34.4434 20.004 34.6017 19.9117C34.6834 19.8666 34.7441 19.8276 34.7662 19.8276C34.8122 19.8276 34.8271 19.874 34.8271 19.9353V25.2086C34.8271 25.461 34.9927 25.461 35.203 25.461H35.3303V25.6596C35.0754 25.6596 34.8122 25.6445 34.5413 25.6445C34.2707 25.6445 34.0003 25.6516 33.7217 25.6596V25.461Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M38.5497 25.2394C38.5497 25.3773 38.632 25.3846 38.7594 25.3846C38.8502 25.3846 38.9625 25.3773 39.061 25.3773V25.538C38.7374 25.5682 38.1205 25.7285 37.9774 25.7744L37.9399 25.7512V25.1329C37.4892 25.5067 37.1429 25.7744 36.6082 25.7744C36.2023 25.7744 35.7815 25.5067 35.7815 24.8664V22.9118C35.7815 22.7131 35.7516 22.5223 35.3311 22.4847V22.3393C35.6019 22.3317 36.2023 22.2861 36.3003 22.2861C36.3838 22.2861 36.3838 22.3393 36.3838 22.5075V24.4765C36.3838 24.7057 36.3838 25.3614 37.0379 25.3614C37.2931 25.3614 37.6316 25.1635 37.9472 24.8967V22.843C37.9472 22.6905 37.5865 22.6065 37.3162 22.5306V22.3933C37.9923 22.3468 38.4139 22.2861 38.489 22.2861C38.5497 22.2861 38.5497 22.3393 38.5497 22.4235V25.2394Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M40.0461 22.7206C40.3468 22.4617 40.753 22.171 41.1666 22.171C42.0391 22.171 42.5655 22.9427 42.5655 23.7745C42.5655 24.774 41.8433 25.7744 40.7674 25.7744C40.2116 25.7744 39.9182 25.5906 39.7223 25.5066L39.4974 25.6822L39.3397 25.5986C39.4069 25.1484 39.4449 24.7057 39.4449 24.2398V20.9583C39.4449 20.4617 39.3317 20.4466 39.0459 20.3625V20.2402C39.347 20.1411 39.6625 20.004 39.8203 19.9117C39.9033 19.8666 39.9633 19.8276 39.9862 19.8276C40.031 19.8276 40.0461 19.8742 40.0461 19.9353V22.7206ZM40.0461 24.7968C40.0461 25.0867 40.317 25.5756 40.8207 25.5756C41.6252 25.5756 41.9634 24.774 41.9634 24.0944C41.9634 23.2703 41.3475 22.5835 40.7611 22.5835C40.4816 22.5835 40.249 22.767 40.0461 22.9427V24.7968Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.6628 29.4042L11.671 29.3961V27.8391C11.671 27.4982 11.4374 27.4484 11.3148 27.4484H11.2246V27.3237C11.4173 27.3237 11.6055 27.3402 11.7976 27.3402C11.9653 27.3402 12.1338 27.3237 12.3009 27.3237V27.4484H12.2401C12.0677 27.4484 11.8753 27.4816 11.8753 27.9758V29.8655C11.8753 30.0111 11.8793 30.1563 11.8995 30.2852H11.744L9.63706 27.9008V29.6124C9.63706 29.974 9.7063 30.098 10.0213 30.098H10.091V30.2228C9.91508 30.2228 9.73929 30.2066 9.56334 30.2066C9.37964 30.2066 9.19115 30.2228 9.00684 30.2228V30.098H9.0643C9.3465 30.098 9.43246 29.9027 9.43246 29.5715V27.8216C9.43246 27.5893 9.24366 27.4484 9.06027 27.4484H9.00684V27.3237C9.16203 27.3237 9.32187 27.3402 9.47707 27.3402C9.6002 27.3402 9.71884 27.3237 9.84151 27.3237L11.6628 29.4042Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.899 30.3027L11.7305 30.2969L9.65398 27.9477V29.6124C9.65893 29.9735 9.71299 30.0761 10.0211 30.0801H10.1087V30.2406H10.0906C9.91356 30.2406 9.73746 30.2239 9.56291 30.2239C9.37968 30.2239 9.19165 30.2406 9.00625 30.2406H8.98828V30.0801H9.06387C9.33429 30.0785 9.41158 29.9021 9.41453 29.5714V27.8223C9.41375 27.6011 9.23501 27.4665 9.05999 27.4665H8.98828V27.3057H9.00625C9.16268 27.3057 9.32283 27.3219 9.47632 27.3219C9.59837 27.3219 9.71655 27.3057 9.85455 27.3121L11.6528 29.3667V27.8391C11.6508 27.5092 11.4336 27.4692 11.3145 27.4665H11.2062V27.3057H11.2244C11.4177 27.3057 11.606 27.3219 11.7971 27.3219C11.9636 27.3219 12.1314 27.3057 12.3005 27.3057H12.3185V27.4665H12.2396C12.0707 27.4709 11.8973 27.486 11.8924 27.9758V29.8655C11.8924 30.0109 11.8969 30.1559 11.9165 30.2819L11.9203 30.3027H11.899ZM11.7436 30.2666H11.879C11.8607 30.1416 11.8574 30.0037 11.8574 29.8655V27.9759C11.8574 27.4774 12.0633 27.4304 12.2395 27.4301H12.2826V27.3417C12.1214 27.343 11.9598 27.3581 11.797 27.3581C11.6096 27.3581 11.4275 27.343 11.2425 27.3417L11.2421 27.4301H11.3144C11.4402 27.4304 11.6882 27.4871 11.6882 27.8391L11.6827 29.4092L11.6747 29.4172L11.6607 29.4305L9.84099 27.3417C9.71941 27.3417 9.60107 27.3581 9.47624 27.3581C9.32631 27.3581 9.17266 27.343 9.02428 27.3417L9.02351 27.4301H9.0599C9.25181 27.4304 9.44929 27.5791 9.44929 27.8223V29.5714C9.44929 29.9037 9.35806 30.116 9.06378 30.1171L9.02428 30.116V30.2051C9.20147 30.2037 9.38408 30.1884 9.56282 30.1884C9.7335 30.1884 9.90387 30.2037 10.0727 30.2051V30.1171H10.021C9.69896 30.116 9.61919 29.9735 9.61888 29.6124V27.8544L11.7436 30.2666ZM11.6623 29.4042L11.6752 29.3922L11.6623 29.4042ZM11.6528 29.3961V29.3945L11.6495 29.3918L11.6528 29.3961Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9145 27.5313C12.6072 27.5313 12.5953 27.6064 12.534 27.9092H12.4111C12.4272 27.7928 12.4475 27.6767 12.4602 27.5562C12.4766 27.4394 12.4849 27.3236 12.4849 27.2035H12.5829C12.6159 27.3281 12.7181 27.3236 12.8292 27.3236H14.9396C15.0507 27.3236 15.1528 27.3195 15.1611 27.1948L15.2588 27.2118C15.2431 27.3236 15.2263 27.4358 15.2144 27.5482C15.2063 27.6603 15.2063 27.7721 15.2063 27.8842L15.0834 27.9304C15.075 27.777 15.0547 27.5313 14.7806 27.5313H14.1094V29.7408C14.1094 30.0612 14.2529 30.0978 14.449 30.0978H14.527V30.2227C14.3673 30.2227 14.0808 30.2066 13.8602 30.2066C13.6144 30.2066 13.3277 30.2227 13.1681 30.2227V30.0978H13.2461C13.4716 30.0978 13.5856 30.0774 13.5856 29.7495V27.5313H12.9145Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5273 30.2405C14.366 30.2405 14.0798 30.224 13.8602 30.224C13.6147 30.224 13.3285 30.2405 13.168 30.2405H13.1505V30.08H13.2461C13.4716 30.0746 13.5622 30.0717 13.5673 29.7495V27.5491H12.9144V27.5128H13.6028V29.7495C13.6028 30.083 13.4703 30.1166 13.2461 30.1169H13.1855V30.2047C13.3469 30.2035 13.6226 30.1883 13.8602 30.1883C14.0731 30.1883 14.3465 30.2035 14.5087 30.2047V30.1169H14.4489C14.251 30.1166 14.0917 30.0673 14.0917 29.7409V27.5128H14.7805C15.055 27.5139 15.0914 27.7506 15.0999 27.9052L15.1885 27.872C15.1885 27.7635 15.1889 27.6549 15.1962 27.5458C15.2083 27.4384 15.2232 27.3329 15.2385 27.2265L15.1764 27.216C15.1573 27.3369 15.0419 27.3433 14.9394 27.3417H12.8077C12.7114 27.3419 12.6065 27.3372 12.5697 27.2213H12.5021C12.5015 27.3361 12.4938 27.4475 12.4783 27.5582C12.4661 27.6723 12.4473 27.7819 12.4324 27.892H12.5198C12.5735 27.6022 12.6085 27.5087 12.9144 27.5128V27.5491C12.6113 27.5552 12.618 27.6066 12.5512 27.9135L12.5483 27.9276H12.3906L12.3928 27.9061C12.4095 27.7902 12.4303 27.6736 12.4422 27.553C12.4592 27.4378 12.467 27.3225 12.467 27.2035V27.1851H12.5969L12.6 27.1982C12.6276 27.3029 12.7033 27.3037 12.8077 27.3056H14.9394C15.0534 27.3037 15.1364 27.3021 15.1434 27.1935L15.1448 27.1738L15.1634 27.1776L15.2791 27.1962L15.2761 27.2145C15.2599 27.326 15.2439 27.4378 15.2315 27.5491C15.2239 27.6604 15.2239 27.772 15.2239 27.8843V27.8968L15.212 27.9017L15.0672 27.9555L15.0663 27.9314C15.055 27.7752 15.0392 27.5491 14.7805 27.5491H14.1274V29.7409C14.1314 30.054 14.2537 30.0761 14.4489 30.08H14.5446V30.2405H14.5273Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3896 30.098H15.4473C15.5941 30.098 15.7501 30.0775 15.7501 29.8614V27.6856C15.7501 27.4691 15.5941 27.4486 15.4473 27.4486H15.3896V27.3237C15.6384 27.3237 16.0649 27.3402 16.408 27.3402C16.7523 27.3402 17.1773 27.3237 17.4555 27.3237C17.4484 27.5023 17.4523 27.7771 17.4643 27.9595L17.341 27.9925C17.3214 27.7224 17.2723 27.507 16.8425 27.507H16.2744V28.5944H16.7604C17.0059 28.5944 17.0593 28.4537 17.0836 28.2293H17.2063C17.1981 28.3915 17.1938 28.5534 17.1938 28.7152C17.1938 28.8733 17.1981 29.031 17.2063 29.1885L17.0836 29.2134C17.0593 28.9645 17.0471 28.8026 16.7644 28.8026H16.2744V29.7697C16.2744 30.0401 16.5107 30.0401 16.7728 30.0401C17.2639 30.0401 17.4806 30.0066 17.6034 29.5338L17.7176 29.5624C17.6644 29.7829 17.6157 30.0024 17.579 30.2228C17.3167 30.2228 16.8462 30.2068 16.4786 30.2068C16.1096 30.2068 15.6231 30.2228 15.3896 30.2228V30.098Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5784 30.2406C17.3159 30.2406 16.845 30.2233 16.478 30.2233C16.1093 30.2233 15.623 30.2406 15.3893 30.2406H15.3721V30.0801H15.4469C15.595 30.0776 15.7297 30.0644 15.7316 29.8614V27.6856C15.7297 27.4827 15.595 27.4692 15.4469 27.4665H15.3721V27.3057H15.3893C15.6392 27.3057 16.0649 27.3219 16.4078 27.3219C16.7518 27.3219 17.1766 27.3057 17.4553 27.3057H17.4734L17.4728 27.3248C17.4701 27.3869 17.4684 27.4608 17.4684 27.539C17.4684 27.6825 17.4728 27.8399 17.4808 27.9581L17.4816 27.9729L17.4678 27.9771L17.3239 28.0153L17.3233 27.9939C17.2992 27.7245 17.2635 27.5284 16.8422 27.5243H16.2907L16.2904 28.5762H16.76C16.9959 28.5737 17.038 28.4514 17.0659 28.2274L17.0668 28.2107H17.2242L17.2239 28.2297C17.216 28.392 17.2112 28.5534 17.2112 28.7152C17.2112 28.8722 17.216 29.0299 17.2239 29.1878L17.2242 29.2029L17.2093 29.2063L17.0668 29.2351L17.0659 29.2156C17.0376 28.962 17.0357 28.823 16.7642 28.8201H16.2907V29.7698C16.2913 30.0222 16.5057 30.0208 16.7724 30.0222C17.2651 30.0192 17.4624 29.9947 17.5857 29.5289L17.5899 29.5121L17.6071 29.5149L17.7383 29.5495L17.7345 29.5666C17.6814 29.7864 17.6326 30.006 17.5956 30.2258L17.5925 30.2406H17.5784ZM17.5634 30.2048C17.5992 29.9948 17.6458 29.785 17.696 29.576L17.6155 29.5554C17.4929 30.0199 17.2555 30.0614 16.7726 30.0583C16.5147 30.0583 16.257 30.0583 16.2556 29.7698V28.7846H16.7644C17.0501 28.7816 17.0789 28.9564 17.0994 29.1927L17.1877 29.1743C17.1798 29.0212 17.1757 28.8674 17.1757 28.7152C17.1757 28.5593 17.1798 28.4037 17.1877 28.2469H17.0994C17.0763 28.4639 17.0095 28.6153 16.7602 28.6126H16.2556V27.4884H16.8424C17.2679 27.4849 17.3384 27.7085 17.357 27.9698L17.4451 27.9454C17.438 27.8283 17.4332 27.6777 17.4332 27.539C17.4332 27.4679 17.435 27.4005 17.4373 27.3417C17.1593 27.343 16.7444 27.3581 16.408 27.3581C16.0717 27.3581 15.6579 27.343 15.4074 27.3417V27.4301H15.4471C15.5927 27.4304 15.7667 27.456 15.7677 27.6857V29.8614C15.7667 30.0907 15.5927 30.116 15.4471 30.1171H15.4074V30.2048C15.6456 30.204 16.1186 30.1884 16.4781 30.1884C16.8393 30.1884 17.2996 30.204 17.5634 30.2048Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.27 27.7636C18.27 27.4608 18.1062 27.4484 17.9792 27.4484H17.9053V27.3237C18.0363 27.3237 18.29 27.3402 18.5398 27.3402C18.7849 27.3402 18.9816 27.3237 19.1984 27.3237C19.7132 27.3237 20.1725 27.4647 20.1725 28.0549C20.1725 28.4284 19.9268 28.6565 19.6037 28.7861L20.3031 29.8487C20.418 30.0244 20.4991 30.0736 20.7002 30.098V30.2228C20.5648 30.2228 20.4339 30.2068 20.2993 30.2068C20.1725 30.2068 20.041 30.2228 19.9148 30.2228C19.5994 29.8035 19.3291 29.3552 19.0634 28.8768H18.7937V29.7661C18.7937 30.0859 18.9407 30.098 19.1282 30.098H19.2024V30.2228C18.9687 30.2228 18.7324 30.2068 18.4986 30.2068C18.3022 30.2068 18.1099 30.2228 17.9053 30.2228V30.098H17.9792C18.1311 30.098 18.27 30.0277 18.27 29.8743V27.7636ZM18.7938 28.7271H18.9938C19.4035 28.7271 19.624 28.5697 19.624 28.0794C19.624 27.7101 19.3908 27.4733 19.0262 27.4733C18.9033 27.4733 18.851 27.4861 18.7938 27.4901V28.7271Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.6994 30.2406C20.5622 30.2406 20.4321 30.2239 20.2975 30.2239C20.1728 30.2239 20.0419 30.2406 19.8994 30.2337C19.5855 29.8155 19.3165 29.3697 19.0522 28.8955H18.8105V29.7653C18.8149 30.078 18.9384 30.0757 19.1275 30.0801H19.2193V30.2406H19.2012C18.9674 30.2406 18.7296 30.2239 18.4977 30.2239C18.3023 30.2239 18.1101 30.2406 17.9045 30.2406H17.8867V30.0801H17.9784C18.1256 30.079 18.2499 30.0139 18.2505 29.8743V27.7636C18.2474 27.4692 18.1054 27.4706 17.9784 27.4665H17.8867V27.3057H17.9045C18.037 27.3057 18.2896 27.3219 18.5391 27.3219C18.7833 27.3219 18.9796 27.3057 19.1977 27.3057C19.7136 27.3068 20.1883 27.4509 20.1895 28.0543C20.1895 28.4291 19.9455 28.6633 19.6299 28.794L20.317 29.8388C20.4315 30.0111 20.5027 30.0541 20.7018 30.0801L20.7166 30.0824V30.2406H20.6994ZM18.7927 28.8589H19.0723L19.0774 28.8682C19.3438 29.3453 19.6127 29.7938 19.9139 30.2051C20.0385 30.2051 20.17 30.1884 20.2974 30.1884C20.428 30.1884 20.5544 30.2029 20.6814 30.2048V30.1136C20.4896 30.0899 20.3995 30.0311 20.2878 29.8589L19.5755 28.7778L19.5956 28.7695C19.9161 28.6414 20.1535 28.4195 20.1537 28.0543C20.1535 27.4782 19.712 27.3445 19.1976 27.3417C18.9821 27.3417 18.7854 27.3585 18.539 27.3585C18.2986 27.3585 18.0558 27.343 17.9219 27.3417V27.4301H17.9783C18.1053 27.4304 18.2861 27.4518 18.2861 27.7637V29.8743C18.2861 30.041 18.1323 30.1168 17.9783 30.1171H17.9219V30.2048C18.1186 30.204 18.3054 30.1884 18.4977 30.1884C18.7261 30.1884 18.9572 30.204 19.1835 30.2048V30.1171H19.1274C18.9411 30.1168 18.7746 30.0933 18.7746 29.7654V28.8589H18.7927ZM18.7926 28.7449H18.7745V27.4733L18.7901 27.472C18.8462 27.4674 18.9013 27.456 19.0251 27.456C19.3978 27.456 19.6405 27.7017 19.6408 28.0804C19.6397 28.5762 19.4055 28.7448 18.9927 28.7449H18.7926ZM18.993 28.7094C19.398 28.7053 19.6021 28.5628 19.6061 28.0803C19.6037 27.7174 19.3817 27.4923 19.0253 27.4908C18.9149 27.4908 18.8627 27.5011 18.8105 27.5063V28.7094H18.993Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.4779 29.4042L23.485 29.3961V27.8391C23.485 27.4982 23.2526 27.4484 23.1297 27.4484H23.0401V27.3237C23.2324 27.3237 23.42 27.3402 23.6128 27.3402C23.781 27.3402 23.9475 27.3237 24.1165 27.3237V27.4484H24.0549C23.8829 27.4484 23.6907 27.4816 23.6907 27.9758V29.8655C23.6907 30.0111 23.6948 30.1563 23.7149 30.2852H23.56L21.453 27.9008V29.6124C21.453 29.974 21.522 30.098 21.8371 30.098H21.9068V30.2228C21.731 30.2228 21.5547 30.2066 21.3789 30.2066C21.1941 30.2066 21.0063 30.2228 20.8223 30.2228V30.098H20.8791C21.1616 30.098 21.248 29.9027 21.248 29.5715V27.8216C21.248 27.5893 21.0595 27.4484 20.8755 27.4484H20.8223V27.3237C20.9772 27.3237 21.1379 27.3402 21.2931 27.3402C21.4147 27.3402 21.534 27.3237 21.6569 27.3237L23.4779 29.4042Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.7146 30.3027L23.5466 30.2969L21.4697 27.948V29.6122C21.4745 29.974 21.5284 30.0761 21.8369 30.0801H21.9237V30.2406H21.9059C21.729 30.2406 21.5534 30.2233 21.378 30.2233C21.1954 30.2233 21.0063 30.2406 20.822 30.2406H20.8037V30.0801H20.879C21.1493 30.079 21.2267 29.9021 21.2293 29.5704V27.8216C21.2289 27.6003 21.0504 27.4665 20.8754 27.4665H20.8037V27.3057H20.822C20.9783 27.3057 21.1384 27.3219 21.2928 27.3219C21.413 27.3219 21.5315 27.3057 21.6687 27.311L23.4676 29.3667V27.8391C23.4665 27.5092 23.2486 27.4684 23.1296 27.4665H23.0217V27.3057H23.0395C23.2328 27.3057 23.4214 27.3219 23.6127 27.3219C23.7794 27.3219 23.9469 27.3057 24.1156 27.3057H24.1337V27.4665H24.0547C23.8859 27.4706 23.712 27.486 23.708 27.9758V29.8655C23.708 30.0109 23.7115 30.1549 23.7324 30.2822L23.7344 30.3027H23.7146ZM23.5596 30.2666H23.6937C23.6757 30.1424 23.6722 30.0037 23.6722 29.8655V27.9759C23.6725 27.4774 23.8794 27.4312 24.0546 27.4301H24.0976V27.3417C23.9365 27.343 23.7748 27.3581 23.6125 27.3581C23.4245 27.3581 23.2422 27.343 23.0571 27.3417V27.4301H23.1294C23.2555 27.4312 23.5033 27.4871 23.5033 27.8391L23.4974 29.4092L23.49 29.4172L23.4772 29.4309L21.6566 27.3417C21.5349 27.3417 21.4163 27.3581 21.2927 27.3581C21.1409 27.3581 20.988 27.343 20.8393 27.3417V27.4301H20.8752C21.0678 27.4312 21.2646 27.5785 21.2646 27.8217V29.5705C21.2646 29.9037 21.1722 30.116 20.8788 30.1171L20.8393 30.1168V30.2049C21.016 30.2037 21.1983 30.1884 21.3778 30.1884C21.5495 30.1884 21.7195 30.2037 21.8887 30.2049V30.1171H21.8368C21.5148 30.1168 21.4345 29.974 21.4336 29.6123V27.855L23.5596 30.2666ZM23.4775 29.4042L23.4908 29.3922L23.4775 29.4042ZM23.4674 29.3961V29.395L23.4645 29.3918L23.4674 29.3961Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.7741 29.6286C24.7329 29.7693 24.6835 29.8784 24.6835 29.9521C24.6835 30.0771 24.8559 30.0977 24.9905 30.0977H25.0362V30.2224C24.8718 30.2134 24.7049 30.2064 24.5402 30.2064C24.3929 30.2064 24.2464 30.2134 24.0986 30.2224V30.0977H24.1236C24.2828 30.0977 24.4183 30.002 24.479 29.8275L25.1337 27.9218C25.1872 27.7677 25.2609 27.5602 25.2858 27.4062C25.4159 27.3607 25.5803 27.2782 25.6577 27.2277C25.6704 27.2235 25.678 27.2192 25.6904 27.2192C25.7028 27.2192 25.7104 27.2192 25.7194 27.2323C25.7314 27.2651 25.7434 27.3026 25.7561 27.3357L26.5093 29.5082C26.5584 29.6531 26.607 29.8067 26.6594 29.932C26.7092 30.0485 26.7952 30.0977 26.9307 30.0977H26.9552V30.2224C26.7709 30.2134 26.5862 30.2064 26.3908 30.2064C26.1902 30.2064 25.985 30.2134 25.7763 30.2224V30.0977H25.8214C25.915 30.0977 26.0756 30.0812 26.0756 29.9773C26.0756 29.9237 26.0386 29.8114 25.9929 29.678L25.8335 29.1964H24.9048L24.7741 29.6286ZM25.3715 27.7887H25.363L24.9827 28.9642H25.7472L25.3715 27.7887Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26.954 30.2404C26.7702 30.2324 26.5857 30.2231 26.3909 30.2231C26.1903 30.2231 25.9861 30.2324 25.7774 30.2404L25.7585 30.2414V30.0791H25.8215C25.9163 30.0791 26.0569 30.0576 26.0572 29.9776C26.0582 29.9302 26.0215 29.8164 25.9764 29.6844L25.8206 29.2145H24.9181L24.7907 29.6342C24.7495 29.7754 24.6998 29.8851 24.7006 29.9527C24.702 30.0541 24.8547 30.0791 24.9905 30.0791H25.0534V30.2414L25.0348 30.2404C24.8713 30.2324 24.7043 30.2231 24.5406 30.2231C24.3945 30.2231 24.2466 30.2324 24.1001 30.2404L24.0811 30.2414V30.0791H24.1235C24.2756 30.0788 24.4026 29.9906 24.4618 29.8219L25.1171 27.9156C25.1699 27.7619 25.2442 27.5553 25.2796 27.3893C25.408 27.3451 25.5726 27.2613 25.6511 27.2112C25.6626 27.2071 25.6739 27.2017 25.6903 27.2017C25.7004 27.2011 25.7224 27.2038 25.7357 27.2255C25.7473 27.2596 25.7603 27.2969 25.7727 27.3303L26.5261 29.5025C26.5742 29.6479 26.6232 29.8013 26.6768 29.9244C26.7242 30.0351 26.7993 30.0788 26.9308 30.0791H26.9721V30.2414L26.954 30.2404ZM25.7943 30.2036C25.9968 30.1963 26.1955 30.1883 26.391 30.1883C26.5807 30.1883 26.7591 30.1963 26.9369 30.2036V30.1166H26.9309C26.7906 30.1176 26.6941 30.0616 26.6439 29.9391C26.5906 29.8137 26.5409 29.6595 26.4926 29.5141L25.7392 27.3417C25.7268 27.3086 25.7152 27.2715 25.7045 27.2419C25.7005 27.2378 25.7014 27.2378 25.6981 27.2378H25.6904C25.6822 27.2378 25.6772 27.2403 25.6667 27.243C25.588 27.2949 25.424 27.3768 25.3023 27.4092C25.2773 27.5666 25.2036 27.7741 25.1505 27.928L24.4958 29.8338C24.4335 30.0143 24.2896 30.1169 24.1236 30.1166H24.1168V30.2036C24.2571 30.1963 24.3987 30.1883 24.5407 30.1883C24.699 30.1883 24.8604 30.1963 25.017 30.2036V30.1166H24.9906C24.857 30.1147 24.6708 30.1 24.6661 29.9528C24.6665 29.8704 24.7166 29.7642 24.7568 29.6238L24.7741 29.629L24.7568 29.6233L24.8915 29.1795H25.8456L26.0095 29.6727C26.0555 29.8063 26.0926 29.917 26.0926 29.9777C26.0866 30.1048 25.9144 30.1143 25.8216 30.1166H25.7943V30.2036ZM24.958 28.9822L25.3497 27.7704H25.3717V27.7888L25.3674 27.7901L25.3717 27.7888V27.7704H25.384L25.7729 28.9822H24.958ZM25.0067 28.946H25.723L25.3669 27.8331L25.0067 28.946ZM25.3539 27.7943L25.3634 27.7913L25.3539 27.7943Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.1347 27.5313C26.8279 27.5313 26.8155 27.6064 26.7538 27.9092H26.6309C26.647 27.7928 26.6679 27.6767 26.6806 27.5562C26.6965 27.4394 26.7044 27.3236 26.7044 27.2035H26.8034C26.8355 27.3281 26.938 27.3236 27.0484 27.3236H29.1601C29.2701 27.3236 29.3723 27.3195 29.3804 27.1948L29.4783 27.2118C29.4631 27.3236 29.4468 27.4358 29.434 27.5482C29.425 27.6603 29.425 27.7721 29.425 27.8842L29.3028 27.9304C29.2955 27.777 29.2749 27.5313 29.0001 27.5313H28.3292V29.7408C28.3292 30.0612 28.4726 30.0978 28.6687 30.0978H28.7469V30.2227C28.5871 30.2227 28.3011 30.2066 28.0797 30.2066C27.8346 30.2066 27.5475 30.2227 27.3879 30.2227V30.0978H27.4658C27.6914 30.0978 27.8055 30.0774 27.8055 29.7495V27.5313H27.1347Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28.748 30.2405C28.5872 30.2405 28.3003 30.224 28.0804 30.224C27.836 30.224 27.5495 30.2405 27.3892 30.2405H27.371V30.08H27.4669C27.6926 30.0746 27.783 30.0717 27.7885 29.7495L27.7881 27.5491H27.1358V27.5128H27.8242V29.7495C27.8242 30.083 27.6917 30.1158 27.4669 30.1166H27.4067V30.205C27.5684 30.2035 27.8433 30.1883 28.0804 30.1883C28.2943 30.1883 28.5681 30.2035 28.7297 30.205V30.1166H28.6696C28.4724 30.1158 28.313 30.0677 28.3127 29.7409V27.5128H29.0012C29.2761 27.5139 29.3119 27.7506 29.3198 27.9052L29.4087 27.872C29.4087 27.7635 29.4093 27.6549 29.4177 27.5463C29.4287 27.4392 29.4442 27.3329 29.459 27.227L29.3972 27.216C29.3785 27.3369 29.263 27.3436 29.1612 27.3417H27.0286C26.9321 27.3428 26.8277 27.3372 26.7905 27.221H26.7236C26.7227 27.3359 26.7146 27.4475 26.6985 27.5582C26.6874 27.6728 26.6677 27.7827 26.6521 27.892H26.74C26.7938 27.6022 26.8293 27.5082 27.1358 27.5128V27.5491C26.8323 27.5544 26.839 27.6066 26.7723 27.9135L26.7693 27.9276H26.6113L26.6138 27.907C26.631 27.7902 26.6511 27.6736 26.6631 27.554C26.6798 27.4378 26.6874 27.3225 26.6874 27.2035V27.1851H26.8173L26.8207 27.1982C26.8494 27.3029 26.9239 27.3037 27.0286 27.3056H29.1612C29.2744 27.3037 29.357 27.3021 29.3643 27.1938L29.3649 27.1738L29.3839 27.1776L29.5001 27.1962L29.4973 27.2145C29.4804 27.326 29.4649 27.4378 29.4525 27.5491C29.4442 27.6604 29.4442 27.7722 29.4442 27.8843V27.8968L29.4322 27.9017L29.2874 27.9555L29.2868 27.9314C29.2761 27.7752 29.2599 27.5491 29.0012 27.5491H28.3479V29.7409C28.3521 30.054 28.4746 30.0761 28.6696 30.08H28.765V30.2405H28.748Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.6299 30.098H29.6872C29.8346 30.098 29.9895 30.0775 29.9895 29.8614V27.6856C29.9895 27.4691 29.8346 27.4486 29.6872 27.4486H29.6299V27.3237C29.7896 27.3237 30.0346 27.3402 30.2349 27.3402C30.4399 27.3402 30.6856 27.3237 30.8783 27.3237V27.4486H30.8208C30.6729 27.4486 30.5174 27.4691 30.5174 27.6856V29.8614C30.5174 30.0775 30.6729 30.098 30.8208 30.098H30.8783V30.2228C30.6817 30.2228 30.4359 30.2068 30.2316 30.2068C30.0307 30.2068 29.7896 30.2228 29.6299 30.2228V30.098Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.8792 30.2406C30.6814 30.2406 30.4367 30.2233 30.2325 30.2233C30.0322 30.2233 29.7906 30.2406 29.6308 30.2406H29.6133V30.0801H29.6882C29.8357 30.0776 29.9717 30.0644 29.9726 29.8614V27.6856C29.9717 27.4827 29.8357 27.4692 29.6882 27.4665H29.6133V27.3057H29.6308C29.7906 27.3057 30.0367 27.3219 30.2358 27.3219C30.4397 27.3219 30.6852 27.3057 30.8792 27.3057H30.8962V27.4665H30.8218C30.6721 27.4692 30.5375 27.4827 30.5361 27.6856V29.8614C30.5375 30.0644 30.6721 30.0776 30.8218 30.0801H30.8962V30.2406H30.8792ZM30.8605 30.2048V30.1168H30.8218C30.6749 30.1168 30.5013 30.0907 30.5013 29.8614V27.6857C30.5013 27.456 30.6749 27.4304 30.8218 27.4301H30.8605V27.3417C30.6718 27.343 30.4349 27.3581 30.2357 27.3581C30.0415 27.3581 29.8073 27.343 29.6485 27.3417V27.4301H29.6882C29.8334 27.4304 30.0078 27.456 30.0083 27.6857V29.8614C30.0078 30.0907 29.8334 30.1168 29.6882 30.1168H29.6485V30.2048C29.8062 30.2029 30.0376 30.1884 30.2324 30.1884C30.4308 30.1884 30.6675 30.2037 30.8605 30.2048Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.5103 27.2612C33.3826 27.2612 34.0779 27.81 34.0779 28.6947C34.0779 29.65 33.4026 30.285 32.5314 30.285C31.6636 30.285 31.001 29.6868 31.001 28.7937C31.001 27.9303 31.6595 27.2612 32.5103 27.2612ZM32.5722 30.1022C33.3663 30.1022 33.5048 29.3915 33.5048 28.7859C33.5048 28.179 33.1823 27.4442 32.5027 27.4442C31.7868 27.4442 31.5738 28.0922 31.5738 28.6482C31.5738 29.3915 31.9096 30.1022 32.5722 30.1022Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.9824 28.7937C30.9841 27.9203 31.6503 27.2446 32.5099 27.2432V27.2795C31.6687 27.2795 31.018 27.9394 31.0171 28.7937C31.0188 29.6767 31.6718 30.266 32.5313 30.2663C33.3937 30.266 34.0592 29.6401 34.0603 28.694C34.0595 27.8204 33.3752 27.2803 32.5099 27.2795V27.2432C33.3884 27.2441 34.0936 27.7983 34.0951 28.694C34.0942 29.6593 33.4109 30.3009 32.5313 30.3024C31.656 30.3009 30.9841 29.6967 30.9824 28.7937ZM31.5555 28.6481C31.5567 28.0892 31.7715 27.4255 32.5021 27.4255C33.1969 27.4271 33.5209 28.1755 33.5223 28.7858C33.5209 29.3914 33.3806 30.1191 32.572 30.1191V30.0839C33.35 30.0833 33.4852 29.3914 33.4864 28.7858C33.4864 28.1842 33.1672 27.4632 32.5021 27.4621C31.8002 27.4629 31.5928 28.0949 31.5909 28.6481C31.5912 29.3879 31.9239 30.0828 32.572 30.0839V30.1191C31.8928 30.1185 31.5567 29.3958 31.5555 28.6481Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M36.8353 29.4042L36.8439 29.3961V27.8391C36.8439 27.4982 36.6098 27.4484 36.4872 27.4484H36.3981V27.3237C36.5899 27.3237 36.7785 27.3402 36.9703 27.3402C37.1385 27.3402 37.3062 27.3237 37.4741 27.3237V27.4484H37.4126C37.2411 27.4484 37.048 27.4816 37.048 27.9758V29.8655C37.048 30.0111 37.0523 30.1563 37.0731 30.2852H36.9174L34.8098 27.9008V29.6124C34.8098 29.974 34.8796 30.098 35.194 30.098H35.2642V30.2228C35.0881 30.2228 34.9124 30.2066 34.7365 30.2066C34.5522 30.2066 34.3638 30.2228 34.1797 30.2228V30.098H34.2371C34.52 30.098 34.6053 29.9027 34.6053 29.5715V27.8216C34.6053 27.5893 34.4177 27.4484 34.2327 27.4484H34.1797V27.3237C34.3352 27.3237 34.4946 27.3402 34.6504 27.3402C34.7729 27.3402 34.8909 27.3237 35.0142 27.3237L36.8353 29.4042Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M37.0729 30.3027L36.9036 30.2969L34.827 27.948V29.6124C34.8318 29.974 34.8859 30.0757 35.1932 30.0793H35.2813V30.2406H35.264C35.0868 30.2406 34.9111 30.2239 34.7361 30.2239C34.5527 30.2239 34.3644 30.2406 34.1788 30.2406H34.1621V30.0793H34.2366C34.5063 30.0785 34.584 29.9021 34.5873 29.5714V27.8216C34.5871 27.6003 34.4082 27.4665 34.2324 27.4665H34.1621V27.3057H34.1788C34.3357 27.3057 34.4953 27.3219 34.6498 27.3219C34.7713 27.3219 34.8888 27.3057 35.0276 27.3121L36.8255 29.3667V27.8391C36.8241 27.5092 36.6062 27.4692 36.4868 27.4665H36.379V27.3057H36.3977C36.5899 27.3057 36.7787 27.3219 36.9694 27.3219C37.1368 27.3219 37.3038 27.3057 37.4739 27.3057H37.4911V27.4665H37.4121C37.2434 27.4709 37.0693 27.4866 37.0659 27.9758V29.8655C37.0659 30.0109 37.0691 30.1559 37.089 30.2822L37.0925 30.3027H37.0729ZM36.9171 30.2666H37.0512C37.0339 30.1416 37.0298 30.0037 37.0298 29.8655V27.9759C37.0298 27.4766 37.2365 27.4312 37.4121 27.4301H37.4564V27.3417C37.2939 27.343 37.133 27.3581 36.9694 27.3581C36.7831 27.3581 36.6002 27.343 36.4149 27.3417V27.4301H36.4868C36.6132 27.4312 36.8602 27.4879 36.8602 27.8391L36.8559 29.4092L36.848 29.4172L36.835 29.4309L35.014 27.3417C34.8929 27.3417 34.7738 27.3581 34.6499 27.3581C34.499 27.3581 34.3454 27.343 34.1965 27.3417V27.4301H34.2325C34.4248 27.4312 34.6225 27.5785 34.6225 27.8217V29.5714C34.6225 29.9037 34.5311 30.116 34.2366 30.1171L34.1965 30.1168V30.2049C34.3742 30.2037 34.5563 30.1884 34.7361 30.1884C34.9068 30.1884 35.0764 30.2037 35.246 30.2049V30.1171H35.1932C34.8721 30.1168 34.7916 29.974 34.7916 29.6124V27.8544L36.9171 30.2666ZM36.8351 29.4042L36.8481 29.3922L36.8351 29.4042ZM36.8256 29.3961V29.395L36.8224 29.3918L36.8256 29.3961Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M38.1311 29.6286C38.091 29.7693 38.0416 29.8784 38.0416 29.9521C38.0416 30.0771 38.214 30.0977 38.3481 30.0977H38.3938V30.2224C38.2299 30.2134 38.062 30.2064 37.8981 30.2064C37.7508 30.2064 37.6037 30.2134 37.457 30.2224V30.0977H37.4803C37.6407 30.0977 37.7762 30.002 37.836 29.8275L38.4921 27.9218C38.5449 27.7677 38.619 27.5602 38.6425 27.4062C38.774 27.3607 38.9373 27.2782 39.0161 27.2277C39.0276 27.2235 39.0358 27.2192 39.0485 27.2192C39.0604 27.2192 39.0681 27.2192 39.0765 27.2323C39.0889 27.2651 39.1011 27.3026 39.1135 27.3357L39.8664 29.5082C39.9152 29.6531 39.9646 29.8067 40.0181 29.932C40.0672 30.0485 40.153 30.0977 40.2879 30.0977H40.3131V30.2224C40.1286 30.2134 39.9443 30.2064 39.7478 30.2064C39.5477 30.2064 39.3428 30.2134 39.1338 30.2224V30.0977H39.1792C39.2728 30.0977 39.4332 30.0812 39.4332 29.9773C39.4332 29.9237 39.3965 29.8114 39.3508 29.678L39.1913 29.1964H38.2626L38.1311 29.6286ZM38.7292 27.7887H38.721L38.3395 28.9642H39.1059L38.7292 27.7887Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M40.3115 30.2407C40.127 30.2333 39.9433 30.224 39.7482 30.224C39.5485 30.224 39.3435 30.2333 39.135 30.2407L39.1169 30.2416V30.0802H39.1791C39.2742 30.0802 39.4152 30.0578 39.4153 29.9778C39.4164 29.9305 39.3794 29.8172 39.3334 29.6846L39.1782 29.2147H38.2749L38.1485 29.6345C38.1073 29.7768 38.059 29.8854 38.0595 29.9527C38.0595 30.0544 38.213 30.0802 38.3482 30.0802H38.4107V30.2416L38.3923 30.2407C38.2289 30.2333 38.0613 30.224 37.8984 30.224C37.7517 30.224 37.6049 30.2333 37.4573 30.2407L37.4395 30.2416V30.0802H37.4805C37.6331 30.0794 37.7607 29.9907 37.8206 29.8222L38.475 27.9159C38.5275 27.7621 38.6014 27.5556 38.6373 27.3902C38.7659 27.3449 38.9302 27.2616 39.0098 27.2114C39.0204 27.2073 39.0318 27.2023 39.0486 27.2023C39.0591 27.2014 39.0806 27.204 39.0932 27.2267C39.1056 27.2594 39.1176 27.2971 39.131 27.3306L39.8834 29.5027C39.9326 29.6482 39.9814 29.8016 40.0346 29.9255C40.0827 30.0354 40.1568 30.0791 40.2876 30.0802H40.3299V30.2416L40.3115 30.2407ZM39.1516 30.204C39.354 30.1964 39.5531 30.1884 39.7482 30.1884C39.9384 30.1884 40.1164 30.1964 40.295 30.2037L40.2945 30.1167H40.2877C40.1491 30.117 40.0526 30.0617 40.0015 29.9392C39.9476 29.8138 39.8989 29.6596 39.8498 29.5146L39.0969 27.3418C39.0849 27.3087 39.0718 27.2716 39.0622 27.2428C39.0588 27.2379 39.0591 27.2379 39.0567 27.2379H39.0486C39.0398 27.2379 39.0353 27.2407 39.0255 27.2436C38.9455 27.2944 38.7817 27.3777 38.6609 27.4093C38.6355 27.5666 38.5612 27.7738 38.5085 27.9281L37.8532 29.8339C37.7909 30.0144 37.648 30.117 37.4806 30.1167H37.4745V30.2037C37.6155 30.1964 37.7561 30.1884 37.8984 30.1884C38.0569 30.1884 38.2187 30.1964 38.3759 30.2037V30.1167H38.3482C38.2152 30.1148 38.0287 30.1005 38.0234 29.9526C38.0245 29.8705 38.0749 29.7646 38.115 29.6239L38.1314 29.6291L38.115 29.6234L38.2496 29.1796H39.2033L39.3677 29.6728C39.4127 29.8064 39.4501 29.9171 39.4501 29.9777C39.4442 30.1049 39.2721 30.1144 39.1792 30.1167H39.1516V30.204ZM38.3155 28.9823L38.7084 27.7707H38.7296V27.7891L38.725 27.7904L38.7296 27.7891V27.7707H38.742L39.1289 28.9823H38.3155ZM38.3649 28.9463H39.0808L38.7249 27.834L38.3649 28.9463ZM38.7127 27.7946L38.7207 27.7916L38.7127 27.7946Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M41.3443 29.8155C41.3443 29.9824 41.458 30.0316 41.5893 30.0489C41.7568 30.0614 41.9411 30.0614 42.1299 30.0401C42.3015 30.0192 42.4488 29.9202 42.5222 29.8155C42.5873 29.7243 42.6241 29.608 42.6492 29.5168H42.7676C42.7225 29.7535 42.6653 29.9864 42.6162 30.2228C42.2569 30.2228 41.8957 30.2068 41.5362 30.2068C41.1758 30.2068 40.816 30.2228 40.4561 30.2228V30.098H40.5127C40.6603 30.098 40.8205 30.0775 40.8205 29.82V27.6856C40.8205 27.4691 40.6603 27.4484 40.5127 27.4484H40.4561V27.3237C40.6726 27.3237 40.8857 27.3402 41.1022 27.3402C41.3113 27.3402 41.5155 27.3237 41.7247 27.3237V27.4484H41.6219C41.4664 27.4484 41.3443 27.4528 41.3443 27.6729V29.8155Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M42.6158 30.2406C42.2549 30.2406 41.8945 30.2239 41.5356 30.2239C41.1757 30.2239 40.8156 30.2406 40.4547 30.2406H40.4375V30.0801H40.5122C40.6601 30.0765 40.8006 30.0659 40.8023 29.8201V27.6849C40.8006 27.4827 40.6607 27.4692 40.5122 27.4665H40.4375V27.3057H40.4547C40.6726 27.3057 40.8856 27.3219 41.1013 27.3219C41.3097 27.3219 41.5135 27.3057 41.7241 27.3057H41.7405V27.4665H41.6213C41.4625 27.4706 41.364 27.4633 41.3605 27.6729V29.8155C41.3615 29.9708 41.4618 30.0123 41.5897 30.0309C41.6617 30.0359 41.7379 30.0386 41.8166 30.0386C41.9167 30.0386 42.0206 30.0339 42.1264 30.0225C42.293 30.0024 42.4364 29.9046 42.5072 29.8056C42.5704 29.7168 42.606 29.603 42.6308 29.5126L42.6342 29.4989H42.7885L42.7849 29.5207C42.7386 29.7581 42.6823 29.9898 42.6327 30.2266L42.6294 30.2406H42.6158ZM42.6009 30.2048C42.6483 29.9792 42.7017 29.7586 42.746 29.5346H42.6616C42.6365 29.625 42.6 29.7365 42.5358 29.8269C42.4593 29.9344 42.3078 30.0359 42.1303 30.0583C42.0233 30.0693 41.9169 30.0749 41.8167 30.0749C41.7374 30.0749 41.6609 30.0713 41.5864 30.066C41.4533 30.0512 41.3246 29.9932 41.3248 29.8155V27.6729C41.3248 27.442 41.4687 27.4301 41.6214 27.4301H41.7056V27.3417C41.5041 27.343 41.3051 27.3585 41.1014 27.3585C40.89 27.3585 40.6826 27.343 40.4732 27.3417V27.4301H40.5123C40.6582 27.4301 40.8367 27.456 40.8367 27.6849V29.8201C40.8367 30.0889 40.6589 30.1168 40.5123 30.1168H40.4732V30.2048C40.8267 30.204 41.1804 30.1884 41.5357 30.1884C41.8915 30.1884 42.2467 30.204 42.6009 30.2048Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1602 12.6614C17.1602 8.77664 20.2628 5.62744 24.09 5.62744C27.9174 5.62744 31.0201 8.77664 31.0201 12.6614C31.0201 16.5462 27.9174 19.6956 24.09 19.6956C20.2628 19.6956 17.1602 16.5462 17.1602 12.6614Z",
    fill: "#FFFFFE"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28.2807 12.5227C28.2779 10.7214 27.1686 9.18519 25.6055 8.5768V16.4683C27.1686 15.8592 28.2779 14.3243 28.2807 12.5227ZM22.6238 16.4669V8.57771C21.0621 9.18799 19.9545 10.722 19.9503 12.5229C19.9545 14.3232 21.0621 15.8571 22.6238 16.4669ZM24.1156 5.85259C20.4863 5.85401 17.546 8.83908 17.5454 12.5228C17.546 16.206 20.4863 19.1906 24.1156 19.1913C27.7449 19.1906 30.6858 16.206 30.6867 12.5228C30.6858 8.83908 27.7449 5.85401 24.1156 5.85259ZM24.0995 19.8207C20.1281 19.8399 16.8594 16.5742 16.8594 12.5989C16.8594 8.25425 20.1281 5.24921 24.0995 5.25H25.9606C29.8851 5.24921 33.4668 8.25284 33.4668 12.5989C33.4668 16.5728 29.8851 19.8207 25.9606 19.8207H24.0995Z",
    fill: "#0069AA"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.60352 30.098H7.66098C7.80812 30.098 7.96362 30.0775 7.96362 29.8614V27.6856C7.96362 27.4691 7.80812 27.4486 7.66098 27.4486H7.60352V27.3237C7.76305 27.3237 8.00854 27.3402 8.20958 27.3402C8.41403 27.3402 8.65921 27.3237 8.85158 27.3237V27.4486H8.79381C8.64729 27.4486 8.49147 27.4691 8.49147 27.6856V29.8614C8.49147 30.0775 8.64729 30.098 8.79381 30.098H8.85158V30.2228C8.65534 30.2228 8.40923 30.2068 8.2054 30.2068C8.00451 30.2068 7.76305 30.2228 7.60352 30.2228V30.098Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.85181 30.2406C8.65387 30.2406 8.409 30.2239 8.20532 30.2239C8.00506 30.2239 7.76437 30.2406 7.60375 30.2406H7.58594V30.0801H7.6609C7.80944 30.0765 7.9445 30.0644 7.94574 29.8614V27.6856C7.9445 27.4824 7.80944 27.4692 7.6609 27.4665H7.58594V27.3057H7.60375C7.76437 27.3057 8.0097 27.3219 8.20981 27.3219C8.41333 27.3219 8.65836 27.3057 8.85181 27.3057H8.87009V27.4665H8.79482C8.64613 27.4692 8.51029 27.4824 8.50952 27.6856V29.8614C8.51029 30.0644 8.64613 30.0765 8.79482 30.0801H8.87009V30.2406H8.85181ZM8.83398 30.2051L8.83413 30.1168H8.79464C8.64827 30.1168 8.47433 30.0907 8.4734 29.8614V27.6857C8.47433 27.456 8.64827 27.4304 8.79464 27.4304H8.83398V27.3417C8.64517 27.3419 8.40804 27.3585 8.20963 27.3585C8.01525 27.3585 7.77998 27.343 7.62154 27.3417V27.4304H7.66072C7.80662 27.4304 7.98087 27.456 7.98087 27.6857V29.8614C7.98087 30.0907 7.80662 30.1168 7.66072 30.1168H7.62154V30.2051C7.77998 30.2037 8.01107 30.1884 8.20514 30.1884C8.40448 30.1884 8.64099 30.204 8.83398 30.2051Z",
    fill: "#1A1919"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M42.7169 27.2061C42.9638 27.2061 43.1479 27.3985 43.1479 27.6444C43.1479 27.8901 42.9638 28.0804 42.7169 28.0804C42.4706 28.0804 42.2861 27.8901 42.2861 27.6444C42.2861 27.3985 42.4706 27.2061 42.7169 27.2061ZM42.7168 27.9992C42.9101 27.9992 43.0577 27.8324 43.0577 27.6443C43.0577 27.456 42.9118 27.288 42.7168 27.288C42.5229 27.288 42.3754 27.456 42.3754 27.6443C42.3754 27.8324 42.5229 27.9992 42.7168 27.9992ZM42.5025 27.8751V27.8538C42.5551 27.8461 42.565 27.8475 42.565 27.8149V27.4907C42.565 27.4451 42.5606 27.4294 42.5042 27.4319V27.4096H42.7247C42.8005 27.4096 42.8703 27.4464 42.8703 27.5259C42.8703 27.5908 42.8282 27.6391 42.7684 27.6578L42.8393 27.7581C42.8723 27.8034 42.91 27.8461 42.9341 27.8612V27.8751H42.8503C42.8101 27.8751 42.7745 27.7892 42.6955 27.674H42.6478V27.8189C42.6478 27.8475 42.6577 27.8461 42.7106 27.8538V27.8751H42.5025ZM42.6481 27.6444H42.6989C42.7545 27.6444 42.7802 27.6018 42.7802 27.5328C42.7802 27.4633 42.7406 27.4386 42.6961 27.4386H42.6481V27.6444Z",
    fill: "#1A1919"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/discover.js

/* harmony default export */ var discover = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.878906",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1461 17.7823C17.1461 19.9191 18.8322 21.576 21.0021 21.576C21.6154 21.576 22.141 21.456 22.7888 21.1524V19.4832C22.2192 20.0506 21.7145 20.2795 21.0685 20.2795C19.6332 20.2795 18.6146 19.2439 18.6146 17.7717C18.6146 16.376 19.6654 15.2751 21.0021 15.2751C21.6818 15.2751 22.1963 15.5163 22.7888 16.0929V14.4246C22.1633 14.1089 21.649 13.978 21.0357 13.978C18.8768 13.978 17.1461 15.6685 17.1461 17.7823ZM13.4892 16.0168C13.4892 16.4097 13.7401 16.6173 14.5953 16.9321C16.2163 17.5222 16.6967 18.0449 16.6967 19.2001C16.6967 20.6072 15.6577 21.5872 14.177 21.5872C13.0926 21.5872 12.304 21.1622 11.6475 20.2031L12.5682 19.3209C12.8962 19.9523 13.4437 20.2907 14.1234 20.2907C14.7593 20.2907 15.2298 19.8542 15.2298 19.2653C15.2298 18.96 15.0873 18.6979 14.8025 18.5128C14.6594 18.4252 14.3754 18.2949 13.8174 18.0988C12.479 17.6197 12.0201 17.1068 12.0201 16.1053C12.0201 14.9155 13.006 14.0224 14.2987 14.0224C15.0997 14.0224 15.8327 14.2948 16.4455 14.8282L15.6998 15.7997C15.3286 15.3857 14.9775 15.211 14.5507 15.211C13.9366 15.211 13.4892 15.559 13.4892 16.0168ZM9.68583 21.4123H11.1109V14.1424H9.68583V21.4123ZM6.77288 19.6035C6.32524 20.006 5.74353 20.1815 4.82283 20.1815H4.44039V15.374H4.82283C5.74353 15.374 6.30238 15.538 6.77288 15.9621C7.26569 16.3986 7.56205 17.0755 7.56205 17.7717C7.56205 18.4697 7.26569 19.1671 6.77288 19.6035ZM5.10834 14.1424H3.0166V21.4121H5.09733C6.20374 21.4121 7.0025 21.1525 7.70389 20.5728C8.53737 19.8867 9.03017 18.8523 9.03017 17.7824C9.03017 15.6369 7.41938 14.1424 5.10834 14.1424ZM32.1394 14.1424L34.0875 19.0255L36.061 14.1424H37.6057L34.4496 21.5988H33.6828L30.5826 14.1424H32.1394ZM38.2501 21.4122H42.2913V20.1815H39.6741V18.2191H42.1951V16.9878H39.6741V15.3742H42.2913V14.1424H38.2501V21.4122ZM44.6585 17.4893H45.0748C45.9851 17.4893 46.4674 17.0958 46.4674 16.365C46.4674 15.6575 45.9851 15.2876 45.0974 15.2876H44.6585V17.4893ZM45.3485 14.1422C46.9918 14.1422 47.9339 14.9275 47.9339 16.2886C47.9339 17.4016 47.3429 18.1325 46.2695 18.3496L48.5695 21.4121H46.817L44.8447 18.4917H44.6587V21.4121H43.2353V14.1422H45.3485Z",
    fill: "#1D1D1B"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.415 19.8859C31.5716 18.0862 31.0433 15.6953 29.235 14.5445C27.4267 13.3937 25.0236 13.9191 23.867 15.7188C22.7107 17.518 23.2391 19.9096 25.0474 21.0604C26.8557 22.2112 29.2587 21.6851 30.415 19.8859Z",
    fill: "url(#paint0_linear)"
  }), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("linearGradient", {
    id: "paint0_linear",
    x1: "32.5088",
    y1: "16.6279",
    x2: "25.9795",
    y2: "12.4317",
    gradientUnits: "userSpaceOnUse"
  }, Object(external_wp_element_["createElement"])("stop", {
    stopColor: "#F6A000"
  }), Object(external_wp_element_["createElement"])("stop", {
    offset: "0.623918",
    stopColor: "#E47E02"
  }), Object(external_wp_element_["createElement"])("stop", {
    offset: "1",
    stopColor: "#D36002"
  }))));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/jcb.js

/* harmony default export */ var jcb = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.878906",
    y: "0.5",
    width: "49",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M33.473 17.5973H33.494H33.5346H33.5752H33.6158H33.6564H33.697H33.7376H33.7782H33.8188H33.8594H33.9H33.9406H33.9812H34.0218H34.0624H34.103H34.1436H34.1842H34.2248H34.2654H34.306H34.3466H34.3872H34.4278H34.4684H34.509H34.5496H34.5902H34.6308H34.6714H34.712H34.7527H34.7932H34.8338H34.8745H34.915H34.9556H34.9963H35.0368H35.0774H35.1181H35.1586H35.1992H35.2399H35.2805H35.321H35.3617H35.4023H35.4428H35.4835H35.5241H35.5646H35.6053H35.6459H35.6864H35.7271H35.7677H35.8083H35.8489H35.8895H35.9233L35.9301 17.5975C35.9426 17.5978 35.9563 17.5984 35.9707 17.5991C35.9837 17.5999 35.9973 17.6008 36.0113 17.6018C36.0246 17.6028 36.0383 17.604 36.0519 17.6052C36.0656 17.6065 36.0792 17.6079 36.0925 17.6093C36.1064 17.6109 36.1201 17.6126 36.1331 17.6143C36.1476 17.6163 36.1613 17.6183 36.1737 17.6205C36.1826 17.622 36.1909 17.6235 36.1982 17.6251L36.2143 17.6288C36.2279 17.632 36.2414 17.6354 36.2549 17.6392C36.2685 17.643 36.282 17.647 36.2955 17.6513C36.3091 17.6557 36.3227 17.6603 36.3361 17.6653C36.3497 17.6702 36.3632 17.6755 36.3767 17.681C36.3903 17.6866 36.4039 17.6926 36.4173 17.6987C36.431 17.705 36.4445 17.7116 36.4579 17.7185C36.4716 17.7254 36.4851 17.7328 36.4985 17.7403C36.5122 17.7481 36.5257 17.7562 36.5391 17.7646C36.5528 17.7732 36.5664 17.7821 36.5797 17.7913C36.5934 17.8008 36.607 17.8105 36.6203 17.8206C36.634 17.8311 36.6476 17.8419 36.6609 17.8531C36.6747 17.8646 36.6882 17.8766 36.7015 17.8889C36.7154 17.9017 36.7289 17.9148 36.7421 17.9284C36.7561 17.9426 36.7695 17.9574 36.7827 17.9725C36.7967 17.9885 36.8102 18.005 36.8233 18.0219C36.8374 18.0401 36.8509 18.0587 36.8639 18.0779C36.8781 18.0989 36.8917 18.1205 36.9045 18.1426C36.919 18.1675 36.9325 18.1932 36.9451 18.2196C36.96 18.2508 36.9736 18.283 36.9857 18.3161C37.002 18.3606 37.0156 18.4067 37.0263 18.4544C37.0449 18.5369 37.0549 18.6238 37.0549 18.7145C37.0549 18.8057 37.0449 18.893 37.0263 18.9758C37.0156 19.0235 37.002 19.0698 36.9857 19.1143C36.9736 19.1476 36.96 19.1798 36.9451 19.2111C36.9325 19.2375 36.919 19.2632 36.9045 19.2882C36.8917 19.3103 36.8782 19.3319 36.8639 19.3529C36.8509 19.3721 36.8374 19.3908 36.8233 19.409C36.8102 19.4259 36.7967 19.4423 36.7827 19.4584C36.7695 19.4734 36.756 19.4881 36.7421 19.5024C36.7289 19.516 36.7153 19.5291 36.7015 19.5419C36.6882 19.5541 36.6747 19.566 36.6609 19.5775C36.6476 19.5886 36.6341 19.5995 36.6203 19.6099C36.607 19.62 36.5934 19.6297 36.5797 19.6391C36.5664 19.6483 36.5528 19.6572 36.5391 19.6657C36.5257 19.674 36.5122 19.6821 36.4985 19.6898C36.4851 19.6974 36.4716 19.7046 36.4579 19.7116C36.4445 19.7184 36.431 19.7249 36.4173 19.7312C36.4039 19.7373 36.3903 19.7432 36.3767 19.7488C36.3632 19.7542 36.3497 19.7595 36.3361 19.7644C36.3227 19.7692 36.3091 19.7738 36.2955 19.7781C36.282 19.7824 36.2685 19.7863 36.2549 19.7901C36.2414 19.7937 36.2279 19.7971 36.2143 19.8003L36.1982 19.8039C36.1909 19.8056 36.1826 19.8073 36.1737 19.8089C36.1613 19.8111 36.1476 19.8132 36.1331 19.8152C36.1201 19.8169 36.1064 19.8186 36.0925 19.8202C36.0792 19.8217 36.0656 19.823 36.0519 19.8243C36.0383 19.8255 36.0246 19.8266 36.0113 19.8276C35.9973 19.8286 35.9837 19.8295 35.9707 19.8301C35.9563 19.8309 35.9426 19.8314 35.9301 19.8317L35.9083 19.832H35.8895H35.8489H35.8083H35.7677H35.7271H35.6864H35.6459H35.6053H35.5646H35.5241H35.4835H35.4428H35.4023H35.3617H35.321H35.2805H35.2399H35.1992H35.1586H35.1181H35.0774H35.0368H34.9963H34.9556H34.915H34.8745H34.8338H34.7932H34.7527H34.712H34.6714H34.6308H34.5902H34.5496H34.509H34.4684H34.4278H34.3872H34.3466H34.306H34.2654H34.2248H34.1842H34.1436H34.103H34.0624H34.0218H33.9812H33.9406H33.9H33.8594H33.8188H33.7782H33.7376H33.697H33.6564H33.6158H33.5752H33.5346H33.494H33.473V17.5973ZM36.7423 15.0681C36.7586 15.1431 36.7673 15.2226 36.7673 15.3062C36.7673 15.3898 36.7586 15.4691 36.7423 15.5441C36.7318 15.5923 36.7181 15.6385 36.7016 15.6829C36.6896 15.7153 36.676 15.7467 36.661 15.7769C36.6485 15.8023 36.6349 15.8269 36.6204 15.8508C36.6076 15.8718 36.594 15.8923 36.5798 15.9122C36.5668 15.9303 36.5533 15.9478 36.5392 15.9649C36.5261 15.9807 36.5126 15.9961 36.4986 16.011C36.4855 16.0251 36.472 16.0387 36.4581 16.0518C36.4448 16.0644 36.4313 16.0765 36.4174 16.0883C36.4042 16.0996 36.3906 16.1104 36.3768 16.121C36.3636 16.1311 36.35 16.1409 36.3363 16.1504C36.3229 16.1596 36.3094 16.1684 36.2956 16.1769C36.2823 16.1852 36.2687 16.1931 36.255 16.2007C36.2417 16.2082 36.2281 16.2154 36.2145 16.2222C36.2011 16.2289 36.1875 16.2353 36.1738 16.2415C36.1604 16.2475 36.1469 16.2532 36.1332 16.2586C36.1198 16.2639 36.1063 16.269 36.0926 16.2737C36.0792 16.2784 36.0657 16.2829 36.0521 16.287C36.0386 16.2911 36.0251 16.295 36.0114 16.2985C35.998 16.3021 35.9845 16.3053 35.9708 16.3083C35.9574 16.3113 35.9439 16.3139 35.9303 16.3164L35.9204 16.3182C35.9125 16.3195 35.902 16.3211 35.8896 16.3227C35.8777 16.3242 35.8639 16.3258 35.849 16.3273C35.8362 16.3286 35.8225 16.3299 35.8085 16.3311C35.7952 16.3322 35.7815 16.3332 35.7678 16.334C35.7542 16.3349 35.7405 16.3357 35.7272 16.3362C35.7132 16.3368 35.6995 16.3372 35.6867 16.3372L35.6802 16.3373H35.6461H35.6054H35.5648H35.5243H35.4836H35.443H35.4025H35.3619H35.3212H35.2807H35.2401H35.1994H35.1589H35.1183H35.0776H35.037H34.9965H34.9559H34.9152H34.8747H34.8341H34.7934H34.7529H34.7123H34.6716H34.6311H34.5905H34.5499H34.5092H34.4687H34.4281H34.3874H34.3469H34.3063H34.2657H34.2251H34.1845H34.1439H34.1033H34.0627H34.0221H33.9814H33.9409H33.9003H33.8597H33.8191H33.7785H33.7379H33.6973H33.6567H33.6161H33.5754H33.5349H33.4943H33.473V14.2751H33.4943H33.5349H33.5754H33.6161H33.6567H33.6973H33.7379H33.7785H33.8191H33.8597H33.9003H33.9409H33.9814H34.0221H34.0627H34.1033H34.1439H34.1845H34.2251H34.2657H34.3063H34.3469H34.3874H34.4281H34.4687H34.5092H34.5499H34.5905H34.6311H34.6716H34.7123H34.7529H34.7934H34.8341H34.8747H34.9152H34.9559H34.9965H35.037H35.0776H35.1183H35.1589H35.1994H35.2401H35.2807H35.3212H35.3619H35.4025H35.443H35.4836H35.5243H35.5648H35.6054H35.6461H35.6867H35.7037L35.7272 14.2759C35.7405 14.2764 35.7542 14.2772 35.7678 14.2781C35.7815 14.279 35.7952 14.28 35.8085 14.2811C35.8225 14.2822 35.8362 14.2835 35.849 14.2848C35.8639 14.2862 35.8777 14.2877 35.8896 14.2891C35.902 14.2905 35.9125 14.2919 35.9204 14.293L35.9303 14.2948C35.9439 14.2972 35.9574 14.3 35.9708 14.303C35.9845 14.306 35.998 14.3093 36.0114 14.3129C36.0251 14.3165 36.0386 14.3203 36.0521 14.3245C36.0657 14.3287 36.0792 14.3331 36.0926 14.3378C36.1063 14.3427 36.1198 14.3477 36.1332 14.3531C36.1469 14.3585 36.1604 14.3643 36.1738 14.3703C36.1875 14.3765 36.2011 14.3829 36.2145 14.3896C36.2281 14.3965 36.2417 14.4036 36.255 14.4111C36.2687 14.4187 36.2823 14.4267 36.2956 14.435C36.3094 14.4435 36.3229 14.4523 36.3363 14.4615C36.35 14.4709 36.3636 14.4808 36.3768 14.491C36.3906 14.5015 36.4042 14.5124 36.4174 14.5237C36.4313 14.5355 36.4448 14.5476 36.4581 14.5602C36.472 14.5733 36.4855 14.5869 36.4986 14.601C36.5126 14.6159 36.5261 14.6313 36.5392 14.6471C36.5533 14.6642 36.5668 14.6818 36.5798 14.6999C36.594 14.7197 36.6076 14.7402 36.6204 14.7613C36.6349 14.7851 36.6485 14.8097 36.661 14.8351C36.676 14.8654 36.6896 14.8968 36.7016 14.9292C36.7181 14.9736 36.7318 15.0199 36.7423 15.0681ZM41.7774 4.375H41.7941L41.794 25.5542C41.794 25.6807 41.7882 25.8059 41.7774 25.9296C41.7679 26.0385 41.7543 26.1462 41.7368 26.2526C41.725 26.324 41.7115 26.3948 41.6962 26.465C41.6838 26.5221 41.6703 26.5789 41.6556 26.6351C41.6429 26.6836 41.6293 26.7318 41.615 26.7796C41.602 26.8228 41.5886 26.8658 41.5744 26.9085C41.5614 26.9472 41.5478 26.9855 41.5338 27.0237C41.5207 27.0593 41.5071 27.0946 41.4932 27.1297C41.48 27.1627 41.4665 27.1954 41.4526 27.228C41.4394 27.2588 41.4258 27.2895 41.4119 27.3199C41.3987 27.3489 41.3852 27.3778 41.3714 27.4064C41.3581 27.4339 41.3446 27.4612 41.3307 27.4883C41.3175 27.5143 41.3039 27.5402 41.2901 27.5659C41.2769 27.5906 41.2632 27.615 41.2495 27.6394C41.2362 27.663 41.2227 27.6865 41.2089 27.7098C41.1956 27.7325 41.182 27.755 41.1683 27.7775C41.1549 27.7993 41.1414 27.8211 41.1277 27.8427C41.1144 27.8635 41.1007 27.8842 41.0871 27.9049C41.0737 27.9249 41.0601 27.9448 41.0465 27.9647C41.0331 27.9841 41.0195 28.0036 41.0058 28.0228C40.9924 28.0416 40.979 28.0603 40.9653 28.0789C40.9519 28.097 40.9383 28.1148 40.9246 28.1327C40.9112 28.1503 40.8977 28.1678 40.884 28.1852C40.8706 28.2022 40.8571 28.2191 40.8434 28.2359C40.83 28.2523 40.8164 28.2686 40.8028 28.2849C40.7893 28.3009 40.7759 28.3171 40.7622 28.3329C40.7488 28.3484 40.7352 28.3637 40.7216 28.379C40.7082 28.3941 40.6946 28.4091 40.681 28.424C40.6675 28.4387 40.6541 28.4534 40.6404 28.4679C40.627 28.4821 40.6134 28.4961 40.5998 28.5102C40.5863 28.5241 40.5729 28.5382 40.5592 28.5519C40.5458 28.5654 40.5321 28.5786 40.5186 28.5919C40.5051 28.605 40.4916 28.6182 40.4779 28.6313C40.4645 28.644 40.451 28.6567 40.4374 28.6693C40.4239 28.6818 40.4103 28.6942 40.3967 28.7065C40.3833 28.7187 40.3698 28.7308 40.3561 28.7428C40.3427 28.7546 40.3291 28.7664 40.3155 28.7781C40.302 28.7896 40.2886 28.8012 40.2749 28.8126C40.2615 28.8239 40.2479 28.8349 40.2343 28.846C40.2208 28.857 40.2073 28.8681 40.1937 28.8789C40.1803 28.8896 40.1667 28.9001 40.1531 28.9106C40.1396 28.9211 40.1261 28.9316 40.1125 28.942C40.0991 28.9521 40.0854 28.9621 40.0719 28.9721C40.0583 28.9821 40.0449 28.9921 40.0313 29.002C40.0178 29.0117 40.0042 29.0211 39.9907 29.0306C39.9771 29.0401 39.9637 29.0496 39.95 29.059C39.9366 29.0682 39.923 29.0772 39.9095 29.0862C39.896 29.0953 39.8825 29.1043 39.8688 29.1132C39.8554 29.122 39.8418 29.1306 39.8282 29.1392C39.8147 29.1477 39.8012 29.1563 39.7876 29.1647C39.7742 29.1731 39.7606 29.1813 39.747 29.1895L39.7064 29.2137C39.6929 29.2216 39.6794 29.2295 39.6658 29.2373C39.6524 29.2451 39.6388 29.2526 39.6252 29.2602C39.6117 29.2678 39.5982 29.2754 39.5846 29.2828C39.5711 29.2901 39.5575 29.2972 39.544 29.3044C39.5304 29.3115 39.517 29.3189 39.5034 29.326C39.4899 29.3329 39.4763 29.3395 39.4628 29.3463C39.4492 29.3531 39.4358 29.36 39.4221 29.3666C39.4087 29.3732 39.3951 29.3796 39.3816 29.3861L39.3409 29.4052L39.3003 29.4237C39.2868 29.4298 39.2733 29.4357 39.2597 29.4416C39.2462 29.4475 39.2327 29.4536 39.2191 29.4593C39.2057 29.4651 39.1921 29.4704 39.1785 29.476C39.165 29.4816 39.1515 29.4873 39.1379 29.4927C39.1244 29.4981 39.1109 29.5032 39.0973 29.5085C39.0838 29.5137 39.0703 29.5189 39.0567 29.524L39.0161 29.5391C39.0026 29.544 38.989 29.5487 38.9755 29.5535C38.9619 29.5583 38.9485 29.5632 38.9349 29.5679C38.9214 29.5724 38.9078 29.5767 38.8942 29.5811L38.8537 29.5944C38.8402 29.5987 38.8266 29.6028 38.813 29.607L38.7724 29.6192C38.7589 29.6232 38.7454 29.6273 38.7318 29.6311C38.7184 29.635 38.7048 29.6385 38.6912 29.6422C38.6777 29.6459 38.6642 29.6497 38.6506 29.6533L38.61 29.6636L38.5694 29.6735L38.5288 29.6833C38.5153 29.6864 38.5017 29.6892 38.4882 29.6922C38.4746 29.6952 38.4611 29.6983 38.4476 29.7011L38.407 29.7093L38.3663 29.7171C38.3528 29.7196 38.3393 29.7224 38.3257 29.7248C38.3123 29.7272 38.2987 29.7293 38.2851 29.7316L38.2445 29.7383L38.2039 29.7445L38.1633 29.7502C38.1498 29.7521 38.1363 29.7542 38.1227 29.7559C38.1092 29.7577 38.0956 29.759 38.0821 29.7606C38.0686 29.7622 38.0551 29.7638 38.0415 29.7653C38.028 29.7667 38.0145 29.7682 38.0009 29.7695C37.9874 29.7709 37.9738 29.772 37.9603 29.7732C37.9467 29.7744 37.9332 29.7757 37.9197 29.7768C37.9062 29.7778 37.8926 29.7787 37.8791 29.7796L37.8384 29.7822C37.8249 29.783 37.8114 29.784 37.7978 29.7847C37.7844 29.7854 37.7708 29.7857 37.7572 29.7863L37.7166 29.7878L37.676 29.7889C37.6625 29.7892 37.649 29.7892 37.6354 29.7894L37.5948 29.7899L37.5864 29.79H37.5542H37.5136H37.473H37.4324H37.3917H37.3512H37.3105H37.2699H37.2293H37.1887H37.1481H37.1075H37.0669H37.0263H36.9857H36.9451H36.9045H36.8638H36.8233H36.7826H36.742H36.7014H36.6608H36.6202H36.5796H36.539H36.4984H36.4578H36.4172H36.3766H36.3359H36.2954H36.2547H36.2141H36.1735H36.1329H36.0923H36.0517H36.0111H35.9705H35.9299H35.8893H35.8487H35.808H35.7675H35.7268H35.6862H35.6456H35.605H35.5644H35.5238H35.4832H35.4426H35.402H35.3614H35.3208H35.2801H35.2396H35.1989H35.1583H35.1177H35.0771H35.0365H34.9959H34.9553H34.9147H34.8741H34.8335H34.7929H34.7522H34.7117H34.671H34.6304H34.5898H34.5492H34.5086H34.468H34.4274H34.3868H34.3462H34.3056H34.265H34.2243H34.1838H34.1431H34.1025H34.0619H34.0213H33.9807H33.9401H33.8995H33.8589H33.8183H33.7777H33.7371H33.6964H33.6559H33.6152H33.5746H33.534H33.4934H33.4528H33.4122H33.3716H33.331H33.2904H33.2498H33.2092H33.1685H33.128H33.0873H33.0467H33.0061H32.9655H32.9249H32.8843H32.8437H32.8031H32.7625H32.7219H32.6813H32.6406H32.6H32.5594H32.5188H32.4782H32.4376H32.397H32.3564H32.3158H32.2752H32.2346H32.194H32.1534H32.1127H32.0721H32.0315H31.9909H31.9503H31.9097H31.8691H31.8285H31.7879H31.7473H31.7067H31.666H31.6255H31.5848H31.5442H31.5036H31.416V21.1545H31.5036H31.5442H31.5848H31.6255H31.666H31.7067H31.7473H31.7879H31.8285H31.8691H31.9097H31.9503H31.9909H32.0315H32.0721H32.1127H32.1534H32.194H32.2346H32.2752H32.3158H32.3564H32.397H32.4376H32.4782H32.5188H32.5594H32.6H32.6406H32.6813H32.7219H32.7625H32.8031H32.8437H32.8843H32.9249H32.9655H33.0061H33.0467H33.0873H33.128H33.1685H33.2092H33.2498H33.2904H33.331H33.3716H33.4122H33.4528H33.4934H33.534H33.5746H33.6152H33.6559H33.6964H33.7371H33.7777H33.8183H33.8589H33.8995H33.9401H33.9807H34.0213H34.0619H34.1025H34.1431H34.1838H34.2243H34.265H34.3056H34.3462H34.3868H34.4274H34.468H34.5086H34.5492H34.5898H34.6304H34.671H34.7117H34.7522H34.7929H34.8335H34.8741H34.9147H34.9553H34.9959H35.0365H35.0771H35.1177H35.1583H35.1989H35.2396H35.2801H35.3208H35.3614H35.402H35.4426H35.4832H35.5238H35.5644H35.605H35.6456H35.6862H35.7268H35.7675H35.808H35.8487H35.8893H35.9299H35.9705H36.0111H36.0517H36.0923H36.1329H36.1735H36.2141H36.2547H36.2954H36.3359H36.3766H36.4172H36.4578H36.4984H36.539H36.5796H36.6202H36.6608H36.7014H36.742H36.7826H36.8233H36.8638H36.9045H36.9451H36.9857H37.0263H37.0669H37.1075H37.1481H37.1887H37.2293H37.2699H37.3105H37.3512H37.3917H37.4324H37.473H37.5136H37.5542H37.5948H37.6354H37.676H37.7166H37.7572H37.7978H37.8384H37.8791H37.9197H37.9412L37.9603 21.1543L38.0009 21.154L38.0415 21.1532C38.0551 21.1528 38.0686 21.1526 38.0821 21.1521C38.0957 21.1517 38.1092 21.151 38.1227 21.1504L38.1633 21.1485L38.2039 21.146L38.2445 21.1432L38.2851 21.14L38.3257 21.1363C38.3393 21.135 38.3529 21.1337 38.3663 21.1323C38.3799 21.1309 38.3934 21.1293 38.407 21.1277L38.4476 21.1227C38.4611 21.1209 38.4747 21.1192 38.4882 21.1173C38.5018 21.1154 38.5153 21.1133 38.5288 21.1113C38.5424 21.1092 38.5559 21.1072 38.5694 21.105L38.61 21.0981L38.6506 21.0908C38.6642 21.0882 38.6778 21.0858 38.6912 21.0831C38.7048 21.0804 38.7183 21.0775 38.7318 21.0746L38.7724 21.0658C38.786 21.0627 38.7996 21.0597 38.813 21.0565C38.8267 21.0533 38.8402 21.0498 38.8537 21.0465C38.8672 21.0431 38.8808 21.0396 38.8942 21.0361C38.9078 21.0325 38.9214 21.0288 38.9349 21.0251C38.9485 21.0213 38.962 21.0174 38.9755 21.0134C38.9891 21.0095 39.0026 21.0054 39.0161 21.0013L39.0567 20.9885C39.0703 20.9841 39.0838 20.9796 39.0973 20.975C39.1109 20.9704 39.1245 20.9658 39.1379 20.961C39.1515 20.9562 39.1651 20.9514 39.1785 20.9464C39.1922 20.9413 39.2056 20.9361 39.2191 20.9308C39.2327 20.9256 39.2463 20.9202 39.2597 20.9147C39.2733 20.9092 39.2869 20.9037 39.3003 20.898C39.314 20.8923 39.3275 20.8864 39.3409 20.8804C39.3546 20.8744 39.3681 20.8682 39.3816 20.862C39.3951 20.8557 39.4087 20.8493 39.4221 20.8429C39.4357 20.8363 39.4493 20.8297 39.4628 20.823C39.4764 20.8161 39.4899 20.8091 39.5034 20.802C39.517 20.7949 39.5305 20.7875 39.544 20.7801C39.5576 20.7727 39.5712 20.7651 39.5846 20.7574C39.5982 20.7496 39.6118 20.7417 39.6252 20.7337C39.6388 20.7256 39.6524 20.7174 39.6658 20.709C39.6795 20.7004 39.693 20.6917 39.7064 20.683C39.7201 20.674 39.7336 20.6649 39.747 20.6558C39.7607 20.6464 39.7742 20.6369 39.7876 20.6274C39.8013 20.6176 39.8148 20.6077 39.8282 20.5976C39.8419 20.5874 39.8555 20.577 39.8688 20.5665C39.8825 20.5558 39.8961 20.5449 39.9095 20.5339C39.9232 20.5226 39.9367 20.5112 39.95 20.4996C39.9638 20.4878 39.9773 20.4757 39.9907 20.4636C40.0044 20.451 40.0179 20.4383 40.0313 20.4255C40.045 20.4123 40.0586 20.3989 40.0719 20.3854C40.0857 20.3714 40.0992 20.3572 40.1125 20.3428C40.1263 20.328 40.1398 20.3129 40.1531 20.2977C40.1669 20.2819 40.1805 20.2658 40.1937 20.2496C40.2075 20.2327 40.2211 20.2156 40.2343 20.1983C40.2481 20.1801 40.2618 20.1618 40.2749 20.1432C40.2889 20.1235 40.3023 20.1034 40.3155 20.0831C40.3295 20.0616 40.343 20.0399 40.3561 20.0179C40.3702 19.9942 40.3837 19.9701 40.3967 19.9458C40.4109 19.9193 40.4245 19.8926 40.4374 19.8654C40.4517 19.835 40.4652 19.8041 40.4779 19.7728C40.4926 19.7368 40.5061 19.7004 40.5186 19.6634C40.5338 19.6177 40.5473 19.5711 40.5592 19.5237C40.5765 19.4544 40.5901 19.3833 40.5998 19.3104C40.6116 19.222 40.6178 19.1312 40.6178 19.0378C40.6178 18.9469 40.6116 18.8586 40.5998 18.7728C40.5901 18.7024 40.5765 18.6337 40.5592 18.5668C40.5473 18.5213 40.5338 18.4766 40.5186 18.4327C40.5061 18.3968 40.4926 18.3613 40.4779 18.3266C40.4653 18.2964 40.4517 18.2667 40.4374 18.2375C40.4245 18.2112 40.4109 18.1853 40.3967 18.1598C40.3837 18.1363 40.3702 18.113 40.3561 18.0901C40.3431 18.0689 40.3295 18.0479 40.3155 18.0273C40.3024 18.0078 40.2889 17.9884 40.2749 17.9694C40.2618 17.9514 40.2482 17.9337 40.2343 17.9163C40.2211 17.8995 40.2075 17.883 40.1937 17.8667C40.1804 17.851 40.1669 17.8355 40.1531 17.8202C40.1398 17.8055 40.1263 17.791 40.1125 17.7767C40.0992 17.7628 40.0856 17.7492 40.0719 17.7357C40.0586 17.7226 40.045 17.7097 40.0313 17.697C40.0179 17.6846 40.0044 17.6724 39.9907 17.6604C39.9773 17.6486 39.9638 17.637 39.95 17.6255C39.9367 17.6143 39.9232 17.6033 39.9095 17.5924C39.8961 17.5817 39.8825 17.5712 39.8688 17.5608C39.8554 17.5507 39.8419 17.5407 39.8282 17.5307C39.8148 17.5211 39.8013 17.5115 39.7876 17.502C39.7742 17.4928 39.7607 17.4836 39.747 17.4745C39.7336 17.4657 39.7201 17.4569 39.7064 17.4482C39.693 17.4398 39.6795 17.4314 39.6658 17.4231C39.6524 17.415 39.6389 17.407 39.6252 17.3991C39.6118 17.3913 39.5982 17.3837 39.5846 17.3761C39.5712 17.3687 39.5576 17.3614 39.544 17.3541C39.5305 17.347 39.517 17.3399 39.5034 17.333C39.4899 17.3261 39.4764 17.3193 39.4628 17.3126C39.4493 17.3061 39.4358 17.2995 39.4221 17.2931C39.4087 17.2868 39.3951 17.2807 39.3816 17.2746C39.3681 17.2685 39.3546 17.2626 39.3409 17.2567C39.3275 17.251 39.3139 17.2453 39.3003 17.2396C39.2868 17.2341 39.2734 17.2285 39.2597 17.2231C39.2463 17.2178 39.2327 17.2126 39.2191 17.2074C39.2057 17.2023 39.1921 17.1974 39.1785 17.1925C39.165 17.1876 39.1515 17.1828 39.1379 17.1781C39.1244 17.1734 39.1109 17.1688 39.0973 17.1642C39.0838 17.1598 39.0703 17.1554 39.0567 17.1511C39.0432 17.1468 39.0296 17.1427 39.0161 17.1386L38.9755 17.1266C38.962 17.1227 38.9485 17.1188 38.9349 17.1151C38.9214 17.1114 38.9078 17.1078 38.8942 17.1043C38.8808 17.1008 38.8672 17.0974 38.8537 17.094C38.8402 17.0906 38.8266 17.0873 38.813 17.0841C38.7996 17.0809 38.786 17.0779 38.7724 17.0748C38.759 17.0718 38.7454 17.069 38.7318 17.0661C38.7183 17.0633 38.7048 17.0604 38.6912 17.0577L38.6506 17.0499L38.61 17.0426C38.5965 17.0403 38.583 17.0379 38.5694 17.0357L38.5288 17.0292C38.5153 17.0272 38.5017 17.0252 38.4882 17.0233L38.4476 17.0178L38.407 17.0126L38.3663 17.008L38.3257 17.0037L38.2851 16.9999L38.2445 16.9965L38.207 16.9936L38.207 16.9446L38.2445 16.9387L38.2851 16.932C38.2987 16.9296 38.3123 16.9273 38.3257 16.9248L38.3663 16.9169C38.38 16.9142 38.3935 16.9114 38.407 16.9085L38.4476 16.8996C38.4611 16.8965 38.4747 16.8934 38.4882 16.8902C38.5018 16.8869 38.5153 16.8834 38.5288 16.8799C38.5424 16.8764 38.5559 16.8728 38.5694 16.8691C38.583 16.8654 38.5965 16.8616 38.61 16.8577C38.6236 16.8538 38.6372 16.8498 38.6506 16.8457C38.6642 16.8416 38.6778 16.8373 38.6912 16.833C38.7049 16.8286 38.7184 16.824 38.7318 16.8195C38.7455 16.8148 38.759 16.81 38.7724 16.8052C38.7861 16.8003 38.7996 16.7954 38.813 16.7903C38.8267 16.7852 38.8402 16.7799 38.8537 16.7746C38.8673 16.7692 38.8808 16.7637 38.8942 16.7581C38.9079 16.7524 38.9214 16.7467 38.9349 16.7408C38.9485 16.7348 38.962 16.7287 38.9755 16.7225C38.9891 16.7162 39.0026 16.7098 39.0161 16.7033C39.0297 16.6967 39.0433 16.6899 39.0567 16.6831C39.0703 16.6761 39.0839 16.6691 39.0973 16.662C39.111 16.6547 39.1245 16.6472 39.1379 16.6398C39.1516 16.6321 39.1651 16.6243 39.1785 16.6165C39.1922 16.6084 39.2057 16.6003 39.2191 16.592C39.2328 16.5836 39.2463 16.575 39.2597 16.5664C39.2734 16.5575 39.2869 16.5485 39.3003 16.5394C39.314 16.53 39.3276 16.5206 39.3409 16.511C39.3547 16.5012 39.3682 16.4912 39.3816 16.4812C39.3953 16.4708 39.4088 16.4604 39.4221 16.4498C39.4359 16.4389 39.4494 16.4279 39.4628 16.4167C39.4765 16.4052 39.49 16.3935 39.5034 16.3817C39.5172 16.3695 39.5307 16.3571 39.544 16.3446C39.5577 16.3317 39.5713 16.3186 39.5846 16.3054C39.5984 16.2917 39.6119 16.2779 39.6252 16.2639C39.639 16.2493 39.6526 16.2345 39.6658 16.2195C39.6796 16.2039 39.6932 16.1881 39.7064 16.1721C39.7203 16.1554 39.7338 16.1385 39.747 16.1214C39.7609 16.1033 39.7745 16.085 39.7876 16.0665C39.8016 16.0469 39.8151 16.027 39.8282 16.007C39.8422 15.9856 39.8558 15.9639 39.8688 15.942C39.8829 15.9183 39.8965 15.8942 39.9095 15.8699C39.9237 15.8432 39.9372 15.8162 39.95 15.7888C39.9645 15.7581 39.978 15.7268 39.9907 15.6953C40.0054 15.6586 40.0189 15.6214 40.0313 15.5836C40.0467 15.5362 40.0603 15.488 40.0719 15.4393C40.0906 15.3601 40.1042 15.2793 40.1125 15.1971C40.1191 15.1322 40.1225 15.0665 40.1225 15.0001C40.1225 14.93 40.1191 14.8616 40.1125 14.795C40.1041 14.7098 40.0905 14.6275 40.0719 14.5481C40.0603 14.4985 40.0467 14.45 40.0313 14.4027C40.0189 14.3648 40.0054 14.3277 39.9907 14.2913C39.978 14.26 39.9644 14.2292 39.95 14.199C39.9372 14.172 39.9236 14.1455 39.9095 14.1194C39.8965 14.0955 39.8829 14.072 39.8688 14.0488C39.8557 14.0273 39.8422 14.0061 39.8282 13.9852C39.8151 13.9656 39.8015 13.9464 39.7876 13.9274C39.7745 13.9095 39.7609 13.8917 39.747 13.8743C39.7338 13.8576 39.7203 13.8411 39.7064 13.8249C39.6932 13.8095 39.6796 13.7943 39.6658 13.7793C39.6526 13.7649 39.639 13.7506 39.6252 13.7366C39.6119 13.723 39.5984 13.7097 39.5846 13.6965C39.5713 13.6837 39.5577 13.6711 39.544 13.6587C39.5307 13.6466 39.5171 13.6347 39.5034 13.623C39.49 13.6116 39.4765 13.6004 39.4628 13.5893C39.4494 13.5785 39.4359 13.5678 39.4221 13.5574C39.4088 13.5471 39.3952 13.5371 39.3816 13.5272C39.3682 13.5174 39.3546 13.5079 39.3409 13.4984C39.3275 13.4892 39.314 13.4801 39.3003 13.4711C39.2869 13.4623 39.2734 13.4537 39.2597 13.4451C39.2463 13.4367 39.2328 13.4285 39.2191 13.4204C39.2057 13.4124 39.1922 13.4045 39.1785 13.3968C39.1651 13.3891 39.1516 13.3816 39.1379 13.3742C39.1245 13.3669 39.111 13.3598 39.0973 13.3527C39.0839 13.3458 39.0703 13.339 39.0567 13.3322C39.0432 13.3256 39.0297 13.319 39.0161 13.3126C39.0026 13.3062 38.9891 13.2999 38.9755 13.2938C38.962 13.2878 38.9485 13.282 38.9349 13.2761C38.9214 13.2704 38.9078 13.2647 38.8942 13.2591C38.8808 13.2536 38.8672 13.2482 38.8537 13.2429C38.8402 13.2376 38.8267 13.2324 38.813 13.2273C38.7996 13.2223 38.7861 13.2174 38.7724 13.2126C38.759 13.2078 38.7454 13.2031 38.7318 13.1985C38.7184 13.194 38.7048 13.1895 38.6912 13.1852C38.6778 13.1808 38.6642 13.1766 38.6506 13.1724C38.6371 13.1683 38.6236 13.1641 38.61 13.1602C38.5965 13.1563 38.583 13.1525 38.5694 13.1488C38.5559 13.1451 38.5424 13.1415 38.5288 13.1379L38.4882 13.1275C38.4747 13.1242 38.4612 13.1209 38.4476 13.1177C38.4341 13.1145 38.4206 13.1115 38.407 13.1085L38.3663 13.0998C38.3528 13.097 38.3394 13.0941 38.3257 13.0915C38.3123 13.0888 38.2987 13.0864 38.2851 13.0839L38.2445 13.0767C38.231 13.0744 38.2175 13.0721 38.2039 13.0699L38.1633 13.0637L38.1227 13.0579L38.0821 13.0525L38.0415 13.0477L38.0009 13.0433L37.9603 13.0392L37.9197 13.0356L37.8791 13.0324L37.8384 13.0295L37.7978 13.0272L37.7817 13.0263L37.7572 13.0247L37.7166 13.0223L37.676 13.0201L37.6354 13.0179L37.5948 13.016L37.5542 13.0142L37.5136 13.0127L37.473 13.0114L37.4324 13.0105L37.3917 13.01L37.3694 13.0099H37.3512H37.3105H37.2699H37.2293H37.1887H37.1481H37.1075H37.0669H37.0263H36.9857H36.9451H36.9045H36.8638H36.8233H36.7826H36.742H36.7014H36.6608H36.6202H36.5796H36.539H36.4984H36.4578H36.4172H36.3766H36.3359H36.2954H36.2547H36.2141H36.1735H36.1329H36.0923H36.0517H36.0111H35.9705H35.9299H35.8893H35.8487H35.808H35.7675H35.7268H35.6862H35.6456H35.605H35.5644H35.5238H35.4832H35.4426H35.402H35.3614H35.3208H35.2801H35.2396H35.1989H35.1583H35.1177H35.0771H35.0365H34.9959H34.9553H34.9147H34.8741H34.8335H34.7929H34.7522H34.7117H34.671H34.6304H34.5898H34.5492H34.5086H34.468H34.4274H34.3868H34.3462H34.3056H34.265H34.2243H34.1838H34.1431H34.1025H34.0619H34.0213H33.9807H33.9401H33.8995H33.8589H33.8183H33.7777H33.7371H33.6964H33.6559H33.6152H33.5746H33.534H33.4934H33.4528H33.4122H33.3716H33.331H33.2904H33.2498H33.2092H33.1685H33.128H33.0873H33.0467H33.0061H32.9655H32.9249H32.8843H32.8437H32.8031H32.7625H32.7219H32.6813H32.6406H32.6H32.5594H32.5188H32.4782H32.4376H32.397H32.3564H32.3158H32.2752H32.2346H32.194H32.1534H32.1127H32.0721H32.0315H31.9909H31.9503H31.9097H31.8691H31.8285H31.7879H31.7473H31.7067H31.666H31.6255H31.5848H31.5442H31.5036H31.416V8.61119C31.416 8.31526 31.4463 8.02649 31.5036 7.74768C31.5159 7.68797 31.5295 7.62877 31.5442 7.57005C31.5569 7.5198 31.5705 7.46992 31.5848 7.42041C31.5977 7.37619 31.6112 7.33227 31.6255 7.28866C31.6385 7.24881 31.6519 7.20917 31.666 7.16986C31.6791 7.1334 31.6926 7.09714 31.7067 7.06115C31.7198 7.02754 31.7333 6.99409 31.7473 6.96092C31.7605 6.92961 31.774 6.89843 31.7879 6.8675C31.8011 6.83812 31.8147 6.80894 31.8285 6.77994C31.8417 6.75225 31.8553 6.72477 31.8691 6.69742C31.8824 6.67113 31.896 6.64504 31.9097 6.61905C31.923 6.594 31.9365 6.56913 31.9503 6.5444C31.9636 6.5204 31.9772 6.49662 31.9909 6.47293C32.0043 6.44996 32.0178 6.42708 32.0315 6.40441C32.0449 6.38242 32.0584 6.3606 32.0721 6.33888C32.0854 6.31784 32.0991 6.297 32.1127 6.27622C32.1261 6.25589 32.1396 6.23563 32.1534 6.21554C32.1668 6.19585 32.1802 6.17616 32.194 6.15671C32.2073 6.13787 32.2209 6.11927 32.2346 6.10066C32.2479 6.08236 32.2615 6.0642 32.2752 6.04614C32.2887 6.02835 32.3021 6.01049 32.3158 5.99294C32.3291 5.97586 32.3428 5.95905 32.3564 5.94218C32.3698 5.92554 32.3833 5.90904 32.397 5.89264C32.4105 5.87644 32.4239 5.86024 32.4376 5.84425C32.451 5.82866 32.4646 5.81335 32.4782 5.79796C32.4917 5.78271 32.5051 5.76743 32.5188 5.75239C32.5322 5.73765 32.5458 5.72304 32.5594 5.70847C32.5729 5.6941 32.5864 5.67984 32.6 5.66564C32.6135 5.65164 32.627 5.63765 32.6406 5.62382C32.6541 5.61024 32.6677 5.59685 32.6813 5.58347C32.6948 5.57015 32.7082 5.5567 32.7219 5.54358C32.7352 5.53074 32.7489 5.5182 32.7625 5.50553C32.776 5.49292 32.7894 5.48028 32.8031 5.46785C32.8165 5.45561 32.8301 5.44362 32.8437 5.43159C32.8572 5.41963 32.8707 5.40767 32.8843 5.39587C32.8978 5.38425 32.9113 5.3728 32.9249 5.36134C32.9384 5.34999 32.9519 5.33868 32.9655 5.32749C32.979 5.31641 32.9925 5.30547 33.0061 5.29459L33.0467 5.26243L33.0873 5.23112C33.1008 5.22085 33.1144 5.21066 33.128 5.20056C33.1414 5.19056 33.1549 5.1806 33.1685 5.17074L33.2092 5.1417C33.2226 5.13218 33.2362 5.12272 33.2498 5.11337L33.2904 5.08568L33.331 5.05875C33.3445 5.0499 33.358 5.04109 33.3716 5.03242L33.4122 5.00687C33.4257 4.99843 33.4392 4.98999 33.4528 4.98172C33.4663 4.97352 33.4799 4.96556 33.4934 4.95753C33.507 4.9495 33.5204 4.9414 33.534 4.93354C33.5474 4.92578 33.5611 4.91829 33.5746 4.91067C33.5882 4.90304 33.6016 4.89528 33.6152 4.88783C33.6287 4.88047 33.6423 4.87336 33.6559 4.86614C33.6694 4.85892 33.6828 4.85167 33.6964 4.84459C33.7099 4.83757 33.7235 4.83076 33.7371 4.82392C33.7506 4.81711 33.7641 4.81026 33.7777 4.80359L33.8183 4.78383C33.8318 4.77736 33.8453 4.77106 33.8589 4.76472C33.8724 4.75842 33.8859 4.75201 33.8995 4.74585C33.913 4.73975 33.9266 4.73392 33.9401 4.72795C33.9536 4.72199 33.9671 4.71592 33.9807 4.7101C33.9942 4.70434 34.0078 4.69885 34.0213 4.69322C34.0348 4.68763 34.0483 4.68197 34.0619 4.67651L34.1025 4.66042L34.1431 4.64487C34.1567 4.63972 34.1702 4.6345 34.1838 4.62952C34.1972 4.62457 34.2108 4.61993 34.2243 4.61511C34.2379 4.6103 34.2514 4.60539 34.265 4.60071C34.2784 4.59607 34.292 4.5917 34.3056 4.58719L34.3462 4.57394C34.3597 4.56961 34.3732 4.56523 34.3868 4.56103C34.4003 4.55686 34.4139 4.55293 34.4274 4.5489C34.4409 4.54484 34.4544 4.54063 34.468 4.53674C34.4815 4.53287 34.4951 4.52928 34.5086 4.52555C34.5221 4.52183 34.5356 4.51807 34.5492 4.51447L34.5898 4.5039C34.6033 4.50048 34.6169 4.49723 34.6304 4.49394C34.644 4.49065 34.6574 4.48713 34.671 4.48398C34.6845 4.48086 34.6981 4.47801 34.7117 4.475L34.7522 4.46608L34.7929 4.45765C34.8063 4.45494 34.8199 4.45239 34.8335 4.44982C34.847 4.44721 34.8605 4.44443 34.8741 4.44196C34.8876 4.43948 34.9012 4.43738 34.9147 4.43508L34.9553 4.4283C34.9688 4.42613 34.9824 4.4239 34.9959 4.42186C35.0094 4.41983 35.023 4.41803 35.0365 4.41614C35.0501 4.41424 35.0635 4.41217 35.0771 4.41041C35.0906 4.40865 35.1042 4.40709 35.1177 4.40546L35.1583 4.40079C35.1719 4.3993 35.1854 4.39764 35.1989 4.39628C35.2124 4.39492 35.226 4.39387 35.2396 4.39265L35.2801 4.38903L35.3208 4.38595C35.3343 4.38496 35.3478 4.38418 35.3614 4.38334C35.3749 4.38252 35.3884 4.38147 35.402 4.38076C35.4155 4.38005 35.4291 4.37964 35.4426 4.37907L35.4832 4.37754C35.4968 4.3771 35.5103 4.37652 35.5238 4.37622C35.5373 4.37591 35.5509 4.37588 35.5644 4.37568C35.5779 4.37547 35.5915 4.37524 35.605 4.37517L35.6152 4.37503H35.6456H35.6862H35.7268H35.7675H35.808H35.8487H35.8893H35.9299H35.9705H36.0111H36.0517H36.0923H36.1329H36.1735H36.2141H36.2547H36.2954H36.3359H36.3766H36.4172H36.4578H36.4984H36.539H36.5796H36.6202H36.6608H36.7014H36.742H36.7826H36.8233H36.8638H36.9045H36.9451H36.9857H37.0263H37.0669H37.1075H37.1481H37.1887H37.2293H37.2699H37.3105H37.3512H37.3917H37.4324H37.473H37.5136H37.5542H37.5948H37.6354H37.676H37.7166H37.7572H37.7978H37.8384H37.8791H37.9197H37.9603H38.0009H38.0415H38.0821H38.1227H38.1633H38.2039H38.2445H38.2851H38.3257H38.3663H38.407H38.4476H38.4882H38.5288H38.5694H38.61H38.6506H38.6912H38.7318H38.7724H38.813H38.8537H38.8942H38.9349H38.9755H39.0161H39.0567H39.0973H39.1379H39.1785H39.2191H39.2597H39.3003H39.3409H39.3816H39.4221H39.4628H39.5034H39.544H39.5846H39.6252H39.6658H39.7064H39.747H39.7876H39.8282H39.8688H39.9095H39.95H39.9907H40.0313H40.0719H40.1125H40.1531H40.1937H40.2343H40.2749H40.3155H40.3561H40.3967H40.4374H40.4779H40.5186H40.5592H40.5998H40.6404H40.681H40.7216H40.7622H40.8028H40.8434H40.884H40.9246H40.9653H41.0058H41.0465H41.0871H41.1277H41.1683H41.2089H41.2495H41.2901H41.3307H41.3714H41.4119H41.4526H41.4932H41.5338H41.5744H41.615H41.6556H41.6962H41.7368H41.7774V4.375Z",
    fill: "#54B230"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.1377 19.0723V8.61115C8.1377 8.31608 8.16772 8.02805 8.22476 7.74998C8.23702 7.69027 8.25061 7.63111 8.26532 7.57235C8.27791 7.52203 8.29147 7.47212 8.30584 7.42254C8.31867 7.37836 8.3322 7.33451 8.34637 7.29093C8.35936 7.25105 8.37279 7.21133 8.38692 7.17196C8.40001 7.13553 8.41341 7.09931 8.42744 7.06336C8.44054 7.02974 8.45407 6.99623 8.468 6.96302C8.48116 6.93171 8.49466 6.9006 8.50852 6.8697C8.52172 6.84032 8.53525 6.81118 8.54904 6.78217C8.56224 6.75445 8.57583 6.72694 8.5896 6.69956C8.60283 6.67326 8.61636 6.64717 8.63012 6.62121C8.64338 6.59617 8.65691 6.5713 8.67064 6.54656C8.68394 6.52261 8.69744 6.49879 8.7112 6.47513C8.72453 6.45216 8.73796 6.42925 8.75172 6.40655C8.76505 6.38459 8.77858 6.3628 8.79228 6.34112C8.80554 6.32011 8.81917 6.29923 8.8328 6.27846C8.84616 6.25813 8.85963 6.23787 8.87332 6.21777C8.88679 6.19805 8.90011 6.17836 8.91388 6.15888C8.92717 6.14007 8.94081 6.1215 8.9544 6.1029C8.9678 6.0846 8.98129 6.06644 8.99496 6.04838C9.00839 6.03062 9.02178 6.01273 9.03548 5.99518C9.04881 5.97813 9.06244 5.96136 9.076 5.94452C9.0894 5.92788 9.10289 5.91131 9.11656 5.89487C9.12999 5.87871 9.14342 5.86258 9.15708 5.84662C9.17044 5.831 9.18404 5.81565 9.19764 5.80023C9.21107 5.78495 9.2245 5.7697 9.23816 5.75466C9.25152 5.73992 9.26512 5.72538 9.27868 5.71084C9.29211 5.69644 9.30561 5.68217 9.31924 5.66798C9.33267 5.65398 9.34613 5.63999 9.35976 5.62616C9.37316 5.61257 9.38675 5.59919 9.40032 5.5858C9.41381 5.57249 9.42717 5.55907 9.44084 5.54595C9.4542 5.53311 9.46783 5.52057 9.48136 5.5079C9.49486 5.49526 9.50825 5.48259 9.52192 5.47015C9.53531 5.45795 9.54891 5.44599 9.56244 5.43396C9.57594 5.422 9.58936 5.41 9.603 5.39821C9.61642 5.38659 9.62995 5.37517 9.64352 5.36372C9.65695 5.35237 9.67044 5.34101 9.68404 5.32983C9.69747 5.31878 9.71103 5.30784 9.7246 5.29693C9.73806 5.28612 9.75152 5.27541 9.76512 5.26477C9.77855 5.25423 9.79211 5.24383 9.80567 5.23346C9.81914 5.22319 9.83263 5.21296 9.8462 5.20286L9.88672 5.17311C9.90018 5.16332 9.91368 5.15359 9.92728 5.14397C9.9407 5.13445 9.95423 5.12503 9.9678 5.11567C9.98126 5.10635 9.99476 5.0971 10.0083 5.08795C10.0218 5.07891 10.0353 5.07 10.0489 5.06108C10.0623 5.05224 10.0758 5.04333 10.0894 5.03462C10.1028 5.02601 10.1164 5.01761 10.13 5.00914C10.1435 5.0007 10.1569 4.99216 10.1705 4.98389C10.1839 4.97573 10.1975 4.9678 10.211 4.95977C10.2245 4.95173 10.2379 4.94357 10.2516 4.93567C10.265 4.92791 10.2786 4.92049 10.2921 4.91287C10.3056 4.90524 10.319 4.89752 10.3326 4.89003C10.3461 4.88264 10.3596 4.87553 10.3732 4.86831C10.3867 4.86109 10.4001 4.85384 10.4137 4.84676C10.4271 4.83974 10.4407 4.83286 10.4542 4.82598L10.4948 4.80572C10.5083 4.79905 10.5217 4.79237 10.5353 4.78586C10.5488 4.77939 10.5623 4.77312 10.5758 4.76679C10.5894 4.76045 10.6028 4.75398 10.6164 4.74781C10.6298 4.74168 10.6434 4.73592 10.6569 4.72995C10.6704 4.72399 10.6839 4.71792 10.6974 4.71209C10.7109 4.70633 10.7245 4.70078 10.738 4.69515L10.7785 4.67848L10.819 4.66228L10.8596 4.64676C10.8731 4.64161 10.8865 4.63629 10.9001 4.63128C10.9135 4.62633 10.9272 4.62172 10.9407 4.61691C10.9542 4.6121 10.9676 4.60722 10.9812 4.60254L11.0217 4.58889L11.0623 4.57564C11.0758 4.5713 11.0892 4.56686 11.1028 4.56266C11.1162 4.55849 11.1298 4.55453 11.1433 4.55049C11.1568 4.54643 11.1703 4.54229 11.1839 4.53836C11.1973 4.53447 11.2109 4.53084 11.2244 4.52708L11.265 4.516C11.2784 4.51241 11.2919 4.50875 11.3055 4.50529C11.3189 4.50183 11.3325 4.49868 11.346 4.49536C11.3595 4.49204 11.373 4.48858 11.3866 4.4854C11.4 4.48225 11.4136 4.4793 11.4271 4.47628L11.4676 4.46741C11.4811 4.46449 11.4946 4.46154 11.5082 4.4588C11.5216 4.45609 11.5352 4.45358 11.5487 4.45097C11.5622 4.44836 11.5757 4.44565 11.5892 4.44318C11.6027 4.4407 11.6162 4.43847 11.6298 4.43613L11.6703 4.42935C11.6838 4.42718 11.6973 4.42485 11.7108 4.42278C11.7243 4.42071 11.7379 4.41898 11.7514 4.41705C11.7648 4.41515 11.7783 4.41312 11.7919 4.41133L11.8324 4.40621L11.873 4.40157C11.8865 4.40004 11.8999 4.39828 11.9135 4.39689C11.927 4.3955 11.9405 4.39448 11.954 4.39323L11.9946 4.38964C12.0081 4.38849 12.0216 4.38737 12.0351 4.38639C12.0486 4.3854 12.0621 4.38462 12.0757 4.38378C12.0892 4.38293 12.1027 4.38195 12.1162 4.3812C12.1297 4.38046 12.1432 4.37995 12.1567 4.37934L12.1973 4.37778C12.2108 4.3773 12.2242 4.37659 12.2378 4.37625C12.2513 4.37591 12.2648 4.37595 12.2783 4.37575C12.2918 4.37554 12.3053 4.3753 12.3189 4.37524L12.3594 4.375H12.3999H12.4405H12.481H12.5215H12.5621H12.6026H12.6431H12.6837H12.7242H12.7647H12.8053H12.8458H12.8863H12.9269H12.9674H13.008H13.0485H13.089H13.1296H13.1701H13.2107H13.2512H13.2917H13.3323H13.3728H13.4133H13.4539H13.4944H13.5349H13.5755H13.616H13.6565H13.6971H13.7376H13.7781H13.8187H13.8592H13.8997H13.9403H13.9808H14.0213H14.0619H14.1024H14.143H14.1835H14.224H14.2646H14.3051H14.3457H14.3862H14.4267H14.4673H14.5078H14.5483H14.5889H14.6294H14.6699H14.7105H14.751H14.7915H14.8321H14.8726H14.9131H14.9537H14.9942H15.0347H15.0753H15.1158H15.1563H15.1969H15.2374H15.278H15.3185H15.359H15.3996H15.4401H15.4807H15.5212H15.5617H15.6023H15.6428H15.6833H15.7239H15.7644H15.8049H15.8455H15.886H15.9265H15.9671H16.0076H16.0481H16.0887H16.1292H16.1697H16.2103H16.2508H16.2914H16.3319H16.3724H16.413H16.4535H16.494H16.5346H16.5751H16.6157H16.6562H16.6967H16.7373H16.7778H16.8183H16.8589H16.8994H16.9399H16.9805H17.021H17.0615H17.1021H17.1426H17.1831H17.2237H17.2642H17.3047H17.3453H17.3858H17.4264H17.4669H17.5074H17.548H17.5885H17.629H17.6696H17.7101H17.7506H17.7912H17.8317H17.8722H17.9128H17.9533H17.9938H18.0344H18.0749H18.1154H18.156H18.1965H18.237H18.2776H18.3181H18.3586H18.3992H18.4397H18.4803H18.5147V25.5542C18.5147 25.7384 18.5029 25.9199 18.4803 26.098C18.4694 26.1837 18.4556 26.2685 18.4397 26.3525C18.4276 26.4165 18.4141 26.4799 18.3992 26.5427C18.3866 26.5957 18.3732 26.6483 18.3586 26.7005C18.3459 26.7463 18.3323 26.7917 18.3181 26.8368C18.3052 26.8777 18.2917 26.9182 18.2776 26.9586C18.2646 26.9959 18.2511 27.033 18.237 27.0698C18.224 27.1042 18.2105 27.1384 18.1965 27.1723C18.1834 27.2043 18.1699 27.2361 18.156 27.2676C18.1428 27.2976 18.1293 27.3273 18.1154 27.357C18.1023 27.3852 18.0887 27.4132 18.0749 27.4411C18.0617 27.4679 18.0482 27.4945 18.0344 27.5209C18.0211 27.5463 18.0076 27.5717 17.9938 27.5968C17.9805 27.6211 17.9671 27.6454 17.9533 27.6694C17.94 27.6926 17.9265 27.7156 17.9128 27.7385C17.8995 27.7607 17.8859 27.7826 17.8722 27.8045C17.8589 27.8259 17.8454 27.8471 17.8317 27.8682C17.8183 27.8889 17.8049 27.9095 17.7912 27.9298C17.7778 27.9496 17.7643 27.9692 17.7506 27.9887C17.7373 28.0078 17.7238 28.0267 17.7101 28.0456C17.6967 28.0641 17.6832 28.0826 17.6696 28.1009C17.6562 28.1188 17.6427 28.1365 17.629 28.1542C17.6157 28.1714 17.6021 28.1885 17.5885 28.2056C17.5751 28.2224 17.5616 28.2392 17.548 28.2558C17.5346 28.2721 17.521 28.2881 17.5074 28.3041C17.494 28.3199 17.4805 28.3356 17.4669 28.3512C17.4534 28.3665 17.44 28.382 17.4264 28.3972C17.413 28.412 17.3994 28.4266 17.3858 28.4413C17.3723 28.4558 17.359 28.4704 17.3453 28.4847C17.3319 28.4988 17.3183 28.5126 17.3047 28.5265C17.2913 28.5402 17.2778 28.5539 17.2642 28.5674C17.2508 28.5808 17.2373 28.5941 17.2237 28.6073C17.2103 28.6203 17.1967 28.6331 17.1831 28.6459C17.1697 28.6586 17.1562 28.6713 17.1426 28.6839C17.1292 28.6962 17.1156 28.7082 17.1021 28.7204C17.0886 28.7325 17.0752 28.7447 17.0615 28.7566C17.0482 28.7682 17.0345 28.7796 17.021 28.7911C17.0075 28.8026 16.9941 28.8142 16.9805 28.8255C16.9671 28.8366 16.9535 28.8475 16.9399 28.8584C16.9264 28.8693 16.913 28.8803 16.8994 28.8911C16.886 28.9016 16.8724 28.9119 16.8589 28.9223C16.8454 28.9327 16.832 28.9431 16.8183 28.9533C16.8049 28.9634 16.7913 28.9732 16.7778 28.9831C16.7643 28.993 16.7509 29.003 16.7373 29.0127C16.7239 29.0222 16.7103 29.0316 16.6967 29.041C16.6832 29.0504 16.6698 29.0599 16.6562 29.0692C16.6428 29.0782 16.6292 29.0871 16.6157 29.096C16.6021 29.105 16.5887 29.1141 16.5751 29.1229C16.5617 29.1315 16.5481 29.1398 16.5346 29.1484C16.5211 29.1569 16.5076 29.1655 16.494 29.1738C16.4806 29.1821 16.467 29.1901 16.4535 29.1981C16.44 29.2062 16.4266 29.2143 16.413 29.2223C16.3995 29.2301 16.386 29.2377 16.3724 29.2454C16.359 29.2531 16.3455 29.2608 16.3319 29.2682C16.3184 29.2757 16.3049 29.2831 16.2914 29.2904L16.2508 29.3119C16.2373 29.319 16.2239 29.3261 16.2103 29.333C16.1968 29.3399 16.1833 29.3466 16.1697 29.3533C16.1562 29.36 16.1428 29.367 16.1292 29.3735C16.1158 29.38 16.1022 29.3862 16.0887 29.3926C16.0752 29.399 16.0617 29.4054 16.0481 29.4117C16.0347 29.4178 16.0211 29.4237 16.0076 29.4298L15.9671 29.4476L15.9265 29.4649C15.9131 29.4706 15.8995 29.4761 15.886 29.4816C15.8725 29.4871 15.859 29.4928 15.8455 29.4982C15.832 29.5035 15.8185 29.5085 15.8049 29.5136C15.7914 29.5188 15.778 29.5241 15.7644 29.5292C15.7509 29.5342 15.7374 29.539 15.7239 29.5438L15.6833 29.5582L15.6428 29.5722C15.6293 29.5767 15.6158 29.5811 15.6023 29.5854C15.5887 29.5899 15.5753 29.5944 15.5617 29.5987C15.5483 29.6029 15.5347 29.6068 15.5212 29.6109L15.4807 29.6231L15.4401 29.6347C15.4266 29.6385 15.4131 29.6421 15.3996 29.6457C15.386 29.6494 15.3726 29.6533 15.359 29.6567C15.3456 29.6602 15.332 29.6633 15.3185 29.6667C15.305 29.6701 15.2915 29.6734 15.278 29.6767L15.2374 29.6861L15.1969 29.695C15.1834 29.6979 15.1699 29.7011 15.1563 29.7039C15.1429 29.7067 15.1293 29.709 15.1158 29.7117C15.1023 29.7143 15.0888 29.717 15.0753 29.7195L15.0347 29.7269C15.0213 29.7292 15.0077 29.7314 14.9942 29.7336C14.9807 29.7358 14.9672 29.7383 14.9537 29.7404C14.9402 29.7425 14.9267 29.7442 14.9131 29.7462L14.8726 29.7519C14.8591 29.7538 14.8456 29.7556 14.8321 29.7573C14.8186 29.759 14.805 29.7604 14.7915 29.762C14.778 29.7635 14.7645 29.7652 14.751 29.7667C14.7375 29.7681 14.724 29.7693 14.7105 29.7706L14.6699 29.7742C14.6564 29.7754 14.6429 29.7768 14.6294 29.7778C14.6159 29.7788 14.6024 29.7795 14.5889 29.7804L14.5483 29.783L14.5078 29.7851C14.4943 29.7858 14.4808 29.7862 14.4673 29.7867C14.4537 29.7872 14.4402 29.7878 14.4267 29.7883C14.4132 29.7886 14.3997 29.7888 14.3862 29.789L14.3457 29.7895C14.3331 29.7896 14.3207 29.79 14.3081 29.79H14.2646H14.224H14.1835H14.143H14.1024H14.0619H14.0213H13.9808H13.9403H13.8997H13.8592H13.8187H13.7781H13.7376H13.6971H13.6565H13.616H13.5755H13.5349H13.4944H13.4539H13.4133H13.3728H13.3323H13.2917H13.2512H13.2107H13.1701H13.1296H13.089H13.0485H13.008H12.9674H12.9269H12.8863H12.8458H12.8053H12.7647H12.7242H12.6837H12.6431H12.6026H12.5621H12.5215H12.481H12.4405H12.3999H12.3594H12.3189H12.2783H12.2378H12.1973H12.1567H12.1162H12.0757H12.0351H11.9946H11.954H11.9135H11.873H11.8324H11.7919H11.7514H11.7108H11.6703H11.6298H11.5892H11.5487H11.5082H11.4676H11.4271H11.3866H11.346H11.3055H11.265H11.2244H11.1839H11.1433H11.1028H11.0623H11.0217H10.9812H10.9407H10.9001H10.8596H10.819H10.7785H10.738H10.6974H10.6569H10.6164H10.5758H10.5353H10.4948H10.4542H10.4137H10.3732H10.3326H10.2921H10.2516H10.211H10.1705H10.13H10.0894H10.0489H10.0083H9.9678H9.92728H9.88672H9.8462H9.80567H9.76512H9.7246H9.68404H9.64352H9.603H9.56244H9.52192H9.48136H9.44084H9.40032H9.35976H9.31924H9.27868H9.23816H9.19764H9.15708H9.11656H9.076H9.03548H8.99496H8.9544H8.91388H8.87332H8.8328H8.79228H8.75172H8.7112H8.67064H8.63012H8.5896H8.54904H8.50852H8.468H8.42744H8.38692H8.34637H8.30584H8.26532H8.22476H8.1377V20.8632C8.1377 20.8632 8.16765 20.8715 8.22476 20.886L8.26532 20.8962L8.30584 20.9062L8.34637 20.916L8.38692 20.9256L8.42744 20.9351L8.468 20.9445L8.50852 20.9537L8.54904 20.9628L8.5896 20.9717L8.63012 20.9805L8.67064 20.9893L8.7112 20.9979L8.75172 21.0064L8.79228 21.0147L8.8328 21.023L8.87332 21.0311L8.91388 21.0392L8.9544 21.0471L8.99496 21.055L9.03548 21.0628L9.076 21.0704L9.11656 21.078L9.15708 21.0854L9.19764 21.0928L9.23816 21.1001L9.27868 21.1072L9.31924 21.1143L9.35976 21.1212L9.40032 21.1281L9.44084 21.1349L9.48136 21.1416L9.52192 21.1482L9.56244 21.1547L9.603 21.1612L9.64352 21.1675L9.68404 21.1738L9.7246 21.1799L9.76512 21.186L9.80567 21.1919L9.8462 21.1978L9.88672 21.2036L9.92728 21.2093L9.9678 21.2149L10.0083 21.2205L10.0489 21.2259L10.0894 21.2313L10.13 21.2366L10.1705 21.2417L10.211 21.2468L10.2516 21.2518L10.2921 21.2568L10.3326 21.2615L10.3732 21.2663L10.4137 21.2709L10.4542 21.2755L10.4948 21.28L10.5353 21.2844L10.5758 21.2887L10.6164 21.2929L10.6569 21.297L10.6974 21.301L10.738 21.305L10.7785 21.3089L10.819 21.3126L10.8596 21.3164L10.9001 21.3199L10.9407 21.3234L10.9812 21.3269L11.0217 21.3302L11.0623 21.3335L11.1028 21.3366L11.1433 21.3397L11.1839 21.3426L11.2244 21.3455L11.265 21.3483L11.3055 21.351L11.346 21.3536L11.3866 21.3562L11.4271 21.3586L11.4676 21.361L11.5082 21.3632L11.5487 21.3654L11.5892 21.3675L11.6298 21.3694L11.6703 21.3713L11.7108 21.3731L11.7514 21.3748L11.7919 21.3765L11.8324 21.3779L11.873 21.3793L11.9135 21.3807L11.954 21.3819L11.9946 21.3831L12.0351 21.3841L12.0757 21.385L12.1162 21.386L12.1567 21.3867L12.1973 21.3873L12.2378 21.388L12.2783 21.3884L12.3189 21.3888L12.3594 21.3891L12.3999 21.3892L12.4405 21.3893L12.481 21.3893L12.5215 21.389L12.5621 21.3888L12.6026 21.3885L12.6431 21.3883L12.6837 21.3875L12.7242 21.3868L12.7647 21.3861L12.8053 21.3853L12.8458 21.3843L12.8863 21.383L12.9269 21.3818L12.9674 21.3805L13.008 21.3791L13.0485 21.3773L13.089 21.3756L13.1296 21.3737L13.1701 21.3719L13.2107 21.3697L13.2512 21.3673L13.2917 21.3649L13.3323 21.3626L13.3728 21.3599L13.4133 21.3569L13.4539 21.354L13.4944 21.3511L13.5349 21.3478L13.5755 21.3443L13.616 21.3408L13.6565 21.3372L13.6971 21.3334L13.7376 21.3292L13.7781 21.3251L13.8187 21.3209L13.8592 21.3164L13.8997 21.3116L13.9403 21.3068L13.9808 21.302L14.0213 21.2967L14.0619 21.2912L14.1024 21.2858L14.143 21.2802C14.1566 21.2782 14.1699 21.2761 14.1835 21.2741L14.224 21.2679L14.2646 21.2618L14.3051 21.2553C14.3187 21.2531 14.3321 21.2507 14.3457 21.2484L14.3862 21.2416C14.3996 21.2393 14.4134 21.2371 14.4267 21.2347C14.4404 21.2323 14.4537 21.2296 14.4673 21.2271L14.5078 21.2195L14.5483 21.2119L14.5889 21.2039C14.6025 21.2012 14.6159 21.1983 14.6294 21.1955L14.6699 21.1871L14.7105 21.1785C14.7242 21.1756 14.7374 21.1724 14.751 21.1694L14.7915 21.1601C14.805 21.157 14.8187 21.1541 14.8321 21.151C14.8458 21.1477 14.8591 21.1443 14.8726 21.141L14.9131 21.1309C14.9266 21.1276 14.9403 21.1243 14.9537 21.1209C14.9673 21.1174 14.9807 21.1138 14.9942 21.1102L15.0347 21.0993C15.0482 21.0956 15.0619 21.0921 15.0753 21.0883C15.0889 21.0846 15.1023 21.0806 15.1158 21.0768L15.1563 21.065C15.1698 21.061 15.1835 21.0571 15.1969 21.0531L15.2374 21.0406L15.278 21.0278C15.2914 21.0235 15.3052 21.0193 15.3185 21.015L15.359 21.0014L15.3996 20.9876C15.413 20.9829 15.4268 20.9784 15.4401 20.9737C15.4538 20.9689 15.4671 20.9638 15.4807 20.9589L15.5212 20.9441C15.5347 20.939 15.5483 20.9341 15.5617 20.9289C15.5754 20.9237 15.5887 20.9183 15.6023 20.913C15.6158 20.9077 15.6294 20.9024 15.6428 20.897L15.6833 20.8804L15.7239 20.8632C15.7373 20.8575 15.7511 20.852 15.7644 20.8461C15.7781 20.8401 15.7914 20.8339 15.8049 20.8278L15.8455 20.8094L15.886 20.7904C15.8996 20.784 15.9131 20.7774 15.9265 20.7708C15.94 20.7642 15.9538 20.7577 15.9671 20.751C15.9808 20.7441 15.9941 20.737 16.0076 20.73C16.0211 20.723 16.0348 20.7161 16.0481 20.7091C16.0618 20.7018 16.0752 20.6944 16.0887 20.687C16.1023 20.6796 16.1158 20.6721 16.1292 20.6646C16.1428 20.6569 16.1563 20.6492 16.1697 20.6415C16.1834 20.6336 16.1969 20.6255 16.2103 20.6175C16.2239 20.6094 16.2375 20.6013 16.2508 20.5931C16.2645 20.5847 16.2779 20.5761 16.2914 20.5676C16.3049 20.559 16.3186 20.5504 16.3319 20.5417C16.3456 20.5328 16.359 20.5236 16.3724 20.5145C16.386 20.5053 16.3996 20.4963 16.413 20.487C16.4267 20.4774 16.44 20.4677 16.4535 20.458C16.4671 20.4482 16.4807 20.4384 16.494 20.4286C16.5077 20.4184 16.5211 20.408 16.5346 20.3977C16.5482 20.3872 16.5618 20.3767 16.5751 20.3661C16.5888 20.3552 16.6023 20.3442 16.6157 20.3331C16.6293 20.3218 16.6428 20.3104 16.6562 20.299C16.6698 20.2873 16.6834 20.2757 16.6967 20.2639C16.7105 20.2517 16.7238 20.2393 16.7373 20.2269C16.7508 20.2144 16.7645 20.2019 16.7778 20.1892C16.7915 20.176 16.805 20.1627 16.8183 20.1493C16.832 20.1356 16.8455 20.1218 16.8589 20.108C16.8725 20.0938 16.8861 20.0797 16.8994 20.0653C16.9132 20.0503 16.9265 20.0351 16.9399 20.0199C16.9537 20.0043 16.9672 19.9885 16.9805 19.9727C16.9942 19.9564 17.0078 19.9401 17.021 19.9236C17.0347 19.9064 17.0483 19.8892 17.0615 19.8718C17.0754 19.8536 17.0888 19.8352 17.1021 19.8168C17.1159 19.7976 17.1293 19.7783 17.1426 19.7589C17.1564 19.7386 17.1699 19.7182 17.1831 19.6976C17.197 19.6761 17.2105 19.6543 17.2237 19.6324C17.2375 19.6093 17.2511 19.5861 17.2642 19.5627C17.2781 19.5378 17.2916 19.5128 17.3047 19.4876C17.3187 19.4606 17.3322 19.4335 17.3453 19.4061C17.3594 19.3767 17.3728 19.3471 17.3858 19.3172C17.3999 19.2847 17.4135 19.2521 17.4264 19.2191C17.4406 19.1827 17.4541 19.1461 17.4669 19.1091C17.4814 19.0672 17.4948 19.0248 17.5074 18.982C17.5222 18.9321 17.5356 18.8816 17.548 18.8307C17.5632 18.7675 17.5768 18.7036 17.5885 18.639C17.6059 18.5428 17.6193 18.4451 17.629 18.346C17.6426 18.208 17.6493 18.0674 17.6493 17.9246V13.01H17.5885H17.548H17.5074H17.4669H17.4264H17.3858H17.3453H17.3047H17.2642H17.2237H17.1831H17.1426H17.1021H17.0615H17.021H16.9805H16.9399H16.8994H16.8589H16.8183H16.7778H16.7373H16.6967H16.6562H16.6157H16.5751H16.5346H16.494H16.4535H16.413H16.3724H16.3319H16.2914H16.2508H16.2103H16.1697H16.1292H16.0887H16.0481H16.0076H15.9671H15.9265H15.886H15.8455H15.8049H15.7644H15.7239H15.6833H15.6428H15.6023H15.5617H15.5212H15.4807H15.4401H15.3996H15.359H15.3185H15.278H15.2374H15.1969H15.1563H15.1158H15.0753H15.0347H14.9942H14.9537H14.9131H14.8726H14.8321H14.7915H14.751H14.7105H14.6699H14.6294H14.5889H14.5483H14.5078H14.4673H14.4267H14.3862H14.3457H14.3051H14.2646H14.224H14.1835H14.143H14.1024H14.0619L14.0312 17.9246C14.0312 18.0016 14.0278 18.0773 14.0213 18.1515C14.0131 18.2461 13.9995 18.3383 13.9808 18.4279C13.9693 18.4833 13.9557 18.5377 13.9403 18.591C13.928 18.6335 13.9145 18.6753 13.8997 18.7164C13.8872 18.7514 13.8736 18.7858 13.8592 18.8198C13.8464 18.8501 13.8329 18.8799 13.8187 18.9093C13.8057 18.9361 13.7923 18.9626 13.7781 18.9885C13.7652 19.0125 13.7516 19.0359 13.7376 19.0592C13.7245 19.081 13.711 19.1026 13.6971 19.1238C13.6839 19.1438 13.6704 19.1634 13.6565 19.1828C13.6433 19.2013 13.6299 19.2196 13.616 19.2376C13.6028 19.2547 13.5893 19.2714 13.5755 19.288C13.5622 19.3039 13.5487 19.3196 13.5349 19.3351C13.5217 19.35 13.5082 19.3647 13.4944 19.3792C13.4811 19.3931 13.4676 19.407 13.4539 19.4206C13.4406 19.4337 13.4271 19.4467 13.4133 19.4594C13.4 19.4718 13.3865 19.4839 13.3728 19.4958C13.3595 19.5075 13.346 19.519 13.3323 19.5302C13.3189 19.5412 13.3054 19.552 13.2917 19.5627C13.2784 19.5731 13.2648 19.5833 13.2512 19.5934C13.2378 19.6032 13.2243 19.6129 13.2107 19.6224C13.1973 19.6318 13.1838 19.6409 13.1701 19.65C13.1567 19.6588 13.1432 19.6674 13.1296 19.676C13.1162 19.6843 13.1027 19.6925 13.089 19.7006C13.0757 19.7085 13.0621 19.7162 13.0485 19.7239C13.0351 19.7314 13.0216 19.7386 13.008 19.7459C12.9946 19.753 12.9811 19.76 12.9674 19.7668C12.954 19.7735 12.9405 19.7801 12.9269 19.7866C12.9135 19.793 12.9 19.7993 12.8863 19.8055C12.8729 19.8115 12.8595 19.8175 12.8458 19.8232C12.8325 19.8289 12.8189 19.8344 12.8053 19.8399C12.7919 19.8453 12.7783 19.8505 12.7647 19.8557C12.7513 19.8608 12.7379 19.8657 12.7242 19.8706C12.7108 19.8754 12.6973 19.8802 12.6837 19.8848C12.6703 19.8893 12.6567 19.8937 12.6431 19.898C12.6298 19.9022 12.6162 19.9063 12.6026 19.9103C12.5892 19.9143 12.5757 19.9183 12.5621 19.922C12.5486 19.9258 12.5351 19.9295 12.5215 19.933C12.5081 19.9365 12.4946 19.9399 12.481 19.9432C12.4676 19.9464 12.4541 19.9495 12.4405 19.9526C12.427 19.9556 12.4135 19.9586 12.3999 19.9614C12.3865 19.9642 12.373 19.967 12.3594 19.9696C12.346 19.9722 12.3324 19.9746 12.3189 19.977C12.3054 19.9794 12.2919 19.9817 12.2783 19.9839L12.2378 19.9902C12.2244 19.9921 12.2108 19.9939 12.1973 19.9957C12.1838 19.9975 12.1703 19.9993 12.1567 20.0009L12.1162 20.0054C12.1028 20.0068 12.0892 20.008 12.0757 20.0093C12.0622 20.0105 12.0487 20.0118 12.0351 20.0128C12.0217 20.0139 12.0082 20.0148 11.9946 20.0157C11.9811 20.0165 11.9676 20.0173 11.954 20.018C11.9405 20.0187 11.9271 20.0194 11.9135 20.02C11.9001 20.0205 11.8865 20.0208 11.873 20.0212L11.8324 20.0222C11.819 20.0224 11.8055 20.0225 11.7919 20.0226L11.7514 20.0226L11.7108 20.0223L11.6703 20.0218L11.6298 20.0209L11.5892 20.0198L11.5487 20.0185L11.5082 20.0168L11.4676 20.0149L11.4271 20.0129L11.3866 20.0104L11.346 20.0078L11.3055 20.0049L11.265 20.0017L11.2244 19.9983L11.1839 19.9946L11.1433 19.9907L11.1028 19.9865L11.0623 19.9821L11.0217 19.9775L10.9812 19.9725L10.9407 19.9674L10.9001 19.962L10.8596 19.9563L10.819 19.9504L10.7785 19.9443L10.738 19.9379L10.6974 19.9313L10.6569 19.9244L10.6164 19.9173L10.5758 19.91L10.5353 19.9024L10.4948 19.8946L10.4542 19.8866L10.4137 19.8783L10.3732 19.8698L10.3326 19.8611L10.2921 19.8521L10.2516 19.8429L10.211 19.8335L10.1705 19.8238L10.13 19.8139L10.0894 19.8038L10.0489 19.7936L10.0083 19.7829L9.9678 19.7722L9.92728 19.7612L9.88672 19.75L9.8462 19.7386L9.80567 19.7269L9.76512 19.7151L9.7246 19.703L9.68404 19.6907L9.64352 19.6782L9.603 19.6654L9.56244 19.6525L9.52192 19.6394L9.48136 19.6261L9.44084 19.6125L9.40032 19.5987L9.35976 19.5847L9.31924 19.5706L9.27868 19.5562L9.23816 19.5416L9.19764 19.5269L9.15708 19.5118L9.11656 19.4967L9.076 19.4813L9.03548 19.4657L8.99496 19.4499L8.9544 19.434L8.91388 19.4178L8.87332 19.4014L8.8328 19.3849L8.79228 19.3682L8.75172 19.3513L8.7112 19.3341L8.67064 19.3168L8.63012 19.2993L8.5896 19.2817L8.54904 19.2637L8.50852 19.2457L8.468 19.2275L8.42744 19.2091L8.38692 19.1905L8.34637 19.1717L8.30584 19.1528L8.26532 19.1336L8.22476 19.1144C8.19572 19.1004 8.16671 19.0864 8.1377 19.0723Z",
    fill: "#006CB9"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.8644 14.0838C19.8348 14.1079 19.8057 14.1321 19.7773 14.1567V8.61115C19.7773 8.31625 19.8074 8.02839 19.8644 7.75042C19.8766 7.69075 19.8902 7.63162 19.9049 7.57289C19.9175 7.52251 19.9311 7.47253 19.9455 7.42288C19.9583 7.37866 19.9718 7.33475 19.986 7.29114C19.999 7.25129 20.0124 7.21164 20.0265 7.17233C20.0396 7.1359 20.0531 7.09965 20.0671 7.06369C20.0802 7.03008 20.0937 6.99663 20.1076 6.96343C20.1208 6.93212 20.1343 6.90101 20.1481 6.87007C20.1613 6.84069 20.1749 6.81152 20.1887 6.78251C20.2019 6.75479 20.2154 6.72734 20.2292 6.69997C20.2424 6.67367 20.256 6.64758 20.2698 6.62159C20.283 6.59655 20.2966 6.57167 20.3103 6.54694C20.3236 6.52298 20.3371 6.49912 20.3508 6.47547C20.3642 6.4525 20.3776 6.42963 20.3914 6.40692C20.4047 6.385 20.4182 6.36321 20.4319 6.34156C20.4452 6.32048 20.4588 6.29964 20.4725 6.27883C20.4858 6.25847 20.4993 6.23824 20.513 6.21814C20.5264 6.19842 20.5398 6.1787 20.5535 6.15925C20.5668 6.14041 20.5805 6.12188 20.5941 6.10331C20.6074 6.08501 20.6209 6.06681 20.6346 6.04875C20.648 6.03096 20.6614 6.01314 20.6751 5.99558C20.6884 5.97854 20.7021 5.96173 20.7157 5.94489C20.7291 5.92825 20.7426 5.91168 20.7562 5.89528C20.7696 5.87908 20.7831 5.86295 20.7968 5.84699C20.8101 5.83141 20.8237 5.81602 20.8373 5.80064C20.8507 5.78539 20.8642 5.77007 20.8778 5.75499C20.8912 5.74025 20.9048 5.72568 20.9183 5.71115C20.9317 5.69678 20.9453 5.68251 20.9589 5.66832C20.9723 5.65432 20.9858 5.64033 20.9994 5.6265C21.0128 5.61295 21.0264 5.59956 21.0399 5.58618C21.0534 5.57286 21.0668 5.55944 21.0805 5.54629C21.0938 5.53345 21.1075 5.52091 21.121 5.50824C21.1345 5.4956 21.1479 5.48293 21.1616 5.47049C21.175 5.45829 21.1886 5.4463 21.2021 5.43427C21.2156 5.42227 21.229 5.41031 21.2426 5.39852C21.2561 5.38689 21.2696 5.37548 21.2832 5.36402C21.2966 5.35267 21.3101 5.34132 21.3237 5.3301C21.3372 5.31906 21.3507 5.30811 21.3642 5.29723C21.3777 5.28642 21.3912 5.27568 21.4048 5.26504C21.4182 5.25454 21.4318 5.24413 21.4453 5.23377C21.4588 5.2235 21.4723 5.21326 21.4858 5.20317C21.4993 5.19314 21.5128 5.18324 21.5264 5.17338C21.5399 5.16362 21.5534 5.15386 21.5669 5.14424C21.5804 5.13472 21.5939 5.12533 21.6075 5.11594C21.6209 5.10663 21.6344 5.09734 21.648 5.08819C21.6614 5.07914 21.675 5.07023 21.6886 5.06132C21.702 5.05244 21.7155 5.04356 21.7291 5.03486C21.7425 5.02625 21.7561 5.01785 21.7696 5.00937C21.7831 5.00094 21.7966 4.9924 21.8102 4.98413C21.8236 4.97593 21.8372 4.968 21.8507 4.95997C21.8642 4.95194 21.8776 4.94374 21.8912 4.93588C21.9046 4.92812 21.9183 4.92066 21.9318 4.91304C21.9453 4.90541 21.9587 4.89772 21.9723 4.89027C21.9857 4.88288 21.9993 4.87576 22.0128 4.86851C22.0263 4.86129 22.0398 4.85404 22.0534 4.84696L22.0939 4.82619L22.1345 4.80589C22.1479 4.79925 22.1614 4.79254 22.175 4.78603C22.1885 4.77956 22.202 4.77329 22.2156 4.76696C22.2291 4.76065 22.2425 4.75415 22.2561 4.74798C22.2695 4.74185 22.2831 4.73609 22.2966 4.73012C22.3101 4.72416 22.3236 4.71809 22.3372 4.71226C22.3506 4.7065 22.3641 4.70091 22.3777 4.69529L22.4182 4.67862C22.4317 4.67316 22.4452 4.6677 22.4588 4.66238C22.4722 4.6571 22.4858 4.65202 22.4993 4.64686C22.5128 4.64171 22.5262 4.63639 22.5398 4.63138C22.5533 4.62643 22.5669 4.62182 22.5804 4.61701C22.5939 4.6122 22.6073 4.60732 22.6209 4.60264C22.6344 4.59797 22.6479 4.59349 22.6615 4.58899L22.702 4.57574C22.7155 4.5714 22.729 4.56696 22.7425 4.56273C22.756 4.55856 22.7696 4.55463 22.7831 4.5506C22.7966 4.54653 22.8101 4.54236 22.8236 4.53843C22.8371 4.53453 22.8506 4.53091 22.8641 4.52715L22.9047 4.51607C22.9182 4.51247 22.9317 4.50881 22.9452 4.50536C22.9587 4.50194 22.9722 4.49872 22.9857 4.4954C22.9992 4.49208 23.0127 4.48862 23.0263 4.48543C23.0398 4.48228 23.0533 4.47933 23.0668 4.47632L23.1074 4.46744C23.1209 4.46456 23.1343 4.46158 23.1479 4.45883C23.1614 4.45609 23.1749 4.45361 23.1885 4.45101C23.202 4.4484 23.2154 4.44565 23.229 4.44318L23.2695 4.43613L23.3101 4.42939C23.3236 4.42718 23.337 4.42485 23.3506 4.42278C23.3641 4.42071 23.3776 4.41898 23.3911 4.41705C23.4046 4.41515 23.4181 4.41316 23.4317 4.41136L23.4722 4.40624L23.5127 4.40157C23.5263 4.40004 23.5397 4.39828 23.5533 4.39689C23.5668 4.3955 23.5803 4.39448 23.5938 4.39323L23.6344 4.38964C23.6479 4.38849 23.6614 4.38737 23.6749 4.38639C23.6884 4.3854 23.7019 4.38462 23.7154 4.38378C23.7289 4.38293 23.7424 4.38195 23.756 4.3812C23.7695 4.38046 23.783 4.37995 23.7965 4.37934L23.837 4.37778C23.8506 4.3773 23.864 4.37659 23.8776 4.37625C23.8911 4.37591 23.9046 4.37595 23.9181 4.37575C23.9317 4.37554 23.9452 4.3753 23.9587 4.37524L23.9766 4.375H23.9992H24.0398H24.0803H24.1208H24.1614H24.2019H24.2424H24.283H24.3235H24.364H24.4046H24.4451H24.4856H24.5262H24.5667H24.6073H24.6478H24.6884H24.7289H24.7694H24.81H24.8505H24.891H24.9316H24.9721H25.0127H25.0532H25.0937H25.1343H25.1748H25.2153H25.2559H25.2964H25.3369H25.3775H25.418H25.4585H25.4991H25.5396H25.5802H25.6207H25.6613H25.7018H25.7423H25.7829H25.8234H25.8639H25.9045H25.945H25.9855H26.0261H26.0666H26.1072H26.1477H26.1882H26.2288H26.2693H26.3099H26.3504H26.3909H26.4315H26.472H26.5125H26.5531H26.5936H26.6342H26.6747H26.7152H26.7558H26.7963H26.8368H26.8774H26.9179H26.9584H26.999H27.0395H27.0801H27.1206H27.1612H27.2017H27.2422H27.2828H27.3233H27.3638H27.4044H27.4449H27.4854H27.526H27.5665H27.6071H27.6476H27.6882H27.7287H27.7692H27.8098H27.8503H27.8908H27.9314H27.9719H28.0124H28.053H28.0935H28.1341H28.1746H28.2151H28.2557H28.2962H28.3367H28.3773H28.4178H28.4583H28.4989H28.5394H28.58H28.6205H28.661H28.7016H28.7421H28.7827H28.8232H28.8637H28.9043H28.9448H28.9853H29.0259H29.0664H29.107H29.1475H29.1881H29.2286H29.2691H29.3097H29.3502H29.3907H29.4313H29.4718H29.5123H29.5529H29.5934H29.6339H29.6745H29.715H29.7556H29.7961H29.8366H29.8772H29.9177H29.9582H29.9988H30.0393H30.0799H30.1204H30.1548V25.5542C30.1548 25.7384 30.1431 25.9197 30.1204 26.0977C30.1095 26.1834 30.0958 26.2682 30.0799 26.3522C30.0678 26.4161 30.0543 26.4796 30.0393 26.5425C30.0267 26.5954 30.0133 26.6481 29.9988 26.7003C29.986 26.746 29.9725 26.7915 29.9582 26.8366C29.9454 26.8775 29.9318 26.918 29.9177 26.9583C29.9047 26.9956 29.8912 27.0327 29.8772 27.0696C29.8641 27.1039 29.8506 27.1381 29.8366 27.172C29.8235 27.204 29.81 27.2358 29.7961 27.2674C29.7829 27.2973 29.7694 27.3271 29.7556 27.3567C29.7423 27.3849 29.7288 27.413 29.715 27.4409C29.7018 27.4676 29.6883 27.4942 29.6745 27.5207C29.6612 27.5461 29.6477 27.5715 29.6339 27.5966C29.6206 27.621 29.6072 27.6452 29.5934 27.6692C29.5801 27.6924 29.5666 27.7154 29.5529 27.7382C29.5396 27.7604 29.526 27.7824 29.5123 27.8043C29.499 27.8256 29.4855 27.8469 29.4718 27.868C29.4584 27.8886 29.445 27.9093 29.4313 27.9296C29.4179 27.9494 29.4044 27.969 29.3907 27.9885C29.3774 28.0076 29.3638 28.0265 29.3502 28.0453C29.3368 28.0639 29.3233 28.0824 29.3097 28.1007C29.2963 28.1185 29.2828 28.1362 29.2691 28.1539C29.2558 28.1712 29.2422 28.1883 29.2286 28.2053C29.2151 28.2222 29.2017 28.239 29.1881 28.2556C29.1747 28.2718 29.1611 28.2879 29.1475 28.3039C29.1341 28.3197 29.1206 28.3353 29.107 28.3509C29.0935 28.3663 29.0801 28.3817 29.0664 28.3969C29.0531 28.4118 29.0394 28.4264 29.0259 28.441C29.0124 28.4556 28.999 28.4702 28.9853 28.4845C28.9719 28.4986 28.9584 28.5124 28.9448 28.5263C28.9314 28.54 28.9179 28.5536 28.9043 28.5672C28.8909 28.5806 28.8774 28.5939 28.8637 28.6071C28.8503 28.62 28.8368 28.6329 28.8232 28.6457C28.8097 28.6584 28.7963 28.6712 28.7827 28.6837C28.7693 28.696 28.7557 28.7081 28.7421 28.7202C28.7286 28.7323 28.7152 28.7445 28.7016 28.7564C28.6882 28.7681 28.6746 28.7795 28.661 28.791C28.6475 28.8025 28.6341 28.814 28.6205 28.8253C28.6071 28.8364 28.5935 28.8472 28.58 28.8582C28.5665 28.8691 28.5531 28.8801 28.5394 28.8909C28.526 28.9014 28.5124 28.9117 28.4989 28.9221C28.4854 28.9325 28.472 28.9429 28.4583 28.9532C28.445 28.9632 28.4314 28.9731 28.4178 28.983C28.4043 28.9928 28.3909 29.0028 28.3773 29.0125C28.3639 29.0221 28.3503 29.0314 28.3367 29.0408C28.3232 29.0502 28.3098 29.0597 28.2962 29.069C28.2828 29.0781 28.2692 29.0869 28.2557 29.0959C28.2422 29.1048 28.2288 29.1139 28.2151 29.1227C28.2017 29.1314 28.1881 29.1397 28.1746 29.1482C28.1611 29.1567 28.1477 29.1653 28.1341 29.1737C28.1206 29.1819 28.107 29.1899 28.0935 29.198C28.08 29.206 28.0666 29.2142 28.053 29.2221C28.0395 29.2299 28.026 29.2376 28.0124 29.2453L27.9719 29.2681L27.9314 29.2902L27.8908 29.3118C27.8773 29.3188 27.8639 29.326 27.8503 29.3329C27.8368 29.3398 27.8233 29.3465 27.8098 29.3532C27.7963 29.3599 27.7828 29.3668 27.7692 29.3734C27.7558 29.3799 27.7422 29.3861 27.7287 29.3925C27.7152 29.3988 27.7017 29.4053 27.6882 29.4115C27.6747 29.4177 27.6611 29.4236 27.6476 29.4297L27.6071 29.4475L27.5665 29.4648L27.526 29.4815C27.5125 29.487 27.499 29.4927 27.4854 29.4981C27.472 29.5034 27.4584 29.5084 27.4449 29.5135C27.4314 29.5187 27.418 29.524 27.4044 29.5291C27.3909 29.5341 27.3774 29.5389 27.3638 29.5437L27.3233 29.5581L27.2828 29.5721C27.2693 29.5766 27.2557 29.5809 27.2422 29.5853C27.2287 29.5898 27.2152 29.5944 27.2017 29.5986C27.1883 29.6028 27.1747 29.6067 27.1612 29.6108L27.1206 29.623L27.0801 29.6346C27.0666 29.6384 27.0531 29.642 27.0395 29.6456C27.026 29.6493 27.0126 29.6532 26.999 29.6567C26.9855 29.6602 26.972 29.6633 26.9584 29.6666C26.945 29.67 26.9315 29.6734 26.9179 29.6766L26.8774 29.686L26.8368 29.6949C26.8233 29.6978 26.8099 29.701 26.7963 29.7038C26.7829 29.7066 26.7693 29.709 26.7558 29.7116L26.7152 29.7194L26.6747 29.7268C26.6612 29.7292 26.6477 29.7313 26.6342 29.7336C26.6206 29.7358 26.6072 29.7382 26.5936 29.7403C26.5802 29.7424 26.5666 29.7442 26.5531 29.7462L26.5125 29.7519C26.499 29.7537 26.4855 29.7556 26.472 29.7573C26.4585 29.759 26.445 29.7604 26.4315 29.762C26.418 29.7635 26.4045 29.7652 26.3909 29.7666C26.3775 29.7681 26.3639 29.7693 26.3504 29.7706L26.3099 29.7742C26.2963 29.7754 26.2829 29.7768 26.2693 29.7778C26.2559 29.7788 26.2423 29.7795 26.2288 29.7804L26.1882 29.783L26.1477 29.7851C26.1342 29.7858 26.1207 29.7862 26.1072 29.7867C26.0936 29.7872 26.0802 29.7878 26.0666 29.7882C26.0532 29.7886 26.0396 29.7887 26.0261 29.789L25.9855 29.7895C25.9729 29.7896 25.9604 29.79 25.9477 29.79H25.945H25.9045H25.8639H25.8234H25.7829H25.7423H25.7018H25.6613H25.6207H25.5802H25.5396H25.4991H25.4585H25.418H25.3775H25.3369H25.2964H25.2559H25.2153H25.1748H25.1343H25.0937H25.0532H25.0127H24.9721H24.9316H24.891H24.8505H24.81H24.7694H24.7289H24.6884H24.6478H24.6073H24.5667H24.5262H24.4856H24.4451H24.4046H24.364H24.3235H24.283H24.2424H24.2019H24.1614H24.1208H24.0803H24.0398H23.9992H23.9587H23.9181H23.8776H23.837H23.7965H23.756H23.7154H23.6749H23.6344H23.5938H23.5533H23.5127H23.4722H23.4317H23.3911H23.3506H23.3101H23.2695H23.229H23.1885H23.1479H23.1074H23.0668H23.0263H22.9857H22.9452H22.9047H22.8641H22.8236H22.7831H22.7425H22.702H22.6615H22.6209H22.5804H22.5398H22.4993H22.4588H22.4182H22.3777H22.3372H22.2966H22.2561H22.2156H22.175H22.1345H22.0939H22.0534H22.0128H21.9723H21.9318H21.8912H21.8507H21.8102H21.7696H21.7291H21.6886H21.648H21.6075H21.5669H21.5264H21.4858H21.4453H21.4048H21.3642H21.3237H21.2832H21.2426H21.2021H21.1616H21.121H21.0805H21.0399H20.9994H20.9589H20.9183H20.8778H20.8373H20.7968H20.7562H20.7157H20.6751H20.6346H20.5941H20.5535H20.513H20.4725H20.4319H20.3914H20.3508H20.3103H20.2698H20.2292H20.1887H20.1481H20.1076H20.0671H20.0265H19.986H19.9455H19.9049H19.8644H19.7773V20.01C19.8057 20.0345 19.8348 20.0588 19.8644 20.0828C19.8778 20.0937 19.8913 20.1046 19.9049 20.1153C19.9183 20.126 19.9318 20.1366 19.9455 20.1471C19.9589 20.1575 19.9723 20.1679 19.986 20.1782C19.9994 20.1882 20.013 20.1982 20.0265 20.2081C20.0399 20.218 20.0535 20.2277 20.0671 20.2375C20.0805 20.2471 20.094 20.2566 20.1076 20.2662L20.1481 20.2941C20.1615 20.3032 20.1751 20.3123 20.1887 20.3213L20.2292 20.3479C20.2426 20.3567 20.2561 20.3654 20.2698 20.374C20.2831 20.3825 20.2967 20.3909 20.3103 20.3993L20.3508 20.4241C20.3643 20.4323 20.3778 20.4404 20.3914 20.4484C20.4048 20.4564 20.4183 20.4642 20.4319 20.472L20.4725 20.4952L20.513 20.5178L20.5535 20.5399C20.567 20.5471 20.5804 20.5545 20.5941 20.5617C20.6074 20.5687 20.621 20.5757 20.6346 20.5827L20.6751 20.6034L20.7157 20.6237L20.7562 20.6434C20.7697 20.6499 20.7831 20.6565 20.7968 20.6629L20.8373 20.6818L20.8778 20.7004L20.9183 20.7185L20.9589 20.7363L20.9994 20.7538L21.0399 20.7708L21.0805 20.7875L21.121 20.8038L21.1616 20.8199L21.2021 20.8354C21.2156 20.8406 21.229 20.8458 21.2426 20.8509L21.2832 20.8657C21.2967 20.8707 21.3101 20.8757 21.3237 20.8806C21.3371 20.8854 21.3507 20.8901 21.3642 20.8948L21.4048 20.909L21.4453 20.9227C21.4588 20.9272 21.4722 20.9319 21.4858 20.9364C21.4992 20.9408 21.5129 20.9451 21.5264 20.9494L21.5669 20.9625L21.6075 20.9751L21.648 20.9876L21.6886 20.9996L21.7291 21.0115L21.7696 21.0231L21.8102 21.0345L21.8507 21.0456L21.8912 21.0565L21.9318 21.0672L21.9723 21.0776L22.0128 21.0879L22.0534 21.0978L22.0939 21.1077L22.1345 21.1171L22.175 21.1264L22.2156 21.1355L22.2561 21.1444L22.2966 21.1532L22.3372 21.1616L22.3777 21.17L22.4182 21.178L22.4588 21.186L22.4993 21.1937L22.5398 21.2012L22.5804 21.2087L22.6209 21.2158L22.6615 21.2228L22.702 21.2296L22.7425 21.2363L22.7831 21.2429L22.8236 21.2491L22.8641 21.2553L22.9047 21.2613L22.9452 21.2671L22.9857 21.2728L23.0263 21.2782L23.0668 21.2836L23.1074 21.2888L23.1479 21.2938L23.1885 21.2988L23.229 21.3035L23.2695 21.3081L23.3101 21.3126L23.3506 21.3168L23.3911 21.321L23.4317 21.3251L23.4722 21.3289L23.5127 21.3328L23.5533 21.3363L23.5938 21.3398L23.6344 21.3433L23.6749 21.3464L23.7154 21.3495L23.756 21.3526L23.7965 21.3554L23.837 21.3581L23.8776 21.3608L23.9181 21.3632L23.9587 21.3656L23.9992 21.3679L24.0398 21.3699L24.0803 21.3719L24.1208 21.3739L24.1614 21.3756L24.2019 21.3773L24.2424 21.3789L24.283 21.3803L24.3235 21.3816L24.364 21.3829L24.4046 21.384L24.4451 21.385L24.4856 21.386L24.5262 21.3867L24.5667 21.3874L24.6073 21.3881L24.6478 21.3885L24.6884 21.3889L24.7289 21.3892L24.7694 21.3894L24.81 21.3895L24.8505 21.3895L24.891 21.3894L24.9316 21.3892L24.9721 21.389L25.0127 21.3886L25.0532 21.3881L25.0937 21.3876L25.1343 21.387L25.1748 21.3862L25.2153 21.3853L25.2559 21.3845L25.2964 21.3834L25.3369 21.3823L25.3775 21.3812L25.418 21.38L25.4585 21.3785L25.4991 21.3771L25.5396 21.3757L25.5802 21.374L25.6207 21.3723L25.6613 21.3706L25.6811 21.3698L25.7018 21.3688L25.7423 21.3668L25.7829 21.3646L25.8234 21.3624L25.8639 21.3599L25.9045 21.3574L25.945 21.3547L25.9855 21.3519L26.0261 21.3489L26.0666 21.3458L26.1072 21.3426L26.1477 21.3393L26.1882 21.3358L26.2288 21.3322L26.2693 21.3285L26.3099 21.3246L26.3504 21.3207L26.3909 21.3166L26.4315 21.3125L26.472 21.3082L26.5125 21.3038L26.5531 21.2993L26.5936 21.2947L26.6342 21.29L26.6747 21.2852L26.7152 21.2803L26.7558 21.2753L26.7963 21.2701L26.8368 21.2649L26.8774 21.2597L26.9179 21.2542L26.9584 21.2487L26.999 21.2431L27.0395 21.2374L27.0801 21.2317L27.1206 21.2258L27.1612 21.2198L27.2017 21.2137L27.2422 21.2076L27.2828 21.2014L27.3233 21.1951L27.3638 21.1887L27.4044 21.1822L27.4449 21.1756L27.4854 21.169L27.526 21.1622L27.5665 21.1554L27.6071 21.1485L27.6476 21.1415L27.6882 21.1344L27.7287 21.1273L27.7692 21.12L27.8098 21.1127L27.8503 21.1053L27.8908 21.0979L27.9314 21.0903L27.9719 21.0826L28.0124 21.0749L28.053 21.0671L28.0935 21.0593L28.1341 21.0513L28.1746 21.0433L28.2151 21.0352L28.2557 21.027L28.2962 21.0187L28.3367 21.0103L28.3773 21.0019L28.4178 20.9934L28.4583 20.9848L28.4989 20.976L28.5394 20.9673L28.58 20.9584L28.6205 20.9495L28.661 20.9404L28.7016 20.9313L28.7421 20.9221L28.7827 20.9127L28.8232 20.9033L28.8637 20.8937L28.9043 20.884L28.9448 20.8741L28.9851 20.8641V19.0723L28.9448 19.0925L28.9043 19.1127L28.8637 19.1326L28.8232 19.1524L28.7827 19.1721L28.7421 19.1915L28.7016 19.2107L28.661 19.2297L28.6205 19.2485L28.58 19.2672L28.5394 19.2856L28.4989 19.3038L28.4583 19.3217L28.4178 19.3395L28.3773 19.3571L28.3367 19.3744L28.2962 19.3916L28.2557 19.4085L28.2151 19.4252L28.1746 19.4417L28.1341 19.4579L28.0935 19.474L28.053 19.4897L28.0124 19.5053L27.9719 19.5207L27.9314 19.5358L27.8908 19.5506L27.8503 19.5653L27.8098 19.5797L27.7692 19.5939L27.7287 19.6079L27.6882 19.6216L27.6476 19.6351L27.6071 19.6484L27.5665 19.6614L27.526 19.6742L27.4854 19.6868L27.4449 19.6991L27.4044 19.7112L27.3638 19.7231L27.3233 19.7347L27.2828 19.7461L27.2422 19.7573L27.2017 19.7682L27.1612 19.7789L27.1206 19.7894L27.0801 19.7996L27.0395 19.8096L26.999 19.8195L26.9584 19.829L26.9179 19.8383L26.8774 19.8474L26.8368 19.8563L26.7963 19.8649L26.7558 19.8733L26.7152 19.8815L26.6747 19.8895L26.6342 19.8972L26.5936 19.9047L26.5531 19.912L26.5125 19.919L26.472 19.9258L26.4315 19.9324L26.3909 19.9389L26.3504 19.945L26.3099 19.9509L26.2693 19.9567L26.2288 19.9622L26.1882 19.9674L26.1477 19.9725L26.1072 19.9774L26.0666 19.982L26.0261 19.9864L25.9855 19.9906L25.945 19.9946L25.9045 19.9984L25.8639 20.002L25.8234 20.0053L25.7988 20.0072L25.7829 20.0083L25.7423 20.0111L25.7018 20.0138L25.6613 20.016L25.6207 20.0181L25.5802 20.02L25.5396 20.0213L25.4991 20.0226L25.4585 20.0235L25.418 20.0241L25.3775 20.0246C25.3639 20.0247 25.3505 20.0245 25.3369 20.0245L25.2964 20.0243L25.2559 20.0237L25.2153 20.0228L25.1748 20.0218C25.1612 20.0213 25.1478 20.0207 25.1343 20.0201C25.1208 20.0196 25.1072 20.0191 25.0937 20.0185L25.0532 20.0162L25.0127 20.0138L24.9721 20.0109L24.9316 20.0077C24.9181 20.0066 24.9045 20.0056 24.891 20.0044C24.8774 20.0031 24.864 20.0016 24.8505 20.0003L24.81 19.9962L24.7694 19.9914L24.7289 19.9865L24.6884 19.9811L24.6478 19.9753C24.6343 19.9733 24.6207 19.9714 24.6073 19.9692C24.5937 19.9671 24.5802 19.9648 24.5667 19.9625C24.5532 19.9602 24.5396 19.9581 24.5262 19.9557C24.5126 19.9533 24.4992 19.9506 24.4856 19.9481C24.4721 19.9455 24.4585 19.9431 24.4451 19.9404C24.4315 19.9377 24.4181 19.9347 24.4046 19.9319C24.3911 19.929 24.3775 19.9263 24.364 19.9233C24.3504 19.9203 24.337 19.9171 24.3235 19.9139L24.283 19.9043C24.2694 19.901 24.2559 19.8975 24.2424 19.894C24.2289 19.8905 24.2153 19.8871 24.2019 19.8835C24.1883 19.8798 24.1748 19.876 24.1614 19.8722C24.1478 19.8684 24.1342 19.8645 24.1208 19.8605C24.1072 19.8565 24.0937 19.8523 24.0803 19.8482C24.0667 19.844 24.0532 19.8398 24.0398 19.8354C24.0262 19.831 24.0127 19.8265 23.9992 19.8219C23.9857 19.8174 23.9721 19.8128 23.9587 19.8081C23.9451 19.8033 23.9316 19.7983 23.9181 19.7934C23.9046 19.7884 23.891 19.7835 23.8776 19.7784C23.864 19.7731 23.8505 19.7677 23.837 19.7623C23.8235 19.7569 23.8099 19.7516 23.7965 19.7461C23.7829 19.7404 23.7695 19.7345 23.756 19.7287C23.7424 19.7228 23.7288 19.717 23.7154 19.711C23.7018 19.7049 23.6884 19.6985 23.6749 19.6922C23.6613 19.6858 23.6478 19.6794 23.6344 19.6729C23.6208 19.6663 23.6072 19.6595 23.5938 19.6527C23.5802 19.6458 23.5667 19.6388 23.5533 19.6317C23.5397 19.6246 23.5261 19.6175 23.5127 19.6101C23.4991 19.6027 23.4857 19.5949 23.4722 19.5872C23.4587 19.5795 23.4451 19.5718 23.4317 19.5638C23.418 19.5557 23.4046 19.5474 23.3911 19.5392C23.3775 19.5307 23.364 19.5221 23.3506 19.5135C23.337 19.5048 23.3234 19.4962 23.3101 19.4872C23.2964 19.4781 23.283 19.4686 23.2695 19.4592C23.2559 19.4498 23.2424 19.4401 23.229 19.4304C23.2154 19.4206 23.2018 19.4107 23.1885 19.4006C23.1748 19.3902 23.1613 19.3796 23.1479 19.369C23.1343 19.3582 23.1208 19.3474 23.1074 19.3364C23.0938 19.3252 23.0802 19.314 23.0668 19.3025C23.0531 19.2907 23.0397 19.2787 23.0263 19.2666C23.0126 19.2543 22.9991 19.2419 22.9857 19.2293C22.9721 19.2164 22.9585 19.2035 22.9452 19.1904C22.9316 19.1769 22.918 19.1635 22.9047 19.1498C22.8909 19.1356 22.8775 19.1212 22.8641 19.1067C22.8504 19.0918 22.8369 19.0767 22.8236 19.0615C22.8099 19.0458 22.7964 19.03 22.7831 19.014C22.7694 18.9976 22.7558 18.9809 22.7425 18.9641C22.7288 18.9467 22.7152 18.929 22.702 18.9112C22.6883 18.8928 22.6747 18.8742 22.6615 18.8553C22.6477 18.8357 22.6341 18.8159 22.6209 18.7958C22.6071 18.7748 22.5936 18.7536 22.5804 18.7321C22.5665 18.7096 22.553 18.6868 22.5398 18.6638C22.5259 18.6396 22.5125 18.615 22.4993 18.5902C22.4853 18.5638 22.4719 18.5371 22.4588 18.5101C22.4448 18.4814 22.4313 18.4523 22.4182 18.4228C22.4042 18.3911 22.3906 18.3592 22.3777 18.3266C22.3634 18.2907 22.3501 18.254 22.3372 18.217C22.3228 18.176 22.3093 18.1344 22.2966 18.0921C22.282 18.0431 22.2684 17.9933 22.2561 17.9426C22.2407 17.8795 22.2273 17.8151 22.2156 17.7495C22.1981 17.6522 22.1845 17.5523 22.175 17.4496C22.1641 17.331 22.1585 17.2089 22.1585 17.0832C22.1585 16.9574 22.1641 16.8352 22.175 16.7165C22.1845 16.6138 22.1981 16.5138 22.2156 16.4165C22.2273 16.3509 22.2407 16.2864 22.2561 16.2233C22.2684 16.1726 22.282 16.1228 22.2966 16.0737C22.3093 16.0314 22.3228 15.9898 22.3372 15.9487C22.3501 15.9117 22.3634 15.8751 22.3777 15.8391C22.3906 15.8065 22.4042 15.7745 22.4182 15.7428C22.4313 15.7133 22.4448 15.6842 22.4588 15.6555C22.4719 15.6285 22.4853 15.6017 22.4993 15.5754C22.5125 15.5506 22.5259 15.526 22.5398 15.5017C22.553 15.4787 22.5665 15.4559 22.5804 15.4334C22.5936 15.4119 22.6071 15.3907 22.6209 15.3697C22.6341 15.3496 22.6477 15.3298 22.6615 15.3101C22.6747 15.2912 22.6883 15.2726 22.702 15.2542C22.7152 15.2363 22.7288 15.2188 22.7425 15.2013C22.7558 15.1845 22.7694 15.1678 22.7831 15.1514C22.7964 15.1353 22.8099 15.1195 22.8236 15.1039C22.8369 15.0886 22.8504 15.0735 22.8641 15.0586C22.8775 15.0441 22.8909 15.0296 22.9047 15.0155C22.918 15.0018 22.9316 14.9883 22.9452 14.9749C22.9585 14.9618 22.9721 14.9488 22.9857 14.936C22.9991 14.9234 23.0126 14.9109 23.0263 14.8986C23.0397 14.8865 23.0531 14.8745 23.0668 14.8627C23.0802 14.8512 23.0938 14.8401 23.1074 14.8288C23.1208 14.8178 23.1343 14.8069 23.1479 14.7962C23.1613 14.7855 23.1748 14.7749 23.1885 14.7646C23.2018 14.7545 23.2154 14.7446 23.229 14.7347C23.2424 14.725 23.2559 14.7154 23.2695 14.7059C23.283 14.6965 23.2964 14.6871 23.3101 14.6779C23.3234 14.669 23.337 14.6603 23.3506 14.6516C23.364 14.6429 23.3775 14.6344 23.3911 14.626C23.4046 14.6177 23.418 14.6094 23.4317 14.6013C23.4451 14.5934 23.4587 14.5856 23.4722 14.5779C23.4857 14.5702 23.4991 14.5625 23.5127 14.555C23.5261 14.5476 23.5397 14.5405 23.5533 14.5334C23.5667 14.5263 23.5802 14.5193 23.5938 14.5123C23.6072 14.5055 23.6208 14.4988 23.6344 14.4921C23.6478 14.4856 23.6613 14.4792 23.6749 14.4729C23.6884 14.4666 23.7018 14.4602 23.7154 14.4541C23.7288 14.448 23.7424 14.4422 23.756 14.4364C23.7695 14.4305 23.7829 14.4246 23.7965 14.419C23.8099 14.4134 23.8235 14.4081 23.837 14.4027C23.8505 14.3973 23.864 14.3919 23.8776 14.3867C23.891 14.3815 23.9046 14.3766 23.9181 14.3717C23.9316 14.3667 23.9451 14.3617 23.9587 14.3569C23.9721 14.3522 23.9857 14.3476 23.9992 14.3431C24.0127 14.3385 24.0262 14.334 24.0398 14.3296C24.0532 14.3252 24.0667 14.321 24.0803 14.3168C24.0937 14.3127 24.1072 14.3085 24.1208 14.3045L24.1614 14.2928C24.1748 14.289 24.1883 14.2852 24.2019 14.2815C24.2153 14.2779 24.2289 14.2744 24.2424 14.2709C24.2559 14.2675 24.2694 14.264 24.283 14.2606L24.3235 14.2511C24.337 14.2479 24.3504 14.2447 24.364 14.2417C24.3775 14.2387 24.3911 14.2359 24.4046 14.2331C24.4181 14.2302 24.4315 14.2272 24.4451 14.2245C24.4585 14.2218 24.4721 14.2194 24.4856 14.2169C24.4992 14.2144 24.5126 14.2117 24.5262 14.2092C24.5396 14.2068 24.5532 14.2047 24.5667 14.2025C24.5802 14.2002 24.5937 14.1979 24.6073 14.1957L24.6478 14.1897L24.6884 14.1838L24.7289 14.1784L24.7694 14.1735L24.81 14.1687L24.8505 14.1646C24.864 14.1633 24.8774 14.1618 24.891 14.1605C24.9045 14.1593 24.9181 14.1583 24.9316 14.1572L24.9721 14.154L25.0127 14.1512L25.0532 14.1487L25.0937 14.1464C25.1072 14.1458 25.1208 14.1453 25.1343 14.1448C25.1478 14.1442 25.1612 14.1436 25.1748 14.1431L25.2153 14.1421L25.2559 14.1412L25.2964 14.1406L25.3369 14.1405C25.3505 14.1404 25.3639 14.1402 25.3775 14.1403L25.418 14.1408L25.4585 14.1414L25.4991 14.1423L25.5396 14.1436L25.5802 14.145L25.6207 14.1469L25.6613 14.1489L25.7018 14.1511L25.7423 14.1538L25.7829 14.1566L25.7988 14.1577L25.8234 14.1596L25.8639 14.1629L25.9045 14.1664L25.945 14.1701L25.9855 14.174L26.0261 14.1782L26.0666 14.1826L26.1072 14.1871L26.1477 14.1919L26.1882 14.1969L26.2288 14.2021L26.2693 14.2075L26.3099 14.2132L26.3504 14.219L26.3909 14.2251L26.4315 14.2314L26.472 14.238L26.5125 14.2447L26.5531 14.2517L26.5936 14.2589L26.6342 14.2663L26.6747 14.274L26.7152 14.2819L26.7558 14.29L26.7963 14.2983L26.8368 14.3069L26.8774 14.3157L26.9179 14.3247L26.9584 14.3339L26.999 14.3434L27.0395 14.3532L27.0801 14.3631L27.1206 14.3733L27.1612 14.3837L27.2017 14.3944L27.2422 14.4053L27.2828 14.4164L27.3233 14.4278L27.3638 14.4394L27.4044 14.4513L27.4449 14.4634L27.4854 14.4757L27.526 14.4883L27.5665 14.501L27.6071 14.5141L27.6476 14.5274L27.6882 14.5409L27.7287 14.5546L27.7692 14.5686L27.8098 14.5828L27.8503 14.5973L27.8908 14.612L27.9314 14.6269L27.9719 14.6421L28.0124 14.6575L28.053 14.6732L28.0935 14.689L28.1341 14.7051L28.1746 14.7215L28.2151 14.738L28.2557 14.7548L28.2962 14.7719L28.3367 14.7891L28.3773 14.8066L28.4178 14.8243L28.4583 14.8422L28.4989 14.8603L28.5394 14.8787L28.58 14.8973L28.6205 14.916L28.661 14.935L28.7016 14.9542L28.7421 14.9736L28.7827 14.9932L28.8232 15.013L28.8637 15.033L28.9043 15.0531L28.9448 15.0735L28.9851 15.0939V13.3008L28.9448 13.2908L28.9043 13.2809L28.8637 13.2712L28.8232 13.2617L28.7827 13.2522L28.7421 13.2429L28.7016 13.2336L28.661 13.2245L28.6205 13.2155L28.58 13.2065L28.5394 13.1976L28.4989 13.1889L28.4583 13.1802L28.4178 13.1716L28.3773 13.1631L28.3367 13.1546L28.2962 13.1463L28.2557 13.138L28.2151 13.1298L28.1746 13.1217L28.1341 13.1137L28.0935 13.1057L28.053 13.0979L28.0124 13.0901L27.9719 13.0824L27.9314 13.0747L27.8908 13.0672L27.8503 13.0597L27.8098 13.0523L27.7692 13.045L27.7287 13.0378L27.6882 13.0307L27.6476 13.0236L27.6071 13.0166L27.5665 13.0097L27.526 13.0029L27.4854 12.9962L27.4449 12.9895L27.4044 12.983L27.3638 12.9765L27.3233 12.9701L27.2828 12.9638L27.2422 12.9576L27.2017 12.9514L27.1612 12.9454L27.1206 12.9394L27.0801 12.9336L27.0395 12.9278L26.999 12.9222L26.9584 12.9166L26.9179 12.9111L26.8774 12.9057L26.8368 12.9004L26.7963 12.8952L26.7558 12.8901L26.7152 12.8851L26.6747 12.8802L26.6342 12.8754L26.5936 12.8707L26.5531 12.8661L26.5125 12.8616L26.472 12.8573L26.4315 12.853L26.3909 12.8489L26.3504 12.8448L26.3099 12.8409L26.2693 12.837L26.2288 12.8334L26.1882 12.8298L26.1477 12.8263L26.1072 12.823L26.0666 12.8198L26.0261 12.8168L25.9855 12.8138L25.945 12.811L25.9045 12.8083L25.8639 12.8058L25.8234 12.8034L25.7829 12.8011L25.7423 12.799L25.7018 12.797L25.6811 12.796L25.6613 12.7952L25.6207 12.7935L25.5802 12.7918L25.5396 12.7901L25.4991 12.7887L25.4585 12.7873L25.418 12.7859L25.3775 12.7846L25.3369 12.7835L25.2964 12.7824L25.2559 12.7813L25.2153 12.7805L25.1748 12.7797L25.1343 12.7788L25.0937 12.7783L25.0532 12.7777L25.0127 12.7772L24.9721 12.7769L24.9316 12.7767L24.891 12.7764L24.8505 12.7763L24.81 12.7764L24.7694 12.7764L24.7289 12.7766L24.6884 12.777L24.6478 12.7774L24.6073 12.7778L24.5667 12.7785L24.5262 12.7792L24.4856 12.7799L24.4451 12.7809L24.4046 12.7819L24.364 12.7829L24.3235 12.7842L24.283 12.7856L24.2424 12.787L24.2019 12.7886L24.1614 12.7903L24.1208 12.792L24.0803 12.794L24.0398 12.796L23.9992 12.798L23.9587 12.8003L23.9181 12.8027L23.8776 12.8051L23.837 12.8078L23.7965 12.8105L23.756 12.8133L23.7154 12.8164L23.6749 12.8195L23.6344 12.8227L23.5938 12.8261L23.5533 12.8295L23.5127 12.8332L23.4722 12.837L23.4317 12.8408L23.3911 12.8449L23.3506 12.8491L23.3101 12.8533L23.2695 12.8579L23.229 12.8625L23.1885 12.8672L23.1479 12.8722L23.1074 12.8772L23.0668 12.8824L23.0263 12.8878L22.9857 12.8932L22.9452 12.8989L22.9047 12.9047L22.8641 12.9107L22.8236 12.9169L22.7831 12.9231L22.7425 12.9297L22.702 12.9364L22.6615 12.9432L22.6209 12.9502L22.5804 12.9573L22.5398 12.9648L22.4993 12.9723L22.4588 12.9801L22.4182 12.988L22.3777 12.996L22.3372 13.0045L22.2966 13.0129L22.2561 13.0216L22.2156 13.0306L22.175 13.0396L22.1345 13.049L22.0939 13.0584L22.0534 13.0683L22.0128 13.0782L21.9723 13.0885L21.9318 13.0989L21.8912 13.1096L21.8507 13.1205L21.8102 13.1316L21.7696 13.1431L21.7291 13.1546L21.6886 13.1666L21.648 13.1786L21.6075 13.1911L21.5669 13.2037L21.5264 13.2168C21.5129 13.2212 21.4992 13.2254 21.4858 13.2299L21.4453 13.2435C21.4318 13.2481 21.4182 13.2525 21.4048 13.2572L21.3642 13.2714L21.3237 13.2857C21.3101 13.2905 21.2967 13.2956 21.2832 13.3005C21.2696 13.3055 21.256 13.3104 21.2426 13.3154L21.2021 13.3309C21.1886 13.3361 21.175 13.3412 21.1616 13.3464L21.121 13.3625L21.0805 13.3788L21.0399 13.3956L20.9994 13.4126L20.9589 13.43L20.9183 13.4478L20.8778 13.4659L20.8373 13.4846L20.7968 13.5034C20.7831 13.5099 20.7697 13.5164 20.7562 13.523L20.7157 13.5427L20.6751 13.563L20.6346 13.5837C20.621 13.5908 20.6074 13.5977 20.5941 13.6048C20.5804 13.612 20.567 13.6193 20.5535 13.6266L20.513 13.6487L20.4725 13.6713C20.4588 13.679 20.4454 13.6867 20.4319 13.6945C20.4183 13.7023 20.4048 13.7101 20.3914 13.7181C20.3778 13.7261 20.3643 13.7342 20.3508 13.7424C20.3372 13.7506 20.3237 13.7589 20.3103 13.7672C20.2967 13.7756 20.2831 13.784 20.2698 13.7925C20.2561 13.8012 20.2426 13.8099 20.2292 13.8186L20.1887 13.8453C20.1751 13.8543 20.1615 13.8633 20.1481 13.8724L20.1076 13.9004C20.094 13.91 20.0805 13.9195 20.0671 13.9291C20.0535 13.9389 20.0399 13.9487 20.0265 13.9585C20.013 13.9685 19.9994 13.9784 19.986 13.9885C19.9723 13.9988 19.9589 14.0091 19.9455 14.0195C19.9318 14.0301 19.9183 14.0407 19.9049 14.0513C19.8913 14.0621 19.8778 14.0729 19.8644 14.0839V14.0838Z",
    fill: "#E10238"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cards/unionpay.js

/* harmony default export */ var unionpay = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "0.878906",
    y: "0.5",
    width: "50",
    height: "34",
    rx: "3.5",
    fill: "white",
    stroke: "#F3F3F3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M44.0545 5.25735L34.3353 5.25488C34.3341 5.25488 34.3328 5.25488 34.3328 5.25488C34.3253 5.25488 34.3179 5.2562 34.3106 5.2562C32.9754 5.29641 31.3124 6.34915 31.0096 7.64726L26.4132 27.6401C26.1104 28.9503 26.9343 30.0165 28.2599 30.0361H38.4703C39.7756 29.9726 41.044 28.932 41.3417 27.6486L45.9382 7.65564C46.2459 6.33208 45.402 5.25735 44.0545 5.25735Z",
    fill: "#01798A"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26.4134 27.6401L31.0097 7.64729C31.3126 6.34917 32.9755 5.29643 34.3107 5.25622L30.4464 5.25376L23.484 5.25244C22.1451 5.27936 20.4605 6.33949 20.1577 7.64729L15.5601 27.6401C15.2561 28.9503 16.0813 30.0165 17.4059 30.0361H28.26C26.9345 30.0165 26.1105 28.9503 26.4134 27.6401",
    fill: "#024381"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.5602 27.64L20.1578 7.64714C20.4606 6.33934 22.1452 5.27922 23.4841 5.2523L14.5649 5.25C13.2185 5.25 11.4923 6.32227 11.1846 7.64714L6.58694 27.64C6.55896 27.762 6.54344 27.8815 6.53418 27.9986V28.3695C6.62418 29.3246 7.36619 30.0201 8.43278 30.036H17.406C16.0814 30.0163 15.2562 28.9502 15.5602 27.64Z",
    fill: "#DD0228"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.6716 19.8205H23.8404C23.9955 19.8205 24.0999 19.7693 24.1488 19.668L24.5874 19.0227H25.762L25.5171 19.4472H26.9254L26.7467 20.0975H25.0709C24.8779 20.3829 24.6403 20.5171 24.3547 20.5012H23.4818L23.6716 19.8205H23.6716ZM23.4788 20.7527H26.5643L26.3676 21.4591H25.1268L24.9374 22.1409H26.1449L25.9482 22.8473H24.7407L24.4602 23.8548C24.3908 24.0232 24.4821 24.099 24.7327 24.0818H25.7168L25.5345 24.7382H23.6451C23.287 24.7382 23.1641 24.5368 23.2765 24.1331L23.6351 22.8473H22.8633L23.0593 22.1409H23.8313L24.0205 21.4591H23.2827L23.4788 20.7527H23.4788ZM28.4035 19.018L28.355 19.4315C28.355 19.4315 28.937 19.002 29.4656 19.002H31.4189L30.6719 21.6601C30.61 21.964 30.3443 22.1151 29.8752 22.1151H27.6612L27.1426 23.9817C27.1128 24.0817 27.155 24.133 27.2667 24.133H27.7023L27.5422 24.7124H26.4347C26.0096 24.7124 25.8328 24.5867 25.903 24.3343L27.3684 19.018H28.4035H28.4035ZM30.0576 19.7693H28.3141L28.1056 20.4866C28.1056 20.4866 28.3959 20.2805 28.8811 20.2731C29.365 20.2657 29.9173 20.2731 29.9173 20.2731L30.0576 19.7693ZM29.4261 21.4333C29.555 21.4504 29.6271 21.4003 29.6358 21.282L29.7425 20.9039H27.9964L27.85 21.4333H29.4261ZM28.2483 22.2921H29.2547L29.236 22.7203H29.504C29.6394 22.7203 29.7065 22.6776 29.7065 22.5935L29.7858 22.3166H30.6223L30.5106 22.7203C30.4161 23.057 30.1656 23.2327 29.7586 23.2499H29.2225L29.22 23.9817C29.2101 24.0989 29.318 24.1587 29.54 24.1587H30.0439L29.8813 24.7381H28.6727C28.3339 24.754 28.1678 24.5953 28.1713 24.2587L28.2483 22.2921V22.2921Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0529 15.4764C15.9164 16.1339 15.6 16.639 15.1091 16.9976C14.6227 17.3502 13.9954 17.527 13.2273 17.527C12.5044 17.527 11.9745 17.3465 11.6364 16.9841C11.4018 16.7267 11.2852 16.3998 11.2852 16.0045C11.2852 15.8411 11.3051 15.6654 11.3448 15.4764L12.1631 11.5972H13.3991L12.5919 15.4325C12.5671 15.5386 12.5571 15.6374 12.5584 15.7265C12.5571 15.9229 12.6068 16.0839 12.7073 16.2095C12.8537 16.3962 13.0914 16.4889 13.4221 16.4889C13.8024 16.4889 14.1158 16.3974 14.359 16.2132C14.6022 16.0302 14.761 15.7704 14.8324 15.4325L15.6422 11.5972H16.8719L16.0529 15.4764Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.2436 13.9502H22.2116L21.4534 17.4123H20.4873L21.2436 13.9502ZM21.5482 12.689H22.5248L22.3424 13.5293H21.3659L21.5482 12.689Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.0688 17.1487C22.8156 16.9109 22.6878 16.59 22.6865 16.1826C22.6865 16.113 22.6908 16.0338 22.7002 15.9471C22.7095 15.8592 22.7214 15.7739 22.738 15.6946C22.8528 15.1323 23.0973 14.6858 23.4739 14.3564C23.8499 14.0258 24.3036 13.8599 24.8347 13.8599C25.2696 13.8599 25.6145 13.9794 25.8672 14.2185C26.1196 14.4589 26.2462 14.7833 26.2462 15.1957C26.2462 15.2664 26.2407 15.3481 26.2313 15.436C26.2201 15.525 26.2066 15.6104 26.1909 15.6946C26.0787 16.2484 25.8349 16.69 25.4583 17.0134C25.0816 17.3391 24.6293 17.5012 24.1019 17.5012C23.6651 17.5012 23.3213 17.3841 23.0688 17.1487M24.9136 16.4631C25.0843 16.2814 25.2065 16.0056 25.2809 15.6385C25.2921 15.5812 25.302 15.5214 25.3082 15.4616C25.3143 15.403 25.3168 15.3482 25.3168 15.2981C25.3168 15.0846 25.2616 14.9188 25.1506 14.8016C25.0402 14.6833 24.8832 14.6248 24.6804 14.6248C24.4122 14.6248 24.1939 14.7174 24.0227 14.9029C23.8501 15.0884 23.7279 15.3689 23.6509 15.7422C23.6404 15.7995 23.6317 15.8569 23.6237 15.913C23.6175 15.9703 23.6157 16.024 23.6168 16.0728C23.6168 16.285 23.6721 16.4485 23.7831 16.5644C23.8935 16.6803 24.0498 16.7376 24.2553 16.7376C24.5246 16.7376 24.743 16.6461 24.9136 16.4631Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.5262 19.8496L32.7596 19.0421H33.9397L33.8888 19.3385C33.8888 19.3385 34.4918 19.0421 34.9261 19.0421C35.3606 19.0421 36.3854 19.0421 36.3854 19.0421L36.1535 19.8496H35.9239L34.8231 23.6582H35.0527L34.8343 24.4146H34.6047L34.5092 24.7427H33.3664L33.4617 24.4146H31.207L31.4268 23.6582H31.6527L32.7544 19.8496H32.5262H32.5262ZM33.7993 19.8498L33.4989 20.8805C33.4989 20.8805 34.0128 20.6866 34.4558 20.6318C34.5536 20.2718 34.6815 19.8498 34.6815 19.8498H33.7993V19.8498ZM33.3598 21.3637L33.0585 22.4433C33.0585 22.4433 33.628 22.1676 34.0188 22.1444C34.1317 21.7271 34.2447 21.3637 34.2447 21.3637H33.3598V21.3637ZM33.5808 23.6583L33.8067 22.8751H32.9258L32.6987 23.6583H33.5808ZM36.4352 18.9922H37.5447L37.5918 19.3946C37.5844 19.4971 37.6463 19.546 37.7779 19.546H37.9739L37.7756 20.2279H36.9601C36.6487 20.2437 36.4886 20.1267 36.4738 19.8741L36.4352 18.9922ZM36.1102 20.4548H39.7039L39.493 21.1868H38.3488L38.1526 21.8673H39.2957L39.0835 22.5981H37.8104L37.5224 23.0264H38.1455L38.2894 23.8839C38.3066 23.9693 38.3836 24.0108 38.5151 24.0108H38.7086L38.5053 24.717H37.8202C37.4653 24.7342 37.2818 24.6171 37.2667 24.3646L37.1016 23.5814L36.5346 24.4146C36.4005 24.65 36.1945 24.7599 35.9167 24.7427H34.8705L35.074 24.0363H35.4004C35.5345 24.0363 35.646 23.9778 35.7465 23.8595L36.634 22.5981H35.4898L35.7018 21.8673H36.9428L37.1402 21.1868H35.898L36.1102 20.4548Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1915 13.9492H18.0645L17.9647 14.4493L18.0899 14.3066C18.3729 14.009 18.7166 13.8613 19.1224 13.8613C19.4898 13.8613 19.7547 13.9663 19.921 14.1773C20.0847 14.3884 20.1294 14.6799 20.0519 15.0544L19.571 17.4137H18.6738L19.1081 15.2752C19.1529 15.0544 19.1405 14.8897 19.0715 14.7836C19.0033 14.6774 18.873 14.625 18.685 14.625C18.4542 14.625 18.26 14.6957 18.1017 14.8361C17.9429 14.9776 17.8381 15.174 17.7865 15.424L17.3863 17.4137H16.4873L17.1915 13.9492Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.2021 13.9492H28.0758L27.9767 14.4493L28.1006 14.3066C28.3837 14.009 28.7287 13.8613 29.1332 13.8613C29.5005 13.8613 29.766 13.9663 29.931 14.1773C30.0937 14.3884 30.1408 14.6799 30.0614 15.0544L29.5823 17.4137H28.6839L29.1184 15.2752C29.1629 15.0544 29.1506 14.8897 29.0823 14.7836C29.0115 14.6774 28.8836 14.625 28.6964 14.625C28.4655 14.625 28.272 14.6957 28.1119 14.8361C27.953 14.9776 27.8476 15.174 27.798 15.424L27.396 17.4137H26.498L27.2021 13.9492",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M31.5212 11.8018H34.0577C34.5454 11.8018 34.9225 11.9104 35.1818 12.1238C35.44 12.3398 35.5692 12.6497 35.5692 13.0534V13.0656C35.5692 13.1424 35.564 13.229 35.5567 13.3229C35.5441 13.4157 35.5279 13.5095 35.5071 13.6072C35.3954 14.1415 35.1359 14.571 34.7352 14.8967C34.333 15.2211 33.8567 15.3846 33.3082 15.3846H31.9479L31.5274 17.4133H30.3496L31.5212 11.8018M32.1554 14.4087H33.2835C33.5776 14.4087 33.8108 14.3415 33.9809 14.2086C34.1497 14.0744 34.2614 13.8695 34.3234 13.5914C34.3332 13.54 34.3394 13.4937 34.3469 13.451C34.3508 13.4108 34.3556 13.3704 34.3556 13.3315C34.3556 13.1326 34.2838 12.9887 34.1397 12.8984C33.9958 12.8068 33.7701 12.763 33.4572 12.763H32.4991L32.1554 14.4087",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M40.8406 18.0833C40.4683 18.8615 40.1135 19.3152 39.9051 19.5263C39.6964 19.735 39.2833 20.2205 38.2881 20.1839L38.3737 19.5898C39.2112 19.3361 39.6642 18.1929 39.9223 17.6867L39.6146 13.9587L40.2624 13.9502H40.8059L40.8643 16.2888L41.8829 13.9502H42.9143L40.8406 18.0833Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M37.9561 14.232L37.5464 14.509C37.1183 14.1796 36.7274 13.9759 35.9731 14.3199C34.9454 14.7883 34.0868 18.381 36.9161 17.1976L37.0774 17.3855L38.1905 17.4135L38.9215 14.1491L37.9561 14.232M37.3233 16.0168C37.1445 16.5353 36.7451 16.8781 36.4324 16.7805C36.1196 16.6853 36.008 16.1851 36.1891 15.6655C36.3678 15.1458 36.7698 14.8042 37.08 14.9018C37.3927 14.997 37.5056 15.4971 37.3233 16.0168Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M34.3328 5.26107L30.4463 5.25342L34.3106 5.26981C34.318 5.26981 34.3253 5.26107 34.3328 5.26107",
    fill: "#E02F41"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.4467 5.27406L23.5378 5.25C23.5204 5.25 23.5024 5.25765 23.4844 5.26531L30.4467 5.27406",
    fill: "#2E4F7D"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/WCPayAcceptedMethods.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */











var WCPayAcceptedMethods_WCPayAcceptedMethods = function WCPayAcceptedMethods() {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3",
    variant: "label"
  }, Object(external_wp_i18n_["__"])('Accepted payment methods', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment-wcpay__accepted"
  }, Object(external_wp_element_["createElement"])(visa, null), Object(external_wp_element_["createElement"])(mastercard, null), Object(external_wp_element_["createElement"])(maestro, null), Object(external_wp_element_["createElement"])(amex, null), Object(external_wp_element_["createElement"])(diners, null), Object(external_wp_element_["createElement"])(cb, null), Object(external_wp_element_["createElement"])(discover, null), Object(external_wp_element_["createElement"])(unionpay, null), Object(external_wp_element_["createElement"])(jcb, null), Object(external_wp_element_["createElement"])(applepay, null)));
};
// EXTERNAL MODULE: ./node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(331);
var notice_outline_default = /*#__PURE__*/__webpack_require__.n(notice_outline);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/SetupRequired.js


/**
 * External dependencies
 */



var SetupRequired_SetupRequired = function SetupRequired() {
  return Object(external_wp_element_["createElement"])("span", {
    className: "woocommerce-task-payment__setup_required"
  }, Object(external_wp_element_["createElement"])(notice_outline_default.a, null), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "small"
  }, Object(external_wp_i18n_["__"])('Setup required', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/PaymentAction.js







/**
 * External dependencies
 */





var PaymentAction_PaymentAction = function PaymentAction(_ref) {
  var _ref$hasSetup = _ref.hasSetup,
      hasSetup = _ref$hasSetup === void 0 ? false : _ref$hasSetup,
      _ref$isConfigured = _ref.isConfigured,
      isConfigured = _ref$isConfigured === void 0 ? false : _ref$isConfigured,
      _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? false : _ref$isEnabled,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isRecommended = _ref.isRecommended,
      isRecommended = _ref$isRecommended === void 0 ? false : _ref$isRecommended,
      _ref$manageUrl = _ref.manageUrl,
      manageUrl = _ref$manageUrl === void 0 ? null : _ref$manageUrl,
      markConfigured = _ref.markConfigured,
      methodKey = _ref.methodKey,
      _ref$onSetUp = _ref.onSetUp,
      onSetUp = _ref$onSetUp === void 0 ? function () {} : _ref$onSetUp,
      onSetupCallback = _ref.onSetupCallback,
      _ref$setupButtonText = _ref.setupButtonText,
      setupButtonText = _ref$setupButtonText === void 0 ? Object(external_wp_i18n_["__"])('Set up', 'woocommerce-admin') : _ref$setupButtonText;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isBusy = _useState2[0],
      setIsBusy = _useState2[1];

  var classes = 'woocommerce-task-payment__action';

  if (isLoading) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null);
  }

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
      return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onSetUp(methodKey);

              if (!onSetupCallback) {
                _context.next = 6;
                break;
              }

              setIsBusy(true);
              _context.next = 5;
              return new Promise(onSetupCallback).then(function () {
                setIsBusy(false);
              }).catch(function () {
                setIsBusy(false);
              });

            case 5:
              return _context.abrupt("return");

            case 6:
              Object(external_wc_navigation_["updateQueryString"])({
                method: methodKey
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var ManageButton = function ManageButton() {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: classes,
      isSecondary: true,
      href: manageUrl,
      onClick: methodKey === 'wcpay' ? function () {
        return Object(external_wc_tracks_["recordEvent"])('tasklist_payment_manage');
      } : function () {}
    }, Object(external_wp_i18n_["__"])('Manage', 'woocommerce-admin'));
  };

  if (!hasSetup) {
    if (!isEnabled) {
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: classes,
        isSecondary: true,
        onClick: function onClick() {
          return markConfigured(methodKey);
        }
      }, Object(external_wp_i18n_["__"])('Enable', 'woocommerce-admin'));
    }

    return Object(external_wp_element_["createElement"])(ManageButton, null);
  }

  if (!isEnabled) {
    return Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: classes,
      isPrimary: isRecommended,
      isSecondary: !isRecommended,
      isBusy: isBusy,
      disabled: isBusy,
      onClick: function onClick() {
        return handleClick();
      }
    }, setupButtonText));
  }

  if (!isConfigured) {
    return Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: classes,
      isPrimary: isRecommended,
      isSecondary: !isRecommended,
      isBusy: isBusy,
      disabled: isBusy,
      onClick: function onClick() {
        return handleClick();
      }
    }, Object(external_wp_i18n_["__"])('Finish setup', 'woocommerce-admin')));
  }

  return Object(external_wp_element_["createElement"])(ManageButton, null);
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/wcpay-logo.js

/* harmony default export */ var wcpay_logo = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "196",
    height: "41",
    viewBox: "0 0 196 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("title", null, "WooCommerce Payments"), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.16119 0H60.1988C63.6186 0 66.387 2.74594 66.387 6.13799V26.598C66.387 29.99 63.6186 32.736 60.1988 32.736H40.8202L43.48 39.197L31.7823 32.736H6.18833C2.76858 32.736 0.000197874 29.99 0.000197874 26.598V6.13799C-0.0269431 2.77286 2.74143 0 6.16119 0Z",
    fill: "#7F54B3"
  }), Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.88666 5.40393C4.26664 4.89243 4.8366 4.62322 5.59655 4.56938C6.98073 4.46169 7.76782 5.1078 7.95781 6.50769C8.79918 12.1342 9.72197 16.8992 10.699 20.8028L16.6429 9.57669C17.1857 8.55369 17.8643 8.01527 18.6785 7.96143C19.8727 7.88066 20.6055 8.63445 20.904 10.2228C21.5826 13.8033 22.4511 16.8454 23.4824 19.4298C24.1881 12.5918 25.3823 7.6653 27.065 4.62322C27.4722 3.86943 28.0692 3.49254 28.8563 3.4387C29.4806 3.38486 30.0505 3.5733 30.5662 3.97712C31.0819 4.38093 31.3533 4.89243 31.4076 5.51161C31.4347 5.99619 31.3533 6.40001 31.1362 6.80383C30.0777 8.74214 29.2092 11.9996 28.5035 16.5223C27.825 20.9104 27.5807 24.3294 27.7436 26.7792C27.7978 27.4522 27.6893 28.0445 27.4179 28.556C27.0922 29.1483 26.6036 29.4713 25.9794 29.5252C25.2737 29.579 24.5409 29.256 23.8353 28.5291C21.3112 25.9716 19.3027 22.1488 17.8371 17.0607C16.073 20.5066 14.7702 23.091 13.9288 24.814C12.3275 27.8561 10.9705 29.4175 9.83053 29.4982C9.09773 29.5521 8.47349 28.9329 7.93067 27.6407C6.54648 24.114 5.05373 17.303 3.45241 7.20764C3.37099 6.5077 3.50669 5.88851 3.88666 5.40393ZM62.24 9.6307C61.263 7.93467 59.8245 6.91167 57.8975 6.50786C57.3818 6.40017 56.8933 6.34633 56.4319 6.34633C53.8263 6.34633 51.7094 7.69238 50.0537 10.3845C48.6424 12.6728 47.9368 15.2033 47.9368 17.9762C47.9368 20.0491 48.371 21.8259 49.2395 23.3066C50.2166 25.0026 51.6551 26.0256 53.5821 26.4294C54.0978 26.5371 54.5863 26.5909 55.0477 26.5909C57.6804 26.5909 59.7974 25.2449 61.4258 22.5528C62.8371 20.2376 63.5428 17.707 63.5428 14.9341C63.5428 12.8343 63.1086 11.0844 62.24 9.6307ZM58.8203 17.0878C58.4403 18.8646 57.7618 20.1837 56.7576 21.0721C55.9705 21.7721 55.2377 22.0682 54.5592 21.9336C53.9078 21.799 53.365 21.2337 52.9578 20.1837C52.6321 19.3492 52.4693 18.5146 52.4693 17.7339C52.4693 17.0609 52.5236 16.3879 52.6593 15.7687C52.9036 14.6649 53.365 13.5881 54.0978 12.5651C54.9934 11.246 55.9433 10.7075 56.9204 10.896C57.5718 11.0306 58.1146 11.5959 58.5217 12.6458C58.8474 13.4804 59.0103 14.315 59.0103 15.0957C59.0103 15.7956 58.9288 16.4686 58.8203 17.0878ZM40.8794 6.50786C42.7793 6.91167 44.2449 7.93467 45.222 9.6307C46.0905 11.0844 46.5247 12.8343 46.5247 14.9341C46.5247 17.707 45.8191 20.2376 44.4077 22.5528C42.7793 25.2449 40.6623 26.5909 38.0296 26.5909C37.5682 26.5909 37.0797 26.5371 36.564 26.4294C34.637 26.0256 33.1985 25.0026 32.2214 23.3066C31.3529 21.8259 30.9187 20.0491 30.9187 17.9762C30.9187 15.2033 31.6243 12.6728 33.0357 10.3845C34.6913 7.69238 36.8083 6.34633 39.4138 6.34633C39.8752 6.34633 40.3637 6.40017 40.8794 6.50786ZM39.7395 21.0721C40.7437 20.1837 41.4222 18.8646 41.8022 17.0878C41.9379 16.4686 41.9922 15.7956 41.9922 15.0957C41.9922 14.315 41.8293 13.4804 41.5036 12.6458C41.0965 11.5959 40.5537 11.0306 39.9023 10.896C38.9253 10.7075 37.9753 11.246 37.0797 12.5651C36.3469 13.5881 35.8855 14.6649 35.6412 15.7687C35.5055 16.3879 35.4512 17.0609 35.4512 17.7339C35.4512 18.5146 35.6141 19.3492 35.9398 20.1837C36.3469 21.2337 36.8897 21.799 37.5411 21.9336C38.2196 22.0682 38.9524 21.7721 39.7395 21.0721Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M143.023 29.9316V38.217H144.057V35.26H146.141C147.697 35.26 148.805 34.1633 148.805 32.613C148.805 31.0341 147.72 29.9316 146.153 29.9316H143.023ZM144.057 30.8503H145.883C147.083 30.8503 147.743 31.4762 147.743 32.613C147.743 33.7097 147.06 34.3413 145.883 34.3413H144.057V30.8503Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M151.866 38.3261C152.693 38.3261 153.37 37.9643 153.772 37.304H153.864V38.217H154.806V33.9796C154.806 32.6934 153.961 31.9183 152.451 31.9183C151.131 31.9183 150.155 32.5728 150.023 33.5662H151.022C151.159 33.0781 151.676 32.7968 152.417 32.7968C153.341 32.7968 153.818 33.2159 153.818 33.9796V34.5423L152.032 34.6514C150.591 34.7375 149.776 35.3748 149.776 36.483C149.776 37.6141 150.666 38.3261 151.866 38.3261ZM152.049 37.4591C151.332 37.4591 150.798 37.0916 150.798 36.46C150.798 35.8399 151.211 35.5126 152.153 35.4495L153.818 35.3404V35.9088C153.818 36.793 153.066 37.4591 152.049 37.4591Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M156.93 40.4563C158.027 40.4563 158.52 40.0314 159.049 38.5959L161.466 32.0274H160.415L158.721 37.1203H158.63L156.93 32.0274H155.862L158.153 38.2227L158.038 38.5902C157.78 39.3366 157.47 39.6065 156.901 39.6065C156.763 39.6065 156.608 39.6007 156.488 39.5778V40.4218C156.626 40.4448 156.798 40.4563 156.93 40.4563Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M162.787 38.217H163.774V34.3815C163.774 33.5087 164.4 32.8083 165.21 32.8083C165.99 32.8083 166.501 33.2791 166.501 34.014V38.217H167.489V34.238C167.489 33.4513 168.063 32.8083 168.924 32.8083C169.797 32.8083 170.228 33.2561 170.228 34.1691V38.217H171.215V33.9394C171.215 32.6417 170.509 31.9183 169.246 31.9183C168.39 31.9183 167.684 32.3489 167.351 33.0035H167.259C166.972 32.3604 166.387 31.9183 165.548 31.9183C164.722 31.9183 164.101 32.3145 163.82 33.0035H163.728V32.0274H162.787V38.217Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M177.118 36.615C176.86 37.1605 176.32 37.4533 175.522 37.4533C174.471 37.4533 173.788 36.6782 173.736 35.4552V35.4093H178.186V35.0303C178.186 33.1068 177.17 31.9183 175.499 31.9183C173.799 31.9183 172.708 33.1815 172.708 35.1279C172.708 37.0859 173.782 38.3261 175.499 38.3261C176.854 38.3261 177.818 37.6715 178.106 36.615H177.118ZM175.487 32.791C176.469 32.791 177.124 33.5145 177.147 34.6112H173.736C173.811 33.5145 174.5 32.791 175.487 32.791Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M179.736 38.217H180.724V34.5537C180.724 33.4686 181.361 32.8083 182.349 32.8083C183.336 32.8083 183.807 33.3365 183.807 34.4504V38.217H184.795V34.2092C184.795 32.7394 184.02 31.9183 182.63 31.9183C181.683 31.9183 181.08 32.3202 180.77 33.0035H180.678V32.0274H179.736V38.217Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M187.017 30.4254V32.0274H186.018V32.8542H187.017V36.6093C187.017 37.7921 187.528 38.2629 188.802 38.2629C188.998 38.2629 189.187 38.24 189.382 38.2055V37.3729C189.199 37.3902 189.101 37.3959 188.923 37.3959C188.28 37.3959 188.004 37.0859 188.004 36.3567V32.8542H189.382V32.0274H188.004V30.4254H187.017Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M190.617 33.7212C190.617 34.6169 191.145 35.1164 192.305 35.3978L193.367 35.6562C194.027 35.8169 194.349 36.104 194.349 36.5289C194.349 37.0973 193.752 37.4935 192.919 37.4935C192.127 37.4935 191.633 37.1605 191.467 36.638H190.45C190.559 37.6658 191.507 38.3261 192.885 38.3261C194.292 38.3261 195.365 37.5624 195.365 36.4543C195.365 35.5643 194.803 35.059 193.637 34.7777L192.684 34.548C191.955 34.37 191.61 34.1059 191.61 33.681C191.61 33.1298 192.184 32.7566 192.919 32.7566C193.666 32.7566 194.148 33.0839 194.28 33.5777H195.256C195.124 32.5614 194.223 31.9183 192.925 31.9183C191.61 31.9183 190.617 32.6934 190.617 33.7212Z",
    fill: "black"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M73.2688 9.52456C71.4503 11.3014 70.5547 13.5627 70.5547 16.3087C70.5547 19.2431 71.4503 21.639 73.2416 23.4427C75.0329 25.2464 77.3671 26.1618 80.2711 26.1618C81.1125 26.1618 82.0625 26.0272 83.0938 25.731V21.3698C82.1439 21.639 81.3296 21.7736 80.624 21.7736C79.1855 21.7736 78.0456 21.289 77.1771 20.3468C76.3086 19.3777 75.8743 18.0854 75.8743 16.4433C75.8743 14.9088 76.3086 13.6435 77.1499 12.6743C78.0185 11.6782 79.0769 11.1937 80.3797 11.1937C81.2211 11.1937 82.1167 11.3283 83.0938 11.5975V7.23628C82.1982 6.99399 81.1939 6.8863 80.1354 6.8863C77.3671 6.85938 75.0872 7.74778 73.2688 9.52456ZM92.1046 6.85938C89.6076 6.85938 87.6535 7.69393 86.2422 9.33611C84.8308 10.9783 84.1523 13.2935 84.1523 16.2548C84.1523 19.4584 84.858 21.9082 86.2422 23.6043C87.6263 25.3003 89.6619 26.1618 92.3217 26.1618C94.9001 26.1618 96.8814 25.3003 98.2656 23.6043C99.6498 21.9082 100.355 19.5123 100.355 16.4433C100.355 13.3743 99.6498 11.0052 98.2384 9.33611C96.8 7.69393 94.7644 6.85938 92.1046 6.85938ZM94.2487 20.8583C93.7602 21.6121 93.0274 21.989 92.1046 21.989C91.2361 21.989 90.5847 21.6121 90.1233 20.8583C89.6619 20.1045 89.4448 18.5969 89.4448 16.3087C89.4448 12.782 90.3404 11.0321 92.1589 11.0321C94.0587 11.0321 95.0358 12.8089 95.0358 16.3894C95.0087 18.597 94.7373 20.1045 94.2487 20.8583ZM113.763 7.37088L112.786 11.4898C112.542 12.5397 112.297 13.6166 112.08 14.7203L111.538 17.5739C111.022 14.7203 110.316 11.3283 109.421 7.37088H103.124L100.763 25.7041H105.485L106.761 13.0781L109.99 25.7041H113.356L116.45 13.1051L117.78 25.7041H122.72L120.223 7.37088H113.763ZM136.371 7.37088L135.394 11.4898C135.15 12.5397 134.906 13.6166 134.689 14.7203L134.146 17.5739C133.63 14.7203 132.925 11.3283 132.029 7.37088H125.732L123.371 25.7041H128.093L129.369 13.0781L132.599 25.7041H135.964L139.031 13.1051L140.361 25.7041H145.301L142.804 7.37088H136.371ZM151.733 18.4623H156.157V14.6665H151.733V11.3013H156.836V7.3978H146.739V25.731H156.863V21.8275H151.733V18.4623ZM170.922 15.5549C171.438 14.7203 171.709 13.8588 171.709 12.9705C171.709 11.2475 171.03 9.87453 169.673 8.87845C168.316 7.88237 166.444 7.37088 164.11 7.37088H158.301V25.7041H163.295V17.3586H163.377L167.421 25.7041H172.686L168.696 17.4393C169.646 17.0086 170.406 16.3894 170.922 15.5549ZM163.268 15.2587V10.8975C164.462 10.9245 165.304 11.1129 165.819 11.4898C166.335 11.8667 166.579 12.4589 166.579 13.3204C166.579 14.5857 165.467 15.2318 163.268 15.2587ZM174.64 9.52456C172.822 11.3014 171.926 13.5627 171.926 16.3087C171.926 19.2431 172.822 21.639 174.613 23.4427C176.404 25.2464 178.738 26.1618 181.643 26.1618C182.484 26.1618 183.434 26.0272 184.465 25.731V21.3698C183.515 21.639 182.701 21.7736 181.995 21.7736C180.557 21.7736 179.417 21.289 178.548 20.3468C177.68 19.3777 177.246 18.0854 177.246 16.4433C177.246 14.9088 177.68 13.6435 178.521 12.6743C179.39 11.6782 180.448 11.1937 181.751 11.1937C182.592 11.1937 183.488 11.3283 184.465 11.5975V7.23628C183.57 6.99399 182.565 6.8863 181.507 6.8863C178.766 6.85938 176.459 7.74778 174.64 9.52456ZM190.843 21.7736V18.4354H195.267V14.6396H190.843V11.2744H195.973V7.37088H185.877V25.7041H196V21.8005H190.843V21.7736Z",
    fill: "black"
  }));
});
// EXTERNAL MODULE: ./client/task-list/tasks/payments/components/WCPayCard/WCPayCard.scss
var WCPayCard_WCPayCard = __webpack_require__(734);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/WCPayCard/WCPayCard.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */







var WCPayCard_TosPrompt = function TosPrompt() {
  return lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Upon clicking "Get started", you agree to the {{link}}Terms of service{{/link}}. Next we’ll ask you to share a few details about your business to create your account.', 'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'https://wordpress.com/tos/',
        target: "_blank",
        type: "external"
      })
    }
  });
};

var WCPayCard_WCPayCard_WCPayCard = function WCPayCard(props) {
  var _props$method = props.method,
      methodKey = _props$method.key,
      isConfigured = _props$method.isConfigured,
      container = _props$method.container,
      isEnabled = _props$method.isEnabled,
      loading = _props$method.loading,
      onClick = _props$method.onClick;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-payment-wcpay"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, Object(external_wp_element_["createElement"])(wcpay_logo, null), !isEnabled && Object(external_wp_element_["createElement"])("span", {
    className: "woocommerce-task-payment__recommended-pill"
  }, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin')), isEnabled && Object(external_wp_element_["createElement"])(SetupRequired_SetupRequired, null)), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    className: "woocommerce-task-payment-wcpay__description"
  }, Object(external_wp_i18n_["__"])('Try the new way to get paid. Securely accept credit and debit cards on your site. Manage transactions without leaving your WordPress dashboard. Only with WooCommerce Payments. ', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    target: "_blank",
    type: "external",
    rel: "noreferrer",
    href: "https://woocommerce.com/payments/",
    onClick: function onClick() {
      return Object(external_wc_tracks_["recordEvent"])('tasklist_payment_learn_more');
    }
  }, Object(external_wp_i18n_["__"])('Learn more', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(WCPayAcceptedMethods_WCPayAcceptedMethods, null)), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], null, Object(external_wp_element_["createElement"])(WCPayCard_TosPrompt, null)), Object(external_wp_element_["createElement"])(PaymentAction_PaymentAction, {
    methodKey: methodKey,
    hasSetup: !!container,
    isConfigured: isConfigured,
    isEnabled: isEnabled,
    isRecommended: true,
    isLoading: loading,
    onSetup: function onSetup() {},
    onSetupCallback: onClick,
    setupButtonText: Object(external_wp_i18n_["__"])('Get started', 'woocommerce-admin')
  })));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/WCPayCard/index.js

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/RecommendedRibbon.js



/**
 * External dependencies
 */

var localPartners = ['mercadopago'];
var RecommendedRibbon_RecommendedRibbon = function RecommendedRibbon(_ref) {
  var methodKey = _ref.methodKey,
      _ref$isPill = _ref.isPill,
      isPill = _ref$isPill === void 0 ? false : _ref$isPill;
  var classes = isPill ? 'woocommerce-task-payment__recommended-pill' : 'woocommerce-task-payment__recommended-ribbon';
  var text = localPartners.includes(methodKey) ? Object(external_wp_i18n_["__"])('Local Partner', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin');
  return Object(external_wp_element_["createElement"])("div", {
    className: classes
  }, Object(external_wp_element_["createElement"])("span", null, text));
};
// EXTERNAL MODULE: ./client/task-list/tasks/payments/components/PaymentMethodList/PaymentMethodList.scss
var PaymentMethodList_PaymentMethodList = __webpack_require__(735);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/PaymentMethodList/PaymentMethodList.js



/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





var PaymentMethodList_PaymentMethodList_PaymentMethodList = function PaymentMethodList(_ref) {
  var recommendedMethod = _ref.recommendedMethod,
      heading = _ref.heading,
      methods = _ref.methods,
      markConfigured = _ref.markConfigured;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, heading), methods.map(function (method, index) {
    var before = method.before,
        content = method.content,
        isEnabled = method.isEnabled,
        isConfigured = method.isConfigured,
        key = method.key,
        title = method.title,
        visible = method.visible,
        loading = method.loading,
        manageUrl = method.manageUrl;

    if (!visible) {
      return null;
    }

    var classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card', !isConfigured && 'woocommerce-task-payment-not-configured', 'woocommerce-task-payment-' + key);
    var isRecommended = key === recommendedMethod && !isConfigured;
    var showRecommendedRibbon = isRecommended;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
      key: key
    }, index !== 0 && Object(external_wp_element_["createElement"])(external_wp_components_["CardDivider"], null), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
      style: {
        paddingLeft: 0,
        marginBottom: 0
      },
      className: classes
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardMedia"], {
      isBorderless: true
    }, before), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-payment__description"
    }, showRecommendedRibbon && Object(external_wp_element_["createElement"])(RecommendedRibbon_RecommendedRibbon, null), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
      as: "h3",
      className: "woocommerce-task-payment__title"
    }, title, isEnabled && !isConfigured && Object(external_wp_element_["createElement"])(SetupRequired_SetupRequired, null)), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-payment__content"
    }, content)), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-payment__footer"
    }, Object(external_wp_element_["createElement"])(PaymentAction_PaymentAction, {
      manageUrl: manageUrl,
      methodKey: key,
      hasSetup: !!method.container,
      isConfigured: isConfigured,
      isEnabled: method.isEnabled,
      isRecommended: isRecommended,
      isLoading: loading,
      markConfigured: markConfigured,
      onSetup: function onSetup() {
        return Object(external_wc_tracks_["recordEvent"])('tasklist_payment_setup', {
          options: methods.map(function (option) {
            return option.key;
          }),
          selected: key
        });
      },
      onSetupCallback: method.onClick
    }))));
  }));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/PaymentMethodList/index.js

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/index.js + 17 modules
var payments_methods = __webpack_require__(681);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/components/PaymentSetup.js







/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


var PaymentSetup_PaymentSetup = function PaymentSetup(_ref) {
  var method = _ref.method,
      markConfigured = _ref.markConfigured,
      query = _ref.query,
      recordConnectStartEvent = _ref.recordConnectStartEvent;
  Object(external_wp_element_["useEffect"])(function () {
    Object(external_wc_tracks_["recordEvent"])('payments_task_stepper_view', {
      payment_method: method.key
    });
  }, []);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["PLUGINS_STORE_NAME"]),
        getActivePlugins = _select.getActivePlugins;

    return {
      activePlugins: getActivePlugins()
    };
  }),
      activePlugins = _useSelect.activePlugins;

  var installStep = Object(external_wp_element_["useMemo"])(function () {
    if (!method.plugins || !method.plugins.length) {
      return;
    }

    var pluginsToInstall = method.plugins.filter(function (m) {
      return !activePlugins.includes(m);
    });
    var pluginNamesString = method.plugins.map(function (pluginSlug) {
      return external_wc_data_["pluginNames"][pluginSlug];
    }).join(' ' + Object(external_wp_i18n_["__"])('and', 'woocommerce-admin') + ' ');
    return {
      key: 'install',
      label: Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = one or more plugin names joined by "and" */
      Object(external_wp_i18n_["__"])('Install %s', 'woocommerce-admin'), pluginNamesString),
      content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
        onComplete: function onComplete(plugins, response) {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          Object(external_wc_tracks_["recordEvent"])('tasklist_payment_install_method', {
            plugins: method.plugins
          });
        },
        onError: function onError(errors, response) {
          return Object(notices["a" /* createNoticesFromResponse */])(response);
        },
        autoInstall: true,
        pluginSlugs: method.plugins
      }),
      isComplete: !pluginsToInstall.length
    };
  }, [activePlugins, method.plugins]);

  if (!method.container) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-payment-method woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["cloneElement"])(method.container, {
    methodConfig: method,
    query: query,
    installStep: installStep,
    markConfigured: markConfigured,
    recordConnectStartEvent: recordConnectStartEvent,
    hasCbdIndustry: method.hasCbdIndustry
  })));
};
// EXTERNAL MODULE: ./client/utils/index.js
var client_utils = __webpack_require__(678);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/index.js

















function payments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function payments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { payments_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { payments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */







var setMethodEnabledOption = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(optionName, value, _ref) {
    var clearTaskStatusCache, updateOptions, options, methodOptions;
    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            clearTaskStatusCache = _ref.clearTaskStatusCache, updateOptions = _ref.updateOptions, options = _ref.options;
            methodOptions = options[optionName]; // Don't update the option if it already has the same value.

            if (!(methodOptions.enabled !== value)) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return updateOptions(defineProperty_default()({}, optionName, payments_objectSpread(payments_objectSpread({}, methodOptions), {}, {
              enabled: value
            })));

          case 5:
            clearTaskStatusCache();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setMethodEnabledOption(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var payments_Payments = function Payments(_ref3) {
  var query = _ref3.query;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/notices'),
      createNotice = _useDispatch.createNotice;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _useDispatch2.installAndActivatePlugins,
      invalidatePluginStoreSelector = _useDispatch2.invalidateResolutionForStoreSelector;

  var _useDispatch3 = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _useDispatch3.updateOptions;

  var _useDispatch4 = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolution = _useDispatch4.invalidateResolution,
      invalidateResolutionForStoreSelector = _useDispatch4.invalidateResolutionForStoreSelector;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
        getProfileItems = _select.getProfileItems;

    var _select2 = select(external_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select2.getOption;

    var _select3 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
        getActivePlugins = _select3.getActivePlugins,
        isJetpackConnected = _select3.isJetpackConnected,
        getPaypalOnboardingStatus = _select3.getPaypalOnboardingStatus,
        hasFinishedResolution = _select3.hasFinishedResolution;

    var _select4 = select(external_wc_data_["SETTINGS_STORE_NAME"]),
        getSettings = _select4.getSettings;

    var _getSettings = getSettings('general'),
        _getSettings$general = _getSettings.general,
        generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

    var _select5 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
        getTasksStatus = _select5.getTasksStatus;

    var activePlugins = getActivePlugins();
    var onboardingStatus = getTasksStatus();
    var profileItems = getProfileItems();
    var optionNames = ['woocommerce_woocommerce_payments_settings', 'woocommerce_stripe_settings', 'woocommerce-ppcp-settings', 'woocommerce_ppcp-gateway_settings', 'woocommerce_payfast_settings', 'woocommerce_square_credit_card_settings', 'woocommerce_klarna_payments_settings', 'woocommerce_kco_settings', 'wc_square_refresh_tokens', 'woocommerce_cod_settings', 'woocommerce_bacs_settings', 'woocommerce_bacs_accounts', 'woocommerce_eway_settings', 'woocommerce_razorpay_settings', 'woocommerce_mollie_payments_settings', 'woocommerce_payubiz_settings', 'woocommerce_paystack_settings', 'woocommerce_woo-mercado-pago-basic_settings'];
    var retrievedOptions = optionNames.reduce(function (result, name) {
      result[name] = getOption(name);
      return result;
    }, {});
    var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
    var paypalOnboardingStatus = activePlugins.includes('woocommerce-paypal-payments') ? getPaypalOnboardingStatus() : null;
    return {
      methods: Object(payments_methods["a" /* getPaymentMethods */])({
        activePlugins: activePlugins,
        countryCode: countryCode,
        createNotice: createNotice,
        installAndActivatePlugins: installAndActivatePlugins,
        isJetpackConnected: isJetpackConnected(),
        onboardingStatus: onboardingStatus,
        options: retrievedOptions,
        profileItems: profileItems,
        paypalOnboardingStatus: paypalOnboardingStatus,
        loadingPaypalStatus: !hasFinishedResolution('getPaypalOnboardingStatus') && !paypalOnboardingStatus
      }),
      options: retrievedOptions
    };
  }),
      methods = _useSelect.methods,
      options = _useSelect.options;

  var recommendedMethod = Object(external_wp_element_["useMemo"])(function () {
    var method = methods.find(function (m) {
      return m.key === 'wcpay' && m.visible || m.key === 'mercadopago' && m.visible;
    });

    if (!method) {
      return 'stripe';
    }

    return method.key;
  }, [methods]);

  var markConfigured = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2(methodKey) {
      var queryParams,
          method,
          clearTaskStatusCache,
          _args2 = arguments;
      return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queryParams = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              method = methods.find(function (option) {
                return option.key === methodKey;
              });

              if (method) {
                _context2.next = 4;
                break;
              }

              throw "Method ".concat(methodKey, " not found in available methods list");

            case 4:
              setEnabledMethods(payments_objectSpread(payments_objectSpread({}, enabledMethods), {}, defineProperty_default()({}, methodKey, true)));

              clearTaskStatusCache = function clearTaskStatusCache() {
                invalidateResolution('getProfileItems', []);
                invalidateResolution('getTasksStatus', []);
                invalidateResolutionForStoreSelector('getTasksStatus');
                invalidatePluginStoreSelector('getPaypalOnboardingStatus');
              };

              _context2.next = 8;
              return setMethodEnabledOption(method.optionName, 'yes', {
                clearTaskStatusCache: clearTaskStatusCache,
                updateOptions: updateOptions,
                options: options
              });

            case 8:
              Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_method', {
                payment_method: methodKey
              });
              Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])(payments_objectSpread(payments_objectSpread({}, queryParams), {}, {
                task: 'payments'
              }), '/', {}));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function markConfigured(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var recordConnectStartEvent = function recordConnectStartEvent(methodName) {
    Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_start', {
      payment_method: methodName
    });
  };

  var currentMethod = Object(external_wp_element_["useMemo"])(function () {
    if (!query.method) {
      return null;
    }

    var method = methods.find(function (m) {
      return m.key === query.method;
    });

    if (!method) {
      throw "Current method ".concat(query.method, " not found in available methods list");
    }

    return method;
  }, [query]);

  var _useState = Object(external_wp_element_["useState"])(methods.reduce(function (acc, method) {
    acc[method.key] = method.isEnabled;
    return acc;
  }, {})),
      _useState2 = slicedToArray_default()(_useState, 2),
      enabledMethods = _useState2[0],
      setEnabledMethods = _useState2[1];

  if (currentMethod) {
    return Object(external_wp_element_["createElement"])(PaymentSetup_PaymentSetup, {
      method: currentMethod,
      markConfigured: markConfigured,
      recordConnectStartEvent: recordConnectStartEvent
    });
  }

  var _sift = Object(client_utils["b" /* sift */])(methods, function (method) {
    return method.isEnabled && method.isConfigured;
  }),
      _sift2 = slicedToArray_default()(_sift, 2),
      enabledCardMethods = _sift2[0],
      additionalCardMethods = _sift2[1];

  var wcPayIndex = additionalCardMethods.findIndex(function (m) {
    return m.key === 'wcpay';
  });
  var wcPayMethod = wcPayIndex === -1 ? null : additionalCardMethods.splice(wcPayIndex, 1);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payments"
  }, !!wcPayMethod && Object(external_wp_element_["createElement"])(WCPayCard_WCPayCard_WCPayCard, {
    method: wcPayMethod[0]
  }), !!enabledCardMethods.length && Object(external_wp_element_["createElement"])(PaymentMethodList_PaymentMethodList_PaymentMethodList, {
    recommendedMethod: recommendedMethod,
    heading: Object(external_wp_i18n_["__"])('Enabled payment methods', 'wc-admin'),
    methods: enabledCardMethods
  }), !!additionalCardMethods.length && Object(external_wp_element_["createElement"])(PaymentMethodList_PaymentMethodList_PaymentMethodList, {
    recommendedMethod: recommendedMethod,
    heading: Object(external_wp_i18n_["__"])('Additional payment methods', 'wc-admin'),
    methods: additionalCardMethods,
    markConfigured: markConfigured
  }));
};
/* harmony default export */ var payments = (payments_Payments);
// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js + 3 modules
var wcpay = __webpack_require__(652);

// EXTERNAL MODULE: ./client/lib/collections/index.js
var collections = __webpack_require__(661);

// EXTERNAL MODULE: ./client/store-management-links/index.js + 2 modules
var store_management_links = __webpack_require__(682);

// CONCATENATED MODULE: ./client/task-list/tasks.js











function tasks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tasks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tasks_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tasks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/**
 * External dependencies
 */





/**
 * Internal dependencies
 */










function recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins) {
  Object(external_wc_tracks_["recordEvent"])('task_view', {
    task_name: taskName,
    wcs_installed: installedPlugins.includes('woocommerce-services'),
    wcs_active: activePlugins.includes('woocommerce-services'),
    jetpack_installed: installedPlugins.includes('jetpack'),
    jetpack_active: activePlugins.includes('jetpack'),
    jetpack_connected: isJetpackConnected
  });
}
function tasks_getAllTasks(_ref) {
  var activePlugins = _ref.activePlugins,
      countryCode = _ref.countryCode,
      createNotice = _ref.createNotice,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      installedPlugins = _ref.installedPlugins,
      isJetpackConnected = _ref.isJetpackConnected,
      onboardingStatus = _ref.onboardingStatus,
      profileItems = _ref.profileItems,
      query = _ref.query,
      toggleCartModal = _ref.toggleCartModal,
      onTaskSelect = _ref.onTaskSelect;

  var _hasPaymentGateway$ha = tasks_objectSpread({
    hasPaymentGateway: false,
    hasPhysicalProducts: false,
    hasProducts: false,
    isAppearanceComplete: false,
    isTaxComplete: false,
    shippingZonesCount: 0,
    wcPayIsConnected: false
  }, onboardingStatus),
      hasPaymentGateway = _hasPaymentGateway$ha.hasPaymentGateway,
      hasPhysicalProducts = _hasPaymentGateway$ha.hasPhysicalProducts,
      hasProducts = _hasPaymentGateway$ha.hasProducts,
      isAppearanceComplete = _hasPaymentGateway$ha.isAppearanceComplete,
      isTaxComplete = _hasPaymentGateway$ha.isTaxComplete,
      shippingZonesCount = _hasPaymentGateway$ha.shippingZonesCount,
      wcPayIsConnected = _hasPaymentGateway$ha.wcPayIsConnected;

  var groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(profileItems, installedPlugins);
  var products = groupedProducts.products,
      remainingProducts = groupedProducts.remainingProducts,
      uniqueItemsList = groupedProducts.uniqueItemsList;
  var woocommercePaymentsInstalled = installedPlugins.indexOf('woocommerce-payments') !== -1;
  var profilerCompleted = profileItems.completed,
      productTypes = profileItems.product_types,
      businessExtensions = profileItems.business_extensions;
  var woocommercePaymentsSelectedInProfiler = (businessExtensions || []).includes('woocommerce-payments');

  var purchaseAndInstallText = Object(external_wp_i18n_["__"])('Add paid extensions to your store', 'woocommerce-admin');

  if (uniqueItemsList.length === 1) {
    var itemName = uniqueItemsList[0].name;

    var purchaseAndInstallFormat = Object(external_wp_i18n_["__"])('Add %s to your store', 'woocommerce-admin');

    purchaseAndInstallText = Object(external_wp_i18n_["sprintf"])(purchaseAndInstallFormat, itemName);
  }

  var tasks = [{
    key: 'store_details',
    title: Object(external_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
    container: null,
    onClick: function onClick() {
      onTaskSelect('store_details');
      Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
    },
    completed: profilerCompleted,
    visible: true,
    time: Object(external_wp_i18n_["__"])('4 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'purchase',
    title: purchaseAndInstallText,
    container: null,
    onClick: function onClick() {
      onTaskSelect('purchase');
      return remainingProducts.length ? toggleCartModal() : null;
    },
    visible: products.length,
    completed: products.length && !remainingProducts.length,
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    isDismissable: true,
    type: 'setup'
  }, {
    key: 'products',
    title: Object(external_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(Products, null),
    onClick: function onClick() {
      onTaskSelect('products');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'products'
      });
    },
    completed: hasProducts,
    visible: true,
    time: Object(external_wp_i18n_["__"])('1 minute per product', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'woocommerce-payments',
    title: Object(external_wp_i18n_["__"])('Get paid with WooCommerce Payments', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null),
    completed: wcPayIsConnected,
    onClick: function () {
      var _onClick = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(e) {
        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.target.nodeName === 'A')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                _context.next = 4;
                return new Promise(function (resolve, reject) {
                  // This task doesn't have a view, so the recordEvent call
                  // in TaskDashboard.recordTaskView() is never called. So
                  // record it here.
                  recordTaskViewEvent('wcpay', isJetpackConnected, activePlugins, installedPlugins);
                  onTaskSelect('woocommerce-payments');
                  return Object(wcpay["c" /* installActivateAndConnectWcpay */])(reject, createNotice, installAndActivatePlugins);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onClick(_x) {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }(),
    visible: window.wcAdminFeatures.wcpay && woocommercePaymentsSelectedInProfiler && woocommercePaymentsInstalled && Object(wcpay["d" /* isWCPaySupported */])(countryCode),
    additionalInfo: Object(external_wp_i18n_["__"])('By setting up, you are agreeing to the <a href="https://wordpress.com/tos/" target="_blank">Terms of Service</a>', 'woocommerce-admin'),
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'payments',
    title: Object(external_wp_i18n_["__"])('Choose payment methods', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(payments, null),
    completed: hasPaymentGateway,
    onClick: function onClick() {
      onTaskSelect('payments');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'payments'
      });
    },
    visible: !woocommercePaymentsInstalled || !woocommercePaymentsSelectedInProfiler || !Object(wcpay["d" /* isWCPaySupported */])(countryCode),
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'tax',
    title: Object(external_wp_i18n_["__"])('Add tax rates', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(tax, null),
    onClick: function onClick() {
      onTaskSelect('tax');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'tax'
      });
    },
    completed: isTaxComplete,
    visible: true,
    time: Object(external_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'shipping',
    title: Object(external_wp_i18n_["__"])('Set up shipping costs', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(shipping, null),
    onClick: function onClick() {
      if (shippingZonesCount > 0) {
        window.location = Object(store_management_links["b" /* getLinkTypeAndHref */])({
          type: 'wc-settings',
          tab: 'shipping'
        }).href;
      } else {
        onTaskSelect('shipping');
        Object(external_wc_navigation_["updateQueryString"])({
          task: 'shipping'
        });
      }
    },
    completed: shippingZonesCount > 0,
    visible: productTypes && productTypes.includes('physical') || hasPhysicalProducts,
    time: Object(external_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'appearance',
    title: Object(external_wp_i18n_["__"])('Personalize your store', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(appearance, null),
    onClick: function onClick() {
      onTaskSelect('appearance');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'appearance'
      });
    },
    completed: isAppearanceComplete,
    visible: true,
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }];
  return Object(collections["a" /* groupListOfObjectsBy */])(Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_onboarding_task_list', tasks, query), 'type', 'extension');
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(442);

// CONCATENATED MODULE: ./client/task-list/list.js















function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function list_createSuper(Derived) { var hasNativeReflectConstruct = list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */












/**
 * Internal dependencies
 */




var list_TaskList = /*#__PURE__*/function (_Component) {
  inherits_default()(TaskList, _Component);

  var _super = list_createSuper(TaskList);

  function TaskList() {
    classCallCheck_default()(this, TaskList);

    return _super.apply(this, arguments);
  }

  createClass_default()(TaskList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.recordTaskView();
      this.recordTaskListView();
      this.possiblyCompleteTaskList();
      this.possiblyTrackCompletedTasks();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var query = this.props.query;
      var prevQuery = prevProps.query;
      var prevTask = prevQuery.task;
      var task = query.task;

      if (prevTask !== task) {
        window.document.documentElement.scrollTop = 0;
        this.recordTaskView();
      }

      this.possiblyCompleteTaskList();
      this.possiblyTrackCompletedTasks();
    }
  }, {
    key: "possiblyCompleteTaskList",
    value: function possiblyCompleteTaskList() {
      var _this$props = this.props,
          isComplete = _this$props.isComplete,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? 'task_list' : _this$props$name,
          updateOptions = _this$props.updateOptions;
      var taskListVariableName = "woocommerce_".concat(name, "_complete");
      var taskListToComplete = isComplete ? defineProperty_default()({}, taskListVariableName, 'no') : defineProperty_default()({}, taskListVariableName, 'yes');

      if (name === 'task_list') {
        taskListToComplete.woocommerce_default_homepage_layout = 'two_columns';
      }

      if (!this.getIncompleteTasks().length && !isComplete || this.getIncompleteTasks().length && isComplete) {
        updateOptions(list_objectSpread({}, taskListToComplete));
      }
    }
  }, {
    key: "getCompletedTaskKeys",
    value: function getCompletedTaskKeys() {
      return this.getVisibleTasks().filter(function (task) {
        return task.completed;
      }).map(function (task) {
        return task.key;
      });
    }
  }, {
    key: "getIncompleteTasks",
    value: function getIncompleteTasks() {
      var _this$props2 = this.props,
          dismissedTasks = _this$props2.dismissedTasks,
          tasks = _this$props2.tasks;
      return tasks.filter(function (task) {
        return task.visible && !task.completed && !dismissedTasks.includes(task.key);
      });
    }
  }, {
    key: "shouldUpdateCompletedTasks",
    value: function shouldUpdateCompletedTasks(tasks, untrackedTasks, completedTasks) {
      if (untrackedTasks.length > 0) {
        return true;
      }

      if (completedTasks.length === 0) {
        return false;
      }

      return !completedTasks.every(function (taskName) {
        return tasks.indexOf(taskName) >= 0;
      });
    }
  }, {
    key: "getTrackedCompletedTasks",
    value: function getTrackedCompletedTasks(completedTasks, trackedTasks) {
      if (!trackedTasks) {
        return [];
      }

      return completedTasks.filter(function (taskName) {
        return trackedTasks.includes(taskName);
      });
    }
  }, {
    key: "getTrackedIncompletedTasks",
    value: function getTrackedIncompletedTasks(partialCompletedTasks, allTrackedTask) {
      return this.getVisibleTasks().filter(function (task) {
        return allTrackedTask.includes(task.key) && !partialCompletedTasks.includes(task.key);
      }).map(function (task) {
        return task.key;
      });
    }
  }, {
    key: "getTasksForUpdate",
    value: function getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks) {
      var mergedLists = toConsumableArray_default()(new Set([].concat(toConsumableArray_default()(completedTaskKeys), toConsumableArray_default()(totalTrackedCompletedTasks))));

      return mergedLists.filter(function (taskName) {
        return !trackedIncompleteTasks.includes(taskName);
      });
    }
  }, {
    key: "possiblyTrackCompletedTasks",
    value: function possiblyTrackCompletedTasks() {
      var _this$props3 = this.props,
          totalTrackedCompletedTasks = _this$props3.trackedCompletedTasks,
          updateOptions = _this$props3.updateOptions;
      var completedTaskKeys = this.getCompletedTaskKeys();
      var trackedCompletedTasks = this.getTrackedCompletedTasks(completedTaskKeys, totalTrackedCompletedTasks);
      var trackedIncompleteTasks = this.getTrackedIncompletedTasks(trackedCompletedTasks, totalTrackedCompletedTasks);

      if (this.shouldUpdateCompletedTasks(trackedCompletedTasks, trackedIncompleteTasks, completedTaskKeys)) {
        updateOptions({
          woocommerce_task_list_tracked_completed_tasks: this.getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks)
        });
      }
    }
  }, {
    key: "dismissTask",
    value: function dismissTask(_ref3) {
      var _this = this;

      var key = _ref3.key,
          onDismiss = _ref3.onDismiss;
      var _this$props4 = this.props,
          createNotice = _this$props4.createNotice,
          dismissedTasks = _this$props4.dismissedTasks,
          updateOptions = _this$props4.updateOptions;
      createNotice('success', Object(external_wp_i18n_["__"])('Task dismissed'), {
        actions: [{
          label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
          onClick: function onClick() {
            return _this.undoDismissTask(key);
          }
        }]
      });
      Object(external_wc_tracks_["recordEvent"])('tasklist_dismiss_task', {
        task_name: key
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: [].concat(toConsumableArray_default()(dismissedTasks), [key])
      });

      if (onDismiss) {
        onDismiss();
      }
    }
  }, {
    key: "undoDismissTask",
    value: function undoDismissTask(key) {
      var _this$props5 = this.props,
          dismissedTasks = _this$props5.dismissedTasks,
          updateOptions = _this$props5.updateOptions;
      var updatedDismissedTasks = dismissedTasks.filter(function (task) {
        return task !== key;
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: updatedDismissedTasks
      });
    }
  }, {
    key: "getVisibleTasks",
    value: function getVisibleTasks() {
      var _this$props6 = this.props,
          dismissedTasks = _this$props6.dismissedTasks,
          tasks = _this$props6.tasks;
      return tasks.filter(function (task) {
        return task.visible && !dismissedTasks.includes(task.key);
      });
    }
  }, {
    key: "recordTaskView",
    value: function recordTaskView() {
      var _this$props7 = this.props,
          isJetpackConnected = _this$props7.isJetpackConnected,
          activePlugins = _this$props7.activePlugins,
          installedPlugins = _this$props7.installedPlugins,
          query = _this$props7.query;
      var taskName = query.task;

      if (!taskName) {
        return;
      }

      recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins);
    }
  }, {
    key: "recordTaskListView",
    value: function recordTaskListView() {
      if (this.getCurrentTask()) {
        return;
      }

      var _this$props8 = this.props,
          _this$props8$name = _this$props8.name,
          name = _this$props8$name === void 0 ? 'task_list' : _this$props8$name,
          profileItems = _this$props8.profileItems;
      var isCoreTaskList = name === 'task_list';
      var taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';
      var tasks = this.getVisibleTasks();
      Object(external_wc_tracks_["recordEvent"])("".concat(taskListName, "_view"), {
        number_tasks: tasks.length,
        store_connected: profileItems.wccom_connected
      });
    }
  }, {
    key: "hideTaskCard",
    value: function hideTaskCard(action) {
      var _this$props9 = this.props,
          _this$props9$name = _this$props9.name,
          name = _this$props9$name === void 0 ? 'task_list' : _this$props9$name,
          updateOptions = _this$props9.updateOptions;
      var isCoreTaskList = name === 'task_list';
      var taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';

      var updateOptionsParams = defineProperty_default()({}, "woocommerce_".concat(name, "_hidden"), 'yes');

      if (isCoreTaskList) {
        updateOptionsParams.woocommerce_task_list_prompt_shown = true;
        updateOptionsParams.woocommerce_default_homepage_layout = 'two_columns';
      }

      Object(external_wc_tracks_["recordEvent"])("".concat(taskListName, "_completed"), {
        action: action,
        completed_task_count: this.getCompletedTaskKeys().length,
        incomplete_task_count: this.getIncompleteTasks().length
      });
      updateOptions(list_objectSpread({}, updateOptionsParams));
    }
  }, {
    key: "getCurrentTask",
    value: function getCurrentTask() {
      var _this$props10 = this.props,
          query = _this$props10.query,
          tasks = _this$props10.tasks;
      var task = query.task;
      var currentTask = tasks.find(function (s) {
        return s.key === task;
      });

      if (!currentTask) {
        return null;
      }

      return currentTask;
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-card__menu woocommerce-card__header-item"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["EllipsisMenu"], {
        label: Object(external_wp_i18n_["__"])('Task List Options', 'woocommerce-admin'),
        renderContent: function renderContent() {
          return Object(external_wp_element_["createElement"])("div", {
            className: "woocommerce-task-card__section-controls"
          }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            onClick: function onClick() {
              return _this2.hideTaskCard('remove_card');
            }
          }, Object(external_wp_i18n_["__"])('Hide this', 'woocommerce-admin')));
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props11 = this.props,
          query = _this$props11.query,
          listTitle = _this$props11.title;
      var theTask = query.task;
      var currentTask = this.getCurrentTask();

      if (theTask && !currentTask) {
        return null;
      }

      var listTasks = this.getVisibleTasks().map(function (task) {
        task.className = classnames_default()(task.completed ? 'is-complete' : null, task.className);
        task.before = Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-task__icon"
        }, task.completed && Object(external_wp_element_["createElement"])(icon["a" /* default */], {
          icon: library_check
        }));
        task.title = Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
          as: "div",
          variant: task.completed ? 'body.small' : 'button'
        }, task.title, task.additionalInfo && Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-task__additional-info",
          dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(task.additionalInfo)
        }), task.time && !task.completed && Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-task__estimated-time"
        }, task.time));

        if (!task.completed && task.isDismissable) {
          task.after = Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            "data-testid": "".concat(task.key, "-dismiss-button"),
            isTertiary: true,
            onClick: function onClick(event) {
              event.stopPropagation();

              _this3.dismissTask(task);
            }
          }, Object(external_wp_i18n_["__"])('Dismiss', 'woocommerce-admin'));
        }

        if (!task.onClick) {
          task.onClick = function (e) {
            if (e.target.nodeName === 'A') {
              // This is a nested link, so don't activate this task.
              return false;
            }

            Object(external_wc_navigation_["updateQueryString"])({
              task: task.key
            });
          };
        }

        return task;
      });

      if (!listTasks.length) {
        return Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-task-dashboard__container"
        });
      }

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-dashboard__container"
      }, currentTask ? Object(external_wp_element_["cloneElement"])(currentTask.container, {
        query: query
      }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        size: "large",
        className: "woocommerce-task-card woocommerce-homescreen-card"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
        size: "medium"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "wooocommerce-task-card__header"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.small"
      }, listTitle), Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
        count: this.getIncompleteTasks().length
      })), this.renderMenu()), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
        items: listTasks
      }))))));
    }
  }]);

  return TaskList;
}(external_wp_element_["Component"]);
/* harmony default export */ var list = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getTasksStatus = _select.getTasksStatus;

  var _select2 = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      getInstalledPlugins = _select3.getInstalledPlugins,
      isJetpackConnected = _select3.isJetpackConnected;

  var profileItems = getProfileItems();

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var activePlugins = getActivePlugins();
  var installedPlugins = getInstalledPlugins();
  var onboardingStatus = getTasksStatus();
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    isJetpackConnected: isJetpackConnected(),
    installedPlugins: installedPlugins,
    onboardingStatus: onboardingStatus,
    profileItems: profileItems
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch3.installAndActivatePlugins;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateOptions: updateOptions
  };
}))(list_TaskList));
// EXTERNAL MODULE: ./client/header/activity-panel/display-options/index.js + 3 modules
var display_options = __webpack_require__(423);

// CONCATENATED MODULE: ./client/task-list/index.js


















function task_list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function task_list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { task_list_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { task_list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function task_list_createSuper(Derived) { var hasNativeReflectConstruct = task_list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function task_list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */







var task_list_TaskDashboard = /*#__PURE__*/function (_Component) {
  inherits_default()(TaskDashboard, _Component);

  var _super = task_list_createSuper(TaskDashboard);

  function TaskDashboard(props) {
    var _this;

    classCallCheck_default()(this, TaskDashboard);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getTaskStartedCount", function (taskName) {
      var userPreferences = _this.props.userPreferences;
      var trackedStartedTasks = userPreferences.task_list_tracked_started_tasks;

      if (!trackedStartedTasks || !trackedStartedTasks[taskName]) {
        return 0;
      }

      return trackedStartedTasks[taskName];
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateTrackStartedCount", function (taskName, newCount) {
      var userPreferences = _this.props.userPreferences;
      var trackedStartedTasks = userPreferences.task_list_tracked_started_tasks || {};
      userPreferences.updateUserPreferences({
        task_list_tracked_started_tasks: task_list_objectSpread(task_list_objectSpread({}, trackedStartedTasks || {}), {}, defineProperty_default()({}, taskName, newCount))
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "isTaskCompleted", function (taskName) {
      var trackedCompletedTasks = _this.props.trackedCompletedTasks;

      if (!trackedCompletedTasks) {
        return false;
      }

      return trackedCompletedTasks.includes(taskName);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onTaskSelect", function (taskName) {
      var trackStartedCount = _this.getTaskStartedCount(taskName);

      Object(external_wc_tracks_["recordEvent"])('tasklist_click', {
        task_name: taskName
      });

      if (!_this.isTaskCompleted(taskName)) {
        _this.updateTrackStartedCount(taskName, trackStartedCount + 1);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleExtensionTaskList", function () {
      var _this$props = _this.props,
          isExtendedTaskListHidden = _this$props.isExtendedTaskListHidden,
          updateOptions = _this$props.updateOptions;
      var newValue = !isExtendedTaskListHidden;
      Object(external_wc_tracks_["recordEvent"])(newValue ? 'extended_tasklist_hide' : 'extended_tasklist_show');
      updateOptions({
        woocommerce_extended_task_list_hidden: newValue ? 'yes' : 'no'
      });
    });

    _this.state = {
      isCartModalOpen: false
    };
    _this.toggleExtensionTaskList = _this.toggleExtensionTaskList.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(TaskDashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('woocommerce-onboarding');
      document.body.classList.add('woocommerce-task-dashboard__body');
    }
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      var _this$props2 = this.props,
          activePlugins = _this$props2.activePlugins,
          countryCode = _this$props2.countryCode,
          createNotice = _this$props2.createNotice,
          installAndActivatePlugins = _this$props2.installAndActivatePlugins,
          installedPlugins = _this$props2.installedPlugins,
          isJetpackConnected = _this$props2.isJetpackConnected,
          onboardingStatus = _this$props2.onboardingStatus,
          profileItems = _this$props2.profileItems,
          query = _this$props2.query;
      return tasks_getAllTasks({
        activePlugins: activePlugins,
        countryCode: countryCode,
        createNotice: createNotice,
        installAndActivatePlugins: installAndActivatePlugins,
        installedPlugins: installedPlugins,
        isJetpackConnected: isJetpackConnected,
        onboardingStatus: onboardingStatus,
        profileItems: profileItems,
        query: query,
        toggleCartModal: this.toggleCartModal.bind(this),
        onTaskSelect: this.onTaskSelect
      });
    }
  }, {
    key: "toggleCartModal",
    value: function toggleCartModal() {
      var isCartModalOpen = this.state.isCartModalOpen;

      if (!isCartModalOpen) {
        Object(external_wc_tracks_["recordEvent"])('tasklist_purchase_extensions');
      }

      this.setState({
        isCartModalOpen: !isCartModalOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          dismissedTasks = _this$props3.dismissedTasks,
          isExtendedTaskListComplete = _this$props3.isExtendedTaskListComplete,
          isExtendedTaskListHidden = _this$props3.isExtendedTaskListHidden,
          isSetupTaskListHidden = _this$props3.isSetupTaskListHidden,
          isTaskListComplete = _this$props3.isTaskListComplete,
          query = _this$props3.query,
          trackedCompletedTasks = _this$props3.trackedCompletedTasks;
      var isCartModalOpen = this.state.isCartModalOpen;
      var allTasks = this.getAllTasks();
      var extension = allTasks.extension,
          setupTasks = allTasks.setup;
      var task = query.task;
      var extensionTasks = Array.isArray(extension) && extension.sort(function (a, b) {
        if (Boolean(a.completed) === Boolean(b.completed)) {
          return 0;
        }

        return a.completed ? 1 : -1;
      });
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, setupTasks && (!isSetupTaskListHidden || task) && Object(external_wp_element_["createElement"])(list, {
        dismissedTasks: dismissedTasks || [],
        isComplete: isTaskListComplete,
        query: query,
        tasks: setupTasks,
        title: Object(external_wp_i18n_["__"])('Get ready to start selling', 'woocommerce-admin'),
        trackedCompletedTasks: trackedCompletedTasks || []
      }), extensionTasks && Object(external_wp_element_["createElement"])(display_options["a" /* DisplayOption */], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
        className: "woocommerce-layout__homescreen-display-options",
        label: Object(external_wp_i18n_["__"])('Display', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
        className: "woocommerce-layout__homescreen-extension-tasklist-toggle",
        icon: !isExtendedTaskListHidden && library_check,
        isSelected: !isExtendedTaskListHidden,
        role: "menuitemcheckbox",
        onClick: this.toggleExtensionTaskList
      }, Object(external_wp_i18n_["__"])('Show things to do next', 'woocommerce-admin')))), extensionTasks && !isExtendedTaskListHidden && Object(external_wp_element_["createElement"])(list, {
        dismissedTasks: dismissedTasks || [],
        isComplete: isExtendedTaskListComplete,
        name: 'extended_task_list',
        query: query,
        tasks: extensionTasks,
        title: Object(external_wp_i18n_["__"])('Things to do next', 'woocommerce-admin'),
        trackedCompletedTasks: trackedCompletedTasks || []
      }), isCartModalOpen && Object(external_wp_element_["createElement"])(cart_modal, {
        onClose: function onClose() {
          return _this2.toggleCartModal();
        },
        onClickPurchaseLater: function onClickPurchaseLater() {
          return _this2.toggleCartModal();
        }
      }));
    }
  }]);

  return TaskDashboard;
}(external_wp_element_["Component"]);
/* harmony default export */ var task_list = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getTasksStatus = _select.getTasksStatus;

  var _select2 = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select3.getOption;

  var _select4 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select4.getActivePlugins,
      getInstalledPlugins = _select4.getInstalledPlugins,
      isJetpackConnected = _select4.isJetpackConnected;

  var profileItems = getProfileItems();
  var trackedCompletedTasks = getOption('woocommerce_task_list_tracked_completed_tasks') || [];

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var activePlugins = getActivePlugins();
  var installedPlugins = getInstalledPlugins();
  var onboardingStatus = getTasksStatus();
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    dismissedTasks: getOption('woocommerce_task_list_dismissed_tasks'),
    isExtendedTaskListComplete: getOption('woocommerce_extended_task_list_complete') === 'yes',
    isExtendedTaskListHidden: getOption('woocommerce_extended_task_list_hidden') === 'yes',
    isJetpackConnected: isJetpackConnected(),
    isSetupTaskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
    isTaskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
    installedPlugins: installedPlugins,
    onboardingStatus: onboardingStatus,
    profileItems: profileItems,
    trackedCompletedTasks: trackedCompletedTasks
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch2.installAndActivatePlugins;

  var _dispatch3 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch3.updateOptions;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateOptions: updateOptions
  };
}))(task_list_TaskDashboard));

/***/ })

}]);