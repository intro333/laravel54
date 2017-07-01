export function setUserToken(userToken) {
  return { type: 'SET_USER_TOKEN', userToken };
}

export function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement };
}

export function setCategories(categories) {
  return { type: 'SET_CATEGORIES', categories };
}
