import React from "react";
import Login from "./Login"; // Ensure the path to your Login component is correct

function ModalLogin({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    
    
      <div className="bg-white rounded-lg shadow-lg w-[500px] h-[700px] p-6 relative">
        <div className="flex justify-between items-center mb-1"> {/* Reduced mb-4 to mb-2 */}
          <h3 className="text-xl font-semibold text-center w-full">Login</h3>
          <button
            className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Render the Login component inside the modal */}
        <div className="flex flex-col items-center">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
