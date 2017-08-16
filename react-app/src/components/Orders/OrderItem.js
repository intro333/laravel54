import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  deleteProductFromCart,
  getProductCounts,
} from '../../api';
// import * as modelActions from './actions';

class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const orderNumberInp = classNames({
      'order-number-inp': true,
    });
    var inputVal = (this.props.item.count === '' ? '' : parseInt(this.props.item.count));
    var cost = this.props.item.price * (inputVal === '' ? 1 : parseInt(this.props.item.count));

    // console.log('this.props.visible', this.props.visible)
    const trStyle = {
      display: this.props.visible
    }
    return (
      <tr style={trStyle}>
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
                  />
                </div>
                <div
                  className="order-number__spin minus"
                ></div>
                <div
                  className="order-number__spin plus"
                ></div>
              </div>
            </div>
          </div>
        </td>
        <td>{cost} ₽</td>
        <td style={{color: 'firebrick'}}>
          <span
            className="remove-product"
            aria-hidden="true"
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
}))(OrderItem);