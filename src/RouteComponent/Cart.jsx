import React, { useEffect, useState } from "react";
import Header from "../UIComponents/Header";
import { Link } from "react-router-dom";

//import CSS
import "./cart.css";

function Cart() {
  let [getOrder, setOrder] = useState([]);
  let [isOrderEmpty, setOrderEmpty] = useState(true);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:2000/Cart")
      .then((res) => res.json())
      .then((data) => setOrder(data));

    if (getOrder.length > 0) {
      setOrderEmpty(false);
    } else {
      setOrderEmpty(true);
    }

    //   const testa = getOrder.reduce((total, Price) => {
    //   const price = Number(Price.price);
    //   return isNaN(price) ? total : total + price;
    // }, 0);
  });

  const testa = getOrder.reduce((total, { price }) => {
    return total + price;
  }, 0);

  function DeleteButton(props) {
    let findId = props.target.id

    // fetch(`http://localhost:2000/Cart/${findId}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Delete request failed");
    //     }
    //     // Fortsätt med önskad logik efter framgångsrikt borttagande
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
   
    

  }
const HandleDelete = (id) => {
      //Hämta från databasen med rätt id och utför method!
      // Sen!(then) uppdatera nuvarande lista med ny lista(då datan har förändrats)
      // Detta gör vi för att vi måste ändra både UI och databasen tillsammans, annars t.ex vad som händer är att item blir kvar och man trycker på knappen men inget händer men i själva verka fallet så har du tagit bort item men UI(UserInterface) har ej ändrats
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
              {getOrder.map((o) => (
                <div className="OneItem">
                  <div style={{ backgroundColor: "#D9D9D9" }}>
                    <h2>{o.Name}</h2>
                    <h4 style={{ backgroundColor: "#D9D9D9" }}>{o.Price}</h4>
                  </div>
                  <button
                    className="DeleteButton"
                    onClick={()=> HandleDelete (o.id)}
                  >
                    x
                  </button>
                </div>
              ))}
              <h3 style={{ backgroundColor: "#D9D9D9" }}>Total: {testa} SEK</h3>
              <hr />
            </div>
            <Link style={{ backgroundColor: "transparent" }} to={"/payment"}>
            <button className="PayButton">Pay</button>

            </Link>
            
          </div>
        </div>
      ) : (
        <div className="MainCartContainer">
          <div className="testCart">
            <h1 style={{ backgroundColor: "#292929" }}>ShoppingCart</h1>
            <div className="AddedItemContainer">
              <div className="OneItem">
                <div style={{ backgroundColor: "#D9D9D9" }}>
                  <h2>Cart is empty</h2>
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
