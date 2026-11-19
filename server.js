import "dotenv/config"; //This has to come first, so your API key is ready before any other code needs it
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ message: "Movie Finder API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); //turns the server on, the backticks let you drop ${PORT} into the text.
});
