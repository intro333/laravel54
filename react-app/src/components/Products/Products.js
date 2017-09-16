import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import ProductItem from './ProductItem';
import Modal  from '../Popups/Modal';
import {
  setProducts,
} from '../../api';
import {isEmptyMap} from '../../helpers';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, session } = this.props;
    setProducts(dispatch, session.get('categoryId'));
  }

  render() {
    const { api, session } = this.props;
    const products = api.get('products');

    const productItem = isEmptyMap(products) && products.map((item) =>
      <ProductItem
        key={item.product_id}
        productId={item.product_id}
        productItems={item}
        barCode={item.bar_code}
        imgSrc={ item.image_path }
        itemName={ item.name }
        price={ item.price }
        unit={ item.unit }
      />
    );

    return (
      <div className="container">
        <Modal />
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="category-head">
            <Link to="/categories"><h3 className="bread-crumbs-link">Продукты</h3></Link>
            <div className="bread-crumbs-circle"></div>
            <h3 className="bread-crumbs-on-page">{ session.get('categoryName') }</h3>
          </div>
          <div className="category-all">
            { productItem }
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
}))(Products);