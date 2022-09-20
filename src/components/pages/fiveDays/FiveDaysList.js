import classes from './FiveDaysList.module.css';
import { React } from 'react';
function FiveDaysList(props) {
  let date1 = props.date1.split(' ');
  let date2 = props.date2.split(' ');
  let date3 = props.date3.split(' ');
  let date4 = props.date4.split(' ');
  let date5 = props.date5.split(' ');

  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <div>
          <p>Date: {date1[0]}</p>
          <p>Temperature: {props.temp1}</p>
          <p>Minimal Temperature: {props.min1}</p>
          <p>Maximal Temperature: {props.max1}</p>
          <p>{props.desc1}</p>
          <img
            src={`http://openweathermap.org/img/w/${props.icon1}.png`}
            alt="img"
          />
        </div>
        <div>
          <p>Date: {date2[0]}</p>
          <p>Temperature: {props.temp2}</p>
          <p>Minimal Temperature: {props.min2}</p>
          <p>Maximal Temperature: {props.max2}</p>
          <p>{props.desc2}</p>
          <img
            src={`http://openweathermap.org/img/w/${props.icon2}.png`}
            alt="img"
          />
        </div>
        <div>
          <p>Date: {date3[0]}</p>
          <p>Temperature: {props.temp3}</p>
          <p>Minimal Temperature: {props.min3}</p>
          <p>Maximal Temperature: {props.max3}</p>
          <p>{props.desc3}</p>
          <img
            src={`http://openweathermap.org/img/w/${props.icon3}.png`}
            alt="img"
          />
        </div>
        <div>
          <p>Date: {date4[0]}</p>
          <p>Temperature: {props.temp4}</p>
          <p>Minimal Temperature: {props.min4}</p>
          <p>Maximal Temperature: {props.max4}</p>
          <p>{props.desc4}</p>
          <img
            src={`http://openweathermap.org/img/w/${props.icon4}.png`}
            alt="img"
          />
        </div>
        <div>
          <p>Date: {date5[0]}</p>
          <p>Temperature: {props.temp5}</p>
          <p>Minimal Temperature: {props.min5}</p>
          <p>Maximal Temperature: {props.max5}</p>
          <p>{props.desc5}</p>
          <img
            src={`http://openweathermap.org/img/w/${props.icon5}.png`}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
export default FiveDaysList;
