import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as modelActions from '../../actions';

class MenuMobile extends Component {
  constructor(props) {
    super(props);
  }

  closeMobNavElem() {
    const { dispatch } = this.props;
    dispatch(modelActions.setMobNavElement(true));
  }

  render() {
    const { session } = this.props;
    const showPopupMonNavElement = classNames({
      'popup_mob-nav-elem': true,
      'show-hide': session.get('mobNavElement')
    });

    return (
      <div className={showPopupMonNavElement}>
        <div onClick={this.closeMobNavElem.bind(this)} className="popup_mob-nav-elem_bg"></div>
        <div className="for-mob-nav-elem">
          <div id="blok_mob-nav-elem">
            <Link onClick={this.closeMobNavElem.bind(this)} to={'/'}><div className="on-off-nmob-nav-elem"><p>Главная</p></div></Link>
            <Link onClick={this.closeMobNavElem.bind(this)} to={'/categories'}><div className="on-off-nmob-nav-elem"><p>Продукты</p></div></Link>
            {/*<Link onClick={this.closeMobNavElem.bind(this)} to={'/products'}><div className="on-off-nmob-nav-elem"><p>Контакты</p></div></Link>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
}))(MenuMobile);
