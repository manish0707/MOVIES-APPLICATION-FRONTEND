import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/PopularMovies.css";
import MovieCard from './MovieCard';
import { API_BASE_URL } from '../constant/api'

export class PopularMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PopularMovies : []
        }
    }
    async componentDidMount() {
        const response = await axios.get(API_BASE_URL + 'movies/popular');
        const data = response.data.popularMovies.results;
        data.forEach((movie, index) => {
            if(index !== 3) {
                this.setState(st => ({
                    PopularMovies : [...st.PopularMovies,
                        {
                             id : movie.id,
                             poster : movie.poster_path,
                             name : movie.original_title,
                             releaseDate : movie.release_date,
                             overview : movie.overview,
                             rating : movie.vote_average,
                             popularity : movie.popularity,
                        }
                    ]
                }));
            }
        });
    }
    render() {
        const allMovies = 
            this.state.PopularMovies.map(movie => (
                    <MovieCard
                    key = {movie.id}
                    data = {movie}
                />
            ))

        return (
            <div className="PopularMovies">
                { this.state.PopularMovies.length === 0 ?
                    (
                        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    ) : allMovies 
                }
            </div>
        )
    }
}

export default PopularMovies;
