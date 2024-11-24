import "./Home.css";

const Home = () => {
  const days = Array.from({ length: 24 }, (_, i) => i + 1); // 1 à 24

  return (
    <main >
      <div className="snow"></div>
      <div className="snowbis"></div>
      <div className="content">
        <h1>Calendrier de l&rsquo;Avent</h1>
        <ul>
          {days.map((day) => (
            <li key={day}>
              <a href={`/day/${day}`}>Jour {day}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;

