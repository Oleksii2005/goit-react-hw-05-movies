// a4d1120350c665aad10b441227c13583
import React from 'react';
import { Routes, Route } from 'react-router';
// import Header from './Header/Header';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  );
};
export default App;
