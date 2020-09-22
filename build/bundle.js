/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/abstract-component.js":
/*!*****************************************!*\
  !*** ./source/js/abstract-component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./source/js/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbstractComponent = /*#__PURE__*/function () {
  function AbstractComponent() {
    _classCallCheck(this, AbstractComponent);

    if ((this instanceof AbstractComponent ? this.constructor : void 0) === AbstractComponent) {
      throw new Error("Can't instantiate AbstractComponent, only concrete one.");
    }

    this._element = null;
  }

  _createClass(AbstractComponent, [{
    key: "getTemplate",
    value: function getTemplate() {
      throw new Error("Abstract method not implemented: getTemplate");
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (!this._element) {
        this._element = Object(_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      }

      return this._element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this._element = null;
    }
  }]);

  return AbstractComponent;
}();



/***/ }),

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-controller */ "./source/js/widget-controller.js");

var START_VALUE = 10;
var MIN_VALUE = -10;
var MAX_VALUE = 25;
var siteMainElement = document.querySelector("main");
var widgetController = new _widget_controller__WEBPACK_IMPORTED_MODULE_0__["default"](siteMainElement, START_VALUE, MIN_VALUE, MAX_VALUE);
widgetController.render();

/***/ }),

/***/ "./source/js/render.js":
/*!*****************************!*\
  !*** ./source/js/render.js ***!
  \*****************************/
/*! exports provided: createElement, RenderPosition, render, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
//  --------------------  Функция по созданию DOM элемента
var createElement = function createElement(template) {
  var newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstChild;
}; //  --------------------  Функция добавления DOM элемента в разметку


var RenderPosition = {
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend"
};

var render = function render(container, component, place) {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;

    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
}; //  --------------------  Удаление DOM элемента


var remove = function remove(component) {
  component.getElement().remove();
  component.removeElement();
}; //  --------------------  Замена DOM элемента


var replace = function replace(newComponent, oldComponent) {
  var newElement = newComponent.getElement();
  var oldElement = oldComponent.getElement();
  var parentElement = oldComponent.getElement().parentElement;
  var isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};



/***/ }),

/***/ "./source/js/widget-component.js":
/*!***************************************!*\
  !*** ./source/js/widget-component.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetComponent; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createWidgetTemplate = function createWidgetTemplate(startValue, minValue, maxValue) {
  return "<section class=\"page-main__widget-section widget-section\">\n      <button class=\"widget-section__controll widget-section__controll--reduce\">\u2212</button>\n      <label class=\"visually-hidden\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E</label>\n      <input class=\"widget-section__input\" type=\"number\" min=\"".concat(minValue, "\" max=\"").concat(maxValue, "\" value=\"").concat(startValue, "\">\n      <button class=\"widget-section__controll widget-section__controll--enlarge\">+</button>\n    </section>");
};

var WidgetComponent = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(WidgetComponent, _AbstractComponent);

  var _super = _createSuper(WidgetComponent);

  function WidgetComponent(startValue, minValue, maxValue) {
    var _this;

    _classCallCheck(this, WidgetComponent);

    _this = _super.call(this);
    _this._currentValue = startValue;
    _this._minValue = minValue;
    _this._maxValue = maxValue;
    return _this;
  }

  _createClass(WidgetComponent, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createWidgetTemplate(this._currentValue, this._minValue, this._maxValue, this._handler);
    }
  }, {
    key: "getInput",
    value: function getInput() {
      return this.getElement().querySelector(".widget-section__input");
    }
  }, {
    key: "setClickHandler",
    value: function setClickHandler(handler) {
      this.getElement().querySelector(".widget-section__input").addEventListener("wheel", function (evt) {
        handler(evt);
      });
      this.getElement().querySelector(".widget-section__input").addEventListener("change", function (evt) {
        handler(evt);
      });
      this.getElement().querySelector(".widget-section__controll--reduce").addEventListener("click", function (evt) {
        handler(evt, false);
      });
      this.getElement().querySelector(".widget-section__controll--enlarge").addEventListener("click", function (evt) {
        handler(evt, true);
      });
    }
  }]);

  return WidgetComponent;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/widget-controller.js":
/*!****************************************!*\
  !*** ./source/js/widget-controller.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetController; });
/* harmony import */ var _widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-component */ "./source/js/widget-component.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./source/js/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var WidgetController = /*#__PURE__*/function () {
  function WidgetController(container, startValue, minValue, maxValue) {
    _classCallCheck(this, WidgetController);

    this._container = container;
    this._widgetComponent = null;
    this._minValue = minValue;
    this._maxValue = maxValue;
    this._currentValue = startValue;
    this._valueChangeHandler = this._valueChangeHandler.bind(this);
  }

  _createClass(WidgetController, [{
    key: "_valueChangeHandler",
    value: function _valueChangeHandler(evt, props) {
      evt.preventDefault();

      if (evt.type === "wheel") {
        if (evt.deltaY * -0.02 > 0) {
          this._currentValue++;
        } else {
          this._currentValue--;
        }
      }

      if (evt.type !== "wheel") {
        switch (props) {
          case true:
            this._currentValue++;
            break;

          case false:
            this._currentValue--;
            break;

          default:
            this._currentValue = evt.target.value;

            if (evt.target.value >= this._maxValue) {
              this._currentValue = this._maxValue;
            }

            if (evt.target.value <= this._minValue) {
              this._currentValue = this._minValue;
            }

        }
      }

      if (this._currentValue > this._maxValue) {
        this._currentValue = this._maxValue;
      }

      if (this._currentValue < this._minValue) {
        this._currentValue = this._minValue;
      }

      this._widgetComponent.getInput().value = this._currentValue;
    }
  }, {
    key: "render",
    value: function render() {
      var oldWidgetComponent = this._widgetComponent;
      this._widgetComponent = new _widget_component__WEBPACK_IMPORTED_MODULE_0__["default"](this._currentValue, this._minValue, this._maxValue);

      if (oldWidgetComponent) {
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._widgetComponent, oldWidgetComponent);

        this._widgetComponent.setClickHandler(this._valueChangeHandler);
      } else {
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._widgetComponent, _render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

        this._widgetComponent.setClickHandler(this._valueChangeHandler);
      }
    }
  }]);

  return WidgetController;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map