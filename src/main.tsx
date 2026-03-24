import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'

// PASTIKAN NAMA FOLDER DAN FILE SESUAI!
// Ubah './components/projects/dermacare-ai.tsx' sesuai lokasi asli file Anda
import DermacareAI from './components/projects/dermacare-ai.tsx'
import AdyTeknik from './components/projects/adyteknik.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<App />} />
        
        {/* Halaman Detail */}
        <Route path="/dermacare-ai" element={<DermacareAI />} />
        <Route path="/adyteknik" element={<AdyTeknik />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)