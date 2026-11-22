# 🎬 Movie Finder API

A small RESTful API built with Node.js and Express. It doesn't store any data itself. It asks the free [OMDb API](http://www.omdbapi.com/) for movie info and sends clean JSON back, ready for a future front-end app.

Built for Per Scholas SBA 12: Build a RESTful Server.

## Tech used

- **Node.js** + **Express** (the server and routes)
- **axios** (calls the OMDb API)
- **dotenv** (keeps the API key in a `.env` file, out of the code)
- **nodemon** (restarts the server on save while developing)

## Project structure

```
movie-finder-api/
├── server.js                    ← starts the app, mounts routes at /api
├── routes/movieRoutes.js        ← the URLs
├── controllers/movieController.js ← what each URL does (calls OMDb)
├── .env                         ← API key (not on GitHub)
└── .gitignore                   ← keeps .env and node_modules off GitHub
```

## How to run it

1. Get a free API key at http://www.omdbapi.com/apikey.aspx (click the activation link in the email).
2. Clone the repo and install packages:
   ```bash
   git clone https://github.com/aubrey-strauss/movie-finder-api.git
   cd movie-finder-api
   npm install
   ```
3. Create a `.env` file in the project folder:
   ```
   OMDB_API_KEY=your_key_here
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   You'll see `Server running on http://localhost:3001`.

## Endpoints# Notes: Movie Finder API

## What tripped me up

- Missing comma in `app.get('/' (req, res) =>` → "Malformed arrow function parameter list". The ^^^ marks point right after the mistake.
- Pasting 3 Git commands at once garbled the first one ("it: command not found"). Now I run them one at a time.
- Postman said ECONNREFUSED: my server wasn't running. Start `npm run dev` first.
- Postman's VS Code extension sometimes shows an old body with a new status. Check Status and Size, then click Raw.
- Forgot `async` before using `await`, and left a placeholder `res.json` after try/catch (that would send two responses).
- OMDb 401: key not activated, then I pasted the long activation code instead of the 8-character key. `.env` changes need a server restart.

## Endpoint vs. route

- **Endpoint:** an address someone can call: method + URL, like GET /api/movies/:id.
- **Route:** the same thing from inside my code: `router.get("/movies/:id", getMovieDetails)`.

| Method | Endpoint                   | What it does                                                                     |
| ------ | -------------------------- | -------------------------------------------------------------------------------- |
| GET    | `/api/search?title=batman` | Searches OMDb by title and returns a list of matching movies                     |
| GET    | `/api/movies/:id`          | Returns full details for one movie by IMDb ID (example: `/api/movies/tt0372784`) |

**Errors**

- `400`: `/api/search` with no `title` → `{ "error": "Title query parameter is required" }`
- `500`: OMDb couldn't be reached or rejected the request → `{ "error": "Failed to fetch movies from OMDb" }`

Tested with the Postman extension in VS Code.

## What I learned

- How a request travels: client → `server.js` → router → controller → OMDb → back to the client.
- The difference between a **route** (inside my code) and an **endpoint** (the address someone calls).
- Using `async`/`await` with `try`/`catch` so one failed call to OMDb doesn't crash the server.
- Reading status codes: 200 (worked), 400 (bad request), 401 (key not accepted), 500 (server problem).
- Keeping secrets safe with `.env` and `.gitignore`, and restarting the server after changing `.env`.
- Debugging: a 500 from my API turned out to be a 401 from OMDb. My `console.error` showed the real problem: the API key wasn't activated, and then I'd pasted the activation code instead of the key.
