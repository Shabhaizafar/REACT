import './App.css'
import Events from './Events';
function App(){
  return (
    <>  
      <h1>Events</h1>
      {/* <Events></Events> */}
      <Events/>
    </>
  )
}
export default App;

/*
import './App.css'
import ClassData from './ClassData';
function App(){
  const d = new ClassData("Zafar","Shah");
  return (
    <>
      <h1>Hello Everyone !!!</h1>
      {d.display()}
      { <ClassData value1="Zafar" value2="Shabhai"/> }
    </>
  )
}

export default App;

*/


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './BioData'
import MyContext from './context/mycontext'
function App() {
  const [count, setCount] = useState(0)
  // Add use Context
  return (
    <>
    <MyContext.Provider value={count}>
      <div>
        <BioData/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </MyContext.Provider>
    </>
  )
}

export default App

*/ 