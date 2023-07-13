import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { Footer } from "./Footer";
import { LargePic } from "./LargePic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className="content-container">
        <LargePic />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/blog" element={ <Blog /> } />
          </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
