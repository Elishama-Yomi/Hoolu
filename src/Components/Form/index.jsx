import React, { useState } from "react";
import '../../styles.css';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function handleClick(event) {
   event.preventDefault();
    const stateObject = Object.assign({}, {name, email})
    console.log(stateObject);
    alert(`Congratulations ${name}! You have successfully created a Hoolu account\n\n`);
    
    return false;
  }

  return (
    <div className="container">
      <h1><strong>Fill in your details to create an account</strong></h1>
      <br></br><br></br>
      <form onSubmit={handleClick}>
        <input
          onChange={(e) => setName(e.target.value) }
          type="text"
          placeholder="What's your name?"
        />
        <input
        onChange={(e) => setEmail(e.target.value) }
          type="email"
          placeholder="Enter your email address"
        />
        <input
          type="password"
          placeholder="Enter a password"
        />
        <input
          type="password"
          placeholder="Confirm your password"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
