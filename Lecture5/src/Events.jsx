import { useState } from "react";

function Events(){
    const [count,setCount] = useState(0);
    return(
        <>
            <input type="text" onFocus={()=>{console.log("sedr")}} /> 
            <input type="text" onFocus={()=>{console.log("sedr")}} /> 


            {/* <button type="button" onClick={()=>{
                console.log(document.querySelector('input').value);
            }}>Click</button> */}

            {/* <form action="">
                <input type="text" onChange={()=>{
                    setCount(count+1)
                }}/>
                <h2>Your Counter : {count}</h2>
            </form> */}
        </>
    )
};

export default Events;