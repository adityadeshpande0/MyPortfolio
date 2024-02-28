import React from "react";
import "..//ContactInfo/contactInfoStyles.css";

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
      link: "https://github.com/adityadeshpande0",
    },
    {
      social: "linkedin",
      name: "linkedin",
      link: "https://linkedin.com/in/adityadeshpande1",
    },
    {
      social: "email",
      name: "adityadeshpande1@outlook.com",
      link: "mailto:adityadeshpande1@outlook.com",
    },
  ];

  return (
    <div className="main-block-contact">
      <div className="info-block-contact">
        <p className="text-c">
          <span>.socials</span> &#123;
        </p>
        {data.map((item, index) => (
          <div key={index} className="kv-pair-contact">
            <p className="text-c">{item.social}: </p>
            <a href={item.link} rel="noopener">
              {item.name}
            </a>
            ;
          </div>
        ))}
        <p className="text-c">&#125;</p>
      </div>
      <div>
        <p>or Fill Out This Form</p>
        <div>
          <label>Name</label>
          <input />
          <span>error message</span>
        </div>
        <div>
          <label>Email</label>
          <input />
          <span>error message</span>
        </div>
        <div>
          <label>Subject</label>
          <input />
          <span>error message</span>
        </div>
        <div>
          <label>Message</label>
          <input />
          <span>error message</span>
        </div>

        <button>submit</button>
      </div>
    </div>
  );
}

export default Contact;
