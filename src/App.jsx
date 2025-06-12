import React from 'react';


const App = () => {
  return (
    <div className="container">

      {/* Search Section */}
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

  );
}
export default App;