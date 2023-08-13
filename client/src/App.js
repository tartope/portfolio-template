import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Blog } from "./Pages/Blog";
import { Footer } from "./Footer";
import { LargePic } from "./LargePic";
import { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const allBlogs = (await axios.get(`http://localhost:8080/api/getBlogs`))
        .data;
      // console.log(allBlogs);
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
