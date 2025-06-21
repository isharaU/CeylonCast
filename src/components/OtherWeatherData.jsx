const OtherWeatherData = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { humidity, pressure, windSpeed, visibility, uv } = weatherData;

  return (
    <div className="other-weather-data">
      <h2 className="other-weather-title">Other Weather Data</h2>
      <ul className="other-weather-list">
        <li>Humidity: {humidity}%</li>
        <li>Pressure: {pressure} hPa</li>
        <li>Wind Speed: {windSpeed} m/s</li>
        <li>UV Index: {uv}</li>
        <li>Visibility: {visibility} km</li>
      </ul>
    </div>
  );
};

export default OtherWeatherData;
