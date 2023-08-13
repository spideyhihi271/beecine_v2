import Carousel from '~/components/Carousel';
import MovieList from '~/components/MovieList/MovieList';

function TvSeries() {
    return (
        <>
            <Carousel />
            <div className="container">
                <MovieList />
                <MovieList />
                <MovieList />
                <MovieList />
                <MovieList />
            </div>
        </>
    );
}

export default TvSeries;
