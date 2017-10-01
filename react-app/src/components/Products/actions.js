export function changeOrderNumberInp(orderNumberInp) {
  return { type: 'CHANGE_ORDER_NUMBER_INP', orderNumberInp };
}

export function changeSuccessModalDisplay(successModalDisplay) {
  return { type: 'CHANGE_SUCCESS_MODAL_DISPLAY', successModalDisplay };
}

export function setScrollTop(scrollTop) {
  return {type: 'SET_SCROLL_TOP', scrollTop};
}

export function setResize(resize) {
  return { type: 'SET_RESIZE', resize };
}
