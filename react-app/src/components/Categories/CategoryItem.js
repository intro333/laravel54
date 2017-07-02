import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import * as modelActions from '../../actions';
import {
  setCategories,
} from '../../api';

class CategoryItem extends Component {

  constructor(props) {
    super(props);
  }

  // componentWillUnmount() {
  setCategoryId() {
    const { dispatch } = this.props;
    dispatch(modelActions.setCategoryId(this.props.categoryId));
    dispatch(modelActions.setCategoryName(this.props.itemName));
  }

  render() {

    return (
      <div className="category-item" onClick={this.setCategoryId.bind(this)}>
        <Link to={'/products'}>
          <div className="category-item__img">
            <img src={this.props.imgSrc} width="170" />
            <div className="category-item__name">{this.props.itemName}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(CategoryItem);
