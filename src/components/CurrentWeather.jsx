import './CurrentWeather.css';
import { useEffect, useState } from 'react';

const CurrentWeather = ({ weather }) => {
  const [showLoading, setShowLoading] = useState(!weather);

  useEffect(() => {
    if (weather) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 400); // 400ms delay

      return () => clearTimeout(timer);
    }
  }, [weather]);

  if (showLoading) {
    return (
      <div className="current-weather-card">
        <img src="src/assets/spinner.svg" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="current-weather-card">
      <img 
        src={weather.icon} 
        alt={weather.description} 
        className="weather-icon" 
      />  
      <h2 className="temperature">{weather.temperature}°C</h2>
      <p className="weather-description">{weather.description}</p>
      <p className="location">{weather.city}, {weather.country}</p>
    </div>
  );
};

export default CurrentWeather;
