import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
} from '../../api';
import * as modelActions from './actions';

class ProductItem extends Component {

  constructor(props) {

    super(props);
    this.state = {
      orderNumberInp: 1,
      errorBorderRed: false,
      inputPlaceHolder: '',
      addButtonText: 'Добавить в корзину',
      addToCartButtonStyle: {
        background: 'steelblue'
      }
    }
  }

  setPlusNumber() {
    var inputVal = this.state.orderNumberInp;
    if (inputVal < 99) {
      this.setState({
        orderNumberInp: (parseInt(inputVal) + 1)
      });
    } else if (isNaN(inputVal)) {
      this.setState({
        orderNumberInp: 1,
        errorBorderRed: false
      });
    }
  }

  setMinusNumber() {
    var inputVal = parseInt(this.state.orderNumberInp);
    if (inputVal > 1) {
      this.setState({
        orderNumberInp: (parseInt(inputVal) - 1)
      });
    } else if (isNaN(inputVal)) {
      this.setState({
        orderNumberInp: 1,
        errorBorderRed: false
      });
    }
  }

  setChangeNumber(e) {
    var targetValue = e.target.value;
    if(targetValue <= 99 && targetValue > 0 || targetValue === '') {
      this.setState({
        orderNumberInp: parseInt(targetValue),
        errorBorderRed: false,
        inputPlaceHolder: ''
      });
    }
  }

  addProductToCart() {
    let productCounts = this.state.orderNumberInp;

    if (productCounts) {
      const { dispatch } = this.props;
      const data = {
        barCode: this.props.barCode,
        productId: this.props.productId,
        productCounts: productCounts,
      };
      addProductToCart(dispatch, data);
      this.setState({
        addButtonText: 'Товар в корзине',
        addToCartButtonStyle: {
          background: '#3c763d'
        }
      })
    } else {
      this.setState({
        errorBorderRed: true,
        inputPlaceHolder: '?'
      });
    }
  }

  render() {
    const { api, session } = this.props;
    // const products = api.get('products');
    // console.log('products get: ', products);
    const categoryItemImg = {
      padding: '0 20px 0 20px'
    };

    const orderNumberInp = classNames({
      'order-number-inp': true,
      'error-border-red': this.state.errorBorderRed
    });

    var inputVal = this.state.orderNumberInp;
    var inputPlaceHolder = this.state.inputPlaceHolder;
    var addToCartButtonStyle = this.state.addToCartButtonStyle;

    return (
      <div className="category-item">
        <div className="category-item__img" style={categoryItemImg}>
          <img src={'/storage/images/products/' + this.props.imgSrc} width="190" />
          <div className="category-item__name"> {this.props.itemName}</div>
          <div className="category-item__price-measure">
            <span>{this.props.price} ₽ / {this.props.unit}</span>
            <div className="order-table__cell">
              <div className="b-number">
                <div className="order-number">
                  <div className="order-number__field">
                    <input
                      className={orderNumberInp}
                      type="number"
                      max="99"
                      min="0"
                      value={inputVal}
                      placeholder={inputPlaceHolder}
                      onChange={this.setChangeNumber.bind(this)}
                    />
                  </div>
                  <div
                    className="order-number__spin minus order-spin-minus"
                    onClick={this.setMinusNumber.bind(this)}
                  ></div>
                  <div
                    className="order-number__spin plus order-spin-plus"
                    onClick={this.setPlusNumber.bind(this)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="add-to-cart-button"
            style={addToCartButtonStyle}
            onClick={this.addProductToCart.bind(this)}
          >
            <p>{this.state.addButtonText}</p>
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
  products: store.products,
}))(ProductItem);