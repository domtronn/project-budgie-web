import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const count = useSelector(s => s.app.count || 0)
  const dispatch = useDispatch()

  return (
    <div>
      <>
        You're on
        <b>{count}</b>
      </>
      <button onClick={dispatch.bind({}, { type: 'inc-counter' })}> + </button>
      <button onClick={dispatch.bind({}, { type: 'dec-counter' })}> - </button>
    </div>
  )
}
