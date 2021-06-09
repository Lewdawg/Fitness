import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./Maps.css"


const AnyReactComponent = ({ text }) => (
  <div className="marker-container">
    <div className="marker-icon" ><img src="/fitnessmarker.png" style={{width: "50px"}}></img></div>
    <div className="marker-text">{text}</div>
    
  </div>
);

function Map(props) {
  const [center, setCenter] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, [center]);

  //console.log(center);

  if (center.lat) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}
            &radius=1000&type=workout&keyword=cruise&key=AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s`;
    console.log(url);
    fetch(url, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (center.lat) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }} id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s" }}
          defaultCenter={{ lat: center.lat, lng: center.lng }}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent 
            lat={51.326089}
            lng={12.393803}
            text="Outdoor Gym Leipzig"

          />
          <AnyReactComponent
            lat={51.308388}
            lng={12.393666}
            text="Calisthenics Equipment - Sandmännchenweg"
          />
          <AnyReactComponent
            lat={51.344308}
            lng={12.403682}
            text="Outdoor-Gym - Offener Freizeittreff 'Rabet' "
          />
          <AnyReactComponent
            lat={51.328475}
            lng={12.3527}
            text="Fitness Trail- AOK Spielplatz"
          />
          <AnyReactComponent
            lat={51.32831}
            lng={12.326316}
            text="Outdoor Pull Up Bars - Plagwitz"
          />
          <AnyReactComponent
            lat={51.331432}
            lng={12.32899}
            text="Outdoor Gym Pumpstation am Kanal - Karl Heine Kanal"
          />
          <AnyReactComponent
            lat={51.339476}
            lng={12.356985}
            text=" Street Workout Park at Schreberpark"
          />
          <AnyReactComponent
            lat={51.353089}
            lng={12.418875}
            text="Parkour Park - Schönefeld "
          />
        </GoogleMapReact>
      </div>
    );
  } else {
    return null;
  }
}

export default Map;
