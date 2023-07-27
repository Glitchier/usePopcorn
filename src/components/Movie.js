export function MovieList({ movies, onClickMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} onClickMovie={onClickMovie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie, onClickMovie }) {
  return (
    <li onClick={() => onClickMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
