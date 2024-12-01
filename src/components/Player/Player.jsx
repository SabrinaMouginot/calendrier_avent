import PropTypes from "prop-types";
import "./Player.css";

const Player = ({ movie, currentIndex, total, onPrevious, onNext }) => {
  return (
    <div className="player-container">
      <h1>{movie.title}</h1>
      <div className="carousel-container">
        <button onClick={onPrevious} className="carousel-arrow prev">
          ◀
        </button>
        {movie.trailer ? (
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="Bande-Annonce"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Aucune bande-annonce disponible</p>
        )}
        <button onClick={onNext} className="carousel-arrow next">
          ▶
        </button>
      </div>
      <div className="counter">
        <p>
          {currentIndex + 1}/{total}
        </p>
      </div>
    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    trailer: PropTypes.string,
  }).isRequired,
  currentIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Player;
