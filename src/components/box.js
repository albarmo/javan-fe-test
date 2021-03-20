import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button, Form } from "react-bootstrap";
import "./style/box.css";

const BoxComponent = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="box-container">
        <div className="box">
          <h5>Need a Support? </h5>
          <p>We message performance test against variants and controls</p>
          <a href="#">Open a Ticket</a>
        </div>
        <div class="vl"></div>
        <div className="box">
          <h5>Customize Plan</h5>
          <p>
            Looking for something else ? Request a Consultation to Customize a
            plan{" "}
          </p>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default BoxComponent;
