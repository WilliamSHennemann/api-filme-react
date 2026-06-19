import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao buscar filme");
            }

            return response.json();
        })
        .then((data) => {
            setMovie(data);
        })
        .catch(() => {
            setError("Não foi possível carregar os detalhes do filme.");
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id, KEY]);

    if (loading) {
    return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>Filme não encontrado.</p>;
    }

    return (
        <div>
            <nav>
                <h1>Movie</h1>
            </nav>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="container">
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Movie;
