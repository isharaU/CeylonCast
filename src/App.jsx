import React from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';

const App = () => {
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Weather data:", data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <Search getWeatherDetails={getWeatherDetails} /> {/* ✅ Fixed this line */}
      <div className="weather-container">
        <CurrentWeather />
        <HourlyForecast />
      </div>
    </div>
  );
};

export default App;
