import Colors from "./Colors"


function App() {
  const colores =[
    {id:1 , name: "RED"},
    {id:2 , name: "YELLOW"},
    {id:3 , name: "GREEN"},
    {id:4 , name: "BLUE"},
  ]
  return (
    <div>
      <Colors colors={colores} />
    </div>
  )
}

export default App