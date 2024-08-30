import { useState } from 'react';
import logo from '../assets/logo.png'; 

function Navbar() {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? 'block' : 'hidden'}`}
      />
      <nav className="bg-[#E8F3DF] shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-10" />
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Explore Garden
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Ayush Info
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Quizzes
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Notebook
              </a>
              
            </div>
            <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </button>
            <button
              onClick={toggleNavbar}
              aria-label="toggle navbar"
              className="md:hidden flex items-center px-3 py-2 rounded-md text-gray-900 hover:text-green-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    navIsOpened
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:hidden fixed inset-0 bg-white shadow-lg z-40 transform ${
              navIsOpened ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeNavbar}
                className="text-gray-900 hover:text-green-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                Explore Garden
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                Ayush Info
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                Quizzes
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                My Notebook
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
