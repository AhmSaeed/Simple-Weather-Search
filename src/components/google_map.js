import React, { Component } from 'react';
//import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

/*export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height:'100%'}}/>}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
            }
        />

    );
}*/


import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  export default MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
    >
      <Marker
        position={{ lat: props.lat, lng: props.lon }}
      />
    </GoogleMap>
  );
  
  <MapWithAMarker
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
