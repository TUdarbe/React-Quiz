import React from "react";

const Forecast = ({ forecast, city }) => {
  return (
    <div>
      <h3>Current Weather Forecast for {city}</h3>
      <p>Feels Like: {forecast.feels_like} </p>
      <p>Max Temp: {forecast.temp_max} </p>
      <p>Min Temp: {forecast.temp_min} </p>
      <p>Humidity: {forecast.humidity} </p>
    </div>
  );
};

export default Forecast;
