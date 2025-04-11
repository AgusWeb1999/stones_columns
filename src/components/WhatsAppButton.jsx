import React from "react";
import "../css/WhatsAppButton.css"; 
import whatsappLogo from "../images/whatsapp-logo.png";

function WhatsAppButton() {
  const whatsappLink = "https://wa.me/+17866420542"; 

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img src={whatsappLogo} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
