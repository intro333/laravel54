import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import * as modelActions from './actions';

class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orderNumberInp: 1,
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
        orderNumberInp: 1
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
        orderNumberInp: 1
      });
    }
  }

  setChangeNumber(e) {
    var targetValue = e.target.value;
    if(targetValue <= 99 && targetValue > 0 || targetValue === '') {
      this.setState({
        orderNumberInp: parseInt(targetValue)
      });
    }
  }

  render() {

    const categoryItemImg = {
      padding: '0 20px 0 20px'
    };

    var inputVal = this.state.orderNumberInp;

    return (
      <div className="category-item">
        <div className="category-item__img" style={categoryItemImg}>
          <img src={this.props.imgSrc} width="190" />
          <div className="category-item__name"> {this.props.itemName}</div>
          <div className="category-item__price-measure">
            <span>{this.props.price} ₽ / кг.</span>
            <div className="order-table__cell">
              <div className="b-number">
                <div className="order-number">
                  <div className="order-number__field">
                    <input
                      className="order-number-inp"
                      type="number"
                      max="99"
                      min="0"
                      value={inputVal}
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
          <div className="add-to-cart-button">
            <p>Добавить в корзину</p>
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