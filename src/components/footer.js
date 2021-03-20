import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button, Form } from "react-bootstrap";
import "./style/footer.css";
import { FaTwitter, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-company">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="http://www.dummymag.com//media/img/dummy-logo.png"
              alt="nav-image.jpg"
              width="150px"
            />
            <div style={{ marginLeft: "20px" }} className="logo-text">
              <h4>
                <b>Foundation</b>
              </h4>
              <p>Startup Landing Template</p>
            </div>
          </div>
          <p>
            <b>Foundation</b> is a website template for startups and small
            teams. it helps to build a website in no time.
          </p>
          <img
            src="https://data.ibtimes.sg/en/full/12247/google-play-store-8-1-73-apk.png"
            width="120px"
          />
          <img
            src="https://www.earfy.net/wp-content/uploads/2016/03/Earfy-download-apple-app-store-768x272.png"
            width="120px"
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div className="footer-list">
          <h4>Product</h4>
          <p>About Foundation</p>
          <p>Brand Guidelines</p>
          <p>Press Kit</p>
          <p>Support</p>
        </div>
        <div className="footer-list">
          <h4>Company</h4>
          <p>Acquire User</p>
          <p>Content Marketing</p>
          <p>Website Templates</p>
          <p>Customer Management</p>
          <p>Virtual Inbox</p>
        </div>
      </div>
      <div className="footer-lines">
        <div className="lines">
          <p>Terms</p>
          <p>Privacy</p>
          <p>License</p>
        </div>
        <div className="lines">
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaFacebookSquare />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
