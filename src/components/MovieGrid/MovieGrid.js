import React from 'react';
import MovieItem from '../MovieItem';
import './MovieGrid.scss';
function MovieGrid({ title }) {
    return (
        <div className="movie-grid">
            <p className="movie-grid-title">{title}</p>
            <div className="movie-grid-layout">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        </div>
    );
}

export default MovieGrid;
