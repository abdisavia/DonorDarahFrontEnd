import React from "react";
import Modal from "react-modal";

const MyModal = ({ isOpen, onClose, errorMessage }) => {
  const modalStyle = {
    content: {
      width: "300px",
      height:"10rem", // Sesuaikan dengan lebar yang Anda inginkan
      margin: "auto", // Tengahkan modal
      borderRadius: "8px", // Atur sudut melengkung
      padding: "20px", // Atur ruang dalam modal
      display: 'flex',
      flexDirection: 'column', // Tampilkan elemen dalam kolom
      alignItems: 'center', // Tengahkan elemen secara horizontal
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
      <button className="flex items-center"
        onClick={onClose}
        style={{
          margin:"auto",
          padding: "8px 16px ",
          backgroundColor: "red",
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
