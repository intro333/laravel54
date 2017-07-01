import React, {Component} from 'react';
import '../../theme/css/index.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import MenuMobile from '../Popups/MenuMobile'

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const categoryItemImg = {
      padding: '0 20px 0 20px'
    };

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <div className="category-head">
            <Link to="/categories"><h3 className="bread-crumbs-link">Продукты</h3></Link>
            <div className="bread-crumbs-circle"></div>
            <h3 className="bread-crumbs-on-page">Мясо и курица</h3>
          </div>
          <div className="category-all">
            <div className="category-item">
              <div className="category-item__img" style={categoryItemImg}>
                <img src="/images/meatorchicken/beef.jpg" width="190"/>
                <div className="category-item__name"> Говядина</div>
                <div className="category-item__price-measure">
                  <span>800 ₽ / кг.</span>
                  <div className="order-table__cell">
                    <div className="b-number">
                      <div className="order-number">
                        <div className="order-number__field">
                          <input type="number" max="99" min="0" value="1" className="order-number-inp"
                                 data-product-id="1"/>
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
            <div className="category-item">
              <div className="category-item__img" style={categoryItemImg}>
                <img src="/images/meatorchicken/pork.jpg" width="190"/>
                <div className="category-item__name"> Свинина</div>
                <div className="category-item__price-measure">
                  <span>650 ₽ / кг.</span>
                  <div className="order-table__cell">
                    <div className="b-number">
                      <div className="order-number">
                        <div className="order-number__field">
                          <input type="number" max="99" min="0" value="1" className="order-number-inp"
                                 data-product-id="2"/>
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
            <div className="category-item">
              <div className="category-item__img" style={categoryItemImg}>
                <img src="/images/meatorchicken/veal.jpg" width="190"/>
                <div className="category-item__name"> Телятина</div>
                <div className="category-item__price-measure">
                  <span>545 ₽ / шт.</span>
                  <div className="order-table__cell">
                    <div className="b-number">
                      <div className="order-number">
                        <div className="order-number__field">
                          <input type="number" max="99" min="0" value="1" className="order-number-inp"
                                 data-product-id="3"/>
                        </div>
                        <div className="order-number__spin minus"></div>
                        <div className="order-number__spin plus"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-to-cart-button">
                  <p>Добавить в корзину</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
