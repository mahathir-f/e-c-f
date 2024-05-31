import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import n_d from "../Assets/n-d.png";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const drowdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visibae");
    e.target.classList.toggle("open");
  };
  return (
    <div className="Navbar"> 
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img onClick={drowdown_toggle} className= "nav-dropdown"src={n_d} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("woman");
          }}
        >
          <Link
            to="/woman"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Woman
          </Link>
          {menu === "woman" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
