'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserToken = getUserToken;
exports.setMobNavElement = setMobNavElement;
function getUserToken(userToken) {
  return { type: 'GET_USER_TOKEN', userToken: userToken };
}

function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement: mobNavElement };
}

//# sourceMappingURL=actions-compiled.js.map