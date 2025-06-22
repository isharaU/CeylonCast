import { useState, useEffect } from 'react';
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
      console.log(response);

      const data = await response.json();
      const { currentWeather, hourlyForecast } = parseWeatherData(data);

      setCurrentWeather(currentWeather);
      setHourlyForecast(hourlyForecast);

    } catch (error) {
      setHasNoResults(true);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log("API Key:", API_KEY);
    if (!API_KEY) {
      console.error("API Key is not defined. Please set the VITE_API_KEY environment variable.");
      return;
    }
    const defaultURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Colombo`;
    getWeatherDetails(defaultURL);
  }, []);

  return { currentWeather, hourlyForecast, getWeatherDetails, hasNoResults };
};
