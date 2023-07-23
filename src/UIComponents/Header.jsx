//Logic imports

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

//image import
import logo from "../logo black.png";

function Header() {
  let [listItems, setItems] = useState(0);
  let [getOrder, setOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/Cart")
      .then((res) => res.json())
      .then((data) => setOrder(data));

    let itemNumber = getOrder.length;
    setItems(itemNumber)
  });

  return (
    <div className="header" style={{ backgroundColor: "#DE6E22" }}>
      
      <Link to="/" style={{width: "0px"}} >
        <img className="HeaderLogo" src={logo} alt="logo" />
      </Link>

      <div className="Headerlinkslist" style={{ backgroundColor: "#DE6E22" }}>
        <Link
          to="/"
          className="linkToPage"
          style={{
            backgroundColor: "#DE6E22",
            color: "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="linkToPage"
          style={{
            backgroundColor: "#DE6E22",
            color: "black",
            textDecoration: "none",
          }}
        >
          Menu
        </Link>
        <Link
          to="/cart"
          className="linkToPage"
          style={{
            backgroundColor: "#DE6E22",
            color: "black",
            textDecoration: "none",
          }}
        >
          Cart: {listItems}
        </Link>
      </div>
    </div>
  );
}

export default Header;
