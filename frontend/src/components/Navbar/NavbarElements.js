import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 1px 10px #999;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 10px;
`;

export const LogoText = styled.h3`
  color: #fff;
  margin: 0;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
  display: flex;
  align-items: center;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 8px 16px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px;
  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export const DropdownContainer = styled(Dropdown)`
  .dropdown-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    &:hover {
      color: #15cdfc;
    }
  }

  .dropdown-menu {
    background-color: #000;
    border: none;
    box-shadow: 0px 1px 10px #999;
  }

  .dropdown-item {
    color: #fff;
    &:hover {
      color: #15cdfc;
      background-color: transparent;
    }
  }
`;
