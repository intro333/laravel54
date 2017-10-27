import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as modelActions from '../../actions';

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  closeMobNavElem() {
    const { dispatch } = this.props;
    dispatch(modelActions.setMobNavElement(true));
  }

  render() {
    return (
      <footer id="footer">
        <div className="layout">
          <div className="b-footer">
            <div className="b-menu">
              <nav className="menu_footer menu_footer--footer">
                <li className="menu__item_footer">
                  <Link
                    className="menu__item__link_footer"
                    onClick={this.closeMobNavElem.bind(this)} to={'/cart'}
                  >Продукты</Link></li>
                <li className="menu__item_footer">
                  <Link
                    className="menu__item__link_footer"
                    onClick={this.closeMobNavElem.bind(this)} to={'/orders'}
                  >Мои заказы</Link></li>
                <li className="menu__item_footer">
                  <Link
                    className="menu__item__link_footer"
                    onClick={this.closeMobNavElem.bind(this)} to={'/personal-account'}
                  >Личный кабинет</Link></li>
              </nav>
            </div>
            <div className="b-footer__bottom">
              <div className="footer__copy">&copy; «Продукты из Орла», 2017</div>
              {/*<nav className="footer__social"><a href="#" target="_blank" className="footer__social__item footer__social__item--fb"></a><a href="#" target="_blank" className="footer__social__item footer__social__item--vk"></a><a href="#" target="_blank" className="footer__social__item footer__social__item--yt"></a><a href="#" target="_blank" className="footer__social__item footer__social__item--ig"></a></nav>*/}
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Footer);