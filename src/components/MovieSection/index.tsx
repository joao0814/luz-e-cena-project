import { useEffect, useState } from "react";
import Button from "../Button/index.tsx";
import Fieldset from "../Fieldset";
import InputText from "../InputText.tsx";
import MovieList from "../MovieList/index.tsx";
import styles from "./MovieSection.module.css";
import { FaSearch } from "react-icons/fa";
import { getMovies } from "../../api/index.tsx";
import type { Movie } from "../../types/index.tsx";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <main className={styles.container}>
      <Fieldset variant="secondary">
        <InputText placeholder="Buscar filmes..." />
        <Button variant="icon">
          <FaSearch />
        </Button>
      </Fieldset>
      <h1 className={styles.titulo}>Em cartaz</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default MovieSection;
