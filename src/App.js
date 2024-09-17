import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AyushInfo from './components/AyushInfo';
import Notebook from './components/Notebook';
import Bookmarks from './components/Bookmarks';
import SimilarPlants from './components/SimilarPlants';
import Quiz from './components/Quiz';
import ExplorePlants from './components/ExplorePlants';
import Allplants from './components/AllPlants';
import FeedbackForm from './components/Feedback';
import { ThemeProvider } from './components/ThemeContext'; 

const exampleBookmarkedPlants = [
  { id: 1, imageUrl: 'path/to/plant1.jpg', name: 'Plant 1' },
  { id: 2, imageUrl: 'path/to/plant2.jpg', name: 'Plant 2' },
];

function App() {
  const viewPlantDetails = (plant) => {
    console.log('Viewing plant:', plant);
  };

  return (
    <ThemeProvider>
      <Router>
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
            <Route path="all-plants" element={<Allplants />} />
            <Route path="feedback" element={<FeedbackForm />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
