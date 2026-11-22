# Notes: Movie Finder API

## What tripped me up

- Missing comma in `app.get('/' (req, res) =>` → "Malformed arrow function parameter list". The ^^^ marks point right after the mistake.
- Pasting 3 Git commands at once garbled the first one ("it: command not found"). Now I run them one at a time.
- Postman said ECONNREFUSED: my server wasn't running. Start `npm run dev` first.
- Postman's VS Code extension sometimes shows an old body with a new status. Check Status and Size, then click Raw.
- Forgot `async` before using `await`, and left a placeholder `res.json` after try/catch (that would send two responses).
- OMDb 401: key not activated, then I pasted the long activation code instead of the 8-character key. `.env` changes need a server restart.

## Endpoint vs. route

- **Endpoint:** an address someone can call: method + URL, like GET /api/movies/:id.
- **Route:** the same thing from inside my code: `router.get("/movies/:id", getMovieDetails)`.# Notes: Movie Finder API

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
