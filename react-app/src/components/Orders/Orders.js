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
  ordersGetAll,
} from '../../api';

class Orders extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    ordersGetAll(dispatch);
  }

  render() {

    const { api } = this.props;
    const orders = api.get('orders');
    var tables = null;
    if(orders.size === 0) {} else {
      tables = Object.values(orders).map((item, index) =>
        <OrderItem
          key={index}
          item={item}
        />
      );
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
              {tables}
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