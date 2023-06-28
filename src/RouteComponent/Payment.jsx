import React from "react";
import { useState, useEffect } from "react";

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
          <div className="Info">
            <div className="InputBoxes" style={{ backgroundColor: "#D9D9D9" }}>
              <input className="InputBox" placeholder="City"></input>
              <input className="InputBox" placeholder="Zip-code"></input>
              <input className="InputBox" placeholder="Adress"></input>
              <input className="InputBox" placeholder="Number"></input>
            </div>
          </div>
          <hr />
          <div className="OneItem">
            <div style={{ backgroundColor: "#D9D9D9" }}>
              <h2>Payment</h2>
            </div>
          </div>
          <hr />
          <h3 style={{ backgroundColor: "#D9D9D9" }}>Total: 20 SEK</h3>
        </div>
        <button className="PayButton">Order</button>
      </div>
    </div>
    </div>
  );
}

export default Payment;
