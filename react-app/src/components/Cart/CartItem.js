import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  deleteProductFromCart
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
    const { dispatch } = this.props;
    if (productCounts) {
      const data = {
        barCode: this.props.item.barCode,
        productId: this.props.item.productId,
        productCounts: productCounts,
      };
      addProductToCart(dispatch, data);
    } else {
      const data = {
        barCode: this.props.item.barCode,
        productId: this.props.item.productId,
        productCounts: '',
      };
      addProductToCart(dispatch, data);
      this.setState({
        errorBorderRed: true,
        inputPlaceHolder: '?'
      });
    }
  }

  setPlusNumber() {
    var inputVal = parseInt(this.props.item.count);
    if (inputVal < 99) {
      this.addProductToCart(parseInt(inputVal) + 1)
    } else if (inputVal === null || inputVal == 'undefined' || isNaN(inputVal)) {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart('1')
    }
  }

  setMinusNumber() {
    var inputVal = parseInt(this.props.item.count);
    if (inputVal > 1) {
      this.addProductToCart(parseInt(inputVal) - 1)
    } else if (inputVal === null || inputVal == 'undefined' || isNaN(inputVal)) {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart('1')
    }
  }

  setChangeNumber(e) {
    var targetValue = e.target.value;
    console.log("targetValue", typeof targetValue)
    if(targetValue <= 99 && targetValue > 0 || targetValue === '') {
      this.setState({
        errorBorderRed: false,
        inputPlaceHolder: ''
      });
      this.addProductToCart(targetValue)
    }
  }

  deleteProductFromCart() {
    const { dispatch } = this.props;
    const data = {
      barCode: this.props.item.barCode,
      productId: this.props.item.productId
    };
    deleteProductFromCart(dispatch, data);
  }

  render() {
    const orderNumberInp = classNames({
      'order-number-inp': true,
      'error-border-red': this.state.errorBorderRed
    });
    var inputVal = (this.props.item.count === '' ? '' : parseInt(this.props.item.count));
    console.log("inputVal type: ", inputVal)
    var inputPlaceHolder = this.state.inputPlaceHolder;
    var cost = this.props.item.price * (inputVal === '' ? 1 : parseInt(this.props.item.count));

    return (
      <tr>
        <td className="table-40-procent-td">
          <img className="cart-product-image" src={this.props.item.imagePath} />
          <span>{this.props.item.name}</span>
        </td>
        <td>{this.props.item.price} ₽ / {this.props.item.unit}</td>
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
                    value={inputVal ? inputVal : ''}
                    placeholder={inputPlaceHolder}
                    onChange={this.setChangeNumber.bind(this)}
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
          <span
            className="remove-product glyphicon glyphicon-trash"
            aria-hidden="true"
            onClick={this.deleteProductFromCart.bind(this)}
          >
          </span>
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