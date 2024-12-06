// import { useState, useEffect, useRef } from "react";
// import "../Home/Home.css";
// import Card from "../../components/Card/Card";
// import Modal from "../../components/Modal/Modal"; // Import du composant Modal

// const Home = () => {
//   const [showModal, setShowModal] = useState(false); // État pour afficher/masquer la modale
//   const audioRef = useRef(null); // Référence pour contrôler l'audio
//   const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24
//   const today = new Date(); // Date actuelle
//   const currentDay = today.getDate(); // Numéro du jour actuel

//   useEffect(() => {
//     const isRefresh = performance.getEntriesByType("navigation")[0].type === "reload"; // Vérifie si c'est un refresh
//     if (isRefresh) {
//       // Si c'est un refresh, on réinitialise la clé pour forcer la modale
//       sessionStorage.removeItem("modalSeen");
//     }

//     const modalSeen = sessionStorage.getItem("modalSeen"); // Vérifie si la modale a déjà été vue
//     if (!modalSeen) {
//       setShowModal(true); // Affiche la modale si elle n'a pas été vue
//     } else {
//       // Si la modale a déjà été vue, démarre directement la musique
//       if (audioRef.current) {
//         audioRef.current.play().catch((err) => {
//           console.warn("Lecture audio bloquée :", err);
//         });
//       }
//     }
//   }, []); // Ne s'exécute qu'au premier montage

//   const handleStart = () => {
//     setShowModal(false); // Ferme la modale
//     sessionStorage.setItem("modalSeen", "true"); // Marque la modale comme vue
//     if (audioRef.current) {
//       audioRef.current.play().catch((err) => {
//         console.warn("Lecture audio bloquée :", err);
//       });
//     }
//   };

//   return (
//     <>
//       {showModal && <Modal onClose={handleStart} />} {/* Passe la fonction correcte */}
//       <main>
//         <audio
//           ref={audioRef}
//           src="/christmas-spirit.mp3"
//           loop
//           id="background-audio"
//         />
//         <div className="snow"></div>
//         <div className="snowbis"></div>
//         <div className="content">
//           <h1 className="title">Calendrier de l&rsquo;Avent 2024</h1>
//           <ul className="days">
//             {days.map((day) => (
//               <Card
//                 key={day}
//                 day={day}
//                 link={`/day/${day}`}
//                 isActive={day <= currentDay} // Active si le jour est atteint
//               />
//             ))}
//           </ul>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Home;


import { useState, useEffect, useRef } from "react";
import "../Home/Home.css";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import speakerIcon from "../../assets/speaker-icon.png"; // Remplacez par une icône claire si nécessaire

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Volume initial
  const audioRef = useRef(null);
  const days = Array.from({ length: 24 }, (_, i) => i + 1);
  const today = new Date();
  const currentDay = today.getDate();

  useEffect(() => {
    const isRefresh =
      performance.getEntriesByType("navigation")[0].type === "reload";
    if (isRefresh) {
      sessionStorage.removeItem("modalSeen");
    }

    const modalSeen = sessionStorage.getItem("modalSeen");
    if (!modalSeen) {
      setShowModal(true);
    } else {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Lecture audio bloquée :", err);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleStart = () => {
    setShowModal(false);
    sessionStorage.setItem("modalSeen", "true");
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Lecture audio bloquée :", err);
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {showModal && <Modal onClose={handleStart} />}
      <main>
        <audio
          ref={audioRef}
          src="/christmas-spirit.mp3"
          loop
          muted={isMuted}
          id="background-audio"
        />
        <div className="audio-controls">
          <img
            src={speakerIcon}
            alt="Haut-parleur"
            onClick={toggleMute}
            className={`speaker-icon ${isMuted ? "muted" : ""}`}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            aria-label="Volume Control"
          />
        </div>
        <div className="snow"></div>
        <div className="snowbis"></div>
        <div className="content">
          <h1 className="title">Calendrier de l&rsquo;Avent 2024</h1>
          <ul className="days">
            {days.map((day) => (
              <Card
                key={day}
                day={day}
                link={`/day/${day}`}
                isActive={day <= currentDay}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
