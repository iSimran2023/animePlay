import { useState, useEffect, useRef } from "react";
import AnimeCard from "../components/AnimeCard";
import { getPopularAnimes, searchAnimes } from "../services/api";

function Home() {
  const [animes, setAnimes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const debounceTimeout = useRef(null);

  // Search effect with debounce
  useEffect(() => {
    // Clear previous debounce
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      fetchAnimes();
    }, 500);

    return () => clearTimeout(debounceTimeout.current);
  }, [searchQuery, page]);

  // Fetch function used in debounce and manual search
  const fetchAnimes = async () => {
    setLoading(true);
    if (!searchQuery.trim()) {
      const popular = await getPopularAnimes(page);
      setAnimes(popular);
    } else {
      const results = await searchAnimes(searchQuery, page);
      setAnimes(results);
    }
    setLoading(false);
  };

  // Handle typing in search input
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  // Handle manual form submit (Search button)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current); // cancel debounce
    fetchAnimes(); 
  };

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search anime..."
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {animes.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <button onClick={handlePrev} disabled={page === 1}>
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>Page: {page}</span>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
