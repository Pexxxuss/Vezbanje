import classes from './Input.module.css';
import React from 'react';
import { weatherKey } from '../../../config';
import { useState } from 'react';
import WeatherList from './WeatherList';
import { Input, Box, Button } from '@mui/material';

function DayWeather() {
  const [enteredWeather, setEnteredWeather] = useState('');
  const [weather, setWeather] = useState('');
  async function fetchWeatherHandler() {
    if (enteredWeather === '') {
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${enteredWeather}&appid=${weatherKey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        const { name, main, weather } = data;
        const { temp, temp_max, temp_min, pressure, feels_like, humidity } =
          main;
        const weatherData = {
          name: name,
          temp: temp,
          tempMax: temp_max,
          tempMin: temp_min,
          pressure: pressure,
          feel: feels_like,
          humidity: humidity,
          icon: weather[0].icon,
        };
        setWeather(weatherData);
      }
      if (!response.ok)
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
    } catch (err) {
      console.log('Error getting current weather', err);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h1>Welcome, here you can find out todays forecast for your city</h1>
          <div>
            <label htmlFor="weather">Enter a City</label>

            <Input
              type="text"
              id="weather"
              placeholder="Type City Name Here"
              value={enteredWeather}
              sx={{ background: 'inherit' }}
              onChange={(event) => {
                setEnteredWeather(event.target.value);
              }}
            ></Input>
          </div>
          <div>
            <Box>
              <Button
                id="button"
                variant="contained"
                onClick={fetchWeatherHandler}
                type="submit"
                disabled={!enteredWeather}
                sx={{ width: '10rem', height: '3rem', fontSize: '1.5rem' }}
              >
                Search
              </Button>
            </Box>
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
export default DayWeather;
