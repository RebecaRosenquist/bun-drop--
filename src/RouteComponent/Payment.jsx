import React from "react";
import { useState, useEffect } from "react";

import swish from "../Swish-logo.jpg";
import visa from "../mastercard.webp";

import { Link } from "react-router-dom";

//Css import
import "./payment.css";

function Payment() {
  let [isCard, setCard] = useState(false);
  let [isSwish, setSwish] = useState(true);
  let [newList, setNewList] = useState([]);
  let [formData, setFormData] = useState({
    PhoneNumber: "",
    City: "",
    ZipCode: "",
    Adress: "",
  });

  const handleForm = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(formData);

    window.location.href = "/confirmation";
  };

  function handlePay1() {
    setSwish(true);
    setCard(false);
  }

  function handlePay2() {
    setCard(true);
    setSwish(false);
  }

  return (
    <form onSubmit={handleSubmit}>
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
              <hr></hr>
              <div className="Info">
                <div
                  className="InputBoxes"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <input
                    name="City"
                    className="InputBox"
                    placeholder="City"
                    required
                    value={formData.City}
                    onChange={handleForm}
                  ></input>
                  <input
                    name="ZipCode"
                    className="InputBox"
                    placeholder="Zip-Code"
                    required
                    value={formData.ZipCode}
                    onChange={handleForm}
                  ></input>
                  <input
                    name="Adress"
                    className="InputBox"
                    placeholder="Adress"
                    required
                    value={formData.Adress}
                    onChange={handleForm}
                  ></input>
                  <input
                    name="PhoneNumber"
                    className="InputBox"
                    placeholder="Phone Number"
                    required
                    value={formData.PhoneNumber}
                    onChange={handleForm}
                  ></input>
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
                {isSwish === true ? (
                  <div style={{ backgroundColor: "transparent" }}>
                    <img
                      onClick={handlePay1}
                      namn="swish"
                      id="img-pay"
                      className="swish-icon"
                      src={swish}
                      alt="swish"
                      style={{
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                        border: "green solid 3px",
                      }}
                    />
                    <img
                      onClick={handlePay2}
                      namn="card"
                      id="img-pay"
                      className="card-icon"
                      src={visa}
                      alt="mastercard"
                      style={{
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ backgroundColor: "transparent" }}>
                    <img
                      onClick={handlePay1}
                      namn="swish"
                      id="img-pay"
                      className="swish-icon"
                      src={swish}
                      alt="swish"
                      style={{
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      onClick={handlePay2}
                      namn="card"
                      id="img-pay"
                      className="card-icon"
                      src={visa}
                      alt="mastercard"
                      style={{
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                        border: "green solid 3px",
                      }}
                    />
                  </div>
                )}
              </div>
              <div
                className="InputBoxes"
                style={{
                  backgroundColor: "#D9D9D9",
                  marginBottom: "0px",
                  cursor: "pointer",
                }}
              >
                {isSwish === true ? (
                  <div>
                    <input
                      className="InputBox"
                      placeholder="Phone Number"
                      required
                    ></input>
                  </div>
                ) : isCard === true ? (
                  <div
                    className="pay"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <input
                      className="InputBox"
                      placeholder="Card Number"
                      required
                    ></input>
                    <input
                      className="InputBox"
                      placeholder="CVV"
                      required
                    ></input>
                  </div>
                ) : (
                  <div>choose pay</div>
                )}

                <button className="PayButton" type="submit">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Payment;
