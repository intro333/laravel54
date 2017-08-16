/* global NODE_ENV */

import { combineReducers } from 'redux';
import { List, Map, OrderedMap } from 'immutable';
import products from './components/Products/redusers';

// Just ease ESLint rule
const map = Map;
const orderedMap = OrderedMap;
const list = List;

export const api = (state = map({
  categories: map(),
  products: map(),
  productsForCart: map(),
  dataOfPersonalAccount: map(),
  imagePath: false,
  orders: map(),

}), action) => {
  switch (action.type) {

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    case 'SET_PRODUCTS':
      return state.set('products', action.products);

    case 'SET_PRODUCTS_FOR_CART':
      return state.set('productsForCart', action.productsForCart);

    case 'SET_DATA_OF_PERSONAL_ACCOUNT':
      return state.set('dataOfPersonalAccount', action.dataOfPersonalAccount);

    case 'SET_USER_IMAGE':
      return state.set('imagePath', action.imagePath);

    case 'SET_ORDERS':
      return state.set('orders', action.orders);

    default:
      return state;
  }
};

let defaultSessionState = map({
  userInfo: map(),
  mobNavElement: true,
  categoryId: null,
  categoryName: null,
  productCounts: 0
});

const session = (state = defaultSessionState, action) => {
  switch (action.type) {

    case 'SET_USER_INFO':
      return state.set('userInfo', action.userInfo);

    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    case 'SET_CATEGORY_ID':
      return state.set('categoryId', action.categoryId);

    case 'SET_CATEGORY_NAME':
      return state.set('categoryName', action.categoryName);

    case 'SET_PRODUCT_COUNTS':
      return state.set('productCounts', action.productCounts);

    default:
      return state;
  }
};

export default combineReducers({
  api,
  session,
  products,
});
