import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ current, total }) => {
  return (
    <div className="counter">
      <p>
        {current}/{total}
      </p>
    </div>
  );
};

// Validation des props
Counter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
