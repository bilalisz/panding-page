import React from "react";
import MainHeading from "../common/MainHeading";
import image1 from "../assets/image/room1.jpg";
import image2 from "../assets/image/room2.jpg";
import image3 from "../assets/image/room3.jpg";
import image4 from "../assets/image/room4.jpg";
import "../assets/css/mainStyle/main.css";

const MainFive = () => {
  const imgStyle = {
    transform: "scale(1.2, 1.2)",
  };

  return (
    <div>
      <MainHeading
        title="Our Impressive Works"
        subTitle="Design Custom Frame For Photo, Art And More"
      />

      <div className="container">
        <div className="row">
          <div className="col-5 image-wrapper">
            <img src={image1} width="430" height="560"></img>
          </div>
          <div className="col-7">
            <div
              className="mb-3 image-wrapper"
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <img src={image2} width="300" height="240"></img>
              <img src={image3} width="300" height="240"></img>
            </div>

            <div className="image-wrapper">
              <img src={image4} width="630" height="300"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFive;
