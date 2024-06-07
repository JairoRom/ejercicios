import { Counter } from "./Counter";
import Reloj from "./Reloj";

export function App() {
  return(
    <div>
      <Counter initialValue={0} change={1}/>
      <Reloj />
    </div>
  ) 
}