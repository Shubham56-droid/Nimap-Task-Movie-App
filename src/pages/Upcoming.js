// Example TopRated.js
import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies("top_rated", page).then(res => setMovies(res.data.results));
  }, [page]);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div className="grid">{movies.map(m => <MovieCard key={m.id} movie={m} />)}</div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
