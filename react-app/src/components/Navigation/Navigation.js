import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/bootstrap-datepicker3.min.css';
import {Link} from 'react-router-dom';
import * as modelActions from '../../actions';
import {
  logOut,
  getProductCounts,
} from '../../api';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  mobileMenuClick() {
    const { dispatch, session } = this.props;
    dispatch(modelActions.setMobNavElement(!session.get('mobNavElement')));
  }

  logOut() {
    const { token } = this.props;
    logOut(token);
  }

  render() {
    const logoImg = {
      width: '65px',
      height: '40px',
      margin: '5px'
    };

    const { dispatch, session, api } = this.props;
    //Заполнить количество продуктов в корзине в меню
    getProductCounts(dispatch);

    const productsCounts = session.get('productCounts');
    var cartUrl = productsCounts && productsCounts !== 0 ? '/cart' : '/';
    var productsCount = productsCounts && productsCounts !== 0 ? productsCounts : 0;
    console.log('productsCounts', productsCounts)

    return (
      <div>
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
                  className="glyphicon glyphicon-log-out mob-menu-right"
                ></span>
                {/*<span className="glyphicon glyphicon-cog  mob-menu-right"></span>*/}
                {/*<span className="glyphicon glyphicon-search  mob-menu-right"></span>*/}
                <Link to={'/personal-account'}><span className="glyphicon glyphicon-user  mob-menu-right"></span></Link>
                {/*<div>*/}
                  <Link to={'/cart'}>
                    <span className="glyphicon glyphicon-shopping-cart mob-menu-right"></span>
                    <div className="menu__item--basket__amount">{productsCount}</div>
                  </Link>

                {/*</div>*/}
              </div>
            </div>
          </nav>
        </div>
        <div className="mobile-nav-bar-2">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              {/*<div className="navbar-header">*/}

                {/*<Link to={'/'}><img className="www-logo-image" src="/images/nav/www-logo.jpg" style={logoImg} /></Link>*/}
              {/*</div>*/}
              <ul className="nav navbar-nav">
                <li id="mob-www-logo">
                  <Link to={'/'}>
                    <span>Главная</span>
                  </Link>
                </li>
                <li><Link to={'/categories'}>Продукты</Link></li>
                {/*<li><Link to={'/cart'}>Корзина</Link></li>*/}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {/*<li><a><span className="glyphicon glyphicon-search"></span>*/}
                  {/*<span className="mob-nav-text">Поиск</span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li id="menu-option">*/}
                  {/*<a>*/}
                    {/*<span className="glyphicon glyphicon-cog"></span>*/}
                    {/*<span className="mob-nav-text">Настройки</span>*/}
                  {/*</a>*/}
                {/*</li>*/}
                <li><Link to="/orders">
                  <span className="mob-nav-text">Мои заказы</span>
                </Link>
                </li>
                <li><Link to={cartUrl}>
                  <span className="glyphicon glyphicon-shopping-cart"></span>
                  <span className="mob-nav-text">Корзина</span>
                  <div className="menu__item--basket__amount">{productsCount}</div>
                </Link>
                </li>
                <li>
                  <Link to="sussess-page">
                  <span className="mob-nav-text">Success</span>
                  </Link>
                </li>
                <li><Link to={'/personal-account'}>
                  <span className="glyphicon glyphicon-user"></span>
                  <span className="mob-nav-text">Акаунт</span>
                </Link>
                </li>
                <li onClick={this.logOut.bind(this)}>
                  <a>
                    <span className="glyphicon glyphicon-log-out"></span>
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
}))(Navigation);
