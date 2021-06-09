const MovieDetail = ({ movie }) => {
  const genres = () => {
    let data = movie.genres;
    let genre = data.map((d) => <span key={d.id}>{d.name}</span>);
    return genre;
  };
  const timeConvert = () => {
    let duration = movie.runtime / 60;
    let rDuration = Math.floor(duration);
    let minutes = Math.round((duration - rDuration) * 60);
    return `${rDuration}h ${minutes}m`;
  };

  const getYear = () => {
    let date = new Date(movie.release_date);
    let year = date.getFullYear();
    return year;
  };

  return (
    <div className="movie-detail">
      {movie.poster_path && (
        <img
          id="img-movie-detail"
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt="{ movie.title }"
        />
      )}
      <div id="header-title">
        <h1>
          {movie.title} ({isNaN(getYear()) ? "NC" : getYear()})
        </h1>
        <div className="facts">
          <span>{movie.release_date}</span>
          <span>{timeConvert()}</span>
          <span>{movie.status}</span>
          <div>{genres()}</div>
        </div>
        <div className="rating">
          <span id="score">{Math.round(movie.vote_average * 10)} % </span>
          <span>Note des Utilisateurs</span>
        </div>
      </div>

      <section id="movie-section-info">
        <h3>{movie.tagline}</h3>
        <h3>Synopsis</h3>
        <p>{movie.overview} </p>
      </section>
    </div>
  );
};

export default MovieDetail;
