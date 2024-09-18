import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { auth, db } from "./firebase"; // Adjust import paths as necessary
import ModalLogin from "./ModalLogin"; // Adjust import paths as necessary

const defaultpicurl = "https://firebasestorage.googleapis.com/v0/b/herbverse-ae951.appspot.com/o/defaultprofile.png?alt=media&token=918606b2-dea8-4e52-94fe-56a2a92d7a7d";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        // Store the user's information in Firestore in the "users" collection
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          password: password,
          photo: defaultpicurl, // Note: Storing passwords in plain text is not recommended; use hashing
        });
      }

      // Display success toast message (green and at top-right)
      toast.success("User registered successfully!", {
        position: "bottom-right",
        theme: "colored", // This ensures the toast has a green color
      });

      // Close the modal after successful registration
      closeModal();
    } catch (error) {
      // Display error toast message at the bottom-center
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            
            {/* First Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-green-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>

            {/* Last Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-blue-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-purple-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-red-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>

          {/* Already Registered / Login Link */}
          <p className="text-center text-sm mt-4">
            Already registered?{' '}
            <a
              href="/#"
              onClick={openModal}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </a>
          </p>
        </form>

        {/* Modal for Login */}
        <ModalLogin isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Register;
