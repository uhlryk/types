(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (type) {
    if (!type || !type.test || typeof type.test !== "function") {
        throw new TypeError("Argument is not correct type");
    }
    return true;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkType = __webpack_require__(0);

var _checkType2 = _interopRequireDefault(_checkType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkIfArray = function checkIfArray(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value instanceof Array;
};
var checkIfArrayNotEmpty = function checkIfArrayNotEmpty(value) {
    return value.length > 0;
};
var checkIfArrayOfTypes = function checkIfArrayOfTypes(value) {
    return value.every(_checkType2.default);
};

exports.default = function (arrayOfTypes) {
    if (!checkIfArray(arrayOfTypes) || !checkIfArrayNotEmpty(arrayOfTypes)) {
        throw new TypeError("Non zero length array of types not provided");
    }
    try {
        checkIfArrayOfTypes(arrayOfTypes);
    } catch (err) {
        throw new TypeError("Array contain not correct type");
    }
    return true;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _any = __webpack_require__(4);

var _any2 = _interopRequireDefault(_any);

var _array = __webpack_require__(5);

var _array2 = _interopRequireDefault(_array);

var _boolean = __webpack_require__(6);

var _boolean2 = _interopRequireDefault(_boolean);

var _function = __webpack_require__(7);

var _function2 = _interopRequireDefault(_function);

var _instance = __webpack_require__(8);

var _instance2 = _interopRequireDefault(_instance);

var _null = __webpack_require__(9);

var _null2 = _interopRequireDefault(_null);

var _number = __webpack_require__(10);

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(11);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(12);

var _string2 = _interopRequireDefault(_string);

var _symbol = __webpack_require__(13);

var _symbol2 = _interopRequireDefault(_symbol);

var _undefined = __webpack_require__(14);

var _undefined2 = _interopRequireDefault(_undefined);

var _createTypeFactory = __webpack_require__(15);

var _createTypeFactory2 = _interopRequireDefault(_createTypeFactory);

var _interface = __webpack_require__(17);

var _interface2 = _interopRequireDefault(_interface);

var _some = __webpack_require__(18);

var _some2 = _interopRequireDefault(_some);

var _every = __webpack_require__(19);

var _every2 = _interopRequireDefault(_every);

var _optional = __webpack_require__(20);

var _optional2 = _interopRequireDefault(_optional);

var _not = __webpack_require__(21);

var _not2 = _interopRequireDefault(_not);

var _none = __webpack_require__(22);

var _none2 = _interopRequireDefault(_none);

var _maxLength = __webpack_require__(23);

var _maxLength2 = _interopRequireDefault(_maxLength);

var _minLength = __webpack_require__(24);

var _minLength2 = _interopRequireDefault(_minLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// basic types


// import conditions
// import types
var NUMBER = (0, _createTypeFactory2.default)(_number2.default);
var STRING = (0, _createTypeFactory2.default)(_string2.default, { maxLength: _maxLength2.default, minLength: _minLength2.default });
var OBJECT = (0, _createTypeFactory2.default)(_object2.default);
var ARRAY = (0, _createTypeFactory2.default)(_array2.default);
var BOOLEAN = (0, _createTypeFactory2.default)(_boolean2.default);
var FUNCTION = (0, _createTypeFactory2.default)(_function2.default);
var SYMBOL = (0, _createTypeFactory2.default)(_symbol2.default);
var UNDEFINED = (0, _createTypeFactory2.default)(_undefined2.default);
var NULL = (0, _createTypeFactory2.default)(_null2.default);
var ANY = (0, _createTypeFactory2.default)(_any2.default);
var INSTANCE = (0, _createTypeFactory2.default)(_instance2.default);

// complex types
var INTERFACE = (0, _createTypeFactory2.default)(_interface2.default);
var SOME = (0, _createTypeFactory2.default)(_some2.default);
var EVERY = (0, _createTypeFactory2.default)(_every2.default);
var OPTIONAL = (0, _createTypeFactory2.default)(_optional2.default);
var NOT = (0, _createTypeFactory2.default)(_not2.default);
var NONE = (0, _createTypeFactory2.default)(_none2.default);

exports.default = {
    NUMBER: NUMBER,
    STRING: STRING,
    OBJECT: OBJECT,
    ARRAY: ARRAY,
    BOOLEAN: BOOLEAN,
    FUNCTION: FUNCTION,
    SYMBOL: SYMBOL,
    UNDEFINED: UNDEFINED,
    NULL: NULL,
    ANY: ANY,
    INSTANCE: INSTANCE,
    INTERFACE: INTERFACE,
    SOME: SOME,
    EVERY: EVERY,
    OPTIONAL: OPTIONAL,
    NOT: NOT,
    NONE: NONE
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return true;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (testedArgument) {
  return (typeof testedArgument === "undefined" ? "undefined" : _typeof(testedArgument)) === "object" && testedArgument instanceof Array;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "boolean" || testedArgument instanceof Boolean;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "function";
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument, targetClass) {
  return testedArgument instanceof targetClass;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return testedArgument === null;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "number" || testedArgument instanceof Number;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (testedArgument) {
    return (typeof testedArgument === "undefined" ? "undefined" : _typeof(testedArgument)) === "object" && testedArgument !== null && testedArgument instanceof String === false && testedArgument instanceof Number === false && testedArgument instanceof Boolean === false;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "string" || testedArgument instanceof String;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (testedArgument) {
  return (typeof testedArgument === "undefined" ? "undefined" : _typeof(testedArgument)) === "symbol";
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "undefined";
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createType;

var _extraConditionsResolver = __webpack_require__(16);

var _extraConditionsResolver2 = _interopRequireDefault(_extraConditionsResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = function resolver(typeCondition) {
    var extraConditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (testedArgument, typeInput) {
        var resolveExtraConditions = (0, _extraConditionsResolver2.default)(extraConditions);
        var typeConditionResult = typeCondition(testedArgument, typeInput);
        if (typeConditionResult) {
            return resolveExtraConditions(testedArgument, typeInput);
        } else {
            return false;
        }
    };
};

function createType(typeCondition, extraConditions) {
    var preparedResolver = resolver(typeCondition, extraConditions);
    var typeCheckFunction = function typeCheckFunction(typeInput) {
        return {
            test: function test(testedArgument) {
                return preparedResolver(testedArgument, typeInput);
            }
        };
    };
    typeCheckFunction.test = function (testedArgument) {
        return preparedResolver(testedArgument);
    };
    return typeCheckFunction;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (registeredConditions) {
    return function (testedArgument) {
        var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Object.entries(conditions).every(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                conditionName = _ref2[0],
                value = _ref2[1];

            var condition = registeredConditions[conditionName];
            if (condition && typeof condition === "function") {
                return condition(testedArgument, value);
            } else {
                return true;
            }
        });
    };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkType = __webpack_require__(0);

var _checkType2 = _interopRequireDefault(_checkType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument) {
    var targetInterface = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (typeof testedArgument === "undefined" ? "undefined" : _typeof(testedArgument)) === "object" && Object.entries(targetInterface).every(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            testedPropertyName = _ref2[0],
            type = _ref2[1];

        (0, _checkType2.default)(type);
        return type.test(testedArgument[testedPropertyName]);
    });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkArrayOfTypes = __webpack_require__(1);

var _checkArrayOfTypes2 = _interopRequireDefault(_checkArrayOfTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument, typesToCheck) {
    (0, _checkArrayOfTypes2.default)(typesToCheck);
    return typesToCheck.some(function (type) {
        return type.test(testedArgument);
    });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkArrayOfTypes = __webpack_require__(1);

var _checkArrayOfTypes2 = _interopRequireDefault(_checkArrayOfTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument, typesToCheck) {
    (0, _checkArrayOfTypes2.default)(typesToCheck);
    return typesToCheck.every(function (type) {
        return type.test(testedArgument);
    });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkType = __webpack_require__(0);

var _checkType2 = _interopRequireDefault(_checkType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument, optionalType) {
    (0, _checkType2.default)(optionalType);
    return typeof testedArgument === "undefined" || optionalType.test(testedArgument);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkType = __webpack_require__(0);

var _checkType2 = _interopRequireDefault(_checkType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument, typeNegation) {
    (0, _checkType2.default)(typeNegation);
    return !typeNegation.test(testedArgument);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkArrayOfTypes = __webpack_require__(1);

var _checkArrayOfTypes2 = _interopRequireDefault(_checkArrayOfTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (testedArgument, typesToCheck) {
    (0, _checkArrayOfTypes2.default)(typesToCheck);
    return !typesToCheck.some(function (type) {
        return type.test(testedArgument);
    });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (testedArgument, maxValue) {
    return testedArgument.length <= maxValue;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (testedArgument, minValue) {
    return testedArgument.length >= minValue;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map