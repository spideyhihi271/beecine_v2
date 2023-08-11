import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './MovieList.scss';
// import required modules

import MovieItem from '../MovieItem/';

function MovieList() {
    return (
        <section className="movies-wrapper">
            <header className="movies-header">
                <div className="movies-header-info">
                    <h1 className="info-title">#Play with Valorant</h1>
                </div>
                <div className="movie-header-side">
                    <Link className="info-link">Xem tất cả</Link>
                </div>
            </header>
            <main className="movies-main">
                <Swiper
                    slidesPerView={4.5}
                    slidesPerGroup={2}
                    spaceBetween={8}
                    navigation={true}
                    modules={[Navigation]}
                    speed={1000}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MovieItem />
                    </SwiperSlide>
                </Swiper>
            </main>
        </section>
    );
}

export default MovieList;
