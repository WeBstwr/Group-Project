import React from "react";
import './contact.css';

function Contact() {
  return (
    <section className="detailed-contact-form">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="input-group">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
