import React from 'react';
import plantImage from '../assets/plant_for_hero_section.png';

const HeroSection2 = () => {
  return (
    <div className="bg-[#466939] flex flex-col md:flex-row items-center justify-between p-14 rounded-lg">
      {/* Text Section */}
      <div className="text-white text-center md:text-left mb-6 md:mb-0 relative">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          IMMERSE YOURSELF IN OUR
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          3D MODEL EXPERIENCE
        </h2>
        <div className="mt-4 relative">
          <span className="text-2xl md:text-4xl font-bold">___________________________________________</span>
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="relative w-64 h-4 bg-transparent">
              <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-t-[20px] border-t-[#f0f4c3] border-l-transparent border-r-transparent border-solid rotate-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="rounded-t-full bg-[#f0f4c3] p-10 mr-12">
          <img
            src={plantImage}
            alt="Plant 3D Model"
            className="h-40 w-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
