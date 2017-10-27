import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../theme/css/index.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import ModalLoaderCartSent  from '../Popups/ModalLoaderCartSent';
import * as modelActions from '../../actions';
import Footer from '../Navigation/Footer';

class SuccessPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(modelActions.setSuccessPageStatus(null))
  }

  render() {
    const { api } = this.props;
    var status = null;
    const statusNull = <div className="success-page__content"></div>;

    const statusSuccess = <div className="success-page__content">
      <div className="success-page__title">Ваш заказ принят!</div>
      <div className="success-page__text">
        В ближайшее время Ваш заказ будет обработан. Статус заказа можно отследить <Link to={"/orders"}><b>здесь</b></Link>.<br/>Спасибо!
      </div>
      <Link to={"/"}><div className="success-button"><p>НА ГЛАВНУЮ</p></div></Link>
    </div>;

    const statusError = <div className="success-page__content">
      <div className="success-page__title">Заказ не отправлен</div>
      <div className="success-page__text">
        Проверьте интернет соединение или обратитесь к администратору сайта по электронной почте.<br/>Приносим свои извинения.
      </div>
      <Link to={"/"}><div className="success-button"><p>НА ГЛАВНУЮ</p></div></Link>
    </div>;

    switch (api.get('successPageStatus')) {
      case 'success':
        status = statusSuccess;
        break;
      case 'error':
        status = statusError;
        break;
      default:
        status = statusNull;
    }

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <section className="success-page animation-page-load-medium">
            <ModalLoaderCartSent />
            {status}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(SuccessPage);