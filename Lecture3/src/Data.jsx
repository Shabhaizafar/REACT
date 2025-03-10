var fname = prompt("Enter your first name: ");
var lname = prompt("Enter your last name: ");
function Data() {
    console.log("First Name: " + fname);
    console.log("Last Name: " + lname);
  return (
    <div>
      <h2>First Name : {fname}</h2>
      <h2>Last Name : {lname}</h2>
    </div>
  );
}

export default Data;