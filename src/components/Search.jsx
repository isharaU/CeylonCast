import React from "react";

const Search = ({ getWeatherDetails }) => {
    const API_KEY = import.meta.env.VITE_API_KEY; 
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector('.search-input');
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
        getWeatherDetails(API_URL);
    }
  return (
    <div>
         <div className='search-container'>
        <form action="" className="search-form" onSubmit={handleCitySearch}>
          <span className="material-symbols-outlined">
            search
          </span>
          <input type='search' className='search-input' placeholder='Enter a City Name'/> 
        </form>
        <button className='location-button'>
          <span className="material-symbols-outlined">
            my_location
          </span>
        </button>
      </div>
    </div>
  );
};

export default Search;
