import React, { useEffect, useState } from "react";
import Header from "../UIComponents/Header";
import { Link } from "react-router-dom";

//import CSS
import "./cart.css";

function Cart() {
  let [getOrder, setOrder] = useState([]);
  let [isOrderEmpty, setOrderEmpty] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2000/Cart")
      .then((res) => res.json())
      .then((data) => setOrder(data));

        
    if (getOrder.length > 0) {
      setOrderEmpty(false);
    } else {
      setOrderEmpty(true);
    }
  });

  function DeleteButton(props) {
    let findId = props.target.id;
  }
  const HandleDelete = (id) => {
    fetch(`http://localhost:2000/cart/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedData = getOrder.filter((item) => item.id !== id);
      setOrder(updatedData);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isOrderEmpty ? (
        <div className="MainCartContainer">
          <div className="testCart">
            <h1 style={{ backgroundColor: "#292929" }}>ShoppingCart</h1>
            <div className="AddedItemContainer">
              <h2 id="your-order">Your order</h2>
              <hr />
              {getOrder.map((o) => (
                <div className="row" style={{ backgroundColor: "#D9D9D9" }}>
                  <div className="OneItem">
                    <button
                      className="DeleteButton"
                      onClick={() => HandleDelete(o.id)}
                    >
                      x
                    </button>
                    <div
                      className="AddItem"
                      style={{ backgroundColor: "#D9D9D9" }}
                    >
                      <h2 id="h22">{o.Name}</h2>
                      <h4 id="h44" style={{ backgroundColor: "#D9D9D9" }}>
                        {o.Price} SEK
                      </h4>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "#D9D9D9" }}>
                    <hr id="hr-item" />
                  </div>
                </div>
              ))}
              {/* <h3 style={{ backgroundColor: "#D9D9D9" }}>Total: 259 SEK</h3> */}
            </div>
            <Link style={{ backgroundColor: "transparent" }} to={"/payment"}>
              <button className="PayButton">Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="MainCartContainer">
          <div className="testCart">
            <h1 style={{ backgroundColor: "#292929" }}>ShoppingCart</h1>
            <div className="AddedItemContainer">
              <div className="OneItem">
                <div
                  className="cart-empty-div"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <h2 id="cart-is-empty">Cart is empty</h2>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
