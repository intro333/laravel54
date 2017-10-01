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
        top: (products.get('scrollTop') < 133) ? ((133 - products.get('scrollTop')) + 'px') : '1px'
      };
    } else {
      scrollTopStyle = {
        top: (products.get('scrollTop') < 126) ? ((126 - products.get('scrollTop')) + 'px') : '1px'
      };
    }

    const modalDialog = classNames({
      'modal-dialog-success': true,
      'modal-dialog-success-save': true,
      'transition-scale': this.props.successModalDisplay,
    });

    // setTimeout(dispatch(changeSuccessModalDisplay(false)), 2000);


  return(
    <div className={modalDialog} style={scrollTopStyle}>
      <div className="modal-content-success modal-content-success-save">
        <div className="modal-header-success modal-header-success-save" style={{padding: '7px'}}>
          <button type="button" className="close" style={{color: '#fff'}} onClick={this.props.handlerCloseModal}>&times;</button>
          <h4 className="modal-title">Данные обновлены.</h4>
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
