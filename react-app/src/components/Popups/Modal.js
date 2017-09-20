import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    };
  }

  render() {
    const modalFadeIn = classNames({
      'animation-popup-load-fast': true,
      'modal': true,
      'fade': true,
      'in': this.props.fadeIn
    });

    const modalStyleOn = {
      display: 'block', paddingLeft: '15px'
    };
    const modalStyleOff = {
      display: 'none'
    };

  return(
    <div>
      <div className="modal-backdrop fade in" style={this.props.modalDisplay ? modalStyleOn : modalStyleOff}></div>
      <div className={modalFadeIn} role="dialog" style={this.props.modalDisplay ? modalStyleOn : modalStyleOff}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.handlerCloseModal}>&times;</button>
              <h4 className="modal-title">{this.props.textHeader && this.props.textHeader}</h4>
            </div>
            {/*<div className="modal-body">*/}
              {/*<p>{this.props.textBody && this.props.textBody}</p>*/}
            {/*</div>*/}
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={this.props.handlerCloseModal}>Нет</button>
              <button type="button" className="btn btn-default" onClick={this.props.handlerSuccessModal}>Да</button>
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
}))(Modal);
