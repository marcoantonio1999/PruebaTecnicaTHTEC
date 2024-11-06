import React from "react";
import Modal from "react-modal";
import "../../styles/modal.css";
import PropTypes from "prop-types";


Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, header,body}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={header}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>{header}</h2>
      <p>{body}</p>
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
};


CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  header: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
};

export default CustomModal;
