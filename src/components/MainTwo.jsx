import React from "react";
import Card from "../common/Card";
import MainHeading from "../common/MainHeading";
import objImg from "../assets/image/img_obj.jpg";
import jerseyImg from "../assets/image/img_jersey.jpg";
import elseImg from "../assets/image/img_else.jpg";
import artImg from "../assets/image/img_art.jpg";
import photoImg from "../assets/image/img_photo.jpg";
import textileImg from "../assets/image/img_textile.jpg";
const MainTwo = () => {
  return (
    <div>
      <MainHeading
        title="What You Wish To Frame?"
        subTitle="Customize Your Frame To Fill Artworks, Photos and Many More!"
      />

      <div style={{ display: "flex" }}>
        <Card image={artImg} title="Original Art" />
        <Card image={objImg} title="Object" />
        <Card image={textileImg} title="Textile" />
        <Card image={jerseyImg} title="Jersey" />
        <Card image={photoImg} title="Photography" />
        <Card image={elseImg} title="Something else" />
      </div>
    </div>
  );
};

export default MainTwo;
