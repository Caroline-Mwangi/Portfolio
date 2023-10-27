import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowSkills from "./pages/ShowSkills";
import SkillDetails from "./pages/SkillDetails";
import AddSkill from "./pages/AddSkill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/skills/" element={<ShowSkills />} /> */}
          <Route path="/skills/:id/" element={<SkillDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
