import "../pages/About.css";

const About = () => {
  return (
    <main >
              <div className="snow"></div>
              <div className="snowbis"></div>
    {/* <div className="about-container"> */}
      <h1>À propos</h1>

      <section id="project">
        <h2>Le projet</h2>
        <p>Le Calendrier de l&rsquo;Avent est une application interactive pour célébrer les fêtes de fin d&rsquo;année.</p>
      </section>

      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Un calendrier interactif avec 24 surprises.</li>
          <li>Des animations festives et un design de Noël.</li>
        </ul>
      </section>

      <section id="technologies">
        <h2>Technologies</h2>
        <p>Ce projet utilise React.js, React Router, et l&rsquo;API TMDb.</p>
      </section>

      <section id="about-me">
        <h2>À propos de moi</h2>
        <p>Je m&rsquo;appelle Sabrina. Je suis développeur web.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Pour toute question ou suggestion, contactez-moi : <a href="mailto:s.mouginot@yahoo.fr">s.mouginot@yahoo.fr</a>.</p>
      </section>
    {/* </div> */}
    </main >
  );
};

export default About;
