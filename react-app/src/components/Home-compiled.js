'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Navigation = require('./Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('./Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _api = require('../api');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      displayImg_1: false,
      displayImg_2: true,
      displayImg_3: true
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      (0, _api.setUserInfo)(dispatch);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var seconds = (0, _helpers.setSecondsArray)(3, 4);
      var interval = (0, _helpers.setIntervalValue)(3, 4);
      this.sliderGo(seconds);
      var timerId = setInterval(function () {
        _this2.sliderGo(seconds);
      }, interval);
      this.setState({
        timerId: timerId
      });
      console.log("m", timerId);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.state.timerId);
      for (var i = 1; i <= 3; i++) {
        var clickTimeout = 'clickTimeout_' + i;
        clearTimeout(this.state[clickTimeout]);
      }
    }
  }, {
    key: 'sliderGo',
    value: function sliderGo(seconds) {
      var _this3 = this;

      var _loop = function _loop() {
        var img_1 = i + 1;
        var img_2 = i + 1 === seconds.length ? 1 : i + 2;
        var clickTimeout = i + 1;
        console.log('clickTimeout', clickTimeout);
        _this3.setState(_defineProperty({}, 'clickTimeout_' + clickTimeout, setTimeout(function () {
          var _this3$setState;

          _this3.setState((_this3$setState = {}, _defineProperty(_this3$setState, 'displayImg_' + img_1, true), _defineProperty(_this3$setState, 'displayImg_' + img_2, false), _this3$setState));
        }, seconds[i])));
      };

      for (var i = 0; i < seconds.length; i++) {
        _loop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var sliderImg_1 = (0, _classnames2.default)({
        'slider-img': true,
        'show-hide': this.state.displayImg_1
      });
      var sliderImg_2 = (0, _classnames2.default)({
        'slider-img': true,
        'show-hide': this.state.displayImg_2
      });
      var sliderImg_3 = (0, _classnames2.default)({
        'slider-img': true,
        'show-hide': this.state.displayImg_3
      });

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MenuMobile2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'animation-page-load-medium' },
          _react2.default.createElement(
            'div',
            { className: 'main-slider' },
            _react2.default.createElement('img', { className: sliderImg_1, src: 'https://www.w3schools.com/w3images/workbench.jpg' }),
            _react2.default.createElement('img', { className: sliderImg_2, src: 'https://www.w3schools.com/w3images/coffee.jpg' }),
            _react2.default.createElement('img', { className: sliderImg_3, src: 'https://www.w3schools.com/w3images/sound.jpg' })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Home);

//# sourceMappingURL=Home-compiled.js.map