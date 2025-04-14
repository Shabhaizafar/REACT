// function Display(props){
//    console.log(props.data)
// }
function List(){
    var subject = ["Maths","Phy","Chem","Drawing"];
    return (
        <ul>
        {subject.map((value)=>{
            return <li key={value}>{value}</li>
        })}
        </ul>
    )
}

export default List;