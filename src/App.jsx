import React, { useEffect } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import OtherWeatherData from './components/OtherWeatherData';
import { useWeather } from './hooks/useWeather';
import NoResults from './components/NoResults';

const App = () => {
  const { currentWeather, hourlyForecast, hasNoResults, getWeatherDetails, otherWeatherData } = useWeather();

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

        <div className="other-weather-info">
          <OtherWeatherData weather={otherWeatherData} />
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
