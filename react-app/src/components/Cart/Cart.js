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
  sendOrder,
} from '../../api';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

  }

  componentWillMount() {
    const { dispatch } = this.props;
    showProductsInCart(dispatch);
  }

  handleChangeComment(event) {
    this.setState({comment: event.target.value});
  }

  handlerSendOrder() {
    const { dispatch } = this.props;
    const data = {
      comment: this.state.comment
    };
    sendOrder(dispatch, data);
    this.props.history.push('/');//TODO сделать редирект на страницу успешного завершения отправления заказа
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
            <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
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
          <textarea
            name="comment"
            className="cart-comment"
            value={this.state.comment}
            onChange={this.handleChangeComment.bind(this)}
            placeholder="Оставьте комментарий к заказу..."
          />
          <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
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