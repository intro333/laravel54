'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/index.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _reactBootstrapDatePicker = require('react-bootstrap-date-picker');

var _reactBootstrapDatePicker2 = _interopRequireDefault(_reactBootstrapDatePicker);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PersonalAccount = function (_Component) {
  _inherits(PersonalAccount, _Component);

  function PersonalAccount(props) {
    _classCallCheck(this, PersonalAccount);

    var _this = _possibleConstructorReturn(this, (PersonalAccount.__proto__ || Object.getPrototypeOf(PersonalAccount)).call(this, props));

    _this.state = {
      date: new Date().toISOString(),
      name: '',
      sname: '',
      mname: '',
      email: '',
      phone: '',
      birthdate: ''
    };
    return _this;
  }

  _createClass(PersonalAccount, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          session = _props.session;

      (0, _api.setUserInfo)(dispatch);
      var userInfo = session.get('userInfo');
      this.setState({
        name: userInfo['name'],
        sname: userInfo['sname'],
        mname: userInfo['mname'],
        email: userInfo['email'],
        phone: userInfo['phone'],
        birthdate: userInfo['birthdate']
      });
    }
  }, {
    key: 'handlerChangeDate',
    value: function handlerChangeDate(value) {
      this.setState({
        birthdate: value
      });
    }
  }, {
    key: 'handlerChangeName',
    value: function handlerChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: 'handlerChangeSName',
    value: function handlerChangeSName(e) {
      this.setState({
        sname: e.target.value
      });
    }
  }, {
    key: 'handlerChangeMName',
    value: function handlerChangeMName(e) {
      this.setState({
        mname: e.target.value
      });
    }
  }, {
    key: 'handlerChangeEmail',
    value: function handlerChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: 'handlerChangePhone',
    value: function handlerChangePhone(e) {
      this.setState({
        phone: e.target.value
      });
    }
  }, {
    key: 'handlerChangeBirthdate',
    value: function handlerChangeBirthdate(e) {
      this.setState({
        birthdate: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          session = _props2.session;

      var userInfo = session.get('userInfo');

      console.log(userInfo);

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MenuMobile2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(
            'h1',
            null,
            '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445'
          ),
          _react2.default.createElement(
            'p',
            { className: 'personal-explain-text' },
            '\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C \u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0451 \u0444\u043E\u0442\u043E.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'personal-container' },
            _react2.default.createElement(
              'div',
              { className: 'image-container' },
              _react2.default.createElement(
                'div',
                { className: 'customer-image' },
                _react2.default.createElement('img', { src: '/images/no-image.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'customer-image-button' },
                _react2.default.createElement(
                  'div',
                  { className: 'register-button', id: 'add-avatar' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E'
                  )
                ),
                _react2.default.createElement('input', { name: 'personal-photo', id: 'personal-photo', required: '', type: 'file' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'customer-data-container' },
              _react2.default.createElement(
                'form',
                { action: '/personal', method: 'POST', id: 'personal-data-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'fname' },
                    '\u0418\u043C\u044F'
                  ),
                  _react2.default.createElement('input', { id: 'fname', name: 'fname', type: 'text', value: this.state.name, onChange: this.handlerChangeName.bind(this) })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'sname' },
                    '\u0424\u0430\u043C\u0438\u043B\u0438\u044F'
                  ),
                  _react2.default.createElement('input', { id: 'sname', name: 'sname', type: 'text', value: this.state.sname, onChange: this.handlerChangeSName.bind(this) })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'mname' },
                    '\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E'
                  ),
                  _react2.default.createElement('input', { id: 'mname', name: 'mname', type: 'text', value: this.state.mname ? this.state.mname : '', onChange: this.handlerChangeMName.bind(this) })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'gender' },
                    '\u041F\u043E\u043B'
                  ),
                  _react2.default.createElement(
                    'select',
                    { className: 'form-control', id: 'gender', name: 'gender' },
                    _react2.default.createElement(
                      'option',
                      { value: 'NO' },
                      '\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'M' },
                      '\u041C\u0443\u0436\u0441\u043A\u043E\u0439'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'F' },
                      '\u0416\u0435\u043D\u0441\u043A\u0438\u0439'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'email' },
                    'Email'
                  ),
                  _react2.default.createElement('input', { id: 'email', name: 'email', type: 'email', value: this.state.email, onChange: this.handlerChangeEmail.bind(this) })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'phone' },
                    '\u0422\u0435\u043B\u0435\u0444\u043E\u043D'
                  ),
                  _react2.default.createElement(_reactInputMask2.default /*{...this.props}*/, { value: this.state.phone ? this.state.phone : '', mask: '+7\\(999\\) 999 99 99', maskChar: ' ', onChange: this.handlerChangePhone.bind(this), name: 'phone', placeholder: '+7(___) ___ __ __' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'birthdate' },
                    '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F'
                  ),
                  _react2.default.createElement(_reactBootstrapDatePicker2.default, {
                    id: 'birthdate',
                    value: this.state.birthdate,
                    onChange: this.handlerChangeDate.bind(this),
                    dateFormat: 'MM DD YYYY',
                    calendarPlacement: 'top'
                  })
                ),
                _react2.default.createElement(
                  'p',
                  { style: { color: 'red', display: 'none' }, className: 'error_message_for_create' },
                  '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u043E\u0439.'
                ),
                _react2.default.createElement('input', { id: 'personal-submit', className: 'register-button', value: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435', type: 'submit' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'customer-data-container' },
              _react2.default.createElement(
                'form',
                { action: '/change-password', method: 'POST', id: 'change-password-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'password-old' },
                    '\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C'
                  ),
                  _react2.default.createElement('input', { id: 'password-old', name: 'password-old', type: 'password', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'password' },
                    '\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C'
                  ),
                  _react2.default.createElement('input', { id: 'password', name: 'password', type: 'password', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'personal-filds-label-input' },
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'password-again' },
                    '\u041F\u043E\u0432\u0442\u043E\u0440'
                  ),
                  _react2.default.createElement('input', { id: 'password-again', name: 'password-again', type: 'password', placeholder: '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                _react2.default.createElement('input', { id: 'change-password-submit', className: 'register-button', value: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C', type: 'submit' }),
                _react2.default.createElement(
                  'div',
                  { style: { color: 'red', display: 'none', marginTop: '5px' }, className: 'error_message' },
                  '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 3 \u043F\u043E\u043B\u044F \u0441 \u043F\u0430\u0440\u043E\u043B\u044F\u043C\u0438.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PersonalAccount;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(PersonalAccount);

//# sourceMappingURL=PersonalAccount-compiled.js.map