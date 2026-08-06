import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'

import Drpkp from './components/projects/drpkp.tsx'
import BersinarIntiGlobal from './components/projects/bersinarintiglobal.tsx'
import AdyTeknik from './components/projects/adyteknik.tsx'
import JelantahHub from './components/projects/jelantahhub.tsx'
import Siperus from './components/projects/siperus.tsx'
import Ppg from './components/projects/ppg.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<App />} />
        
        {/* Halaman Detail */}
        <Route path="/projects/drpkp" element={<Drpkp />} />
        <Route path="/projects/bersinar-inti-global" element={<BersinarIntiGlobal />} />
        <Route path="/projects/ady-teknik" element={<AdyTeknik />} />
        <Route path="/projects/jelantahhub" element={<JelantahHub />} />
        <Route path="/projects/siperus" element={<Siperus />} />
        <Route path="/projects/ppg-cilacap" element={<Ppg />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)