import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Blog } from "./Blog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>

        <div className="contact-options">
          <img src="/assets/envelope-solid1.jpg" alt="dev icon" />
          <img src="/assets/linkedin1.jpg" alt="dev icon" />
          <img src="/assets/github-mark1.jpg" alt="dev icon" />
          <img src="/assets/dev1.jpg" alt="dev icon" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
