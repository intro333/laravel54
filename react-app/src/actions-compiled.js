'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserInfo = setUserInfo;
exports.setMobNavElement = setMobNavElement;
exports.setCategories = setCategories;
exports.setProducts = setProducts;
exports.setCategoryId = setCategoryId;
exports.setCategoryName = setCategoryName;
exports.setProductsForCart = setProductsForCart;
exports.setDataOfPersonalAccount = setDataOfPersonalAccount;
function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', userInfo: userInfo };
}

function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement: mobNavElement };
}

function setCategories(categories) {
  return { type: 'SET_CATEGORIES', categories: categories };
}

function setProducts(products) {
  return { type: 'SET_PRODUCTS', products: products };
}

function setCategoryId(categoryId) {
  return { type: 'SET_CATEGORY_ID', categoryId: categoryId };
}

function setCategoryName(categoryName) {
  return { type: 'SET_CATEGORY_NAME', categoryName: categoryName };
}

function setProductsForCart(productsForCart) {
  return { type: 'SET_PRODUCTS_FOR_CART', productsForCart: productsForCart };
}

function setDataOfPersonalAccount(dataOfPersonalAccount) {
  return { type: 'SET_DATA_OF_PERSONAL_ACCOUNT', dataOfPersonalAccount: dataOfPersonalAccount };
}

//# sourceMappingURL=actions-compiled.js.map