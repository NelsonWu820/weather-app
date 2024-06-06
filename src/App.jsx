import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config;
import LocationInput from './components/LocationInput.jsx';

const App = () => {
  //holds the coordinates i,e lat & long
  const [cords, setCords] = useState([]);
  //holds all the json from OpenWeather
  const [data, setData] = useState([]);

  //I could put the axios after setCords of newLocation but this is incase of an edge case where the user somehow changes the cords
  useEffect(() => {
    //also calls OpenWeather to get json then updates 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [cords]);

  //will be called and update state when the location changes
  const newLocation = (lat, long) => {
    setCords([lat, long])
    console.log(cords[0] + "&" + cords[1])
  };

  return (
    <section className='app_parent'>
      <LocationInput newLocation ={newLocation}/>
    </section>
  )
}

export default App
