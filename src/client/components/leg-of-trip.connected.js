import { useSelector, useDispatch } from 'react-redux'
import { _, it } from 'param.macro'

import LegOfTrip from '@c/leg-of-trip'
import { legs } from '@d/trip.json'

export default ({ id, ...props }) => {
  const dispatch = useDispatch()
  const trip = useSelector(it?.trip[id])

  const setLocation = dispatch({ type: 'set-location', payload: { id, location: _ } })
  const setDays = dispatch({ type: 'set-days', payload: { id, days: _ } })

  return (
    <LegOfTrip
      {...props}
      copy={legs[id]}
      trip={trip}
      setLocation={setLocation}
      setDays={setDays}
    />
  )
}
