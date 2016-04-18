import {initialShipData} from 'lib';

export default (state = initialShipData, action) => {

  const payload = action.payload;

  switch (action.type) {
    case 'UPDATE_SHIP_INFO_KEY':
      return updateShipInfoKey(state, payload.key, payload.value);
    case 'UPDATE_DESTINATION':
      return updateDestination(state, payload.newDestination);
    case 'UPDATE_SPEED':
      return updateSpeed(state, payload.newSpeed);
    case 'UPDATE_POSITION':
      return updatePosition(state, payload.newPosition)
    default:
      return state;
  }
}

export function updateShip(state, key, value) {
  return state.set(key, value);
}

export function updateShipInfoKey(state, key, value) {
  const info = state.get('info');
  return updateShip(state, 'info', info.set(key, value));
}

export function updateDestination(state, newDestination) {
  return updateShip(state, 'destination', newDestination);
}

export function updateSpeed(state, newSpeed) {
  return updateShip(state, 'speed', newSpeed);
}

export function updatePosition(state, newPosition) {
  return updateShip(state, 'position', newPosition);
}

