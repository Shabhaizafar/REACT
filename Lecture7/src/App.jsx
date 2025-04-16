// Using Import CSS File/External CSS
import './App.css'
import xyz from  './mymodule.module.css'
import './mySASS.scss'

function App() {
  var mystyle = {
    color : "Aqua",
    backgroundColor : "gray"
  };
  return (
    <>
      <h1>How to Implement CSS in a React</h1>
      {/* <h2 style={{color:"red"}}>Using Inline CSS</h2> */}
      {/* <h2 style={{backgroundColor:"blue", color: "white"}}>Using Inline CSS</h2> */}
      {/* <h3>Using Import CSS File/External CSS</h3> */}
      {/* <h4 style={mystyle}>Using JS Object</h4> */}
      {/* <h5 className={xyz.myclass}>Using Module CSS</h5> */}
      {/* <h1>using SASS</h1> */}
    </>
  )
}

export default App


// style="color:red;" background-color