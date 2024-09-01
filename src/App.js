import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  
import SimilarPlants from './components/SimilarPlants';
import Home from './components/Home'; 
import AyushInfo from './components/AyushInfo'; 

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="ayush-info" element={<AyushInfo/>} /> 
          <Route path="similar-plants" element={<SimilarPlants />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;






  
          
      

