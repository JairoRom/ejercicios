export function Age({age}){
    return (
        <div>
           {18<age? <p>Your age is {age}</p>:<p>You are too young</p>}
        </div>
    )
    
}
//expr ? doThis() : doThat()
//si la expresion es verdadero(?)   haz esto  sino(:)  haz lo otro