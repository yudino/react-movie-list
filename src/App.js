import { useState, useEffect } from 'react'
import { fetchMovies, fetchMovie, queryMovieSearch } from './utils/ApiService'
import SideBar from './components/Sidebar'
import MovieDetail from './components/MovieDetail'
import Welcome from './components/Welcome'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [searchValue, setSearchValue] = useState('')

  //request au démarrage
  useEffect(() =>  {
    async function initMovies() {
      const data = await fetchMovies()
      setMovies(data.results)
    }
    initMovies()
  }, [])

  //request pour searchbar
  useEffect(() => {
    async function search() {
      const data = await queryMovieSearch(searchValue)
      if (data.results) {
        setMovies(data.results)
      } else {
        fetchMovies()
      }
    }
    search()
  }, [searchValue])

 
 const movieDetail = async (id) => {
    const data = await fetchMovie(id)
    setMovie(data)
  }

 

  return (
    <div className='container'>
      <SideBar
        movies={movies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onShowDetail={movieDetail}
      />
      {(movie.title !== undefined) ? <MovieDetail movie={movie} /> : <Welcome/>}
    </div>
  );
}

export default App;
