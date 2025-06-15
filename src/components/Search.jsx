import React from "react";

const Search = () => {
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector('.search-input');
        console.log("Searching for city:", searchInput.value);
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
