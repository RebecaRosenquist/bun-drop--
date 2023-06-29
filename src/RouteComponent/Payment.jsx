import React from "react";
import { useState, useEffect } from "react";

import swish from "../Swish-logo.jpg";
import visa from "../mastercard.webp";

import { Link } from "react-router-dom";


//Css import
import "./payment.css";

function Payment() {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
      }}
    >
      <div className="MainPaymentContainer">
        <div className="testPayment">
          <h1 style={{ backgroundColor: "#292929" }}>Checkout</h1>
          <div className="AddDileveryInfo">
            <h2>Delivery</h2>
            <hr ></hr>
            <div className="Info">
              <div
                className="InputBoxes"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <input className="InputBox" placeholder="City"></input>
                <input className="InputBox" placeholder="Zip-code"></input>
                <input className="InputBox" placeholder="Adress"></input>
                <input className="InputBox" placeholder="Phone Number"></input>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#D9D9D9" }}>
              <h2>Payment</h2>
            </div>
            <hr />
            <div className="OneItem"></div>

            <div
              className="Payment-icons-div"
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <img
                id="img-pay"
                className="swish-icon"
                src={swish}
                alt="swish"
                style={{ height: "60px", width: "60px" }}
              />
              <img
                id="img-pay"
                className="card-icon"
                src={visa}
                alt="mastercard"
                style={{ height: "60px", width: "60px" }}
              />
            </div>
            <div className="InputBoxes" style={{ backgroundColor: "#D9D9D9", marginBottom: "0px" }}>
              <input className="InputBox" placeholder="Card Number"></input>
              <input className="InputBox" placeholder="CVV"></input>
            </div>
          </div>
          <Link style={{ backgroundColor: "transparent" }} to={"/confirmation"}>
            <button className="PayButton">Place order</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
