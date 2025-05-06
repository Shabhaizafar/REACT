import { useState } from 'react';
import './App.css'
// import Header from './Components/header';
// import Main from './Components/Main';
// import Aside from './Components/Aside';
// import Footer from './Components/Footer';

function App() {
  cons [count,setCount] = useState(0);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
    // <div className="layout">
    //   <Header/>
    //   <div className="container">
    //     <Main/>
    //     <Aside/> 
    //   </div>
    //   <Footer/>
    // </div>
  );
};

export default App;




