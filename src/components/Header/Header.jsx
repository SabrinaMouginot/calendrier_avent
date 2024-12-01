import { useState } from "react";
import "../Header/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>Calendrier de l&rsquo;Avent</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={() => setIsMenuOpen(false)}>Accueil</a>
          </li>
          <li>
            <a href="/Noel" onClick={() => setIsMenuOpen(false)}>Père Noël</a>
          </li>
          <li>
            <a href="/About" onClick={() => setIsMenuOpen(false)}>À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
