import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { Footer } from "./Footer";
import { LargePic } from "./LargePic";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const allBlogs = (await axios.get(`http://localhost:8080/getBlogs`)).data;
      console.log(allBlogs);
      setBlogs(allBlogs);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content-container">
          <LargePic />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
