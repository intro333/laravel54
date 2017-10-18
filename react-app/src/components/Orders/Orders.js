import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import * as helpers from '../../helpers';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import OrderItem from '../Orders/OrderItem';
import {
  ordersGetAll,
  showOrdersQuotaInCart
} from '../../api';
import * as modelActions from '../../actions';
import Footer from '../Navigation/Footer';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStatus: 1,
      orderYear: new Date().getUTCFullYear(),
      orderMonth: (new Date().getUTCMonth() + 1)
    }
  }

  ordersGetAll(status, year, month) {
    const { dispatch } = this.props;
    const data = {
      status: status,
      year: year,
      month: month,
    };
    dispatch(modelActions.setLoaderStatus(true));
    ordersGetAll(dispatch, data);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    showOrdersQuotaInCart(dispatch);
    this.ordersGetAll(this.state.orderStatus, this.state.orderYear, this.state.orderMonth);
  }

  componentWillReceiveProps(props) {
    const { dispatch, api } = props || this.props;
    if(props.api.get('componentWillReceivePropsChange')) {
      this.ordersGetAll(this.state.orderStatus, this.state.orderYear, this.state.orderMonth);
      dispatch(modelActions.componentWillReceivePropsChange(false));
    }
  }

  handleChangeOrderStatus(e) {
    this.setState({orderStatus: e.value});
    this.ordersGetAll(e.value, this.state.orderYear, this.state.orderMonth);
  }

  handlerChangeOrderMonth(e) {
    this.setState({orderMonth: e.value});
    this.ordersGetAll(this.state.orderStatus, this.state.orderYear, e.value);
  }

  handlerChangeOrderYear(e) {
    this.setState({orderYear: e.value});
    this.ordersGetAll(this.state.orderStatus, e.value, this.state.orderMonth);
  }

  render() {

    const { api, history, ordersQuota } = this.props;
    const orders = api.get('orders');
    var tables = null;
    const orderControlStatus = ordersQuota && ordersQuota.delivery && ordersQuota.delivery.order_control_status;

    if(helpers.isEmptyMap(orders)) {
      tables = Object.entries(orders).map((item, index) =>
          <OrderItem
            orderId={item[1][0]['orderId']}
            emailHash={item[1][0]['emailHash']}
            orderDate={item[1][0]['orderDate']}
            timeQuota={item[1][0]['timeQuota']}
            timeQuotaId={item[1][0]['timeQuotaId']}
            key={item[1][0]['orderId']}
            item={item[1]}
            history={history}
            stateOrderStatus={this.state.orderStatus}
            orderStatus={orderControlStatus && orderControlStatus}
            ordersQuota={ordersQuota}
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
    const monthOptions = [
      { value: 1, label: 'Январь' }, { value: 2, label: 'Февраль' }, { value: 3, label: 'Март' }, { value: 4, label: 'Апрель' }, { value: 5, label: 'Май' }, { value: 6, label: 'Июнь' }, { value: 7, label: 'Июль' }, { value: 8, label: 'Август' }, { value: 9, label: 'Сентябрь' }, { value: 10, label: 'Октябрь' }, { value: 11, label: 'Ноябрь' }, { value: 12, label: 'Декабрь' }
    ];

    if((this.state.orderStatus === 1 || this.state.orderStatus === 5) && tables && tables.length === 0) {
      tables = <p style={{fontSize: '16px'}}><b>У вас нет обрабатываемых заказов.</b></p>;
    } else if(this.state.orderStatus === 2 && tables && tables.length === 0) {
      tables = <p style={{fontSize: '16px'}}>
        Заказов со статусом <b>Выполнен</b> за <span style={{color: '#4CAF50', fontWeight: 'bold'}}>{monthOptions[this.state.orderMonth - 1].label} {this.state.orderYear}</span> не найдено.
      </p>
    } else if(this.state.orderStatus === 3 && tables && tables.length === 0) {
      tables = <p style={{fontSize: '16px'}}>
        Заказов со статусом <b>Удален</b> за <span style={{color: '#4CAF50', fontWeight: 'bold'}}>{monthOptions[this.state.orderMonth - 1].label} {this.state.orderYear}</span> не найдено.
      </p>
    }

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <div className="main-container">
            <div className="category-head">
              <h3 className="bread-crumbs-on-page">Мои заказы</h3>
            </div>
            {orderControlStatus && orderControlStatus === 5 &&
            <p className="personal-explain-text" style={{color: 'red'}}>Заказ передан на исполнение.</p>}
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
                <label className="order-filds-label" htmlFor="status">Месяц</label>
                <Select
                  className="margin-right-10"
                  name="birthdate"
                  value={this.state.orderMonth}
                  options={monthOptions}
                  onChange={this.handlerChangeOrderMonth.bind(this)}
                  placeholder=""
                  clearable={false}
                  searchable={false}
                  scrollMenuIntoView={false}
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
}))(Orders);