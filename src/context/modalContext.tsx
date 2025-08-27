import { createContext, useContext, useState } from "react";

const ModalContext = createContext<{
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}>({
  showModal: false,
  setShowModal: () => { },
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);