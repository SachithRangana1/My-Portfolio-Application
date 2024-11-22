import React from 'react';
import './Contact.css';
import { contactOptions } from '../../Source';

const Contact: React.FC = () => {
  return (
    <section id='contact'>
      <div className="head">
        <span>Get in touch</span>
        <h2>Contact Me</h2>
      </div>
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option, index)=>(
              <div className="option d-grid justify-content-center" key={index}>
                <div className="icon-wrapper d-flex justify-content-center">{option.icon}</div>
                <span className="muted">{option.title}</span>
                <span className="value">{option.value}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Contact;