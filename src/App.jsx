import React from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';

const App = () => {
  return (
    <div className="container">
      <Search />
      <div className="weather-container">
        <CurrentWeather />
        <HourlyForecast />
      </div>
    </div>
  );
};

export default App;
