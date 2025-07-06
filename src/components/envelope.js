import React from 'react';
import Lottie from 'lottie-react';
import EnvelopeAnimation from '../assets/envelope.json'; // Make sure this path is correct

const Envelope = ({ onOpen }) => {
  return (
    <div
      style={{
        width: 250,
        margin: "50px auto",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
      }}
      onClick={onOpen}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
    >
      <Lottie
        animationData={EnvelopeAnimation}
        loop={true}
        style={{ width: "100%", height: "auto" }}
      />
      <p style={{
        color: "#fff",
        textAlign: "center",
        marginTop: "10px",
        fontStyle: "italic"
      }}>
        Tap to open your comfort message 💌
      </p>
    </div>
  );
};

export default Envelope;
