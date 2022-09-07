import classes from './Input.module.css';
import React from 'react';

import { useState, useRef, useEffect } from 'react';
import WeatherList from './WeatherList';
function Input() {
  const cityInputRef = useRef();
  const [weather, setWeather] = useState();
  async function fetchWeatherHandler() {
    const enteredCity = cityInputRef.current.value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=93307491367aa831090cf567944e8889&units=metric`
    );
    if (!response.ok) {
      const message = 'Enter valid name for city';
      alert(message);
      throw new Error(message);
    }
    const data = await response.json();
    const weatherData = {
      name: data.name,
      temp: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      pressure: data.main.pressure,
      feel: data.main.feels_like,
      humidity: data.main.humidity,
    };
    setWeather(weatherData);
  }
  console.log(weather);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetchWeatherHandler();
  }, []);
  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h1>Welcome, perfect choice to find out todays forecast</h1>
          <div>
            <label htmlFor="weather">Enter a City</label>
            <input
              type="text"
              id="weather"
              placeholder="Type City Name Here"
              ref={cityInputRef}
            ></input>
          </div>
          <div>
            <button
              className={classes.button}
              onClick={fetchWeatherHandler}
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <section className={classes.list}>
          {weather && (
            <WeatherList
              name={weather.name}
              temp={weather.temp}
              min={weather.tempMin}
              max={weather.tempMax}
              pressure={weather.pressure}
              feel={weather.feel}
              humidity={weather.humidity}
            />
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
export default Input;
