import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies("popular", page).then(res => setMovies(res.data.results));
  }, [page]);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="grid">{movies.map(m => <MovieCard key={m.id} movie={m} />)}</div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
