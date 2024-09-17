import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useTheme } from '../components/ThemeContext'; // Import useTheme


const Footer = () => {
    const { isDarkMode } = useTheme(); // Access dark mode state

    return (
        <section className={`py-10 ${isDarkMode ? 'bg-gray-900' : 'bg-[#E8F3DF]'} sm:pt-16 lg:pt-24`}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img src={logo} alt="Logo" className="h-35 w-30" />
                        <p className={`text-base leading-relaxed mt-7 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            HerbVerse is an innovative and immersive digital platform designed to explore and educate users about the world of medicinal plants. By leveraging advanced technologies like augmented reality (AR) and virtual reality (VR), HerbVerse offers a unique, interactive experience that allows users to delve deeply into the diverse range of plants used in AYUSH practices.
                        </p>
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="#" title="Facebook" className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Instagram" className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter" className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="LinkedIn" className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <p className={`text-sm font-semibold tracking-widest uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            HerbVerse
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Buy Plants
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <p className={`text-sm font-semibold tracking-widest uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Help
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p className={`text-sm font-semibold tracking-widest uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Products
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Medicinal Plants
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Virtual Garden
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    AR/VR Experiences
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Plant Tours
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p className={`text-sm font-semibold tracking-widest uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Contact Us
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Email:
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Phone: 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
