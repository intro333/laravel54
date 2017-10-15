import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/bootstrap-datepicker3.min.css';
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
import SuccessSaveModal  from '../Popups/SuccessSaveModal';
import { changeSuccessModalDisplay } from '../Products/actions';

class Categories extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    setCategories(dispatch);
  }

  handlerCloseModal() {
    const { dispatch } = this.props;
    dispatch(changeSuccessModalDisplay(false));
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
          <SuccessSaveModal
            handlerCloseModal={this.handlerCloseModal.bind(this)}
            successModalDisplay={products.get('errorModalDisplay')}
            modalTitle="Нет соединения."
            colorBack="#af4c4c"
          />
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
  products: store.products,
}))(Categories);

