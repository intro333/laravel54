import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';

export default class Categories extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="category-item">
        <Link to={'/products'}>
          <div className="category-item__img">
            <img src={this.props.imgSrc} width="170" />
            <div className="category-item__name">{this.props.itemName}</div>
          </div>
        </Link>
      </div>
    );
  }
}
