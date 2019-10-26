import sw from '@u/switch'

export default (state = 0, { type, payload }) => sw({
  'add-funds': (amt) => state + +amt,
  'set-funds': (amt) => +amt,
  default: state,
})(type, payload)
