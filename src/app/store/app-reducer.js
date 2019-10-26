import sw from '@u/switch'
import { map, flatten } from 'ramda'

import { store } from '@fire/'
import { it } from 'param.macro'

export const getRates = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const ratesToGet = map(it?.currency?.code, state.trip)
    const col = store.collection('rates')
    const rates = map(a => col.where('code', '==', a || 'GBP').get(), ratesToGet)
    const ratesP = await Promise.all(Object.values(rates))
    const inter = map(it.docs, ratesP)

    const data = map(it?.data(), flatten(inter))
    dispatch({ type: 'set-rates', payload: data })
  }
}

export default (state = {}, { type, payload }) => sw({
  'inc-counter': ~({ count: state.count + 1 }),
  'dec-counter': ~({ count: state.count - 1 }),
  'set-rates': (rates) => ({ ...state, rates }),

  default: state,
})(type, payload)