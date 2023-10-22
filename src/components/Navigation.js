import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function Navigation() {
  const location = useLocation();

  const menuItemSelected = (item) =>
    classNames({
      'menu-item-selected': item.pathname === location.pathname,
    });

  const menuListData = [
    {
      name: 'Home',
      pathname: '/',
    },
    {
      name: 'About',
      pathname: '/about',
    },
    {
      name: 'Experience',
      pathname: '/experience',
    },
    {
      name: 'Education',
      pathname: '/education',
    },
    {
      name: 'Projects',
      pathname: '/projects',
    },
    {
      name: 'Dev',
      pathname: '/dev',
    },
    {
      name: 'Contact',
      pathname: '/contact',
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">@pedroagont</Link>
      </div>
      <ul className="navbar-menu">
        {menuListData.map((item) => (
          <li key={item.name} className={menuItemSelected(item)}>
            <Link to={item.pathname}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
