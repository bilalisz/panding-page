import React from "react";
import pic from "../assets/image/img2.jpg";
import CButton from "./CButton";
const VCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={pic} width="250" height="170"></img>
        </div>
        <div className="col-6">
          <h6 className="text-muted">Category Blog</h6>
          <h6>A Very Anthropoloie Holiday with Jodie Harrison</h6>
          <p className="text-muted">By admin : [30/3/2020]</p>
          <p className="text-muted">
            One of my favorite illustrators dan who goes by the creative name of
            roach graphics{" "}
          </p>
          <CButton text="Read More" />
        </div>
      </div>
    </div>
  );
};

export default VCard;
