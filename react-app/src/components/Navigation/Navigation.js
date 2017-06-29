import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/bootstrap-datepicker3.min.css';
import {Link} from 'react-router-dom';
import * as modelActions from '../../actions';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  mobileMenuClick() {
    const { dispatch, session } = this.props;
    dispatch(modelActions.setMobNavElement(!session.get('mobNavElement')));
  }

  render() {
    const logoImg = {
      width: '65px',
      height: '40px',
      margin: '5px'
    };

    const { session } = this.props;

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
                  <div className="mob-rectangle"></div>
                </div>
                }
                <span className="glyphicon glyphicon-log-in  mob-menu-right"></span>
                <span className="glyphicon glyphicon-user  mob-menu-right"></span>
                <span id="mobile-menu-option" className="glyphicon glyphicon-cog  mob-menu-right"></span>
                <span className="glyphicon glyphicon-search  mob-menu-right"></span>
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
                <li><Link to={'/categories'}>Контакты</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={'/categories'}><span className="glyphicon glyphicon-search"></span>
                  <span className="mob-nav-text">Поиск</span>
                </Link>
                </li>
                <li id="menu-option">
                  <Link to={'/categories'}>
                    <span className="glyphicon glyphicon-cog"></span>
                    <span className="mob-nav-text">Настройки</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/categories'}>
                    <span className="glyphicon glyphicon-log-out"></span>
                    <span className="mob-nav-text">Выход</span>
                  </Link>
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
  // dealer: store.dealer,
}))(Navigation);
