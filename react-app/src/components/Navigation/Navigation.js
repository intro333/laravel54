import React, {Component} from 'react';
import '../../theme/css/main.css';
import '../../theme/css/bootstrap-datepicker3.min.css';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to={'/'}>Главная</Link></li>
              <li><Link to={'/categories'}>Категории</Link></li>
              <li><Link to={'/products'}>Продукты</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}
