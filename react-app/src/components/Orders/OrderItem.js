import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  deleteProductFromCart,
  getProductCounts,
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

  handleClickOrder() {
    var orderNum = this.state.orderNum;
    var isVisible = this.state.tdBotyVisible;

    this.setState({
      orderNum: !orderNum,
      tdBotyVisible: !isVisible
    })
  }

  render() {
    var items = this.props.item;
    console.log('items', items)
    var total = null;

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
                  <div className="order-number" style={{width: '70px'}}>
                    <div className="order-number__field">
                      <input
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
    }

    // console.log('order number', this.props)

    if (!this.state.orderNum) {
      headTd = <tr className="order-tr-head" onClick={this.handleClickOrder.bind(this)}>
        <th style={thStyle}>Заказ № ST-{this.props.orderId} от {this.props.orderDate}</th>
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

    total = items.reduce((total, item) => {
        return total + item.cost;
      }, 0
    );

    return (
      <div className="orders-item">
        <table className="cart-products-table margin-off">
          { headTd }
          { this.state.tdBotyVisible && productsTr }
        </table>
        {
          this.state.tdBotyVisible &&
          <div className="cart-order__total" style={totalStyle}>Итог:&nbsp;<span>{ total } ₽</span></div>
        }
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
  products: store.products,
}))(OrderItem);