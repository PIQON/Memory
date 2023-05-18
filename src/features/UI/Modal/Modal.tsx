import { createPortal } from 'react-dom';
import { useModalContext } from '../../../store/modal/useModalContext';
import { ChildrenRoot } from '../../../types/shared';
import FocusTrap from 'focus-trap-react';
import style from './Modal.module.scss';

export const Modal = ({ children }: ChildrenRoot) => {
  const { closeModal } = useModalContext();

  return createPortal(
    <FocusTrap>
      <div className={style['modal']}>
        <div className={style['modal__overlay']} onClick={closeModal}></div>
        <div className={style['modal__content']}>{children}</div>
      </div>
    </FocusTrap>,
    document.querySelector('#modal-container') as HTMLDivElement
  );
};
