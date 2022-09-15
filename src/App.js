import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import Players from "./pages/Players";
import SingleTeam from "./pages/SingleTeam";

function App() {
  return (
    <div className="App">
      <h1>Football app</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/players" element={<Players />} />
          <Route path="/single-team/:name" element={<SingleTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
