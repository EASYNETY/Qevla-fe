import React, { useState, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
// core components
import Header from "components/Headers/Header.js";
import { endpoints } from "../api-endpoints";

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const marker = [];
  const marker2 = [];
  const markerAddress = [];
  const [latLng, setLatlng] = useState();

  const handleActiveMarker = (drivers) => {
    if (drivers === activeMarker) {
      return;
    }
    setActiveMarker(drivers);
  };

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch(endpoints.getDrivers);
      const responseJson = await fullResponse.json();
      setDrivers(responseJson.users);
      console.log("Endpoint response>>>>>>>>:", responseJson.users);
      console.log("Endpoint called>>>>>>>>:", endpoints.getDrivers);
      setLatlng();
    }

    fetchUsers();
  }, []);

  drivers.forEach((user) => {
    const driverInfo = (
      <div>
        {" Driver Information"}
        <p>
          Name:{" "}
          <strong>
            {user.first_name} {user.last_name}
          </strong>
        </p>
        <p>
          Phone Numeber: <strong>{user.number}</strong>
        </p>
        {"Towing Vehicle Info "}
        <p>
          Vehicle Name: <strong>{user.vehicle_details.v_manufacturer}</strong>
        </p>
        <p>
          Vehicle License: <strong>{user.vehicle_details.v_license}</strong>
        </p>
      </div>
    );
    marker.push({
      id: user.address.lat,
      name: driverInfo,
      position: user.address,
    });
  });

  // markerAddress.forEach((address) => {
  //     marker.push({
  //       id: address.lat,
  //       name: "Qevla Driver new one",
  //       position: {lat : address.lat, lng: address.long}
  //     });
  //   });
  console.log(
    "Created drivers>>>>>>> from headers from map markers used",
    markerAddress
  );

  // const markers = [
  //   {
  //     id: 1,
  //     name: "Qevla Driver",
  //     position: { lat: 6.45469, lng: 3.32042 },
  //   },

  //   {
  //     id: 2,
  //     name: "Denver, Colorado",
  //     position: { lat: 39.739235, lng: -104.99025 },
  //   },
  //   // ,
  //   // {
  //   //   id: 3,
  //   //   name: "Los Angeles, California",
  //   //   position: { lat: 34.052235, lng: -118.243683 },
  //   // },
  //   // {
  //   //   id: 4,
  //   //   name: "New York, New York",
  //   //   position: { lat: 40.712776, lng: -74.005974 },
  //   // },
  // ];
  const google = window.google;

  var qevLoc = new google.maps.LatLng(6.45084, 3.35011);
  const handleOnLoad = (map) => {
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(qevLoc);
    marker.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    // const bounds = new google.maps.LatLngBounds();
    // marker.forEach(({ position }) => bounds.extend(position));
    // map.fitBounds(bounds);
  };
  // console.log("Created drivers>>>>>>> from headers from map marker", marker);
  // let mylatLng = new google.maps.LatLng(6.45084, 3.35011);
  // let lat = "6.484570";
  // let lng = "6.484570";
  return (
    <>
      <Header />
      <GoogleMap
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ height: "600px" }}
        options={{
          zoom: 10,
          // center: { lat: "6.484570", long:"6.484570" },
          scrollwheel: false,
          zoomControl: true,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
            },
          ],
        }}
      >
        {marker.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </>
  );
}

export default Map;
