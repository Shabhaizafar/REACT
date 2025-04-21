import { useMemo, useState } from 'react'
import './App.css'

// const bigArray = Array.from({ length: 1000000 }, (_, i) => i);
function All(){
    return Array(1000000).fill(0).map((v,i)=>{
      return i
    });
}
function App() {
  const [count, setCount] = useState(0);
  var [bigArray,setbigArray] = useState(All());
  // var ans;
  var ans = Use
  return (
    <>
      <h1>UseMemo</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button> <br />
      
      <p> {} : {count}</p>
    </>
  )
}

export default App
