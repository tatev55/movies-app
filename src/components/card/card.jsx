import Button from "../button/button";
import "./card.css"

export const Card = ({ data, onCardClick }) => { 

  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();
    window.open(`https://www.imdb.com/title/${imdbID}`, " ");
  };

  
  return (
    <div className="card-container">
      {data.map((movie) => {
        return (
           <div key={movie.imdbID} onClick={() => onCardClick(movie)} className="card">
             <img className="img-poster" src={movie.Poster} alt={movie.Title} />
             <div className="movie-description">
                <h2 className="title-movie"><strong>Title : </strong>{movie.Title}</h2>
                <p><strong>Year : </strong>{movie.Year}</p>
                <p><strong>Type : </strong>{movie.Type}</p>
                <div>
                  <Button
                    className="watch-btn btn"
                    onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}>
                    Watch on IMDB
                  </Button>
              </div>
             </div>
           </div>
        );
      })}
    </div>
  );
};

export default Card;