import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/today">Todays forecast</NavLink>
          </li>
          <li>
            <NavLink to="/days">Five days forecast</NavLink>
          </li>
          <li>
            <NavLink to="/polution">Air polution</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
