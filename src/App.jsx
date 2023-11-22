import React, { useState } from 'react'
import '../src/App.css'

const App = () => {
  let [color, setColor]= useState("#51e2f5")

  return (
    <>
    <div style={{backgroundColor:color}} className='outer'>
      <div className='btn_bar'>
        <button onClick={()=>{
    setColor(color="Red")
  }}>Red</button>
        <button onClick={()=>{
    setColor(color="Green")
  }}>Green</button>
        <button onClick={()=>{
    setColor(color="Blue")
  }}>Blue</button>
        <button onClick={()=>{
    setColor(color="Olive")
  }}>Olive</button>
        <button onClick={()=>{
    setColor(color="Black")
  }}>Black</button>
        <button onClick={()=>{
    setColor(color="Orange")
  }}>Orange</button>
        <button onClick={()=>{
    setColor(color="white")
  }}>White</button>
        <button onClick={()=>{
    setColor(color="aqua")
  }}>Aqua</button>
      </div>
    </div>
    </>
  )
}

export default App

