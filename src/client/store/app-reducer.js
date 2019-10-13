import sw from '@u/switch'

export default (state = {}, { type, payload }) => sw({
  'inc-counter': ~({ count: state.count + 1 }),
  'dec-counter': ~({ count: state.count - 1 }),

  default: state,
})(type, payload)
