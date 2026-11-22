export const searchMovies = (req, res) => {
  const title = req.query.title;
  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }
  res.json({ message: `Searching for ${title}` });
};

export const getMovieDetails = (req, res) => {
  res.json({ message: "Details route works" });
};
