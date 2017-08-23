import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
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
      comment: '',
      time_quota: 0,
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
    this.props.history.push('/sussess-page');//TODO редирект на страницу успешного завершения отправления заказа
  }

  handleChangeTimeQuota(e) {
    this.setState({time_quota: e.value});
  }

  render() {
    const { api } = this.props;
    const productsForCart = api.get('productsForCart');
    var total = null;
    console.log('productsForCart', productsForCart)
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

    const timeQuotaOptions = [
      { value: 0, label: '' },
      { value: 1, label: '9:00-9:30' },
      { value: 2, label: '9:30-10:00' },
    ];

    const quotaStyle = {
      width: '100%',
      display: 'flex',
    }

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="flex-box-between">
            <h3>Корзина</h3>
            <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
          </div>

          <table className="cart-products-table">
            <tr className="cart-tr-head">
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
          <div style={quotaStyle}>
            <label className="order-filds-label" htmlFor="time_quota">Я смогу забрать свой заказ в период с</label>
            <div style={{width: '100px'}}>
              <Select
                name="time_quota"
                value={this.state.time_quota}
                options={timeQuotaOptions}
                onChange={this.handleChangeTimeQuota.bind(this)}
                clearable={false}
                searchable={false}
              />
            </div>
          </div>
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