import "../Loader/Loader.css";
import PropTypes from "prop-types";

const Loader = ({ message }) => {
  return (
    <div className="snowflake-loader">
      <h2 className="patienter">{message || "Veuillez patienter..."}</h2>
      <div className="snowflake">❅</div>
    </div>
  );
};

// Validation des props
Loader.propTypes = {
  message: PropTypes.string, // 'message' doit être une chaîne
};

export default Loader;
