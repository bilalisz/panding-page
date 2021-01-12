import React from "react";
import img from "../assets/image/img_1.png";
import "../assets/css/mainStyle/main.css";
import CButton from "../common/CButton";

const Main = () => {
  return (
    <main className="container">
      <section className="row mt-5">
        <div className="col-md-6">
          <img src={img} width="450" height="450"></img>
        </div>
        <div id="col-2" className="col-md-6">
          <div>
            <h2 style={{ color: "#1F3950" }}>
              CUSTOM FRAMES TO TELL YOUR UNIQUE STORY
            </h2>
            <p className="main-p pl-2">
              We Make it Simple. Hassle-Free And Affordable<br></br> For You To
              Share Your Story With Custom<br></br> Frames!
            </p>
            <CButton text="START FRAMING" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
