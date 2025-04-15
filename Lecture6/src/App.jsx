import './App.css'
import { useState } from 'react';
import BioData from './BioData';
import False from './False';
import LastConditional from './LastConditional';
import ObjectList from './ObjectList';
// import List from './List';
function App() {
  // var [count, setCount] = useState();
  return (
    <>
      {/* <h1>Conditional Rendering:-</h1> */}
     {/* <button onClick={()=>{setCount(count=1)}}>Click1</button>
     <button onClick={()=>{setCount(count=0)}}>Click2</button>
      <h2>Count : {count}</h2> */}
      {/* {(count==1)? <BioData/> : (count==0) ? <False/> : "" } */}
      {/* <LastConditional value={"wer"}/> */}
      {/* <List/> */}

      <ObjectList/>
    </>
  )
};

export default App;


