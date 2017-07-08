import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import MenuMobile from './Popups/MenuMobile';
import {
  setUserInfo,
} from '../api';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    setUserInfo(dispatch);
  }

  render() {
    // const { session } = this.props;
    // const sessionUserName = session.get('userInfo');
    // console.log('tokenn', sessionUserName)

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <h1>Главная страница.</h1>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(Home);