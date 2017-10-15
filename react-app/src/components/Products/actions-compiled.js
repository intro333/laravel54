'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOrderNumberInp = changeOrderNumberInp;
exports.changeSuccessModalDisplay = changeSuccessModalDisplay;
exports.errorModalDisplay = errorModalDisplay;
exports.setScrollTop = setScrollTop;
exports.setResize = setResize;
function changeOrderNumberInp(orderNumberInp) {
  return { type: 'CHANGE_ORDER_NUMBER_INP', orderNumberInp: orderNumberInp };
}

function changeSuccessModalDisplay(successModalDisplay) {
  return { type: 'CHANGE_SUCCESS_MODAL_DISPLAY', successModalDisplay: successModalDisplay };
}

function errorModalDisplay(errorModalDisplay) {
  return { type: 'SET_ERROR_MODAL_DISPLAY', errorModalDisplay: errorModalDisplay };
}

function setScrollTop(scrollTop) {
  return { type: 'SET_SCROLL_TOP', scrollTop: scrollTop };
}

function setResize(resize) {
  return { type: 'SET_RESIZE', resize: resize };
}

//# sourceMappingURL=actions-compiled.js.map