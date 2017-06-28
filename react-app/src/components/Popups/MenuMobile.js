import React, {Component} from 'react';
import '../../theme/css/main.css';
import {Link} from 'react-router-dom';

export default class MenuMobile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup_mob-nav-elem">
        <div className="popup_mob-nav-elem_bg"></div>
        <div className="for-mob-nav-elem">
          <div id="blok_mob-nav-elem">
            <Link to={'/'}><div className="on-off-nmob-nav-elem"><p>Главная</p></div></Link>
            <Link to={'/categories'}><div className="on-off-nmob-nav-elem"><p>Продукты</p></div></Link>
            <Link to={'/products'}><div className="on-off-nmob-nav-elem"><p>Контакты</p></div></Link>
          </div>
        </div>
      </div>
    );
  }
}