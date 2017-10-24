import React, {Component} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  deleteProductFromCart,
} from '../../api';
import * as modelActions from '../../actions';
import FaClose from 'react-icons/lib/fa/close';

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderNumberInp: props.count,
      errorBorderRed: false,
      inputPlaceHolder: ''
    }
  }

  componentWillMount() {
    if(this.props.item.count === "") {
      this.setState({
        errorBorderRed: true,
        inputPlaceHolder: '?'
      });
    }
  }
  addProductToCart(productCounts) {
    const { dispatch } = this.props;

    dispatch(modelActions.setLoaderStatus(true));

    if (Number.isInteger(productCounts)) {
      const data = {
        barCode: this.props.item.barCode,
        productId: this.props.item.productId,
        productCounts: productCounts,
      };
      addProductToCart(dispatch, data);
    } else if (typeof productCounts === 'string' && productCounts !== '') {
      const data = {
        barCode: this.props.item.barCode,
        productId: this.props.item.productId,
        productCounts: parseInt(productCounts),
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
    var inputVal = this.props.item.count;
    if (Number.isInteger(inputVal) && (inputVal < 99)) {
      this.addProductToCart(parseInt(inputVal) + 1)
    } else if (inputVal === "") {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart(1)
    } else {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart(1)
    }
  }

  setMinusNumber() {
    var inputVal = this.props.item.count;
    if (Number.isInteger(inputVal) && (inputVal > 1)) {
      this.addProductToCart(parseInt(inputVal) - 1)
    } else if (inputVal === "") {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart(1)
    } else {
      this.setState({
        errorBorderRed: false
      });
      this.addProductToCart(1)
    }
  }

  setChangeNumber(e) {
    var targetValue = e.target.value;

    if(targetValue <= 99 && targetValue > 0 || targetValue === '') {
      this.setState({
        errorBorderRed: false,
        inputPlaceHolder: ''
      });
      this.addProductToCart(targetValue)
    }
  }

  deleteProductFromCart() {
    const { dispatch, history } = this.props;
    const data = {
      barCode: this.props.item.barCode,
      productId: this.props.item.productId
    };
    dispatch(modelActions.setLoaderStatus(true));
    deleteProductFromCart(dispatch, data, history);
  }

  render() {
    const orderNumberInp = classNames({
      'order-number-inp': true,
      'error-border-red': this.state.errorBorderRed
    });
    var inputVal = (this.props.item.count === '' ? '' : parseInt(this.props.item.count));
    var inputPlaceHolder = this.state.inputPlaceHolder;
    var cost = this.props.item.price * (inputVal === '' ? 1 : parseInt(this.props.item.count));

    return (
      <tr key={this.props.keyProductId}>
        <td className="table-40-procent-td">
          <img className="cart-product-image" src={'/storage/images/products/' + this.props.item.imagePath} />
          <span>{this.props.item.name}</span>
        </td>
        <td>{this.props.item.price} Р / {this.props.item.unit}</td>
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
        <td>{cost} Р</td>
        <td style={{color: 'firebrick'}}>
          <span
            className="remove-product"
            onClick={this.deleteProductFromCart.bind(this)}
          ><FaClose size="25" />
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