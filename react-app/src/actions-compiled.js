'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSpinner = startSpinner;
exports.setMobNavElement = setMobNavElement;
function startSpinner() {
  return { type: 'START_SPINNER' };
}

function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement: mobNavElement };
}

//# sourceMappingURL=actions-compiled.js.map