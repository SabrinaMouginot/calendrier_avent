import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ day, link, isActive }) => {
  return (
    <li className={`card ${isActive ? "active" : "inactive"}`}>
      {isActive ? (
        <a href={link} className="card-link">
          Jour {day}
        </a>
      ) : (
        <span className="card-link disabled">Jour {day}</span>
      )}
    </li>
  );
};

Card.propTypes = {
  day: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Card;
