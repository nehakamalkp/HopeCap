import React from "react";
import Lottie from "lottie-react";
import moonAnimation from "../assets/moon.json";

// onEmotionSelect: callback passed from App.js
const Moon = ({ onEmotionSelect }) => {
  const emotions = ["happy", "sad", "numb", "grateful"];

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        textAlign: "center"
      }}
    >
      {/* Lottie moon animation */}
      <div style={{ width: 200, margin: "0 auto" }}>
        <Lottie animationData={moonAnimation} loop={true} />
      </div>

      {/* Emotion buttons */}
      <div style={{ marginTop: 20 }}>
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => onEmotionSelect(emotion)}
            style={{
              margin: "0 8px",
              padding: "8px 16px",
              borderRadius: "20px",
              backgroundColor: "#ffffff22",
              color: "#fff",
              border: "1px solid #fff5",
              cursor: "pointer",
              backdropFilter: "blur(4px)"
            }}
          >
            {emotion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Moon;

