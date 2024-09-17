import React from 'react';
import heroImage from '../assets/hero-section.png';
import leafImage from '../assets/leaf.png';
import { useTheme } from '../components/ThemeContext'; // Import useTheme

function HeroSection() {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <section className={`relative flex flex-col lg:flex-row items-center justify-between px-8 py-16 md:py-24 lg:py-32 ${isDarkMode ? 'bg-gray-900' : 'bg-[#E8F3DF]'}`}>
      <div className={`max-w-lg lg:max-w-xl ml-20 mr-20 lg:pr-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
        <h1 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-gray-100' : 'text-[#151515]'}`}>
          Experience<br /> 
          Plants like <span className="inline-flex items-center">
            <img src={leafImage} alt="Leaf" className="w-12 h-12 ml-2" /> 
          </span>
          <br /> 
          never before
        </h1>
        <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
          Explore our virtual garden and learn about medicinal plants used in traditional AYUSH practices. Enhance your knowledge and experience the benefits of herbal medicine.
        </p>
        <div className="flex gap-4">
          <a
            href="/explore-plant"
            className={`relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-green-700 text-white ${isDarkMode ? 'bg-gray-800' : 'bg-green-600'} hover:bg-green-700 before:bg-green-600 hover:before:scale-105`}
          >
            <span className="relative">Explore Garden</span>
          </a>
          <a
            href="#learn"
            className={`relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition ${isDarkMode ? 'before:bg-gray-800 text-gray-300' : 'before:bg-gray-100 text-green-600'} hover:before:scale-105`}
          >
            <span className="relative">Virtual Tour</span>
          </a>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
        <img src={heroImage} alt="Hero" className="w-3/4 h-auto object-cover ml-5 rounded-lg" />
      </div>
    </section>
  );
}

export default HeroSection;
