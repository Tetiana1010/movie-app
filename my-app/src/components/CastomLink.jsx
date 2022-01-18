import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export default function CustomLink({ children, to, ...props }){
  const match = useMatch(to);

  return (
    <LinkStyled>
        <Link 
          to={to}
          style={{
            color: match ? 'salmon' : 'black',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
          {...props}
          >
            {children}
        </Link>
    </LinkStyled>
  );
};

const LinkStyled = styled.li`
  padding-top: .4rem;
  list-style-type: none;
  &:hover {
    color: salmon;
  };
`;
