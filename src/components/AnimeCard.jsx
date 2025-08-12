import { useAnimeContext } from "../contexts/AnimeContext";

function AnimeCard({ anime }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
  const favorite = isFavorite(anime.mal_id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(anime.mal_id);
    else addToFavorites(anime);
  }

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          className="anime-image"
        />
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ♥
        </button>
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.year || new Date(anime.aired?.from).getFullYear()}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
