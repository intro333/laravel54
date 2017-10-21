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

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _CartItem = require('../Cart/CartItem');

var _CartItem2 = _interopRequireDefault(_CartItem);

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _immutable = require('immutable');

var _api = require('../../api');

var _helpers = require('../../helpers');

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

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
      time_quota: 0,
      cart_error: '',
      comment_count_error: '',
      selectError: {
        borderColor: ''
      }
    };

    return _this;
  }

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setLoaderStatus(true));
      (0, _api.showProductsInCart)(dispatch);
      (0, _api.showOrdersQuotaInCart)(dispatch);
      (0, _api.showCurrentOrder)(dispatch);
    }

    // componentWillReceiveProps(next) {
    //   console.log("prodCount_1: ", next.session.get('productCounts'));
    //   if (next.session.get('productCounts') === 0) {
    //     console.log("prodCount_2: ", next.session.get('productCounts'));
    //     const {dispatch, history} = this.props;
    //     clearCart(dispatch, history);
    //     next.history.push('/');
    //   }
    // }

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      var map = _immutable.Map;
      dispatch(modelActions.setCurrentOrder(map()));
    }
  }, {
    key: 'handleChangeComment',
    value: function handleChangeComment(event) {
      var currentOrder = this.props.currentOrder;

      var comment = (0, _helpers.isEmptyArray)(currentOrder) && (0, _helpers.isEmptyArray)(currentOrder['four']) && currentOrder['four'].comment ? currentOrder['four'].comment : '';
      if (event.target.value.length < 1000) {
        if (comment !== '' && event.target.value === '') {
          this.setState({
            comment: ' '
          });
        } else this.setState({ comment: event.target.value });
        this.setState({
          comment_count_error: ''
        });
      } else {
        this.setState({
          comment_count_error: 'Максимальное количество символов 1000'
        });
      }
    }
  }, {
    key: 'handleChangeTimeQuota',
    value: function handleChangeTimeQuota(e) {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setErrors(''));
      this.setState({
        cart_error: '',
        selectError: {
          borderColor: '' //#d9d9d9 #ccc #b3b3b3
        }
      });
      this.setState({ time_quota: e.value });
    }
  }, {
    key: 'handlerSendOrder',
    value: function handlerSendOrder() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          history = _props.history,
          ordersQuota = _props.ordersQuota,
          currentOrder = _props.currentOrder;

      if (ordersQuota.delivery && ordersQuota.delivery.status) {
        var data = {
          comment: this.state.comment,
          time_quota: this.state.time_quota
        };
        if ((0, _helpers.isEmptyArray)(currentOrder) && (0, _helpers.isEmptyArray)(currentOrder['one'])) {
          dispatch(modelActions.setOpenCloseModal({
            show: true,
            textHeader: 'У Вас уже есть один заказ в обработке.Перейти к заказу?',
            textAlign: true,
            function: function _function() {
              var history = _this2.props.history;

              history.push('/orders');
            }
          }));
        } else {
          if (this.state.time_quota !== 0) {
            (0, _api.sendOrder)(dispatch, data, history);
            dispatch(modelActions.setModalLoaderCartSentStatus(true));
            history.push('/sussess-page');
          } else if (ordersQuota.ordersQuota && ordersQuota.ordersQuota.length === 0) {
            (0, _api.sendOrder)(dispatch, data, history);
            dispatch(modelActions.setModalLoaderCartSentStatus(true));
            history.push('/sussess-page');
          } else {
            (0, _helpers.scrollToElement)('.scroll-to-error', 1500);
            this.setState({
              cart_error: 'Выберите удобный период получения заказа.',
              selectError: {
                borderColor: 'indianred'
              }
            });
          }
        }
      } else {
        dispatch(modelActions.setOpenCloseModal({
          show: true,
          textHeader: 'Дата доставки закрыта. Узнать подробнее?',
          textAlign: true,
          function: function _function() {
            var history = _this2.props.history;

            history.push('/orders');
          }
        }));
      }
    }
  }, {
    key: 'handlerClearCart',
    value: function handlerClearCart() {
      var _this3 = this;

      var dispatch = this.props.dispatch;

      dispatch(modelActions.setOpenCloseModal({
        show: true,
        textHeader: 'Удалить все товары из корзины?',
        textAlign: true,
        function: function _function() {
          var _props2 = _this3.props,
              dispatch = _props2.dispatch,
              history = _props2.history;

          dispatch(modelActions.setLoaderStatus(true));
          (0, _api.clearCart)(dispatch, history);
        }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          ordersQuota = _props3.ordersQuota,
          productsForCart = _props3.productsForCart,
          errorMessageCountQuota = _props3.errorMessageCountQuota,
          currentOrder = _props3.currentOrder,
          session = _props3.session;
      // checkTimeQuota(dispatch, {time_quota: this.state.time_quota}); //TODO чекаем кол-во квот
      // const check = api.get('checkTimeQuota');                       //TODO чекаем кол-во квот

      var total = 0;

      var productsTd = (0, _helpers.isEmptyMap)(productsForCart) && productsForCart.map(function (item) {
        return _react2.default.createElement(_CartItem2.default, {
          keyProductId: item.productId,
          key: item.productId,
          item: item,
          history: _this4.props.history
        });
      });

      var userInfo = session.get('userInfo');
      total = productsForCart.reduce(function (total, item) {
        return total + (item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10);
      }, 0);

      var timeQuotaOptions = [{ value: 0, label: '' }];
      var delivery = null;
      ordersQuota.ordersQuota && ordersQuota.ordersQuota.length !== 0 && ordersQuota.ordersQuota.forEach(function (q) {
        return q.orders_quota_id !== 1 && timeQuotaOptions.push({ value: q.orders_quota_id, label: q.time_quota });
      });

      var quotaStyle = {
        width: '100%',
        display: 'flex'
      };

      var comment = (0, _helpers.isEmptyArray)(currentOrder) && (0, _helpers.isEmptyArray)(currentOrder['four']) && currentOrder['four'].comment ? currentOrder['four'].comment : '';

      var ordersQoutaDiv = _react2.default.createElement(
        'div',
        { className: 'quota-style', style: quotaStyle },
        _react2.default.createElement(
          'label',
          { className: 'order-filds-label', htmlFor: 'time_quota' },
          '\u042F \u0441\u043C\u043E\u0433\u0443 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0437\u0430\u043A\u0430\u0437 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441'
        ),
        _react2.default.createElement(
          'div',
          { style: { width: '130px', marginLeft: '10px' } },
          _react2.default.createElement(_reactSelect2.default, {
            name: 'time_quota',
            value: this.state.time_quota,
            options: timeQuotaOptions,
            onChange: this.handleChangeTimeQuota.bind(this),
            placeholder: '',
            clearable: false,
            searchable: false,
            style: this.state.selectError
          })
        )
      );

      var OrderNonQuota = _react2.default.createElement(
        'label',
        { className: 'order-filds-label', htmlFor: 'time_quota', style: { marginBottom: '15px' } },
        '\u0417\u0430\u043A\u0430\u0437 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0435 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0434\u0435\u043D\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.\u041F\u0435\u0440\u0438\u043E\u0434\u044B \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C.'
      );
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
              { className: 'animation-page-load-medium cart-scroll-adaptive' },
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
                  { style: { display: 'flex' } },
                  _react2.default.createElement(
                    'div',
                    { onClick: this.handlerClearCart.bind(this), className: 'cart-button-clear' },
                    '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443'
                  ),
                  _react2.default.createElement(
                    'div',
                    { onClick: this.handlerSendOrder.bind(this), className: 'cart-button' },
                    '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437'
                  )
                )
              ),
              (0, _helpers.isEmptyArray)(currentOrder) && (0, _helpers.isEmptyArray)(currentOrder['four']) && _react2.default.createElement(
                'p',
                { className: 'personal-explain-text' },
                '\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 \u2116 ST-',
                userInfo.emailHash,
                '-',
                currentOrder['four'].order_id
              ),
              (0, _helpers.isEmptyArray)(currentOrder) && (0, _helpers.isEmptyArray)(currentOrder['one']) && _react2.default.createElement(
                'p',
                { className: 'personal-explain-text cart-error-mobile', style: { color: 'red' } },
                '\u0423 \u0412\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435.'
              ),
              _react2.default.createElement(
                'table',
                { className: 'cart-products-table cart-products-table__cart' },
                _react2.default.createElement(
                  'thead',
                  null,
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
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  productsTd
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'cart-order__total cart_total' },
                '\u0421\u0443\u043C\u043C\u0430:\xA0',
                _react2.default.createElement(
                  'span',
                  null,
                  total,
                  ' \u0420'
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'order-filds-label', style: { color: 'red', fontSize: '14px', margin: '0' } },
                this.state.comment_count_error !== '' && this.state.comment_count_error
              ),
              _react2.default.createElement('textarea', {
                name: 'comment',
                className: 'cart-comment',
                value: this.state.comment === '' ? comment : this.state.comment,
                onChange: this.handleChangeComment.bind(this),
                placeholder: '\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443...'
              }),
              _react2.default.createElement(
                'p',
                { className: 'order-filds-label', style: { fontWeight: '700' } },
                '\u0414\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ',
                ordersQuota.delivery ? ordersQuota.delivery.delivery_date : ''
              ),
              ordersQuota.ordersQuota && ordersQuota.ordersQuota.length !== 0 ? ordersQoutaDiv : OrderNonQuota,
              _react2.default.createElement(
                'p',
                { className: 'order-filds-label scroll-to-error',
                  style: { color: 'red', fontSize: '14px', marginTop: '5px' } },
                this.state.cart_error !== '' ? this.state.cart_error : errorMessageCountQuota
              ),
              _react2.default.createElement(
                'div',
                { onClick: this.handlerSendOrder.bind(this), className: 'cart-button' },
                '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437'
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Cart;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    ordersQuota: store.api.get('ordersQuota'),
    productsForCart: store.api.get('productsForCart'),
    currentOrder: store.api.get('currentOrder'),
    errorMessageCountQuota: store.session.get('errors').errorTime
  };
})(Cart);

//# sourceMappingURL=Cart-compiled.js.map