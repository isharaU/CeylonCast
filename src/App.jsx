import React, { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const filterHourlyForecast = (forecast) => {
    const now = new Date();
    const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    return forecast.filter((hour) => {
      const hourDate = new Date(hour.time);
      return hourDate >= now && hourDate <= next24h;
    });
  };

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const icon = data.current.condition.icon;
      const city = data.location.name;
      const country = data.location.country;

      setCurrentWeather({
        temperature,
        description,
        icon,
        city,
        country
      });

      const rawHourlyForecast = data.forecast.forecastday.flatMap(day =>
        day.hour.map(hour => ({
          time: hour.time,
          temperature: hour.temp_c,
          description: hour.condition.text,
          icon: hour.condition.icon
        }))
      );

      const next24HoursForecast = filterHourlyForecast(rawHourlyForecast);
      setHourlyForecast(next24HoursForecast);
      console.log("Hourly Forecast:", next24HoursForecast);
      
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
      <div className="hourly-forecast-container">
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
