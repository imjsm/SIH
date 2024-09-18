import React from "react";
import Register from "./register"; // Ensure the path to your Login component is correct

function ModalRegister({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
        
      <div className="flex justify-between items-center mb-4">  
      <h3 className="text-xl font-semibold text-center w-full">Register</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {/* Render the Register component */}
        
        <Register /> 
      </div>
    </div>
  );
}

export default ModalRegister;
