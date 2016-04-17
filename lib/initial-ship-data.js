import {fromJS} from 'immutable'

export default fromJS({
  info: {
    'Ship Name'         : null,
    'Captain'           : null,
    'First Officer'     : null,
    'Chief Engineer'    : null,
    'Tactical Officer'  : null,
    'Helmsman'          : null
  },

  position: [500, 300],

  destination: {
    name          : 'Sol',
    jurisdiction  : 'Federation',
    position      : [500, 300]
  },

  speed: 0
});
