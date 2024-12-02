// import "../Home/Home.css";
// import Card from "../../components/Card/Card";

// const Home = () => {
//   const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24
//   const today = new Date(); // Date actuelle
//   const currentDay = today.getDate(); // Numéro du jour actuel

//   return (
//     <main>
//       <audio src="/christmas-spirit.mp3" autoPlay loop id="background-audio" />
//       <div className="snow"></div>
//       <div className="snowbis"></div>
//       <div className="content">
//         <h1>Calendrier de l&rsquo;Avent 2024</h1>
//         <ul>
//           {days.map((day) => (
//             <Card
//               key={day}
//               day={day}
//               link={`/day/${day}`}
//               isActive={day <= currentDay} // Active si le jour est atteint
//             />
//           ))}
//         </ul>
//       </div>
//     </main>
//   );
// };

// export default Home;


import { useState, useRef } from "react";
import "../Home/Home.css";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal"; // Import du composant Modal

const Home = () => {
  const [showModal, setShowModal] = useState(true); // État pour afficher/masquer la modale
  const audioRef = useRef(null); // Référence pour contrôler l'audio
  const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24
  const today = new Date(); // Date actuelle
  const currentDay = today.getDate(); // Numéro du jour actuel

  const handleStart = () => {
    setShowModal(false); // Ferme la modale
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
        {/* Audio contrôlé par useRef */}
        <audio
          ref={audioRef}
          src="/christmas-spirit.mp3"
          loop
          id="background-audio"
        />
        <div className="snow"></div>
        <div className="snowbis"></div>
        <div className="content">
          <h1>Calendrier de l&rsquo;Avent 2024</h1>
          <ul>
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
