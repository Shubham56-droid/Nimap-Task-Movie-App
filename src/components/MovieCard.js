import { Link } from "react-router-dom";
import { imageUrl } from "../api";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
      </Link>
    </div>
  );
}
