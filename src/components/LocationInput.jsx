import React, {useRef} from 'react';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';

//Here I'm calling google maps Javascript Maps API through ract-google-maps/ api and not doing it async
//because I can't then call Open weather without lat & long so it dosen't need the async
const LocationInput = ({newLocation}) => {
  const inputRef = useRef();

  const placeChanged = () => {
    const [place] = inputRef.current.getPlaces(); 
    if(place){
      newLocation(place.geometry.location.lat(), place.geometry.location.lng())
    }
  };
  

  return (
    <LoadScript 
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={ref => (inputRef.current = ref)}
        onPlacesChanged={placeChanged}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Location"
        />

      </StandaloneSearchBox>
    </LoadScript>
  )
}

export default LocationInput
