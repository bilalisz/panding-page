import React from "react";
import MainHeading from "../common/MainHeading";
import VCard from "../common/VCard";
const MainSeven = () => {
  return (
    <div>
      <MainHeading
        title="Our Blog"
        subTitle={`We Offer Numerous Custom Framing Options which Enable You 
                   To Create High-Quality Frames In Simple Steps`}
      />
      <div className="container">
        <div className="row mt-2">
          <div className="col-6">
            <VCard />
          </div>
          <div className="col-6">
            <VCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSeven;
