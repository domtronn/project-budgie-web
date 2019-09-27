import sw from '../utils/switch'

export default (state = {}, { type, payload }) => sw({
  'inc-counter': ~({ count: state.count + 1 }),
  'dec-counter': ~({ count: state.count - 1 }),

  default: { count: 0 },
})(type, payload)
