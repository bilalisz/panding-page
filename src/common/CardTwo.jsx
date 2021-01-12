import React from "react";
import "../assets/css/cardStyle/cardTwo.css";

const CardTwo = ({ image, text }) => {
  return (
    <div className="mb-5">
      <div className="imageWrapper">
        <img src={image} width="200" height="250"></img>
        <div className=" textWrapper  ">
          <h6> ADD TO CART</h6>
        </div>
      </div>

      <h5>{text}</h5>
    </div>
  );
};

export default CardTwo;
