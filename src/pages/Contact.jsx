import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or API calls here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <div className="container">
        <div className="row">
          <section className="contact-section col-lg-6">
            <div className="contact-info">
              <h4>Address:</h4>
              <p className="mb-4">Apollo Premier, Indore, India</p>
              <h4>Contact Number:</h4>
              <p className="mb-4">+91 9685401702</p>
              <h4>Email:</h4>
              <p className="mb-4">a.maheshwari@thesynapses.com</p>
            </div>
          </section>
          <section className="col-lg-6">
            <div className="form-container">
              <div className="card form-card">
                <div className="card-body">
                  <h2>Contact Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mt-4">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary buy__btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <div className="col-lg-12">
            <section className="map-section">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4144562371366!2d75.89420117517977!3d22.74999537936575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630390e137d0d7%3A0x5bef82fe270e4409!2sApollo%20Premier!5e0!3m2!1sen!2sin!4v1689745914830!5m2!1sen!2sin"
                  width="1200"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
