import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


/**
 * Map Component, see:
 * https://tomchentw.github.io/react-google-maps/#introduction
 */

// Import Styles for Google Maps, see:
// https://snazzymaps.com/ or https://mapstyle.withgoogle.com/
const mapStyles = require("./googlemaps-config.json");


// Axel Springer Coordinates for Google Maps
const axelSpringerCoordsLatLong = {
    lat: 52.507524,
    lng: 13.396077
};


// The Map Component, for a list of options see:
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
const MapComponent = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={axelSpringerCoordsLatLong}
        defaultOptions={{
            styles: mapStyles,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        }}
    >
        {props.isMarkerShown && <Marker position={axelSpringerCoordsLatLong}/>}
    </GoogleMap>
)));

export default MapComponent;