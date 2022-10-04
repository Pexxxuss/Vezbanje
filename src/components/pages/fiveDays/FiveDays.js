import classes from './FiveDays.module.css';
import { weatherKey } from '../../../config';
import { useState } from 'react';
import FiveDaysList from './FiveDaysList';
import { Input, Button, buttonClasses } from '@mui/material';
import * as React from 'react';

function FiveDays() {
  const [enteredWeather, setEnteredWeather] = useState('');
  const [weather, setWeather] = useState('');

  async function fetchWeatherHandler() {
    if (enteredWeather === '') {
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${enteredWeather}&appid=${weatherKey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        const { list } = data;

        const fiveArray = [
          {
            date: list[0].dt_txt,
            temp: list[0].main.temp,
            max: list[0].main.temp_max,
            min: list[0].main.temp_min,
            current: list[0].weather[0].description,
            icon: list[0].weather[0].icon,
          },
          {
            date: list[8].dt_txt,
            temp: list[8].main.temp,
            max: list[8].main.temp_max,
            min: list[8].main.temp_min,
            current: list[8].weather[0].description,
            icon: list[8].weather[0].icon,
          },
          {
            date: list[16].dt_txt,
            temp: list[16].main.temp,
            max: list[16].main.temp_max,
            min: list[16].main.temp_min,
            current: list[16].weather[0].description,
            icon: list[16].weather[0].icon,
          },
          {
            date: list[24].dt_txt,
            temp: list[24].main.temp,
            max: list[24].main.temp_max,
            min: list[24].main.temp_min,
            current: list[24].weather[0].description,
            icon: list[24].weather[0].icon,
          },
          {
            date: list[32].dt_txt,
            temp: list[32].main.temp,
            max: list[32].main.temp_max,
            min: list[32].main.temp_min,
            current: list[32].weather[0].description,
            icon: list[32].weather[0].icon,
          },
        ];
        console.log(fiveArray);

        setWeather(fiveArray);
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
          <h1>
            Welcome, here you can find out five days forecast for your city
          </h1>
          <div>
            {/* <div>
              <pre>{JSON.stringify(weather, null, 2)}</pre>
            </div> */}
            <label htmlFor="weather">Enter a City</label>
            <Input
              type="text"
              id="weather"
              placeholder="Type City Name Here"
              value={enteredWeather}
              onChange={(event) => {
                setEnteredWeather(event.target.value);
              }}
            ></Input>
          </div>
          <div>
            <Button
              id="button"
              variant="contained"
              disabled={!enteredWeather}
              sx={{ width: '10rem', height: '3rem', fontSize: '1.5rem' }}
              onClick={fetchWeatherHandler}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
        <section className={classes.list}>
          {weather && (
            <FiveDaysList
              date1={weather[0].date}
              temp1={weather[0].temp}
              min1={weather[0].min}
              max1={weather[0].max}
              desc1={weather[0].current}
              icon1={weather[0].icon}
              date2={weather[1].date}
              temp2={weather[1].temp}
              min2={weather[1].min}
              max2={weather[1].max}
              desc2={weather[1].current}
              icon2={weather[1].icon}
              date3={weather[2].date}
              temp3={weather[2].temp}
              min3={weather[2].min}
              max3={weather[2].max}
              desc3={weather[2].current}
              icon3={weather[2].icon}
              date4={weather[3].date}
              temp4={weather[3].temp}
              min4={weather[3].min}
              max4={weather[3].max}
              desc4={weather[3].current}
              icon4={weather[3].icon}
              date5={weather[4].date}
              temp5={weather[4].temp}
              min5={weather[4].min}
              max5={weather[4].max}
              desc5={weather[4].current}
              icon5={weather[4].icon}
            />
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
export default FiveDays;
