export function updateShip(key, value) {
  return {
    type: 'UPDATE_SHIP',
    payload: {
      key,
      value
    }
  }
}
