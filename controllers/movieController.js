import axios from "axios"; // Bring in axios so I can call another website's API

const OMDB_URL = "http://www.omdbapi.com/";
export const searchMovies = async (req, res) => {
  const title = req.query.title;
  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }
  try {
    const response = await axios.get(OMDB_URL, {
      params: { s: title, apikey: process.env.OMDB_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch movies from OMDb" });
  }
};

export const getMovieDetails = (req, res) => {
  res.json({ message: "Details route works" });
};
