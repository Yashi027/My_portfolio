import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">

      <AnimatedBackground />

      <Sidebar />

      <main className="relative z-10 pt-24 sm:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;