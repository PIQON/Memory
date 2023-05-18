import { createContext, useState } from 'react';
import { ChildrenRoot } from '../types/shared';

type ModalContextData = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextData | null>(null);

export const ModalContextProvider = ({ children }: ChildrenRoot) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
