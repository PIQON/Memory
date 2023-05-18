import { useContextWithoutNull } from '../../hooks/useContextWithoutNull';
import { ModalContext } from './modalContext';

export const useModalContext = () => {
  const modalContext = useContextWithoutNull(ModalContext);
  return modalContext;
};
