// import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez n&rsquo;existe pas.</p>
      {/* <Link to="/" className="home-link">
        Retour à l'accueil
      </Link> */}
    </div>
  );
};

export default NotFound;
