import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import cloud from "./images/Cloudy.png";
import cloud1 from "./images/clouds.png";
import rain from "./images/Rain.png";
import clear from "./images/Sunny.png";
import drizzle from "./images/Drizzle.png";
import search from "./images/search-image.png";
import humidity from "./images/Humidity.png";
import wind from "./images/Wind.png";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: cloud1,
  });

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${{ secrets.OPEN_WEATHER_API_KEY }}&&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagepath = "";
          console.log(res.data);
          if (res.data.weather[0].main === "Clouds") {
            imagepath = cloud;
          } else if (res.data.weather[0].main === "Clear") {
            imagepath = clear;
          } else if (res.data.weather[0].main === "Rain") {
            imagepath = rain;
          } else if (res.data.weather[0].main === "Drizzle") {
            imagepath = drizzle;
          } else {
            imagepath = cloud1;
          }
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagepath,
          });
          setError("");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid City Name");
          } else {
            setError("");
          }
          console.log(err);
        });
    } else {
      alert("Please enter a city name!");
    }
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter the city name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick}>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="winfo">
          <img src={data.image} alt="" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src={humidity} alt="" />
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <div className="wind">
                <p>{Math.round(data.speed)} km/hr</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
