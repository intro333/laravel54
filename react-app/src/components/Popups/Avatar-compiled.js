'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _reactAvatarEditor = require('react-avatar-editor');

var _reactAvatarEditor2 = _interopRequireDefault(_reactAvatarEditor);

var _api = require('../../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));
  }

  _createClass(Avatar, [{
    key: 'handlerUploadPhoto',
    value: function handlerUploadPhoto(e) {
      var session = this.props.session;

      var file = e.target.files[0];
      console.log("file", e.target.files[0]);
      console.log("file", file);
      var data = {
        image: file
      };
      var dispatch = this.props.dispatch;

      (0, _api.changePhotoPersonalData)(dispatch, data);
    }
  }, {
    key: 'render',
    value: function render() {
      var session = this.props.session;


      var showPopupAvatarElement = (0, _classnames2.default)({
        'popup_avatar-elem': true,
        'show-hide': this.props.avatar,
        'show-hide-flex': !this.props.avatar
      });

      return _react2.default.createElement(
        'div',
        { className: showPopupAvatarElement },
        _react2.default.createElement('div', { className: 'popup_avatar-elem_bg' }),
        _react2.default.createElement(
          'div',
          { id: 'blok-avatar-elem' },
          _react2.default.createElement(_reactAvatarEditor2.default, {
            image: 'https://content.foto.my.mail.ru/vk/330806631/_musicplaylistcover/i-1.jpg',
            width: 350,
            height: 350,
            border: 50,
            scale: 1.2
          }),
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
              _react2.default.createElement('input', { name: 'personal-photo', id: 'personal-photo', required: '', type: 'file', onChange: this.handlerUploadPhoto.bind(this) })
            )
          )
        )
      );
    }
  }]);

  return Avatar;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session
  };
})(Avatar);

//# sourceMappingURL=Avatar-compiled.js.map