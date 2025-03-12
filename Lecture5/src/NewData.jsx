import { useContext } from "react";
import MyContext from "./context/mycontext";

function NewData() {
    var myData = useContext(MyContext);
  return (
    <div>
            <ul>
                <li>Understand how to create a new component</li>
                <li>Understand how to import and use a component</li>
                <li>{myData}</li>
            </ul>
    </div>
  );
}
export default NewData;