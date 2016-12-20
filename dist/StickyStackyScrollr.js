'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StickyCollection = require('./StickyCollection.js');

var _StickyCollection2 = _interopRequireDefault(_StickyCollection);

var _jquery = require('jquery');

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