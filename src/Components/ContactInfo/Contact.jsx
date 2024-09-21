import React from "react";
import "..//ContactInfo/contactInfoStyles.css";
import ContactForm from "./ContactForm";

function Contact() {
  const data = [
    {
      social: "website",
      name: "adityadeshpande.com",
      link: "https://adityadeshpande.netlify.app/",
    },
    {
      social: "email",
      name: "adityadeshpande1@outlook.com",
      link: "mailto:adityadeshpande1@outlook.com",
    },
    {
      social: "github",
      name: "adityadeshpande0",
      link: "https://github.com/adityadeshpande0/",
    },
    {
      social: "linkedIn",
      name: "linkedIn",
      link: "https://linkedin.com/in/adityadeshpande1",
    },
  ];

  return (
    <div className="main-block-contact">
      <div className="socials-container">
        <p className="socials-item">
          <span className="socials">.socials</span> &#123;
        </p>
        {data.slice(0, 8).map((item, index) => (
          <p className="socials-item" key={index}>
            &nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a
              className="socials-link"
              href={item.link}
              target="_blank"
              rel="noopener"
            >
              {item.name}
            </a>
            ;
          </p>
        ))}
        {data.slice(8, data.length).map((item, index) => (
          <p className="socials-item" key={index}>
            &nbsp;&nbsp;{item.social}:{" "}
            <a
              className="socials-link"
              href={item.href}
              target="_blank"
              rel="noopener"
            >
              {item.link}
            </a>
            ;
          </p>
        ))}
        <p className="socials-item">&#125;</p>
      </div>
      <ContactForm/>
    </div>
  );
}

export default Contact;
