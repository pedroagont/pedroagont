import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar scrolling="true" dark expand="md" fixed="top">
        <NavbarBrand href="/">pedroagont</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/about" className="text-muted px-2">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" className="text-muted px-2">Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/collabs" className="text-muted px-2">Collabs</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" className="text-muted px-2">Gallery</Link>
            </NavItem>
            <NavItem>
              <Link to="/press" className="text-muted px-2">Press</Link>
            </NavItem>
            <NavItem>
              <Link to="/cv" className="text-muted px-2">CV</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="text-muted px-2">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
