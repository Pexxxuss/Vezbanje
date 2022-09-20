import classes from './AirPolutionList.module.css';
function AirPolutionList(props) {
  return (
    <div className={classes.sekcija}>
      <h1 className={classes.naslov}>
        Thank you for using our weather forecast, here is current air polution
        for chosen city, have a nice day!
      </h1>
      <section className={classes.sadrzina}>
        <p>Concetration of Carbon monoxide is: {props.co} μg/m3</p>
        <p>Concetration of Ammonia is {props.nh3} μg/m3</p>
        <p>Concetration of Nitrogen monoxide is: {props.no} μg/m3</p>
        <p>Concetration of Nitrogen dioxide is: {props.no2} μg/m3</p>
        <p>Concetration of Ozone is: {props.o3} μg/m3</p>
        <p>Concetration of Coarse particulate matter is: {props.pm10} μg/m3</p>
        <p>Concetration of Sulphur dioxide is: {props.s02} μg/m3</p>
      </section>
    </div>
  );
}
export default AirPolutionList;
