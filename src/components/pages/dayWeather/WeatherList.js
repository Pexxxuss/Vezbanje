import React from 'react';
import classes from './WeatherList.module.css';

function WeatherList(props) {
  const date = new Date();
  const showTime = date.getHours() + ':' + date.getMinutes();
  const current = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <React.Fragment>
      <div className={classes.time}>
        <h3>Current Time</h3>
        <h3>{showTime}</h3>
        <h3>Current date {current}</h3>
      </div>
      <div className={classes.result}>
        <ul className={classes.list}>
          <li className={classes.item}>City: {props.name} </li>
          <li className={props.temp > 0 ? classes.item : classes.subzero}>
            Temperature curently is: {props.temp} degrees
          </li>
          <li className={classes.item}>
            Minimal temperature for today is: {props.min} degrees
          </li>
          <li className={classes.item}>
            Maximal temperature for today is: {props.max} degrees
          </li>
          <li className={classes.item}>Pressure right now: {props.pressure}</li>
          <li className={classes.item}>Real feel: {props.feel} degrees</li>
          <li className={classes.item}>Humidity: {props.humidity}</li>
        </ul>
        <div className={classes.icon}>
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt="img"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default WeatherList;
