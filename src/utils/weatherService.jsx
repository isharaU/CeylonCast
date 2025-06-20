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

  const allHours = data.forecast?.forecastday
    ? data.forecast.forecastday.flatMap(day =>
        day.hour.map(hour => ({
          time: hour.time,
          temperature: hour.temp_c,
          description: hour.condition.text,
          icon: hour.condition.icon
        }))
      )
    : [];

  const hourlyForecast = filterHourlyForecast(allHours);

  return { currentWeather, hourlyForecast };
};

export const filterHourlyForecast = (forecast) => {
  const now = new Date();
  const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  return forecast.filter((hour) => {
    const hourDate = new Date(hour.time);
    return hourDate >= now && hourDate <= next24h;
  });
};
