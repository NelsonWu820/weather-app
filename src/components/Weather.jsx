import React from 'react'
import WeatherCell from './WeatherCell'

const Weather = ({data}) => {
  //for when the web app is first loaded without a location
  if (!data || !data.weather || !data.main || !data.wind || !data.clouds || !data.sys) {
    return null;
  }

  //temp in json is given as Kelvin so we must convert it
  const Celsius = (temp) => (temp - 273.15).toFixed(2);
  const Fahrenheit = (temp) => ((temp - 273.15) * 9/5 + 32).toFixed(2);

  const weatherItems = [
    //placed the most useful values on top and the rest are in order since they don't matter as much
    { label: 'Location', value: data.name },
    { label: 'Country', value: data.sys.country },
    { label: 'Temperature', value: `${Celsius(data.main.temp)} °C, ${Fahrenheit(data.main.temp)} °F` },
    { label: 'Temperature Max', value: `${Celsius(data.main.temp_max)} °C, ${Fahrenheit(data.main.temp_max)} °F` },
    { label: 'Temperature Min', value: `${Celsius(data.main.temp_min)} °C, ${Fahrenheit(data.main.temp_min)} °F` },
    { label: 'Feels Like', value: `${Celsius(data.main.feels_like)} °C, ${Fahrenheit(data.main.feels_likep)} °F` },
    { label: 'Humidity', value: `${data.main.humidity} %` },
    { label: 'Weather', value: data.weather[0].description },
    { label: 'Clouds', value: `${data.clouds.all} %` },
    { label: 'Wind Speed', value: `${data.wind.speed} m/s` },
    { label: 'Wind Direction', value: `${data.wind.deg} °` },
    { label: 'Sunrise', value: new Date(data.sys.sunrise * 1000).toLocaleTimeString() },
    { label: 'Sunset', value: new Date(data.sys.sunset * 1000).toLocaleTimeString() },
    //cod is just internal param measuring if it's a success
    { label: 'Longitude', value: `${data.coord.lon}` },
    { label: 'Latitude', value: `${data.coord.lat}` },
    //dt is when the data is calculated in UTC
    //id is individual id for each call
    { label: 'Ground Level', value: `${data.main.grnd_level}` },
    { label: 'Pressure', value: `${data.main.pressure} hPa` },
    { label: 'Sea Level', value: `${data.main.sea_level} cm` },
    //timezone is to much work to convert
    { label: 'Visibility', value: `${data.visibility / 1000} km` },

  ];

  //icon from json
  const iconCode = data.weather[0].icon;
  //places icon into url to get img
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div>
      {/*shows the img from weather icon given by json/open weather*/}
      <img src={iconUrl} alt="Weather Icon"/>
      {/*will map each of the weather item object to weather cell and will display all of the objexts in the array*/}
      {weatherItems.map((item, index) => (
        <WeatherCell key={index} label={item.label} value={item.value} />
      ))}
    </div>
  )
}

export default Weather
