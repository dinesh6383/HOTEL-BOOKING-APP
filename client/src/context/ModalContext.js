import { createContext, useState } from "react";

export const Modal = createContext();

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState("");
  return (
    <Modal.Provider value={{ showModal, setShowModal }}>
      {children}
    </Modal.Provider>
  );
};
