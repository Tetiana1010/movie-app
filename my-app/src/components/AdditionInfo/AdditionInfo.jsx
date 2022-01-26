import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "../../routes.js";
import { useLocation } from "react-router-dom";

export default function AdditionInfo() {
  const { pathname } = useLocation();
  return (
    <AdditionStyed>
      <br />
      <hr />
      <h3>Additional information:</h3>
      <ul>
        <li>
          <NavLink
            to={
              pathname.endsWith(routes.cast)
                ? pathname.replace(routes.cast, "")
                : routes.cast
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={
              pathname.endsWith(routes.reviews)
                ? pathname.replace(routes.reviews, "")
                : routes.reviews
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </AdditionStyed>
  );
}

const AdditionStyed = styled.div`
  li {
    display: inline-block;
    margin-right: 1.5rem;
    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
    }
    .active {
      color: salmon;
    }
  }
`;
