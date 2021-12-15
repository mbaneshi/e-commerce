import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Dashboard from './components/dashbord/Dashbord';
import Home from './components/Home';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="dashbord" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
