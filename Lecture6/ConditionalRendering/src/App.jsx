import './App.css'
import { useState } from 'react'
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import Other from './Other';
function App() {
  var [count,setCount] = useState("");
  function newData(event){
    console.log(event.target);
    if(event.target.innerHTML=="HTML"){
      event.target.classList.add('active');
      document.querySelector('.b').classList.remove('active');
      document.querySelector('.c').classList.remove('active');
      document.querySelector('.d').classList.remove('active');
    }
    else if(event.target.innerHTML=="CSS"){
      event.target.classList.add('active');
      document.querySelector('.a').classList.remove('active');
      document.querySelector('.c').classList.remove('active');
      document.querySelector('.d').classList.remove('active');
    }
    else if(event.target.innerHTML=="JavaScript"){
      event.target.classList.add('active');
      document.querySelector('.b').classList.remove('active');
      document.querySelector('.a').classList.remove('active');
      document.querySelector('.d').classList.remove('active');
    }
    else if(event.target.innerHTML=="Other"){
      event.target.classList.add('active');
      document.querySelector('.b').classList.remove('active');
      document.querySelector('.c').classList.remove('active');
      document.querySelector('.a').classList.remove('active');
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">My Web Project</div>
        <div className="languages" onClick={(event)=>{newData(event)}} >
          <span className='a' onClick={(event)=>{setCount(count="HTML")}}>HTML</span>
          <span className='b' onClick={(event)=>{setCount(count="CSS")}}>CSS</span>
          <span className='c' onClick={(event)=>{setCount(count="JAVASCRIPT")}}>JavaScript</span>
          <span className='d' onClick={(event)=>{setCount(count="OTHERS")}}>Other</span>
        </div>
      </div>

      <div className="layout">

        <div className="sidebar">
  
          <ul>
            <li ><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JAVASCRIPT</a></li>
            <li><a href="#">OTHERS</a></li>
          </ul>
        </div>

        <div className="main-content">
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