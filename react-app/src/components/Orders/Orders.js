import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import OrderItem from '../Orders/OrderItem';
import {
  showProductsInCart,
  sendOrder,
} from '../../api';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNum: false,
      tdBotyVisible: 'none'
    };
  }

  componentWillMount() {

  }

  handleClickOrder() {
    var orderNum = this.state.orderNum;
    var isVisible = this.state.tdBotyVisible === 'none' ? 'block' : 'none';

    this.setState({
      orderNum: !orderNum,
      tdBotyVisible: isVisible
    })
    console.log('isVisible',isVisible)
  }

  render() {

    const { api } = this.props;
    const productsForCart = api.get('productsForCart');
    var total = null;

    const productsTd = productsForCart.map((item) =>
      <OrderItem
        key={item.productId}
        item={item}
        visible={this.state.tdBotyVisible}
      />
    );

    var headTd = null;

    if (!this.state.orderNum) {
      headTd = <tr className="order-tr-head" onClick={this.handleClickOrder.bind(this)}>
        <th className="table-30-procent">Номер заказа 172034</th>
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

    total = productsForCart.reduce((total, item) => {
        return total + ((item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10));
      }, 0
    );

    const totalStyle = {
      margin: '10px'
    }

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="category-head">
            <h3 className="bread-crumbs-on-page">Мои заказы</h3>
          </div>
          <div className="orders-all">
            <div className="orders-item">
              <table id="cart-products-table" className="margin-off">
                { headTd }
                { productsTd }
              </table>
              <div className="cart-order__total" style={totalStyle}>Итог:&nbsp;<span>{ total } ₽</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Orders);