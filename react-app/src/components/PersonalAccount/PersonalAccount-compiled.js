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

require('react-select/dist/react-select.css');

require('../../theme/css/index.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _helpers = require('../../helpers');

var helpers = _interopRequireWildcard(_helpers);

var _SuccessSaveModal = require('../Popups/SuccessSaveModal');

var _SuccessSaveModal2 = _interopRequireDefault(_SuccessSaveModal);

var _actions = require('../Products/actions');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _actions2 = require('../../actions');

var modelActions = _interopRequireWildcard(_actions2);

var _api = require('../../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      date: new Date(),
      name: '',
      sname: '',
      mname: '',
      email: '',
      phone: '',
      birthdate: false,
      birthdateDay: false,
      birthdateMonth: false,
      birthdateYear: false,
      gender: '',
      avatar: true,
      errorMessageForCreate: true

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
        gender: userInfo['gender']
      });

      if (userInfo['birthdate']) {
        this.setState({
          birthdate: userInfo['birthdate'],
          birthdateDay: new Date(userInfo['birthdate']).getUTCDate(),
          birthdateMonth: new Date(userInfo['birthdate']).getUTCMonth() + 1,
          birthdateYear: new Date(userInfo['birthdate']).getUTCFullYear()
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function (event) {
        var dispatch = _this2.props.dispatch;

        var target = event.target || event.srcElement;
        var scrollTop = target.body.scrollTop;
        dispatch((0, _actions.setScrollTop)(scrollTop));
      });
    }
  }, {
    key: 'handlerCloseModal',
    value: function handlerCloseModal() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions.changeSuccessModalDisplay)(false));
    }
  }, {
    key: 'handlerChangeDateDay',
    value: function handlerChangeDateDay(e) {
      this.setState({
        birthdateDay: e.value,
        birthdate: this.state.birthdateYear + '-' + this.state.birthdateMonth + '-' + e.value
      });
    }
  }, {
    key: 'handlerChangeDateMonth',
    value: function handlerChangeDateMonth(e) {
      this.setState({
        birthdateMonth: e.value,
        birthdate: this.state.birthdateYear + '-' + e.value + '-' + this.state.birthdateDay
      });
    }
  }, {
    key: 'handlerChangeDateYear',
    value: function handlerChangeDateYear(e) {
      this.setState({
        birthdateYear: e.value,
        birthdate: e.value + '-' + this.state.birthdateMonth + '-' + this.state.birthdateDay
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
    key: 'handlerChangePhone',
    value: function handlerChangePhone(e) {
      this.setState({
        phone: e.target.value
      });
    }
  }, {
    key: 'handleChangeGender',
    value: function handleChangeGender(e) {
      this.setState({ gender: e.value });
    }
  }, {
    key: 'handlerUpdatePersonalData',
    value: function handlerUpdatePersonalData() {
      var dispatch = this.props.dispatch;


      var data = {
        name: this.state.name,
        sname: this.state.sname,
        mname: this.state.mname,
        email: this.state.email,
        phone: this.state.phone,
        gender: this.state.gender,
        birthdate: this.state.birthdate
      };

      if (this.state.name !== '' && this.state.sname !== '') {
        this.setState({
          errorMessageForCreate: true
        });
        dispatch(modelActions.setLoaderStatus(true));
        (0, _api.updatePersonalData)(dispatch, data);
      } else {
        this.setState({
          errorMessageForCreate: false
        });
      }
    }
  }, {
    key: 'handlerChangePhoto',
    value: function handlerChangePhoto() {
      this.setState({
        avatar: false
      });
    }
  }, {
    key: 'handlerInputOnFocus',
    value: function handlerInputOnFocus() {
      this.setState({
        errorMessageForCreate: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          session = _props2.session,
          api = _props2.api,
          products = _props2.products;

      var userInfo = session.get('userInfo');
      var genderOptions = [{ value: 0, label: 'Не выбран' }, { value: 1, label: 'Мужской' }, { value: 2, label: 'Женский' }];
      var monthOptions = [{ value: 0, label: '' }, { value: 1, label: 'Январь' }, { value: 2, label: 'Февраль' }, { value: 3, label: 'Март' }, { value: 4, label: 'Апрель' }, { value: 5, label: 'Май' }, { value: 6, label: 'Июнь' }, { value: 7, label: 'Июль' }, { value: 8, label: 'Август' }, { value: 9, label: 'Сентябрь' }, { value: 10, label: 'Октябрь' }, { value: 11, label: 'Ноябрь' }, { value: 12, label: 'Декабрь' }];
      var dayOptions = helpers.getNumberSelectOptions(1, 31);
      var yearOptions = helpers.getNumberSelectOptions(1900, new Date().getUTCFullYear() - 10);

      var errorMessageForCreate = (0, _classnames2.default)({
        'error_message_for_create': true,
        'fade': this.state.errorMessageForCreate,
        'in': !this.state.errorMessageForCreate
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_MenuMobile2.default, null),
          _react2.default.createElement(_SuccessSaveModal2.default, {
            handlerCloseModal: this.handlerCloseModal.bind(this),
            successModalDisplay: products.get('successModalDisplay'),
            modalTitle: '\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.',
            colorBack: '#4CAF50',
            colorText: '#fff'
          }),
          _react2.default.createElement(
            'div',
            { className: 'main-container' },
            _react2.default.createElement(
              'h2',
              null,
              '\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442'
            ),
            _react2.default.createElement(
              'p',
              { className: 'personal-explain-text' },
              '\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'personal-container animation-page-load-medium' },
              _react2.default.createElement(
                'form',
                { action: '/personal', method: 'POST', id: 'personal-data-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'customer-data-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'fname' },
                      '\u0418\u043C\u044F*'
                    ),
                    _react2.default.createElement('input', { id: 'fname', name: 'fname', type: 'text',
                      value: this.state.name, onChange: this.handlerChangeName.bind(this),
                      onFocus: this.handlerInputOnFocus.bind(this) })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'sname' },
                      '\u0424\u0430\u043C\u0438\u043B\u0438\u044F*'
                    ),
                    _react2.default.createElement('input', { id: 'sname', name: 'sname', type: 'text', value: this.state.sname,
                      onChange: this.handlerChangeSName.bind(this), onFocus: this.handlerInputOnFocus.bind(this) })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'mname' },
                      '\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E'
                    ),
                    _react2.default.createElement('input', { id: 'mname', name: 'mname', type: 'text', value: this.state.mname ? this.state.mname : '',
                      onChange: this.handlerChangeMName.bind(this) })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'customer-data-container' },
                  _react2.default.createElement('input', { readOnly: true, type: 'hidden', name: 'birthdate', value: this.state.birthdate }),
                  _react2.default.createElement(
                    'label',
                    { className: 'personal-filds-label', htmlFor: 'birthdate' },
                    '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'div',
                      { className: 'personal-select-birdthdate-group' },
                      _react2.default.createElement(_reactSelect2.default, {
                        name: 'birthdate',
                        className: 'margin-right-10',
                        value: this.state.birthdateDay ? this.state.birthdateDay : '',
                        options: dayOptions,
                        onChange: this.handlerChangeDateDay.bind(this),
                        placeholder: '',
                        clearable: false,
                        searchable: true,
                        scrollMenuIntoView: false
                      }),
                      _react2.default.createElement(_reactSelect2.default, {
                        className: 'margin-right-10',
                        name: 'birthdate',
                        value: this.state.birthdateMonth ? this.state.birthdateMonth : '',
                        options: monthOptions,
                        onChange: this.handlerChangeDateMonth.bind(this),
                        placeholder: '',
                        clearable: false,
                        searchable: false,
                        scrollMenuIntoView: false
                      }),
                      _react2.default.createElement(_reactSelect2.default, {
                        name: 'birthdate',
                        value: this.state.birthdateYear ? this.state.birthdateYear : '',
                        options: yearOptions,
                        onChange: this.handlerChangeDateYear.bind(this),
                        placeholder: '',
                        clearable: false,
                        searchable: true,
                        scrollMenuIntoView: false
                      })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'gender' },
                      '\u041F\u043E\u043B'
                    ),
                    _react2.default.createElement(_reactSelect2.default, {
                      name: 'gender',
                      value: this.state.gender,
                      options: genderOptions,
                      onChange: this.handleChangeGender.bind(this),
                      placeholder: '\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D',
                      clearable: false,
                      searchable: false
                    })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'email' },
                      'Email'
                    ),
                    _react2.default.createElement('input', { id: 'email', name: 'email', type: 'email', value: this.state.email, disabled: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'personal-filds-label-input' },
                    _react2.default.createElement(
                      'label',
                      { className: 'personal-filds-label', htmlFor: 'phone' },
                      '\u0422\u0435\u043B\u0435\u0444\u043E\u043D'
                    ),
                    _react2.default.createElement(_reactInputMask2.default, {
                      id: 'phone',
                      value: this.state.phone ? this.state.phone : '',
                      mask: '+7\\(999\\) 999 99 99', maskChar: ' ',
                      onChange: this.handlerChangePhone.bind(this),
                      name: 'phone',
                      placeholder: '+7(___) ___ __ __' })
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'person-success-button-div' },
                _react2.default.createElement(
                  'p',
                  { className: errorMessageForCreate },
                  '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u043E\u0439.'
                ),
                _react2.default.createElement('input', { readOnly: true, id: 'personal-submit',
                  className: 'register-button',
                  style: { width: '30%' }, value: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435',
                  onClick: this.handlerUpdatePersonalData.bind(this) })
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return PersonalAccount;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    products: store.products
  };
})(PersonalAccount);

//# sourceMappingURL=PersonalAccount-compiled.js.map