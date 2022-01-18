import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import movieApi from './../../services/movieApi';

import MoviesList from '../MoviesList';

export default function Trending () {

  const [movies, setMovies] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    movieApi
      .fetchTrendingWithQuery()
      .then(response => { 
        setMovies(response);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return <MoviesList 
    list={movies} 
    loading={isLoading} 
    error={error} 
    title={'Trending today'}
  />
};
