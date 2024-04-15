import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import AllGames from './pages/allGames';
import GameAbout from './pages/gameAbout';
import GamingPage from './pages/gamingPage'
import ScrollToTop from './game/ScrollToTop';


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allgames" element={<AllGames />} />
        <Route path="/gameabout" element={<GameAbout />} />
        <Route path="/gamingpage" element={<GamingPage />} />
      </Routes>
    </div>
  )
}

export default App