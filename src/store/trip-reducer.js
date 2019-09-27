import sw from '../utils/switch'

export default (state = {}, { type, payload }) => sw({
  'set-location': ({ id, location }) => ({ ...state, [id]: { ...state[id], location } }),
  'set-days': ({ id, days }) => ({ ...state, [id]: { ...state[id], days } }),

  default: { }
})(type, payload)
