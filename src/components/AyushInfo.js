import React from 'react';
import Ayush from '../assets/Ayush-info.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';

function AyushInfo() {
    const cardImages = [card1, card2, card3, card4, card5];
    const cardLabels = ["Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"];

    return (
        <div className="py-20 bg-[#E8F3DF]">
            <div className="max-w-4xl mx-auto px-4">
                <img
                    src={Ayush}
                    alt="Ayush Info"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12">
                <h2 className="text-2xl font-bold text-[#1f7f29] mb-6 text-center">The five Domains of AYUSH</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cardImages.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            style={{ width: '200px', height: '200px' }}
                        >
                            <img
                                src={image}
                                alt={`Card ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={{ height: '160px' }} // Set a fixed height
                            />
                            {/* Add corresponding text below each card */}
                            <div className="text-center mt-2 text-lg font-semibold text-[#1f7f29]">
                                {cardLabels[index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Link to Know More */}
            <div className="mt-8 text-center">
                <a
                    href="https://ayush.gov.in/"
                    className="text-blue-800 hover:text-green-800 text-lg font-semibold underline"
                >
                    To know more about Ministry of AYUSH, click here
                </a>
            </div>
        </div>
    );
}

export default AyushInfo;
