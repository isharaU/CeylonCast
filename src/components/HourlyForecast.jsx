const HourlyForecast = ({ hour }) => {
  return (
    <div className="hourly-forecast">
      <ul className="hourly-list">
        <li className="hourly-item" key={hour.time}>
          <span className="hour">{hour.time.split(" ")[1].substring(0, 5)}</span>
          <img src={hour.icon} alt={hour.description} className="hourly-icon" width={"20%"} height={"auto"} />
          <span className="hourly-temp">{hour.temperature}°C</span>
        </li>
      </ul>
    </div>
  );
};

export default HourlyForecast;
