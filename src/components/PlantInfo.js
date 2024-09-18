import React, { useState, useRef, useEffect } from 'react';
import { getAuth } from 'firebase/auth'; // Firebase Authentication 
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; // Firestore functions
import { ref, uploadString } from 'firebase/storage';
import { db, storage } from './firebase';
import ThreeDModel from '../components/ThreeDModel';
import { plantData } from '../components/plantData';

const PlantInfo = ({ onClose }) => {
    const [notes, setNotes] = useState('');
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user ? user.uid : null;

    const popupRef = useRef(null);

    const handleShare = (format) => {
        // Implement share functionality if needed
    };

    const handleSave = async () => {
        if (userId) {
            try {
                // Save the notes to Firestore
                const docRef = await addDoc(collection(db, "notes"), {
                    userId: userId,
                    title: plant.commonName,  // You can add a field for the title if needed
                    content: notes,
                    timestamp: serverTimestamp(),
                });

                // Save notes in Firebase Storage under the user's folder
                const storageRef = ref(storage, `${userId}/notes/${docRef.id}.txt`);
                await uploadString(storageRef, notes);

                alert("Notes saved successfully!");
                setNotes('');
            } catch (error) {
                console.error("Error saving notes: ", error);
                alert("Failed to save notes. Please try again.");
            }
        } else {
            alert("You are not authenticated. Please log in to save notes.");
        }
    };

    const handleDownload = () => {
        if (!notes) {
            alert("There are no notes to download.");
            return;
        }

        // Create a Blob from the notes string
        const blob = new Blob([notes], { type: 'text/plain' });

        // Create a temporary anchor element
        const link = document.createElement('a');

        // Set the download attribute with the desired file name
        link.download = `${plant.commonName}_notes.txt`;

        // Create a URL for the Blob and set it as the href of the anchor
        link.href = window.URL.createObjectURL(blob);

        // Append the anchor to the body (required for Firefox)
        document.body.appendChild(link);

        // Programmatically click the anchor to trigger the download
        link.click();

        // Clean up by removing the anchor and revoking the Object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
    };

    const handleBookmark = async () => {
        if (userId) {
            try {
                // Save bookmarked plant info to Firestore
                await addDoc(collection(db, "bookmarks"), {
                    userId: userId,
                    plantName: plant.commonName,
                    timestamp: serverTimestamp(),
                });
                alert("Plant bookmarked successfully!");
            } catch (error) {
                console.error("Error bookmarking plant: ", error);
                alert("Failed to bookmark the plant. Please try again.");
            }
        } else {
            alert("You are not authenticated. Please log in to bookmark plants.");
        }
    };

    if (!plantData || plantData.length === 0) {
        return <p>No plant data available.</p>;
    }

    const plant = plantData[0];

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div 
                ref={popupRef} 
                className="bg-white rounded-lg shadow-lg border border-gray-300 p-4 w-[80%] max-w-screen-lg h-[80%] overflow-hidden relative flex"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    aria-label="Close"
                >
                    &times;
                </button>
                
                {/* Container for 3D Model and Information */}
                <div className="flex flex-row w-full h-full">
                    {/* Left Panel - 3D Model */}
                    <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
                        <ThreeDModel />
                    </div>
                    {/* Right Panel - Information */}
                    <div className="w-1/2 h-full p-4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a7f2f' }}>
                            {plant.commonName}
                        </h2>
                        <p className="text-md font-semibold" style={{ color: '#4a7f2f' }}>
                            {plant.botanicalName}
                        </p>
                        <h3 className="text-lg font-semibold mt-2" style={{ color: '#4a7f2f' }}>
                            Description
                        </h3>
                        <p className="text-md" style={{ color: '#4a7f2f' }}>
                            {plant.description}
                        </p>
                        <h3 className="text-lg font-semibold mt-2" style={{ color: '#4a7f2f' }}>
                            Habitat
                        </h3>
                        <p className="text-md" style={{ color: '#4a7f2f' }}>
                            {plant.habitat}
                        </p>
                        <h3 className="text-lg font-semibold mt-2" style={{ color: '#4a7f2f' }}>
                            Medicinal Uses
                        </h3>
                        <ul className="list-disc pl-4 mb-2">
                            {(Array.isArray(plant.medicinalUses) ? plant.medicinalUses : []).map((use, index) => (
                                <li key={index} className="text-md" style={{ color: '#4a7f2f' }}>
                                    {use}
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-semibold mt-2" style={{ color: '#4a7f2f' }}>
                            Methods of Cultivation
                        </h3>
                        <ul className="list-disc pl-4 mb-2">
                            {(Array.isArray(plant.methodsOfCultivation) ? plant.methodsOfCultivation : []).map((method, index) => (
                                <li key={index} className="text-md" style={{ color: '#4a7f2f' }}>
                                    {method}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add your notes here"
                                className="w-full h-24 p-2 border border-gray-300 rounded-md bg-white"
                            />
                            <div className="mt-4 flex gap-2 flex-wrap">
                                <button
                                    onClick={handleShare}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
                                >
                                    Share
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 text-sm"
                                >
                                    Download
                                </button>
                                <button
                                    onClick={handleBookmark}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
                                >
                                    Bookmark
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantInfo;
