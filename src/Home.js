import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
  });

  useEffect(() => {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=2028c460119958a71d6c122a49b0371d&&units=metric";
    axios
      .get(apiUrl)
      .then((res) => {
        setData({
          ...data,
          celcius: res.data.main.temp,
          name: res.data.name,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter the city name" />
          <button>
            <img src="/images/search-image.png" alt="" />
          </button>
        </div>
        <div className="winfo">
          <img src="/images/clouds.png" alt="" />
          <h1>{data.celcius}°c</h1>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="" />
              <div className="humidity">
                <p>{data.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="/images/wind.png" alt="" />
              <div className="wind">
                <p>{data.speed} km/hr</p>
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
