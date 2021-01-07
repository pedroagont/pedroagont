import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar scrolling dark expand="md" fixed="top">
        <NavbarBrand href="/">pedroagont</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-2">
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">Collabs</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">Gallery</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">Press</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">CV</NavLink>
            </NavItem>
            <NavItem className="px-2">
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
