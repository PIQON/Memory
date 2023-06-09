import { useSelector, useDispatch } from 'react-redux';

import { Fragment } from 'react';
import { Modal } from '../../../UI/Modal/Modal';
import { Button } from '../../../UI/Button/Button';

import { RouterLink } from '../../../UI/RouterLink/RouterLink';

import style from './MobileMenu.module.scss';
import { RootState } from '../../../../store/store';
import {
  closeModal,
  openModal,
} from '../../../../store/slices/modal/modalSlice';
import {
  generatePlayersStatistics,
  resetGame,
} from '../../../../store/slices/game/gameSlice';

export const MobileMenu = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

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
                    dispatch(closeModal());
                    dispatch(resetGame());
                    dispatch(generatePlayersStatistics());
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
