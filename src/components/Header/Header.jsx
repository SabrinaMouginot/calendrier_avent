// import "../Header/Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Calendrier de l’Avent</h1>
//       <nav>
//         <ul className="nav-links">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/Noel">Père Noël</a>
//           </li>

//           <li className="dropdown">
//             <a href="/About">À propos</a>
//             <ul className="dropdown-menu">
//               <li>
//                 <a href="/About">Le projet</a>
//                 {/* <a href="#project">Le projet</a> */}
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

import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Calendrier de l’Avent</h1>
      <nav>
        <ul className="nav-links">
          {/* Onglet Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Home
            </NavLink>
          </li>

          {/* Onglet Père Noël */}
          <li>
            <NavLink
              to="/Noel"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Père Noël
            </NavLink>
          </li>

          {/* Onglet À propos avec menu déroulant */}
          <li className="dropdown">
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              À propos
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <a href="/About">Le projet</a>
              </li>
              <li>
                <a href="#features">Fonctionnalités</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
              <li>
                <a href="#about-me">À propos de moi</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
