import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  LogoText,
  DropdownContainer,
} from "./NavbarElements";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <Logo src={logo} alt="Indigo Airline Management Logo" />
        <LogoText>Indigo Airline Management</LogoText>
      </NavLink>
      <NavMenu>
        <NavLink to="/BookTicket">View Flights</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </NavMenu>
      <NavBtn>
        <DropdownContainer>
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle">
            Client Login
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/sign-up">
              Sign Up
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/CustomerSignin">
              Sign In
            </Dropdown.Item>
          </Dropdown.Menu>
        </DropdownContainer>
      </NavBtn>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
