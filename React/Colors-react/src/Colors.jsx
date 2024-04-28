import React from 'react'
import Color from './Color'

function Colors({colorsArr}) {
    // const obj=[
    //     {id:1,name:"red"},
    //     {id:2,name:"blue"}
    // ]
  return (
    <ul >
    {colorsArr.map((item)=>{
        return <Color item = {item}/>

        })}
    </ul>
  )
}

export default Colors