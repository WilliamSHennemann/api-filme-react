import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [searchHistory, setSearchHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("searchHistory")) || [];
    });
    const [showHistory, setShowHistory] = useState(false);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        setLoading(true);
        setError(null);

    fetch(
    search.trim()
        ? `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(search)}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao buscar filmes");
            }

            return response.json();
        })
        .then((data) => {
            setMovies(data.results);
        })
        .catch(() => {
            setError("Não foi possível carregar os filmes.");
        })
        .finally(() => {
            setLoading(false);
        });

}, [KEY, search]);

    function saveSearch() {
    const term = search.trim();

    if (!term) return;

    const updatedHistory = [
        term,
        ...searchHistory.filter((item) => item !== term),
    ].slice(0, 5);

    setSearchHistory(updatedHistory);

    localStorage.setItem(
        "searchHistory",
        JSON.stringify(updatedHistory)
    );
}

    return (
        <Container>
            <h1>Movies</h1>
            <input
                type = "text"
                placeholder = "Pesquise um filme"
                value = {search}
                onFocus={() => setShowHistory(true)}
                onBlur={() => setShowHistory(false)}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        saveSearch();
                    }
                }}
                />
                {showHistory && searchHistory.length > 0 && (
            <ul>
                {searchHistory.map((item) => (
                    <li key={item}>
                        <button
                            onMouseDown={() => {
                                setSearch(item);
                                setShowHistory(false);
                            }}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            )}
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>}
        </Container>
    );
}

export default Home;
