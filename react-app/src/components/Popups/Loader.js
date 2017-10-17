import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';
import TextO from 'react-icons/lib/fa/file-text-o';
import Mobile from 'react-icons/lib/fa/mobile';
import MdComputer from 'react-icons/lib/md/computer';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    };
  }

  render() {
    const { api } = this.props;

    var onOff = api.get('loaderStatus');
    // var onOff = true;
    const modalFadeIn = classNames({
      'animation-popup-load-fast': true,
      'modal': true,
      'fade': true,
      'in': onOff,
    });

    const transitionTiming = classNames({
      'transition-timing-linear': true,
    });

    const modalStyleOn = {
      display: 'block', paddingLeft: '15px'
    };

    const modalStyleOff = {
      display: 'none'
    };

  return(
    <div>
      <div className="modal-backdrop-white fade in" style={onOff ? modalStyleOn : modalStyleOff}></div>
      <div className={modalFadeIn} role="dialog" style={onOff ? modalStyleOn : modalStyleOff}>
        <div className="modal-dialog-loader modal-sm">
          <div className="modal-content-loader">
            <div className="modal-animation">
              <div className="modal-loader-animation__item">
                <img src="/images/loader.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Loader);
