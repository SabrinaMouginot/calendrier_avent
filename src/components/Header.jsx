import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Calendrier de l’Avent</h1>
      <nav>
        <ul className="nav-links">
          {/* Ajoutez vos onglets ici si nécessaire */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Noel">Père Noël</a>
          </li>
          {/* Ajoutez d'autres liens ici quand vous décidez */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
