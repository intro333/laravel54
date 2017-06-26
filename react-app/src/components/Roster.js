import React, {Component} from 'react';
import '../theme/css/index.css';
import { Link } from 'react-router-dom';

export default class FirstC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Hi from  Roster!</p>
        <Link to={'/'}>home</Link>
        <img src="/images/image_1.png"/>
        <div className="image-div"></div>
      </div>
    );
  }
}
