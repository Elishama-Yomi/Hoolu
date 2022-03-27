import React from "react";
import './styles.css';

function Contactus() {

  return (
    <div className="conta" id="contact">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <form>
            <h2>Send us a message</h2>
            <br></br>
            <input className="fill" type="text" placeholder="Enter your full name"/>
            <input className="fill" type="email" placeholder="Enter your email address"/>
           <br></br><br></br><h3>Which of our services are you interested in?</h3><br></br>
           
           
           <label for="1"> Web design and Hosting </label>
           <input type="checkbox" id="1" name="service"/>
           
           <label htmlFor="2"> Branding</label>
           <input type="checkbox" id="2" name="service"/>
           
           <label htmlFor="3"> Digital marketing and advertising</label>
           <input type="checkbox" id="3" name="service"/>
           
           <label htmlFor="4"> Graphics design</label>
           <input type="checkbox" id="4" name="service"/>
           <br></br>
<div className="note">
           <textarea
          placeholder="Type in your request/inquiry"
          rows="5"
        />
        <button>Send</button>
            </div>
        </form>

        <br></br><br></br><br></br>
        <p className="bottom"><img src="https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png" alt="Email us at "/><span>info@hoolu.org</span></p>
        
        </div>
        
        
       

  );
}

export default Contactus;
