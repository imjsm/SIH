// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
                className="bg-green-600 h-full rounded-full text-center text-xs text-white"
                style={{ width: `${percentage}%` }}
            >
                {`${current + 1}/${total}`}
            </div>
        </div>
    );
};

export default ProgressBar;
