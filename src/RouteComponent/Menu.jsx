import React from "react";
import { useState, useEffect } from "react";
// import { Alert } from "react"
// import { AlertTitle } from "react";

//Css import
import "./menu.css";
import { json } from "react-router-dom";

function Menu() {
  let [getData, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/menu")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function AddItem(props) {
  

    alert('The item has been added to cart!');
  

    let testing = props.target;
    let test = testing.getAttribute("price");
    let convert = parseInt(test);
    fetch("http://localhost:2000/Cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: props.target.name,
        Price: convert,
      }),
    });
  }

  return (
    <div className="MainMenuContainer">
      <div className="test">
        {getData.map((b) => (
          <div className="MenuContainer">
            <img src={b.image} alt="bild på mat" />
            <h1>{b.name}</h1>
            <h2 className="h22">{b.price} SEK</h2>
            <button price={b.price} name={b.name} onClick={AddItem}>
              Lägg till
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
