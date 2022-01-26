import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import movieApi from "./../../services/movieApi";

import MoviesList from "../MoviesList";
import Selector from "../Selector.jsx";

export default function Trending() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState("");
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );
  const [pages, setPages] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    movieApi
      .fetchTrendingWithQuery(page)
      .then((response) => {
        setMovies(response.results);
        setPages(response.total_pages);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Selector />
      <MoviesList
        list={movies}
        loading={isLoading}
        error={error}
        title={"Trending today"}
        total_pages={pages}
      />
    </>
  );
}
