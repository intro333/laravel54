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
  showOrdersQuotaInCart,
  sendOrder,
  checkTimeQuota,
} from '../../api';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      time_quota: 0,
      errorMessageCountQuota: ''
    };

  }

  componentWillMount() {
    const { dispatch } = this.props;
    showProductsInCart(dispatch);
    showOrdersQuotaInCart(dispatch);
  }

  componentWillReceiveProps(props) {
    const { dispatch, session } = props || this.props;
    if (session.get('errors')) {
      const errorMessageCountQuota = session.get('errors').errorTime;
      this.setState({
        errorMessageCountQuota: errorMessageCountQuota,
        time_quota: 0
      });
      showOrdersQuotaInCart(dispatch);
    }
  }

  handleChangeComment(event) {
    this.setState({comment: event.target.value});
  }

  handlerSendOrder() {
    const { history, dispatch } = this.props;
    if (this.state.time_quota !== 0) {
      const data = {
        comment: this.state.comment,
        time_quota: this.state.time_quota
      };
      sendOrder(dispatch, data, history);
    }
  }

  handleChangeTimeQuota(e) {
    this.setState({time_quota: e.value});
  }

  render() {
    const { api } = this.props;
    const productsForCart = api.get('productsForCart');
    const ordersQuota = api.get('ordersQuota');
    // checkTimeQuota(dispatch, {time_quota: this.state.time_quota}); //TODO чекаем кол-во квот
    // const check = api.get('checkTimeQuota');                       //TODO чекаем кол-во квот
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

    var timeQuotaOptions = [{value: 0, label: ''}];
    var delivery = null;
    if (ordersQuota.ordersQuota) {
      ordersQuota.ordersQuota.map(q => timeQuotaOptions.push({value: q.orders_quota_id, label: q.time_quota}));
    }

    const quotaStyle = {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
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
          <label className="order-filds-label">Дата доставки {ordersQuota.delivery ? ordersQuota.delivery.delivery_date : ''}</label>
          <div style={quotaStyle}>
            <label className="order-filds-label" htmlFor="time_quota">Я смогу забрать свой заказ в период с</label>
            <div style={{width: '120px', marginLeft: '10px'}}>
              <Select
                name="time_quota"
                value={this.state.time_quota}
                options={timeQuotaOptions}
                onChange={this.handleChangeTimeQuota.bind(this)}
                placeholder=''
                clearable={false}
                searchable={false}
              />
            </div>
          </div>
          <label className="order-filds-label" style={{color: 'red', fontSize: '12px'}}>{this.state.errorMessageCountQuota}</label>
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