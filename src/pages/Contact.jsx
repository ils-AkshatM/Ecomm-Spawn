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
              <p className="mb-4">2880 Broadway, New York</p>
              <h4>Contact Number:</h4>
              <p className="mb-4">+1 123-456-7890</p>
              <h4>Email:</h4>
              <p className="mb-4">contact@example.com</p>
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
                {/* Add your map component or embed a map */}
                {/* For example: */}
              </div>
            </section>
          </div>
        </div>  
      </div>
    </Helmet>
  );
};

export default Contact;
