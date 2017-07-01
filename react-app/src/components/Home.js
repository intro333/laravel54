import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import MenuMobile from './Popups/MenuMobile';
import {
  setUserToken,
} from '../api';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    setUserToken(dispatch);
  }

  render() {
    const { token } = this.props;

    // console.log('tokenn', token)

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
  token: store.api.get('userToken'),
}))(Home);