// a4d1120350c665aad10b441227c13583
import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './Header/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/movies" element={<MoviesPage />} />
    </Routes>
  );
};
export default App;
