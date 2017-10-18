export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', userInfo };
}

export function setErrors(errors) {
  return { type: 'SET_ERRORS', errors };
}

export function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement };
}

export function setOpenCloseModal(openCloseModal) {
    return { type: 'SET_OPEN_CLOSE_MODAL', openCloseModal };
}

export function setCategories(categories) {
  return { type: 'SET_CATEGORIES', categories };
}

export function setProducts(products) {
  return { type: 'SET_PRODUCTS', products };
}

export function setCategoryId(categoryId) {
  return { type: 'SET_CATEGORY_ID', categoryId };
}

export function setCategoryName(categoryName) {
  return { type: 'SET_CATEGORY_NAME', categoryName };
}

export function setProductsForCart(productsForCart) {
  return { type: 'SET_PRODUCTS_FOR_CART', productsForCart };
}

export function setOrdersQuotaForCart(ordersQuota) {
  return { type: 'SET_ORDERS_QUOTA_FOR_CART', ordersQuota };
}

export function setCurrentOrder(currentOrder) {
  return { type: 'SET_CURRENT_ORDER', currentOrder };
}

export function setCheckTimeQuotaForCart(checkTimeQuota) {
  return { type: 'SET_CHECK_TIME_QUOTA_FOR_CART', checkTimeQuota };
}

export function setUserImage(imagePath) {
  return { type: 'SET_USER_IMAGE', imagePath };
}

export function setProductCounts(productCounts) {
  return { type: 'SET_PRODUCT_COUNTS', productCounts };
}

export function setOrders(orders) {
  return { type: 'SET_ORDERS', orders };
}

export function componentWillReceivePropsChange(componentWillReceivePropsChange) {
  return { type: 'SET_COMPONENT_WILL_RECEIVE_PROPS', componentWillReceivePropsChange };
}

export function setModalLoaderCartSentStatus(modalLoaderCartSentStatus) {
  return { type: 'SET_MODAL_LOADER_CART_SENT_STATUS', modalLoaderCartSentStatus };
}

export function setLoaderStatus(loaderStatus) {
  return { type: 'SET_LOADER_STATUS', loaderStatus };
}

export function setSuccessPageStatus(successPageStatus) {
  return { type: 'SET_SUCCESS_PAGE_STATUS', successPageStatus };
}

export function setTotalSum(totalSum) {
  return { type: 'SET_TOTAL_SUM', totalSum };
}