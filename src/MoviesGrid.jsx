import styles from "./MoviesGrid.module.css"
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
