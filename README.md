🌟 HopeCap – Comforting Voice Notes from Emotions

**HopeCap** is an interactive web project that lets users express their emotions, describe how they feel, and receive an AI-generated comforting voice message — all through an engaging animated interface.

🎯 Purpose

This project was built for an interactive signage competition, combining:
- Emotion recognition
- Voice response
- Lottie animations
- AI text + voice integration

💡 Features

- 🌕 Select your emotion via an animated moon UI
- 💬 Enter your reason for feeling that way
- 💌 Receive a beautifully animated envelope
- 🔊 Listen to a comforting AI-generated voice note
- 🎥 Smooth transitions with Lottie animations
- 🧠 Uses **Google Gemini** to generate comforting messages
- 🎙️ Uses **ElevenLabs** for natural, sweet feminine voice


🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS
- **Animations**: Lottie
- **AI Model**: Google Gemini (Text Generation)
- **TTS (Voice)**: ElevenLabs API
- **State Management**: React Hooks

🔧 Installation & Running

1. **Clone the repo**
   git clone https://github.com/your-username/hope-cap.git
   cd hope-cap


2.Install dependencies

 npm install

3.Set up environment variables

Create a .env file in the root and add:
REACT_APP_ELEVENLABS_API_KEY=your-elevenlabs-api-key


4.Start the development server

    npm start

📁 Folder Structure

hope-cap/
├── public/
│   └── ...
├── src/
│   ├── api/
│   │   ├── gemini.js
│   │   └── tts.js
│   ├── components/
│   │   ├── Cat.js
│   │   ├── Moon.js
│   │   └── Envelope.js
│   ├── App.js
│   └── App.css
└── .env

⚙️ Customization

    🔄 Want to change the voice? Use ElevenLabs' voice settings.

    🧠 Want to improve Gemini prompts? Edit gemini.js for more context-aware outputs.

    ✨ Add more Lottie animations or UI effects to personalize further.

🧠 AI Prompt Example

    "I feel anxious because tomorrow is my presentation."
    → "Hey there, it’s okay to be nervous. It just means you care. You’ve got this 💪."

✨ Future Scope

    🌍 Multi-language support

    🎨 Emotion-based voice or tone variations

    📲 Convert into a mobile app

Made with 💖 by Neha Kamal

