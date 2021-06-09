const MoviesList = ({ movies, onShowDetail}) => {
    return (
      <div className='sidebar'>
        <nav>
          <ul id='movieNav'>
            {movies && movies.map((movie) => (
              <li key={movie.id} onClick={() => onShowDetail(movie.id) }>
                <h3 id={movie.id}>{movie.title}</h3>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
}

export default MoviesList
