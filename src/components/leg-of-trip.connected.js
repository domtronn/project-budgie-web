import { useSelector, useDispatch } from 'react-redux'
import { _, it } from 'param.macro'

import LegOfTrip from '#/leg-of-trip'
import { legs } from '-/trip.json'

export default ({ id, ...props }) => {
  const dispatch = useDispatch()
  const location = useSelector(it?.trip[id]?.location)
  const days = useSelector(it?.trip[id]?.days)

  const setLocation = dispatch({ type: 'set-location', payload: { id, location: _ } })
  const setDays = dispatch({ type: 'set-days', payload: { id, days: _ } })

  return (
    <LegOfTrip
      {...props}
      copy={legs[id]}
      location={location}
      days={days}
      setLocation={setLocation}
      setDays={setDays}
    />
  )
}
