import React from 'react';
import cloudyIcon from '../assets/cloudy.png';

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <img src={cloudyIcon} alt="cloudy" className="weather-icon" width={"5%"} height={"auto"} />
      <h2 className="temperature">25°C</h2>
      <p className="weather-description">Cloudy</p>
      <p className="location">New York, USA</p>
    </div>
  );
};

export default CurrentWeather;
