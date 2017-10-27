import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import CategoryItem from './CategoryItem';
import {
  setCategories,
} from '../../api';
import {isEmptyMap} from '../../helpers';
import Footer from '../Navigation/Footer';
import * as modelActions from '../../actions';

class Categories extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(modelActions.setLoaderStatus(true));
    setCategories(dispatch);
  }

  render() {
    const { api, products } = this.props;
    const categories = api.get('categories');
    const categoryItems = isEmptyMap(categories) && categories.map((item) =>
        <CategoryItem
          key={item.category_id}
          categoryId={item.category_id}
          imgSrc={ item.image_path }
          itemName={ item.name }
        />
      );

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <div className="main-container">
            <div className="category-head">
              <h3 className="bread-crumbs-on-page">Продукты</h3>
            </div>
            <div className="category-all">
              {categoryItems}
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
}))(Categories);

