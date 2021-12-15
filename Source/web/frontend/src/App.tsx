import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Blog from './components/Blog/blog/Blog';
import Dashboard from './components/dashbord/Dashbord';
import Home from './components/Home';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashbord" element={<Dashboard />} />
        <Route path="blog" element={<Blog />} />
      
      </Routes>
    </div>
  );
}

export default App;
