'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../theme/css/main.css');

require('../theme/css/bootstrap-datepicker3.min.css');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_Component) {
  _inherits(Categories, _Component);

  function Categories(props) {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));
  }

  _createClass(Categories, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'category-head' },
          _react2.default.createElement(
            'h3',
            { className: 'bread-crumbs-on-page' },
            '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'category-all' },
          _react2.default.createElement(
            'div',
            { className: 'category-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/products' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img' },
                _react2.default.createElement('img', { src: '/images/category/meat-or-chicken.jpg', width: '170' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u041C\u044F\u0441\u043E \u0438 \u043A\u0443\u0440\u0438\u0446\u0430 '
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/products' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img' },
                _react2.default.createElement('img', { src: '/images/category/fruits-and-vegetables.jpg', width: '170' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u0424\u0440\u0443\u043A\u0442\u044B, \u043E\u0432\u043E\u0449\u0438 '
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/products' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img' },
                _react2.default.createElement('img', { src: '/images/category/dairy.jpg', width: '170' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B '
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Categories;
}(_react.Component);

exports.default = Categories;

//# sourceMappingURL=Categories-compiled.js.map