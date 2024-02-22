// Import necessary modules and assets
import React, { useState, useEffect } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

// LocationMarker is a functional component that displays a marker on the user's current location
export default function LocationMarker() {
  const [position, setPosition] = useState(null); // State to hold the user's current position
  const map = useMap(); // Hook to get the current map instance

  // useEffect hook to get the user's current position when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // Using the Geolocation API to get the user's current position
      const newPostion = [position.coords.latitude, position.coords.longitude]; // Creating an array with the latitude and longitude
      setPosition(newPostion); // Setting the state with the new position
      map.flyTo(newPostion, map.getZoom()); // Making the map fly to the new position
    });
  }, [map]); // Dependency array with map, so this effect runs whenever the map instance changes

  // If position is null, return null. Otherwise, return a Marker component with the user's current position
  return position === null ? null : (
    <Marker
      position={position} // Setting the marker's position
      icon={
        new Icon({
          iconUrl: markerIconPng, // Setting the marker's icon
          iconSize: [25, 41], // Setting the marker's size
          iconAnchor: [12, 41], // Setting the marker's anchor
        })
      }
    >
      <Popup>You are here</Popup> // Popup that displays when the marker is
      clicked
    </Marker>
  );
}
