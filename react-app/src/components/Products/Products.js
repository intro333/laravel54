import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import ProductItem from './ProductItem';
import SuccessModal  from '../Popups/SuccessModal';
import { changeSuccessModalDisplay } from './actions';
import * as mainActions from '../../actions';
import { Map } from 'immutable';
import Footer from '../Navigation/Footer';

import {
  setProducts,
  showOrdersQuotaInCart,
} from '../../api';
import {isEmptyMap} from '../../helpers';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, session } = this.props;
    dispatch(mainActions.setLoaderStatus(true));
    setProducts(dispatch, session.get('categoryId'));
    showOrdersQuotaInCart(dispatch);
  }

  componentWillUnmount() {
    const map = Map;
    const { dispatch } = this.props;
    dispatch(mainActions.setProducts(map()));
  }

  handlerCloseModal() {
    const { dispatch } = this.props;
    dispatch(changeSuccessModalDisplay(false));
  }

  render() {
    const { api, session, products, history, ordersQuota } = this.props;
    const productsApi = api.get('products');

    const productItem = isEmptyMap(productsApi) && productsApi.map((item) =>
      <ProductItem
        key={item.product_id}
        productId={item.product_id}
        productItems={item}
        barCode={item.bar_code}
        imgSrc={ item.image_path }
        itemName={ item.name }
        price={ item.price }
        unit={ item.unit }
        ordersQuota={ordersQuota.delivery ? ordersQuota.delivery : ''}
      />
    );
    const deliveryStatus = ordersQuota.delivery && ordersQuota.delivery.status && ordersQuota.delivery.status;
    const deliveryMessage = <p className="order-filds-label scroll-to-error"
                              style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>Дата доставки закрыта.Подробности здесь.</p>;

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <div className="main-container">
            <SuccessModal
              handlerCloseModal={this.handlerCloseModal.bind(this)}
              successModalDisplay={products.get('successModalDisplay')}
              history={history}
            />
            <div className="category-head">
              <Link to="/categories"><h3 className="bread-crumbs-link">Продукты</h3></Link>
              <div className="bread-crumbs-circle"></div>
              <h3 className="bread-crumbs-on-page">{ session.get('categoryName') }</h3>
            </div>
            {deliveryStatus === 0 && deliveryMessage}
            <div className="category-all">
              { productItem }
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
  products: store.products,
  ordersQuota: store.api.get('ordersQuota'),
}))(Products);