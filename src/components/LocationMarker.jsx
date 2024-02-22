import React, { useState, useEffect } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newPostion = [position.coords.latitude, position.coords.longitude];
      setPosition(newPostion);
      map.flyTo(newPostion, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>You are here</Popup>
    </Marker>
  );
}
