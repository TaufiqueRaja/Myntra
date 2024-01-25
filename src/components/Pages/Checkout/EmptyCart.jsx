import React from "react";
import "./css/EmptyCart.css";
import { Link } from "react-router-dom";
// import Navbar from "../../Navbar/Navbar";
// import Footer from "../../Footer/Footer";
const EmptyCart = () => {
  return (
    <>
        <div className="notLogin">
      <img src="https://myntraa-clone.netlify.app/assets/cart.png" alt="img" />
      <h3>Het, It feels so light !</h3>
      <p>There is nothing in your bag. Lets add something.</p>
      <Link to="/">
        <button>ADD ITEMS FROM WISHLIST</button>
      </Link>
    </div>
        </>
  );
};

export default EmptyCart;