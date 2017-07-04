import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
// import {
//   addProductToCart,
// } from '../../api';
// import * as modelActions from './actions';

class CartItem extends Component {

  constructor(props) {

    super(props);
    this.state = {

    }
  }

  render() {

    // const categoryItemImg = {
    //   padding: '0 20px 0 20px'
    // };
    //
    // const orderNumberInp = classNames({
    //   'order-number-inp': true,
    //   'error-border-red': this.state.errorBorderRed
    // });

    // var inputVal = this.state.orderNumberInp;
    // var inputPlaceHolder = this.state.inputPlaceHolder;

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
                  <input type="number" max="99" min="0" value={this.props.count} className="order-number-inp"/>
                </div>
                <div className="order-number__spin minus"></div>
                <div className="order-number__spin plus"></div>
              </div>
            </div>
          </div>
        </td>
        <td>1600 ₽</td>
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