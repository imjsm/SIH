import React from 'react';
import promoVideo from '../assets/promo-video.mp4'; // Adjust the path as needed

function Initiative() {
  return (
    <section className="bg-green-100 py-20">
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
            {/* Initiative 01 */}
            <h2 className="text-3xl font-bold text-[#1b601f] mb-1">The Initiative</h2>
            <h2 className="text-3xl font-bold text-[#1b601f] mb-8">Explore the Healing Power of Nature.</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">01. Virtual Tours</h3>
              <p className="mt-4 text-gray-700">Guided virtual tours highlighting specific themes, such as plants for digestive health, immunity, skin care, etc.</p>
            </div>
            {/* Initiative 02 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">02. User Interaction</h3>
              <p className="mt-4 text-gray-700">Features that allow users to bookmark favorite plants, take notes, and share information on social media.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiative;
