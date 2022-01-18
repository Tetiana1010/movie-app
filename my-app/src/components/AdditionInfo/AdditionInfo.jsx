import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import routes from '../../routes.js';

export default function AdditionInfo() {
  return (
    <AdditionStyed>
      <br />
      <hr />
      <h3>Additional information:</h3>
        <ul>
          <li>
            <NavLink to={routes.cast}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={routes.reviews}>Reviews</NavLink>
          </li>
        </ul>
    </AdditionStyed>
  );
};

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


