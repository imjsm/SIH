import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  
import SimilarPlants from './components/SimilarPlants';
import Home from './components/Home'; 
import AyushInfo from './components/AyushInfo'; 
import Notebook from './components/Notebook';
function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="ayush-info" element={<AyushInfo/>} /> 
{/* <<<<<<< Updated upstream */}
          <Route path="similar-plants" element={<SimilarPlants />} />
{/* ======= */}
          <Route path='my-notebook' element={<Notebook/>}/>
{/* >>>>>>> Stashed changes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;






  
          
      

