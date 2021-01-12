import React from "react";
const MainHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-4 pt-2">
      <h5 style={{ color: "#112d46" }}>{title}</h5>
      <svg height="5" width="120">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          style={{ stroke: "#464211", strokeWidth: "5" }}
        />
      </svg>
      <p style={{ color: "#6D6B6B" }}>{subTitle}</p>
    </div>
  );
};

export default MainHeading;
