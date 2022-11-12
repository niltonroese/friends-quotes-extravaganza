import React from "react";
import Header from './Header';
import Footer from './Footer';
import Thanks2 from "../images/Thanks2.png";

function PopUp() {
  return (
    <div>
      <img src={Thanks2} className="img-fluid " alt="Thanks" style={{borderRadius: "10px"}}/>
    </div>
  );
}

export default PopUp;
