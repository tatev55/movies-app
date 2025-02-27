import { useState, useEffect } from "react";
import { omdbApi } from "../../../api/movie.api";
import { useLocalStorageState } from "../../../hooks/use-local-storage-state";
import { Flag } from "../../../components/flag/flag";
import{Genre} from "../../../components/genre/genre"
import Button from "../../../components/button/button";
import "./movies-details.css"

export const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");

  useEffect(() => {
    setIsMovieFavorite(!!moviesState.filter((m) => m.imdbID === id).length);
  }, [id]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await omdbApi.fetchByID(id);
        setMovie(response.data);
  
        
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      getMovie();
    } else {
      setMovie({});
    }

    return () => {
      console.log("cleanup");
    };
  }, [id]);

  const handelUpdateFavoriteStatus = () => {
    const movies = [...moviesState];
    const target = movies.find((m) => m.imdbID === id);

    if (target) {
      const index = movies.findIndex((m) => m.imdbID === id);
      movies.splice(index, 1);
      setMovies(movies);
      setIsMovieFavorite(false);
    } else {
      movies.push(movie);
      setMovies(movies);
      setIsMovieFavorite(true);
    }
  };


  return (
    <div >
      <div className="movies-details-container">
        <div className="poster-list-box">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="poster"
          />
          <ul className="ul-list">
            {(movie?.Ratings || []).map((rating, index) => (
              <li
                key={rating.Source}
                className="list-item"
              >
                {rating.Source}
                <span className="list-item">
                  {rating.Value}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-awards">
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <p className="text-gray-box">
            <strong>Box Office:</strong> {movie.BoxOffice}
          </p>
        </div>
        <div className="description">
          <p className="text-description">
            <span className="text-gray">
              <strong>Directed by:</strong> {movie.Director}
            </span>
            <Button
              className="btn-link-favorite"
              onClick={handelUpdateFavoriteStatus}
            >
              {isMovieFavorite ? (
                <i className="fa-solid fa-bookmark"
                style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                ></i>
                
              ) : (
                
                <i className="fa-solid fa-bookmark"
                  style={{ fontSize: "2rem", color: "#E50914" }}
                ></i>
              )}
            </Button>
          </p>
          <p className="text-gray">
            <strong>Writer :</strong> {movie.Writer}
          </p>
          <p className="text-gray">
            <strong>Actors :</strong> {movie.Actors}
          </p>
          <p className="text-gray">
            <strong>Genre :</strong> {movie.Genre}
            {(movie.Genre || "").split(", ").map((genre, index) => (
              <Genre key={index} genre={genre} />
              
              
            ))}
          </p>
          <p className="text-gray">
            <strong>Language :</strong> {movie.Language}
          </p>
          <p className="text-gray">
            <strong>Countries : </strong>
            {(movie.Country || "").split(", ").map((country, index) => (
              <Flag key={country} country={country} />
            ))}
          </p>
          <p className="text-gray">
            <strong>Released :</strong> {movie.Released}
          </p>
          <p className="text-gray">
            <strong>Runtime :</strong> {movie.Runtime}
          </p>
          <p className="text-gray votes">
            <strong>IMDb Votes :</strong> {movie.imdbRating} ({movie.imdbVotes}{" "}
            votes)
          </p>

          <p className="text-gray plot">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};
