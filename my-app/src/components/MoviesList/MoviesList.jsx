import React from 'react';
import { useLocation } from "react-router-dom";

import styled from 'styled-components';
import CustomLink from '../CastomLink.jsx'
import Nofitication from '../Nofitication';



export default function MoviesList({ loading, list, error, title }) {

  const location = useLocation();
  
  return (
    <ListStyled>
      { error && <Nofitication message={error}/> }
      { loading && <Nofitication message="Loading..." /> }
          { list.length > 0  &&  
            <div>
              <h1>{title}</h1>
              <div className='movieContainer'>
                {list.map(movie => 
                    <div className='movieItem' key={movie.id}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                        <CustomLink to={`/movies/${movie.id}`}
                            state={{ from: location}}>
                            {movie.title}
                        </CustomLink>
                    </div>
                  )}
              </div>
            </div>
          } 
    </ListStyled>
  );
};


            // <ul> {list.map(movie => 
            //   <li key={movie.id}>
            //     <Link 
            //       to={`/movies/${movie.id}`}>
            //       {movie.title}
            //     </Link>   
            //   </li>
            // </ul>)

const ListStyled = styled.div`
  padding: 0 2rem;
  text-align: center;

  .movieContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    .movieItem {
      padding: 1rem;
      -webkit-box-shadow: -6px 5px 15px -11px #000000; 
      box-shadow: -6px 5px 15px -11px #000000;
    };
  };

`;