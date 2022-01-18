import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';

const fetchTrendingWithQuery = () => {
  return (  
    axios
      .get(`${baseURL}/3/trending/movie/day?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
      .then(response => response.data.results)
  );
};

const searchMovieWithQuery = movie => {
  return (  
    axios
      .get(`${baseURL}/3/search/movie?api_key=2815bb4c9c06084df81dd7d6acbff60a&query=${movie}`)
      .then(response => response.data.results)
  );
};

const fetchMovieWithQuery = id => {
  return (  
    axios
      .get(`${baseURL}/3/movie/${id}?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
      .then(response => response.data)
  );
};

const fetchCastWithQuery = id => {
  return (
    axios
      .get(`${baseURL}/3/movie/${id}/credits?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
      .then(response => response.data.cast)
  );
};

const fetchReviewsWithQuery = id => {
  return (
    axios
      .get(`${baseURL}/3/movie/${id}/reviews?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
      .then(response => response.data.results)
  );
};

export default { 
  fetchTrendingWithQuery, 
  fetchMovieWithQuery,
  searchMovieWithQuery,
  fetchCastWithQuery,
  fetchReviewsWithQuery,
};

// https://api.themoviedb.org/3/movie/272/credits?api_key=2815bb4c9c06084df81dd7d6acbff60a

// 2815bb4c9c06084df81dd7d6acbff60a
