import './form.css'
function Forms() {
    var obj = {};

  const handleChange = (event) => {
    const name = document.querySelector('#name').value;
    obj["Name"] = name;
  }
    function handleSubmit(event){
        event.preventDefault();
        handleChange();
        // console.log(obj);
    }
    
    return (
        <>
            <div class="form-container">
                <h2>Contact Us</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}
// 
// btn.onclick('click',function(){
//     console.log("Form");
// });
export default Forms;