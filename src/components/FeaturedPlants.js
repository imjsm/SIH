import React from 'react';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import plant3 from '../assets/plant3.png';
import { useTheme } from '../components/ThemeContext'; // Import useTheme

function FeaturedPlants() {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#4B762D]'} py-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-white'} text-center mb-8`}>
          Featured Plants
        </h2>
        <h3 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-white'} text-center mb-8`}>
          Interactive Models
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <img src={plant1} alt="Plant 1" className="w-full mb-4" />
            <div className="text-center">
              <a href="#" className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Explore Plant</a>
            </div>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <img src={plant2} alt="Plant 2" className="w-full mb-4" />
            <div className="text-center">
              <a href="#" className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Explore Plant</a>
            </div>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <img src={plant3} alt="Plant 3" className="w-full mb-4" />
            <div className="text-center">
              <a href="#" className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Explore Plant</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPlants;
