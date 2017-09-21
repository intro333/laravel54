import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';
import { setModalLoaderCartSentStatus } from '../../actions';

class ModalLoaderCartSent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    };
  }

  render() {
    const { api } = this.props;
    const modalFadeIn = classNames({
      'animation-popup-load-fast': true,
      'modal': true,
      'fade': true,
      'in': api.get('modalLoaderCartSentStatus'),
    });

    const modalStyleOn = {
      display: 'block', paddingLeft: '15px'
    };
    const modalStyleOff = {
      display: 'none'
    };

  return(
    <div>
      <div className="modal-backdrop-white fade in" style={api.get('modalLoaderCartSentStatus') ? modalStyleOn : modalStyleOff}></div>
      <div className={modalFadeIn} role="dialog" style={api.get('modalLoaderCartSentStatus') ? modalStyleOn : modalStyleOff}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Отправка заказа...</h4>
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
}))(ModalLoaderCartSent);
