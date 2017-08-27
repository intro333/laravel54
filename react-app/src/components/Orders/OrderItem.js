import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  showOrdersQuotaInCart,
  cancelOrDeleteOrder
} from '../../api';
// import * as modelActions from './actions';

class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderNum: false,
      tdBotyVisible: false
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    showOrdersQuotaInCart(dispatch);
  }

  handleClickOrder() {
    var orderNum = this.state.orderNum;
    var isVisible = this.state.tdBotyVisible;

    this.setState({
      orderNum: !orderNum,
      tdBotyVisible: !isVisible
    })
  }

  handlerCancelOrder() {
    const { dispatch, history } = this.props;
    const data = {
      orderId: this.props.orderId
    }

    cancelOrDeleteOrder(dispatch, data, history)
  }

  render() {
    const { ordersQuota } = this.props;
    var items = this.props.item;

    const orderNumberInp = classNames({
      'order-number-inp': true,
    });
    const totalStyle = {
      margin: '10px'
    }

    var productsTr = items.map((item, index) => {
        if(index !== 0) {
          return <tr key={index}>
            <td className="table-40-procent-td">
              <img className="cart-product-image" src={item.image_path}/>
              <span>{item.name}</span>
            </td>
            <td>{item.price} ₽ / {item.unit}</td>
            <td style={{textAlign: 'start'}}>
              <div className="order-table__cell">
                <div className="b-number">
                  <div className="order-number" style={{width: '70px', border: '2px solid #f9f9f9'}}>
                    <div className="order-number__field">
                      <input
                        disabled
                        className={orderNumberInp}
                        type="number"
                        max="99"
                        min="0"
                        value={item.counts}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>{item.cost} ₽</td>
            <td style={{color: 'firebrick'}}>
            <span
              className="remove-product"
              aria-hidden="true"
            >
            </span>
            </td>
          </tr>
        }
      }
    );

    var headTd = null;
    const thStyle = {
      textAlign: 'left',
      width: '100%',
      letterSpacing: '0.05em',
      fontWeight: '400 !important'
    }

    if (!this.state.orderNum) {
      headTd = <tr className="order-tr-head" onClick={this.handleClickOrder.bind(this)}>
        <th className="order-th-head">Заказ № ST-{this.props.emailHash}-{this.props.orderId} от {this.props.orderDate}</th>
        <th className="table-25-procent"></th>
        <th className="table-25-procent"></th>
        <th className="table-10-procent"></th>
        <th className="table-10-procent"></th>
      </tr>
    } else {
      headTd = <tr className="order-tr-head" onClick={this.handleClickOrder.bind(this)}>
        <th className="table-30-procent">Продукт</th>
        <th className="table-25-procent">Цена</th>
        <th className="table-25-procent">Количество</th>
        <th className="table-10-procent">Стоимость</th>
        <th className="table-10-procent"></th>
      </tr>
    }

    var itemsForTotal = items.filter((number, index) => index !== 0);
    var total = itemsForTotal.reduce((total, item) => total + item.cost, 0);
    var orderConfogCancel = '';

      switch(this.props.orderStatus) {
        case 1:  // Если заказ обрабатывается
          orderConfogCancel = <span onClick={this.handlerCancelOrder.bind(this)}>Отменить заказ</span>
          break;
        case 2:  // Если заказ выполнен
          orderConfogCancel = <span onClick={this.handlerCancelOrder.bind(this)}>Удалить</span>
          break;
        case 3:  // Если заказ удален
          orderConfogCancel = <span onClick={this.handlerCancelOrder.bind(this)}>Восстановить заказ</span>
          break;
      }

    var orderInfo =
      <div className="order-instruments">
        <div className="order-info">
          <span>Заказ № ST-{this.props.emailHash}-{this.props.orderId} от {this.props.orderDate}</span>
          <span>Дата доставки {ordersQuota.delivery && ordersQuota.delivery.delivery_date}</span>
          {
            this.props.timeQuota !== '' ?
            <span>Период получения заказа {this.props.timeQuota}</span> :
              <span>Заказ можно получить в любое удобное время в указанный день доставки.</span>
          }
        </div>
        <div className="order-config">
          <span>Редактировать заказ</span>
          {orderConfogCancel}
        </div>
      </div>

    return (
      <div className="orders-item">
        { this.state.tdBotyVisible &&  orderInfo }
        <table className="cart-products-table margin-off">
          <thead>
            { headTd }
          </thead>
          <tbody>
            { this.state.tdBotyVisible && productsTr }
          </tbody>
        </table>
        {
          this.state.tdBotyVisible &&
          <div className="cart-order__total" style={totalStyle}>Сумма:&nbsp;<span>{ total } ₽</span></div>
        }
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
  ordersQuota: store.api.get('ordersQuota'),
  products: store.products,
}))(OrderItem);