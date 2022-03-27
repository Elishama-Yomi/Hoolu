import React from "react";
import '../../styles.css';

function Header() {

  return (
    <div className="navbar">
         <img className="head" src="https://drive.google.com/uc?export=view&id=1Qm3A79hgSwcGDebYf0N8hNHdBdk6VaZ4" alt=" Welcome to"/>
      <h1 className="head">HOOLU</h1>
      <span className="head text"><em>Your number one digital solutions service provider</em></span>

<button className="contact head"> <a href="#contact" className="contact">Contact Us </a></button> 
    </div>
  );
}

export default Header;
