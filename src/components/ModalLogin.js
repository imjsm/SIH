import React from "react";
import Login from "./Login"; // Ensure the path to your Login component is correct

function ModalLogin({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold w-full text-center">Login</h3>
          <button
            className="text-gray-500 hover:text-gray-700 absolute top-4 right-4 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Render the Login component inside the modal */}
        <div className="mt-4">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
