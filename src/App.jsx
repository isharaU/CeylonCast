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
    </div>
  )
}
export default App;