
import MouseClick from './MouseClick'
import {Counter} from './Counter'
import  Reloj  from "./Reloj";


function App() {
  return (
    <div>
      <Counter initialValue={0} change={1}/>
      <MouseClick />
      <Reloj />
    </div>
  )
}

export default App
