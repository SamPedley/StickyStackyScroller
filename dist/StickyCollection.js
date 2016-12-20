'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StickyElement = require('./StickyElement.js');

var _StickyElement2 = _interopRequireDefault(_StickyElement);

var _jquery = require('jquery');

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