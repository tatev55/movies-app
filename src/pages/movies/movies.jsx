import { useLocalStorageState } from "../../hooks/use-local-storage-state";
import Card from "../../components/card/card";
import "./movies.css"

export const Movies = () => {
  const [moviesState] = useLocalStorageState([], "movies");

  return (
    <div className="movies-container" >
      <h1 className ="my-movies">My Movies</h1>
      <p className="my-movies">You liked {moviesState.length} movies</p>
      <Card data={moviesState} onCardClick={() => {}} />
    </div>
  );
};
