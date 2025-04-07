import './App.css'
import { useState } from 'react';
import BioData from './BioData';
import False from './False';

function App() {
  var [count, setCount] = useState();
  return (
    <>
     <button onClick={()=>{setCount(count=1)}}>Click1</button>
     <button onClick={()=>{setCount(count=0)}}>Click2</button>
      <h1>Conditional Rendering:-</h1>
      <h2>Count : {count}</h2>
      {(count==1)? <BioData/> : (count==0) ? <False/> : "" }
    </>
  )
};

export default App;


