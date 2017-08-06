export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', userInfo };
}

export function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement };
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

export function setUserImage(imagePath) {
  return { type: 'SET_USER_IMAGE', imagePath };
}

export function setProductCounts(productCounts) {
  return { type: 'SET_PRODUCT_COUNTS', productCounts };
}