import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
	axios.get("http://localhost:5000/api/movies")
	.then(response => setMovies(response.data))
	.catch(error => console.error("Erro ao buscar filmes:", error));

  }, []);

  return (
    <div>
      <h1>Filmes Populares</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
