import Carousel from '~/components/Carousel';
import MovieList from '~/components/MovieList/MovieList';

function Movies() {
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

export default Movies;
