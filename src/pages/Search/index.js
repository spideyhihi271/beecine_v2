import MovieGrid from '~/components/MovieGrid';
import SearchFilter from '~/components/SearchFilter';

function Search() {
    return (
        <div className="container spacing-header">
            <SearchFilter />
            <MovieGrid title={'Kết quả tìm kiếm cho từ khóa'} />
        </div>
    );
}

export default Search;
