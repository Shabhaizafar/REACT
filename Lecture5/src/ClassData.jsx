// function ClassData(props){
//     return (
//         <>
//             {/* <h2>{props}</h2> */}
//             <h2>{props['value2']}</h2>
//             <h2>{props.value1}</h2>
//         </>
//     )

// }
// export default ClassData;

class ClassData {
    constructor(value1,value2){
        this.value1 = value1;
        this.value2 = value2;
    }
    display(){
        return (
            <>
                <h2>{this.value1}</h2>
                <h2>{this.value2}</h2>
            </>
        )
    }
}

export default ClassData;