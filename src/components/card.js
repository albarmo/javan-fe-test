import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button, Form } from "react-bootstrap";
import "./style/card.css";
import { BiCheck } from "react-icons/bi";

const CardComponent = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="card-container">
        <p className="hide">
          <span>Save {props.data.discount}% </span> with this plan
          <hr class="solid"></hr>
        </p>
        <img src={props.data.image} alt="card-image.jpg" />
        <div className="card-text">
          <h5>
            <b>{props.data.title}</b>
          </h5>
          <p>{props.data.description}</p>
          <p>
            ${props.data.price} <span style={{ color: "gray" }}>/mo</span>
          </p>
        </div>
        <Button variant="outline-info" className="button-card">
          Try For Free
        </Button>
        <hr class="solid"></hr>
        <div className="card-feature-list">
          <ul class="list-unstyled">
            <li>
              <BiCheck className="icon" />
              <p>
                upload up to <b>200 MB</b>
              </p>
            </li>
            <li>
              <BiCheck className="icon" /> <p>upload up to 200 MB</p>
            </li>
            <li>
              <BiCheck className="icon" /> <p>upload up to 200 MB</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
