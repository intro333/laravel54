import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import { connect } from 'react-redux';

class SuccessModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  componentWillMount() {
    //console.log(3, scrollTop);
  }

  // componentWillReceiveProps(next) {
  //   console.log(3, next.products.get('scrollTop'));
  // }

  handlerGoToCart() {
    const { history } = this.props;
    history.push('/cart');
  }

  dec(a, b, c, s) {
  var variants = [a, b, c];
  var index = s % 100;
  if (index >=11 && index <= 14) {
    index = 0;
  } else {
    index = (index %= 10) < 5 ? (index > 2 ? 2 : index): 0;
  }
  return(variants[index]);
}

  render() {

    var total = 0;
    const { session, productsForCart, products, scrollTop } = this.props;

    total = productsForCart.reduce((total, item) => {
        return total + ((item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10));
      }, 0
    );

    const unit = this.dec("товаров", "товар", "товара", session.get("productCounts")); // склоняем по падежам
    const scrollTopStyle = {
      top: (products.get('scrollTop') < 98) ? ((98 - products.get('scrollTop')) + 'px') : '1px'
    };

    const modalDialog = classNames({
      'modal-dialog-success': true,
      'transition-scale': this.props.successModalDisplay,
    });
  return(
    <div className={modalDialog} style={scrollTopStyle}>
      <div className="modal-content-success">
        <div className="modal-header-success">
          <button type="button" className="close" onClick={this.props.handlerCloseModal}>&times;</button>
          <h4 className="modal-title" style={{marginBottom: '5px'}}><span style={{textDecoration: 'underline'}}>Корзина</span>: {session.get("productCounts")} {unit} <b>{total}</b> ₽</h4>
          <button type="button" className="btn btn-default" style={{width: '100%'}} onClick={this.handlerGoToCart.bind(this)}>Оформить</button>
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
}))(SuccessModal);
