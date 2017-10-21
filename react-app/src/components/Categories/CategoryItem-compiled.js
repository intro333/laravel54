'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryItem = function (_Component) {
  _inherits(CategoryItem, _Component);

  function CategoryItem(props) {
    _classCallCheck(this, CategoryItem);

    return _possibleConstructorReturn(this, (CategoryItem.__proto__ || Object.getPrototypeOf(CategoryItem)).call(this, props));
  }

  // componentWillUnmount() {


  _createClass(CategoryItem, [{
    key: 'setCategoryId',
    value: function setCategoryId() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setCategoryId(this.props.categoryId));
      dispatch(modelActions.setCategoryName(this.props.itemName));
    }
  }, {
    key: 'render',
    value: function render() {

      var imgPath = '/storage/images/categories/' + this.props.imgSrc;

      return _react2.default.createElement(
        'div',
        { className: 'category-item animation-page-load-medium', onClick: this.setCategoryId.bind(this) },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/products' },
          _react2.default.createElement(
            'div',
            { className: 'category-item__img' },
            _react2.default.createElement('img', { src: imgPath && imgPath, width: '170' }),
            _react2.default.createElement(
              'div',
              { className: 'category-item__name' },
              this.props.itemName
            )
          )
        )
      );
    }
  }]);

  return CategoryItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(CategoryItem);

//# sourceMappingURL=CategoryItem-compiled.js.map