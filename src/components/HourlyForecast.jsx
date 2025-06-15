import React from 'react';
import cloudyIcon from '../assets/cloudy.png';

const HourlyForecast = () => {
  return (
    <div className="hourly-forcast">
      <ul className="hourly-list">
        <li className="hourly-item">
          <span className="hour">12:00 PM</span>
          <img src={cloudyIcon} alt="cloudy" className="hourly-icon" width={"20%"} height={"auto"} />
          <span className="hourly-temp">28°C</span>
        </li>
        <li className="hourly-item">
          <span className="hour">1:00 PM</span>
          <img src={cloudyIcon} alt="cloudy" className="hourly-icon" width={"20%"} height={"auto"} />
          <span className="hourly-temp">30°C</span>
        </li>
        {/* You can map this later from props or state */}
      </ul>
    </div>
  );
};

export default HourlyForecast;
