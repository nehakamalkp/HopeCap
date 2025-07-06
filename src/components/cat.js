import React from "react";
import Lottie from "lottie-react";
import catAnimation from "../assets/cat.json";

const Cat = ({ visible = true }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5%",
        left: "10%",
        width: 150,
        zIndex: 10,
      }}
    >
      <Lottie animationData={catAnimation} loop={true} />
    </div>
  );
};

export default Cat;
