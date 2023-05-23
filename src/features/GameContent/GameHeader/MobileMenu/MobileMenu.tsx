import { Fragment } from 'react';
import { useModalContext } from '../../../../store/modal/useModalContext';
import { Modal } from '../../../UI/Modal/Modal';
import { Button } from '../../../UI/Button/Button';

import { useGameContext } from '../../GameContext/useGameContext';
import { RouterLink } from '../../../UI/RouterLink/RouterLink';

import style from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const { isOpen, openModal, closeModal } = useModalContext();
  const { resetGame } = useGameContext();

  return (
    <Fragment>
      <Button
        type="button"
        classNames={['btn', 'btn--settings', 'btn--primary']}
        aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
        aria-expanded={isOpen}
        onClick={openModal}
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
                    closeModal();
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
                    closeModal();
                  }}
                />
              </li>
              <li className={style['menu__item']}>
                <Button
                  type="button"
                  classNames={['btn', 'btn--settings']}
                  onClick={closeModal}
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
