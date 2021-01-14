import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar scrolling="true" light expand="md">
        <NavbarBrand className="" href="/">pedroagont</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="text-dark px-3" onClick={toggle} >Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="text-dark px-3" onClick={toggle} >About</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" className="text-dark px-3" onClick={toggle} >Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/collabs" className="text-dark px-3" onClick={toggle} >Collabs</Link>
            </NavItem>
            <NavItem>
              <Link to="/alumni" className="text-dark px-3" onClick={toggle} >Alumni</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" className="text-dark px-3" onClick={toggle} >Gallery</Link>
            </NavItem>
            <NavItem>
              <Link to="/press" className="text-dark px-3" onClick={toggle} >Press</Link>
            </NavItem>
            <NavItem>
              <Link to="/cv" className="text-dark px-3" onClick={toggle} >CV</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="text-dark px-3" onClick={toggle} >Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
