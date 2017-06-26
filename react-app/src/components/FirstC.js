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
        <p>Hello world!</p>
        <Link to={`/roster`}>roster</Link>
        <img src="/images/image_1.png"/>
        <div className="image-div"></div>
        <form method="POST" action="/logout">
          <input type="submit" value="Logout" />
        </form>
      </div>
    );
  }
}
