import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import PopularMovies from './Components/PopularMovies';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieInfo from './Components/MovieInfo';
import SearchMovies from './Components/SearchMovies';
import Contact from './Components/Contact';
import MovieReview from './Components/MovieReview'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="all-components">
        <Route exact path="/" component={Home} />
        <Route exact path="/popular-movies" component={PopularMovies} />
        <Route exact path="/movies/:id/reviews" component={MovieReview} />
        <Route exact path="/search-movies" component={SearchMovies} />
        <Route exact path="/popular-movies/:id" component={MovieInfo} />
        <Route exact path="/contact-us" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
