import React from 'react';
import { FaUser, FaLeaf, FaFileAlt, FaChartBar, FaWeight } from 'react-icons/fa';
import { useTheme } from './ThemeContext'; // Import the custom hook


const InfoStrip = ({ }) => {
    const stats = [
        { label: 'Registered Users', value: '12,345', icon: <FaUser size={24} /> },
        { label: 'Medicinal Plants Species', value: '789', icon: <FaLeaf size={24} /> },
        { label: 'Items Posted', value: '2,345', icon: <FaFileAlt size={24} /> },
        { label: 'User Interactions', value: '1,234,567', icon: <FaChartBar size={24} /> },
        { label: 'User Feedbacks', value: '5,890', icon: <FaWeight size={24} /> },
    ];
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className={`p-6 shadow-none border-none text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#E8F3DF] border-gray-300'}`}>
            <div className="flex flex-wrap justify-center gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className={`w-60 p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'}`}>
                        <div className={`flex justify-center mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {React.cloneElement(stat.icon, { className: `text-2xl ${isDarkMode ? 'text-white' : 'text-[#246f2b]'}` })}
                        </div>
                        <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-[#246f2b]'}`}>{stat.label}</h4>
                        <p className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoStrip;
