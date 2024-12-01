import "../About/About.css";

const About = () => {
  return (
    <main className="main" >
      <div className="snow"></div>
      <div className="snowbis"></div>

        <h1 className="title">À propos</h1>
        <div className="about-container">
        <section id="project">
          <div className="project">
            <h2>Le projet</h2>
            <p>Le Calendrier de l&rsquo;Avent est une application interactive pour célébrer les fêtes de fin d&rsquo;année.</p>
          </div>


          <div className="features">
            <h2>Fonctionnalités</h2>
            <ul>
              <li>Un calendrier interactif avec 24 surprises.</li>
              <li>Des animations festives et un design de Noël.</li>
            </ul>
          </div>

          <div className="technologies">
            <h2>Technologies</h2>
            <p>Ce projet utilise React.js, React Router, et l&rsquo;API TMDb.</p>
          </div>
        </section>

        <section id="about-me">
          <div className="about-me">
            <h2>À propos de moi</h2>
            <div>
            <p>Je m&rsquo;appelle Sabrina. Je suis développeur concepteur logiciel .</p> 
            <p>Je suis spécialisée sur le frontend et mes outils de prédilection sont JavaScript et son framework React.js .</p>
            </div>
            <div>
            <p>J&rsquo;ai découvert la programmation en 2008 lors d&rsquo;un cours d&rsquo;informatique de gestion contenu dans le programme de mon parcours de comptabilité . </p>
            <p> Lorsque la pandémie du covid s&rsquo;est déclaré, j&rsquo;étais en licence d&rsquo;allemand à l&rsquo;université de Strasbourg. </p> 
            <p> Devant les confinements qui ont fermé à peu près toutes les entreprises et les frontières, j&rsquo;ai décidé d&rsquo;aller en master dans la continuité de ma licence en attendant que la situation se calme. Mais l&rsquo;ennui a pointé son nez. J&rsquo;ai su me distraire à nouveau avec la programmation avec les ateliers du centre numérique de l&rsquo;université. </p>
            </div>
            <div>
            <p> Ces ateliers m&rsquo;ont donnés le goût d&rsquo;approfondir mes compétences . Depuis, je n&rsquo;ai cessé d&rsquo;apprendre dans ce domaine. J&rsquo;ai obtenu un Bac+2 puis un Bac+3/4 , effectué un stage de deux mois en Belgique, et je me suis lancée dans de nombreux projets personnels. </p>
            </div>
          </div>

          <div className="contact">
            <h2>Contact</h2>
            <p>Pour toute question ou suggestion, contactez-moi : <a href="mailto:s.mouginot@yahoo.fr">s.mouginot@yahoo.fr</a>.</p>
          </div>
        </section>
      </div>
    </main >
  );
};

export default About;
