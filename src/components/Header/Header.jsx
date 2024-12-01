// import { NavLink } from "react-router-dom";
// import "../Header/Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Calendrier de l’Avent</h1>
//       <nav>
//         <ul className="nav-links">
//           {/* Onglet Home */}
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//             >
//               Home
//             </NavLink>
//           </li>

//           {/* Onglet Père Noël */}
//           <li>
//             <NavLink
//               to="/Noel"
//               className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//             >
//               Père Noël
//             </NavLink>
//           </li>

//           {/* Onglet À propos avec menu déroulant */}
//           <li className="dropdown">
//             <NavLink
//               to="/About"
//               className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//             >
//               À propos
//             </NavLink>
//             <ul className="dropdown-menu">
//               <li>
//                 <a href="/About">Le projet</a>
//               </li>
//               <li>
//                 <a href="#features">Fonctionnalités</a>
//               </li>
//               <li>
//                 <a href="#technologies">Technologies</a>
//               </li>
//               <li>
//                 <a href="#about-me">À propos de moi</a>
//               </li>
//               <li>
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

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
