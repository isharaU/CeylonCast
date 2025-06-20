import React, { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import { filterHourlyForecast, formatHourlyForecast } from './utils/weatherService';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Set current weather
      const { temp_c, condition } = data.current;
      const { name: city, country } = data.location;

      setCurrentWeather({
        temperature: temp_c,
        description: condition.text,
        icon: condition.icon,
        city,
        country
      });

      // Process hourly forecast
      const allHours = formatHourlyForecast(data.forecast.forecastday);
      const next24HoursForecast = filterHourlyForecast(allHours);
      setHourlyForecast(next24HoursForecast);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <Search getWeatherDetails={getWeatherDetails} />
      <div className="weather-container">
        <CurrentWeather weather={currentWeather} />
      </div>
      <div className="hourly-forecast-container overflow-x-auto flex space-x-4 p-4">
        {hourlyForecast.length > 0 ? (
          hourlyForecast.map((hour, index) => (
            <HourlyForecast key={index} hour={hour} />
          ))
        ) : (
          <p>No hourly forecast available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
