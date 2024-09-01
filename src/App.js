import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AyushInfo from './components/AyushInfo';
import Notebook from './components/Notebook';
import Bookmarks from './components/Bookmarks';

// Example bookmark data (This should be fetched or managed based on your app logic)
const exampleBookmarkedPlants = [
  { id: 1, imageUrl: 'path/to/plant1.jpg', name: 'Plant 1' },
  { id: 2, imageUrl: 'path/to/plant2.jpg', name: 'Plant 2' },
  // Add more bookmarked plants as needed
];

function App() {
  const [bookmarkedPlants, setBookmarkedPlants] = useState(exampleBookmarkedPlants);

  const viewPlantDetails = (plant) => {
    // Implement your logic to view plant details
    console.log('Viewing plant:', plant);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
{/* <<<<<<< HEAD */}
          <Route index element={<Home />} />  
          <Route path="ayush-info" element={<AyushInfo/>} /> 
{/* <<<<<<< Updated upstream */}
          <Route path="similar-plants" element={<SimilarPlants />} />
{/* ======= */}
          <Route path='my-notebook' element={<Notebook/>}/>
{/* >>>>>>> Stashed changes */}
{/* ======= */}
          <Route index element={<Home />} />
          <Route path="ayush-info" element={<AyushInfo />} />
          <Route path="my-notebook" element={<Notebook />} />
          <Route
            path="bookmarks"
            element={<Bookmarks bookmarkedPlants={bookmarkedPlants} onViewPlant={viewPlantDetails} />}
          />
{/* >>>>>>> 930eaad30efbb1fd61dc01c92c5544aafc8838ad */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



  
          
      

