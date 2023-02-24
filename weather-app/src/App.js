import React, { useState, useEffect } from "react";
import moment from 'moment'
import "./App.css";
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

// function Home() {
//     const {} = useLoadScript({googleMapsApiKey: ""})
// }



function App() {
  useEffect(() => {
    document.title = "MarChar's W-App";
  }, []);

  const apiKey = "afb5899925b1a3f4e22afbaa2c787f76";

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  }; 

  // var sunrise = weatherData.sys.sunrise;
  // const humanTime = new Date(sunrise * 1000).toLocaleString();
  // var sunset = weatherData.sys.sunset;
  // const humanTime2 = new Date(sunset * 1000).toLocaleString();


  return (
    <div className="container">
      <header>
        <h1 className="title">☀️MarChar's Weather App☁️</h1>
      </header>
      <input
        className="input"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p className="welcome-msg">
            {" "}
            Welcome to our weather app! Enter in a city to see the weather!{" "}
          </p>
        </div>
      ) : (
        <div className="all-weather">
          <div className="weather-data">
            <span className="other-weather-data">
              <p className="max spacing">
                {" "}
                {"Max: " + Math.round(weatherData.main.temp_max)}{" "}
              </p>
              <p className="max spacing">
                {" "}
                {"Min: " + Math.round(weatherData.main.temp_min)}{" "}
              </p>
              <p className="feels_like spacing">
                {" "}
                {"Feels like: " + Math.round(weatherData.main.feels_like)}{" "}
              </p>
              <p className="humidity spacing">
                {" "}
                {"Humidity: " +
                  Math.round(weatherData.main.humidity) +
                  "%"}{" "}
              </p>
              <p className="wind spacing">
                {" "}
                {"Wind Speed: " +
                  Math.round(weatherData.wind.speed) +
                  " mph"}{" "}
              </p>
              {/* <p className = "sunset"> {"Sunrise : " + Math.round(weatherData.sys.sunrise)} </p>  */}
              {/* <p className = "sunrise"> {"Sunrise : " + humanTime} </p> */}
              {/* /* <p className = "sunset"> {"Sunset : " + humanTime2} </p> */}
            </span>
            <p className="city">{weatherData.name}</p>

            <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
            <p className="weather">{weatherData.weather[0].main}</p>
            <p className="footnote">
              {" "}
              Authors: Charles Gu and Maria Romano. Inspiration from Arpan
              Neupane.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

  // var sunrise = weatherData.sys.sunrise;
  // const humanTime = new Date(sunrise * 1000).toLocaleString();
  // var sunset = weatherData.sys.sunset;
  // const humanTime2 = new Date(sunset * 1000).toLocaleString();
export default App;


// var t = new Date();
// t.setSeconds(1370001284);
// var formatted = moment(t).format("dd.mm.yyyy hh:MM:ss");