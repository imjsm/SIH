import React from 'react';
import HeroSection from '../components/HeroSection'
import FeaturedPlants from './FeaturedPlants'
import Initiative from './Initiative';
import InfoStrip from './InfoStrip'; // Import the new InfoStrip component


function Home() {
  return (
    <div>
      <HeroSection/>
      <InfoStrip />
      <FeaturedPlants/>
      <Initiative/>
    </div>
  );
}

export default Home;
