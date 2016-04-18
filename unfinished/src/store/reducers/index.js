import {initialShipData} from 'lib';

export function updateShip(state, key, value) {
  return state.set(key, value);
}

export default (state = initialShipData, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'UPDATE_SHIP':
      return updateShip(state, payload.key, payload.value);
    default:
      return state;
  }
}
