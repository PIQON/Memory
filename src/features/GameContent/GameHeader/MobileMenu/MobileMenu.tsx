import { useSelector, useDispatch } from 'react-redux';

import { Fragment } from 'react';
import { Modal } from '../../../UI/Modal/Modal';
import { Button } from '../../../UI/Button/Button';

import { useGameContext } from '../../GameContext/useGameContext';
import { RouterLink } from '../../../UI/RouterLink/RouterLink';

import style from './MobileMenu.module.scss';
import { RootState } from '../../../../store/store';
import { closeModal, openModal } from '../../../../store/slices/modalSlice';

export const MobileMenu = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const { resetGame } = useGameContext();

  return (
    <Fragment>
      <Button
        type="button"
        classNames={['btn', 'btn--settings', 'btn--primary']}
        aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
        aria-expanded={isOpen}
        onClick={() => dispatch(openModal())}
      >
        Menu
      </Button>
      {isOpen && (
        <Modal>
          <div className={style['menu']}>
            <ul className={style['menu__list']}>
              <li className={style['menu__item']}>
                <Button
                  type="button"
                  classNames={['btn', 'btn--settings', 'btn--primary']}
                  onClick={() => {
                    resetGame();
                    dispatch(closeModal());
                  }}
                >
                  Restart
                </Button>
              </li>
              <li className={style['menu__item']}>
                <RouterLink
                  path="/"
                  title="New Game"
                  onClick={() => {
                    resetGame();
                    dispatch(closeModal());
                  }}
                />
              </li>
              <li className={style['menu__item']}>
                <Button
                  type="button"
                  classNames={['btn', 'btn--settings']}
                  onClick={() => dispatch(closeModal())}
                >
                  Resume Game
                </Button>
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
