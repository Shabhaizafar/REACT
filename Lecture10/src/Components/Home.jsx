import { useCallback, useState } from "react";

function Home(){
    // const [value1,setvalue] = useState(function(){
    //     console.log(typeof prompt);
    // });
    // const [value1,setvalue] = useState(1);
    // const [value1,setvalue] = useState('Zafar');
    // const [value1,setvalue] = useState([11,12,13,14]);
    // console.log(typeof value1);
    const [value1,setvalue] = useState([]);

    // var newfu = ()=>{
    //     console.log(value1);
    //     return setvalue((t)=> [...t,"NewData"])
    // }
    var newfu = useCallback(()=>{
        console.log(value1);
        return setvalue((t)=> [...t,"NewData"])
    },[value1]);
    return (
    <>
        {/* <h2>{value1}</h2> */}
        {/* <button onClick={()=>{setvalue(value1+1)}}>Click Here</button>  */}
        {/* <button onClick={()=>{setvalue(value1.toUpperCase())}}>Click Here</button>  */}
        {/* <button onClick={()=>{setvalue(value1.map((e)=>{return e*e}))}}>Click Here</button>  */}
        <button onClick={newfu}>Click</button>
    </>
    )
}

export default Home;

// number,Boolean,string,BigInt,Object,undefined,function