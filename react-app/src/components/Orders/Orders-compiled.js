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

var _helpers = require('../../helpers');

var helpers = _interopRequireWildcard(_helpers);

require('../../theme/css/index.css');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _OrderItem = require('../Orders/OrderItem');

var _OrderItem2 = _interopRequireDefault(_OrderItem);

var _api = require('../../api');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orders = function (_Component) {
  _inherits(Orders, _Component);

  function Orders(props) {
    _classCallCheck(this, Orders);

    var _this = _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).call(this, props));

    _this.state = {
      orderStatus: 1,
      orderYear: new Date().getUTCFullYear(),
      orderMonth: new Date().getUTCMonth() + 1
    };
    return _this;
  }

  _createClass(Orders, [{
    key: 'ordersGetAll',
    value: function ordersGetAll(status, year, month) {
      var dispatch = this.props.dispatch;

      var data = {
        status: status,
        year: year,
        month: month
      };
      dispatch(modelActions.setLoaderStatus(true));
      (0, _api.ordersGetAll)(dispatch, data);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      (0, _api.showOrdersQuotaInCart)(dispatch);
      this.ordersGetAll(this.state.orderStatus, this.state.orderYear, this.state.orderMonth);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _ref = props || this.props,
          dispatch = _ref.dispatch,
          api = _ref.api;

      if (props.api.get('componentWillReceivePropsChange')) {
        this.ordersGetAll(this.state.orderStatus, this.state.orderYear, this.state.orderMonth);
        dispatch(modelActions.componentWillReceivePropsChange(false));
      }
    }
  }, {
    key: 'handleChangeOrderStatus',
    value: function handleChangeOrderStatus(e) {
      this.setState({ orderStatus: e.value });
      this.ordersGetAll(e.value, this.state.orderYear, this.state.orderMonth);
    }
  }, {
    key: 'handlerChangeOrderMonth',
    value: function handlerChangeOrderMonth(e) {
      this.setState({ orderMonth: e.value });
      this.ordersGetAll(this.state.orderStatus, this.state.orderYear, e.value);
    }
  }, {
    key: 'handlerChangeOrderYear',
    value: function handlerChangeOrderYear(e) {
      this.setState({ orderYear: e.value });
      this.ordersGetAll(this.state.orderStatus, e.value, this.state.orderMonth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          api = _props.api,
          history = _props.history,
          ordersQuota = _props.ordersQuota;

      var orders = api.get('orders');
      var tables = null;
      var orderControlStatus = ordersQuota && ordersQuota.delivery && ordersQuota.delivery.order_control_status;

      if (helpers.isEmptyMap(orders)) {
        tables = Object.entries(orders).map(function (item, index) {
          return _react2.default.createElement(_OrderItem2.default, {
            orderId: item[1][0]['orderId'],
            emailHash: item[1][0]['emailHash'],
            orderDate: item[1][0]['orderDate'],
            timeQuota: item[1][0]['timeQuota'],
            timeQuotaId: item[1][0]['timeQuotaId'],
            key: item[1][0]['orderId'],
            item: item[1],
            history: history,
            stateOrderStatus: _this2.state.orderStatus,
            orderStatus: orderControlStatus && orderControlStatus,
            ordersQuota: ordersQuota
          });
        });
      }

      var OrderStatusOptions = [{ value: 1, label: 'Обрабатывается' }, { value: 2, label: 'Выполнен' }, { value: 3, label: 'Удален/Отменен' }];

      var yearOptions = helpers.getNumberSelectOptions(2012, new Date().getUTCFullYear(), false);
      var monthOptions = [{ value: 1, label: 'Январь' }, { value: 2, label: 'Февраль' }, { value: 3, label: 'Март' }, { value: 4, label: 'Апрель' }, { value: 5, label: 'Май' }, { value: 6, label: 'Июнь' }, { value: 7, label: 'Июль' }, { value: 8, label: 'Август' }, { value: 9, label: 'Сентябрь' }, { value: 10, label: 'Октябрь' }, { value: 11, label: 'Ноябрь' }, { value: 12, label: 'Декабрь' }];

      if ((this.state.orderStatus === 1 || this.state.orderStatus === 5) && tables && tables.length === 0) {
        tables = _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          _react2.default.createElement(
            'b',
            null,
            '\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432.'
          )
        );
      } else if (this.state.orderStatus === 2 && tables && tables.length === 0) {
        tables = _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          '\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u0441\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C ',
          _react2.default.createElement(
            'b',
            null,
            '\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D'
          ),
          ' \u0437\u0430 ',
          _react2.default.createElement(
            'span',
            { style: { color: '#4CAF50', fontWeight: 'bold' } },
            monthOptions[this.state.orderMonth - 1].label,
            ' ',
            this.state.orderYear
          ),
          ' \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.'
        );
      } else if (this.state.orderStatus === 3 && tables && tables.length === 0) {
        tables = _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          '\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u0441\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C ',
          _react2.default.createElement(
            'b',
            null,
            '\u0423\u0434\u0430\u043B\u0435\u043D'
          ),
          ' \u0437\u0430 ',
          _react2.default.createElement(
            'span',
            { style: { color: '#4CAF50', fontWeight: 'bold' } },
            monthOptions[this.state.orderMonth - 1].label,
            ' ',
            this.state.orderYear
          ),
          ' \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.'
        );
      }

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
                '\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B'
              )
            ),
            orderControlStatus && orderControlStatus === 5 && _react2.default.createElement(
              'p',
              { className: 'personal-explain-text', style: { color: 'red' } },
              '\u0417\u0430\u043A\u0430\u0437 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'order-filter-main' },
              _react2.default.createElement(
                'div',
                { className: 'order-filds-label-input' },
                _react2.default.createElement(
                  'label',
                  { className: 'order-filds-label', htmlFor: 'status' },
                  '\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430'
                ),
                _react2.default.createElement(_reactSelect2.default, {
                  name: 'status',
                  value: this.state.orderStatus,
                  options: OrderStatusOptions,
                  onChange: this.handleChangeOrderStatus.bind(this),
                  clearable: false,
                  searchable: false
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-filds-label-input' },
                _react2.default.createElement(
                  'label',
                  { className: 'order-filds-label', htmlFor: 'status' },
                  '\u041C\u0435\u0441\u044F\u0446'
                ),
                _react2.default.createElement(_reactSelect2.default, {
                  className: 'margin-right-10',
                  name: 'birthdate',
                  value: this.state.orderMonth,
                  options: monthOptions,
                  onChange: this.handlerChangeOrderMonth.bind(this),
                  placeholder: '',
                  clearable: false,
                  searchable: false,
                  scrollMenuIntoView: false
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-filds-label-input' },
                _react2.default.createElement(
                  'label',
                  { className: 'order-filds-label', htmlFor: 'status' },
                  '\u0413\u043E\u0434'
                ),
                _react2.default.createElement(_reactSelect2.default, {
                  name: 'birthdate',
                  value: this.state.orderYear,
                  options: yearOptions,
                  onChange: this.handlerChangeOrderYear.bind(this),
                  clearable: false,
                  searchable: false,
                  scrollMenuIntoView: false
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'orders-all' },
              tables
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Orders;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    ordersQuota: store.api.get('ordersQuota')
  };
})(Orders);

//# sourceMappingURL=Orders-compiled.js.map