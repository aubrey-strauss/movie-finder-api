import express from "express";
import {
  searchMovies,
  getMovieDetails,
} from "../controllers/movieController.js";

const router = express.Router(); // make a mini-app just for movie routes
// this makes a separate group of URLs that you’ll plug into the main app

router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails); //id is a fill-in-the-blank spot. Whatever is typed there (like tt0372784) becomes req.params.id.

export default router;
