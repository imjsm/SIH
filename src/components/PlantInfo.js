

import React, { useState } from 'react';
import { plantData } from '../components/plantData'; 
import ThreeDModel from '../components/ThreeDModel';

const PlantInfo = () => {
    const [notes, setNotes] = useState('');

    const handleShare = () => {
      
    };

    const handleSave = () => {
       
    };

    const handleDownload = () => {
        
        
    };


    if (!plantData || plantData.length === 0) {
        return <p>No plant data available.</p>;
    }

    const plant = plantData[0];

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start p-6">
            {/* Left Panel - 3D Model */}
            <div className="flex-1 p-4 lg:pr-6">
                <div className="w-full h-[600px] bg-white flex justify-center items-center">
                    <ThreeDModel />
                </div>

            </div>
            {/* Right Panel - Information */}
            <div className="flex-1 p-4 lg:pl-6">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a7f2f' }}>
                    {plant.commonName}
                </h2>
                <br />
                <p className="text-lg font-semibold" style={{ color: '#4a7f2f' }}>
                    {plant.botanicalName}
                </p>
                <h3 className="text-xl font-semibold mt-4" style={{ color: '#4a7f2f' }}>
                    Description
                </h3>
                <p className="text-lg" style={{ color: '#4a7f2f' }}>
                    {plant.description}
                </p>
                <br />
                <h3 className="text-xl font-semibold" style={{ color: '#4a7f2f' }}>
                    Habitat
                </h3>
                <p className="text-lg" style={{ color: '#4a7f2f' }}>
                    {plant.habitat}
                </p>
                <br />
                <h3 className="text-xl font-semibold" style={{ color: '#4a7f2f' }}>
                    Medicinal Uses
                </h3>
                <ul className="list-disc pl-6 mb-4">
                    {plant.medicinalUses.map((use, index) => (
                        <li key={index} className="text-lg" style={{ color: '#4a7f2f' }}>
                            {use}
                        </li>
                    ))}
                </ul>
                <br />
                <h3 className="text-xl font-semibold" style={{ color: '#4a7f2f' }}>
                    Methods of Cultivation
                </h3>
                <ul className="list-disc pl-6 mb-4">
                    {plant.methodsOfCultivation.map((method, index) => (
                        <li key={index} className="text-lg" style={{ color: '#4a7f2f' }}>
                            {method}
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add your notes here"
                        className="w-full h-32 p-2 border border-gray-300 rounded-md bg-white"
                    />
                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleShare}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Share
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleDownload}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantInfo;
