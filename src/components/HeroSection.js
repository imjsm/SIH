
import React from 'react';
import heroImage from '../assets/hero-section.png'; 
import leafImage from '../assets/leaf.png'; 


function HeroSection() {
  return (
    <section className="bg-[#E8F3DF] relative flex flex-col lg:flex-row items-center justify-between px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-lg lg:max-w-xl ml-20 mr-20 lg:pr-8">
      <h1 className="text-4xl md:text-5xl font-bold text-[#151515] leading-tight mb-6">
          Experience<br /> 
          Plants like <span className="inline-flex items-center">
            <img src={leafImage} alt="Leaf" className="w-12 h-12 ml-2" /> 
          </span>
          <br /> 
          never before
        </h1>
        <p className="text-gray-900 dark:text-gray-500 mb-8">
          Explore our virtual garden and learn about medicinal plants used in traditional AYUSH practices. Enhance your knowledge and experience the benefits of herbal medicine.
        </p>
        <div className="flex gap-4">
          <a
            href="#explore"
            className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-green-700 text-white bg-green-600 hover:bg-green-700 before:bg-green-600 hover:before:scale-105"
          >
            <span className="relative">Explore Garden</span>
          </a>
          <a
            href="#learn"
            className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-green-600 dark:text-white hover:before:scale-105"
          >
            <span className="relative">Learn More</span>
          </a>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
      <img src={heroImage} alt="Hero" className="w-3/4 h-auto object-cover ml-5 rounded-lg " />
      
      </div>
    </section>
  );
}

export default HeroSection;
