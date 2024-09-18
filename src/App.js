// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AyushInfo from './components/AyushInfo';
import Notebook from './components/Notebook';
import Bookmarks from './components/Bookmarks';
import SimilarPlants from './components/SimilarPlants';
import Quiz from './components/Quiz';
import ExplorePlants from './components/ExplorePlants';
import AllPlants from './components/AllPlants';
import FeedbackForm from './components/Feedback';
import LoadingAnimation from './components/LoadingAnimation'; // Import LoadingAnimation
import ProfileSettings from './components/Profile/ProfileSettings'; // Import ProfileSettings
import EditProfile from './components/Profile/EditProfile'; // Import EditProfile
import ViewProfile from './components/Profile/ViewProfile'; // Import ViewProfile
import { ThemeProvider } from './components/ThemeContext'; 

const exampleBookmarkedPlants = [
  { id: 1, imageUrl: 'path/to/plant1.jpg', name: 'Plant 1' },
  { id: 2, imageUrl: 'path/to/plant2.jpg', name: 'Plant 2' },
];

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  const viewPlantDetails = (plant) => {
    console.log('Viewing plant:', plant);
  };

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <LoadingAnimation /> // Show loading animation
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="explore-plant" element={<ExplorePlants />} />
              <Route path="ayush-info" element={<AyushInfo />} />
              <Route path="my-notebook" element={<Notebook />} />
              <Route
                path="bookmarks"
                element={<Bookmarks bookmarkedPlants={exampleBookmarkedPlants} onViewPlant={viewPlantDetails} />}
              />
              <Route path="similar-plants" element={<SimilarPlants />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="all-plants" element={<AllPlants />} />
              <Route path="feedback" element={<FeedbackForm />} />
              <Route path="profile-settings" element={<ProfileSettings />} /> {/* Add route for Profile Settings */}
              <Route path="edit-profile" element={<EditProfile />} /> {/* Add route for Edit Profile */}
              <Route path="view-profile" element={<ViewProfile />} /> {/* Add route for View Profile */}
            </Route>
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
