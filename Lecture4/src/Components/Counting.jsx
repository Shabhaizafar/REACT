import { useState } from "react";

function Counting() {
    const [count,setCount] = useState(0);
    return (
        <>
            <div className="counter-container">
                <h1>CSS Only Counter</h1>
                <div className="counter-display">
                    <input type="checkbox" id="increase" hidden />
                    <input type="checkbox" id="decrease" hidden />

                    <div id="count">{count}</div>

                    <button  className="counter-button" onClick={()=>{setCount(count+1)}}>+</button>
                    <button  className="counter-button" onClick={()=>{setCount(count-1)}}>-</button>
                </div>
            </div>
        </>
    )
}

export default Counting;