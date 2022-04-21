/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
//import { SpinnerRoundOutlined } from "spinners-react";
import { useState } from "react";

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
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
        <ul>
          <li>{city}</li>
          <li>{Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}m/s</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }

  //return <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />;
}
