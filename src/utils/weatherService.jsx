export const parseWeatherData = (data) => {
  const { temp_c, condition } = data.current;
  const { name: city, country } = data.location;

  const currentWeather = {
    temperature: temp_c,
    description: condition.text,
    icon: condition.icon,
    city,
    country,
    humidity: data.current.humidity,
    pressure_mb: data.current.pressure_mb,
    wind_kph: data.current.wind_kph,
    wind_dir: data.current.wind_dir,
    uv: data.current.uv,
    vis_km: data.current.vis_km,
    feelslike_c: data.current.feelslike_c,
    precip_mm: data.current.precip_mm
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

  const filteredHours = allHours.filter(hour => {
    const hourDate = new Date(hour.time);
    const hourValue = hourDate.getHours();
    return hourValue % 3 === 0;
  });

  return { currentWeather, hourlyForecast: filteredHours };
};
