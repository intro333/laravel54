import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import CategoryItem from './CategoryItem';
import * as modelActions from '../../actions';
import {
  setCategories,
} from '../../api';
import {isEmptyMap} from '../../helpers';

class Categories extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    setCategories(dispatch);
  }


  render() {
    const {api} = this.props;
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
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Categories);

