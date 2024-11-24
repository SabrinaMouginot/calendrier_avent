// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";


// const API_KEY = "2a80c2b2275b613fff8c798b3ffcfdfa";

// const movies = [
//   27205, 597, 19995, 8587, 671, 120, 329, 603, 278, 238, 157336, 13, 11, 105,
//   98, 313369, 299534, 634649, 284054, 10740, 862, 354912, 194, 18,
// ];

// const Day = () => {
//   const { id } = useParams(); // Récupère l'ID du jour (1 à 24)
//   const [movie, setMovie] = useState(null); // État pour stocker les données du film

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const movieId = movies[id - 1]; // Mappe l'ID du jour à l'ID TMDb
//         const movieResponse = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`
//         );
//         const videoResponse = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
//         );

//         const trailer = videoResponse.data.results.find(
//           (video) => video.type === "Trailer" && video.site === "YouTube"
//         );

//         setMovie({
//           title: movieResponse.data.title,
//           trailer: trailer
//             ? `https://www.youtube.com/embed/${trailer.key}`
//             : null,
//         });
//       } catch (error) {
//         console.error("Erreur lors de la récupération du film :", error);
//       }
//     };

//     fetchMovie();
//   }, [id]);
//   if (!movie) {
//     return <div>Chargement...</div>;
//   }

//   return (

//     <div >
//       <h1>{movie.title}</h1>
//       {movie.trailer ? (
//         <iframe
//           width="560"
//           height="315"
//           src={movie.trailer}
//           title="Bande-Annonce"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           style={{ margin: "20px 0" }}
//         ></iframe>
//       ) : (
//         <p>Aucune bande-annonce disponible</p>
//       )}
//       <div>
//         <Link to="/">Retour au calendrier</Link>
//       </div>
//     </div>
//   );
// };

// export default Day;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Home.css"; // Réutilise le CSS de Home
import Loader from "../components/Loader";

const API_KEY = "2a80c2b2275b613fff8c798b3ffcfdfa";

const movies = [
  27205, 597, 19995, 8587, 671, 120, 329, 603, 278, 238, 157336, 13, 11, 105,
  98, 313369, 299534, 634649, 284054, 10740, 862, 354912, 194, 18,
];

const Day = () => {
  const { id } = useParams(); // Récupère l'ID du jour (1 à 24)
  const [movie, setMovie] = useState(null); // État pour stocker les données du film

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieId = movies[id - 1]; // Mappe l'ID du jour à l'ID TMDb
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
  }, [id]);

  if (!movie) {
    // return <div>Chargement...</div>;
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
        <div>
          <Link to="/">Retour au calendrier</Link>
        </div>
      </div>
    </main>
  );
};

export default Day;
