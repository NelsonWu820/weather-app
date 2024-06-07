import React, {useRef} from 'react';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';

//Here I'm calling google maps Javascript Maps API through ract-google-maps/ api and not doing it async
//because I can't then call Open weather without lat & long so it dosen't need the async
const LocationInput = ({newLocation}) => {
  //useRef holds the StandaloneSearchBox across renders
  const inputRef = useRef();

  const placeChanged = () => {
    //will call the .getPlaces() on inputRef which holds a reference to StandaloneSearchBox
    const [place] = inputRef.current.getPlaces(); 
    if(place){
      //gets lat and long from place
      newLocation(place.geometry.location.lat(), place.geometry.location.lng())
    }
  };
  

  return (
    //loads the google map api
    <LoadScript 
      //import.meta.env.VITE_GOOGLE_API_KEY replaces process.env.REACT_APP for vite
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        //loads just the searchbox for location
        //when first loads it will place a ref of itself into inputRef
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
