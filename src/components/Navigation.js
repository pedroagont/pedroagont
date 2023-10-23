import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function Navigation({ data }) {
  const location = useLocation();

  const menuItemSelected = (item) =>
    classNames({
      'menu-item-selected': item.pathname === location.pathname,
    });

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">@pedroagont</Link>
      </div>
      <ul className="navbar-menu">
        {data.map((item) => (
          <li key={item.name} className={menuItemSelected(item)}>
            <Link to={item.pathname}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
