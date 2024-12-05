import { useState, useEffect, useRef } from "react";
import "../Home/Home.css";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal"; // Import du composant Modal

const Home = () => {
  const [showModal, setShowModal] = useState(false); // État pour afficher/masquer la modale
  const audioRef = useRef(null); // Référence pour contrôler l'audio
  const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24
  const today = new Date(); // Date actuelle
  const currentDay = today.getDate(); // Numéro du jour actuel

  useEffect(() => {
    const isRefresh = performance.getEntriesByType("navigation")[0].type === "reload"; // Vérifie si c'est un refresh
    if (isRefresh) {
      // Si c'est un refresh, on réinitialise la clé pour forcer la modale
      sessionStorage.removeItem("modalSeen");
    }

    const modalSeen = sessionStorage.getItem("modalSeen"); // Vérifie si la modale a déjà été vue
    if (!modalSeen) {
      setShowModal(true); // Affiche la modale si elle n'a pas été vue
    } else {
      // Si la modale a déjà été vue, démarre directement la musique
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Lecture audio bloquée :", err);
        });
      }
    }
  }, []); // Ne s'exécute qu'au premier montage

  const handleStart = () => {
    setShowModal(false); // Ferme la modale
    sessionStorage.setItem("modalSeen", "true"); // Marque la modale comme vue
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Lecture audio bloquée :", err);
      });
    }
  };

  return (
    <>
      {showModal && <Modal onClose={handleStart} />} {/* Passe la fonction correcte */}
      <main>
        <audio
          ref={audioRef}
          src="/christmas-spirit.mp3"
          loop
          id="background-audio"
        />
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
                isActive={day <= currentDay} // Active si le jour est atteint
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
