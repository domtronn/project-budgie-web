import React from 'react'
import { useSelector } from 'react-redux'

const MyState = () => {
  const state = useSelector((s = {}) => (s.app || {}).count)

  return (
    <div>
      <h1>Your data is</h1>
      <code>
        {JSON.stringify(state, null, 2)}
      </code>
    </div>
  )
}

export default MyState
