'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('../../theme/css/index.css');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _CartItem = require('../Cart/CartItem');

var _CartItem2 = _interopRequireDefault(_CartItem);

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _api = require('../../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

    _this.state = {
      comment: '',
      time_quota: 0
    };

    return _this;
  }

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      (0, _api.showProductsInCart)(dispatch);
      (0, _api.showOrdersQuotaInCart)(dispatch);
    }
  }, {
    key: 'handleChangeComment',
    value: function handleChangeComment(event) {
      this.setState({ comment: event.target.value });
    }
  }, {
    key: 'handlerSendOrder',
    value: function handlerSendOrder() {
      var _props = this.props,
          dispatch = _props.dispatch,
          history = _props.history;

      if (this.state.time_quota !== 0) {
        var data = {
          comment: this.state.comment,
          time_quota: this.state.time_quota
        };
        (0, _api.sendOrder)(dispatch, data, history);
      }
    }
  }, {
    key: 'handleChangeTimeQuota',
    value: function handleChangeTimeQuota(e) {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setErrors(''));
      this.setState({ time_quota: e.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          api = _props2.api,
          session = _props2.session;

      var productsForCart = api.get('productsForCart');
      var ordersQuota = api.get('ordersQuota');
      // checkTimeQuota(dispatch, {time_quota: this.state.time_quota}); //TODO чекаем кол-во квот
      // const check = api.get('checkTimeQuota');                       //TODO чекаем кол-во квот
      var total = null;

      var errorMessageCountQuota = session.get('errors').errorTime;

      var productsTd = productsForCart.map(function (item) {
        return _react2.default.createElement(_CartItem2.default, {
          key: item.productId,
          item: item
        });
      });

      total = productsForCart.reduce(function (total, item) {
        return total + (item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10);
      }, 0);

      var timeQuotaOptions = [{ value: 0, label: '' }];
      var delivery = null;
      if (ordersQuota.ordersQuota) {
        ordersQuota.ordersQuota.map(function (q) {
          return timeQuotaOptions.push({ value: q.orders_quota_id, label: q.time_quota });
        });
      }

      var quotaStyle = {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      };

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MenuMobile2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(
            'div',
            { className: 'flex-box-between' },
            _react2.default.createElement(
              'h3',
              null,
              '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
            ),
            _react2.default.createElement(
              'div',
              { onClick: this.handlerSendOrder.bind(this), className: 'cart-button' },
              '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437'
            )
          ),
          _react2.default.createElement(
            'table',
            { className: 'cart-products-table' },
            _react2.default.createElement(
              'tr',
              { className: 'cart-tr-head' },
              _react2.default.createElement(
                'th',
                { className: 'table-30-procent' },
                '\u041F\u0440\u043E\u0434\u0443\u043A\u0442'
              ),
              _react2.default.createElement(
                'th',
                { className: 'table-25-procent' },
                '\u0426\u0435\u043D\u0430'
              ),
              _react2.default.createElement(
                'th',
                { className: 'table-25-procent' },
                '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
              ),
              _react2.default.createElement(
                'th',
                { className: 'table-10-procent' },
                '\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C'
              ),
              _react2.default.createElement('th', { className: 'table-10-procent' })
            ),
            productsTd
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-order__total' },
            '\u0418\u0442\u043E\u0433:\xA0',
            _react2.default.createElement(
              'span',
              null,
              total,
              ' \u20BD'
            )
          ),
          _react2.default.createElement('textarea', {
            name: 'comment',
            className: 'cart-comment',
            value: this.state.comment,
            onChange: this.handleChangeComment.bind(this),
            placeholder: '\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443...'
          }),
          _react2.default.createElement(
            'label',
            { className: 'order-filds-label' },
            '\u0414\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ',
            ordersQuota.delivery ? ordersQuota.delivery.delivery_date : ''
          ),
          _react2.default.createElement(
            'div',
            { style: quotaStyle },
            _react2.default.createElement(
              'label',
              { className: 'order-filds-label', htmlFor: 'time_quota' },
              '\u042F \u0441\u043C\u043E\u0433\u0443 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0437\u0430\u043A\u0430\u0437 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441'
            ),
            _react2.default.createElement(
              'div',
              { style: { width: '120px', marginLeft: '10px' } },
              _react2.default.createElement(_reactSelect2.default, {
                name: 'time_quota',
                value: this.state.time_quota,
                options: timeQuotaOptions,
                onChange: this.handleChangeTimeQuota.bind(this),
                placeholder: '',
                clearable: false,
                searchable: false
              })
            )
          ),
          _react2.default.createElement(
            'label',
            { className: 'order-filds-label', style: { color: 'red', fontSize: '12px' } },
            errorMessageCountQuota
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.handlerSendOrder.bind(this), className: 'cart-button' },
            '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437'
          )
        )
      );
    }
  }]);

  return Cart;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Cart);

//# sourceMappingURL=Cart-compiled.js.map