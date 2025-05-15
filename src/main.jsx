import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css' // ✅ Import Tailwind
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmotionDetection from './components/Emotion_detection';


AOS.init(); // 👈 Initialize AOS here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/emotion-detection" element={<EmotionDetection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
