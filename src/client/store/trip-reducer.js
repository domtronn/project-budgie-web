import sw from '@u/switch'

export default (state = { 0: {} }, { type, payload }) => sw({
  'add-leg': (leg) => ({ ...state, [leg]: {} }),

  'set-location': ({ id, location }) => ({ ...state, [id]: { ...state[id], ...location } }),
  'set-days': ({ id, days }) => ({ ...state, [id]: { ...state[id], days } }),

  default: state,
})(type, payload)
