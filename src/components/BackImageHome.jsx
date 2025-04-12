import React from "react";
import "../css/BackImageHome.css"; 
import back_image from "../images/back_img_home.png";

function BackImageHome() {
  return (
    <div className="back-image-home">
      <img src={back_image} alt="Background Image Home" />
    </div>
  );
}

export default BackImageHome;
