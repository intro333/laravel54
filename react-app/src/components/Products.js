import React, {Component} from 'react';
import '../theme/css/index.css';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Продукты</p>
        <Link to={'/'}>home</Link><br/>
        <Link to={'/categories'}>Категории</Link>
        <img src="/images/image_1.png"/>
        <div className="image-div"></div>
      </div>
    );
  }
}
