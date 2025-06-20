import React, { useEffect } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import { useWeather } from './hooks/useWeather';
import NoResults from './components/NoResults';

const App = () => {
  const { currentWeather, hourlyForecast, hasNoResults, getWeatherDetails } = useWeather();

  useEffect(() => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const defaultURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Colombo`;
  getWeatherDetails(defaultURL);
}, []);


  return (
    <div className="container">
      <Search getWeatherDetails={getWeatherDetails} />
      
      {hasNoResults ? (
        <NoResults />
      ) : (
      <>
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
      </>
      )}
    </div>
  );
};

export default App;
