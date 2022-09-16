import classes from './Input.module.css';
import React from 'react';
import { weatherKey } from '../config';

import { useState, useEffect } from 'react';
import WeatherList from './WeatherList';
function Input() {
  const [enteredWeather, setEnteredWeather] = useState('');
  const [weather, setWeather] = useState('');
  async function fetchWeatherHandler() {
    if (enteredWeather === '') {
      return;
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredWeather}&appid=${weatherKey}&units=metric`
    );
    const data = await response.json();
    const weatherData = {
      name: data.name,
      temp: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      pressure: data.main.pressure,
      feel: data.main.feels_like,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    };
    setWeather(weatherData);
  }
  useEffect(() => {
    try {
      fetchWeatherHandler();
    } catch (error) {
      console.log('error happened', error);
    }
  }, []);
  const submitHandler = (event) => {
    event.preventDefault();
  };
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
              value={enteredWeather}
              onChange={(event) => {
                setEnteredWeather(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <button
              id="button"
              className={enteredWeather ? classes.button : classes.disabled}
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
              icon={weather.icon}
            />
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
export default Input;
