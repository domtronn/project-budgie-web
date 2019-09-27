import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const count = useSelector(s => s.app.count || 0)
  const even = count % 2 === 0
  const dispatch = useDispatch()

  return (
    <div>
      <>
        You're on
        <b>{count}</b>
      </>
      <div r-if={even}>EVEN!</div>
      <button onClick={~dispatch({ type: 'inc-counter' })}> + </button>
      <button onClick={~dispatch({ type: 'dec-counter' })}> - </button>
    </div>
  )
}
