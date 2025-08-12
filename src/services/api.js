const BASE_URL = "https://api.jikan.moe/v4";

// Get Top / Popular Anime
export const getPopularAnimes = async () => {
  const response = await fetch(`${BASE_URL}/top/anime`);
  const data = await response.json();
  return data.data; // Jikan returns results in data.data
};

// Search Anime
export const searchAnimes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}&order_by=popularity&sort=asc&limit=10`
  );
  const data = await response.json();
  return data.data; // Jikan returns results in data.data
};
