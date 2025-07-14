import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 Anos" | "12 Anos" | "14 Anos" | "16 Anos";

interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: Categoria;
  duracao: string;
  censura: Censura;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
