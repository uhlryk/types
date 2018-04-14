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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _any = __webpack_require__(2);

var _any2 = _interopRequireDefault(_any);

var _array = __webpack_require__(3);

var _array2 = _interopRequireDefault(_array);

var _boolean = __webpack_require__(4);

var _boolean2 = _interopRequireDefault(_boolean);

var _function = __webpack_require__(5);

var _function2 = _interopRequireDefault(_function);

var _instance = __webpack_require__(6);

var _instance2 = _interopRequireDefault(_instance);

var _interface = __webpack_require__(7);

var _interface2 = _interopRequireDefault(_interface);

var _null = __webpack_require__(8);

var _null2 = _interopRequireDefault(_null);

var _number = __webpack_require__(9);

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(10);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(11);

var _string2 = _interopRequireDefault(_string);

var _symbol = __webpack_require__(12);

var _symbol2 = _interopRequireDefault(_symbol);

var _undefined = __webpack_require__(13);

var _undefined2 = _interopRequireDefault(_undefined);

var _createTypeFactory = __webpack_require__(14);

var _createTypeFactory2 = _interopRequireDefault(_createTypeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    NUMBER: (0, _createTypeFactory2.default)(_number2.default),
    STRING: (0, _createTypeFactory2.default)(_string2.default),
    OBJECT: (0, _createTypeFactory2.default)(_object2.default),
    ARRAY: (0, _createTypeFactory2.default)(_array2.default),
    BOOLEAN: (0, _createTypeFactory2.default)(_boolean2.default),
    FUNCTION: (0, _createTypeFactory2.default)(_function2.default),
    SYMBOL: (0, _createTypeFactory2.default)(_symbol2.default),
    UNDEFINED: (0, _createTypeFactory2.default)(_undefined2.default),
    NULL: (0, _createTypeFactory2.default)(_null2.default),
    ANY: (0, _createTypeFactory2.default)(_any2.default),
    INSTANCE: (0, _createTypeFactory2.default)(_instance2.default),
    INTERFACE: (0, _createTypeFactory2.default)(_interface2.default)
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return true;
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "boolean" || testedArgument instanceof Boolean;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "function";
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument, targetClass) {
  return testedArgument instanceof targetClass;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (testedArgument) {
    var targetInterface = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (typeof testedArgument === "undefined" ? "undefined" : _typeof(testedArgument)) === "object" && Object.entries(targetInterface).every(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            testedPropertyName = _ref2[0],
            type = _ref2[1];

        return type.test(testedArgument[testedPropertyName]);
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return testedArgument === null;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "number" || testedArgument instanceof Number;
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "string" || testedArgument instanceof String;
};

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testedArgument) {
  return typeof testedArgument === "undefined";
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createType;
function createType(typeCondition) {
    var typeCheckFunction = function typeCheckFunction(typeInput) {
        return {
            test: function test(testedArgument) {
                return typeCondition(testedArgument, typeInput);
            }
        };
    };
    typeCheckFunction.test = function (testedArgument) {
        return typeCondition(testedArgument);
    };
    return typeCheckFunction;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map