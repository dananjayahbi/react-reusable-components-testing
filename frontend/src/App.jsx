import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Forms from './pages/Forms';
import PageSections from './pages/PageSections';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/PageSections" element={<PageSections />} />
      </Routes>
    </>
  )
}

export default App