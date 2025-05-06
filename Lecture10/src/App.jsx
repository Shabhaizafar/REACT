import { useReducer } from "react";

const lastValue = {
    v1 : 0
};
function setMode(pre,command){
    switch(command){
        case 'increment':
            return {v1 : pre.v1 + 1};
        case 'decrement':
            return {v1 : pre.v1 - 1};
        default:
            throw new Error('Unknown command: ' + command);
    }
}
function App() {
    const [value,setValue] = useReducer(setMode,lastValue);
    return (
        <>
            <h1 key={value.v1}>Value : {value.v1}</h1>
            <button onClick={()=>{setValue('increment')}}>+</button>
            <button onClick={()=>{setValue('decrement')}}>-</button>
            <button onClick={()=>{setValue('hehe')}}>Hehe</button>
        </>
    )
};

export default App;


//  div : width : height : 100px 
