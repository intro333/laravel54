import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import {
  showProductsInCart,
} from '../../api';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    showProductsInCart(dispatch);
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <h2>Корзина</h2>

          <table id="cart-products-table">
            <tr>
              <th className="table-30-procent">Продукт</th>
              <th className="table-25-procent">Цена</th>
              <th className="table-25-procent">Количество</th>
              <th className="table-10-procent">Стоимость</th>
              <th className="table-10-procent"></th>
            </tr>
            <tr>
              <td className="table-40-procent-td">
                <img className="cart-product-image" src="/storage/images/products/beef.jpg"/>
                <span>Говядина</span>
              </td>
              <td>800 ₽ / кг.</td>
              <td style={{textAlign: 'start'}}>
                <div className="order-table__cell">
                  <div className="b-number">
                    <div className="order-number">
                      <div className="order-number__field">
                        <input type="number" max="99" min="0" value="2" className="order-number-inp"/>
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
            <tr>
              <td className="table-40-procent-td">
                <img className="cart-product-image" src="/storage/images/products/pork.jpg"/>
                <span>Свинина</span>
              </td>
              <td>650 ₽ / кг.</td>
              <td style={{textAlign: 'start'}}>
                <div className="order-table__cell">
                  <div className="b-number">
                    <div className="order-number">
                      <div className="order-number__field">
                        <input type="number" max="99" min="0" value="2" className="order-number-inp"/>
                      </div>
                      <div className="order-number__spin minus"></div>
                      <div className="order-number__spin plus"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td>1300 ₽</td>
              <td>
                <span className="remove-product glyphicon glyphicon-trash" aria-hidden="true"></span>
              </td>
            </tr>
            <tr>
              <td className="table-40-procent-td">
                <img className="cart-product-image" src="/storage/images/products/veal.jpg"/>
                <span>Телятина</span>
              </td>
              <td>545 ₽ / шт.</td>
              <td style={{textAlign: 'start'}}>
                <div className="order-table__cell">
                  <div className="b-number">
                    <div className="order-number">
                      <div className="order-number__field">
                        <input type="number" max="99" min="0" value="3" className="order-number-inp"/>
                      </div>
                      <div className="order-number__spin minus"></div>
                      <div className="order-number__spin plus"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td>1635 ₽</td>
              <td style={{color: 'firebrick'}}>
                <span className="remove-product glyphicon glyphicon-trash" aria-hidden="true"></span>
              </td>
            </tr>
          </table>
          <div className="cart-order__total">Итог:&nbsp;<span>4535</span></div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Cart);