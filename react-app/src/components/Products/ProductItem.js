import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const categoryItemImg = {
      padding: '0 20px 0 20px'
    };

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
                    <input type="number" max="99" min="0" value="1" className="order-number-inp" />
                  </div>
                  <div className="order-number__spin minus order-spin-minus"></div>
                  <div className="order-number__spin plus order-spin-plus"></div>
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
