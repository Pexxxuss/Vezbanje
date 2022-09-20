import classes from './Welcome.module.css';
function Welcome() {
  return (
    <div className={classes.welcome}>
      <h1>
        Welcome to our weather forecast, here you can find Todays forecast, Five
        days forecast or Air polution!
      </h1>
      <h2>Select button from our navbar and have a nice day!</h2>
    </div>
  );
}
export default Welcome;
