import React from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import { useWeather } from './hooks/useWeather';

const App = () => {
  const { currentWeather, hourlyForecast, hasNoResults, getWeatherDetails } = useWeather();

  return (
    <div className="container">
      <Search getWeatherDetails={getWeatherDetails} />
      
      {hasNoResults ? (
        <div className="no-results">
          <p>No results found. Please try a different search.</p>
        </div>
      ):(
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
