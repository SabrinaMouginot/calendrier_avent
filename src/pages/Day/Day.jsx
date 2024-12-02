import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Home/Home";
import Loader from "../../components/Loader/Loader";
import Player from "../../components/Player/Player";
import "./Day.css";

const API_KEY = "2a80c2b2275b613fff8c798b3ffcfdfa";

// Liste des films (ID TMDb)
const movies = [
  27205, 597, 19995, 8587, 671, 120, 329, 603, 278, 238, 157336, 13, 11, 105,
  98, 313369, 299534, 634649, 284054, 10740, 862, 354912, 194, 18,
];

// Remplacement spécifique pour le 2e volet
const replacementMovieId = 299534;

// Messages humoristiques
const humorousMessages = [
  "La patience est une vertu... même pour un lutin !",
  "Pas si vite, ce volet est verrouillé jusqu'à demain. 🎅",
  "Le Père Noël dit : revenez demain pour votre surprise !",
  "Encore un peu de patience, Noël approche... un jour à la fois !",
  "Notre lutin travaille sur la vidéo. Revenez demain !",
  "Ho ho ho, la magie de Noël prend du temps. Revenez plus tard !",
];

const Day = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(Number(id) - 1);
  const [movie, setMovie] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // État pour le message
  const [message, setMessage] = useState(""); // Message humoristique
  const today = new Date(); // Date actuelle
  const currentDay = today.getDate(); // Numéro du jour actuel

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieId = currentIndex === 1 ? replacementMovieId : movies[currentIndex];

        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`
        );

        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );

        const trailer = videoResponse.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setMovie({
          title: movieResponse.data.title,
          trailer: trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null,
        });
      } catch (error) {
        console.error("Erreur lors de la récupération du film :", error);
      }
    };

    fetchMovie();
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + 1 < currentDay) {
      const nextIndex = (currentIndex + 1) % movies.length;
      setCurrentIndex(nextIndex);
      navigate(`/day/${nextIndex + 1}`);
      setShowMessage(false); // Cacher le message si l'accès est permis
    } else {
      const randomMessage =
        humorousMessages[Math.floor(Math.random() * humorousMessages.length)];
      setMessage(randomMessage); // Sélectionner un message humoristique aléatoire
      setShowMessage(true); // Afficher le message si l'accès est bloqué
      setTimeout(() => setShowMessage(false), 3000); // Masquer le message après 3 secondes
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = (currentIndex - 1 + movies.length) % movies.length;
      setCurrentIndex(prevIndex);
      navigate(`/day/${prevIndex + 1}`);
      setShowMessage(false); // Cacher le message pour Previous
    }
  };

  if (!movie) {
    return <Loader />;
  }

  return (
    <main>
      <div className="snow"></div>
      <div className="snowbis"></div>
      <Player
        movie={movie}
        currentIndex={currentIndex}
        total={movies.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      {showMessage && (
        <div className="navigation-info">
          <p>{message}</p>
        </div>
      )}
    </main>
  );
};

export default Day;
