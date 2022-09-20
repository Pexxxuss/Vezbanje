import classes from './AirPolution.module.css';
import React from 'react';
import { weatherKey } from '../../../config';
import { useState } from 'react';
import AirPolutionList from './AirPolutionList';
function AirPolution() {
  const [enteredWeather, setEnteredWeather] = useState('');
  const [weather, setWeather] = useState('');

  async function fetchWeatherHandler() {
    let latLong = {};
    if (enteredWeather === '') {
      return;
    }
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${enteredWeather}&limit=5&appid=${weatherKey}`
      );
      if (response.ok) {
        const data = await response.json();
        latLong = {
          latitude: data[0].lat,
          longitude: data[0].lon,
        };
      }
      if (!response.ok)
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
    } catch (err) {
      console.log('Error getting current weather', err);
    }
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latLong.latitude}&lon=${latLong.longitude}&appid=${weatherKey}`
      );
      if (response.ok) {
        const dataAir = await response.json();
        const airComponents = dataAir.list[0].components;
        const airComponentsValue = {
          co: airComponents.co,
          nh3: airComponents.nh3,
          no: airComponents.no,
          no2: airComponents.no2,
          o3: airComponents.o3,
          pm10: airComponents.pm10,
          so2: airComponents.so2,
        };
        setWeather(airComponentsValue);
      }
      if (!response.ok)
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
    } catch (err) {
      console.log('Error getting current air polutior', err);
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h1>
            Welcome, here you can find out todays Air Polution for your city
          </h1>
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
          {/* {
            <div>
              <pre>{JSON.stringify(weather, null, 2)}</pre>
            </div>
          } */}
          {weather && (
            <AirPolutionList
              co={weather.co}
              nh3={weather.nh3}
              no={weather.no}
              no2={weather.no2}
              o3={weather.o3}
              pm10={weather.pm10}
              so2={weather.so2}
            />
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
export default AirPolution;
