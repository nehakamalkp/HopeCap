import React, { useState } from 'react';
import './App.css';
import Moon from "./components/moon.js";
import Cat from "./components/cat.js";
import Envelope from './components/envelope.js';
import { useEffect } from 'react';
import { getComfortMessageFromGemini } from './api/gemini.js';
import { getTTSFromElevenLabs } from "./api/tts.js";

function App() {
  // 🔄 App-level state
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [showCat, setShowCat] = useState(false);
  const [reason, setReason] = useState("");
  const [step, setStep] = useState("emotion"); // "emotion" → "reason" → "next"
  const [comfortMessage, setComfortMessage] = useState(""); const [audioUrl, setAudioUrl] = useState(null);
  const [loadingVoice, setLoadingVoice] = useState(false); // You can also show loading animation

 
  const handleEnvelopeOpen = async () => {
  setLoadingVoice(true);

  // 🎯 Use reason directly instead of Gemini
  setComfortMessage(reason);

  // 🗣️ Convert to voice
  const audio = await getTTSFromElevenLabs(reason);
  setAudioUrl(audio);

  setLoadingVoice(false);
  setStep("playVoice");
};



  useEffect(() => {
    const fetchAndSpeakMessage = async () => {
      if (step === "playVoice" && selectedEmotion && reason) {
        try {
          const message = await getComfortMessageFromGemini(selectedEmotion, reason);
          setComfortMessage(message);
          const audio = await getTTSFromElevenLabs(message);
          setAudioUrl(audio);
        } catch (err) {
          console.error("Gemini error:", err);
          setComfortMessage("Something went wrong. But you're not alone.");
        }
      }
    };
    fetchAndSpeakMessage();
  }, [step, selectedEmotion, reason]);



  return (
    <div className="sky" style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      
      {/* 🌕 Emotion selection step */}
      {step === "emotion" && (
        <Moon
          onEmotionSelect={(emotion) => {
            setSelectedEmotion(emotion);
            setShowCat(true);
            setStep("reason");
          }}
        />
      )}

      {/* 🐱 Cat appears after emotion selection */}
      {/* <Cat visible={showCat} /> */}
      {(step === "emotion" || step === "reason") && showCat && <Cat visible={true} />}


      {/* 💬 Input reason */}
      {step === "reason" && showCat && (
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: "25%",
            color: "#fff",
            zIndex: 20,
            textAlign: "left",
            maxWidth: "90%"
          }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
            Kuku: Why do you feel <strong>{selectedEmotion}</strong>?
          </p>
          <input
            type="text"
            placeholder="Type your reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #999",
              width: "300px",
              marginBottom: "10px"
            }}
          />
          <br />
          <button
            onClick={() => {
                         if (reason.trim()) {
                         setShowCat(false);   // ✅ Hide the cat when leaving "reason"
                         setStep("next");     // ✅ Move to envelope
                        }
                    }}

            style={{
              padding: "8px 16px",
              background: "#fff3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* ✅ Next page after sharing */}

      {/* 💌 Envelope step */}
      {step === "next" && !loadingVoice && (
        <div
          style={{
            position: "absolute",
            top: "25%",
            width: "100%",
            textAlign: "center",
            color: "#fff"
          }}
        >
          <h2>Here's something for you 💌</h2>
          <Envelope onOpen={handleEnvelopeOpen} />
        </div>
      )}

      {/* ⏳ Loading Spinner */}
      {loadingVoice && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            width: "100%",
            textAlign: "center",
            color: "#fff"
          }}
        >
          <h3>🔄 Preparing your comfort message...</h3>
        </div>
      )}

      {/* 🎧 Final message with audio */}
      {step === "playVoice" && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            width: "100%",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>🎧 Your Comfort Message</h2>
          <div
            style={{
              background: "#1e1e1e",
              padding: "20px",
              borderRadius: "16px",
              display: "inline-block",
              maxWidth: "600px"
            }}
          >
            <p style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>{comfortMessage}</p>
          </div>

          {/* 🎵 Voice playback & replay */}
          {audioUrl && (
            <div style={{ marginTop: "20px" }}>
              <audio id="comfort-audio" controls autoPlay src={audioUrl} />
              <br />
              <button
                onClick={() => {
                  const audioElement = document.getElementById("comfort-audio");
                  if (audioElement) {
                    audioElement.currentTime = 0;
                    audioElement.play();
                  }
                }}
                style={{
                  marginTop: "10px",
                  background: "#fff3",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🔁 Replay
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

