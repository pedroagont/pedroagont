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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar scrolling="true" dark expand="md" fixed="top">
        <NavbarBrand href="/" className="text-muted">pedroagont</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/about" className="text-muted px-2" onClick={toggle} >About</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" className="text-muted px-2" onClick={toggle} >Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/collabs" className="text-muted px-2" onClick={toggle} >Collabs</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" className="text-muted px-2" onClick={toggle} >Gallery</Link>
            </NavItem>
            <NavItem>
              <Link to="/press" className="text-muted px-2" onClick={toggle} >Press</Link>
            </NavItem>
            <NavItem>
              <Link to="/cv" className="text-muted px-2" onClick={toggle} >CV</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="text-muted px-2" onClick={toggle} >Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
