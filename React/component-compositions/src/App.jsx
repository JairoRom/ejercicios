import React from 'react'
import Container from './Container'

function App() {
  const titulo=<h1>Titulo</h1>;
  const hijo=<p>Container</p>
  return (
    <div>
        <Container title={ titulo } children={hijo} ></Container>
    </div>
)
}

export default App