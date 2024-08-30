import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPlants from './components/FeaturedPlants';
import Initiative from './components/Initiative';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection/>
      <FeaturedPlants/>
      <Initiative/>
      
    </div>
  );
}

export default App;
