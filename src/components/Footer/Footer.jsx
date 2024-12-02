import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
      <p className="ccopyright">© 2024 - Calendrier de l’Avent <span className="droits">- Tous droits réservés -</span></p>
      <p className="conception">
        Conçu avec <span className="heart-circle">❤️</span> pour les fêtes  
      </p>


      <div className="social-links">
      {/* <a href="/about">À propos</a> */}
        <a href="https://www.linkedin.com/in/sabrinamouginot/" target="_blank" rel="noreferrer">
          <img src="../../../public/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/SabrinaMouginot?tab=repositories" target="_blank" rel="noreferrer">
          <img src="../../../public/github.png" alt="Github" />
        </a>
        <a href="mailto:s.mouginot@yahoo.fr" className="contact-link">
          <img src="../../../public/yahoo.png" alt="Mail" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
