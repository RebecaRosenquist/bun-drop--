import React from "react";
import { useState, useEffect } from "react";




//Css import
import "./confirmation.css";

function Confirmation() {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
      }}
    >
      <div className="MainConfirmationContainers">
        <div className="testConfirmation">
          <h1 style={{ backgroundColor: "#292929" }}>Checkout</h1>
          <div className="AddDileveryInfo">
            <h2 id="hh">Congrats!</h2>
            
              
            
            <h3 id="hhh" style={{ backgroundColor: "#D9D9D9" }}>
              Your order is placed and will be delivered in 10 minuts
            </h3><h2 id="hg">🥳</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
