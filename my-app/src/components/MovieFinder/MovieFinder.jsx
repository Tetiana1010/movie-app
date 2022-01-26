import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams.js";

import styled from "styled-components";

import movieApi from "./../../services/movieApi";

import MoviesList from "../MoviesList";

export default function MovieFinder() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );
  const [pages, setPages] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { q } = getQueryParams(location.search);

    if (q) {
      fetchMovies(q);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchMovies(query, page);

    setSearchParams({ q: query });
  };

  const fetchMovies = (searchValue, page) => {
    movieApi
      .searchMovieWithQuery(searchValue, page)
      .then((result) => {
        setMovies(result.results);
        setPages(parseInt(result.total_pages));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <FormStyled>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input
            type="search"
            value={query}
            placeholder=" find movie.."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search" type="submit">
            Search
          </button>
        </label>
      </form>
      <MoviesList
        list={movies}
        loading={isLoading}
        error={error}
        title={"Movies"}
        total_pages={pages}
      />
    </FormStyled>
  );
}

const FormStyled = styled.div`
  padding: 0 2rem;
  text-align: center;

  input {
    margin-top: 1rem;
    width: 60vw;
    height: 5vh;
    border-radius: 5px;
    border: 0.05px solid gray;
  }

  .search {
    height: 5vh;
    /* width: 8vw; */
    margin-left: 0.7rem;
    border: 0.05px solid gray;
    background-color: rgba(46, 46, 50, 1);
    font-size: 1rem;
    color: white;
    border-radius: 5px;
  }
`;
