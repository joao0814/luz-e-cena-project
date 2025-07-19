import { useEffect, useState } from "react";
import type { Movie } from "../types";
import { getMovies } from "../api";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (err) {
      setError("Failed to fetch movies");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  });
  return { movies, loading, error };
};

export default useFetchMovies;
