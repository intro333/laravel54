import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';
import * as modelActions from '../../actions';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handlerCloseModal() {
    const { dispatch } = this.props;
    dispatch(modelActions.setOpenCloseModal({
      show: false,
      textHeader: '',
      textAlign: true,
      function: null
    }));
  }

  handlerYesModal() {
    const { openCloseModal } = this.props;
    openCloseModal.function();
    this.handlerCloseModal();
  }

  render() {

    const { openCloseModal } = this.props;
    const modalFadeIn = classNames({
      'animation-popup-load-fast': true,
      'modal': true,
      'fade': true,
      'in': openCloseModal.show
    });

    const modalStyleOn = {
      display: 'block', paddingLeft: '15px'
    };
    const modalStyleOff = {
      display: 'none'
    };

    const modalHeader = classNames({
      'modal-header': true,
      'align-center': openCloseModal.textAlign
    });

  return(
    <div>
      <div className="modal-backdrop fade in" style={openCloseModal.show ? modalStyleOn : modalStyleOff}></div>
      <div className={modalFadeIn} role="dialog" style={openCloseModal.show ? modalStyleOn : modalStyleOff}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className={modalHeader}>
              <button type="button" className="close" onClick={this.handlerCloseModal.bind(this)}>&times;</button>
              <h4 className="modal-title">{openCloseModal.textHeader && openCloseModal.textHeader}</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={this.handlerCloseModal.bind(this)}>Нет</button>
              <button type="button" className="btn btn-default" onClick={this.handlerYesModal.bind(this)}>Да</button>
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
  openCloseModal: store.session.get('openCloseModal'),
}))(Modal);
