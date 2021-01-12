import React from "react";
import MainHeading from "../common/MainHeading";
import image from "../assets/image/img_2.png";
import CButton from "../common/CButton";

const MainFour = () => {
  return (
    <div className="container">
      <MainHeading
        title="Custom Framing Steps"
        subTitle="True Custom Framing Made Truly Simple"
      />
      <img src={image} width="100%"></img>
      <div className="d-flex justify-content-center">
        <CButton text="START FRAMING" />
      </div>
    </div>
  );
};

export default MainFour;
