import React from "react";
import "../assets/css/cardStyle/card.css";
const Card = ({ image, title }) => {
  return (
    <div>
      <div className={`card ml-4`} style={{ width: "12rem", height: "20rem" }}>
        <div className="img-wrapper">
          <img
            className="card-img-top "
            src={image}
            alt="img"
            style={{ filter: "drop-shadow(0px px 15px #122E47)" }}
            width="200"
            height="320"
          ></img>
          <div className="text-wrapper">
            <h3>Frame Now</h3>
          </div>
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "adobe-clean, sans-serif", color: "#112d46" }}
          >
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
