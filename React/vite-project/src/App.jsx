import {HelloWorld, Message} from "./HelloWorld"
import { Welcome } from "./Welcome"
export function App(){
    return(
        <div>
            <h1>My Aplication</h1>
            <hr />
            <HelloWorld />
            <hr />
            <Message />
            <HelloWorld  />
            <Welcome name = "Jimmy" age={40} />
        </div>
    )
}
// export function HelloWorld() {
//     return <h2>Hello World</h2>}

// export function Message() {
//     return <p>Prueba</p>}