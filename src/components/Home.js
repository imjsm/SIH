import React from 'react';
import HeroSection from '../components/HeroSection'
import FeaturedPlants from './FeaturedPlants'
import Initiative from './Initiative';

function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedPlants/>
      <Initiative/>
    </div>
  );
}

export default Home;
