import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import MenuMobile from './Popups/MenuMobile';
import {
  setUserInfo,
} from '../api';
import classNames from 'classnames';

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
    const { dispatch, session } = this.props;
    setUserInfo(dispatch);
  }

  componentDidMount() {
    this.sliderGo(2000, 4000, 6000);
    var timerId = setInterval(function () {
      this.sliderGo(2000, 4000, 6000);
    }.bind(this), 6000);
    this.setState({
      timerId: timerId
    });
  }

  componentWillUnMount() {
    clearInterval(this.state.timerId)
  }

  sliderGo(one, two, three) {
      setTimeout(function () {
        this.setState({
          displayImg_1: true,
          displayImg_2: false,
        });
      }.bind(this), one);
      setTimeout(function () {
        this.setState({
          displayImg_2: true,
          displayImg_3: false,
        });
      }.bind(this), two);
      setTimeout(function () {
        this.setState({
          displayImg_3: true,
          displayImg_1: false,
        });
      }.bind(this), three);
  }

  render() {
    var sliderImg_1 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_1
    });
    var sliderImg_2 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_2
    });
    var sliderImg_3 = classNames({
      'slider-img': true,
      'show-hide': this.state.displayImg_3
    });

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-slider">
          <img className={sliderImg_1} src="https://www.w3schools.com/w3images/workbench.jpg" />
          <img className={sliderImg_2} src="https://www.w3schools.com/w3images/coffee.jpg" />
          <img className={sliderImg_3} src="https://www.w3schools.com/w3images/sound.jpg" />

        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Home);