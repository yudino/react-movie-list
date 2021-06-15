const urlMovieDb = "https://api.themoviedb.org/3"
const { REACT_APP_MOVIEDB_TOKEN } = process.env


const fetchMovies = async () => {
    const ApiMovie = urlMovieDb + `/discover/movie?api_key=${ REACT_APP_MOVIEDB_TOKEN }`
    const res = await fetch(ApiMovie)
    const data = await res.json()
    return data;

}

//Fetch movie + id
const fetchMovie = async (id) => {
    const url = urlMovieDb + `/movie/${id}?api_key=${ REACT_APP_MOVIEDB_TOKEN }&language=en-US`
    const res = await fetch(url)
    const data = await res.json()
    return data;
}

//Query search 
const queryMovieSearch = async (searchValue) => {
    const url = urlMovieDb + `/search/movie?api_key=${ REACT_APP_MOVIEDB_TOKEN }&query=${searchValue}`
    const res = await fetch(url)
    const data = await res.json()
    return data;
}

export { fetchMovies, fetchMovie, queryMovieSearch };