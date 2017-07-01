export function getUserToken(userToken) {
  return { type: 'GET_USER_TOKEN', userToken };
}

export function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement };
}
