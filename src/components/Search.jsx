import React from "react";

const Search = () => {
  return (
    <div>
         <div className='search-container'>
        <form action="" className="search-form">
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
