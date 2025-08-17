import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchMovieCast, imageUrl } from "../api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetail(id).then(res => setMovie(res.data));
    fetchMovieCast(id).then(res => setCast(res.data.cast.slice(0, 10)));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <div className="cast">
        {cast.map(c => (
          <div key={c.id}>
            <img src={c.profile_path ? imageUrl + c.profile_path : ""} alt={c.name} />
            <p>{c.name}</p>
            <small>as {c.character}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
