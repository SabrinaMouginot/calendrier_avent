import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/Home/Home.css";
import Loader from "./Loader/Loader";

const API_KEY = "2a80c2b2275b613fff8c798b3ffcfdfa";

// Liste des films (ID TMDb)
const movies = [
  27205, 597, 19995, 8587, 671, 120, 329, 603, 278, 238, 157336, 13, 11, 105,
  98, 313369, 299534, 634649, 284054, 10740, 862, 354912, 194, 18,
];

// Remplacement spécifique pour le 2e volet (dont j'ai observé que la vidéo était indisponible)
const replacementMovieId = 299534; // ID TMDb d'un autre film (par exemple, Avengers: Endgame)

const Day = () => {
  const { id } = useParams(); // Récupère l'ID du jour (1 à 24)
  const [movie, setMovie] = useState(null); // État pour stocker les données du film

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Si c'est le 2e volet, on utilise un film de remplacement
        const movieId = id === "2" ? replacementMovieId : movies[id - 1];

        // Récupérer les détails du film
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`
        );

        // Récupérer les vidéos associées au film
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );

        // Filtrer les trailers YouTube
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
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <main>
      {/* Ajout des couches de neige */}
      <div className="snow"></div>
      <div className="snowbis"></div>

      {/* Contenu spécifique à Day */}
      <div className="content">
        <h1>{movie.title}</h1>
        {movie.trailer ? (
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="Bande-Annonce"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ margin: "20px 0" }}
          ></iframe>
        ) : (
          <p>Aucune bande-annonce disponible</p>
        )}
      </div>
    </main>
  );
};

export default Day;
