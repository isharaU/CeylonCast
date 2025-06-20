import React, { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null); // null instead of empty object

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const icon = data.current.condition.icon;
      const city = data.location.name; 
      const country = data.location.country; 
      console.log("Weather data fetched:", data);

      setCurrentWeather({
        temperature,
        description,
        icon,
        city,
        country
      });

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <Search getWeatherDetails={getWeatherDetails} />
      <div className="weather-container">
        <CurrentWeather weather={currentWeather} />
        <HourlyForecast />
      </div>
    </div>
  );
};

export default App;
