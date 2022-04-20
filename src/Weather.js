/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import { SpinnerRoundOutlined } from "spinners-react";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=badf18efb01c292c50887b64f1fc7ebd`;
  axios.get(apiUrl).then(handleResponse);
  return <SpinnerRoundOutlined color="blue" />;
}
