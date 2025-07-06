export const getTTSFromElevenLabs = async (text) => {
  const voiceId = "XB0fDUnXU5powFXDhCwa";
  const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;

  console.log("TTS voice:", voiceId);
  console.log("API Key:", apiKey); // Should NOT be undefined
  console.log("API Key:", process.env.REACT_APP_ELEVENLABS_API_KEY);


  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      voice_settings: {
        stability: 0.4,
        similarity_boost: 0.75
      }
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("TTS API Error:", errorText);
    throw new Error("Failed to get voice audio");
  }

  const audioBlob = await response.blob();
  return URL.createObjectURL(audioBlob);
};
