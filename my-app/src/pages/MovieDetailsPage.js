import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import movieApi from './../services/movieApi';
import AdditionInfo from '../components/AdditionInfo';
import Nofitication from '../components/Nofitication';

export default function MovieDetailsPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  
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
                <h1>{movieDetails.title} ({movieDetails.release_date})</h1>
                <p>User score: {movieDetails.popularity}%</p>
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
