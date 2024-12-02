import "../Home/Home.css";
import Card from "../../components/Card/Card";

const Home = () => {
  const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24
  const today = new Date(); // Date actuelle
  const currentDay = today.getDate(); // Numéro du jour actuel

  return (
    <main>
      <audio src="/jingle-bells-bells.mp3" autoPlay loop />
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
  );
};

export default Home;
