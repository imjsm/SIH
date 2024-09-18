import React, { useState, useEffect } from 'react';
import { mockPlants } from './mockData'; // Import the mock data
import plantImage from '../assets/plant_for_hero_section.png'; // Placeholder image
import PlantInfo from './PlantInfo'; // Import the PlantInfo component

const PlantsPage = () => {
  const [plants, setPlants] = useState(mockPlants);
  const [loading, setLoading] = useState(false); // Change to false since we're using mock data
  const [filter, setFilter] = useState({
    category: '',
    region: '',
    medicinalUses: '',
    type: ''
  });
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(6); // Number of plants per page
  const [selectedPlant, setSelectedPlant] = useState(null); // State for selected plant
  const [isPlantInfoVisible, setIsPlantInfoVisible] = useState(false); // State for PlantInfo visibility

  useEffect(() => {
    // Simulate a delay for loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms delay to simulate loading
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filter]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const applyFilters = () => {
    console.log('Filter:', filter);
    const result = plants.filter((plant) => {
      console.log('Plant:', plant);
      return (
        (filter.category ? (plant.category || '').toLowerCase() === filter.category.toLowerCase() : true) &&
        (filter.region ? (plant.region || '').toLowerCase() === filter.region.toLowerCase() : true) &&
        (filter.medicinalUses ? (plant.medicinalUses || '').toLowerCase().includes(filter.medicinalUses.toLowerCase()) : true) &&
        (filter.type ? (plant.type || '').toLowerCase() === filter.type.toLowerCase() : true)
      );
    });
    console.log('Filtered Plants:', result);
    setFilteredPlants(result);
  };

  // Pagination Logic
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);
  const totalPages = Math.ceil(filteredPlants.length / plantsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewDetails = (plant) => {
    setSelectedPlant(plant);
    setIsPlantInfoVisible(true);
  };

  const handleClosePlantInfo = () => {
    setIsPlantInfoVisible(false);
    setSelectedPlant(null);
  };

  return (
    <div className="flex flex-col md:flex-row p-8 bg-[#f0f4c3] min-h-screen">
      {/* Filters Section */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Filter by Category */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Search by Category:</label>
          <select
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          >
            <option value="">Select Category</option>
            <option value="Herbal Extract">Herbal Extract</option>
            <option value="Medicinal plants">Medicinal plants</option>
            <option value="Planting material of medicinal plants">Planting material of medicinal plants</option>
          </select>
        </div>

        {/* Filter by Region */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Search by Region:</label>
          <select
            name="region"
            value={filter.region}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          >
            <option value="">Select Region</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            {/* Add more regions as needed */}
          </select>
        </div>

        {/* Filter by Medicinal Uses */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Medicinal Uses:</label>
          <input
            type="text"
            name="medicinalUses"
            value={filter.medicinalUses}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Filter by Type */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Search by Type (Sell/ Buy):</label>
          <select
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          >
            <option value="">Select Type</option>
            <option value="sell">Sell</option>
            <option value="buy">Buy</option>
          </select>
        </div>

        {/* Go Button */}
        <button
          onClick={applyFilters}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg mt-4"
        >
          Go
        </button>
      </div>

      {/* Plants Display Section */}
      <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPlants.filter(plant => plant.type === 'sell').map((plant) => (
                <div key={plant.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src={plant.image || plantImage} alt={plant.name} className="w-full h-32 object-cover rounded-md mb-4" />
                  <h4 className="text-md font-semibold mb-2">{plant.name}</h4>
                  <p className="text-gray-600 mb-2">Category: {plant.category}</p>
                  <p className="text-gray-600 mb-2">Region: {plant.region}</p>
                  <p className="text-gray-600 mb-2">Medicinal Uses: {plant.medicinalUses}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleViewDetails(plant)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
                    >
                      View Details
                    </button>
                    {plant.buyLink && (
                      <a
                        href={plant.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                      >
                        Buy
                      </a>
                    )}
                  </div>
                </div>
              ))}

            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                &laquo; First
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                &lsaquo; Prev
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-green-500`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Next &rsaquo;
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Last &raquo;
              </button>
            </div>
          </>
        )}
      </div>

      {/* Plant Info Popup */}
      {isPlantInfoVisible && (
        <PlantInfo plant={selectedPlant} onClose={handleClosePlantInfo} />
      )}
    </div>
  );
};

export default PlantsPage;
