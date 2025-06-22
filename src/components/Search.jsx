import React, { useState } from "react";
import "./Search.css";

const Search = ({ getWeatherDetails }) => {
  const [searchText, setSearchText] = useState("Colombo");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    const API_URL = `${BASE_URL}${searchText}`;
    console.log("City search API URL:", API_URL);
    getWeatherDetails(API_URL);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `${BASE_URL}${latitude},${longitude}`;
        console.log("Location API URL:", API_URL);
        getWeatherDetails(API_URL);
        setSearchText("my location");
      });
    } else {
      alert("Location access denied.");
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="search"
          className="search-input"
          placeholder="Search for a city..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      <button className="location-button" onClick={handleLocationClick}>
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
};

export default Search;
