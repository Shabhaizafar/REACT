import { memo } from "react";
function CallBack(props){
    return (
        <>
            <h2>{parseInt(Math.random()*10)}</h2>
            <ul>
                {props.Data.map((e)=>{
                    return <li key={e}>{e}</li>
                })}
            </ul>
            <button onClick={props.addTodo}>Add Todo</button>
        </>
    )
}

export default memo(CallBack);