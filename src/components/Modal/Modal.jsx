import "./Modal.css";
import PropTypes from "prop-types";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>
          🎅 Les lutins sont au travail ! Noël approche à grands pas ! <br />
          En attendant, profite du calendrier de l&rsquo;Avent pour te divertir chaque
          jour. 🎄
        </p>
        <button onClick={onClose} className="modal-button">
          🎄 C&rsquo;est parti ! 🎄
        </button>
      </div>
    </div>
  );
};

// Ajout de la validation des props
Modal.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose doit être une fonction et est obligatoire
  };

export default Modal;
