export function startSpinner() {
  return { type: 'START_SPINNER' };
}

export function setMobNavElement(mobNavElement) {
  return { type: 'SET_MOB_NAV_ELEMENT', mobNavElement };
}
