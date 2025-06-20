import React from 'react';
import cloudyIcon from '../assets/cloudy.png';

const HourlyForecast = ({ hour }) => {
  return (
    <div className="hourly-forecast">
      <ul className="hourly-list">
        <li className="hourly-item">
          <span className="hour">{hour.time}</span>
          <img src={hour.icon} alt={hour.description} className="hourly-icon" width={"20%"} height={"auto"} />
          <span className="hourly-temp">{hour.temperature}°C</span>
        </li>
      </ul>
    </div>
  );
};

export default HourlyForecast;
