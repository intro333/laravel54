'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _CategoryItem = require('./CategoryItem');

var _CategoryItem2 = _interopRequireDefault(_CategoryItem);

var _api = require('../../api');

var _helpers = require('../../helpers');

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setLoaderStatus(true));
      (0, _api.setCategories)(dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          api = _props.api,
          products = _props.products;

      var categories = api.get('categories');
      var categoryItems = (0, _helpers.isEmptyMap)(categories) && categories.map(function (item) {
        return _react2.default.createElement(_CategoryItem2.default, {
          key: item.category_id,
          categoryId: item.category_id,
          imgSrc: item.image_path,
          itemName: item.name
        });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_MenuMobile2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'main-container' },
            _react2.default.createElement(
              'div',
              { className: 'category-head' },
              _react2.default.createElement(
                'h3',
                { className: 'bread-crumbs-on-page' },
                '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'category-all' },
              categoryItems
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Categories;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Categories);

//# sourceMappingURL=Categories-compiled.js.map