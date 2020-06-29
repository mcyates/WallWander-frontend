import React, { useEffect } from "react";
import Modal from "react-modal";

const BaseModal = (props) => {
  const { buttonText, buttonStyle, contentLabel, canCancel } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement("#root");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (props.visible !== null && props.visible === true) {
      setIsOpen(true);
    } else if (props.visible !== null && props.visible === false) {
      setIsOpen(false);
    }
  }, [props.visible]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <button className={`${buttonStyle}`} onClick={openModal}>
        {buttonText}
      </button>
      <Modal
        contentLabel={contentLabel}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {props.children}
        {canCancel ? (
          <button className="button-modal" onClick={closeModal}>
            Cancel
          </button>
        ) : (
          <React.Fragment />
        )}
      </Modal>
    </>
  );
};

export default BaseModal;
