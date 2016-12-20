(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["stickyStackyScrollr"] = factory();
	else
		root["stickyStackyScrollr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _StickyStackyScrollr = __webpack_require__(1);
	
	var _StickyStackyScrollr2 = _interopRequireDefault(_StickyStackyScrollr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StickyStackyScrollr2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StickyCollection = __webpack_require__(2);
	
	var _StickyCollection2 = _interopRequireDefault(_StickyCollection);
	
	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StickyStackyScrollr = function () {
	  function StickyStackyScrollr(elements) {
	    var scrollToListen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
	
	    _classCallCheck(this, StickyStackyScrollr);
	
	    this.scrollToListen = scrollToListen;
	    this.elements = new _StickyCollection2.default(elements);
	
	    this.scrollToListen.addEventListener('scroll', this.onScroll.bind(this));
	    window.addEventListener('resize', this.resize.bind(this));
	  }
	
	  _createClass(StickyStackyScrollr, [{
	    key: 'onScroll',
	    value: function onScroll() {
	      for (var i = 0; i < this.elements.list.length; i++) {
	        var scrollTop = this.scrollToListen.pageYOffset;
	        if (!this.elements.list[i].isDocked && this.elements.list[i].toTop() - scrollTop < 0) {
	          this.elements.list[i].makeSticky();
	        } else if (this.elements.list[i].isDocked && scrollTop <= this.elements.list[i].toTop()) {
	          this.elements.list[i].makeNormal();
	        }
	      };
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.elements.resize();
	      this.onScroll();
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      (0, _jquery2.default)(this.scrollToListen).unbind('.scrollSSS');
	      (0, _jquery2.default)(window).unbind('.resizeSSS');
	      this.elements.unbind();
	    }
	  }]);
	
	  return StickyStackyScrollr;
	}();
	
	exports.default = StickyStackyScrollr;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StickyElement = __webpack_require__(3);
	
	var _StickyElement2 = _interopRequireDefault(_StickyElement);
	
	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StickyCollection = function () {
	  function StickyCollection(jqueyArray) {
	    _classCallCheck(this, StickyCollection);
	
	    var elements = this._getElements(jqueyArray);
	    elements = elements.sort(this._sortByOffset);
	    this.list = this._assignBuffer(elements);
	  }
	
	  _createClass(StickyCollection, [{
	    key: 'unbind',
	    value: function unbind() {
	      for (var i = 0; i < this.list.length; i++) {
	        this.list[i].makeNormal();
	        this.list[i].$duplicate.remove();
	      };
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      for (var i = 0; i < this.list.length; i++) {
	        this.list[i].makeNormal();
	        this.list[i].updateSize();
	        this.list = this._assignBuffer(this.list);
	      };
	    }
	  }, {
	    key: '_getElements',
	    value: function _getElements(list) {
	      var elements = [];
	      for (var i = 0; i < list.length; i++) {
	        elements = elements.concat((0, _jquery2.default)(list[i]).get());
	      }
	      return elements.map(function (element) {
	        return new _StickyElement2.default(element);
	      });
	    }
	  }, {
	    key: '_sortByOffset',
	    value: function _sortByOffset(a, b) {
	      if (a.offset < b.offset) {
	        return -1;
	      } else if (a.offset > b.offset) {
	        return 1;
	      }
	      return 0;
	    }
	  }, {
	    key: '_assignBuffer',
	    value: function _assignBuffer(elements) {
	      for (var i = 0; i < elements.length; i++) {
	        if (i === 0) {
	          elements[i].buffer = 0;
	        } else {
	          elements[i].buffer = this._calculateBuffer(elements, i - 1);
	        }
	      };
	      return elements;
	    }
	  }, {
	    key: '_calculateBuffer',
	    value: function _calculateBuffer(elements, index) {
	      var total = 0;
	      for (var i = index; i >= 0; i--) {
	        total += elements[i].height;
	      };
	      return total;
	    }
	  }]);
	
	  return StickyCollection;
	}();
	
	exports.default = StickyCollection;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StickyElement = function () {
	  function StickyElement($element) {
	    _classCallCheck(this, StickyElement);
	
	    $element = (0, _jquery2.default)($element);
	    var dimensions = $element[0].getBoundingClientRect();
	    var $duplicate = $element.clone().removeAttr('data-reactid').insertAfter($element).hide();
	    this.self = $element[0];
	    this.$self = $element;
	    this.$duplicate = $duplicate;
	    this.height = dimensions.height;
	    this.width = dimensions.width;
	    this.isTable = !!$element.find('tr, table, thead').length;
	    this.offset = $element.offset().top;
	    this.buffer = 0;
	    this.docked = false;
	    this.toTop = function () {
	      return this.offset - this.buffer;
	    };
	  }
	
	  _createClass(StickyElement, [{
	    key: 'makeSticky',
	    value: function makeSticky() {
	      this.isDocked = true;
	      this.$duplicate.show();
	      this.self.style.top = this.buffer + 'px';
	      this.self.style.width = this.width + 'px';
	      this.self.style.height = this.height + 'px';
	      this.self.style.zIndex = 999;
	      this.self.style.position = 'fixed';
	      this.self.className += ' activeSticky';
	      if (this.isTable) {
	        this.makeTableSticky();
	      }
	    }
	  }, {
	    key: 'makeNormal',
	    value: function makeNormal() {
	      this.isDocked = false;
	      this.$duplicate.hide();
	      this.self.removeAttribute('style');
	      this.self.className = this.self.className.replace(' activeSticky', '');
	      if (this.isTable && this.ths) {
	        this._makeTableNormal();
	      }
	    }
	  }, {
	    key: '_makeTableNormal',
	    value: function _makeTableNormal() {
	      for (var i = 0; i < this.ths.length; i++) {
	        this.ths[i].self.removeAttribute('style');
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize() {
	      var dimensions = this.self.getBoundingClientRect();
	      this.height = dimensions.height;
	      this.width = dimensions.width;
	      this.offset = this.$self.offset().top;
	    }
	  }, {
	    key: 'makeTableSticky',
	    value: function makeTableSticky() {
	      if (!this.ths) {
	        this._getTableHeaderWidth();
	      }
	
	      for (var i = 0; i < this.ths.length; i++) {
	        this.ths[i].self.style.width = this.ths[i].percent + '%';
	      }
	    }
	  }, {
	    key: '_getTableHeaderWidth',
	    value: function _getTableHeaderWidth() {
	      var ths = this.$self.find('th');
	      var duplicate = this.$duplicate.find('th');
	
	      for (var i = 0; i < ths.length; i++) {
	        var percent = (0, _jquery2.default)(duplicate[i]).width() / this.width;
	        ths[i] = { percent: percent, self: ths[i] };
	      }
	
	      this.ths = ths;
	    }
	  }]);
	
	  return StickyElement;
	}();
	
	exports.default = StickyElement;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map