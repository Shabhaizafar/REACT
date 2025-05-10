import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useMyhook from './useMyhook'

function App() {
  // const {v1,increment,decrement,resetData} = ;
  const {value,inc,dec,reset} = useMyhook();
  return (
    <>
      
      <h1>Custom Hook</h1>
      <h2>Value : {value}</h2>  
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
