import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import getQueryParams from '../../utils/getQueryParams.js';

import styled from 'styled-components';

import movieApi from './../../services/movieApi';

import MoviesList from '../MoviesList';

export default function MovieFinder () {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();
  
  useEffect(() => {
    const { q } = getQueryParams(location.search);

    if(q){
      fetchMovies(q)
    };

  }, [])


  const handleSubmit = e => {
    e.preventDefault();

    fetchMovies(query);

    setSearchParams({ q: query })

  };

  const fetchMovies = searchValue => {
      movieApi
      .searchMovieWithQuery(searchValue)
        .then(result => {
          setMovies(result);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  };

  
  return (
    <FormStyled>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          <input 
            type="search"
            value={query}
            placeholder=' find movie..'
            onChange={e => setQuery(e.target.value)}
          />
          <button 
            type="submit">
            Search
          </button>
        </label>
      </form>
      <MoviesList 
        list={movies} 
        loading={isLoading} 
        error={error} 
        title={'Movies'}
      />
    </FormStyled>
  );
};


const FormStyled = styled.div`
  padding: 0 2rem;
  text-align: center;

  input {
    margin-top: 1rem;
    width: 60vw;
    height: 5vh;
    border-radius: 5px;
    border: .05px solid gray;
  };
  
  button {
    height: 5vh;
    width: 8vw;
    margin-left: .7rem;
    border: .05px solid gray;
    background-color: rgba(46, 46, 50, 1);
    font-size: 1rem;
    color: white;
    border-radius: 5px;
  };
`;

