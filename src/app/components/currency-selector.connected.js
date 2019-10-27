import { useDispatch, useSelector } from 'react-redux'
import CurrencySelector from '@c/currency-selector'

import { _, it } from 'param.macro'

export default ({ props }) => {
  const items = useSelector(it?.app?.rates)
  const currency = useSelector(it?.app?.currency)
  const dispatch = useDispatch()

  return (
    <CurrencySelector
      {...props}
      items={items}
      cur={currency}
      setCurrency={dispatch({ type: 'set-currency', payload: _ })}
    />
  )
}
