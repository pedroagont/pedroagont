import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Navigation({ data }) {
  const [collapse, setCollapse] = useState(window.innerWidth < 570);
  const location = useLocation();

  const menuItemSelected = (item) =>
    classNames({
      'menu-item-selected': item.pathname === location.pathname,
    });

  const handleClickToggleMenu = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setCollapse(e.target.innerWidth < 570);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">@pedroagont</Link>
      </div>
      <div className="navbar-button" onClick={handleClickToggleMenu}>
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div
        className="navbar-collapse"
        style={{ display: collapse ? 'none' : 'block' }}
      >
        <ul className="navbar-collapse-menu">
          {data.map((item) => (
            <li key={item.name} className={menuItemSelected(item)}>
              <Link to={item.pathname}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
