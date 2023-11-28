import React from "react";
import Modal from "react-modal";

const MyModal = ({ isOpen, onClose, errorMessage }) => {
  const modalStyle = {
    content: {
      width: "300px", // Sesuaikan dengan lebar yang Anda inginkan
      margin: "auto", // Tengahkan modal
      borderRadius: "8px", // Atur sudut melengkung
      padding: "20px", // Atur ruang dalam modal
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur latar belakang overlay
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle}
      contentLabel="Error Modal"
    >
      <h2 style={{ marginBottom: "10px" }}>Error!</h2>
      <p>{errorMessage}</p>
      <button
        onClick={onClose}
        style={{
          padding: "8px 16px",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default MyModal;
