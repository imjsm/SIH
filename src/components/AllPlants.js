

import React from 'react';
import HeroSection2 from './HeroSection2';
import PlantsPage from './PlantsPage';
 

const Allplants = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6">
        <div className="flex">
          <div className="flex-1 pl-6">
            <HeroSection2/>
            <PlantsPage/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Allplants;
