// function Myfu(props){
//     // console.log(props.arr);
//     // return <h3>Hello</h3>
//     for (const key in props.v) {
//        return <li key={key}> </li>
//     }
// }

function ObjectList(){
            var arr = [
            {Maths: 87},
            {Phy : 67},
            {Chem : 45}
        ];
    return (
        <>
        <h2>Array of Object List</h2>
        {/* {<Myfu arr={arr}/>} */}
        <ul>
        {
            arr.map((v)=>{
            //   return <Myfu v={v}/>
                for (const key in v) {
                  return <li key={key}> {key} :{v[key]}</li>
                }
            })
        }
        </ul>
        </>
    )
}

export default ObjectList;



/*Explanation*/ 
// function ObjectList(){
//     function obj(){
//         // var o1 = {
//         //     Maths : 88,
//         //     Phy : 78,
//         //     Chem : 67
//         // };
//         // console.log(o1);
//         var arr = [
//             {Maths: 87},
//             {Phy : 67},
//             {Chem : 45}
//         ];
//         // console.log(arr);
//         arr.map((v)=>{
//             console.log(v);
//         });
//     }

//     obj();
//     return <h2>Object List</h2>
// }
// export default ObjectList;