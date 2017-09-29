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
      timerId: 0,
      clickTimeout_1: 0,
      clickTimeout_2: 0,
      clickTimeout_3: 0,
    };
  }

  componentWillMount() {
    const { dispatch, session } = this.props;
    setUserInfo(dispatch);
  }

  componentDidMount() {
    this.sliderGo(2000, 4000, 6000);
    var timerId = setInterval(() => {
      this.sliderGo(2000, 4000, 6000);
    }, 6000);
    this.setState({
      timerId: timerId
    });
    console.log("m", timerId)
  }

  componentWillUnmount() {
    console.log("unm", this.state.timerId);
    console.log("unm", this.state.clickTimeout_1);
    console.log("unm", this.state.clickTimeout_2);
    console.log("unm", this.state.clickTimeout_3);
    clearInterval(this.state.timerId);
    clearTimeout(this.state.clickTimeout_1);
    clearTimeout(this.state.clickTimeout_2);
    clearTimeout(this.state.clickTimeout_3);
  }

  sliderGo(one, two, three) {
    this.setState({
      clickTimeout_1: setTimeout(() => {
        this.setState({
          displayImg_1: true,
          displayImg_2: false,
        });
      }, one)
    });
    this.setState({
      clickTimeout_2: setTimeout(() => {
        this.setState({
          displayImg_2: true,
          displayImg_3: false,
        });
      }, two)
    });
    this.setState({
      clickTimeout_2: setTimeout(() => {
        this.setState({
          displayImg_3: true,
          displayImg_1: false,
        });
      }, three)
      });
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