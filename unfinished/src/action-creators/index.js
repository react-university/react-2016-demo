export function updateShipInfoKey(key, value) {
  return {
    type: 'UPDATE_SHIP_INFO_KEY',
    payload: {
      key,
      value
    }
  }
}

export function updateDestination(newDestination) {
  return {
    type: 'UPDATE_DESTINATION',
    payload: {
      newDestination
    }
  }
}

export function updateSpeed(newSpeed) {
  return {
    type: 'UPDATE_SPEED',
    payload: {
      newSpeed
    }
  }
}


export function updatePosition(newPosition) {
  return {
    type: 'UPDATE_POSITION',
    payload: {
      newPosition
    }
  }
}
