import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import * as helpers from '../../helpers';
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
import * as modelActions from '../../actions';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStatus: 1,
      orderYear: new Date().getUTCFullYear()
    }
  }

  ordersGetAll(status, year) {
    const { dispatch } = this.props;
    const data = {
      status: status,
      year: year,
    };
    ordersGetAll(dispatch, data);
  }

  componentWillMount() {
    this.ordersGetAll(this.state.orderStatus, this.state.orderYear);
  }

  componentWillReceiveProps(props) {
    const { dispatch, api } = props || this.props;
    if(props.api.get('componentWillReceivePropsChange')) {
      this.ordersGetAll(this.state.orderStatus, this.state.orderYear);
      dispatch(modelActions.componentWillReceivePropsChange(false));
    }
  }

  handleChangeOrderStatus(e) {
    this.setState({orderStatus: e.value});
    this.ordersGetAll(e.value, this.state.orderYear);
  }

  handlerChangeOrderYear(e) {
    this.setState({
      orderYear: e.value,
    });
    this.ordersGetAll(this.state.orderStatus, e.value);
  }

  render() {

    const { api, history } = this.props;
    const orders = api.get('orders');
    var tables = null;

    if(helpers.isEmptyMap(orders)) {
      tables = Object.entries(orders).map((item, index) =>
      // console.log('item', item[1][0]['orderData'])
          <OrderItem
            orderId={item[1][0]['orderId']}
            emailHash={item[1][0]['emailHash']}
            orderDate={item[1][0]['orderDate']}
            timeQuota={item[1][0]['timeQuota']}
            key={item[1][0]['orderId']}
            item={item[1]}
            history={history}
            orderStatus={this.state.orderStatus}
          />
      );
    }

    const OrderStatusOptions = [
      { value: 1, label: 'Обрабатывается' },
      { value: 2, label: 'Выполнен' },
      { value: 3, label: 'Удален/Отменен' },
      // { value: 3, label: 'Отправлен' }
    ];

    const yearOptions = helpers.getNumberSelectOptions(2012, (new Date().getUTCFullYear()), false);

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="category-head">
            <h3 className="bread-crumbs-on-page">Мои заказы</h3>
          </div>
          <div className="order-filter-main">
            <div className="order-filds-label-input">
              <label className="order-filds-label" htmlFor="status">Статус заказа</label>
              <Select
                name="status"
                value={this.state.orderStatus}
                options={OrderStatusOptions}
                onChange={this.handleChangeOrderStatus.bind(this)}
                clearable={false}
                searchable={false}
              />
            </div>
            <div className="order-filds-label-input">
              <label className="order-filds-label" htmlFor="status">Год</label>
              <Select
                name="birthdate"
                value={this.state.orderYear}
                options={yearOptions}
                onChange={this.handlerChangeOrderYear.bind(this)}
                clearable={false}
                searchable={false}
                scrollMenuIntoView={false}
              />
            </div>
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