import React from "react";
import "..//ContactInfo/contactInfoStyles.css";
const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
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
        <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
        />
          <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
        />
          <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
        />
          <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
        />
        <button>submit</button>
      </div>
    </div>
  );
}

export default Contact;
