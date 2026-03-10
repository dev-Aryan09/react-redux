import axios from "axios";

const UNPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNPLASH_KEY}` },
  });

  return res.data;
}

export async function fetchVideos(query, per_page = 15) {
  const res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: {
      Authorization: PEXELS_KEY,
    },
  });

  return res.data;
}

export async function fetchGifs(query, limit = 24) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: GIPHY_KEY, q: query, limit: limit },
  });

  return res.data;
}
