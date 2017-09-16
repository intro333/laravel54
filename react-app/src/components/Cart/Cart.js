import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import CartItem from '../Cart/CartItem';
import * as modelActions from '../../actions';
import Modal  from '../Popups/Modal';
import {
  showProductsInCart,
  showOrdersQuotaInCart,
  sendOrder,
  clearCart,
  checkTimeQuota,
} from '../../api';
import {isEmptyMap, scrollToElement} from '../../helpers';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      time_quota: 0,
      cart_error: '',
      comment_count_error: '',
      selectError: {
        borderColor: ''
      },
      fadeIn: false,
      modalDisplay: false,
      textHeader: '',
      textBody: '',
    };

  }

  componentWillMount() {
    const {dispatch} = this.props;
    showProductsInCart(dispatch);
    showOrdersQuotaInCart(dispatch);
  }

  componentWillReceiveProps(next) {
    if (next.session.get('productCounts') === 0) {
      next.history.push('/')
    }
  }

  handleChangeComment(event) {
    if (event.target.value.length < 1000) {
      this.setState({comment: event.target.value});
      this.setState({
        comment_count_error: ''
      });
    } else {
      this.setState({
        comment_count_error: 'Максимальное количество символов 1000'
      });
    }
  }

  handleChangeTimeQuota(e) {
    const {dispatch} = this.props;
    dispatch(modelActions.setErrors(''));
    this.setState({
      cart_error: '',
      selectError: {
        borderColor: ''//#d9d9d9 #ccc #b3b3b3
      },
    });
    this.setState({time_quota: e.value});
  }

  handlerSendOrder() {
    const {dispatch, history, ordersQuota} = this.props;
    const data = {
      comment: this.state.comment,
      time_quota: this.state.time_quota
    };
    if (this.state.time_quota !== 0) {
      sendOrder(dispatch, data, history);
    } else if (ordersQuota.ordersQuota && ordersQuota.ordersQuota.length === 0) {
      sendOrder(dispatch, data, history)
    } else {
      scrollToElement('.scroll-to-error', 1500);
      this.setState({
        cart_error: 'Выберите удобный период получения заказа.',
        selectError: {
          borderColor: 'indianred'
        }
      });
    }
  }

  handlerClearCart() {
    this.setState({
      fadeIn: true,
      modalDisplay: true,
      textHeader: 'Удалить все товары из корзины?',
      textBody: 'Удалить все товары из корзины?',
    });
  }

  handlerCloseModal() {
    this.setState({
      fadeIn: false,
      modalDisplay: false,
    });
  }

  handlerSuccessModal() {
    const {dispatch, history} = this.props;
    clearCart(dispatch, history);
  }

  render() {
    const {ordersQuota, productsForCart, errorMessageCountQuota} = this.props;
    // checkTimeQuota(dispatch, {time_quota: this.state.time_quota}); //TODO чекаем кол-во квот
    // const check = api.get('checkTimeQuota');                       //TODO чекаем кол-во квот
    var total = null;

    const productsTd = isEmptyMap(productsForCart) && productsForCart.map((item) =>
        <CartItem
          keyProductId={item.productId}
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
    ordersQuota.ordersQuota && ordersQuota.ordersQuota.length !== 0 && ordersQuota.ordersQuota.forEach(q => q.orders_quota_id !== 1 &&
    timeQuotaOptions.push({value: q.orders_quota_id, label: q.time_quota}));

    const quotaStyle = {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    };

    var ordersQoutaDiv = <div style={quotaStyle}>
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
          style={this.state.selectError}
        />
      </div>
    </div>;

    var OrderNonQuota = <label className="order-filds-label" htmlFor="time_quota" style={{marginBottom: '15px'}}>
      Заказ можно получить в любое удобное время в указанный день доставки.Периоды получения заказа закончились.
    </label>;
    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <Modal
          fadeIn={this.state.fadeIn}
          modalDisplay={this.state.modalDisplay}
          handlerCloseModal={this.handlerCloseModal.bind(this)}
          handlerSuccessModal={this.handlerSuccessModal.bind(this)}
          textHeader={this.state.textHeader}
          textBody={this.state.textBody}
        />
        <div className="main-container">
          <div className="flex-box-between">
            <h3>Корзина</h3>
            <div style={{display: 'flex'}}>
              <div onClick={this.handlerClearCart.bind(this)} className="cart-button-clear">Очистить корзину</div>
              <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
            </div>
          </div>

          <table className="cart-products-table">
            <thead>
            <tr className="cart-tr-head">
              <th className="table-30-procent">Продукт</th>
              <th className="table-25-procent">Цена</th>
              <th className="table-25-procent">Количество</th>
              <th className="table-10-procent">Стоимость</th>
              <th className="table-10-procent"></th>
            </tr>
            </thead>
            <tbody>
            { productsTd }
            </tbody>
          </table>
          <div className="cart-order__total">Сумма:&nbsp;<span>{ total } ₽</span></div>
          <p className="order-filds-label" style={{color: 'red', fontSize: '12px', margin: '0'}}>
            {this.state.comment_count_error !== '' && this.state.comment_count_error}
          </p>
          <textarea
            name="comment"
            className="cart-comment"
            value={this.state.comment}
            onChange={this.handleChangeComment.bind(this)}
            placeholder="Оставьте комментарий к заказу..."
          />
          <label className="order-filds-label">Дата
            доставки {ordersQuota.delivery ? ordersQuota.delivery.delivery_date : ''}</label>
          {ordersQuota.ordersQuota && ordersQuota.ordersQuota.length !== 0 ? ordersQoutaDiv : OrderNonQuota}
          <label className="order-filds-label scroll-to-error"
                 style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>
            {
              this.state.cart_error !== '' ? this.state.cart_error : errorMessageCountQuota
            }
          </label>
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
  ordersQuota: store.api.get('ordersQuota'),
  productsForCart: store.api.get('productsForCart'),
  errorMessageCountQuota: store.session.get('errors').errorTime,
}))(Cart);