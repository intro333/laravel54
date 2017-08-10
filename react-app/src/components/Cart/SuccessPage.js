import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import CartItem from '../Cart/CartItem';
import {
  showProductsInCart,
  sendOrder,
} from '../../api';

class SuccessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {

    const toHome = {
      width: '75%',
      margin: '35px auto 20px',
      background: '#4CAF50'
    };

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <section className="success-page">
          <div className="success-page__content">
            <div className="success-page__title">Ваш заказ принят!</div>
            <div className="success-page__text">
              В ближайшее время Ваш заказ будет обработан. Статус заказа можно отследить здесь.<br/>Спасибо!
            </div>
            <Link to="/">
              <div className="add-to-cart-button" style={toHome}><p>НА ГЛАВНУЮ</p></div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(SuccessPage);