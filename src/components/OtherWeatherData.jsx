import React from "react";
import "./OtherWeatherData.css";  

const OtherWeatherData = ({ weather }) => {
  if (!weather) {;
    return (
      <div className="other-weather-data">
        <img src="/public/assets/list_load.svg" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="other-weather-data">
      <ul className="other-weather-list">
        <li className="other-weather-item">
          <span className="label">Humidity</span>
          <span className="value">{weather.humidity}%</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Pressure</span>
          <span className="value">{weather.pressure_mb} hPa</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Wind Speed</span>
          <span className="value">{weather.wind_kph} km/h {weather.wind_dir}</span>
        </li>
        <li className="other-weather-item">
          <span className="label">UV Index</span>
          <span className="value">{weather.uv}</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Visibility</span>
          <span className="value">{weather.vis_km} km</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Feels Like</span>
          <span className="value">{weather.feelslike_c}°C</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Precipitation</span>
          <span className="value">{weather.precip_mm} mm</span>
        </li>
        <li className="other-weather-item">
          <span className="label">Cloud</span>
          <span className="value">{weather.cloud}</span>
        </li>
      </ul>
    </div>
  );
};

export default OtherWeatherData;
