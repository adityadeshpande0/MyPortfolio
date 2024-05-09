import React, { useState } from "react";
import "./contactInfoStyles.css";

function ContactForm() {
  // State to manage input values and error messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Validation rules
  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.contact) {
      errors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Invalid contact number";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle submission logic here
      console.log("Form submitted successfully:", formData);
    } else {
      // Form is invalid, display error messages
      setErrors(validationErrors);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when input changes
    setErrors({ ...errors, [name]: "" });
  };

  // Check if all form fields are filled without errors
  const isFormValid = Object.values(errors).every((error) => error === "");

  return (
    <div className="contactform-main-container" netlify>
      <p>or Fill Out This Form</p>
      <div className="inputbox-container">
        <label className="input-label">Name</label>
        <input
          className="inputbox"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="inputbox-container">
        <label className="input-label">Email</label>
        <input
          className="inputbox"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="inputbox-container">
        <label className="input-label">Contact</label>
        <input
          className="inputbox"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && (
          <span className="error-message">{errors.contact}</span>
        )}
      </div>
      <div className="inputbox-container">
        <label className="input-label">Message</label>
        <textarea
          className="inputbox"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
      </div>
      <button
        className="contact-button"
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        Git Push
      </button>
    </div>
  );
}

export default ContactForm;
