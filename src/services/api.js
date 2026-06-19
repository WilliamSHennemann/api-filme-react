const KEY = process.env.REACT_APP_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function getPopularMovies() {
    return fetch(`${BASE_URL}/movie/popular?api_key=${KEY}&language=pt-BR`)
        .then((response) => response.json())
}

export function getMovieDetails(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=pt-BR`)
        .then((response) => res.json())
}