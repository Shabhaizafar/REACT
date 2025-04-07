import './App.css'
import { useState } from 'react'
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import Other from './Other';
function App() {
  var [count,setCount] = useState("");
  return (
    <>
      <div class="navbar">
        <div class="logo">My Web Project</div>
        <div class="languages">
          <span onClick={()=>{setCount(count="HTML")}}>HTML: 40%</span>
          <span onClick={()=>{setCount(count="CSS")}}>CSS: 30%</span>
          <span onClick={()=>{setCount(count="JAVASCRIPT")}}>JavaScript: 25%</span>
          <span onClick={()=>{setCount(count="OTHERS")}}>Other: 5%</span>
        </div>
      </div>

      <div class="layout">

        <div class="sidebar">
  
          <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JAVASCRIPT</a></li>
            <li><a href="#">OTHERS</a></li>
          </ul>
        </div>

        <div class="main-content">
          {count === "HTML" && <Html />}
          {count === "CSS" && <Css />}
          {count === "JAVASCRIPT" && <Javascript />}
          {count === "OTHERS" && <Other />}
        </div>

      </div>

    </>
  )
}

export default App