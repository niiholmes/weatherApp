import React from 'react';

//import {WiCloud} from 'react-icons/wi';

const key = '1bd81b9c981a8dc287de8b3459579e83'
const website= 'https://api.openweathermap.org/data/2.5/'


const Eugene =()=> {
    const [ query, setQuery ] = React.useState('');
    const [ weather, setWeather ] = React.useState({});

   

    const handleSearch = (e) => {
      e.preventDefault();

      fetch(`${website}weather?q=${query}&units=metric&APPID=${key}`)
      .then((res) => res.json())
      .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
      });
    }

  return (
    <>

 
      <div className='search-bar'>
        <input
          type='search'
          value={query}
          placeholder='search...'
          onChange={ e => setQuery(e.target.value)}
          className='inputfield'
        />
        <input
          type='submit'
          value='Search'
          onClick={handleSearch}
          className='submitfield'
        />
      </div>
      {typeof weather.main != "undefined" ? (
          <div className="defined">
            
            <div className="location">
              <span className='locale'>{weather.name}</span>
              <h2 className='img'>{weather.sys.country}</h2>
            </div>
            <div className="temperature">
              <div className="temp-main">
                <h3> <br/> <span className='degree'>{Math.round(weather.main.temp)}°C</span> </h3>
              </div>
              <div className="w-details">
                <h3> <br/> <span className='des'>{weather.weather[0].main}</span> </h3>
              </div>
            </div>
          </div>
        ) : null }
    </>
  );
}

export default Eugene;