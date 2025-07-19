import useFetchMovies from "../../hooks/useFetchMovies.ts";
import Button from "../Button/index.tsx";
import Fieldset from "../Fieldset";
import InputText from "../InputText.tsx";
import MovieList from "../MovieList/index.tsx";
import styles from "./MovieSection.module.css";
import { FaSearch } from "react-icons/fa";

const MovieSection = () => {
  const { movies, loading, error } = useFetchMovies();
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
