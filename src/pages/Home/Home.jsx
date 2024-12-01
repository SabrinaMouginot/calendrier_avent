import "../Home/Home.css";
import Card from "../../components/Card/Card";

const Home = () => {
  const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24

  return (
    <main >
      <div className="snow"></div>
      <div className="snowbis"></div>
      <div className="content">
        <h1>Calendrier de l&rsquo;Avent 2024</h1>
        <ul>
          {days.map((day) => (
            <li key={day}>
              <Card key={day} day={day} link={`/day/${day}`} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;

