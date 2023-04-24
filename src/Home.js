import React from "react";
import "./style.css";

function Home() {
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
          <h1>22°c</h1>
          <h2>London</h2>
          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="" />
              <div className="humidity">
                <p>20%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="/images/wind.png" alt="" />
              <div className="wind">
                <p>2 km/hr</p>
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
