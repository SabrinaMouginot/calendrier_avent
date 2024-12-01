import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ day, link }) => {
  return (
    <li className="card">
      <a href={link} className="card-link">
        Jour {day}
      </a>
    </li>
  );
};

// Validation des props
Card.propTypes = {
    day: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  };

export default Card;
