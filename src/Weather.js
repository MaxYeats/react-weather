/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
//import { SpinnerRoundOutlined } from "spinners-react";
import { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function startSearch(event) {
    event.preventDefault();
    let apiKey = "badf18efb01c292c50887b64f1fc7ebd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(findWeather);
  }

  function findCity(event) {
    setCity(event.target.value);
  }

  function findWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={64}
          animate="true"
        />
      ),
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let form = (
    <form onSubmit={startSearch}>
      <input
        type="search"
        placeholder="Enter your city here"
        autoComplete={false}
        autoFocus={true}
        onChange={findCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container-1">
          <div className="row">
            <h2>{city}</h2>
            <h2>{Math.round(weather.temperature)}°C</h2>
            <div>{weather.description}</div>
          </div>
          <div className="row">
            <div className="col-4">
              <div>{weather.icon}</div>
            </div>

            <div className="col-8">
              <div>Humidity: {weather.humidity}%</div>
              <div>Wind: {Math.round(weather.wind)}m/s</div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div classname="row">
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
            <div classname="col-2">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="white"
                size={40}
                animate="true"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }

  //return <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />;
}
//<img src={weather.icon} alt={weather.description}/>
