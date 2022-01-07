import React, { useState } from 'react';
import moment from 'moment';
import { api } from '../../config/api';
import './styles.css';

const Home = () => {
  const [Query, setQuery] = useState('');
  const [Weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${Query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  return (
    <div className="container">
      <div
        className={
          typeof Weather.main != 'undefined'
            ? Weather.main.temp > 16
              ? 'app warm'
              : 'app'
            : 'app'
        }
      >
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={Query}
              onKeyPress={search}
            />
          </div>
          {typeof Weather.main != 'undefined' ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {Weather.name}, {Weather.sys.country}
                </div>
                <div className="date">{moment().format('LLLL')}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(Weather.main.temp)}°C</div>
                <div className="weather">{Weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ''
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
