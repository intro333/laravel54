import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import Footer from './Navigation/Footer';
import MenuMobile from './Popups/MenuMobile';
import {
  setUserInfo,
} from '../api';
import classNames from 'classnames';
import {
  setSecondsArray,
  setIntervalValue,
  } from '../helpers';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayImg_1: false,
      displayImg_2: true,
      displayImg_3: true,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    setUserInfo(dispatch);
  }

  componentDidMount() {
    const seconds = setSecondsArray(3, 4);
    const interval = setIntervalValue(3, 4);
    this.sliderGo(seconds);
    let timerId = setInterval(() => {
      this.sliderGo(seconds);
    }, interval);
    this.setState({
      timerId: timerId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
    for (let i=1;i<=3;i++) {
      let clickTimeout = 'clickTimeout_' + i;
      clearTimeout(this.state[clickTimeout]);
    }

  }

  sliderGo(seconds) {
    for (let i=0;i<seconds.length;i++) {
      let img_1 = i + 1;
      let img_2 = (i + 1) === seconds.length ? 1 : i + 2;
      let clickTimeout = i + 1;
      this.setState({
        ['clickTimeout_' + clickTimeout]: setTimeout(() => {
          this.setState({
            ['displayImg_' + img_1]: true,
            ['displayImg_' + img_2]: false,
          });
        }, seconds[i])
      });
    }
  }

  render() {
    let sliderImg_1 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_1
    });
    let sliderImg_2 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_2
    });
    let sliderImg_3 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_3
    });

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <div className="home-page animation-page-load-medium">
            <div className="main-slider">
              <img className={sliderImg_1} src="/images/main_page/1.jpg" />
              <img className={sliderImg_2} src="/images/main_page/2.jpg" />
              <img className={sliderImg_3} src="/images/main_page/3.jpg" />
              <div className="xf-wrapper">
                <header className="xf-you-love__header">Онлайн-заказ</header>
                <p className="xf-you-love__subheader">продуктов из Орла:</p>
                <ul className="xf-you-love__list">
                  <div>
                    <li className="xf-you-love__item">Легкий заказ на сайте</li>
                    <li className="xf-you-love__item">Значительная экономия времени</li>
                    <li className="xf-you-love__item">Заказ в несколько кликов</li>
                  </div>
                  <div>
                    <li className="xf-you-love__item">Получение заказа в удобное время</li>
                    <li className="xf-you-love__item">Отсутствие большой очередии</li>
                    <li className="xf-you-love__item">Ваш заказ всегда под рукой</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
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
}))(Home);