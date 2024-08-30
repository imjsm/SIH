import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Import your Layout component
import Home from './components/Home';  // Import other page components
import AyushInfo from './components/AyushInfo';  // Import the AyushInfo component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="ayush-info" element={<AyushInfo/>} /> 
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
