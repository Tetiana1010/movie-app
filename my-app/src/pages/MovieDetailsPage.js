import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import movieApi from './../services/movieApi';
import AdditionInfo from '../components/AdditionInfo';
import Nofitication from '../components/Nofitication';
import Rate from '../components/Rating';

export default function MovieDetailsPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  // const { state } = useLocation()
  
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    movieApi
    .fetchMovieWithQuery(id)
      .then(response => {
        setMovieDetails(response)
        setLoading(false)
      });
  }, [id]);

  function handleClick () {
    navigate(-1);
  };

  function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return  rhours + "h " + rminutes + "m";
  };

  return (
    <MovieDetailsStyled>
      <hr />
      <span 
        className='back'
        onClick={handleClick}>
        <KeyboardBackspaceIcon />
      </span>
      { loading && <Nofitication message="Loading..." />} 
      { movieDetails && ( 
        <main>
          <div className='movieContainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt={movieDetails.title}></img>
            <div>
              <h1>{movieDetails.title} ({new Date(movieDetails.release_date).getFullYear()})</h1>
              <ul>
                <li>{movieDetails.release_date}</li>
                <li>{movieDetails.original_language}</li>
                <li>{timeConvert(movieDetails.runtime)}</li>
              </ul>
              <Rate rate={movieDetails.vote_average}/>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>{movieDetails.genres.map(genre => <span key={genre.id}>{genre.name} | </span>)}</p>              </div>
          </div>
          <AdditionInfo />
        </main>
        )
      }
      <Outlet />
    </MovieDetailsStyled>
  );
};

const MovieDetailsStyled = styled.div`
  padding: 1rem 2rem;
  span {
    margin: 0 0 2rem 0;
  }
  main {
    display: grid;
    grid-template-columns: 1fr, 2fr;
    .movieContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      img {
        margin: 1rem 2rem 0 0;
      }
      p {
        max-width: 40vw;
      };
    };
  };
`
