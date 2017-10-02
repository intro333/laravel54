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
import { Map } from 'immutable';
import {
  showProductsInCart,
  showOrdersQuotaInCart,
  showCurrentOrder,
  sendOrder,
  clearCart,
  checkTimeQuota,
} from '../../api';
import {isEmptyMap, isEmptyArray, scrollToElement} from '../../helpers';
import Footer from '../Navigation/Footer';

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
      function: null,
    };

  }

  componentWillMount() {
    const { dispatch } = this.props;
    showProductsInCart(dispatch);
    showOrdersQuotaInCart(dispatch);
    showCurrentOrder(dispatch);
  }

  componentWillReceiveProps(next) {
    if (next.session.get('productCounts') === 0) {
      const {dispatch, history} = this.props;
      clearCart(dispatch, history);
      next.history.push('/');
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    const map = Map;
    dispatch(modelActions.setCurrentOrder(map()));
  }

  handleChangeComment(event) {
    const { currentOrder } = this.props;
    const comment = isEmptyArray(currentOrder) && isEmptyArray(currentOrder['four']) && currentOrder['four'].comment ? currentOrder['four'].comment : '';
    if (event.target.value.length < 1000) {
      if (comment !== '' && event.target.value === '') {
        this.setState({
          comment: ' '
        });
      } else this.setState({comment: event.target.value});
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
    const {dispatch, history, ordersQuota, currentOrder} = this.props;
    if (ordersQuota.delivery && ordersQuota.delivery.status) {
      const data = {
        comment: this.state.comment,
        time_quota: this.state.time_quota
      };
      if(isEmptyArray(currentOrder) && isEmptyArray(currentOrder['one'])) {
        this.setState({
          fadeIn: true,
          modalDisplay: true,
          textHeader: 'У Вас уже есть один заказ в обработке.Перейти к заказу?',
          function: () => {
            const { history } = this.props;
            history.push('/orders');
          }
        });
      } else {
        if (this.state.time_quota !== 0) {
          sendOrder(dispatch, data, history);
          dispatch(modelActions.setModalLoaderCartSentStatus(true));
          history.push('/sussess-page');
        } else if (ordersQuota.ordersQuota && ordersQuota.ordersQuota.length === 0) {
          sendOrder(dispatch, data, history);
          dispatch(modelActions.setModalLoaderCartSentStatus(true));
          history.push('/sussess-page');
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
    } else {
      this.setState({
        fadeIn: true,
        modalDisplay: true,
        textHeader: 'Дата доставки закрыта. Узнать подробнее?',
        function: () => {
          const { history } = this.props;
          history.push('/orders');//TODO сделать редирект на нужную страницу
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
      function: () => {
        const {dispatch, history} = this.props;
        clearCart(dispatch, history);
      }
    });
  }

  handlerCloseModal() {
    this.setState({
      fadeIn: false,
      modalDisplay: false,
    });
  }

  handlerSuccessModal() {
    this.state.function();
  }

  render() {
    const { ordersQuota, productsForCart, errorMessageCountQuota, currentOrder, session } = this.props;
    // checkTimeQuota(dispatch, {time_quota: this.state.time_quota}); //TODO чекаем кол-во квот
    // const check = api.get('checkTimeQuota');                       //TODO чекаем кол-во квот
    var total = 0;

    const productsTd = isEmptyMap(productsForCart) && productsForCart.map((item) =>
        <CartItem
          keyProductId={item.productId}
          key={item.productId}
          item={item}
        />
      );

    const userInfo = session.get('userInfo');
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

    const comment = isEmptyArray(currentOrder) && isEmptyArray(currentOrder['four']) && currentOrder['four'].comment ? currentOrder['four'].comment : '';

    var ordersQoutaDiv = <div className="quota-style" style={quotaStyle}>
      <label className="order-filds-label" htmlFor="time_quota">Я смогу забрать свой заказ в период с</label>
      <div style={{width: '130px', marginLeft: '10px'}}>
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
      <div>
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
          <div className="main-container animation-page-load-medium cart-scroll-adaptive">
            <div className="flex-box-between">
              <h3>Корзина</h3>
              <div style={{display: 'flex'}}>
                <div onClick={this.handlerClearCart.bind(this)} className="cart-button-clear">Очистить корзину</div>
                <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
              </div>
            </div>
            {isEmptyArray(currentOrder) && isEmptyArray(currentOrder['four']) &&
            <p className="personal-explain-text">Изменение заказа № ST-{userInfo.emailHash}-{currentOrder['four'].order_id}</p>}
            {isEmptyArray(currentOrder) && isEmptyArray(currentOrder['one']) &&
            <p className="personal-explain-text" style={{color: 'red'}}>У Вас уже есть заказ в обработке.</p>}
            <table className="cart-products-table cart-products-table__cart">
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
            <div className="cart-order__total cart_total">Сумма:&nbsp;<span>{ total } ₽</span></div>
            <p className="order-filds-label" style={{color: 'red', fontSize: '14px', margin: '0'}}>
              {this.state.comment_count_error !== '' && this.state.comment_count_error}
            </p>
            <textarea
              name="comment"
              className="cart-comment"
              value={this.state.comment === '' ? comment : this.state.comment}
              onChange={this.handleChangeComment.bind(this)}
              placeholder="Оставьте комментарий к заказу..."
            />
            <p className="order-filds-label" style={{fontWeight: '700'}}>Дата
              доставки {ordersQuota.delivery ? ordersQuota.delivery.delivery_date : ''}</p>
            {ordersQuota.ordersQuota && ordersQuota.ordersQuota.length !== 0 ? ordersQoutaDiv : OrderNonQuota}
            <p className="order-filds-label scroll-to-error"
                   style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
              {
                this.state.cart_error !== '' ? this.state.cart_error : errorMessageCountQuota
              }
            </p>
            <div onClick={this.handlerSendOrder.bind(this)} className="cart-button">Отправить заказ</div>
          </div>
        </div>
        <Footer />
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
  currentOrder: store.api.get('currentOrder'),
  errorMessageCountQuota: store.session.get('errors').errorTime,
}))(Cart);