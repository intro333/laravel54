export function setUserToken(userToken) {
  return { type: 'SET_USER_TOKEN', userToken };
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