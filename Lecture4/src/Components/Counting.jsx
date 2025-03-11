import { use, useEffect } from "react";
import { useState } from "react";
function Counting() {
    // const [count,setCount] = useState(0);
    var count = 0,side;

    return (
        <>
            <div className="counter-container">
                <h1>CSS Only Counter</h1>
                <div className="counter-display">
                    <input type="checkbox" id="increase" hidden />
                    <input type="checkbox" id="decrease" hidden />
                    {
                        useEffect(()=>{
                            console.log("useEffect",count,side);
                        },[count,side=100])
                    }
                    <div id="count">{count}</div>
                    {/* {
                        useEffect(()=>{
                            // setTimeout(() => {
                            //     setCount(count+1);
                            // }, 3000);
                            // setInterval(() => {
                            //     setCount(count+1);
                            // }, 2000);
                            
                        })
                    } */}
                    {/* <button  className="counter-button" onClick={()=>{setCount(count+1)}}>+</button>
                    <button  className="counter-button" onClick={()=>{setCount(count-1)}}>-</button> */}
                </div>
            </div>
        </>
    )
}

export default Counting;