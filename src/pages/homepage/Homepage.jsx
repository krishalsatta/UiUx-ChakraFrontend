import React from "react";
import Footer from "../../components/Footer";
import NavbarSwitch from "../../components/NavbarSwitch";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <NavbarSwitch />
      <div className="home-container">
        <div className="hero-section">
          <img
            src="https://www.bostik.com/files/live/sites/shared_bostik/files/post/2016/4/800x480_127.-Household-App-crop640x480.jpg"
            alt="Too Ease Home"
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Welcome to Chakra</h1>
            <p>You are in the best place to buy second hand items.</p>
            {/* <div className="buttons">
              <Link to="/login" className="btn login-btn">Login</Link>
              <Link to="/register" className="btn register-btn">Register</Link>
            </div> */}
          </div>
        </div>
        <div className="features-section">
          <div className="feature-card">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Shipping</h3>
            <p>
              Get your products delivered quickly with our efficient delivery
              system.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Best Prices</h3>
            <p>
              We offer the best prices on all the products with good quality.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>
              Our support team is here to help you anytime you need assistance.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
