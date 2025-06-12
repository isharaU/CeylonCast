import React from 'react';


const App = () => {
  return (
    <div className="container">

      {/* Search Section */}
      <div className='search-container'>
        <form action="" className="search-form">
          <span className="material-symbols-outlined">
            search
          </span>
          <input type='search' className='search-input' placeholder='Enter a City Name'/> 
          <button type='submit' className='search-button'>Search</button>
        </form>

        <button className='location-button'>
          <span className="material-symbols-outlined">
            my_location
          </span>
        </button>
      </div>

      {/* Weather Information Section */}
      <div className="weather-container">
        <div className="current-weather">
          <img src="src/assets/cloudy.png" alt="cloudy" className="weather-icon" width={"5%"} height={"auto"} />
        </div>
      </div>

    </div>

  );
}
export default App;