export const parseWeatherData = (data) => {
  const { temp_c, condition } = data.current;
  const { name: city, country } = data.location;

  const currentWeather = {
    temperature: temp_c,
    description: condition.text,
    icon: condition.icon,
    city,
    country
  };

  const hourlyForecast = data.forecast?.forecastday
    ? data.forecast.forecastday.flatMap(day =>
        day.hour.map(hour => ({
          time: hour.time,
          temperature: hour.temp_c,
          description: hour.condition.text,
          icon: hour.condition.icon
        }))
      )
    : [];

  return { currentWeather, hourlyForecast };
};

