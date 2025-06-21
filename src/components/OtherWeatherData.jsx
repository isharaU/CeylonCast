const OtherWeatherData = ({ weather }) => {
  if (!weather) {
    console.log("Weather data is not available yet.");
    return <div>Loading...</div>;
  }

  return (
    <div className="other-weather-data">
      <h2 className="other-weather-title">Other Weather Data</h2>
      <ul className="other-weather-list">
        <li>Humidity: {weather.humidity}%</li>
        <li>Pressure: {weather.pressure_mb} hPa</li>
        <li>Wind Speed: {weather.wind_kph} km/h {weather.wind_dir}</li>
        <li>UV Index: {weather.uv}</li>
        <li>Visibility: {weather.vis_km} km</li>
        <li>Feels Like: {weather.feelslike_c}°C</li>
        <li>Precipitation: {weather.precip_mm} mm</li>
      </ul>
    </div>
  );
};

export default OtherWeatherData;
