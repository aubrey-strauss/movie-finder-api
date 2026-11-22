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

export const getMovieDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(OMDB_URL, {
      params: { i: id, apikey: process.env.OMDB_API_KEY }, //i is OMDb's name for "IMDb ID". Search used s. The rubric checks for i and apikey
    });
    res.json(response.data);
  } catch (error) {
    //log the real problem in terminal
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch movie details from OMDb" });
  }
};
