'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOrderNumberInp = changeOrderNumberInp;
exports.changeSuccessModalDisplay = changeSuccessModalDisplay;
exports.setScrollTop = setScrollTop;
function changeOrderNumberInp(orderNumberInp) {
  return { type: 'CHANGE_ORDER_NUMBER_INP', orderNumberInp: orderNumberInp };
}

function changeSuccessModalDisplay(successModalDisplay) {
  return { type: 'CHANGE_SUCCESS_MODAL_DISPLAY', successModalDisplay: successModalDisplay };
}

function setScrollTop(scrollTop) {
  return { type: 'SET_SCROLL_TOP', scrollTop: scrollTop };
}

//# sourceMappingURL=actions-compiled.js.map