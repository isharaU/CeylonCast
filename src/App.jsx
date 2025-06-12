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
          <h2 className="temperature">25°C</h2>
          <p className="weather-description">Cloudy</p>
          <p className="location">New York, USA</p>
        </div>

        <div className="hourly-forcast">
          <ul className="hourly-list">
            <li className="hourly-item">
              <span className="hour">12:00 PM</span>
              <img src="src/assets/cloudy.png" alt="cloudy" className="hourly-icon" width={"20%"} height={"auto"} />
              <span className="hourly-temp">28°C</span>
            </li>
            <li className="hourly-item">
              <span className="hour">1:00 PM</span>
              <img src="src/assets/cloudy.png" alt="cloudy" className="hourly-icon" width={"20%"} height={"auto"} />
              <span className="hourly-temp">30°C</span>
            </li>
            {/* Add more hourly items as needed */}
          </ul>
        </div>
      </div>

    </div>

  );
}
export default App;