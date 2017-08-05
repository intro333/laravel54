import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import CartItem from '../Cart/CartItem';
import {
  showProductsInCart,
} from '../../api';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    showProductsInCart(dispatch);
  }

  render() {
    const { api } = this.props;
    const productsForCart = api.get('productsForCart');
    var total = null;

    const productsTd = productsForCart.map((item) =>
      <CartItem
        key={item.productId}
        item={item}

      />
    );

    total = productsForCart.reduce((total, item) => {
        return total + ((item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10));
      }, 0
    );

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="flex-box-between">
            <h3>Корзина</h3>
            <div className="cart-button">Отправить заказ</div>
          </div>

          <table id="cart-products-table">
            <tr>
              <th className="table-30-procent">Продукт</th>
              <th className="table-25-procent">Цена</th>
              <th className="table-25-procent">Количество</th>
              <th className="table-10-procent">Стоимость</th>
              <th className="table-10-procent"></th>
            </tr>
            { productsTd }
          </table>
          <div className="cart-order__total">Итог:&nbsp;<span>{ total } ₽</span></div>
          <div className="cart-button">Отправить заказ</div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Cart);

// productId={item.productId}
// count={item.count}
// imagePath={item.imagePath}
// name={item.name}
// barCode={item.barCode}
// price={item.price}
// unit={item.unit}