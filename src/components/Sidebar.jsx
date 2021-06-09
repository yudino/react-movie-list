import MoviesList from './MoviesList'
import SeachBar from './SearchBar'

const Sidebar = ({ movies, searchValue, setSearchValue , onShowDetail}) => {
  return (
    <div className="sidebar-container">
      <SeachBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <MoviesList movies={movies} onShowDetail={onShowDetail} />
    </div>
  );
};

export default Sidebar
