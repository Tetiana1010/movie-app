import { useRoutes } from 'react-router-dom';
import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import './App.css';

import Layout from './pages/Layout.js'
import HomePage from './pages/HomePage.js';
import MoviesPage from './pages/MoviesPage.js';
import MovieDetailsPage from './pages/MovieDetailsPage.js';
import NotFound from './pages/NotFound';

import Cast from './components/Cast';
import Reviews from './components/Reviews';

function App() {

  const element = useRoutes([
    {
      path: routes.home,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: routes.movies,
          element: <MoviesPage />,
        },
        {
          path: routes.moviesDetails,
          element: <MovieDetailsPage/>,
          children: [
            {
              path: routes.cast,
              element: <Cast/>,
            },
            {
              path: routes.reviews,
              element: <Reviews />
            }
          ]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return element;

  //   return (
  //   <div className="App">
  //      <Routes>
  //         <Route element={<Layout />}>
  //           <Route path="/" element={<HomePage />} />
  //           {/* test <Route path="movie123" element={<Navigate replace to='/movies' />} /> */}
  //           <Route path="movies" element={<MoviesPage />} />
  //           <Route path="movies/:id"  element={<MovieDetailsPage/>}>
  //             <Route path="cast" element={<Cast/>} />
  //             <Route path="review" element={<Reviews />} />
  //           </Route>
  //           <Route path="*" element={<NotFound />} />
  //         </Route>
  //       </Routes> 
  //   </div>
  // );
};

export default App;
