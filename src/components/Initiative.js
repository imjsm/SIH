import React from 'react';
import promoVideo from '../assets/promo-video.mp4'; // Adjust the path as needed
import { useTheme } from '../components/ThemeContext'; // Import useTheme

function Initiative() {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-100'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div className="flex justify-center lg:justify-start">
            <video
              src={promoVideo}
              controls
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
              alt="Promotional video"
            />
          </div>
          {/* Initiative Points */}
          <div className="flex flex-col gap-12">
            {/* Initiative Title */}
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-green-300' : 'text-[#1b601f]'} mb-1`}>
              The Initiative
            </h2>
            <h2 className={`text-5xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Explore the Healing<br /> Power of Nature.
            </h2>
            
            <div>
              <p className={`text-xl font-sans ${isDarkMode ? 'text-gray-300' : 'text-black'} mb-12`}>
                HerbVerse is a groundbreaking virtual platform designed to immerse users in the fascinating world of medicinal plants.
              </p>
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-green-300' : 'text-[#1b601f]'}`}>01. Virtual Tours</h3>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Guided virtual tours highlighting specific themes, such as plants for digestive health, immunity, skin care, etc.
              </p>
            </div>
            {/* Initiative 02 */}
            <div>
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-green-300' : 'text-[#1b601f]'}`}>02. User Interaction</h3>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Features that allow users to bookmark favorite plants, take notes, and share information on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiative;
