import React, {useContext} from "react";
import Card from "../Card/Card";
import { cartContext } from "../App";
import EmptyCart from "../Pages/Checkout/EmptyCart";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Cart.css";
import { Link, Navigate } from "react-router-dom";


const Cart = () => {
  let {cart:cartItems,setCart} = useContext(cartContext);
  console.log(cartItems);
  cartItems = cartItems||[];  
  let totalPrice = 0;
  let discount = 0;
  let originalPrice = 0;
  
  cartItems.forEach((item) => {
    console.log(item);
    totalPrice += Number(item.variant_price);
    discount += Number(item.variant_compare_at_price - item.variant_price );
    originalPrice += Number(item.variant_compare_at_price);
  });

  return (
    <>
    <Navbar/>
    <div className="container">
    {cartItems.length!==0 ?
    <div className="cartPage">
      <div className="cartItemsList">
      <h1 className="cartItems_heading">Items in Cart</h1>
        {cartItems?.map((e, i) => <Card key={i} {...e} deleteitem/>)}
      </div>
     <div className="price_details">
      <h1 className="price_heading">Price Details</h1>
      <div className="calculation">
        
        <p>Total Items: {cartItems.length}</p>
        <p>Total Original Price: Rs.{ originalPrice}/-</p>
        <p>Discount: Rs.{discount}/-</p>
        <p>Total Price: Rs.{totalPrice}/-</p>
        <button className="order_Btn" onClick={()=>{alert("Order has been Placed!");}}>Buy</button>
      </div>
      </div>
    </div>
    
    :
    <EmptyCart/>}
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
