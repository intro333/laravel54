import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  showProductsInCart
} from '../../api';
// import * as modelActions from './actions';

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderNumberInp: props.count,
      errorBorderRed: false,
      inputPlaceHolder: ''
    }
  }

  addProductToCart(productCounts) {
    if (productCounts) {
      const { dispatch } = this.props;
      const data = {
        barCode: this.props.barCode,
        productId: this.props.productId,
        productCounts: productCounts,
      };
      addProductToCart(dispatch, data);
      showProductsInCart(dispatch);
      console.log("datadata", data);
      console.log("datadata", productCounts)
    } else {
      this.setState({
        errorBorderRed: true,
        inputPlaceHolder: '?'
      });
    }
  }

  setPlusNumber() {
    var inputVal = this.state.orderNumberInp;
    if (inputVal < 99) {
      this.setState({
        orderNumberInp: (parseInt(inputVal) + 1)
      });
      this.addProductToCart(parseInt(inputVal) + 1)
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
      this.addProductToCart(parseInt(inputVal) - 1)
    } else if (isNaN(inputVal)) {
      this.setState({
        orderNumberInp: 1,
        errorBorderRed: false
      });
    }
  }

  render() {
    const orderNumberInp = classNames({
      'order-number-inp': true,
      'error-border-red': this.state.errorBorderRed
    });
    var inputVal = this.state.orderNumberInp;
    var inputPlaceHolder = this.state.inputPlaceHolder;
    var cost = this.props.price * inputVal;

    return (
      <tr>
        <td className="table-40-procent-td">
          <img className="cart-product-image" src={this.props.imagePath} />
          <span>{this.props.name}</span>
        </td>
        <td>{this.props.price} ₽ / {this.props.unit}</td>
        <td style={{textAlign: 'start'}}>
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
                  />
                </div>
                <div
                  className="order-number__spin minus"
                  onClick={this.setMinusNumber.bind(this)}
                ></div>
                <div
                  className="order-number__spin plus"
                  onClick={this.setPlusNumber.bind(this)}
                ></div>
              </div>
            </div>
          </div>
        </td>
        <td>{cost} ₽</td>
        <td style={{color: 'firebrick'}}>
          <span className="remove-product glyphicon glyphicon-trash" aria-hidden="true"></span>
        </td>
      </tr>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
  products: store.products,
}))(CartItem);