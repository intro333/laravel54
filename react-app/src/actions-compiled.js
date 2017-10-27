'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserInfo = setUserInfo;
exports.setErrors = setErrors;
exports.setMobNavElement = setMobNavElement;
exports.setOpenCloseModal = setOpenCloseModal;
exports.setCategories = setCategories;
exports.setProducts = setProducts;
exports.setCategoryId = setCategoryId;
exports.setCategoryName = setCategoryName;
exports.setProductsForCart = setProductsForCart;
exports.setOrdersQuotaForCart = setOrdersQuotaForCart;
exports.setCurrentOrder = setCurrentOrder;
exports.setCheckTimeQuotaForCart = setCheckTimeQuotaForCart;
exports.setUserImage = setUserImage;
exports.setProductCounts = setProductCounts;
exports.setOrders = setOrders;
exports.componentWillReceivePropsChange = componentWillReceivePropsChange;
exports.setModalLoaderCartSentStatus = setModalLoaderCartSentStatus;
exports.setLoaderStatus = setLoaderStatus;
exports.setSuccessPageStatus = setSuccessPageStatus;
exports.setTotalSum = setTotalSum;
function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', userInfo: userInfo };
}

function setErrors(errors) {
  return { type: 'SET_ERRORS', errors: errors };
}

function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement: mobNavElement };
}

function setOpenCloseModal(openCloseModal) {
  return { type: 'SET_OPEN_CLOSE_MODAL', openCloseModal: openCloseModal };
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

function setOrdersQuotaForCart(ordersQuota) {
  return { type: 'SET_ORDERS_QUOTA_FOR_CART', ordersQuota: ordersQuota };
}

function setCurrentOrder(currentOrder) {
  return { type: 'SET_CURRENT_ORDER', currentOrder: currentOrder };
}

function setCheckTimeQuotaForCart(checkTimeQuota) {
  return { type: 'SET_CHECK_TIME_QUOTA_FOR_CART', checkTimeQuota: checkTimeQuota };
}

function setUserImage(imagePath) {
  return { type: 'SET_USER_IMAGE', imagePath: imagePath };
}

function setProductCounts(productCounts) {
  return { type: 'SET_PRODUCT_COUNTS', productCounts: productCounts };
}

function setOrders(orders) {
  return { type: 'SET_ORDERS', orders: orders };
}

function componentWillReceivePropsChange(componentWillReceivePropsChange) {
  return { type: 'SET_COMPONENT_WILL_RECEIVE_PROPS', componentWillReceivePropsChange: componentWillReceivePropsChange };
}

function setModalLoaderCartSentStatus(modalLoaderCartSentStatus) {
  return { type: 'SET_MODAL_LOADER_CART_SENT_STATUS', modalLoaderCartSentStatus: modalLoaderCartSentStatus };
}

function setLoaderStatus(loaderStatus) {
  return { type: 'SET_LOADER_STATUS', loaderStatus: loaderStatus };
}

function setSuccessPageStatus(successPageStatus) {
  return { type: 'SET_SUCCESS_PAGE_STATUS', successPageStatus: successPageStatus };
}

function setTotalSum(totalSum) {
  return { type: 'SET_TOTAL_SUM', totalSum: totalSum };
}

//# sourceMappingURL=actions-compiled.js.map