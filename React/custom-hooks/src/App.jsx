import { Counter } from "./Counter"
import { useCounter } from "./useCounter"

function App() {
  const {onCounter,onIncrement}= useCounter()
  return (
    <div>
      <Counter initialValue={0} />
      <button onClick={onIncrement} >{onCounter}</button>
    </div>
  )
}

export default App