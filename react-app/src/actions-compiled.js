'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserToken = setUserToken;
exports.setMobNavElement = setMobNavElement;
exports.setCategories = setCategories;
function setUserToken(userToken) {
  return { type: 'SET_USER_TOKEN', userToken: userToken };
}

function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement: mobNavElement };
}

function setCategories(categories) {
  return { type: 'SET_CATEGORIES', categories: categories };
}

//# sourceMappingURL=actions-compiled.js.map