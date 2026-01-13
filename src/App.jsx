import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-gray-100">
        <Navbar />
        <main className="max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Home filter="all" />} />
            <Route path="/active" element={<Home filter="active" />} />
            <Route path="/completed" element={<Home filter="completed" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
