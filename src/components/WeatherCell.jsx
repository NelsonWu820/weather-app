import React from 'react'

//makes a row of labels : values
const WeatherCell = ({label, value}) => {
  return (
    <div>
        {label}: {value}
    </div>
  )
}

export default WeatherCell
