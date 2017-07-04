/* global NODE_ENV */

import { combineReducers } from 'redux';
import { List, Map, OrderedMap } from 'immutable';
import products from './components/Products/redusers';

// Just ease ESLint rule
const map = Map;
const orderedMap = OrderedMap;
const list = List;

export const api = (state = map({
  userToken: null,
  categories: map(),
  products: map(),
  productsForCart: map(),

}), action) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return state.set('userToken', action.userToken);

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    case 'SET_PRODUCTS':
      return state.set('products', action.products);

    case 'SET_PRODUCTS_FOR_CART':
      return state.set('productsForCart', action.productsForCart);

    default:
      return state;
  }
};

let defaultSessionState = map({
  mobNavElement: true,
  categoryId: null,
  categoryName: null,
});

const session = (state = defaultSessionState, action) => {
  switch (action.type) {
    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    case 'SET_CATEGORY_ID':
      return state.set('categoryId', action.categoryId);

    case 'SET_CATEGORY_NAME':
      return state.set('categoryName', action.categoryName);

    default:
      return state;
  }
};

export default combineReducers({
  api,
  session,
  products,
});
