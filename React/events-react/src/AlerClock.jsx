import { Button } from "./Button"

export function AlerClock() {
    function handleShowTime() {   
        const timeNow=new Date()
        alert(timeNow.toLocaleTimeString())
    }
    
    
    return(
    <div>
        <button onClick={handleShowTime} title="Click"/>
    </div>
)
}