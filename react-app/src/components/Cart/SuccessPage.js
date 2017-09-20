import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';

class SuccessPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <section className="success-page animation-page-load-long">
          <div className="success-page__content">
            <div className="success-page__title">Ваш заказ принят!</div>
            <div className="success-page__text">
              В ближайшее время Ваш заказ будет обработан. Статус заказа можно отследить <Link to={"/orders"}><b>здесь</b></Link>.<br/>Спасибо!
            </div>
            <Link to={"/"}><div className="success-button"><p>НА ГЛАВНУЮ</p></div></Link>
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