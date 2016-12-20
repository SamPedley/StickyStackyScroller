'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

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