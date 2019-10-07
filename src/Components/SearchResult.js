import React from 'react';
import MovieCard from './MovieCard';
import '../CSS/SearchResult.css';

export default function SearchResult(props) {
    return (
        <div className="movie-results">
            {
                props.data.map(movie => {
                    const { poster_path, title, release_date, id } = movie;
                    const data = {
                        poster : poster_path,
                        name : title,
                        releaseDate : release_date,
                        id : id
                    }
                    return <MovieCard
                    key = {data.id}
                    data = { data }
                    />
                })
            }
        </div>
    )
}

