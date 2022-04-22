/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import { SpinnerRoundOutlined } from "spinners-react";
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
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={70}
          animate="true"
        />
      ),
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let form = (
    <form className="react-form" onSubmit={startSearch}>
      <input
        className="react-input"
        type="search"
        placeholder="Enter your city here"
        autoComplete={false}
        autoFocus={true}
        onChange={findCity}
      ></input>
      <input className="search-button" type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container">
          <div className="city-name">{city}</div>
          <div className="date">
            Monday, 5/1/2022 <span className="time">10:00</span>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <div className="main-temperature">
                {Math.round(weather.temperature)}°C
              </div>
              <div className="minmax-temp">
                Min.{Math.round(weather.tempmin)}°C | Max.
                {Math.round(weather.tempmax)}°C{" "}
              </div>
            </div>

            <div className="col-3">
              <div className="icon">{weather.icon}</div>
              <div className="description">{weather.description}</div>
              <div className="humidity">Humidity: {weather.humidity}%</div>
              <div className="wind">Wind: {Math.round(weather.wind)}m/s</div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />
      </div>
    );
  }

  //return <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />;
}
//<img src={weather.icon} alt={weather.description}/>
