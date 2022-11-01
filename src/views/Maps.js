import React, { useState, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
// core components
import Header from "components/Headers/Header.js";
import { endpoints } from "../api-endpoints";
// import "assets/css/style.css"

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
      // <div>
      <div
        style={{
          width: "41em",
          height: "22em",
          color: "#777",
          backgroundColor: "#F0F0F0",
          margin: "5% auto 0 auto",
          borderRadius: "0.4em",
          borderTopRightRadius: "0.37em",
          borderBottomRightRadius: "0.37em",
          boxShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
          transition: "box-shadow 200ms ease-in",
        }}
      >
        {/* {" Driver Information"} */}

        <div style={{ padding: "1.6em 2em 2em 14em" }}>
          <h1
            style={{
              color: "#008080",
              fontSize: "2.2em",
              letterSpacing: "1px",
            }}
          >
            {user.first_name} {user.last_name}
          </h1>
          <h2
            style={{ color: "#00CED1", fontSize: "1.2em", marginTop: "0.2em" }}
          >
            {user.vehicle_details.v_manufacturer}
          </h2>
          <hr />
          <p
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              margin: "1em 0",
              fontWeight: "700",
              color: "black",
            }}
          >
            {user.vehicle_details.address}
          </p>
          <p
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              margin: "1em 0",
              fontWeight: "700",
              color: "black",
            }}
          >
            {user.number}
          </p>
          <hr />
          <p
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              margin: "1em 0",
              fontWeight: "700",
              color: "black",
            }}
          >
            {user.email}
          </p>
          <p
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              margin: "1em 0",
              fontWeight: "700",
              color: "black",
            }}
          >
            {user.website}
          </p>
        </div>
      </div>
    );
    marker.push({
      id: user._id,
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
