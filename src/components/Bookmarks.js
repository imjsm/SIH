// src/components/Bookmarks.js
import React from 'react';
import heartIcon from '../assets/heart.png'; // Adjust the path as needed

function Bookmarks({ bookmarkedPlants, onViewPlant }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {bookmarkedPlants.length === 0 ? (
        <div className="flex items-center justify-center h-64 bg-white p-4 shadow-md rounded">
          <span className="text-lg">No bookmarks yet</span>
        </div>
      ) : (
        bookmarkedPlants.map((plant) => (
          <div key={plant.id} className="relative bg-white p-4 shadow-md rounded">
            <img src={plant.imageUrl} alt={plant.name} className="w-full h-40 object-cover mb-2 rounded" />
            <div className="absolute top-2 right-2">
              <img src={heartIcon} alt="Bookmarked" className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
              onClick={() => onViewPlant(plant)}
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
