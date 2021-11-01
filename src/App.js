import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

const App = () => {
  const apiKey = "4e38677a0dad8f705187e183182bf75b";
  const [find, setFind] = useState("");
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState("");

  const handleSearch = (event) => {
    setFind(event.target.value);
  };

  const handleCity = () => {
    if (find) {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            find.toLocaleLowerCase() +
            "&units=metric" +
            "&appid=" +
            apiKey
        )
        .then((response) => {
          const data = response.data;
          setForecast(data.main);
          setCity(data.name);
        });
    }
  };

  return (
    <div>
      Enter city name to get forecast
      <input value={find} onChange={handleSearch}></input>
      <button onClick={handleCity}>Search</button>
      <Forecast city={city} forecast={forecast} />
    </div>
  );
};

export default App;
