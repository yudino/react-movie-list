import { useState, useEffect } from 'react'
import SideBar from './components/Sidebar'
import MovieDetail from './components/MovieDetail'
import Welcome from './components/Welcome'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [searchValue, setSearchValue] = useState('')

  //request au démarrage
  useEffect(() => {
    fetchMovies()
  }, [])

  //request pour searchbar
  useEffect(() => {
    queryMovieSearch(searchValue)
  }, [searchValue])

  //Fetch Movies
  const fetchMovies = async () => {
    const ApiMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=2b7967016caccd29bc0963cc37da9477'
    const res = await fetch(ApiMovie)
    const data = await res.json()
    setMovies(data.results)

  }

  //Fetch movie + id
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2b7967016caccd29bc0963cc37da9477&language=en-US`
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }

  //Query search 
  const queryMovieSearch = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2b7967016caccd29bc0963cc37da9477&query=${searchValue}`
    const res = await fetch(url)
    const data = await res.json()
    if (data.results) {
      setMovies(data.results)
    } else {
      fetchMovies()
    }
  }

  return (
    <div className='container'>
      <SideBar
        movies={movies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onShowDetail={fetchMovie}
      />
      {(movie.title !== undefined) ? <MovieDetail movie={movie} /> : <Welcome/>}
    </div>
  );
}

export default App;
