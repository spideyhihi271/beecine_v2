import Carousel from '~/components/Carousel';
import MovieList from '~/components/MovieList/MovieList';

function Home() {
    return (
        <>
            <div className="spacing-header">
                <Carousel />
            </div>
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

export default Home;
