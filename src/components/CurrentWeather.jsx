import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => {
  if (!weather) {
    return <p className="loading-text">Loading current weather...</p>;
  }

  return (
    <div className="current-weather-card">
      <img 
        src={weather.icon} 
        alt={weather.description} 
        className="weather-icon" 
      />  
      <h2 className="temperature">{weather.temperature}°C</h2>
      <p className="weather-description">{weather.description}</p>
      <p className="location">{weather.city}, {weather.country}</p>
    </div>
  );
};

export default CurrentWeather;
