import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AyushInfo from './components/AyushInfo';
import Notebook from './components/Notebook';
import Bookmarks from './components/Bookmarks';
import SimilarPlants from './components/SimilarPlants';
import Quiz from './components/Quiz';

const exampleBookmarkedPlants = [
  { id: 1, imageUrl: 'path/to/plant1.jpg', name: 'Plant 1' },
  { id: 2, imageUrl: 'path/to/plant2.jpg', name: 'Plant 2' },
  
];

function App() {
  const [bookmarkedPlants, setBookmarkedPlants] = useState(exampleBookmarkedPlants);

  const viewPlantDetails = (plant) => {
    
    console.log('Viewing plant:', plant);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ayush-info" element={<AyushInfo />} />
          <Route path="my-notebook" element={<Notebook />} />
          <Route
            path="bookmarks"
            element={<Bookmarks bookmarkedPlants={bookmarkedPlants} onViewPlant={viewPlantDetails} />}
          />
          <Route path="similar-plants" element={<SimilarPlants />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
