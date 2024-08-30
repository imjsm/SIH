import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPlants from './components/FeaturedPlants';
import Initiative from './components/Initiative';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection/>
      <FeaturedPlants/>
      <Initiative/>
      <Footer/>
      
    </div>
  );
}

export default App;
