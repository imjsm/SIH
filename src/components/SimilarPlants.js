import React from 'react';
import aloe from '../assets/alooo1.jpg';
import hibi from '../assets/hibi.jpg';
import tulsi from '../assets/tulsii.webp';
import view from '../assets/view-more.png';
import './SimilarPlants.css';

const SimilarPlants = () => {
  const plants = [
    { id: 1, name: 'Aloe Vera', imgSrc: aloe },
    { id: 2, name: 'Hibiscus', imgSrc: hibi },
    { id: 3, name: 'Tulsi', imgSrc: tulsi },
  ];

  return (
    <div className="similar-plants-container">
      <h3>Similar Plants</h3>
      <h2><b>People Also Viewed</b></h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.imgSrc} alt={plant.name} className="plant-image" />
            <div className="view-icon">
              <a href="#">
                <img src={view} alt="view more" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPlants;
