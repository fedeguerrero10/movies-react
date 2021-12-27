import styles from "./App.module.css"
import { MoviesGrid } from "./MoviesGrid";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Cine Club 
        Cba</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
