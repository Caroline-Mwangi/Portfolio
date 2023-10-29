import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SkillDetails from "./pages/SkillDetails";
import ShowAllSkills from "./pages/ShowAllSkills";
import ShowAllProjects from "./pages/ShowAllProjects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills/" element={<ShowAllSkills />} />
          <Route path="/skills/:id/" element={<SkillDetails />} />
          <Route path="/projects/" element={<ShowAllProjects />} />
          <Route path="/projects/:id/" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
