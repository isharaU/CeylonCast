export const filterHourlyForecast = (forecast) => {
  const now = new Date();
  const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  return forecast.filter((hour) => {
    const hourDate = new Date(hour.time);
    return hourDate >= now && hourDate <= next24h;
  });
};

export const formatHourlyForecast = (forecastday) =>
  forecastday.flatMap(day =>
    day.hour.map(hour => ({
      time: hour.time,
      temperature: hour.temp_c,
      description: hour.condition.text,
      icon: hour.condition.icon
    }))
  );
