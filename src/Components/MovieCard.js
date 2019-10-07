import React from 'react';
import '../CSS/MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const imageurl = `https://image.tmdb.org/t/p/w500${props.data.poster}`;
    return (
        <div className="movie-card">
            <div style={{backgroundImage : `url(${imageurl})`}} className="image-wrapper"></div>
            <div className="movie-card-content">
                <p className="movie-card-title ">{props.data.name}</p>
                <p className="movie-card-releaseDate ">Release Date : {props.data.releaseDate}</p>
                <Link className="link" to={`/popular-movies/${props.data.id}`} >
                    <button>Know More</button>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard;
