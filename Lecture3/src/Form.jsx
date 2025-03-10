import './Form.css';

function myFu(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
}

function Form() {
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
                <label >Full Name:</label>
                <input type="text" id="name" name="name" required />

                <label >Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label >Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit" className="submit-btn" onClick={myFu}>Submit</button>
        </div>
    )
}
export default Form;