import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logo_2 from '../assets/Ministry-of-AYUSH-logo-1-3.jpg';
import { useTheme } from '../components/ThemeContext'; 
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "./firebase"; // Import Firebase auth
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function Navbar() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [isModalOpenIn, setIsModalOpenIn] = useState(false); // State to manage modal visibility
  const [isModalOpenUp, setIsModalOpenUp] = useState(false);
  const [user, setUser] = useState(null); // State to track user authentication status
  const [photoURL, setPhotoURL] = useState(null); // State to track user's profile picture URL

  const { isDarkMode, toggleDarkMode } = useTheme(); // Access dark mode and toggle function

  const openModalIn = () => {
    setIsModalOpenIn(true);
  };

  const closeModalIn = () => {
    setIsModalOpenIn(false);
  };

  const openModalUp = () => {
    setIsModalOpenUp(true);
  };

  const closeModalUp = () => {
    setIsModalOpenUp(false);
  };

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        // User is logged in, fetch the user's profile photo from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser(currentUser);
            setPhotoURL(userData.photo || '../assets/defaultprofile.png'); // Set photo URL from Firestore or default picture
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null); // No user is logged in
        setPhotoURL('../assets/defaultprofile.png'); // Set default picture when user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []); // Empty dependency array to only run on mount

  // Logout function
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setPhotoURL('../assets/defaultprofile.png'); // Reset to default picture on logout
      window.location.href = "/"; // Redirect to homepage after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "block" : "hidden"}`}
      />
      <nav className={`w-full shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-[#E8F3DF]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
              <img src={logo_2} alt="Logo" className="h-10 w-20" />
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>Home</Link>
              <Link to="/explore-plant" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>Explore Garden</Link>
              <Link to="/all-plants" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>All Plants</Link>
              <Link to="/feedback" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>Queries</Link>
              <Link to="/ayush-info" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>Ayush Info</Link>
              <Link to="/quiz" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>Quiz</Link>
              <Link to="/my-notebook" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900 hover:text-green-600'}`}>My Notebook</Link>
            </div>

            <div className="flex items-center space-x-2">
              {user ? (
                <>
                  <img src={photoURL} alt="User" className="h-9 w-9 rounded-full" style={{ marginRight: '20px' }} />
                  <button onClick={handleLogout} className="text-white bg-green-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">Logout</button>
                </>
              ) : (
                <>
                  <button onClick={openModalIn} className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">Sign In</button>
                  <button onClick={openModalUp} className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
                </>
              )}
              <ModalLogin isOpen={isModalOpenIn} onClose={closeModalIn} />
              <ModalRegister isOpen={isModalOpenUp} onClose={closeModalUp} />
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'} hover:bg-gray-300 px-2 py-1 rounded-md text-sm`}>
                {isDarkMode ? 'L' : 'D'}
              </button>
            </div>

            <button onClick={toggleNavbar} aria-label="toggle navbar" className="md:hidden flex items-center px-3 py-2 rounded-md text-gray-900 hover:text-green-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navIsOpened ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
