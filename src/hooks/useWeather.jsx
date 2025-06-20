import { useState } from 'react';
import { parseWeatherData } from '../utils/weatherService';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);

  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const { currentWeather, hourlyForecast } = parseWeatherData(data);

      setCurrentWeather(currentWeather);
      setHourlyForecast(hourlyForecast);
    } catch (error) {
      setHasNoResults(true);
      console.error("Error fetching weather data:", error);
    }
  };

  return { currentWeather, hourlyForecast, getWeatherDetails, hasNoResults };
};
