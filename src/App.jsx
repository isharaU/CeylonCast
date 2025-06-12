import React from 'react';


const App = () => {
  return (
    <div className="container">
      <form action="" className="search-form">
        <span className="material-symbols-outlined">
          search
        </span>
        <input type='search' className='search-input' placeholder='Enter a City Name'/> 
        <button type='submit' className='search-button'>Search</button>
      </form>


      <button className='search-button'>Search by Coordinates</button>
      <div className='weather-info'>
        <h2 className='city-name'>City Name</h2>
        <p className='temperature'>Temperature: 25°C</p>
        <p className='condition'>Condition: Sunny</p>
        <p className='humidity'>Humidity: 60%</p>
        <p className='wind-speed'>Wind Speed: 10 km/h</p>
        <p className='pressure'>Pressure: 1012 hPa</p>
        <p className='visibility'>Visibility: 10 km</p>
        <p className='sunrise'>Sunrise: 6:00 AM</p>
        <p className='sunset'>Sunset: 6:00 PM</p>
        <p className='timezone'>Timezone: GMT+0</p>
        <p className='last-updated'>Last Updated: 12:00 PM</p>      
      </div>
    </div>
  );
}
export default App;