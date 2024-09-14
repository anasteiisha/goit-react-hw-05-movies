import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact={true} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
