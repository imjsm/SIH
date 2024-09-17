import React, { useState, useEffect } from 'react';
import { mockPlants } from './mockData'; // Import the mock data
import plantImage from '../assets/plant_for_hero_section.png'; // Placeholder image

const PlantsPage = () => {
  const [plants, setPlants] = useState(mockPlants);
  const [loading, setLoading] = useState(false); // Change to false since we're using mock data
  const [filter, setFilter] = useState({
    category: '',
    state: '',
    certified: '',
    plantName: '',
    botanicalName: '',
    tradeName: '',
    type: ''
  });
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(6); // Number of plants per page

  useEffect(() => {
    // Simulate a delay for loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms delay to simulate loading
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const applyFilters = () => {
    const result = plants.filter((plant) => {
      return (
        (filter.category ? plant.category === filter.category : true) &&
        (filter.state ? plant.state === filter.state : true) &&
        (filter.certified ? plant.certified === filter.certified : true) &&
        (filter.plantName ? plant.name.includes(filter.plantName) : true) &&
        (filter.botanicalName ? plant.botanicalName.includes(filter.botanicalName) : true) &&
        (filter.tradeName ? plant.tradeName.includes(filter.tradeName) : true) &&
        (filter.type ? plant.type === filter.type : true)
      );
    });
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

        {/* Filter by State */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Search by State:</label>
          <select
            name="state"
            value={filter.state}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          >
            <option value="">Choose State</option>
            {/* Add state options here */}
          </select>
        </div>

        {/* Filter by Certified */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Certified:</label>
          <select
            name="certified"
            value={filter.certified}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          >
            <option value="">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Search by Plant Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Search by Plant Name:</label>
          <input
            type="text"
            name="plantName"
            value={filter.plantName}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Search by Botanical Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Botanical Name:</label>
          <input
            type="text"
            name="botanicalName"
            value={filter.botanicalName}
            onChange={handleFilterChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Search by Trade Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Trade Name:</label>
          <input
            type="text"
            name="tradeName"
            value={filter.tradeName}
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
        <h2 className="text-xl font-bold mb-4">Latest Items</h2>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {/* Latest Items for Sale */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Latest Items - Sell</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPlants.filter(plant => plant.type === 'sell').map((plant) => (
                  <div key={plant.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <img src={plant.image || plantImage} alt={plant.name} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h4 className="font-semibold mb-2">{plant.name}</h4>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">3D View</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Items for Buy */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Latest Items - Buy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPlants.filter(plant => plant.type === 'buy').map((plant) => (
                  <div key={plant.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <img src={plant.image || plantImage} alt={plant.name} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h4 className="font-semibold mb-2">{plant.name}</h4>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">3D View</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => handlePageChange(1)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                View All
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlantsPage;
