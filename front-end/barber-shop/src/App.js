import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Intro from './pages/Intro';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
