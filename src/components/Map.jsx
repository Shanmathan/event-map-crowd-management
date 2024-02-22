// Import necessary modules and assets
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import LocationMarker from "./LocationMarker.jsx";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { database } from "../config/AppWriteConfig.jsx";
import "leaflet/dist/leaflet.css";
import "./css/map.css";

// Map component
function Map(name) {
  // State variables
  const [markersData, setMarkersData] = useState([]); // Stores marker data
  const [points, setPoints] = useState([]); // Stores points for polyline
  const [currentposition, setPosition] = useState(null); // Stores current position
  const [listOfPoints, setListOfPoints] = useState([]); // Stores list of points for route

  // Base URL and API key for openrouteservice
  const baseUrl = "https://api.openrouteservice.org/v2/directions/driving-car";
  const apiKey = "5b3ce3597851110001cf62485846fae8b6944314bac24c3823764c37";

  // Function to get route URL
  async function getRouteUrl(startPoint, endPoint) {
    const url = `${baseUrl}?api_key=${apiKey}&start=${startPoint}&end=${endPoint}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListOfPoints(data["features"][0]["geometry"]["coordinates"]);
      setPoints(listOfPoints.map((e) => [e[1], e[0]]));
    } else {
      console.error("Error:", response.status);
    }
  }

  // Function to calculate distance between two points
  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  // Function to convert degrees to radians
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  // Function to get coordinates for route
  function getCoordinates(longi, lati) {
    getRouteUrl(
      `${currentposition[0]},${currentposition[1]}`,
      `${longi},${lati}`
    );
  }

  // Valid names for markers
  const validNames = [
    "Busstop",
    "Watersource",
    "Policestation",
    "Toilet",
    "Firestation",
    "Hospital",
    "Atm",
  ];

  // Effect hook to fetch marker data and set current position
  useEffect(() => {
    if (!name || !validNames.includes(name.name)) {
      return;
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPostion = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        setPosition(newPostion);
      });
      database
        .listDocuments("65a4323a1201a22bec22", "65a4585e898e105e9b66")
        .then((response) => {
          const filteredDocuments = response.documents.filter(
            (doc) => doc.name === name.name
          );
          setMarkersData(filteredDocuments);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [name]);

  // Render map and markers
  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "left", marginTop: "5rem", marginLeft: "15rem" }}
      >
        <span
          style={{
            color: "#242565",
            fontFamily: "Roboto Condensed",
            fontSize: "2.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          Event Map
        </span>
      </Typography>
      <div
        className="map-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <div
          className="map-container"
          style={{ height: "90vh", width: "95vw" }}
        >
          <MapContainer
            center={{ lat: 24.267, lng: 82.419 }}
            zoom={18}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {markersData.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                eventHandlers={{
                  click: () => {
                    getCoordinates(marker.position[1], marker.position[0]);
                  },
                }}
              ></Marker>
            ))}
            {points.length > 0 && (
              <Polyline pathOptions={{ color: "blue" }} positions={points} />
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Map;
