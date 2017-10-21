import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import * as modelActions from '../../actions';
import {
  logOut,
  getProductCounts,
} from '../../api';
import FaFileText from 'react-icons/lib/fa/file-text';
import FaUser from 'react-icons/lib/fa/user';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import Loader  from '../Popups/Loader';
import SuccessSaveModal  from '../Popups/SuccessSaveModal';
import Modal  from '../Popups/Modal';
import { changeSuccessModalDisplay, errorModalDisplay } from '../Products/actions';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(errorModalDisplay(false));
    dispatch(changeSuccessModalDisplay(false));
    dispatch(modelActions.setOpenCloseModal({
      show: false,
      textHeader: '',
      textAlign: 'center',
      function: null
    }));
  }

  mobileMenuClick() {
    const { dispatch, session } = this.props;
    dispatch(modelActions.setMobNavElement(!session.get('mobNavElement')));
  }

  logOut() {
    const { token } = this.props;
    logOut(token);
  }

  closeMobNavElem() {
    const { dispatch } = this.props;
    dispatch(modelActions.setMobNavElement(true));
  }

  handlerCloseModal() {
    const { dispatch } = this.props;
    dispatch(errorModalDisplay(false));
  }

  render() {
    const { dispatch, session, products } = this.props;
    //Заполнить количество продуктов в корзине в меню
    getProductCounts(dispatch);

    const productsCounts = session.get('productCounts');
    var cartUrl = productsCounts && productsCounts !== 0 ? '/cart' : '/';
    // console.log(2, window.location.href)

    return (
      <div>
        <Loader />
        <SuccessSaveModal
          handlerCloseModal={this.handlerCloseModal.bind(this)}
          successModalDisplay={products.get('errorModalDisplay')}
          modalTitle="Нет соединения."
          modalSubTitle="Перезагрузите страницу."
          colorBack="#ffe500"
          colorText="#000"
        />
        <Modal />
        <div className="contacts-main">
          <div className="contacts-item">
            <span>Сергей</span>
            <span>8(985)851-20-86</span>
          </div>
          <div className="contacts-item">
            <span>Елена</span>
            <span>8(929)622-98-15</span>
          </div>
          <div className="contacts-item">
            <span>Email</span>
            <span>shop-travel@ya.ru</span>
          </div>
        </div>
        <div className="mobile-nav-bar-1">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="mobile-nav-head">
                  {session.get('mobNavElement') &&
                    <div className="mob-nav-elem" onClick={this.mobileMenuClick.bind(this)}>
                      <div className="mob-rectangle"></div>
                      <div className="mob-rectangle"></div>
                      <div className="mob-rectangle"></div>
                    </div>
                  }
                {!session.get('mobNavElement') &&
                <div className="mob-nav-elem" onClick={this.mobileMenuClick.bind(this)}>
                  <div className="close-mobile-elem"></div>
                </div>
                }
                <span
                  onClick={this.logOut.bind(this)}
                  className=" mob-menu-right"
                ><FaSignOut size="17"/></span>
                <Link onClick={this.closeMobNavElem.bind(this)} to={'/cart'}>
                  <span className="mob-menu-right"><FaShoppingCart size="17"/></span>
                  <div className="menu__item--basket__amount">{productsCounts && productsCounts}</div>
                </Link>
                <Link onClick={this.closeMobNavElem.bind(this)}
                      to={'/personal-account'}>
                  <span className="mob-menu-right"><FaUser size="17"/></span>
                  {/*<span className="glyphicon glyphicon-user  mob-menu-right"></span>*/}
                </Link>
                <Link
                  onClick={this.closeMobNavElem.bind(this)}
                  to={'/orders'}
                >
                  {/*<span className="glyphicon glyphicon-list-alt mob-menu-right"></span>*/}
                  <span className="mob-menu-right"><FaFileText size="16"/></span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="mobile-nav-bar-2">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li id="mob-www-logo">
                  <Link to={'/'}>
                    <span>Главная</span>
                  </Link>
                </li>
                <li><Link to={'/categories'}>Продукты</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/orders">
                  {/*<span className="glyphicon glyphicon-list-alt"></span>*/}
                  <FaFileText size="15"/>
                  <span className="mob-nav-text">Заказы</span>
                </Link>
                </li>
                <li><Link to={'/personal-account'}>
                  {/*<span className="glyphicon glyphicon-user"></span>*/}
                  <FaUser size="16" />
                  <span className="mob-nav-text">Мой кабинет</span>
                </Link>
                </li>
                <li><Link to={cartUrl}>
                  <FaShoppingCart size="16"/>
                  <span className="mob-nav-text">Корзина</span>
                  <div className="menu__item--basket__amount">{productsCounts && productsCounts}</div>
                </Link>
                </li>
                <li onClick={this.logOut.bind(this)}>
                  <a>
                    <FaSignOut size="16"/>
                    <span className="mob-nav-text">Выход</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  token: store.api.get('userToken'),
  api: store.api,
  products: store.products,
}))(Navigation);
