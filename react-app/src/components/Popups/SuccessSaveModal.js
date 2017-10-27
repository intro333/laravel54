import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';
import { changeSuccessModalDisplay } from '../Products/actions';

class SuccessSaveModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  render() {
    const { products } = this.props;
    var windowWidth  = window.innerWidth;
    var scrollTopStyle = '1px';
    var resize = products.get('resize');

    if ((resize ? resize : windowWidth) > 540) {
      scrollTopStyle = {
        top: (products.get('scrollTop') < 113) ? ((113 - products.get('scrollTop')) + 'px') : '1px'
      };
    } else {
      scrollTopStyle = {
        top: (products.get('scrollTop') < 105) ? ((105 - products.get('scrollTop')) + 'px') : '1px'
      };
    }

    const modalDialog = classNames({
      'modal-dialog-success': true,
      'modal-dialog-success-save': true,
      'transition-scale': this.props.successModalDisplay,
    });

    const colorBack = { background: this.props.colorBack }
    const modalHeaderSuccess = {
      padding: '7px',
      color: this.props.colorText
    }
    // setTimeout(dispatch(changeSuccessModalDisplay(false)), 2000);


  return(
    <div className={modalDialog} style={scrollTopStyle}>
      <div className="modal-content-success modal-content-success-save" style={colorBack}>
        <div className="modal-header-success modal-header-success-save" style={modalHeaderSuccess}>
          <button type="button" className="close" onClick={this.props.handlerCloseModal}>&times;</button>
          <h4 className="modal-title">{this.props.modalTitle}</h4>
          <h6 className="modal-title">{this.props.modalSubTitle && this.props.modalSubTitle}</h6>
        </div>
      </div>
    </div>
  );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  products: store.products,
  productsForCart: store.api.get('productsForCart'),
}))(SuccessSaveModal);
