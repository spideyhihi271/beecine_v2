import React from 'react';
import images from '~/assets/images';
import './MovieItem.scss';
import { Link } from 'react-router-dom';

function MovieItem() {
    return (
        <div className="movie-item">
            <img
                src="https://i.imgur.com/psKGPYm.jpg"
                alt=""
                className="movie-thumb"
            />
            <div className="movie-tag">
                #1 in Series
                <img src={images.trendingIcon} alt="" />
            </div>
            <div className="movie-info">
                <div>
                    <p className="info-name">Em và Trịnh</p>
                    <p className="info-public">2022</p>
                </div>
                <Link to={''} className="info-watch">
                    <i className="fa-duotone fa-play"></i>
                </Link>
            </div>
        </div>
    );
}

export default MovieItem;
