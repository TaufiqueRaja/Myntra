import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { cartContext } from "../App";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({
  images,
  title,
  variant_price,
  variant_compare_at_price,
  brand,
  index,
  product_for,
  id,
  deleteitem,
}) => {
  const navigate = useNavigate();
  const discount = Math.round(((variant_compare_at_price - variant_price) / variant_compare_at_price) * 100);

  

  let { cart, setCart } = useContext(cartContext);
  function deleteByID(id) {
    let cartArray = [...cart];
    let idx = cartArray.findIndex((obj) => obj.id === id);
    cartArray.splice(idx, 1);
    setCart(cartArray);
  }
  
  return (
    <>
      <div className="main__container">
        <div
          className="indiv-tile-holder"
          onClick={() => {
            navigate(`/productModal/${product_for}-${index}`);
          }}
        >
          <Image
            effect="blur"
            height={"303px"}
            width={"220px"}
            src={images[0]}
            alt=""
          />
          <p className="name">{brand}</p>
          <p className="description">{title}</p>
          <p className="price">
            <span>Rs.{variant_price}</span>
            <strike className="strikePrice">
              Rs.{variant_compare_at_price}
            </strike>
            <span className="discount">({discount})%</span>
          </p>
        </div>
        {deleteitem && (
          <button
            className="delete_btn"
            onClick={() => {
              deleteByID(id);
            }}
          >
            delete
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
