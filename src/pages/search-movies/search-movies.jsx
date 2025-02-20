import { useContext, useReducer, useEffect, useRef } from "react";
import { Card } from "../../components/card/card";
import { Modal } from "../../components/modal/modal";
import { omdbApi } from "../../api/movie.api";
import { MovieDetails } from "./movie-details/movie-details";
import { MoviesContext } from "../../contexts/movies-context";
import { APP_TITLE } from "../../utils/constant";
import Pagination from "../../components/pagination/pagination";
import { getAppTitleByMovie } from "../../utils/helpers";
import { Loading } from "../../components/loading/loading";

const initialState = {
  data: [],
  open: false,
  selectedMovie: null,
  currentPage: 1,
  totalPages: 1,
  loading: false
};

const searchMovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": 
      return { 
        ...state, 
        data: action.payload.data, 
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case "SET_MODAL_OPEN": 
      return { ...state, open: action.payload };
    case "SET_SELECTED_MOVIE": 
      return {
        ...state,
        open: action.payload.open,
        selectedMovie: action.payload.selectedMovie,
      };
    case "SET_PAGE": 
      return { 
        ...state, 
        currentPage: action.payload 
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true, 
      };
    default:
      return state;
  }
};

export const SearchMovies = () => {
  const { searchQuery } = useContext(MoviesContext);
  
  const [state, dispatch] = useReducer(searchMovieReducer, initialState);
  const timeoutIdRef = useRef(null);

  const fetchMovies = async (page = state.currentPage) => {
    dispatch({ type: "SET_LOADING" });
    const response = await omdbApi.fetchMoviesBySearch(searchQuery || "", page)

    if (response.success) {
      const totalPages = Math.ceil(response.data.totalResults / 10);
      dispatch({ 
        type: "SET_DATA", 
        payload: {
          data: response.data.Search || [],
          totalPages: totalPages
        }
      });
    }
  };


  useEffect(() => {
    clearTimeout(timeoutIdRef.current);

    const toId = setTimeout(() => {
      fetchMovies();
    }, 1000);

    timeoutIdRef.current = toId;
  }, [searchQuery]);

  const handleCardClick = (movie) => {
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        open: true,
        selectedMovie: movie,
      },
    });

    document.title = getAppTitleByMovie(movie.Title, movie.Year);

    window.history.pushState(
      null,
      "",
      `?movieId=${movie.imdbID}&title=${movie.Title}&year=${movie.Year}`
    );
  };

  const handleCloseModal = () => {
    dispatch({
      type: "SET_MODAL_OPEN",
      payload: false,
    });
    window.history.pushState("", "", "/");
    document.title = APP_TITLE;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= state.totalPages) {
      dispatch({ type: "SET_PAGE", payload: page });
      fetchMovies(page);
    }
  };

  return (
    <div className="search-movies-container">
      {state.loading? (
        <Loading/>
      ):(
        <>
        <Card data={state.data} onCardClick={handleCardClick} />
      <Modal
        open={state.open}
        onClose={handleCloseModal}
        title={getAppTitleByMovie(state.selectedMovie?.Title, state.selectedMovie?.Year)}
      >
        <MovieDetails id={state.selectedMovie?.imdbID} />
      </Modal>

      <Pagination
        currentPage={state.currentPage}
        totalPages={state.totalPages}
        onPageChange={handlePageChange}
      />
        </>
      )}
      
    </div>
  );
};
