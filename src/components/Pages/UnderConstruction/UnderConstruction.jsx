import React from "react";
import './css/UnderConstruction.css'
import Errlogo from "../../images/ErrorNew500.jpg"
import { useNavigate } from "react-router-dom";


export default function UnderConstruction() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="image-box">
          <img
            src={Errlogo}
            alt=""
          />
          <p>Work Under Progress</p>
          <p>Please Try After Some Days</p>
          <br />
          <button id="btn1" onClick={handleClick}>Home</button>
      </div>
    </>
  );
}
