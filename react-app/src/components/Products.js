import React, {Component} from 'react';
import '../theme/css/index.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation'

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Navigation />
        <p>Продукты</p>
        <Link to={'/'}>home</Link><br/>
        <Link to={'/categories'}>Категории</Link>
        <img src="/images/image_1.png"/>
        <div className="image-div"></div>
      </div>
    );
  }
}
