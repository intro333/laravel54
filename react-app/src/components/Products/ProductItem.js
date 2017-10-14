import React, {Component} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../../theme/css/bootstrap-datepicker3.min.css';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {
  addProductToCart,
  showProductsInCart
} from '../../api';
import { changeSuccessModalDisplay, setScrollTop, setResize } from './actions';
import { isEmptyMap, isEmptyArray } from '../../helpers';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      orderNumberInp: 0,
      errorBorderRed: false,
      inputPlaceHolder: '',
      addButtonText: 'Добавить в корзину',
      addToCartButtonStyle: {
        background: 'steelblue'
      },
    }
  }

  componentWillMount() {
    const {dispatch} = this.props;
    const data = {
      emptyArray: true
    };
    showProductsInCart(dispatch, data);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(changeSuccessModalDisplay(false));
    // window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const { dispatch } = this.props;
      var target = event.target || event.srcElement;
      let scrollTop = target.body.scrollTop;
      dispatch(setScrollTop(scrollTop));
    });
    window.addEventListener('resize', (event) => {
      const { dispatch } = this.props;
      var target = event.target || event.srcElement;
      let resize = target.innerWidth;
      dispatch(setResize(resize));
    });
  }

  getCountProductCart() {
    const { productsForCart } = this.props;
    const product = isEmptyArray(productsForCart) && productsForCart.filter((item) => item.name === this.props.itemName);
    return parseInt(this.state.orderNumberInp) ? parseInt(this.state.orderNumberInp) : (isEmptyArray(product) ? product[0]['count'] : 1);
  }

  setPlusNumber() {

    var inputVal = this.getCountProductCart();
    if (inputVal < 99) {
      this.setState({
        orderNumberInp: (parseInt(inputVal) + 1)
      });
    } else if (isNaN(inputVal)) {
      this.setState({
        orderNumberInp: 1,
        errorBorderRed: false
      });
    }
  }

  setMinusNumber() {
    const { productsForCart } = this.props;
    const product = isEmptyArray(productsForCart) && productsForCart.filter((item) => item.name === this.props.itemName);
    var inputVal = this.getCountProductCart();
    if (inputVal > 1) {
      this.setState({
        orderNumberInp: (parseInt(inputVal) - 1)
      });
    } else if (isNaN(inputVal)) {
      this.setState({
        orderNumberInp: 1,
        errorBorderRed: false
      });
    }
  }

  setChangeNumber(e) {
    var targetValue = e.target.value;
    if(targetValue <= 99 && targetValue > 0 || targetValue === '') {
      this.setState({
        orderNumberInp: parseInt(targetValue),
        errorBorderRed: false,
        inputPlaceHolder: ''
      });
    }
  }

  addProductToCart() {
    if (this.props.ordersQuota && this.props.ordersQuota.status) {
      let productCounts = this.getCountProductCart();

      if (productCounts) {
        const { dispatch } = this.props;
        const data = {
          barCode: this.props.barCode,
          productId: this.props.productId,
          productCounts: productCounts,
        };
        addProductToCart(dispatch, data);
        this.setState({
          addButtonText: 'Товар в корзине',
          addToCartButtonStyle: {
            background: '#3c763d'
          },
        });
        dispatch(changeSuccessModalDisplay(true));
      } else {
        this.setState({
          errorBorderRed: true,
          inputPlaceHolder: '?'
        });
      }
    } else {
      this.setState({
        addButtonText: 'Доставка закрыта'
      });
    }

  }

  render() {
    const { productsForCart } = this.props;
    const categoryItemImg = {
      padding: '0 20px 0 20px'
    };

    const orderNumberInp = classNames({
      'order-number-inp': true,
      'error-border-red': this.state.errorBorderRed
    });

    const product = isEmptyMap(productsForCart) && productsForCart.filter((item) => item.name === this.props.itemName);
    var inputVal = this.state.orderNumberInp ? this.state.orderNumberInp : (isEmptyArray(product) ? product[0]['count']: 1);
    var inputPlaceHolder = this.state.inputPlaceHolder;
    var addToCartButtonText = isEmptyArray(product) ? 'Товар в корзине' : this.state.addButtonText;
    var addToCartButtonStyle = this.props.ordersQuota && this.props.ordersQuota.status ? (isEmptyArray(product) ? { background: '#3c763d' } : this.state.addToCartButtonStyle) : { background: '#aab5bf' };

    return (
      <div className="category-item animation-page-load-medium">
        <div className="category-item__img" style={categoryItemImg}>
          <img src={'/storage/images/products/' + this.props.imgSrc} width="190" />
          <div className="category-item__name"> {this.props.itemName}</div>
          <div className="category-item__price-measure">
            <span>{this.props.price} Р / {this.props.unit}</span>
            <div className="order-table__cell">
              <div className="b-number">
                <div className="order-number">
                  <div className="order-number__field">
                    <input
                      className={orderNumberInp}
                      type="number"
                      max="99"
                      min="0"
                      value={inputVal}
                      placeholder={inputPlaceHolder}
                      onChange={this.setChangeNumber.bind(this)}
                    />
                  </div>
                  <div
                    className="order-number__spin minus order-spin-minus"
                    onClick={this.setMinusNumber.bind(this)}
                  ></div>
                  <div
                    className="order-number__spin plus order-spin-plus"
                    onClick={this.setPlusNumber.bind(this)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="add-to-cart-button"
            style={addToCartButtonStyle}
            onClick={this.addProductToCart.bind(this)}
          >
            <p>{addToCartButtonText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
  products: store.products,
  productsForCart: store.api.get('productsForCart'),
}))(ProductItem);