import React, {Component} from 'react';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/bootstrap-datepicker3.min.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <div className="main-container">
          <div className="category-head">
            <h3 className="bread-crumbs-on-page">Категории</h3>
          </div>
          <div className="category-all">
            <div className="category-item">
              <Link to={'/products'}>
                <div className="category-item__img">
                  <img src="/images/category/meat-or-chicken.jpg" width="170" />
                  <div className="category-item__name"> Мясо и курица </div>
                </div>
              </Link>
            </div>
            <div className="category-item">
              <Link to={'/products'}>
                <div className="category-item__img">
                  <img src="/images/category/fruits-and-vegetables.jpg" width="170" />
                  <div className="category-item__name"> Фрукты, овощи </div>
                </div>
              </Link>
            </div>
            <div className="category-item">
              <Link to={'/products'}>
                <div className="category-item__img">
                  <img src="/images/category/dairy.jpg" width="170" />
                  <div className="category-item__name"> Молочные продукты </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
