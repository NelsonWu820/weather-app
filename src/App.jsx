import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationInput from './components/LocationInput.jsx';

const App = () => {
  //holds the coordinates i,e lat & long
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  //holds all the json from OpenWeather
  const [data, setData] = useState({});

  //I could put the axios after setCords of newLocation but this is incase of an edge case where the user somehow changes the cords
  useEffect(() => {
    if (lat !== undefined && long !== undefined){
      //also calls OpenWeather to get json then updates 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
        .then(response => {
          setData(response.data);
          console.log(data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [lat, long]);

  //will be called and update state when the location changes
  const newLocation = (lat, long) => {
    //setLat & setLong will auto get rid of old data and replace with new data
    //if you place console log on lat & long for 2 dif points inside the same state they might look the same at a glance but the decimal points are different
    setLat(lat)
    setLong(long)
  };

  return (
    <section className='app_parent'>
      <LocationInput newLocation ={newLocation}/>
    </section>
  )
}

export default App
