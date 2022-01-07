import React, { useState } from 'react';

import { api } from '../../config/api';
import './styles.css';

const Home = () => {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Dhaka, Bangladesh</div>
          <div className="date">15th January</div>
        </div>
        <div className="weather-box">
          <div className="temp">15 C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
