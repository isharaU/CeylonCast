const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;
const SEARCH_URL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=`;

export const fetchSuggestions = async (query) => {
  if (!query.trim() || query.length < 2) return [];

  try {
    const response = await fetch(`${SEARCH_URL}${encodeURIComponent(query)}`);
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export const getForecastUrl = (query) => `${BASE_URL}${query}`;
