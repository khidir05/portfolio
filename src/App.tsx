import React from "react";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import Index from "./components/Index";

export default function App() {
  return (
    // Dihapus: h-screen overflow-y-scroll agar scroll browser bekerja natural
    <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight selection:bg-textGreen selection:text-bodyColor">
      <Navbar />
      <LeftSide />
      <RightSide />
      
      {/* Konten Utama */}
      <Index />
      
      <Footer />
    </main>
  );
}