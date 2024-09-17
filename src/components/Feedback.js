import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

const FeedbackForm = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        userType: '',
        state: '',
        plantBenefit: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Feedback submitted:', formData);
    };

    return (
        <div
            className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                } mt-10 mb-10`}
        >
            <h2 className={`text-3xl font-semibold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                Feedback Form
            </h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We value your feedback on our Virtual Herbal Garden. Please share your experience and suggestions.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name ..."
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    />
                </div>
                <div>
                    <label htmlFor="mobile" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Mobile *
                    </label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Enter Mobile Number ..."
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    />
                </div>
                <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Email ..."
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    />
                </div>
                <div>
                    <label htmlFor="userType" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        You are a: *
                    </label>
                    <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    >
                        <option value="">Choose Category</option>
                        <option value="student">Student</option>
                        <option value="practitioner">Practitioner</option>
                        <option value="enthusiast">Enthusiast</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="state" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        State: *
                    </label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    >
                        <option value="">Choose State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="plantBenefit" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        How did you benefit from the Virtual Herbal Garden? *
                    </label>
                    <div className="mt-1 space-y-2">
                        {[
                            "Learned more about medicinal plants",
                            "Gained insights into traditional herbal practices",
                            "Found it useful for educational purposes",
                            "Enjoyed interactive 3D models",
                            "Appreciated multimedia content",
                            "Benefited from search and filter options",
                            "Engaged with virtual tours",
                            "Other"
                        ].map((option) => (
                            <div key={option} className="flex items-start">
                                <input
                                    type="radio"
                                    id={option}
                                    name="plantBenefit"
                                    value={option}
                                    checked={formData.plantBenefit === option}
                                    onChange={handleChange}
                                    className={`h-4 w-4 ${isDarkMode ? 'text-green-400 border-gray-600' : 'text-green-600 border-gray-300'
                                        } focus:ring-green-500 rounded`}
                                />
                                <label htmlFor={option} className={`ml-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="feedback" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        General Feedback and Suggestions *
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        placeholder="Your feedback ..."
                        rows="6"
                        className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="reset"
                        className={`py-2 px-4 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            } font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'focus:ring-gray-500' : 'focus:ring-gray-500'
                            }`}
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className={`py-2 px-4 ${isDarkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'
                            } font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'focus:ring-green-500' : 'focus:ring-green-500'
                            }`}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
