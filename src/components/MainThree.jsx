import React from "react";
import MainHeading from "../common/MainHeading";
import img from "../assets/image/img_1.png";
import CardTwo from "../common/CardTwo";
import objImg from "../assets/image/img1.jpg";
import jerseyImg from "../assets/image/img2.jpg";
import elseImg from "../assets/image/img3.jpg";
import artImg from "../assets/image/img4.jpg";
import photoImg from "../assets/image/img5.jpg";
import textileImg from "../assets/image/img6.jpg";
const MainThree = () => {
  const customProps = {
    title: "Our Featured Products",
    subTitle: "Browse Through Our Range Of Featured Products",
  };
  return (
    <div className="mt-5 pt-5">
      <MainHeading title={customProps.title} subTitle={customProps.subTitle} />
      <div>
        <div className="row m-5">
          <div className="col-md-5 col-sm-12">
            <img src={img} width="400" height="650"></img>
          </div>
          <div className="col-md-7 col-sm-12">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "self-start",
                flexWrap: "wrap",
              }}
            >
              <CardTwo image={objImg} text="Dover" />
              <CardTwo image={artImg} text="Murquette" />
              <CardTwo image={elseImg} text="Wren" />
              <CardTwo image={textileImg} text="Marcer" />
              <CardTwo image={jerseyImg} text="Everett" />
              <CardTwo image={photoImg} text="Mandalay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainThree;
