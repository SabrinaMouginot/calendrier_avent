import "../About/About.css";

const About = () => {
  return (
    <main className="main" >
      <div className="snow"></div>
      <div className="snowbis"></div>
      <div className="about-page">
        <h1 className="title">À propos</h1>
        <div className="about-container">
          <section id="project">
            <div className="project">
              <h2>Le projet</h2>
              <p>
                Le Calendrier de l&rsquo;Avent est une application interactive pour célébrer les fêtes de fin d&rsquo;année. </p>
              <p>Derrière chaque volet, découvre le trailer d&apos;un film et une idée de film à regarder en attendant Noël.
              </p> <p>L&rsquo;idée est née d&rsquo;une recherche de nom pour un personnage dans un jeu vidéo.
                Le nom inventé m&rsquo;a évoqué un lutin espiègle, et avec l&rsquo;approche des fêtes de Noël,
                j&rsquo;ai eu l&rsquo;inspiration de coder ce calendrier de l&rsquo;Avent.
              </p>
            </div>

            <div className="features">
              <h2>Fonctionnalités</h2>
              <p>Un calendrier interactif avec 24 surprises.</p>
              <p>Des animations festives et un design de Noël.</p>
            </div>

            <div className="technologies">
              <h2>Technologies</h2>
              <p>Ce projet est intialisé avec Vite et utilise React.js, React Router, et l&rsquo;API TMDb.</p>
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
          </section>
        </div>
      </div>
    </main >
  );
};

export default About;
