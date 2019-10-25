import sw from '@u/switch'

export default (state = { 0: {} }, { type, payload }) => sw({
  'add-leg': (leg) => ({ ...state, [leg]: {} }),
  'remove-leg': (leg) => Object
    .entries(state)
    .filter(([k, v]) => +k !== leg - 1)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),

  'set-location': ({ id, location }) => ({ ...state, [id]: { ...state[id], ...location } }),
  'set-days': ({ id, days }) => ({ ...state, [id]: { ...state[id], days } }),

  default: state,
})(type, payload)
