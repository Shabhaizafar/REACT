import { useState } from "react";

function useMyhook(intialValue = 100 ){
    const [value,setValue] = useState(intialValue);

    const inc = ()=>{
        setValue(value+1)
    };
    const dec = ()=>{
        setValue(value-1)
    };
    const reset = ()=>{
        setValue(intialValue)
    };
    
    return {value,inc,dec,reset};
}

export default useMyhook;