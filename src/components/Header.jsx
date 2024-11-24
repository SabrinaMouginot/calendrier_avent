import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Calendrier de l’Avent</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Noel">Père Noël</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
