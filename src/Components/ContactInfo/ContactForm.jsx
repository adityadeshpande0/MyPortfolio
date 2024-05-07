import React from "react";
import './contactInfoStyles.css'
function ContactForm() {
  return (
    <div className="contactform-main-container">
      <p>or Fill Out This Form</p>
      <div className="inputbox-container">
        <label className="input-label">Name</label>
        <input className="inputbox" />
        <span className="error-message">error message</span>
      </div>
      <div className="inputbox-container">
        <label className="input-label">Email</label>
        <input className="inputbox" />
        <span className="error-message">error message</span>
      </div>
      <div className="inputbox-container">
        <label className="input-label">Contact</label>
        <input className="inputbox" />
        <span className="error-message">error message</span>
      </div>
      <div className="inputbox-container">
        <label className="input-label">Message</label>
        <input className="inputbox" />
        <span className="error-message">error message</span>
      </div>
      <button className="contact-button">Git Push</button>
    </div>
  );
}

export default ContactForm;
