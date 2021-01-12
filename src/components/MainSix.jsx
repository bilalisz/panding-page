import React from "react";
import txtImg from "../assets/image/text_img.png";
import zindexImg from "../assets/image/image_zindex.png";
import CButton from "../common/CButton";

const MainSix = () => {
  return (
    <div className="container mt-5">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src={txtImg} width="600"></img>
          <CButton text="START FRAMING" />
        </div>
        <div>
          <img src={zindexImg} width="400"></img>
        </div>
      </div>
    </div>
  );
};

export default MainSix;
