import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const incrementHandlerBy5 = () => {
    dispatch({ type: 'incrementBy5' })
  }

  const decrementHandlerBy5 = () => {
    dispatch({ type: 'decrementBy5' })
  }

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {/* <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div> */}
      <div>
        <button onClick={incrementHandlerBy5}>Increment By 5</button>
        <button onClick={decrementHandlerBy5}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
