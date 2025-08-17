import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchMovies(query, page).then(res => setMovies(res.data.results));
  }, [query, page]);

  return (
    <div>
      <h2>Results for "{query}"</h2>
      <div className="grid">{movies.map(m => <MovieCard key={m.id} movie={m} />)}</div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
