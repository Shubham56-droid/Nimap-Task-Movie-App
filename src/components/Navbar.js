import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search/${query}`);
  };

  return (
    <nav className="navbar">
      <p><Link to="/">Movie App</Link></p>
      <div>
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}
