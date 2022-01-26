import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "../routes";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: flex-start;

  li {
    display: inline;
    margin: 0 1rem;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 1.3rem;
  }
  .active {
    color: salmon;
  }
`;
