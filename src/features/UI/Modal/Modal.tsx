import { useDispatch } from 'react-redux';
import { closeModal } from '../../../store/slices/modal/modalSlice';
import { createPortal } from 'react-dom';
import { ChildrenRoot } from '../../../types/shared';
import FocusTrap from 'focus-trap-react';

import style from './Modal.module.scss';

export const Modal = ({ children }: ChildrenRoot) => {
  const dispatch = useDispatch();

  return createPortal(
    <FocusTrap>
      <div className={style['modal']}>
        <div
          className={style['modal__overlay']}
          onClick={() => dispatch(closeModal())}
        ></div>
        <div className={style['modal__content']}>{children}</div>
      </div>
    </FocusTrap>,
    document.querySelector('#modal-container') as HTMLDivElement
  );
};
